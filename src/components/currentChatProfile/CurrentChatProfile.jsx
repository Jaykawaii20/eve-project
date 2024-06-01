"use client";
import React, { useState } from "react";

const CurrentChatProfile = ({ closeModal, setCloseModal, currentChat }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="flex h-[73vh] overflow-hidden  w-auto mb-[40px] py-[24px] px-[20px] flex-col  items-center gap-[32px] border-1 border-gray-300 rounded-[24px] bg-white  shadow-10">
      <div>
        <div className="relative flex  w-full h-auto items-center justify-end  gap-[10px]">
          <button
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <img src="/option.png" alt="picture" />
          </button>
          <button
            onClick={() => setCloseModal(true)}
            className="flex  w-[32px] h-[32px] border-1 border-blue-500 rounded-4 bg-blue-500 shadow-[10px]"
          >
            <img src="/wrong2.png" alt="picture" />
          </button>
          {menuOpen && (
            <div className="absolute right-[50px] top-[50px]  bg-white p-[12px] rounded-lg text-black flex flex-col items-start gap-[12px]">
              <button className="whitespace-nowrap">View Profile</button>
              <button className="whitespace-nowrap text-red-600">
                Delete Chat
              </button>
              <button className="whitespace-nowrap text-red-600">Block</button>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-center items-center gap-[10px] ">
          <img
            height={100}
            width={100}
            className="rounded-[12px]"
            src={`/ProfilePictures${currentChat?.audience_avatar}`}
            alt="picture"
          />

          <div className="flex flex-col justify-center items-center gap-[2px]  w-full   rounded-[12px]">
            <p className="text-black font-poppins font-semibold text-[24px] text-center">
              {currentChat?.name}
            </p>
            <div className="flex flex-col justify-center h-[51px] w-full self-stretch ">
              <p className="text-black font-poppins font-light text-[12px] text-center">
                Design is not just what it looks like and feels like. Design is
                how it works.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-[12px]">
          <div className="flex w-[306px] h-auto justify-between items-center">
            <p className="text-black text-center font-semibold font-poppins text-[16px]">
              Reputation
            </p>
            <div className="flex justify-center items-center gap-[4px]">
              <img src="/badge.png" alt="picture" />
              <p className="text-blue-500 font-poppins font-semibold text-[18px] text-center">
                876
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[40%]">
        <div>
          <p className="text-black font-poppins text-[16px] font-semibold mb-[10px]">
            Posts
          </p>
        </div>
        <div
          style={{
            scrollbarWidth: "none",
            scrollbarColor: "blue",
            msOverflowStyle: "none",
          }}
          className="flex overflow-scroll mb-[20px]  h-full  w-[303px]  gap-[10px] flex-wrap img-container"
        >
          <img src="/smallcard1.png" alt="picture" />
          <img src="/smallcard2.png" alt="picture" />
          <img src="/smallcard3.png" alt="picture" />
          <img src="/smallcard4.png" alt="picture" />
          <img src="/smallcard5.png" alt="picture" />
          <img src="/smallcard1.png" alt="picture" />
          <img src="/smallcard1.png" alt="picture" />
          <img src="/smallcard1.png" alt="picture" />
          <img src="/smallcard1.png" alt="picture" />
          <img src="/smallcard1.png" alt="picture" />
          <img src="/smallcard1.png" alt="picture" />
          <img src="/smallcard1.png" alt="picture" />
          <img src="/smallcard1.png" alt="picture" />
          <img src="/smallcard1.png" alt="picture" />
          <img src="/smallcard1.png" alt="picture" />
          <img src="/smallcard1.png" alt="picture" />
        </div>
      </div>
    </div>
  );
};

export default CurrentChatProfile;
