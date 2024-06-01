"use client";

import React from "react";
import { Poppins } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import MenuBar from "@/components/menuBar/MenuBar";
import CreatePost from "@/components/createPost/CreatePost";
import Post from "@/components/post/Post";
import Notification from "@/components/notification/Notification";
import TrendingPost from "@/components/trendingPost/TrendingPost";
import SuggestedPost from "@/components/suggestedPost/SuggestedPost";
import ProgressBar from "@/components/progressBar/ProgressBar";
import Reels from "@/components/reels/Reels";
import { useDispatch, useSelector } from "react-redux";
import useHomePage from "./useHomePage";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const page = () => {
  const user = useSelector((state) => state.userSlice.user);
  const dispatch = useDispatch();
  const { getUserDetails } = useHomePage();

  return (
    <div className="flex px-[42px] w-full max-sm:px-[5px] gap-[20px] items-start justify-evenly mt-[36px]">
      <div className="flex flex-col  flex-2 items-start gap-[32px] ">
        <Reels />
        {user?.isCreator && <CreatePost />}

        <div>
          <div className="flex w-[699px] items-center gap-[20px]">
            <div className="flex py-[8px] px-[16px] justify-center items-center gap-[8px] border-[1px] border-[#4989E6] rounded-[12px] bg-[#589CFF] shadow-md">
              <p className="font-poppins text-[16px] font-semibold text-white">
                Trending
              </p>
            </div>
            <div className="flex py-[8px] px-[16px] justify-center items-center gap-[8px] border-[1px] border-[#4989E6] rounded-[12px] bg-white shadow-md">
              <p className="font-poppins text-[16px] font-semibold text-[#4989E6]">
                Top suggestions
              </p>
            </div>
            <div className="flex py-[8px] px-[16px] justify-center items-center gap-[8px] border-[1px] border-[#4989E6] rounded-[12px] bg-white shadow-md">
              <p className="font-poppins text-[16px] font-semibold text-[#4989E6]">
                High Rated
              </p>
            </div>
            <div className="flex py-[8px] px-[16px] justify-center items-center gap-[8px] border-[1px] border-[#4989E6] rounded-[12px] bg-white shadow-md">
              <p className="font-poppins text-[16px] font-semibold text-[#4989E6]">
                Subscribed
              </p>
            </div>
          </div>
        </div>
        {/* remove this create component if the backend is done, the CreatePost has conditional */}
        <CreatePost />
        <Post />
      </div>
      <div className="max-xl:hidden flex-2 flex flex-col py-[24px] px-[20px] gap-[24px] bg-opacity-50 bg-white rounded-[12px]">
        <Notification />
        <ProgressBar />
        <TrendingPost />
        <SuggestedPost />
      </div>
    </div>
  );
};

export default page;
