import { FC } from "react";
import {
  Divide,
  MessageCircleIcon,
  MessageSquareTextIcon,
  MessagesSquareIcon,
  SearchIcon,
  Settings,
} from "lucide-react";
import { Divider } from "@mui/material";
import { ChatIcon } from "@/components/ui/ChatIcon";
import { CardButton } from "../../components/ui/CardButtons";
interface ICardProps {
  width: string;
}
const Chats = ["Text1", "Text2", "Text3"];

export const Card: FC<ICardProps> = ({ width = "348px", ...props }) => {
  return (
    <div className={`h-[calc(100vh-2.5rem)] w-[${width}] bg-white rounded-3xl m-4 flex flex-col`}>
      <div className="flex content-center">
        <h1 className="text-[24px] self-center mx-6 my-6">LegalEase</h1>
      </div>
      <div className="flex gap-2 mx-6 my-6">
        <button className="justify-center bg-[#5661F6] hover:bg-[#4d56d9] active:bg-[#464ec4] rounded-full w-[228px] flex-grow text-white text-xs transition-colors">
          + New Propmpt
        </button>
        <button className="rounded-full bg-black hover:bg-gray-700 active:bg-gray-600 h-full  p-3 flex-grow-0">
          <SearchIcon className="text-white" />
        </button>
      </div>
      <Divider></Divider>
      <div className="flex  mx-6 my-1">
        <span className="text-gray-400 text-[14px] flex-grow self-center">
          Your Conversations
        </span>
        <span className="text-[#5661F6] self-end text-[14px] rounded-full p-2  hover:bg-slate-200 active:bg-slate-300 transition-colors">
          Clear All
        </span>
      </div>
      <Divider></Divider>
      <div className="flex-grow my-1 overflow-scroll">
        {Chats.map((value, index) => {
          return (
            <div
              key={index}
              className="flex mx-3 p-2 rounded-xl gap-2 hover:bg-slate-200 active:bg-slate-300 transition-colors"
            >
              <MessageSquareTextIcon />
              <div className="grid align-middle">{value}</div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col bottom-0  w-full p-[18px] gap-4">
        <Divider className="mx-[-18px ] "></Divider>
        <CardButton
          icon={<Settings />}
          label="Settings"
          backgroundColor="bg-[#EFEFEF]"
          className="hover:bg-slate-200 active:bg-slate-300 transition-colors"
        />
        <CardButton
          icon={<img />}
          label="Enter User Name"
          className="hover:bg-slate-200 active:bg-slate-300 transition-colors"
        />
      </div>
    </div>
  );
};
