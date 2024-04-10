"use client";
import { FC, HTMLAttributes } from "react";

export const GetStartedForFree: FC<HTMLAttributes<HTMLDivElement>> = (
  props
) => {
  return (
    <div
      {...props}
      onClick={() =>
        alert("This Option is Currently Unavailable Please use google Login")
      }
    >
      <span>Get started free</span>
    </div>
  );
};
