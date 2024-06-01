import React from "react";

const SavedIcon = (props) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_661_13649)">
        <path
          opacity="0.2"
          d="M26.25 35L17.5 28.75L8.75 35V11.25C8.75 10.9185 8.8817 10.6005 9.11612 10.3661C9.35054 10.1317 9.66848 10 10 10H25C25.3315 10 25.6495 10.1317 25.8839 10.3661C26.1183 10.6005 26.25 10.9185 26.25 11.25V35Z"
          fill={props.color}
        />
        <path
          d="M26.25 35L17.5 28.75L8.75 35V11.25C8.75 10.9185 8.8817 10.6005 9.11612 10.3661C9.35054 10.1317 9.66848 10 10 10H25C25.3315 10 25.6495 10.1317 25.8839 10.3661C26.1183 10.6005 26.25 10.9185 26.25 11.25V35Z"
          stroke={props.color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.75 5H30C30.3315 5 30.6495 5.1317 30.8839 5.36612C31.1183 5.60054 31.25 5.91848 31.25 6.25V30"
          stroke={props.color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_661_13649">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SavedIcon;
