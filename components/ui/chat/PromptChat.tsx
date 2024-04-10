import { HTMLAttributes, FC } from "react";
import { SearchArrow } from "./SearchArrow";
import { LDBtnGrp } from "./LDBtnGrp";

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
          <span className="text-[#5661F6] text-[20px] flex gap-2 mt-2">
            LegalEase
            <SearchArrow />
          </span>
          <p className="ml-3 ">{response}</p>
        </div>
        <LDBtnGrp className="flex gap-2 mt-1"></LDBtnGrp>
      </div>
    </div>
  );
};
