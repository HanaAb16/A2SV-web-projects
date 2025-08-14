import { Job } from '@/types/job'
import React, { useState } from 'react'
import { Badge } from './ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { Toggle } from './ui/toggle';
import { Star } from 'lucide-react';
import { BookmarkChecker } from './BookmarkChecker';

interface JobCardProps {
    id?: string
    title: string;
    description?: string;
    responsibilities: string;
    company: string;
    location: string;
    image: string;
    position_type?: string[]
    work_type: string
    eventID: string
    initialIsBookmarked: boolean
}

const JobCard = ({ title, id, description, work_type, position_type, company, location, image, eventID }: JobCardProps) => {
    const getWorkTypeStyles = (type: string) => {
        switch (type.toLowerCase()) {
            case 'inPerson':
                return 'bg-green-500 text-green-600';
            case 'virtual':
                return 'bg-blue-500 text-blue-600';
            default:
                return 'bg-green-100 text-green-600e';
        }
    };

    const getPositionTypeStyles = (type: string) => {
        switch (type.toLowerCase()) {
            case 'it':
                return 'text-purple-600 border-purple-600';
            case 'development':
                return 'text-blue-600 border-blue-600';
            case 'marketing':
                return 'text-emerald-600 border-emerald-600';
            case 'event':
                return 'text-pink-600 border-pink-600';
            case 'design':
                return 'text-orange-600 border-orange-600';
            case 'art':
                return 'text-red-600 border-red-600';
            case 'Education Access and Quality Improvement':
                return 'text-cyan-600 border-cyan-600';
            case 'analytics':
                return 'text-teal-600 border-teal-600';
            case 'customer service':
                return 'text-indigo-600 border-indigo-600';
            case 'volunteer':
                return 'text-lime-600 border-lime-600';
            default:
                return 'text-gray-600 border-gray-600';
        }
    };

    return (
        <div
            data-testid="job-card"
            className="bg-gradient-to-br from-white via-gray-50 to-blue-100 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 border-2 border-blue-300 dark:border-blue-800 rounded-3xl p-8 flex gap-6 items-center shadow-xl dark:shadow-blue-900 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
        >
            <div className="flex flex-col items-center justify-center mr-4">
                <Image
                    unoptimized
                    src={image || "/placeholder.png"}
                    alt={`${company} logo`}
                    className="rounded-xl object-cover border-2 border-blue-200 dark:border-blue-700 shadow-md w-[64px] h-[64px]"
                    width={64}
                    height={64}
                />
            </div>
            <div className="flex-1">
                <div className="mb-3">
                    <div className="flex items-center gap-2">
                        <Link
                            href={`/jobs/${id}`}
                            className="text-2xl flex-1 font-bold text-blue-900 dark:text-blue-200 tracking-tight hover:underline"
                        >
                            {title}
                        </Link>
                        <BookmarkChecker id={id ?? ""} initialIsBookmarked={false} />
                    </div>
                    <p className="text-base font-medium text-blue-700 dark:text-blue-300 mt-1">{company} <span className="mx-1 text-gray-400">•</span> <span className="italic text-blue-500 dark:text-blue-400">{location}</span></p>
                </div>

                <p className="text-md text-gray-800 dark:text-gray-200 mb-5 leading-relaxed">
                    {description ? description : ""}
                </p>

                <div className="flex flex-wrap gap-3 items-center">
                    <Badge
                        variant="outline"
                        className={`text-xs px-3 py-1 rounded-full font-semibold shadow-sm ${getWorkTypeStyles(work_type)} dark:bg-blue-900 dark:text-green-200 dark:border-green-700 bg-opacity-80`}
                    >
                        {work_type}
                    </Badge>
                    {work_type && Array.isArray(position_type) && position_type.length > 0 && <span className="text-lg text-blue-400 dark:text-blue-600 font-bold">|</span>}
                    {position_type?.filter(Boolean).map((r, i) => (
                        <Badge
                            key={i}
                            className={`text-xs px-3 py-1 rounded-full font-semibold shadow-sm${getPositionTypeStyles(r)} dark:border-blue-700 dark:text-orange-200 bg-opacity-80`}
                            variant="outline"
                        >
                            {r}
                        </Badge>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default JobCard



