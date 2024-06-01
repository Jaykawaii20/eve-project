"use client";
import React from "react";
import { Poppins } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import MenuBar from "@/components/menuBar/MenuBar";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const page = () => {
  return (
    <div className="flex flex-wrap w-full h-full justify-between items-start gap-[20px]">
      <div className="flex flex-col items-start gap-[24px] h-auto w-auto">
        <div className="self-stretch">
          <p className="text-[28px] font-poppins font-semibold text-[#2F2F2F]">
            Plans (3)
          </p>
        </div>
        <div className="flex flex-col lg:w-[628px] items-center py-[40px] px-[36px] gap-[16px] rounded-[24px] bg-white max-sm:bg-opacity-50">
          <div className="flex items-center py-[12px] px-[24px] gap-[24px] rounded-[12px] bg-[#2F2F2F]">
            <p className="font-poppins font-semibold text-[32px] text-white">
              Basic
            </p>
            <img src="/edit.png" alt="picture" />
            <img src="/delete.png" alt="picture" />
          </div>
          <div className="h-auto w-auto">
            <p className="text-[20px] text-[#4F4F4F] font-poppins font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi.
            </p>
          </div>
          <div className="flex justify-center items-center gap-[30px] p-[12px]">
            <p className="font-poppins text-[32px] font-medium text-[#2F2F2F]">
              $50/Year
            </p>
            <p className="text-[#2F2F2F] font-poppins text-[20px] font-medium">
              $5/Month
            </p>
          </div>
          <div className="flex justify-between items-flex-start flex-col h-[64.25px]">
            <div className="flex items-center gap-[12px]">
              <img src="/tikk.png" alt="picture" />
              <p className="text-[16px] text-[#2F2F2F] font-poppins font-medium">
                Access to all digital creations
              </p>
            </div>
            <div className="flex items-center gap-[12px]">
              <img src="/tikk.png" alt="picture" />
              <p className="text-[16px] text-[#2F2F2F] font-poppins font-medium">
                Daily notifications
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-start py-[60px] px-[42px] max-sm:px-[24px] max-sm:gap-[10px] gap-[36px] rounded-[24px] bg-[#FFFFFF] max-sm:bg-opacity-50">
        <div className="w-auto h-auto">
          <p className="text-start text-[20px] text-[#2F2F2F] font-poppins font-semibold">
            Create a plan
          </p>
        </div>
        <div className="flex items-center py-[8px] px-[12px] gap-[8px]  border-[1px] border-solid border-[#C0C1C3] rounded-[12px] bg-[#E3E3E3] w-full h-auto">
          <input
            className="bg-[#E3E3E3]"
            type="text"
            placeholder="Package name"
          />
        </div>
        <div className="flex items-center py-[8px] px-[12px] gap-[8px] self-stretch border-[1px] border-solid border-[#C0C1C3] rounded-[12px] bg-[#E3E3E3] w-full h-auto">
          <input
            className="bg-[#E3E3E3]"
            type="text"
            placeholder="Description"
          />
        </div>
        <div className="flex items-center py-[8px] px-[12px] gap-[8px] self-stretch border-[1px] border-solid border-[#C0C1C3] rounded-[12px] bg-[#E3E3E3] w-full h-auto">
          <input
            className="bg-[#E3E3E3]"
            type="text"
            placeholder="Annual price"
          />
        </div>
        <div className="flex items-center py-[8px] px-[12px] gap-[8px] self-stretch border-[1px] border-solid border-[#C0C1C3] rounded-[12px] bg-[#E3E3E3] w-full h-auto">
          <input
            className="bg-[#E3E3E3]"
            type="text"
            placeholder="Monthly price"
          />
        </div>
        <div className="flex flex-col justify-center items-center self-stretch gap-[12px]">
          <div className="flex justify-between items-center self-stretch py-[8px] px-[12px] border-[1px] border-solid border-[#C0C1C3] rounded-[12px] bg-[#E3E3E3]">
            <input
              className="text-[#A8A8A8] font-poppins font-medium bg-[#E3E3E3] text-[16px]"
              type="text"
              placeholder="Benefits"
            />
            <button className="flex justify-center items-center py-[4px] px-[8px] gap-[4px] border-[1px] border-solid border-[#4989E6] rounded-[4px] bg-[#589CFF] shadow-[rgba(0, 0, 0, 0.10)]">
              <p className="text-white font-poppins font-semibold text-[14px] text-center">
                Add
              </p>
            </button>
          </div>
          <div className="flex items-center flex-wrap self-stretch gap-[12px]">
            <button className="flex justify-center items-center py-[4px] px-[20px] gap-[10px] bg-[#589CFF] rounded-[8px]">
              <p className="text-white font-poppins font-medium text-[12px]">
                Content access
              </p>
              <img src="/wrong2.png" alt="picture" />
            </button>
            <button className="flex justify-center items-center py-[4px] px-[20px] gap-[10px] bg-[#589CFF] rounded-[8px]">
              <p className="text-white font-poppins font-medium text-[12px]">
                Daily Notifications
              </p>
              <img src="/wrong2.png" alt="picture" />
            </button>
          </div>
        </div>
        <div className="flex items-center flex-wrap gap-[12px]">
          <div className="flex justify-center items-center gap-[12px] py-[8px] px-[12px] rounded-[12px] bg-[#FFFFFF]">
            <img src="/whitecard.png" alt="picture" />
            <p className="text-[16px] text-black font-poppins font-medium text-center">
              Card color
            </p>
          </div>
          <div className="flex justify-center items-center gap-[12px] py-[8px] px-[12px] rounded-[12px] bg-[#FFFFFF]">
            <img src="/yellowcard.png" alt="picture" />
            <p className="text-[16px] text-black font-poppins font-medium text-center">
              Title color
            </p>
          </div>
          <div className="flex justify-center items-center gap-[12px] py-[8px] px-[12px] rounded-[12px] bg-[#FFFFFF]">
            <img src="/blackcard.png" alt="picture" />
            <p className="text-[16px] text-black font-poppins font-medium text-center">
              Card border
            </p>
          </div>
        </div>
        <button className="flex justify-center items-center py-[8px] px-[16px] gap-[8px] self-stretch border-[1px] border-solid border-[#4989E6] rounded-[12px] bg-[#589CFF] shadow-[rgba(0, 0, 0, 0.10)]">
          <img src="/plusicon.png" alt="picture" />
          <p className="text-white font-poppins text-[16px] font-medium">Add</p>
        </button>
      </div>
    </div>
  );
};

export default page;
