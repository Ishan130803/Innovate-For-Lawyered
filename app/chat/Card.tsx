"use client";
import { FC, useContext } from "react";
import { SearchIcon, Settings } from "lucide-react";
import { Divider } from "@mui/material";
import { LogoBrandBox } from "./ChatComponent/LogoBrandBox";
import { ConversationListItem } from "@/components/ui/chat/ConversationListItem";
import { CardInfoSettingsBtn } from "@/components/ui/chat/CardInfoSettingsBtn";
import { useConversationList, useGetConversationList } from "@/components/hooks/ConversationListContext";
import { useSession } from "next-auth/react";
import { conversationSchema } from "@/types/chatSchema";
import { useRouter } from "next/navigation";

interface ICardProps {
  width: string;
}

export const Card: FC<ICardProps> = ({ width = "348px", ...props }) => {
  const router = useRouter();
  const { conversationList, setconversationList } = useConversationList();
  const userid = useSession().data?.user.id!;
  useGetConversationList({userid})
  const handleNewPromptClick = () => {
    fetch(`/api/${userid}`, {
      method: "POST",
      body: JSON.stringify([{}]),
    })
      .then((res) => res.json())
      .then((data: {data:conversationSchema[]}) => {
        setconversationList([...conversationList, data.data[0]]);
        router.push(`/chat/${data.data[0].convid}`);
      });
  };
  return (
    <div
      className={`h-[calc(100vh-2.5rem)] w-[300px] bg-white rounded-3xl m-4 flex flex-col`}
    >
      <div className="flex content-center flex-shrink-0">
        <LogoBrandBox className="text-[24px] self-center mx-6 my-6 flex gap-2 w-[30px] h-[30px]" />
      </div>
      <div className="flex gap-2 mx-6 my-6">
        <button
          onClick={handleNewPromptClick}
          className="justify-center bg-[#5661F6] hover:bg-[#4d56d9] active:bg-[#464ec4] rounded-full w-[228px] flex-grow text-white text-xs transition-colors"
        >
          + New Propmpt
        </button>
        <button className="rounded-full bg-black hover:bg-gray-700 active:bg-gray-600 h-full  p-3 flex-grow-0">
          <SearchIcon className="text-white" />
        </button>
      </div>
      <Divider></Divider>
      <div className="flex  mx-6 my-1">
        <span className="text-gray-400 text-[14px] flex-grow self-center">
          Your Conversations
        </span>
        <span className="text-[#5661F6] self-end text-[14px] rounded-full p-2 hover:cursor-pointer select-none  hover:bg-slate-200 active:bg-slate-300 transition-colors">
          Clear All
        </span>
      </div>
      <Divider></Divider>
      {/* Chats are Mapped Here */}
      <ConversationListItem className="flex-grow my-1 overflow-scroll" />
      <CardInfoSettingsBtn className="flex flex-col bottom-0  w-full p-[18px] gap-4" />
    </div>
  );
};
