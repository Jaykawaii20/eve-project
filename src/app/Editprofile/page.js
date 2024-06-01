"use client";

import React from "react";
import Navbar from "@/components/navbar/Navbar";
import MenuBar from "@/components/menuBar/MenuBar";
import { useDispatch, useSelector } from "react-redux";
const page = () => {
  const user = useSelector((state) => state.userSlice.user);

  return (
    <div className="ml-[50px]">
      <div>
        <img
          src="/bg4.png"
          className="w-full h-full max-lg:h-[300px]"
          alt="picture"
        />
      </div>
      <div className="flex justify-center w-[99%] rounded-[12px] max-lg:bg-transparent pb-[70px] bg-white shadow-[0 0 10px rgba(0, 0, 0, 0.1)] mt-[-50px] ml-[4px]">
        <div className="flex flex-col w-full gap-[4px]">
          <div className="mt-[-40px] ml-[40px] border-blue-500  border-2 rounded-full h-[120px] w-[120px]">
            {user?.avatar ? (
              <img
                className="h-full w-full rounded-[50%]"
                src={`/ProfilePictures/${user?.avatar}`}
                alt="picture"
              />
            ) : (
              <img className="h-full w-full rounded-[50%]" src="/contact.png" />
            )}
          </div>
          <div className="flex flex-col py-[12px] px-[40px]">
            <div className="flex p-[12px] 0px justify-between items-start ">
              <div className="flex  flex-col items-start gap-[12px]">
                <p className="text-center  font-poppins text-[40px] font-bold text-[#2F2F2F]">
                  {user?.username}
                </p>
                <p className="text-[#4F4F4F] font-poppins text-[16px] font-normal">
                  {user?.bio}
                </p>
              </div>
              <div className="flex flex-col justify-between items-end ">
                <div>
                  <button className="flex justify-center items-center py-[8px] px-[16px] gap-[8px] border-[1px] border-[#4989E6] rounded-[12px] bg-[#589CFF] shadow-rgba(0, 0, 0, 0.10)">
                    <img src="/save.png" alt="picture" />
                    <p className="font-poppins text-[16px] font-medium text-[#FFFFFF]">
                      Save
                    </p>
                  </button>
                </div>
                <div className="flex items-start gap-[12px] mt-[12px]">
                  <div className="flex items-center gap-[9px]">
                    <img src="/blueheart.png" alt="picture" />
                    <p className="text-[#2F2F2F] font-poppins text-[16px] font-medium">
                      {user?.liked_posts?.length}
                    </p>
                  </div>
                  <div className="flex items-center gap-[9px]">
                    <img src="/bluebadge.png" alt="picture" />
                    <p className="text-[#2F2F2F] font-poppins text-[16px] font-medium">
                      {user?.liked_posts?.length}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-[36px]">
              <div className="flex w-[424px] flex-col justify-center  gap-[12px]">
                <div>
                  <p className="font-poppins text-[16px] font-medium text-[#000]">
                    Personal Info
                  </p>
                </div>
                <div className="flex py-[8px] px-[12px] items-center  gap-[8px] rounded-[12px] border-[1px]  border-[#C0C1C3] bg-[#E3E3E3]">
                  <input
                    className="text-[#4F4F4F] font-poppins text-[16px] font-medium bg-[#E3E3E3]"
                    type="text"
                    placeholder="Christopher Taylor Swift"
                  />
                </div>
                <div className="flex py-[8px] px-[12px] items-center  gap-[8px] rounded-[12px] border-[1px]  border-[#C0C1C3] bg-[#E3E3E3]">
                  <input
                    className="text-[#4F4F4F] font-poppins text-[16px] font-medium bg-[#E3E3E3]"
                    type="text"
                    placeholder="chris@gmail.com"
                  />
                </div>
                <div className="flex h-[40px] items-center  gap-[14px]">
                  <button className="flex py-[8px] px-[12px]  items-center gap-[2px] border-[1px]  border-[#A8A8A8] rounded-[12px] bg-[#FFF]">
                    <p className="text-[#000] font-poppins text-[16px] font-medium">
                      (+44)
                    </p>
                    <img src="/list.png" alt="picture" />
                  </button>
                  <div className="flex py-[8px] px-[12px] items-center  gap-[8px] rounded-[12px] border-[1px]  border-[#C0C1C3] bg-[#E3E3E3]">
                    <input
                      className="text-[#4F4F4F] font-poppins text-[16px] font-medium bg-[#E3E3E3]"
                      type="text"
                      placeholder="00 9099 9999"
                    />
                  </div>
                </div>
                <div className="flex py-[8px] px-[12px] items-center  gap-[8px] rounded-[12px] border-[1px]  border-[#C0C1C3] bg-[#E3E3E3]">
                  <input
                    className="text-[#4F4F4F] font-poppins text-[16px] font-medium bg-[#E3E3E3]"
                    type="text"
                    placeholder="England"
                  />
                </div>
              </div>
              <div className="flex w-[424px] flex-col justify-center  gap-[12px]">
                <div>
                  <p className="font-poppins text-[16px] font-medium text-[#000]">
                    Password
                  </p>
                </div>
                <div className="flex py-[8px] px-[12px] items-center  gap-[8px] rounded-[12px] border-[1px]  border-[#C0C1C3] bg-[#E3E3E3]">
                  <input
                    className="text-[#4F4F4F] font-poppins text-[16px] font-medium bg-[#E3E3E3]"
                    type="text"
                    placeholder="Password"
                  />
                </div>
                <div className="flex py-[8px] px-[12px] items-center  gap-[8px] rounded-[12px] border-[1px]  border-[#C0C1C3] bg-[#E3E3E3]">
                  <input
                    className="text-[#4F4F4F] font-poppins text-[16px] font-medium bg-[#E3E3E3]"
                    type="text"
                    placeholder="New Password"
                  />
                </div>
                <div className="flex py-[8px] px-[12px] items-center  gap-[8px] rounded-[12px] border-[1px]  border-[#C0C1C3] bg-[#E3E3E3]">
                  <input
                    className="text-[#4F4F4F] font-poppins text-[16px] font-medium bg-[#E3E3E3]"
                    type="text"
                    placeholder="Re-enter New Password"
                  />
                </div>
                <div>
                  <button className="flex py-[4px] px-[8px] items-start justify-center gap-[4px] border-[1px] border-[#4989E6] rounded-[4px] bg-[#589CFF] shadow-rgba(0, 0, 0, 0.10)">
                    <p className="font-poppins text-[14px] font-semibold text-center text-[#FFF]">
                      Update password
                    </p>
                  </button>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
