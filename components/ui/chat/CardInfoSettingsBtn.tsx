"use client";
import { FC, HTMLAttributes } from "react";
import { CardButton } from "../CardButtons";
import { Divider } from "@mui/joy";
import { useSession } from "next-auth/react";
import { Settings } from "lucide-react";

export const CardInfoSettingsBtn: FC<HTMLAttributes<HTMLDivElement>> = (
  props
) => {
  const session = useSession();
  return (
    <div {...props}>
      <Divider className="mx-[-18px ] "></Divider>
      <CardButton
        icon={<Settings />}
        label="Settings"
        backgroundColor="bg-[#EFEFEF]"
        className="hover:bg-slate-200 active:bg-slate-300 transition-colors"
      />
      <CardButton
        icon={
          session.data?.user.image ? (
            <img src={session.data.user.image} className="rounded-full" />
          ) : (
            <></>
          )
        }
        label={session.data?.user.name!}
        className="hover:bg-slate-200 active:bg-slate-300 transition-colors"
      />
    </div>
  );
};
