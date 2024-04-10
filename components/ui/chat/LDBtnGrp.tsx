import { Dispatch, FC, HTMLAttributes, SetStateAction, useState } from "react";
import { ButtonGroup, Button, Tooltip } from "@mui/joy";
import { ThumbsDown } from "lucide-react";
import { ThumbsUp } from "lucide-react";
import { MenuIcon } from "lucide-react";
import { Copy } from "lucide-react";

export const LDBtnGrp: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const [likeBtn, setlikeBtn] = useState<string>("#8c8c8e");
  const [dislikeBtn, setdislikeBtn] = useState<string>("#8c8c8e");
  const [copyBtn, setcopyBtn] = useState<string>("#8c8c8e");
  const toggleBtnColor = (
    btn: string,
    setbtn: Dispatch<SetStateAction<string>>
  ) => {
    setbtn(btn == "#5661F6" ? "#8c8c8e" : "#5661F6");
  };
  const likeDislikeHandler = (
    btn: string,
    setbtn: Dispatch<SetStateAction<string>>,
    otherbtn: string,
    setOtherbtn: Dispatch<SetStateAction<string>>
  ) => {
    if (btn == "#5661F6") {
      setbtn("#8c8c8e");
    } else if (otherbtn == "#5661F6" && btn == "#8c8c8e") {
      setbtn("#5661F6");
      setOtherbtn("#8c8c8e");
    } else {
      setbtn("#5661F6");
    }
  };
  return (
    <div {...props}>
      <ButtonGroup
        variant="soft"
        size="sm"
        aria-label="radius button group"
        color="neutral"
        sx={{
          "--ButtonGroup-radius": "40px",
          "--ButtonGroup-separatorColor": "none !important",
          "& > span": {
            zIndex: 3,
            // background:
            //   "linear-gradient(to top, transparent, #8c8c8e, transparent)",
          },
          backgroundColor: "white",
          padding: -2,
          width: "fit-content",
        }}
      >
        <Tooltip arrow title="Like">
          <Button
            onClick={() =>
              likeDislikeHandler(likeBtn, setlikeBtn, dislikeBtn, setdislikeBtn)
            }
          >
            <ThumbsUp color={likeBtn} size={18} />
          </Button>
        </Tooltip>
        <span className="bg-[#8c8c8e] w-[1px] my-2 h-[14px]"></span>
        <Tooltip arrow title="Dislike">
          <Button
            onClick={() =>
              likeDislikeHandler(dislikeBtn, setdislikeBtn, likeBtn, setlikeBtn)
            }
          >
            <ThumbsDown color={dislikeBtn} size={18} />
          </Button>
        </Tooltip>
        <span className="bg-[#8c8c8e] w-[1px] my-2 h-[14px]"></span>
        <Tooltip arrow title="Copy">
          <Button onClick={() => toggleBtnColor(copyBtn, setcopyBtn)}>
            <Copy color={copyBtn} size={18} />
          </Button>
        </Tooltip>
      </ButtonGroup>
      <ButtonGroup
        variant="soft"
        size="sm"
        aria-label="radius button group"
        color="neutral"
        sx={{
          "--ButtonGroup-radius": "40px",
          "--ButtonGroup-separatorColor": "none !important",
          "& > span": {
            zIndex: 3,
            background:
              "linear-gradient(to top, transparent, #8c8c8e, transparent)",
          },
          backgroundColor: "white",
          padding: -2,
          width: "fit-content",
        }}
      >
        <Tooltip arrow title="Options">
          <Button>
            <MenuIcon color="#8c8c8e" size={18} />
          </Button>
        </Tooltip>
      </ButtonGroup>
    </div>
  );
};
