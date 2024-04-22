"use client";
import { FC, HTMLAttributes, useState, useContext } from "react";
import { Textarea } from "@mui/joy";
import { SendMessageIcon } from "../SendMessageIcon";
import { Button } from "@mui/joy";
import { chatSchema, conversationSchema } from "@/types/chatSchema";
import { useChatList } from "@/components/hooks/ChatListContext";
import { useSelectedConversation } from "@/components/hooks/SelectedConversationDataContext";
import { getResponse } from "@/lib/getResponse";
import { validate } from "uuid";
export const SearchBar: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const [text, settext] = useState<string>("");
  const { chatList, setchatList } = useChatList();
  const { selectedConv } = useSelectedConversation();
  return (
    <div {...props}>
      <div className="flex w-full gap-2 items-center justify-center">
        <Textarea
          value={text}
          onChange={(e) => settext(e.target.value)}
          variant="outlined"
          className="min-w-[30rem] p-2  max-w-[50rem] flex-grow-0 w-[70%] rounded-xl"
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
            const res = await fetch(
              `/api/${selectedConv.userId}/${selectedConv.convid}`,
              {
                method: "POST",
                body: JSON.stringify({
                  prompt: text,
                  response: "LOADING",
                }),
              }
            );

            const data = (await res.json()) as { data: chatSchema };
            const newdata = data.data;
            console.log(chatList);
            chatList.push(newdata);
            setchatList([...chatList]);

            await new Promise((res, rej) =>
              setTimeout(() => {
                res("hello");
              }, 3000)
            );

            const result = await getResponse(
              newdata.prompt,
              selectedConv.userId,
              selectedConv.convid,
              newdata.chatid
            );
            const response = result ? "SUCCESS" : "FAIL";
            const res2 = await fetch(
              `/api/${selectedConv.userId}/${selectedConv.convid}`,
              {
                method: "PUT",
                body: JSON.stringify([{ ...newdata, response: response }]),
              }
            );
            setchatList(
              chatList.map((v) => {
                if (v.chatid == newdata.chatid) {
                  newdata.response = response;
                  return newdata;
                } else {
                  return v;
                }
              })
            );

            settext("");
          }}
          className="rounded-full p-2 my-1 bg-[#5661F6] hover:bg-[#4d56d9] hover:shadow-xl active:bg-[#464ec4] flex-grow-0 self-end transition-colors"
        >
          <SendMessageIcon />
        </Button>
      </div>
    </div>
  );
};
