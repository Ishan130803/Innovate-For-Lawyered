
"use client"
import { chatSchema } from "@/types/chatSchema";
import {
  Context,
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";
interface ISelectedChatDataContext {
  selectedChat: chatSchema;
  setselectedChat: Dispatch<chatSchema>;
}

/**
 * ## SelectedChatDataContext
 */
const SelectedChatDataContext: Context<ISelectedChatDataContext> =
  createContext<ISelectedChatDataContext>(null as any);

SelectedChatDataContext.displayName = "SelectedChatDataContext";

export const useSelectedChatData = (): ISelectedChatDataContext =>
  useContext(SelectedChatDataContext);

export const SelectedChatDataContextProvider: React.FC<{
  children: ReactNode;
}> = (props) => {
  const [selectedChat, setselectedChat] = useState<chatSchema>(
    {} as chatSchema
  );
  return (
    <SelectedChatDataContext.Provider value={{ selectedChat, setselectedChat }}>
      {props.children}
    </SelectedChatDataContext.Provider>
  );
};
