"use client";
import { Prompt } from "next/font/google";
import { FC, HTMLAttributes, useState } from "react";
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

interface IChatSectionProps extends HTMLAttributes<HTMLDivElement> {
  width: string;
}

export const ChatSection: FC<IChatSectionProps> = ({ width, ...props }) => {
  const chats = [
    {
      userPrompt: "Hello",
      response: "Response",
      link: "www.google.com",
    },
  ];
  return (
    <div
      className={`w-full h-screen flex relative justify-center ${
        !chats.length ? "justify-center items-center" : ""
      } pt-9 `}
    >
      {chats.length ? (
        <div className={`container`}>
          {chats.map((value, index) => {
            return <PromptChat {...value} key={index} />;
          })}
        </div>
      ) : (
        <div className="">Write A prompt now</div>
      )}
      <SearchBar className="flex absolute bottom-10 min-w-[30rem] max-w-[50rem] w-full gap-2 "/>
    </div>
  );
};






