"use client";
import { FC, HTMLAttributes, useState, useContext } from "react";
import { Textarea } from "@mui/joy";
import { SendMessageIcon } from "../SendMessageIcon";
import { Button } from "@mui/joy";
import UserContext from "@/components/chatPage/contexts/UserContext";
import ChatSectionSelectedConvContext from "@/components/chatPage/contexts/ChatSectionSelectedConvContext";
import { conversationSchema } from "@/types/chatSchema";
import { v4 } from "uuid";

export const SearchBar: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const [text, settext] = useState<string>("");
  const userData = useContext(UserContext);
  const conversationList: conversationSchema = userData.conversations;
  const selectedConvState = useContext(ChatSectionSelectedConvContext);
  const selectedConv = selectedConvState.selected;

  return (
    <div {...props}>
      <Textarea
        value={text}
        onChange={(e) => settext(e.target.value)}
        variant="outlined"
        className="min-w-[30rem] p-2  max-w-[50rem] flex-grow-0 w-full rounded-xl align-middle"
        sx={{
          "--Input-radius": "90px",
          "&:focus-within": {
            outline: "2px solid #5661F6",
            // outlineOffset: '2px',
          },
        }}
      />

      <Button
        onClick={async () => {
          const newdata = {
            chatid: v4(),
            prompt: text,
          };
          selectedConv.chats.push(newdata);
          selectedConvState.setSelected({ ...selectedConv });
          let index = selectedConv.chats.findIndex(
            (item) => item.chatid == newdata.chatid
          );
          console.log(index);
          await new Promise((res, rej) => {
            setTimeout(() => {
              res("Resolved");
            },0.2 + Math.random() * 4000);
          });
          selectedConv.chats[index].response = "Here is your Output :";
          selectedConv.chats[index].link = "www.google.com";
          console.log("Hurrah");
          selectedConvState.setSelected({ ...selectedConv });
          console.log(selectedConv);

          settext("");
        }}
        className="rounded-full p-2 my-1 bg-[#5661F6] hover:bg-[#4d56d9] hover:shadow-xl active:bg-[#464ec4] flex-grow-0 self-end transition-colors"
      >
        <SendMessageIcon />
      </Button>
    </div>
  );
};
