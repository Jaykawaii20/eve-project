import React from "react";

const CreateIcon = (props) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Icons">
        <path
          id="Vector"
          opacity="0.2"
          d="M33.75 7.5V32.5C33.75 32.8315 33.6183 33.1495 33.3839 33.3839C33.1495 33.6183 32.8315 33.75 32.5 33.75H7.5C7.16848 33.75 6.85054 33.6183 6.61612 33.3839C6.3817 33.1495 6.25 32.8315 6.25 32.5V7.5C6.25 7.16848 6.3817 6.85054 6.61612 6.61612C6.85054 6.3817 7.16848 6.25 7.5 6.25H32.5C32.8315 6.25 33.1495 6.3817 33.3839 6.61612C33.6183 6.85054 33.75 7.16848 33.75 7.5Z"
          fill={props.color}
        />
        <path
          id="Vector_2"
          d="M32.5 5H7.5C6.83696 5 6.20107 5.26339 5.73223 5.73223C5.26339 6.20107 5 6.83696 5 7.5V32.5C5 33.163 5.26339 33.7989 5.73223 34.2678C6.20107 34.7366 6.83696 35 7.5 35H32.5C33.163 35 33.7989 34.7366 34.2678 34.2678C34.7366 33.7989 35 33.163 35 32.5V7.5C35 6.83696 34.7366 6.20107 34.2678 5.73223C33.7989 5.26339 33.163 5 32.5 5ZM32.5 32.5H7.5V7.5H32.5V32.5ZM27.5 20C27.5 20.3315 27.3683 20.6495 27.1339 20.8839C26.8995 21.1183 26.5815 21.25 26.25 21.25H21.25V26.25C21.25 26.5815 21.1183 26.8995 20.8839 27.1339C20.6495 27.3683 20.3315 27.5 20 27.5C19.6685 27.5 19.3505 27.3683 19.1161 27.1339C18.8817 26.8995 18.75 26.5815 18.75 26.25V21.25H13.75C13.4185 21.25 13.1005 21.1183 12.8661 20.8839C12.6317 20.6495 12.5 20.3315 12.5 20C12.5 19.6685 12.6317 19.3505 12.8661 19.1161C13.1005 18.8817 13.4185 18.75 13.75 18.75H18.75V13.75C18.75 13.4185 18.8817 13.1005 19.1161 12.8661C19.3505 12.6317 19.6685 12.5 20 12.5C20.3315 12.5 20.6495 12.6317 20.8839 12.8661C21.1183 13.1005 21.25 13.4185 21.25 13.75V18.75H26.25C26.5815 18.75 26.8995 18.8817 27.1339 19.1161C27.3683 19.3505 27.5 19.6685 27.5 20Z"
          fill={props.color}
        />
      </g>
    </svg>
  );
};

export default CreateIcon;