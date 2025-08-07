"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function VerifyEmail() {
  const [code, setCode] = useState("----");
  const inputs = useRef<(HTMLInputElement | null)[]>([]);
  const router = useRouter();

  const email = typeof window !== "undefined" ? localStorage.getItem("pendingEmail") || "" : "";

  useEffect(() => {
    inputs.current[0]?.focus();
  }, []);

  const handleChange = (index: number, value: string) => {
    if (!/^[0-9]?$/.test(value)) return;
    const newCode = code.split("");
    newCode[index] = value;
    setCode(newCode.join(""));
    if (value && inputs.current[index + 1]) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch("https://akil-backend.onrender.com/verify-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, OTP: code }),
      });

      if (res.ok) {
        router.push("/signin");
      } else {
        alert("Invalid code");
      }
    } catch (err) {
      console.error("Error verifying email", err);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Verify Email</h2>
          <p className="text-sm text-gray-600 text-left">
            We&apos;ve sent a verification code to the email address you provided. To complete the verification process, please enter the code here.
          </p>
        </div>
        
        <div className="flex justify-center space-x-2 mb-6">
          {[...Array(4)].map((_, i) => (
            <input
              key={i}
              maxLength={1}
              value={code[i] === "-" ? "" : code[i]}
              onChange={(e) => handleChange(i, e.target.value)}
              ref={(el) => {
                inputs.current[i] = el;
              }}
              className="w-12 h-12 border border-purple-300 text-center rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
          ))}
        </div>
        
        <div className="text-center mb-6">
          <p className="text-sm text-gray-600">
            You can request to{" "}
            <button className="font-bold text-blue-600 hover:text-blue-500">
              Resend code
            </button>{" "}
            in 0:30
          </p>
        </div>
        
        <button 
          onClick={handleSubmit} 
          className="w-full py-3 px-4 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
        >
          Continue
        </button>
      </div>
    </main>
  );
}
