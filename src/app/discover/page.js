"use client";
import React, { useState } from "react";
import {
  AdjustmentsHorizontalIcon,
  CursorArrowRaysIcon,
} from "@heroicons/react/24/outline";
import Navbar from "@/components/navbar/Navbar";
import MenuBar from "@/components/menuBar/MenuBar";

const Page = () => {
  const [modal, setModal] = useState(false);
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [categories, setCetegories] = useState([
    "Painting",
    "Pixel Art",
    "Animation",
    "Sculpture",
    "Artificial Intelligence",
    "Illustration",
    "Generative art",
    "Subscribed",
    "Subscribed",
    "Subscribed",
    "Subscribed",
    "Subscribed",
    "Subscribed",
    "Subscribed",
    "Subscribed",
  ]);

  return (
    <div className="overflow-scroll w-full ml-[50px]">
      <div className="relative flex w-auto gap-[20px]  ">
        <div
          onClick={() => {
            setModal(true);
          }}
        >
          <AdjustmentsHorizontalIcon className="rounded-[4px] bg-[#589CFF]  h-[43px] w-[43px] p-[8px] text-white" />
        </div>
        {modal ? (
          <div className="absolute flex flex-col gap-[20px] top-[60px] p-[24px] w-[429px] h-[282px] rounded-[12px] bg-white">
            <p className="text-black text-[20px]">Filter</p>
            <div className="flex justify-between gap-[20px]">
              <button
                onClick={() => {
                  setModal(false), setFilter("post");
                }}
                className={`w-[50%] px-[16px] py-[8px] rounded-[4px] whitespace-nowrap ${
                  filter === "post"
                    ? "bg-[#589CFF] text-white border-[#589CFF]"
                    : "bg-white text-[#589CFF] border-[#589CFF]"
                } border-[1px]`}
              >
                Posts
              </button>
              <button
                onClick={() => {
                  setModal(false), setFilter("creator");
                }}
                className={`w-[50%] px-[16px] py-[8px] rounded-[4px] whitespace-nowrap ${
                  filter === "creator"
                    ? "bg-[#589CFF] text-white border-[#589CFF]"
                    : "bg-white text-[#589CFF] border-[#589CFF]"
                } border-[1px]`}
              >
                Creators
              </button>
            </div>
            <div>
              <p className="text-black text-[18px]">Sort by</p>

              <select
                name=""
                id=""
                className="text-black w-[50%] py-[8px] px-[12px] rounded-[12px] border-[1px] border-[#2F2F2F] mt-[10px]"
              >
                <option value="">Likes</option>
                <option value="">Subcribers</option>
                <option value="">Post</option>
              </select>
            </div>
            <div className="flex justify-between gap-[20px]">
              <button
                onClick={() => {
                  setSortBy("ascending"), setModal(false);
                }}
                className={`w-[50%] px-[16px] py-[8px] rounded-[4px] whitespace-nowrap ${
                  sortBy === "ascending"
                    ? "bg-[#589CFF] text-white border-[#589CFF]"
                    : "bg-white text-[#589CFF] border-[#589CFF]"
                } border-[1px]`}
              >
                Ascending
              </button>
              <button
                onClick={() => {
                  setModal(false), setSortBy("descending");
                }}
                className={`w-[50%] px-[16px] py-[8px] rounded-[4px] whitespace-nowrap ${
                  sortBy === "descending"
                    ? "bg-[#589CFF] text-white border-[#589CFF]"
                    : "bg-white text-[#589CFF] border-[#589CFF]"
                } border-[1px]`}
              >
                Descending
              </button>
            </div>
          </div>
        ) : null}
        <div className=" ml-[100px] overflow-scroll flex gap-[20px]">
          {categories.map((item, i) => (
            <div key={i} className=" ">
              <button
                onClick={() => setCategoryIndex(i)}
                className={`px-[16px] py-[8px] rounded-[12px] whitespace-nowrap ${
                  categoryIndex === i
                    ? "bg-[#589CFF] text-white border-[#589CFF]"
                    : "bg-white text-[#589CFF] border-[#589CFF]"
                } border-[1px]`}
              >
                {item}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-[100%] flex-wrap gap-[12px] mt-[32px]">
        <img src="/discoverImg.png" alt="" />
        <img src="/discoverImg.png" alt="" />
        <img src="/discoverImg.png" alt="" />
        <img src="/discoverImg.png" alt="" />
        <img src="/discoverImg.png" alt="" />
      </div>
    </div>
  );
};

export default Page;
