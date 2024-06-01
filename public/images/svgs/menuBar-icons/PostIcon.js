import React from "react";

const PostIcon = (props) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Icons" clipPath="url(#clip0_661_4283)">
        <path
          id="Vector"
          opacity="0.2"
          d="M31.25 7.5H8.75C8.05964 7.5 7.5 8.05964 7.5 8.75V31.25C7.5 31.9404 8.05964 32.5 8.75 32.5H31.25C31.9404 32.5 32.5 31.9404 32.5 31.25V8.75C32.5 8.05964 31.9404 7.5 31.25 7.5Z"
          fill={props.color}
        />
        <path
          id="Vector_2"
          d="M31.25 7.5H8.75C8.05964 7.5 7.5 8.05964 7.5 8.75V31.25C7.5 31.9404 8.05964 32.5 8.75 32.5H31.25C31.9404 32.5 32.5 31.9404 32.5 31.25V8.75C32.5 8.05964 31.9404 7.5 31.25 7.5Z"
          stroke={props.color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_3"
          d="M20 7.5V32.5"
          stroke={props.color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_4"
          d="M7.5 20H32.5"
          stroke={props.color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_661_4283">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PostIcon;
