"use client";
import { AppleLogo } from "@/public/AppleLogo";
import { signIn } from "next-auth/react";
import { FC, HTMLAttributes } from "react";

interface IAppleLoginButtonProps extends HTMLAttributes<HTMLDivElement> {}

export const AppleLoginButton: FC<IAppleLoginButtonProps> = (props) => {
  return (
    <div
      {...props}
      onClick={async () => {
        alert(
          "Apple Login is Currently Unavailable, redirecting to google login"
        );
        try {
          await signIn("google");
        } catch (err) {
          console.error(err);
        }
      }}
    >
      <div className="flex gap-2">
        <AppleLogo />
        <span>Continue with Google</span>
      </div>
    </div>
  );
};
