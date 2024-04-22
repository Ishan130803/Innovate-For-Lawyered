"use client";
import { useGetChatList } from "@/components/hooks/ChatListContext";
import { ChatSection } from "../ChatComponent/ChatSection";
import { useSession } from "next-auth/react";
import { useSelectedConversation } from "@/components/hooks/SelectedConversationDataContext";
import { useEffect } from "react";
import PDFViewer from "@/components/ui/pdf/Pdf";
import { useSelectedChatData } from "@/components/hooks/SelectedChatDataContext";
import { chatSchema } from "@/types/chatSchema";

export interface IPageProps {
  params: {
    convid: string;
  };
}

const getLinkConstructor = (data:chatSchema)=>{
  if (data.chatid && data.convid && data.userId) {
    return `/api/dummy?uid=${data.userId}&cid=${data.convid}&chid=${data.chatid}`
  } else {
    return undefined
  }
}

export default function Page(props: IPageProps) {
  const userid = useSession().data?.user.id!;
  const convid = props.params.convid;
  useGetChatList({ convid });

  const { selectedConv, setselectedConv } = useSelectedConversation();
  const {selectedChat} = useSelectedChatData()
  useEffect(() => {
    fetch(`/api/${userid}?convid=${convid}`)
      .then((res) => res.json())
      .then((data) => {
        setselectedConv(data[0]);
      });
  }, [userid,convid]);

  return (
    <>
      <ChatSection width="250px" />
      <PDFViewer url={getLinkConstructor(selectedChat)}></PDFViewer>
    </>
  );
}
