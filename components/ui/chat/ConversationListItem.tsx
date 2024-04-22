"use client";
import UserContext from "@/components/chatPage/contexts/UserContext";
import { FC, HTMLAttributes, useContext } from "react";
import { conversationSchema } from "@/types/chatSchema";
import { MessageSquareTextIcon } from "lucide-react";
import ChatSectionSelectedConvContext from "@/components/chatPage/contexts/ChatSectionSelectedConvContext";
import { useConversationList } from "@/components/hooks/ConversationListContext";
import { useRouter } from "next/navigation";

export const ConversationListItem: FC<HTMLAttributes<HTMLDivElement>> = (
  props
) => {
  const {conversationList,setconversationList} = useConversationList()
  const router = useRouter()
  return (
    <div {...props}>
      {conversationList &&
        conversationList.map((value, index) => {
          return (
            <div
              key={index}
              className="flex mx-3 p-2 rounded-xl gap-2 hover:bg-slate-200 active:bg-slate-300 transition-colors hover:cursor-pointer"
              onClick={()=>{router.push(`/chat/${value.convid}`)}}
            >
              <MessageSquareTextIcon className="flex-shrink-0  size-[24px]" />
                <div className="grid align-middle text-ellipis flex-grow">
                  <span className="overflow-hidden text-ellipsis w-full text-nowrap">{value.title ?? "New Prompt"}</span>
                </div>
            </div>
          );
        })}
    </div>
  );
};
