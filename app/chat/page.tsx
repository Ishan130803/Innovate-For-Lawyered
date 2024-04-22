"use client";
import { FC } from "react";
import { ProfileAvatar } from "@/components/ui/chat/ProfileAvatar";
interface PageProps {}

const Page: FC<PageProps> = (props) => {
  return (
    <>
      <ProfileAvatar className="z-10 absolute top-5 right-5 hover:cursor-pointer rounded-full" />
    </>
  );
};
export default Page;
