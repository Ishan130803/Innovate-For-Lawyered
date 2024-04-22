"use client";
import React, { ReactNode } from "react";
import { Days_One } from "next/font/google";
import { Card } from "./Card";
import { SelectedConversationContextProvider } from "@/components/hooks/SelectedConversationDataContext";
import { ConversationContextProvider } from "@/components/hooks/ConversationListContext";

const days_one = Days_One({
  weight: "400",
  subsets: ["latin"],
});

export default function layout({ children }: { children: ReactNode }) {
  return (
    <ConversationContextProvider>
      <SelectedConversationContextProvider>
        <div className={`h-screen w-screen bg-[#EFEFFF] ${days_one.className}`}>
          <div className="flex">
            <Card width="250px" />
            {children}
          </div>
        </div>
      </SelectedConversationContextProvider>
    </ConversationContextProvider>
  );
}
