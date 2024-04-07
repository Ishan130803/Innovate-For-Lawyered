"use client";
import { FC } from "react";
import { Button, ButtonGroup, Divider, Tooltip } from "@mui/joy";
import { Copy, ThumbsDown, ThumbsUp } from "lucide-react";
import { CssVarsProvider, extendTheme } from "@mui/joy/styles";

// declare module '@mui/joy/ButtonGroup' {
//   interface ButtonGroupPropsColorOverrides {
//     default: true;
//     active: true;
//   }
// }

// declare module "@mui/joy/Button" {
//   interface ButtonPropsColorOverrides {
//     secondary: true;
//     tertiary: true;
//   }
// }

// extendTheme({
//   components: {
//     JoyButton: {
//       styleOverrides: {
//         root: ({ ownerState, theme }) => ({
//           ...(ownerState.color === "secondary" && {
//             color: theme.vars.palette.text.secondary,
//             backgroundColor: theme.vars.palette.background.level1,
//           }),
//         }),
//       },
//     },
//   },
// });
interface buttonItems {
  icon: any,
  tooltip: string | null
}

interface IChipComponentProps {
  className: string;
  buttomItems: buttonItems[]
}

export const ThreeButtonGroup: FC<IChipComponentProps> = (props) => {
  return (
      
      
  );
};



