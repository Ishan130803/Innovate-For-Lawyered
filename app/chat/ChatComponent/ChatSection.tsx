import { Prompt } from "next/font/google";
import { FC, HTMLAttributes } from "react";
import { Chip } from "./Chip";
import { Copy, ThumbsDown, ThumbsUp } from "lucide-react";
import { Button, ButtonGroup, Divider, Tooltip } from "@mui/joy";
interface IChatSectionProps extends HTMLAttributes<HTMLDivElement> {
  width: string;
}

export const ChatSection: FC<IChatSectionProps> = ({ width, ...props }) => {
  const chats = [
    {
      userPrompt: "Hello",
      response: "Response",
      link: "www.google.com",
    },
  ];
  return (
    <div className="w-full h-full flex justify-center pt-9">
      <div className={`container`}>
        {chats.map((value, index) => {
          return <PromptChat {...value} key={index} />;
        })}
      </div>
    </div>
  );
};

interface IPromptChatProps extends HTMLAttributes<HTMLDivElement> {
  userPrompt?: string;
  response?: string;
  link?: string;
}

export const PromptChat: FC<IPromptChatProps> = ({
  userPrompt,
  response,
  link,
  ...props
}) => {
  return (
    <div className="flex">
      <img className="size-[28px] mx-6 rounded-full" src="" alt="" />
      <div>
        <span className="flex gap-2 align-middle text-[18px]">You</span>
        <p className="ml-3 font-extrathin text-[14px]">{userPrompt}</p>
        <div>
          <span className="text-[#5661F6] text-[20px] flex gap-2">
            LegalEase
            <Arrow />
          </span>
          <p className="ml-3 ">{response}</p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

interface IArrowProps {}

export const Arrow: FC<IArrowProps> = (props) => {
  return (
    <svg
      className="self-center"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.9 8.00001C13.9 4.74153 11.2585 2.10001 8.00002 2.10001C4.74154 2.10001 2.10003 4.74153 2.10002 8.00001C2.10002 11.2585 4.74154 13.9 8.00002 13.9C11.2585 13.9 13.9 11.2585 13.9 8.00001ZM8.00002 1.10001C11.8108 1.10001 14.9 4.18924 14.9 8.00001C14.9 11.8108 11.8108 14.9 8.00002 14.9C4.18926 14.9 1.10002 11.8108 1.10002 8.00001C1.10003 4.18924 4.18926 1.10001 8.00002 1.10001ZM10.3787 5.83538C10.6537 5.86038 10.8563 6.10359 10.8313 6.3786L10.498 10.0453C10.4762 10.2857 10.2857 10.4761 10.0453 10.498L6.37864 10.8313C6.10363 10.8563 5.86043 10.6536 5.83543 10.3786C5.81043 10.1036 6.0131 9.86041 6.28811 9.83541L8.89166 9.59872L5.64648 6.35355C5.45122 6.15828 5.45122 5.8417 5.64648 5.64644C5.84175 5.45118 6.15833 5.45118 6.35359 5.64644L9.59877 8.89162L9.83546 6.28806C9.86046 6.01305 10.1037 5.81038 10.3787 5.83538Z"
        fill="#5661F6"
      />
    </svg>
  );
};
