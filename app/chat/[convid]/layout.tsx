"use client"
import React, { ReactNode } from "react";
import {
  ChatListContextProvider,
  useGetChatList,
} from "@/components/hooks/ChatListContext";
import { useSession } from "next-auth/react";
import { Card } from "../Card";
import { ChatSection } from "../ChatComponent/ChatSection";
import { ProfileAvatar } from "@/components/ui/chat/ProfileAvatar";
import { SelectedChatDataContextProvider } from "@/components/hooks/SelectedChatDataContext";
interface IlayoutProps {
  children: ReactNode;
  params: {
    convid: string;
  };
}

export default function layout(props: IlayoutProps) {
  return (
    <SelectedChatDataContextProvider>
      <ChatListContextProvider>
        <ProfileAvatar className="z-10 absolute top-5 right-5 hover:cursor-pointer rounded-full" />
          <>{props.children}</>
      </ChatListContextProvider>
    </SelectedChatDataContextProvider>
  );
}
