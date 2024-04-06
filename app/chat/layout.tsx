import React, { ReactNode } from "react";
import { Days_One } from "next/font/google";

const days_one = Days_One({
  weight: "400",
  subsets: ["latin"],
});

export default function layout({ children }: { children: ReactNode }) {
  return <div className={`h-screen w-screen bg-[#EFEFFF] ${days_one.className}`}>{children}</div>;
}
