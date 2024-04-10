"use client";
import { useRouter } from "next/navigation";
import { FC, HTMLAttributes } from "react";
import Image from "next/image";
interface ILogoBrandBoxProps extends HTMLAttributes<HTMLDivElement> {}

export const LogoBrandBox: FC<ILogoBrandBoxProps> = (props) => {
  const router = useRouter();
  return (
    <div {...props}>
      <Image
        src="/logo.svg"
        alt=""
        height={25}
        width={25}
        className="flex-shrink-0 cursor-pointer "
        onClick={() => router.push("/login")}
      />

      <h1>LegalEase</h1>
    </div>
  );
};
