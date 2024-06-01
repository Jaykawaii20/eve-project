import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import React from "react";

const AchievementCard = ({ item }) => {
  return (
    <div className="w-[288px] h-[483px] bg-white rounded-[12px] flex flex-col justify-between p-[10px]">
      <div className=" flex flex-1 justify-center items-center ">
        <img src="/images/svgs/badge.svg" alt="" />
      </div>
      <div className="flex-1">
        <p className="text-black text-[24px] text-center">
          <span className="text-[#589CFF] mr-2 text-[24px] font-[500]">
            {item.counts}
          </span>
          <span className="text-[24px] font-[500]">{item.type}</span>
        </p>
        <p className="text-[12px] text-[#A8A8A8] text-center">
          {item.description}
        </p>
        <div className="flex justify-center">
          <div className="py-[8px] px-[12px] mt-[12px] flex items-center rounded-[4px] border-[1px] border-[#589CFF] gap-[12px]">
            <p className="text-[#589CFF]">{item.tokens} Token</p>
            <div
              className={`flex justify-between py-[4px] px-[12px] rounded-[4px] items-center gap-[12px] bg-[${
                item.lock ? "#589CFF" : "white"
              }]`}
            >
              <p
                className={`flex items-center  text-[${
                  item.lock ? "white" : "#A8A8A8"
                }]`}
              >
                {item.lock ? "Unlock" : "Unlocked"}
              </p>
              <p>
                {item.lock ? (
                  <img src="/images/svgs/lock-icon.svg" alt="" />
                ) : (
                  <img src="/images/svgs/unlock-icon.svg" alt="" />
                )}
              </p>
            </div>
          </div>
        </div>
        <div
          className={`flex justify-center gap-[8px] py-[8px] mt-[12px] px-[12px] rounded-[12px] items-center  bg-[#589CFF]`}
        >
          <ArrowTopRightOnSquareIcon className="h-[32px] w-[32px] text-white" />
          <p className={`flex items-center text-white]`}>See More</p>
        </div>
      </div>
    </div>
  );
};

export default AchievementCard;
