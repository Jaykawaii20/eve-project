import React from 'react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const SuggestedPost = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-[12px] p-[12px] w-[386px] bg-white rounded-[12px] shadow-md">
      <div className="flex self-stretch">
        <p className="text-[20px] font-semibold text-gray-700 font-poppins">
          Suggested Posts
        </p>
      </div>
      <div className="flex w-[356px] justify-center items-center content-center gap-[10px] flex-wrap">
        <img src="/card1.png" alt="picture" />
        <img src="/card2.png" alt="picture" />
        <img src="/card3.png" alt="picture" />
        <img src="/card4.png" alt="picture" />
      </div>
      <div className="flex py-[8px] px-[16px] justify-center items-center self-stretch gap-[8px] border border-blue-500 rounded-[12px] bg-[#589CFF] shadow-md">
        <img src="/lastupload.png" alt="picture" />
        <p className="font-poppins text-[16px] font-semibold text-white">
          See more
        </p>
      </div>
    </div>
  );
}

export default SuggestedPost;
