"use client";
import React, { useState } from "react";
import { Poppins } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Guides from "@/components/guides/Guides";
import FaqAccordians from "@/components/faqAccordians/FaqAccordians";
import FaqDetailAccordian from "@/components/FaqDetailAccordian/FaqDetailAccordian";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const page = () => {
  const [accordianDetail, setAccordianDetail] = useState({
    name: "Create and update an Eve Account",
    subChilds: [
      {
        name: "Create An Eve Account",
        detail: [
          "1 Yes! You can purchase a license that you can share with your entire",
          "2 Yes! You can purchase a license that you can share with your entire",
          "3 Yes! You can purchase a license that you can share with your entire",
          "4 Yes! You can purchase a license that you can share with your entire",
          "5 Yes! You can purchase a license that you can share with your entire",
        ],
      },
      {
        name: "Create An Eve Account child 2",
        detail: [
          "1 Yes! You can purchase a license that you can share with your entire",
          "2 Yes! You can purchase a license that you can share with your entire",
          "3 Yes! You can purchase a license that you can share with your entire",
          "4 Yes! You can purchase a license that you can share with your entire",
          "5 Yes! You can purchase a license that you can share with your entire",
        ],
      },
    ],
  });
  return (
    <div className="flex w-full h-full  px-[42px] justify-between items-start gap-[50px]">
      <div className="flex items-start max-md:hidden flex-col gap-[24px] w-auto">
        <button className="inline-flex items-center justify-center py-[8px] px-[16px] gap-[8px] border-[1px] border-solid border-[#4989E6] rounded-[12px] bg-[#589CFF] shadow-[rgba(0, 0, 0, 0.10)]">
          <img src="/leftarrow.png" alt="picture" />
          <p className="font-poppins text-[16px] font-medium text-white">
            Back
          </p>
        </button>
        <div className="flex  justify-between items-center">
          <div className="flex w-[400px] h-auto bg-opacity-50 bg-white rounded-[24px]">
            <div className="flex flex-col items-end w-auto h-auto gap-[10px] py-[31px] px-[50px]">
              <FaqAccordians setAccordianDetail={setAccordianDetail} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-between flex-wrap gap-[50px]">
        <FaqDetailAccordian accordianDetail={accordianDetail} />
        <Guides />
      </div>
    </div>
  );
};

export default page;
