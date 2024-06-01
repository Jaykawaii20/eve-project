"use client";
import React, { useState } from "react";
import { Poppins } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import MenuBar from "@/components/menuBar/MenuBar";
import AchievementCard from "@/components/achievementCard/AchievementCard";
import CurrentChatProfile from "@/components/currentChatProfile/CurrentChatProfile";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const page = () => {
  const [achievements, setAchievements] = useState([
    {
      type: "subscribers",
      subscribers: 50,
      counts: 20,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
      tokens: 10,
      lock: true,
    },
    {
      type: "Likes",
      subscribers: 100,
      counts: 30,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
      tokens: 100,
      lock: false,
    },
    {
      type: "Content Creation",
      subscribers: 70,
      counts: 20,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
      tokens: 80,
      lock: false,
    },
  ]);
  return (
    <div className="flex justify-between items-start max-md:flex-wrap max-md:flex-col-reverse gap-[40px] mx-[20px] max-lg:mx-[5px] mt-[36px]">
      <div>
        <p className="text-black text-[24px] max-sm:text-center">
          Recent Achievements
        </p>
        <div className="flex flex-wrap max-sm:justify-center gap-[10px]">
          {achievements.map((item, i) => {
            return (
              <div className="flex flex-wrap gap-[10px]">
                <AchievementCard item={item} />
              </div>
            );
          })}
        </div>
        <div>
          <p className="text-black text-[24px] mt-[30px]">Your Badges</p>
          <div className="flex justify-center flex-wrap py-[24px] rounded-[12px] bg-white bg-opacity-50">
            <img src="/images/svgs/badge.svg" alt="" />
            <img src="/images/svgs/badge.svg" alt="" />
            <img src="/images/svgs/badge.svg" alt="" />
            <img src="/images/svgs/badge.svg" alt="" />
            <img src="/images/svgs/badge.svg" alt="" />
            <img src="/images/svgs/badge.svg" alt="" />
            <img src="/images/svgs/badge.svg" alt="" />
            <img src="/images/svgs/badge.svg" alt="" />
            <img src="/images/svgs/badge.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="flex max-md:justify-center  max-md:w-[90%]">
        <div>
          <CurrentChatProfile />
        </div>
      </div>
    </div>
  );
};

export default page;
