"use client";

import {
  Context,
  createContext,
  useState,
  useContext,
  ReactNode,
  Dispatch,
} from "react";
import { conversationSchema } from "@/types/chatSchema";
interface ISelectedConversationContext {
  selectedConv: conversationSchema;
  setselectedConv: Dispatch<conversationSchema>;
}

/**
 * ## SelectedConversationContext
 */
const SelectedConversationContext: Context<ISelectedConversationContext> =
  createContext<ISelectedConversationContext>(null as any);

SelectedConversationContext.displayName = "SelectedConversationContext";

interface ISelectedConversationContextProviderProps {
  children: ReactNode;
}

/**
 * ## SelectedConversation context provider component
 *
 */
export const SelectedConversationContextProvider: React.FC<
  ISelectedConversationContextProviderProps
> = (props) => {
  const [selectedConv, setselectedConv] = useState<conversationSchema>(
    {} as conversationSchema
  );

  return (
    <SelectedConversationContext.Provider
      value={{
        selectedConv,
        setselectedConv,
      }}
    >
      {props.children}
    </SelectedConversationContext.Provider>
  );
};

export const useSelectedConversation = (): ISelectedConversationContext =>
  useContext(SelectedConversationContext);
