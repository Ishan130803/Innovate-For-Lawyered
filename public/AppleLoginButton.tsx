import { FC, HTMLAttributes } from "react";
interface IAppleLoginButtonProps extends HTMLAttributes<HTMLDivElement> {}

export const AppleLoginButton: FC<IAppleLoginButtonProps> = (props) => {
  return (
    <div {...props}>
      <svg
        width="520"
        height="60"
        viewBox="0 0 520 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.5"
          y="0.5"
          width="519"
          height="59"
          rx="29.5"
          stroke="black"
          stroke-opacity="0.12"
        />
        <g clip-path="url(#clip0_3_2447)">
          <path
            d="M176.736 25.3091C176.565 25.4418 173.546 27.143 173.546 30.9258C173.546 35.3012 177.388 36.8491 177.503 36.8875C177.485 36.9818 176.893 39.0074 175.477 41.0713C174.215 42.8875 172.898 44.7007 170.893 44.7007C168.888 44.7007 168.372 43.5361 166.057 43.5361C163.802 43.5361 163 44.7391 161.166 44.7391C159.332 44.7391 158.052 43.0585 156.581 40.9946C154.877 38.571 153.5 34.8059 153.5 31.2324C153.5 25.5007 157.227 22.4609 160.895 22.4609C162.843 22.4609 164.468 23.7406 165.692 23.7406C166.856 23.7406 168.672 22.3843 170.89 22.3843C171.73 22.3843 174.749 22.4609 176.736 25.3091ZM169.837 19.9577C170.754 18.8698 171.403 17.3602 171.403 15.8506C171.403 15.6413 171.385 15.429 171.347 15.258C169.855 15.314 168.08 16.2516 167.01 17.4929C166.169 18.4482 165.385 19.9577 165.385 21.488C165.385 21.7179 165.423 21.9479 165.441 22.0216C165.535 22.0393 165.689 22.06 165.842 22.06C167.181 22.06 168.864 21.1636 169.837 19.9577Z"
            fill="black"
          />
        </g>
        <path
          d="M189.422 36.6797C188.458 35.7578 187.977 34.3333 187.977 32.4062C187.977 30.474 188.458 29.0469 189.422 28.125C190.391 27.1979 191.841 26.7344 193.773 26.7344H195.516C196.698 26.7344 197.742 27.0417 198.648 27.6562C199.56 28.2708 200.016 29.112 200.016 30.1797C200.016 30.487 199.924 30.7083 199.742 30.8438C199.56 30.974 199.383 31.0391 199.211 31.0391H198.281C197.802 31.0391 197.43 30.7526 197.164 30.1797C196.779 29.3568 196.138 28.9453 195.242 28.9453H193.852C192.711 28.9453 191.938 29.1901 191.531 29.6797C191.125 30.1693 190.922 31.0755 190.922 32.3984C190.922 33.7214 191.125 34.6302 191.531 35.125C191.938 35.6146 192.711 35.8594 193.852 35.8594H195.406C196.302 35.8594 196.94 35.4479 197.32 34.625C197.586 34.0469 197.961 33.7578 198.445 33.7578H199.375C199.62 33.7578 199.812 33.849 199.953 34.0312C200.099 34.2135 200.172 34.4115 200.172 34.625C200.172 35.6927 199.719 36.5339 198.812 37.1484C197.906 37.7578 196.862 38.0625 195.68 38.0625H193.773C191.841 38.0625 190.391 37.6016 189.422 36.6797ZM202.433 37.0312C201.621 36.2812 201.215 35.1771 201.215 33.7188C201.215 32.2552 201.621 31.151 202.433 30.4062C203.246 29.6562 204.413 29.2812 205.933 29.2812C207.459 29.2812 208.629 29.6562 209.441 30.4062C210.254 31.151 210.66 32.2552 210.66 33.7188C210.66 35.1771 210.254 36.2812 209.441 37.0312C208.629 37.7812 207.459 38.1562 205.933 38.1562C204.413 38.1562 203.246 37.7812 202.433 37.0312ZM204.41 31.6875C204.087 32.1094 203.926 32.7839 203.926 33.7109C203.926 34.638 204.087 35.3151 204.41 35.7422C204.733 36.1693 205.241 36.3828 205.933 36.3828C206.631 36.3828 207.142 36.1693 207.465 35.7422C207.793 35.3151 207.957 34.638 207.957 33.7109C207.957 32.7839 207.793 32.1094 207.465 31.6875C207.142 31.2656 206.631 31.0547 205.933 31.0547C205.241 31.0547 204.733 31.2656 204.41 31.6875ZM212.265 37.5234V29.9219C212.265 29.7812 212.31 29.6667 212.398 29.5781C212.492 29.4844 212.606 29.4375 212.742 29.4375H214.492C214.627 29.4375 214.739 29.4844 214.828 29.5781C214.922 29.6667 214.968 29.7812 214.968 29.9219V30.4141C215.864 29.6589 216.817 29.2812 217.828 29.2812C218.843 29.2812 219.669 29.5911 220.304 30.2109C220.94 30.8255 221.257 31.7682 221.257 33.0391V37.5234C221.257 37.6589 221.211 37.7734 221.117 37.8672C221.028 37.9557 220.914 38 220.773 38H219.031C218.896 38 218.781 37.9557 218.687 37.8672C218.599 37.7734 218.554 37.6589 218.554 37.5234V33.0391C218.554 31.7943 218.057 31.1719 217.062 31.1719C216.411 31.1719 215.713 31.5443 214.968 32.2891V37.5234C214.968 37.6589 214.922 37.7734 214.828 37.8672C214.739 37.9557 214.627 38 214.492 38H212.742C212.606 38 212.492 37.9557 212.398 37.8672C212.31 37.7734 212.265 37.6589 212.265 37.5234ZM227.425 36.3047L228.496 36.2109H228.785C228.925 36.2109 229.04 36.2552 229.128 36.3438C229.222 36.4323 229.269 36.5469 229.269 36.6875V37.5234C229.269 37.638 229.222 37.7422 229.128 37.8359C229.04 37.9245 228.925 37.9792 228.785 38C228.253 38.1042 227.561 38.1562 226.707 38.1562C224.467 38.1562 223.347 36.9844 223.347 34.6406V27.2812C223.347 27.1406 223.391 27.026 223.48 26.9375C223.574 26.8438 223.688 26.7969 223.824 26.7969H225.574C225.709 26.7969 225.821 26.8438 225.91 26.9375C226.003 27.026 226.05 27.1406 226.05 27.2812V29.8906H228.23C228.365 29.8906 228.477 29.9349 228.566 30.0234C228.66 30.112 228.707 30.2266 228.707 30.3672V31.2969C228.707 31.4375 228.66 31.5521 228.566 31.6406C228.477 31.7292 228.365 31.7734 228.23 31.7734H226.05V34.6406C226.05 35.1719 226.175 35.5833 226.425 35.875C226.675 36.1615 227.009 36.3047 227.425 36.3047ZM230.71 27.8047V27.5391C230.71 27.263 230.788 27.0443 230.945 26.8828C231.106 26.7214 231.327 26.6406 231.609 26.6406H232.577C232.854 26.6406 233.072 26.7214 233.234 26.8828C233.395 27.0391 233.476 27.2578 233.476 27.5391V27.8047C233.476 28.0807 233.395 28.2995 233.234 28.4609C233.077 28.6224 232.859 28.7031 232.577 28.7031H231.609C231.333 28.7031 231.114 28.6224 230.952 28.4609C230.791 28.2995 230.71 28.0807 230.71 27.8047ZM230.742 37.5234V30.1094C230.742 29.9688 230.786 29.8542 230.874 29.7656C230.968 29.6771 231.083 29.6328 231.218 29.6328H232.968C233.109 29.6328 233.223 29.6797 233.312 29.7734C233.4 29.862 233.445 29.974 233.445 30.1094V37.5234C233.445 37.6641 233.398 37.7786 233.304 37.8672C233.216 37.9557 233.104 38 232.968 38H231.218C231.077 38 230.963 37.9557 230.874 37.8672C230.786 37.7786 230.742 37.6641 230.742 37.5234ZM235.558 37.5234V29.9219C235.558 29.7812 235.602 29.6667 235.691 29.5781C235.784 29.4844 235.899 29.4375 236.034 29.4375H237.784C237.92 29.4375 238.032 29.4844 238.12 29.5781C238.214 29.6667 238.261 29.7812 238.261 29.9219V30.4141C239.157 29.6589 240.11 29.2812 241.12 29.2812C242.136 29.2812 242.961 29.5911 243.597 30.2109C244.232 30.8255 244.55 31.7682 244.55 33.0391V37.5234C244.55 37.6589 244.503 37.7734 244.409 37.8672C244.321 37.9557 244.206 38 244.066 38H242.323C242.188 38 242.073 37.9557 241.98 37.8672C241.891 37.7734 241.847 37.6589 241.847 37.5234V33.0391C241.847 31.7943 241.349 31.1719 240.355 31.1719C239.704 31.1719 239.006 31.5443 238.261 32.2891V37.5234C238.261 37.6589 238.214 37.7734 238.12 37.8672C238.032 37.9557 237.92 38 237.784 38H236.034C235.899 38 235.784 37.9557 235.691 37.8672C235.602 37.7734 235.558 37.6589 235.558 37.5234ZM246.64 34.3984V29.9219C246.64 29.7812 246.684 29.6667 246.772 29.5781C246.866 29.4844 246.981 29.4375 247.116 29.4375H248.866C249.002 29.4375 249.114 29.4844 249.202 29.5781C249.296 29.6667 249.343 29.7812 249.343 29.9219V34.3984C249.343 35.6484 249.838 36.2734 250.827 36.2734C251.478 36.2734 252.179 35.8984 252.929 35.1484V29.9219C252.929 29.7812 252.973 29.6667 253.062 29.5781C253.155 29.4844 253.27 29.4375 253.405 29.4375H255.147C255.288 29.4375 255.403 29.4844 255.491 29.5781C255.585 29.6667 255.632 29.7812 255.632 29.9219V37.5234C255.632 37.6589 255.585 37.7734 255.491 37.8672C255.403 37.9557 255.288 38 255.147 38H253.405C253.27 38 253.155 37.9557 253.062 37.8672C252.973 37.7734 252.929 37.6589 252.929 37.5234V37.0234C252.033 37.7786 251.077 38.1562 250.062 38.1562C249.051 38.1562 248.228 37.849 247.593 37.2344C246.957 36.6146 246.64 35.6693 246.64 34.3984ZM258.44 37.0156C257.638 36.2552 257.237 35.1615 257.237 33.7344C257.237 32.3021 257.641 31.2031 258.448 30.4375C259.255 29.6667 260.375 29.2812 261.808 29.2812C263.24 29.2812 264.357 29.6562 265.159 30.4062C265.961 31.151 266.362 32.2214 266.362 33.6172V34.0625C266.362 34.2031 266.315 34.3203 266.222 34.4141C266.133 34.5026 266.018 34.5469 265.878 34.5469H259.995C260.047 35.1875 260.229 35.6536 260.542 35.9453C260.86 36.237 261.365 36.3828 262.058 36.3828C262.75 36.3828 263.224 36.2266 263.479 35.9141C263.735 35.6016 264.05 35.4427 264.425 35.4375H265.589C265.729 35.4375 265.844 35.4844 265.933 35.5781C266.026 35.6667 266.073 35.7812 266.073 35.9219C266.073 37.4167 264.649 38.1615 261.8 38.1562C260.362 38.1562 259.242 37.776 258.44 37.0156ZM259.979 32.8984H263.612C263.56 31.6693 262.956 31.0547 261.8 31.0547C260.649 31.0547 260.042 31.6693 259.979 32.8984ZM272.995 30.125C272.953 29.9896 272.93 29.8776 272.924 29.7891C272.924 29.5599 273.055 29.4427 273.315 29.4375H274.768C275.013 29.4375 275.232 29.5 275.424 29.625C275.617 29.7448 275.75 29.9115 275.823 30.125L277.104 34.3359L278.37 30.125C278.51 29.6667 278.807 29.4375 279.26 29.4375H280.643C281.101 29.4375 281.398 29.6667 281.534 30.125L282.799 34.3359L284.081 30.125C284.154 29.9115 284.286 29.7448 284.479 29.625C284.672 29.5 284.891 29.4375 285.135 29.4375H286.588C286.844 29.4375 286.974 29.5547 286.979 29.7891C286.979 29.8828 286.956 29.9948 286.909 30.125L284.542 37.3125C284.469 37.526 284.338 37.6953 284.151 37.8203C283.963 37.9401 283.763 38 283.549 38H282.448C282.234 38 282.031 37.9375 281.838 37.8125C281.646 37.6823 281.518 37.5156 281.456 37.3125L279.956 32.6562L278.448 37.3125C278.385 37.5156 278.258 37.6823 278.065 37.8125C277.872 37.9375 277.669 38 277.456 38H276.354C276.141 38 275.94 37.9401 275.753 37.8203C275.565 37.6953 275.435 37.526 275.362 37.3125L272.995 30.125ZM288.264 27.8047V27.5391C288.264 27.263 288.342 27.0443 288.498 26.8828C288.66 26.7214 288.881 26.6406 289.162 26.6406H290.131C290.407 26.6406 290.626 26.7214 290.787 26.8828C290.949 27.0391 291.03 27.2578 291.03 27.5391V27.8047C291.03 28.0807 290.949 28.2995 290.787 28.4609C290.631 28.6224 290.412 28.7031 290.131 28.7031H289.162C288.886 28.7031 288.668 28.6224 288.506 28.4609C288.345 28.2995 288.264 28.0807 288.264 27.8047ZM288.295 37.5234V30.1094C288.295 29.9688 288.34 29.8542 288.428 29.7656C288.522 29.6771 288.636 29.6328 288.772 29.6328H290.522C290.662 29.6328 290.777 29.6797 290.866 29.7734C290.954 29.862 290.998 29.974 290.998 30.1094V37.5234C290.998 37.6641 290.952 37.7786 290.858 37.8672C290.769 37.9557 290.657 38 290.522 38H288.772C288.631 38 288.517 37.9557 288.428 37.8672C288.34 37.7786 288.295 37.6641 288.295 37.5234ZM297.19 36.3047L298.26 36.2109H298.549C298.69 36.2109 298.804 36.2552 298.893 36.3438C298.987 36.4323 299.033 36.5469 299.033 36.6875V37.5234C299.033 37.638 298.987 37.7422 298.893 37.8359C298.804 37.9245 298.69 37.9792 298.549 38C298.018 38.1042 297.325 38.1562 296.471 38.1562C294.231 38.1562 293.112 36.9844 293.112 34.6406V27.2812C293.112 27.1406 293.156 27.026 293.244 26.9375C293.338 26.8438 293.453 26.7969 293.588 26.7969H295.338C295.474 26.7969 295.586 26.8438 295.674 26.9375C295.768 27.026 295.815 27.1406 295.815 27.2812V29.8906H297.994C298.13 29.8906 298.242 29.9349 298.33 30.0234C298.424 30.112 298.471 30.2266 298.471 30.3672V31.2969C298.471 31.4375 298.424 31.5521 298.33 31.6406C298.242 31.7292 298.13 31.7734 297.994 31.7734H295.815V34.6406C295.815 35.1719 295.94 35.5833 296.19 35.875C296.44 36.1615 296.773 36.3047 297.19 36.3047ZM300.475 37.5234V27.2812C300.475 27.1406 300.519 27.026 300.607 26.9375C300.701 26.8438 300.816 26.7969 300.951 26.7969H302.701C302.837 26.7969 302.949 26.8438 303.037 26.9375C303.131 27.026 303.178 27.1406 303.178 27.2812V30.4141C304.074 29.6589 305.027 29.2812 306.037 29.2812C307.053 29.2812 307.878 29.5911 308.514 30.2109C309.149 30.8255 309.467 31.7682 309.467 33.0391V37.5234C309.467 37.6589 309.42 37.7734 309.326 37.8672C309.238 37.9557 309.123 38 308.982 38H307.24C307.105 38 306.99 37.9557 306.897 37.8672C306.808 37.7734 306.764 37.6589 306.764 37.5234V33.0391C306.764 31.7943 306.266 31.1719 305.272 31.1719C304.621 31.1719 303.923 31.5443 303.178 32.2891V37.5234C303.178 37.6589 303.131 37.7734 303.037 37.8672C302.949 37.9557 302.837 38 302.701 38H300.951C300.816 38 300.701 37.9557 300.607 37.8672C300.519 37.7734 300.475 37.6589 300.475 37.5234ZM316.56 37.2812L318.521 29.8438C319.053 27.8177 320.782 26.8021 323.709 26.7969H327.92C328.112 26.7969 328.271 26.8698 328.396 27.0156C328.526 27.1615 328.592 27.3307 328.592 27.5234V37.2812C328.592 37.4844 328.519 37.6562 328.373 37.7969C328.227 37.9323 328.053 38 327.849 38H326.381C326.167 38 325.99 37.9323 325.849 37.7969C325.714 37.6562 325.646 37.4792 325.646 37.2656V35.2969H320.092L319.568 37.2656C319.516 37.4792 319.399 37.6562 319.217 37.7969C319.034 37.9323 318.842 38 318.638 38H317.099C316.896 38 316.75 37.9427 316.662 37.8281C316.573 37.7083 316.529 37.6042 316.529 37.5156C316.534 37.4271 316.545 37.349 316.56 37.2812ZM320.67 33.0859H325.646V29.0078H323.42C322.92 29.0078 322.482 29.151 322.107 29.4375C321.737 29.7188 321.487 30.099 321.357 30.5781L320.67 33.0859ZM330.83 40.1562V29.9219C330.83 29.7812 330.874 29.6667 330.962 29.5781C331.056 29.4844 331.171 29.4375 331.306 29.4375H332.814C332.949 29.4375 333.061 29.4844 333.15 29.5781C333.244 29.6667 333.291 29.7812 333.291 29.9219V30.1562C334.114 29.5729 335.069 29.2812 336.158 29.2812C337.246 29.2812 338.155 29.6667 338.884 30.4375C339.614 31.2031 339.978 32.3021 339.978 33.7344C339.978 35.1615 339.601 36.2552 338.845 37.0156C338.09 37.776 337.072 38.1562 335.791 38.1562C335.129 38.1562 334.377 38.0234 333.533 37.7578V40.1562C333.533 40.2969 333.486 40.4115 333.392 40.5C333.304 40.5938 333.192 40.6406 333.056 40.6406H331.306C331.171 40.6406 331.056 40.5938 330.962 40.5C330.874 40.4115 330.83 40.2969 330.83 40.1562ZM333.533 35.9531C334.205 36.1667 334.77 36.2734 335.228 36.2734C335.942 36.2734 336.447 36.0703 336.744 35.6641C337.046 35.2578 337.197 34.6094 337.197 33.7188C337.197 32.8281 337.054 32.1823 336.767 31.7812C336.486 31.375 336.061 31.1719 335.494 31.1719C334.931 31.1719 334.278 31.4062 333.533 31.875V35.9531ZM341.583 40.1562V29.9219C341.583 29.7812 341.628 29.6667 341.716 29.5781C341.81 29.4844 341.925 29.4375 342.06 29.4375H343.568C343.703 29.4375 343.815 29.4844 343.904 29.5781C343.997 29.6667 344.044 29.7812 344.044 29.9219V30.1562C344.867 29.5729 345.823 29.2812 346.912 29.2812C348 29.2812 348.909 29.6667 349.638 30.4375C350.367 31.2031 350.732 32.3021 350.732 33.7344C350.732 35.1615 350.354 36.2552 349.599 37.0156C348.844 37.776 347.826 38.1562 346.544 38.1562C345.883 38.1562 345.13 38.0234 344.287 37.7578V40.1562C344.287 40.2969 344.24 40.4115 344.146 40.5C344.057 40.5938 343.945 40.6406 343.81 40.6406H342.06C341.925 40.6406 341.81 40.5938 341.716 40.5C341.628 40.4115 341.583 40.2969 341.583 40.1562ZM344.287 35.9531C344.958 36.1667 345.524 36.2734 345.982 36.2734C346.695 36.2734 347.201 36.0703 347.497 35.6641C347.8 35.2578 347.951 34.6094 347.951 33.7188C347.951 32.8281 347.807 32.1823 347.521 31.7812C347.24 31.375 346.815 31.1719 346.247 31.1719C345.685 31.1719 345.031 31.4062 344.287 31.875V35.9531ZM352.337 37.5234V27.2812C352.337 27.1406 352.381 27.026 352.47 26.9375C352.564 26.8438 352.678 26.7969 352.814 26.7969H354.564C354.699 26.7969 354.811 26.8438 354.9 26.9375C354.993 27.026 355.04 27.1406 355.04 27.2812V37.5234C355.04 37.6589 354.993 37.7734 354.9 37.8672C354.811 37.9557 354.699 38 354.564 38H352.814C352.678 38 352.564 37.9557 352.47 37.8672C352.381 37.7734 352.337 37.6589 352.337 37.5234ZM357.841 37.0156C357.039 36.2552 356.638 35.1615 356.638 33.7344C356.638 32.3021 357.041 31.2031 357.849 30.4375C358.656 29.6667 359.776 29.2812 361.208 29.2812C362.64 29.2812 363.758 29.6562 364.56 30.4062C365.362 31.151 365.763 32.2214 365.763 33.6172V34.0625C365.763 34.2031 365.716 34.3203 365.622 34.4141C365.534 34.5026 365.419 34.5469 365.278 34.5469H359.396C359.448 35.1875 359.63 35.6536 359.943 35.9453C360.26 36.237 360.765 36.3828 361.458 36.3828C362.151 36.3828 362.625 36.2266 362.88 35.9141C363.135 35.6016 363.45 35.4427 363.825 35.4375H364.989C365.13 35.4375 365.245 35.4844 365.333 35.5781C365.427 35.6667 365.474 35.7812 365.474 35.9219C365.474 37.4167 364.049 38.1615 361.2 38.1562C359.763 38.1562 358.643 37.776 357.841 37.0156ZM359.38 32.8984H363.013C362.961 31.6693 362.357 31.0547 361.2 31.0547C360.049 31.0547 359.443 31.6693 359.38 32.8984Z"
          fill="black"
        />
        <defs>
          <clipPath id="clip0_3_2447">
            <rect
              width="24"
              height="29.484"
              fill="white"
              transform="translate(153.5 15.258)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};