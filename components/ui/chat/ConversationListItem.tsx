"use client";
import UserContext from "@/components/chatPage/contexts/UserContext";
import { FC, HTMLAttributes, useContext } from "react";
import { conversationSchema } from "@/types/chatSchema";
import { MessageSquareTextIcon } from "lucide-react";

export const ConversationListItem: FC<HTMLAttributes<HTMLDivElement>> = (
  props
) => {
  const conversationList: Array<conversationSchema> = useContext(UserContext).conversations;
  console.log(conversationList)
  console.log(conversationList[0].chats[0].prompt)
  return (
    <div {...props}>
      {conversationList &&
        conversationList.map((value, index) => {
          return (
            <div
              key={index}
              className="flex mx-3 p-2 rounded-xl gap-2 hover:bg-slate-200 active:bg-slate-300 transition-colors hover:cursor-pointer"
            >
              <MessageSquareTextIcon />
              <div className="grid align-middle text-clip">
                {value.chats[0].prompt ? value.chats[0].prompt : "New Prompt" }
              </div>
            </div>
          );
        })}
    </div>
  );
};
