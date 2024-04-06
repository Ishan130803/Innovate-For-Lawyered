import { FC } from "react";
interface ICardButtonProps {
  icon:any,
  label:string,
  backgroundColor?:string,
  className?:string,
};

export const CardButton: FC<ICardButtonProps> = ({backgroundColor,...props}) => {
    return (
        <div className={`flex rounded-full  border p-2 gap-2 hover:bg-slate-300 ${props.className}`}>
            <i className={`rounded-full border border-[EFEFEF] h-[34px] w-[34px] grid place-content-center ${backgroundColor}`}>{props.icon}</i>
            <span className="self-center flex-grow text-base">{props.label}</span>
        </div>
    );
}
