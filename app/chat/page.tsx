"use client";
import { Card } from "@/app/chat/Card";
import { FC } from "react";
import { ChatSection } from "./ChatComponent/ChatSection";
import { UserContextWrapper } from "./UserContextWrapper";
import { ProfileAvatar } from "@/components/ui/chat/ProfileAvatar";
import ChatSectionSelectedConvContext from "@/components/chatPage/contexts/ChatSectionSelectedConvContext";
import { ConversationListItem } from "@/components/ui/chat/ConversationListItem";
interface PageProps {}

const Page: FC<PageProps> = (props) => {
  return (
    <UserContextWrapper>
      <ProfileAvatar className="z-10 absolute top-5 right-5 hover:cursor-pointer rounded-full" />
      <div className="flex">
        <Card width="250px" />

        <ChatSection width="250px" />
      </div>
    </UserContextWrapper>
  );
};
export default Page;
