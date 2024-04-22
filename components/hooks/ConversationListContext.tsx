"use client"
import { chatSchema, conversationSchema } from "@/types/chatSchema";
import { useSession } from "next-auth/react";
import React, {
  Context,
  createContext,
  useState,
  useContext,
  ReactNode,
  Dispatch,
  useEffect,
} from "react";
interface IConversationContext {
  conversationList: conversationSchema[];
  setconversationList: Dispatch<conversationSchema[]>;
}

/**
 * ## ConversationContext
 */
const ConversationContext: Context<IConversationContext> =
  createContext<IConversationContext>(null as any);

ConversationContext.displayName = "ConversationContext";

interface IConversationContextProviderProps {
  children: ReactNode;
}

/**
 * ## ConversationContext context provider component
 *
 */
export const ConversationContextProvider: React.FC<
  IConversationContextProviderProps
> = (props) => {
  const [conversationList, setconversationList] = useState<any[]>([]);

  return (
    <ConversationContext.Provider
      value={{
        conversationList,
        setconversationList,
      }}
    >
      {props.children}
    </ConversationContext.Provider>
  );
};

export const useConversationList = (): IConversationContext =>
  useContext(ConversationContext);

export interface IuseGetConversationListProps {
  userid: string;
}


export function useGetConversationList(props: IuseGetConversationListProps) {
  const { conversationList,setconversationList } = useConversationList();
  const userid = useSession().data?.user.id!
  const url = `/api/${userid}`;
  React.useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      if (res.ok) {
        const data = (await res.json()) as conversationSchema[];
        setconversationList(data);
      }
    };

    const timeout = setTimeout(fetchData, 500);

    return () => {clearTimeout(timeout)};
  }, [userid]);
}


// export interface IuseConversationsProps {
//   // action: "GET" | "POST" | "UPDATE" | "DELETE";
//   userid: string;
//   convid: string;
// }

// export function useConversations(props: IuseConversationsProps) {
//   const { conversationList, setconversationList } = useConversationContext();
//   const baseurl = global?.window?.location?.origin;
//   const url = `${baseurl}/api/${props.userid}/${props.convid}`;

//   // for fetching
//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await fetch(url);
//       const data = (await res.json()) as chatSchema[];
//       setconversationList(data);
//     };
//     const timeout = setTimeout(() => {
//       fetchData();
//     }, 500);
//     return () => clearTimeout(timeout);
//   }, []);
//   useEffect(() => {
//     const putData = async () => {
//       const res = await fetch(url, {
//         method: "PUT",
//       });
//     };
//     const timeout = setTimeout(() => {
//       putData();
//     }, 500);
//     return () => clearTimeout(timeout);
//   }, [conversationList.length]);
// }
