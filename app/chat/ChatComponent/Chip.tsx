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
      <div className="bg-gray-200 rounded-full w-fit p-3 flex gap-2">
        {props.chipItems.map((value, index) => {
          return (
            <div className="rounded-l-full flex">
              {!index ? "" : <span>|</span>}
              {value.icon}
            </div>
          );
        })}
      </div>
    )
  );
};
