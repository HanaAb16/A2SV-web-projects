"use client";

import { toast } from "sonner";
import { Toggle } from "./ui/toggle";
import { Star } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

type Bookmarked = {
    id: string;
    initialIsBookmarked: boolean;
    // id: string;
};

export function BookmarkChecker({ id, initialIsBookmarked }: Bookmarked) {
    const router = useRouter();
    const [isBookmarked, setIsBookmarked] = useState<boolean>(initialIsBookmarked ?? false)
    const { data: session, status } = useSession()
    useEffect(() => {
        if (status !== "authenticated") return;

        if (typeof initialIsBookmarked === "boolean") return;

        const checkBookmark = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/bookmarks`, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${session?.accessToken}`,
                    },
                });

                const data = await res.json();
                const alreadyBookmarked = data?.data.bookmarks?.some(
                    (bookmark: any) => bookmark.eventID === id
                );

                setIsBookmarked(!!alreadyBookmarked);
            } catch (err) {
                console.error("Error checking bookmark status:", err);
            }
        };

        checkBookmark();
    }, [status, session, initialIsBookmarked]);


    const toggleBookmark = async (id: string) => {

        if (status !== "authenticated") {
            toast("Please sign in before bookmarking a job", {
                description: "Sign in now to bookmark",
                action: {
                    label: "Sign in",
                    onClick: () => router.push("/sign-in"),
                },
            });
            return;
        }
        try {
            const method = isBookmarked ? "DELETE" : "POST"
            console.log("eventID:", id, "isBookmarked:", isBookmarked, "method:", method);
            if (method == "DELETE") {
                console.log("Trying to DELETE bookmark with ID:", id);

            }
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/bookmarks/${id}`,
                {
                    method,
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${session.accessToken}`,
                    },
                    ...(method === "POST" ? { body: JSON.stringify({}) } : {})
                }
            );


            const data = await res.json();
            console.log(data)
            if (res.ok) {
                setIsBookmarked(!isBookmarked)
                toast.success(
                    isBookmarked ?
                        "Bookmark removed"
                        :
                        "Job bookmarked"
                );
            } else if (res.status === 409 && data.message === "Bookmark already exists") {
                // Sync local state to bookmarked if backend says already exists
                setIsBookmarked(true);
                toast("This job is already bookmarked.", {
                    description: "You have already bookmarked this job.",
                });
            } else if (res.status === 404 && data.message === "Bookmark not found") {
                // Sync local state to not bookmarked if backend says not found
                setIsBookmarked(false);
                toast("Bookmark not found.", {
                    description: "This job was not bookmarked.",
                });
            } else {
                toast.error(data.error || data.message || "Bookmarking failed.");
            }

            console.log("Bookmark response:", data);
        } catch (err) {
            toast.error("An error occurred while bookmarking.");
            console.error("Bookmarking error:", err);
        }
    };

    return (
        <Toggle pressed={isBookmarked} onClick={() => toggleBookmark(id)}>
            {isBookmarked ? <Star className="text-yellow-300 fill-amber-300"/> : <Star className="text-gray-500"/>}
            
        </Toggle>
    );
}
