"use client";
import { Prompt } from "next/font/google";
import { FC, HTMLAttributes, useContext, useState } from "react";
import { Chip } from "./Chip";
import {
  Copy,
  Menu,
  MenuIcon,
  Thermometer,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";
import {
  Button,
  ButtonGroup,
  Divider,
  Input,
  Textarea,
  Tooltip,
} from "@mui/joy";
import { SendMessageIcon } from "@/components/ui/SendMessageIcon";
import { SearchBar } from "@/components/ui/chat/SearchBar";
import { PromptChat } from "@/components/ui/chat/PromptChat";
import UserContext from "@/components/chatPage/contexts/UserContext";
import { useSession } from "next-auth/react";
import ChatSectionSelectedConvContext from "@/components/chatPage/contexts/ChatSectionSelectedConvContext";

interface IChatSectionProps extends HTMLAttributes<HTMLDivElement> {
  width: string;
}

export const ChatSection: FC<IChatSectionProps> = ({ width, ...props }) => {
  const session = useSession()
  const data = useContext(ChatSectionSelectedConvContext)
  const chats = data?.selected?.chats

  return (
    <div
      className={`w-full h-screen flex relative justify-center ${
        !chats?.length ? "justify-center items-center" : ""
      } pt-9 `}
    >
      {chats?.length ? (
        <div className={`container`}>
          {chats.map((value, index) => {
            return <PromptChat {...value} className="flex my-[3rem]" userName={session.data?.user.name} imageURL={session.data?.user.image} key={index} />;
          })}
        </div>
      ) : (
        <div className="">Write A prompt now</div>
      )}
      <SearchBar className="flex absolute bottom-10 min-w-[30rem] max-w-[50rem] w-full gap-2 "/>
    </div>
  );
};






