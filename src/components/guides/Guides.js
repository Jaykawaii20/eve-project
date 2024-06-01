import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const Guides = () => {
  return (
    <div className="flex flex-col items-start py-[24px] px-[20px] gap-[11px] rounded-[12px] bg-opacity-50 bg-white">
      <p className="text-[#2F2F2F] text-[20px] font-bold font-poppins">
        Guides
      </p>
      <div className="flex flex-col items-center gap-[10px]">
        <div className="flex flex-col items-center justify-center w-[355px] h-[240px] p-[12px] gap-[12px] rounded-[12px] bg-white shadow-[rgba(0, 0, 0, 0.10)]">
          <p className="text-[#2F2F2F] font-poppins text-16px font-medium text-center">
            How to create Eve’s Account
          </p>
          <img src="/homepage.png" alt="picture" />
        </div>
        <button className="flex items-center justify-center w-[356px] h-auto py-[8px] px-[16px] gap-[8px] rounded-[12px] border-[1px] border-solid border-[#4989E6] bg-[#589CFF] shadow-[rgba(0, 0, 0, 0.10)]">
          <p className="text-white font-poppins text-[16px] font-medium">
            Watch
          </p>
          <img src="/greater.png" alt="picture" />
        </button>
      </div>
      <div className="flex flex-col items-center gap-[10px]">
        <div className="flex flex-col items-center justify-center w-[355px] h-[240px] p-[12px] gap-[12px] rounded-[12px] bg-white shadow-[rgba(0, 0, 0, 0.10)]">
          <p className="text-[#2F2F2F] font-poppins text-[16px] font-medium text-center">
            How to update Eve’s Account
          </p>
          <img src="/homepage.png" alt="picture" />
        </div>
        <button className="flex items-center justify-center w-[356px] h-auto py-[8px] px-[16px] gap-[8px] rounded-[12px] border-[1px] border-solid border-[#4989E6] bg-[#589CFF] shadow-[rgba(0, 0, 0, 0.10)]">
          <p className="text-white font-poppins text-[16px] font-medium">
            Watch
          </p>
          <img src="/greater.png" alt="picture" />
        </button>
      </div>
    </div>
  );
};

export default Guides;
