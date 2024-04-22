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
import { useSession } from "next-auth/react";
import ChatSectionSelectedConvContext from "@/components/chatPage/contexts/ChatSectionSelectedConvContext";
import { chatSchema } from "@/types/chatSchema";
import { useChatList } from "@/components/hooks/ChatListContext";

interface IChatSectionProps extends HTMLAttributes<HTMLDivElement> {
  width: string;
}

export const ChatSection: FC<IChatSectionProps> = ({ width, ...props }) => {
  const session = useSession();
  const { chatList } = useChatList();

  return (
    <div
      className={`w-full h-screen relative justify-center overflow-scroll  ${
        !chatList?.length ? "justify-center items-center" : ""
      } pt-9 `}
    >
      <div className="w-full min-h-full max-h-fit">

      {chatList?.length ? (
        <div className={`container`}>
          {chatList.map((value, index) => {
            return (
              <PromptChat
                {...value}
                className="flex my-[3rem] w-full hover:bg-[#b9bce3] rounded-2xl p-4 relative"
                userName={session.data?.user.name!}
                imageURL={session.data?.user.image!}
                key={index}
              />
            );
          })}
        </div>
      ) : (
        <div className="w-full h-full justify-center items-center flex"><span>Write A prompt now</span></div>
      )}
      </div>
      <div className="w-full sticky bottom-0 py-5 bg-[#9197e5]">
        <SearchBar className="w-full " />
      </div>
    </div>
  );
};
