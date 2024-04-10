"use client";
import { GoogleLogo } from "@/public/GoogleLogo";
import { signIn } from "next-auth/react";
import { FC, HTMLAttributes } from "react";

interface IGoogleLoginButtonProps extends HTMLAttributes<HTMLDivElement> {}

export const GoogleLoginButton: FC<IGoogleLoginButtonProps> = (props) => {
  return (
    <div
      {...props}
      onClick={async () => {
        try {
          await signIn("google");
        } catch (err) {
          console.error(err);
        }
      }}
    >
      <div className="flex gap-2">
        <GoogleLogo />
        <span>Continue with Google</span>
      </div>
    </div>
  );
};
