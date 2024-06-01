"use client";

import React from "react";
import Navbar from "@/components/navbar/Navbar";
import MenuBar from "@/components/menuBar/MenuBar";
import Post from "@/components/post/Post";

const page = () => {
  return (
    <div className="sm:ml-[50px]">
      <div>
        <img
          src="/bg4.png"
          className="w-full h-full max-lg:h-[300px]"
          alt="picture"
        />
      </div>
      <div className="flex justify-center w-[99%] h-[243px] rounded-[12px] max-lg:bg-transparent bg-white shadow-[0 0 10px rgba(0, 0, 0, 0.1)] mt-[-50px] ml-[4px]">
        <div className="flex flex-col w-full h-[288px]  gap-[4px]">
          <div className="mt-[-60px] ml-[40px]">
            <img src="/man.png" alt="picture" />
          </div>
          <div className="flex flex-col py-[12px] px-[40px]">
            <div className="flex justify-between flex-wrap items-center">
              <p className="text-uppercase font-poppins text-[40px] max-md:text-[24px] max-lg:text-[30px] font-[600] text-[#2F2F2F]">
                Christopher Taylor
              </p>
              <div className="flex h-[48px] items-start gap-[4px]">
                <button className="flex items-center py-[8px] px-[16px] gap-[8px] border-1 border-solid border-blue-500 rounded-[12px] bg-[#589CFF] shadow-[0 0 10px rgba(0, 0, 0, 0.1)]">
                  <img src="/hand.png" alt="picture" />
                  <p className="font-poppins text-[16px] font-semibold text-white">
                    Subscribe
                  </p>
                </button>
                <button className="flex items-center py-[8px] px-[16px] gap-[8px] border-1 border-solid border-blue-500 rounded-[12px] bg-[#589CFF] shadow-[0 0 10px rgba(0, 0, 0, 0.1)]">
                  <img src="/message1.png" alt="picture" />
                  <p className="font-poppins text-[16px] font-semibold text-white">
                    Message Request
                  </p>
                </button>
              </div>
            </div>
            <div className="flex  justify-between flex-wrap items-center ">
              <p className=" text-gray-600">
                Thanks for checking this bio, I am Batman The one dark knight 🦇
              </p>
              <div className="flex items-start gap-[12px] mt-[12px]">
                <div className="flex items-center gap-[9px]">
                  <img src="/blueheart.png" alt="picture" />
                  <p className="text-16 font-semibold text-gray-800">16.5 K</p>
                </div>
                <div className="flex items-center gap-[9px]">
                  <img src="/bluebadge.png" alt="picture" />
                  <p className="text-16 font-semibold text-gray-800">16.5 K</p>
                </div>
                <button className="flex items-center justify-center py-[4px] px-[8px] gap-[4px] border-1 border-solid border-blue-500 rounded-[4px] bg-[#589CFF] shadow-[0 0 10px rgba(0, 0, 0, 0.1)]">
                  <p className="text-center font-poppins text-[14px] font-semibold text-white">
                    View all badges
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-[60px] items-start self-stretch gap-[40px] flex-1 flex-wrap">
        <Post />
      </div>
    </div>
  );
};

export default page;
