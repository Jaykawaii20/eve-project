"use client";
import React from "react";
import { Poppins } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import { Menu } from "@headlessui/react";
import MenuBar from "@/components/menuBar/MenuBar";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const page = () => {
  return (
    <div className="flex flex-wrap w-full items-start justify-start h-auto gap-[60px] ml-[50px] max-sm:gap-[20px]">
      <div className="flex flex-col justify-start items-start gap-[36px] max-sm:gap-[8px]">
        <div className="flex flex-wrap justify-start items-start gap-[32px] max-sm:gap-[8px]">
          <p className="font-poppins text-[28px] max-sm:text-[20px] font-semibold text-black">
            Subscriptions (10)
          </p>
          <div className="flex items-center gap-[8px]">
            <p className="text-[20px] max-sm:text-[12px] text-[#2F2F2F] font-poppins font-medium">
              Sort By:
            </p>
            <button className="flex items-center px-[12px] h-[48px] max-sm:h-[28px] gap-[2px] border-[1px] border-solid border-A8A8A8 rounded-[12px] bg-white">
              <p className="text-[16px] text-black font-poppins font-medium">
                Recent first
              </p>
              <img src="/list.png" alt="picture" />
            </button>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-[9px] items-center w-[756px] max-lg:w-auto p-[12px] rounded-[12px] bg-white">
          <div className="flex gap-[9px]">
            <img src="/subscribe.png" alt="picture" />
            <div className="inline-flex flex-col items-start">
              <p className="text-[16px] text-[#2F2F2F] font-poppins font-medium">
                Christopher Taylor
              </p>
              <div className="flex items-center justify-center py-[0px] px-[10px] gap-[10px] bg-[#4F4F4F] rounded-[12px]">
                <p className="text-white text-[12px] font-poppins font-medium">
                  Basic plan
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-[9px]">
            <button className="flex justify-center items-center py-[4px] px-[8px] gap-[4px] rounded-[4px] border-[1px] border-solid border-[#4989E6] bg-[#589CFF] shadow-[rgba(0, 0, 0, 0.10)]">
              <p className="text-white text-[14px] font-poppins font-semibold">
                Change Plan
              </p>
            </button>
            <button className="flex justify-center items-center py-[4px] px-[8px] gap-[4px] rounded-[4px] border-[1px] border-solid border-[#4989E6] bg-[#589CFF] shadow-[rgba(0, 0, 0, 0.10)]">
              <p className="text-white text-[14px] font-poppins font-semibold">
                Message
              </p>
            </button>
            <button className="flex justify-center items-center py-[4px] px-[8px] gap-[4px] rounded-[4px] border-[1px] border-solid border-[#CF0505] bg-[#FF3232] shadow-[rgba(0, 0, 0, 0.10)]">
              <p className="text-white text-[14px] font-poppins font-semibold">
                Unsubscribe
              </p>
            </button>
          </div>
        </div>
        {/* ... more content */}
      </div>
      <div className="flex flex-col items-start justify-start gap-[34px] max-sm:gap-[12px]">
        <div className="flex flex-wrap justify-start gap-[32px] max-sm:gap-[8px]">
          <p className="font-poppins text-[28px] max-sm:text-[20px] font-semibold text-black">
            Cancelled Subscriptions (5)
          </p>
          <div className="flex items-center gap-[8px]">
            <p className="text-[20px] max-sm:text-[12px] text-[#2F2F2F] font-poppins font-medium">
              Sort By:
            </p>
            <button className="flex items-center px-[12px] h-[48px] max-sm:h-[28px] gap-[2px] border-[1px] border-solid border-A8A8A8 rounded-[12px] bg-white">
              <p className="text-[16px] text-black font-poppins font-medium">
                Recent first
              </p>
              <img src="/list.png" alt="picture" />
            </button>
          </div>
        </div>
        <div className="flex justify-between gap-[9px] items-center w-[756px] max-lg:w-auto p-[12px] rounded-[12px] bg-white">
          <div className="flex gap-[9px]">
            <img src="/subscribe.png" alt="picture" />
            <div className="inline-flex flex-col items-start">
              <p className="text-[16px] text-[#2F2F2F] font-poppins font-medium">
                Christopher Taylor
              </p>
              <div className="flex items-center justify-center py-[0px] px-[10px] gap-[10px] bg-[#4F4F4F] rounded-[12px]">
                <p className="text-white text-[12px] font-poppins font-medium">
                  Basic plan
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-[9px]">
            <button className="flex justify-center items-center py-[4px] px-[8px] gap-[4px] rounded-[4px] border-[1px] border-solid border-[#4989E6] bg-[#589CFF] shadow-[rgba(0, 0, 0, 0.10)]">
              <p className="text-white text-[14px] font-poppins font-semibold">
                View Plans
              </p>
            </button>
          </div>
        </div>
        {/* ... more content */}
      </div>
    </div>
  );
};

export default page;
