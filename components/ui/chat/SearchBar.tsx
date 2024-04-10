import { FC, HTMLAttributes } from "react";
import { Textarea } from "@mui/joy";
import { SendMessageIcon } from "../SendMessageIcon";
import { Button } from "@mui/joy";

export const SearchBar: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <div {...props}>
      <form action="/" method="post"></form>
      <Textarea
        variant="outlined"
        className="min-w-[30rem] max-w-[50rem] flex-grow-0 w-full rounded-xl align-middle"
        sx={{
          "--Input-radius": "90px",
          "&:focus-within": {
            outline: "2px solid #5661F6)",
            // outlineOffset: '2px',
          },
        }}
      />

      <Button type="submit" className="rounded-full p-2 my-1 bg-[#5661F6] hover:bg-[#4d56d9] hover:shadow-xl active:bg-[#464ec4] flex-grow-0 self-end transition-colors">
        <SendMessageIcon />
      </Button>
    </div>
  );
};
