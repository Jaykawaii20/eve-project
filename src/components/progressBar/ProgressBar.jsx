"use client";
import React from "react";
import { Line, Circle } from "rc-progress";
const ProgressBar = () => {
  return (
    <div>
      <p className="font-poppins text-[20px] font-semibold text-[#2F2F2F]">
        Current milestones
      </p>
      <div className="flex flex-col gap-[12px] w-[386px]  justify-between items-start ">
        {/* Milestone 1 */}
        <div className="flex w-[386px] justify-between items-center gap-[7px] flex-shrink-0 bg-white shadow-md p-[12px] rounded-[8px]">
          <img src="/hands.png" alt="picture" />
          <div className="flex flex-col justify-start items-start">
            <p className="text-[12px] font-poppins font-semibold text-[#2F2F2F]">
              Reach 500 subscribers
            </p>
            <Line
              className="w-[245px]"
              percent={52}
              strokeWidth={2}
              trailWidth={2}
              strokeColor="#589CFF"
            />
          </div>
          <p className="font-poppins text-[12px] font-semibold text-[#4F4F4F] text-center">
            257/500
          </p>
        </div>
        {/* Milestone 2 */}
        <div className="flex w-[386px] justify-between gap-[7px] items-center flex-shrink-0 bg-white shadow-md p-[12px] rounded-[8px]">
          <img src="/sideupload.png" alt="picture" />
          <div className="flex flex-col justify-center items-flex-start">
            <p className="text-[12px] font-poppins font-semibold text-[#2F2F2F]">
              50 Content Creations
            </p>
            <Line
              className="w-[245px]"
              percent={52}
              strokeWidth={2}
              trailWidth={2}
              strokeColor="#589CFF"
            />
          </div>
          <p className="font-poppins text-[12px] font-semibold text-[#4F4F4F] text-center">
            24/50
          </p>
        </div>
        {/* Milestone 3 */}
        <div className="flex w-[386px] justify-between gap-[7px] items-center flex-shrink-0 bg-white shadow-md p-[12px] rounded-[8px]">
          <img src="/sideheart.png" alt="picture" />
          <div className="flex flex-col justify-center items-flex-start">
            <p className="text-[12px] font-poppins font-semibold text-[#2F2F2F]">
              1000 Hearts
            </p>
            <Line
              className="w-[245px]"
              percent={52}
              strokeWidth={2}
              trailWidth={2}
              strokeColor="#589CFF"
            />
          </div>
          <p className="font-poppins text-[12px] font-semibold text-[#4F4F4F] text-center">
            560/1000
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
