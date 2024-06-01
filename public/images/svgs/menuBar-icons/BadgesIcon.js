import React from "react";

const BadgesIcon = (props) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_661_13656)">
        <path
          opacity="0.2"
          d="M10 7.5H30C30.3315 7.5 30.6495 7.6317 30.8839 7.86612C31.1183 8.10054 31.25 8.41848 31.25 8.75V17.3594C31.25 23.5625 26.2891 28.7031 20.0859 28.75C18.6014 28.7613 17.1292 28.4787 15.7544 27.9184C14.3795 27.3582 13.1292 26.5313 12.0754 25.4855C11.0216 24.4397 10.1852 23.1957 9.6145 21.8251C9.04377 20.4546 8.74996 18.9846 8.75 17.5V8.75C8.75 8.41848 8.8817 8.10054 9.11612 7.86612C9.35054 7.6317 9.66848 7.5 10 7.5Z"
          fill={props.color}
        />
        <path
          d="M15 35H25"
          stroke={props.color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 28.75V35"
          stroke={props.color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.0625 20H7.5C6.17392 20 4.90215 19.4732 3.96447 18.5355C3.02678 17.5979 2.5 16.3261 2.5 15V12.5C2.5 12.1685 2.6317 11.8505 2.86612 11.6161C3.10054 11.3817 3.41848 11.25 3.75 11.25H8.75"
          stroke={props.color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M30.9375 20H32.5C33.8261 20 35.0979 19.4732 36.0355 18.5355C36.9732 17.5979 37.5 16.3261 37.5 15V12.5C37.5 12.1685 37.3683 11.8505 37.1339 11.6161C36.8995 11.3817 36.5815 11.25 36.25 11.25H31.25"
          stroke={props.color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 7.5H30C30.3315 7.5 30.6495 7.6317 30.8839 7.86612C31.1183 8.10054 31.25 8.41848 31.25 8.75V17.3594C31.25 23.5625 26.2891 28.7031 20.0859 28.75C18.6014 28.7613 17.1292 28.4787 15.7544 27.9184C14.3795 27.3582 13.1292 26.5313 12.0754 25.4855C11.0216 24.4397 10.1852 23.1957 9.6145 21.8251C9.04377 20.4546 8.74996 18.9846 8.75 17.5V8.75C8.75 8.41848 8.8817 8.10054 9.11612 7.86612C9.35054 7.6317 9.66848 7.5 10 7.5Z"
          stroke={props.color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_661_13656">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default BadgesIcon;
