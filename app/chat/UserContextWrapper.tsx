"use client";
import ChatSectionSelectedConvContext from "@/components/chatPage/contexts/ChatSectionSelectedConvContext";
import UserContext from "@/components/chatPage/contexts/UserContext";
import { useSession } from "next-auth/react";
import { FC, HTMLAttributes } from "react";

export const UserContextWrapper: FC<HTMLAttributes<HTMLDivElement>> = (
  props
) => {
  const session = useSession();
  const user = session.data?.user;
  const status = session.status;
  console.log(session);
  const data = [
    {
      convid: "1",
      chats: [
        {
          chatid: "1",
          prompt: "Generate Me a document about AGREEMENT FOR HIRE OF MACHINERY, date is 10th of April 2024, Wednesday",
          response: "sample.pdf",
        },
      ],
    },
  ];
  return (
    <div>
      <ChatSectionSelectedConvContext.Provider value={data[0]}>
        <UserContext.Provider
          value={{ userData: user, status: status, conversations: data }}
        >
          {props.children}
        </UserContext.Provider>
      </ChatSectionSelectedConvContext.Provider>
    </div>
  );
};
