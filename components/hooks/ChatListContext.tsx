"use client"
import {
  Context,
  createContext,
  useState,
  useContext,
  ReactNode,
  Dispatch,
} from "react";
import { chatSchema } from "@/types/chatSchema";

interface IChatListContext {
  chatList: chatSchema[];
  setchatList: Dispatch<React.SetStateAction<chatSchema[]>>
}
/**
 * ## ChatListContext
 */
const ChatListContext: Context<IChatListContext> =
  createContext<IChatListContext>(null as any);

ChatListContext.displayName = "ChatListContext";

interface IChatListContextProviderProps {
  children: ReactNode;
}

/**
 * ## ChatList context provider component
 *
 */
export const ChatListContextProvider: React.FC<
  IChatListContextProviderProps
> = (props) => {
  const [chatList, setchatList] = useState<chatSchema[]>([]);

  return (
    <ChatListContext.Provider
      value={{
        chatList,
        setchatList,
      }}
    >
      {props.children}
    </ChatListContext.Provider>
  );
};

export const useChatList = (): IChatListContext => useContext(ChatListContext);

import * as React from "react";
import { useSession } from "next-auth/react";

export interface IuseGetChatListProps {
  convid: string;
}

export function useGetChatList(props: IuseGetChatListProps) {
  const { chatList, setchatList } = useChatList();
  const userid = useSession().data?.user.id!
  const url = `/api/${userid}/${props.convid}`;
  React.useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      if (res.ok) {
        const data = (await res.json()) as chatSchema[];
        setchatList(data);
      }
    };
    const timeout = setTimeout(fetchData, 500);

    return () => {clearTimeout(timeout)};
  }, [userid]);
}
