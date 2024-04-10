import { Days_One } from "next/font/google";
import React, { Children, FC, HTMLAttributes } from "react";
import Image from "next/image";
interface ILawyeredLogoProps extends HTMLAttributes<HTMLDivElement> {
  height?: string;
  width?: string;
  children?: React.ReactNode;
}
const days_one = Days_One({
  weight: "400",
  subsets: ["latin"],
});

const LawyeredLogo: FC<ILawyeredLogoProps> = ({
  width = "1086px",
  height = "1096px",
  ...props
}) => {
  return (
    <div
      className={` h-full relative ${days_one.className}`}
      style={{
        backgroundColor: "#409D9D",
        width: width,
        paddingTop: "20px",
        paddingRight: "20px",
      }}
    >
      <div className="absolute left-[165px] top-[215px] flex align-middle gap-6">
        <div className="grid place-items-center">
          <Image
            src="/logo.svg"
            alt=""
            height={192}
            width={170}
            className="flex-shrink-0"
          />
        </div>
        <div className="flex flex-col">
          <span className="self-center text-[120px]">LegalEase</span>
          <span className="self-center text-white text-[50px]">
            Empowering You Legally
          </span>
        </div>
      </div>
      <div
        className="w-full "
        style={{
          backgroundColor: "#3ED0D0",
          paddingTop: "20px",
          paddingRight: "20px",
          height: "100%",
        }}
      >
        <div
          className="w-full "
          style={{
            backgroundColor: "#5FE2E2",
            paddingTop: "20px",
            paddingRight: "20px",
            height: "100%",
          }}
        ></div>
      </div>
    </div>
  );
};
export default LawyeredLogo;
