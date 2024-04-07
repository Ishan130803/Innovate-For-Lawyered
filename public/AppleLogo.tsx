import { FC } from "react";
interface IAppleLogoProps {}

export const AppleLogo: FC<IAppleLogoProps> = (props) => {
  return (
    <div>
      <svg
        width="25"
        height="30"
        viewBox="0 0 25 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_2057_2166)">
          <path
            d="M23.7364 10.3091C23.5654 10.4418 20.5462 12.143 20.5462 15.9258C20.5462 20.3012 24.388 21.8491 24.5029 21.8875C24.4853 21.9818 23.8926 24.0074 22.4774 26.0713C21.2155 27.8875 19.8975 29.7007 17.8926 29.7007C15.8877 29.7007 15.3717 28.5361 13.0572 28.5361C10.8017 28.5361 9.99975 29.7391 8.16585 29.7391C6.33194 29.7391 5.05233 28.0585 3.58108 25.9946C1.8769 23.571 0.5 19.8059 0.5 16.2324C0.5 10.5007 4.22678 7.46094 7.89459 7.46094C9.84349 7.46094 11.4681 8.74055 12.6916 8.74055C13.8563 8.74055 15.6725 7.38428 17.8897 7.38428C18.73 7.38428 21.7491 7.46094 23.7364 10.3091ZM16.8371 4.95775C17.7541 3.86979 18.4027 2.36021 18.4027 0.850625C18.4027 0.641288 18.385 0.429003 18.3467 0.257996C16.8548 0.314015 15.0799 1.25161 14.0096 2.49289C13.1693 3.44817 12.385 4.95775 12.385 6.48797C12.385 6.71795 12.4233 6.94792 12.441 7.02163C12.5354 7.03932 12.6887 7.05996 12.842 7.05996C14.1806 7.05996 15.8641 6.16365 16.8371 4.95775Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_2057_2166">
            <rect
              width="24"
              height="29.484"
              fill="white"
              transform="translate(0.5 0.257996)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};