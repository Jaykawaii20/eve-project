import React from "react";
import { Poppins } from "next/font/google";
import { Disclosure } from "@headlessui/react";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});
const FaqDetailAccordian = ({ accordianDetail }) => {
  return (
    <div className=" 2xl:w-[913px] h-auto w-full bg-white bg-opacity-50 rounded-[24px] py-[45px] px-[39px]">
      <p className="mb-[22px] text-[#000000] font-poppins text-[24px] font-semibold">
        {accordianDetail?.name}
      </p>
      <div className="flex flex-col    gap-[8px]">
        {accordianDetail?.subChilds.map((accordianItem, i) => (
          <div className="flex flex-col   gap-[8px]">
            <Disclosure>
              <Disclosure.Button>
                {({ open }) => (
                  <div
                    className={`flex items-center justify-between pr-[13px]  w-auto h-auto flex-shrink-0 border-[2px] border-solid ${
                      open ? "border-[#589CFF]" : "border-white"
                    } rounded-[12px] bg-white`}
                  >
                    <p className="text-[#000000] px-[25px] font-poppins text-[16px] font-medium">
                      {accordianItem?.name}
                    </p>
                    {open ? (
                      <img src="/listup.png" alt="picture" />
                    ) : (
                      <img src="/listing.png" alt="picture" />
                    )}
                  </div>
                )}
              </Disclosure.Button>
              <Disclosure.Panel>
                <div className="flex justify-between flex-col h-auto w-auto py-[24px] px-[17px] rounded-[12px] bg-white bg-opacity-50">
                  <div className="">
                    {accordianItem?.detail.map((item, i) => (
                      <p className="text-black font-poppins text-[14px] font-normal">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </Disclosure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqDetailAccordian;
