import { FC } from "react";
interface IChatIconProps {}

export const ChatIcon: FC<IChatIconProps> = (props) => {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.66668 13.1667H5.33334C2.66668 13.1667 1.33334 12.5 1.33334 9.16667V5.83334C1.33334 3.16667 2.66668 1.83334 5.33334 1.83334H10.6667C13.3333 1.83334 14.6667 3.16667 14.6667 5.83334V9.16667C14.6667 11.8333 13.3333 13.1667 10.6667 13.1667H10.3333C10.1267 13.1667 9.92668 13.2667 9.80001 13.4333L8.80001 14.7667C8.36001 15.3533 7.64001 15.3533 7.20001 14.7667L6.20001 13.4333C6.09334 13.2867 5.84668 13.1667 5.66668 13.1667Z"
        stroke="black"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.6643 7.83333H10.6703"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.997 7.83333H8.00299"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.32967 7.83333H5.33566"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
