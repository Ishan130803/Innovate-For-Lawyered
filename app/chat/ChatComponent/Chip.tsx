import { appendFileSync } from "fs";
import { FC, HTMLAttributes } from "react";
interface ChipItems extends HTMLAttributes<HTMLDivElement> {
  icon: any;
  tooltip: string;
}
interface IChipProps {
  chipItems: Array<ChipItems>;
}

export const Chip: FC<IChipProps> = (props) => {
  return (
    props.chipItems.length && (
      <div className="bg-gray-200 rounded-full ">{props.chipItems.map((value,index)=>{
        return value.icon;
      })}</div>
    )
  );
};
