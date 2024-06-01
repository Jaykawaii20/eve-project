import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const Button = (props) => {
  return (
    <div className={`${props.buttonStyle}`}  onClick={props.onClick}>
      <p className={`${props.textStyle}`}>
        {props.text}
      </p>
    </div>
  );
};
