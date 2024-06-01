"use client";
import React from "react";
import Navbar from "@/components/navbar/Navbar";
import MenuBar from "@/components/menuBar/MenuBar";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const Page = () => {
  return (
    <div className="flex w-full h-full px-[50px]  max-sm:px-[10px] justify-between items-center ">
      <div className="flex flex-wrap  justify-center max-xl:bg-white max-xl:bg-opacity-50 rounded-[24px]">
        <div className="flex flex-col justify-center items-center gap-[24px] rounded-[24px] max-xl:bg-opacity-0 bg-opacity-50 bg-white py-[147px] px-[38px]">
          <div className="h-auto w-auto">
            <p className="font-poppins text-[48px] font-bold text-center text-[#2F2F2F]">
              Get In Touch With Us For More Information
            </p>
          </div>
          <div className="h-auto w-auto">
            <p className="text-[24px] text-center font-poppins font-medium text-[#4F4F4F]">
              If you need any help or have a question, we’re here for you
            </p>
          </div>
          <button className="max-sm:hidden flex justify-center items-center w-auto h-auto py-[8px] px-[16px] gap-8 rounded-[12px] border-[1px] border-solid border-[#4989E6] bg-[#589CFF] shadow-[rgba(0, 0, 0, 0.10)]">
            <p className="text-[24px] text-white font-poppins font-medium">
              Frequently Asked Questions
            </p>
            <img src="/greater.png" alt="picture" />
          </button>
          <button className=" sm:hidden flex justify-center items-center w-auto h-auto py-[8px] px-[16px] gap-8 rounded-[12px] border-[1px] border-solid border-[#4989E6] bg-[#589CFF] shadow-[rgba(0, 0, 0, 0.10)]">
            <p className="text-[24px] text-white font-poppins font-medium">
              FAQ's
            </p>
            <img src="/greater.png" alt="picture" />
          </button>
        </div>
        <div className="xl:hidden">
          <img src="/helpcard.png" alt="picture" />
        </div>
        <div className="flex items-center justify-center flex-col py-[20px] gap-[46px] h-auto w-[332px] flex-shrink-0">
          <div className="flex flex-col justify-center items-center py-[10px] px-[20px] w-[297px] h-auto bg-white rounded-[12px] shadow-[rgba(0, 0, 0, 0.10)]">
            <div className="flex justify-center items-center gap-[8px] w-[81px] h-auto">
              <img src="/email.png" alt="picture" />
              <p className="text-[24px] text-center font-poppins font-medium text-[#4F4F4F]">
                Email
              </p>
            </div>
            <p className="text-[24px] text-center font-poppins font-normal text-[#2F2F2F]">
              014 5678 6534
            </p>
          </div>
          <div className="flex flex-col justify-center items-center p-[10px 20px] w-[297px] h-auto bg-white rounded-[12px] shadow-[rgba(0, 0, 0, 0.10)]">
            <div className="flex justify-center items-center gap-[8px] w-[81px] h-auto">
              <img src="/helpchat.png" alt="picture" />
            </div>
            <p className="text-[24px] text-center font-poppins font-medium text-[#2F2F2F]">
              Chat with us
            </p>
          </div>
        </div>
      </div>
      <div className="max-xl:hidden">
        <img src="/helpcard.png" alt="picture" />
      </div>
    </div>
  );
};

export default Page;
