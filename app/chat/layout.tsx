"use client"
import React, { ReactNode } from "react";
import { Days_One } from "next/font/google";
import { SessionProvider } from "next-auth/react";

const days_one = Days_One({
  weight: "400",
  subsets: ["latin"],
});

export default function layout({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <div className={`h-screen w-screen bg-[#EFEFFF] ${days_one.className}`}>
        {children}
      </div>
    </SessionProvider>
  );
}
