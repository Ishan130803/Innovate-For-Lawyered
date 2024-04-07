"use client";
import { FC, HTMLAttributes, useState } from "react";
import { Days_One } from "next/font/google";
import { useRouter } from "next/navigation";

import { signIn } from "next-auth/react";
import LawyeredLogo from "@/public/LogoBackground";
import TextField from "@mui/material/TextField";
import { FooterEnding } from "@/public/FooterEnding";
import { Pattern } from "@/public/Pattern";
import { GoogleLogo } from "@/public/GoogleLogo";
import { AppleLogo } from "@/public/AppleLogo";
import Logo from "@/public/logo.png";
interface IPageProps {}
import Image from "next/image";

const days_one = Days_One({
  weight: "400",
  subsets: ["latin"],
});

const Page: FC<IPageProps> = (props) => {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-wrap h-screen w-screen ">
        {/* <Image src='/logo.png' alt="" width={200} height={200} /> */}
        <Pattern className="fixed bottom-0 left-0 z-10 mb-[-40px] "></Pattern>
        <LawyeredLogo height="100vh"></LawyeredLogo>
        <div
          className="grid place-items-center"
          style={{
            width: "calc(100vw - 67.875rem)",
          }}
        >
          <div className={` flex flex-col w-[32.5rem] ${days_one.className}`}>
            <h1 className="text-[38px] mb-0.75rem text-center font-bold">
              Sign Up With Free Trial
            </h1>
            <h6 className=" text-[16px] mb-[3.125rem] text-center font-bold">
              Empower your experience, sign up for a free account today{" "}
            </h6>
            <div className="py-[3px] mb-[0.5rem] font-bold ">
              Email Address<span className="text-red-700">*</span>
            </div>
            <TextField
              required
              className="w-[32.5rem] h-[3.75em] mb-[1.875rem]"
              id=""
              placeholder="ex. email@domain.com"
            />
            <div className="py-[3px] font-bold mb-[0.5rem]">
              Password<span className="text-red-700">*</span>
            </div>
            <TextField
              required
              className="w-[32.5rem] h-[3.75em] mb-[1.875rem]"
              id=""
              type="password"
              placeholder="Enter Your Password"
            />
            <div className="mb-[1.5rem] text-[14px]">
              By registering for an account, you are consenting to our{" "}
              <span className="underline text-[#5661F6]">Terms of Service</span>{" "}
              and confirming that you have reviewed and accepted the{" "}
              <span className="text-[#5661F6]">Global Privacy Statement.</span>
            </div>

            <div
              onClick={() => router.push("/chat")}
              className="hover:cursor-pointer  w-full grid place-items-center  mb-5 mt-2 gap-2 p-5 rounded-full border border-[#E0E0E0] bg-[#5661F6] hover:bg-[#4d56d9] active:bg-[#464ec4] text-white transition-colors"
            >
              <span>Get started free</span>
            </div>

            <div className="hover:cursor-pointer active:cursor-progress w-full grid place-items-center my-5 gap-2 p-5 rounded-full border border-[#E0E0E0] hover:bg-slate-200 active:bg-slate-300 transition-colors">
              <div className="flex gap-2">
                <GoogleLogo />
                <span>Continue with Google</span>
              </div>
            </div>

            <div className="w-full grid place-items-center  mb-5 mt-2 gap-2 p-5 rounded-full border border-[#E0E0E0]  hover:bg-slate-200 active:bg-slate-300 transition-colors">
              <div className="flex gap-2">
                <AppleLogo />
                <span>Continue with Apple</span>
              </div>
            </div>

            <FooterEnding />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
