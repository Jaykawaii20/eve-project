"use client";
import React from "react";
import { Poppins } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import MenuBar from "@/components/menuBar/MenuBar";
import SuggestedPost from "@/components/suggestedPost/SuggestedPost";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const page = () => {
  return (
    <div className="flex h-full w-full px-[42px] justify-between items-start gap-[40px]">
      <div className="flex flex-col items-start gap-[50px] height-auto width-auto">
        <div className="flex flex-col items-start gap-[10px] bg-white p-[36px] width-[1123px] rounded-[24px]">
          <div className="flex flex-col items-start gap-[12px] width-full height-auto">
            <p className="text-black font-[${poppins}] font-semibold text-[26px]">
              Recent Bookmarks
            </p>
            <div className="flex width-[1051px] height-auto content-center items-center flex-wrap gap-[10px]">
              <img src="/bookmark1.png" alt="picture" />
              <img src="/bookmark2.png" alt="picture" />
              <img src="/bookmark3.png" alt="picture" />
              <img src="/bookmark4.png" alt="picture" />
              <img src="/bookmark5.png" alt="picture" />
            </div>
          </div>
        </div>
        <div className="flex width-[1123px] height-auto py-[24px] px-[36px] items-start flex-col bg-white rounded-[24px] gap-[20px]">
          <p className="text-black font-[${poppins}] font-semibold text-[26px]">
            Folders
          </p>
          <div className="flex width-[1132px] height-auto content-center items-center flex-wrap gap-[20px]">
            {/* Folder Block 1 */}
            <div className="flex flex-col items-center  justify-center p-[6px] gap-[12px] rounded-[12px] border-[1px] border-[#A8A8A8] bg-white shadow-rgba-0-0-0-0.10 height-auto width-auto">
              <div className="flex w-[241px] h-[220px]  items-center justify-center flex-wrap gap-[10px]">
                <img
                  className="h-[100px] w-[100px]"
                  height={100}
                  width={100}
                  src="folderimg1.png"
                  alt="picture"
                />
                <img
                  className="h-[100px] w-[100px]"
                  height={100}
                  width={100}
                  src="folderimg2.png"
                  alt="picture"
                />
                <img
                  className="h-[100px] w-[100px]"
                  height={100}
                  width={100}
                  src="folderimg3.png"
                  alt="picture"
                />
                <div className="flex w-[100px] h-[100px] py-[2px] px-[7px] items-center justify-center  rounded-[4px] gap-[10px]  bg-[#D9D9D9]">
                  <p className="text-white text-[32px] font-semibold font-[${poppins}]">
                    +99
                  </p>
                </div>
              </div>
              <div>
                <p className="font-[${poppins}] font-semibold text-[16px] text-black">
                  All
                </p>
              </div>
            </div>

            {/* Folder Block 2 */}
            <div className="flex flex-col items-center  justify-center p-[6px] gap-[12px] rounded-[12px] border-[1px] border-[#A8A8A8] bg-white shadow-rgba-0-0-0-0.10 height-auto width-auto">
              <div className="flex w-[241px] h-[220px]  items-center justify-center flex-wrap gap-[10px]">
                <img
                  className="h-[100px] w-[100px]"
                  height={100}
                  width={100}
                  src="folderimg1.png"
                  alt="picture"
                />
                <img
                  className="h-[100px] w-[100px]"
                  height={100}
                  width={100}
                  src="folderimg2.png"
                  alt="picture"
                />
                <img
                  className="h-[100px] w-[100px]"
                  height={100}
                  width={100}
                  src="folderimg3.png"
                  alt="picture"
                />
                <div className="flex w-[100px] h-[100px] py-[2px] px-[7px] items-center justify-center  rounded-[4px] gap-[10px]  bg-[#D9D9D9]">
                  <p className="text-white text-[32px] font-semibold font-[${poppins}]">
                    +99
                  </p>
                </div>
              </div>
              <div>
                <p className="font-[${poppins}] font-semibold text-[16px] text-black">
                  All
                </p>
              </div>
            </div>

            {/* Folder Block 3 */}
            <div className="flex flex-col items-center  justify-center p-[6px] gap-[12px] rounded-[12px] border-[1px] border-[#A8A8A8] bg-white shadow-rgba-0-0-0-0.10 height-auto width-auto">
              <div className="flex w-[241px] h-[220px]  items-center justify-center flex-wrap gap-[10px]">
                <img
                  className="h-[100px] w-[100px]"
                  height={100}
                  width={100}
                  src="folderimg1.png"
                  alt="picture"
                />
                <img
                  className="h-[100px] w-[100px]"
                  height={100}
                  width={100}
                  src="folderimg2.png"
                  alt="picture"
                />
                <img
                  className="h-[100px] w-[100px]"
                  height={100}
                  width={100}
                  src="folderimg3.png"
                  alt="picture"
                />
                <div className="flex w-[100px] h-[100px] py-[2px] px-[7px] items-center justify-center  rounded-[4px] gap-[10px]  bg-[#D9D9D9]">
                  <p className="text-white text-[32px] font-semibold font-[${poppins}]">
                    +99
                  </p>
                </div>
              </div>
              <div>
                <p className="font-[${poppins}] font-semibold text-[16px] text-black">
                  All
                </p>
              </div>
            </div>

            <button className="flex w-[240px] h-[220px] py-[2px] px-[7px] flex-col items-center justify-center gap-[-15px] rounded-[8px]  bg-[#D9D9D9]">
              <p className="text-white font-[${poppins}] font-semibold text-[64px]">
                +
              </p>
              <p className="text-white font-[${poppins}] font-semibold text-[20px]">
                New folder
              </p>
            </button>
          </div>
        </div>
      </div>
      <div className="max-xl:hidden">
        <SuggestedPost />
      </div>
    </div>
  );
};

export default page;
