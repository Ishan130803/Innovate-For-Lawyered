
//@ts-nocheck
import { FC, HTMLAttributes } from "react";
interface IPatternProps extends HTMLAttributes<HTMLDivElement> {
  height?: string;
  width?: string;
}

export const Pattern: FC<IPatternProps> = ({
  height = "305px",
  width = "275px",
  ...props
}) => {
  return (
    <div {...props}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 305 275`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="0.746521" width="305" height="275.253" fill="#419E9E" />
        <path d="M0 15.7604H287V276H0V15.7604Z" fill="#3FC7C7" />
        <path d="M0 15.7604H287V276H0V15.7604Z" fill="#3FC7C7" />
        <path d="M0 15.7604H287V276H0V15.7604Z" fill="#3FC7C7" />
        <path d="M1 31.7751H270V276H1V31.7751Z" fill="#3FC7C7" />
        <path d="M1 31.7751H270V276H1V31.7751Z" fill="#3FC7C7" />
        <path d="M1 31.7751H270V276H1V31.7751Z" fill="#59D5D5" />
        <rect
          width="219.769"
          height="202.98"
          transform="matrix(0.999995 0.00302467 -0.0030191 0.999995 0.549805 72.2241)"
          fill="#419E9E"
        />
        <path
          d="M0.939453 87.2391L202.266 87.8481L201.701 275.211L0.373784 274.602L0.939453 87.2391Z"
          fill="#3FC7C7"
        />
        <path
          d="M0.939453 87.2391L202.266 87.8481L201.701 275.211L0.373784 274.602L0.939453 87.2391Z"
          fill="#3FC7C7"
        />
        <path
          d="M0.939453 87.2391L202.266 87.8481L201.701 275.211L0.373784 274.602L0.939453 87.2391Z"
          fill="#3FC7C7"
        />
        <path
          d="M1.32568 103.255L185.218 103.811L184.701 275.018L0.80879 274.462L1.32568 103.255Z"
          fill="#3FC7C7"
        />
        <path
          d="M1.32568 103.255L185.218 103.811L184.701 275.018L0.80879 274.462L1.32568 103.255Z"
          fill="#3FC7C7"
        />
        <path
          d="M1.32568 103.255L185.218 103.811L184.701 275.018L0.80879 274.462L1.32568 103.255Z"
          fill="#59D5D5"
        />
      </svg>
    </div>
  );
};
