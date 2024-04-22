import React, { HTMLAttributes, FC } from "react";
import { SearchArrow } from "./SearchArrow";
import { Alert, Button, CircularProgress, LinearProgress } from "@mui/joy";
import { chatSchema } from "@/types/chatSchema";
import { useSelectedChatData } from "@/components/hooks/SelectedChatDataContext";
import { Trash2 } from "lucide-react";
import { useChatList } from "@/components/hooks/ChatListContext";

interface IPromptChatProps extends HTMLAttributes<HTMLDivElement>, chatSchema {
  userName: string;
  imageURL: string;
}

export const PromptChat: FC<IPromptChatProps> = ({
  prompt,
  response,
  chatid,
  convid,
  userId,
  imageURL,
  userName,
  ...props
}) => {
  const { setselectedChat } = useSelectedChatData();
  const { chatList,setchatList } = useChatList();
  const deletehandler = async (value: chatSchema) => {
    const res = await fetch(
      `/api/${value.userId}/${value.convid}?chid=${value.chatid}`,
      { method: "DELETE" }
    );
    console.log(chatList)
    console.log(value)
    if (res.ok) {
      setselectedChat({} as chatSchema);
      setchatList((prev) =>
        prev.filter((v) => {
          return v.chatid != chatid;
        })
      );
    }
  };
  return (
    <div {...props}>
      <Trash2
        onClick={() =>
          deletehandler({ chatid, convid, prompt, response, userId })
        }
        className="bg-[#5661F6] text-white rounded-xl size-8 p-2 hover:bg-[#727bef] text-3xl absolute top-0 right-0 m-2"
      ></Trash2>
      <img className="size-[28px] mx-6 rounded-full " src={imageURL} alt="" />
      <div className="w-full">
        <span className="flex gap-2 align-middle text-[18px]">{userName}</span>
        <p className="ml-3 font-extrathin text-[14px]">{prompt}</p>
        <div>
          <span className="text-[#5661F6] text-[20px] flex gap-2 mt-2">
            LegalEase
            <SearchArrow />
          </span>
          {response === "SUCCESS" && (
            <div className="w-full grid place-items-center p-0 py-5 ">
              <Button
                className="bg-[#5661F6] place-self-start"
                onClick={() =>
                  setselectedChat({ chatid, convid, prompt, response, userId })
                }
              >
                Open Response
              </Button>
            </div>
          )}

          {response === "LOADING" && (
            <LinearProgress className="w-full" />
            // <div className="w-full grid place-items-center p-0 py-5 ">
            // </div>
          )}
          {response === "FAIL" && (
            <div className="w-full grid place-items-center p-0 py-5 ">
              <Alert
                className="place-self-start"
                color="danger"
                size="md"
              >{`Failed to get response please try again....`}</Alert>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
