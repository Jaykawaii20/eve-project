"use client";
import { Poppins } from "next/font/google";
import { useSelector, useDispatch } from "react-redux";
import Modal from "./createPostModal";
import React, { useState, useEffect } from "react";
import { setPostModal } from "@/store/PostSlice";
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const CreatePost = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const user = useSelector((state) => state.userSlice.user);

  console.log(user);

  return (
    <div className="w-full">
      <div
        className="flex flex-col gap-[20px] p-[24px] items-start w-full max-md:w-[500px] bg-white border-[2px] border-[#589CFF] rounded-[12px] shadow-md mt-[20px]"
        onClick={() => dispatch(setPostModal(true))}
      >
        <div>
          <p
            className={`font-${poppins} text-[20px] font-semibold text-[#2F2F2F]`}
          >
            Create a post
          </p>
        </div>
        <div className="flex items-center justify-center gap-[4px] p-[2px] border-2 border-[#589CFF] rounded-[12px] shadow-md">
          <img src="/post.png" alt="picture" />
          <p
            className={`font-${poppins} text-[12px] font-semibold text-[#589CFF]`}
          >
            Add photo/video
          </p>
        </div>
        <div className="flex items-center gap-[12px]">
          <div>
            <img
              src={`/ProfilePictures/${user?.avatar}`}
              alt="picture"
              className="h-[64px] w-[64px] rounded-lg"
            />
          </div>
          <div className="flex w-[449px] max-md:w-[90%] p-[2px] items-center self-stretch gap-8 border-1 border-[#C0C1C3] rounded-[12px] bg-[#E3E3E3]">
            <input
              className={`font-${poppins} text-[16px] px-2 font-semibold text-[#A8A8A8] bg-[#E3E3E3] outline-none w-full`}
              type="text"
              placeholder="Enter post description"
            />
          </div>
          <div className="flex py-[8px] px-[16px] justify-center items-center gap-[8px] border-1 border-[#4989E6] rounded-[12px] bg-[#589CFF] shadow-md">
            <img src="/uploadIcon.png" alt="picture" />
            <p
              className={`font-${poppins} text-[16px] font-semibold text-white`}
            >
              Upload
            </p>
          </div>
        </div>
      </div>
      <Modal />
    </div>
  );
};

export default CreatePost;
