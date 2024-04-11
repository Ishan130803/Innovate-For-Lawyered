"use client";
import UserContext from "@/components/chatPage/contexts/UserContext";
import { FC, HTMLAttributes, useContext } from "react";
import { conversationSchema } from "@/types/chatSchema";
import { MessageSquareTextIcon } from "lucide-react";
import ChatSectionSelectedConvContext from "@/components/chatPage/contexts/ChatSectionSelectedConvContext";

export const ConversationListItem: FC<HTMLAttributes<HTMLDivElement>> = (
  props
) => {
  const conversationList =
    useContext(UserContext).conversations;
  const selectedConv : conversationSchema = useContext(ChatSectionSelectedConvContext)
  console.log(conversationList);
  console.log(conversationList[0]?.chats[0]?.prompt);
  return (
    <div {...props}>
      {conversationList &&
        conversationList.map((value, index) => {
          return (
            <div
              key={index}
              className="flex mx-3 p-2 rounded-xl gap-2 hover:bg-slate-200 active:bg-slate-300 transition-colors hover:cursor-pointer"
              onClick={()=>selectedConv.setSelected(value)}
            >
              <MessageSquareTextIcon className="flex-shrink-0  size-[24px]" />
                <div className="grid align-middle text-ellipis flex-grow">
                  <span className="overflow-hidden text-ellipsis w-full text-nowrap">{value.chats[0].prompt ? value.chats[0].prompt : "New Prompt"}</span>
                </div>
            </div>
          );
        })}
    </div>
  );
};
