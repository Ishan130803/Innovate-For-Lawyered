"use client";
import ChatSectionSelectedConvContext from "@/components/chatPage/contexts/ChatSectionSelectedConvContext";
import UserContext from "@/components/chatPage/contexts/UserContext";
import { conversationSchema } from "@/types/chatSchema";
import { useSession } from "next-auth/react";
import { FC, HTMLAttributes, useState } from "react";

export const UserContextWrapper: FC<HTMLAttributes<HTMLDivElement>> = (
  props
) => {
  const session = useSession();
  const user = session.data?.user;
  const status = session.status;
  const [data, setdata] = useState<Array<conversationSchema>>([
    {
      convid: "1",
      chats: [
        {
          chatid: "1",
          prompt: "Generate Me a document about AGREEMENT FOR HIRE OF MACHINERY, date is 10th of April 2024, Wednesday",
          response: "sample.pdf",
          link:"https://www.google.com"
        },
      ],
    },
  ]);
  console.log(data)
  const [selectedConv, setselectedConv] = useState<conversationSchema>(data[0]);
  return (
    <div>

      <ChatSectionSelectedConvContext.Provider value={{selected:selectedConv, setSelected:setselectedConv}}>
        <UserContext.Provider
          value={{ userData: user, status: status, conversations: data, setdata : setdata }}
        >
          {props.children}
        </UserContext.Provider>
      </ChatSectionSelectedConvContext.Provider>
    </div>
  );
};
