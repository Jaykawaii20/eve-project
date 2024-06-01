import React from "react";

const SupportIcon = (props) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_661_13695)">
        <path
          opacity="0.2"
          d="M30.6062 9.39374C33.419 12.2068 34.9992 16.0219 34.9992 20C34.9992 23.9781 33.419 27.7932 30.6062 30.6062L24.4187 24.4187C25.5904 23.2467 26.2486 21.6573 26.2486 20C26.2486 18.3427 25.5904 16.7533 24.4187 15.5812L30.6062 9.39374Z"
          fill={props.color}
        />
        <path
          opacity="0.2"
          d="M9.39378 30.6062C6.58095 27.7932 5.00073 23.9781 5.00073 20C5.00073 16.0219 6.58095 12.2068 9.39378 9.39374L15.5813 15.5812C14.4096 16.7533 13.7514 18.3427 13.7514 20C13.7514 21.6573 14.4096 23.2467 15.5813 24.4187L9.39378 30.6062Z"
          fill={props.color}
        />
        <path
          d="M20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35Z"
          stroke={props.color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 26.25C23.4518 26.25 26.25 23.4518 26.25 20C26.25 16.5482 23.4518 13.75 20 13.75C16.5482 13.75 13.75 16.5482 13.75 20C13.75 23.4518 16.5482 26.25 20 26.25Z"
          stroke={props.color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.5813 15.5812L9.3938 9.39374"
          stroke={props.color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24.4187 15.5812L30.6062 9.39374"
          stroke={props.color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24.4187 24.4188L30.6062 30.6063"
          stroke={props.color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.5813 24.4188L9.3938 30.6063"
          stroke={props.color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_661_13695">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SupportIcon;
