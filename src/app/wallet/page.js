"use client";
import React, { useState } from "react";
import { Poppins } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import MenuBar from "@/components/menuBar/MenuBar";
import { PieChart } from "react-minimal-pie-chart";
import StripeCheckout from "@/components/StripeCheckout/StripeCheckout";
import { ApiUrls } from "@/apis/ApiUrls";
import { http } from "@/config/http";
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const page = () => {
  const [modal, setModal] = useState(false);
  const [tokens, setToken] = useState(null);
  const [tokenError, settokenError] = useState("");
  const buyToken = async () => {
    try {
      if (tokens === null) {
        settokenError("*required");
        return;
      }
      const token = localStorage.getItem("token");
      const header = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await http.post(
        ApiUrls.payments.addToken,
        { amount: tokens },
        header
      );
      console.log(response, "token buying sucess");
      return response;
    } catch (error) {
      console.log(error, "error in buying token");
      throw error;
    } finally {
    }
  };
  const [withdrawMethods, setWithdrawMethods] = useState([
    { method: "paypal", connected: true, img: "/images/svgs/paypalIcon.svg" },
    {
      method: "payoneer",
      connected: false,
      img: "/images/svgs/payoneerIcon.svg",
    },
    {
      method: "Direct Bank Transfer",
      connected: false,
      img: "/images/svgs/bankIcon.svg",
    },
  ]);
  const [isCreator, setIsCreator] = useState(false);
  return (
    <div className="flex gap-[40px]  px-[42px] justify-between items-start w-full h-full">
      <div className="flex w-full justify-between flex-wrap-reverse gap-[40px]">
        {/* Transections list */}
        <div className="flex flex-col items-start max-xl:w-[750px] max-lg:w-[600px] max-md:w-[550px] w-[957px] h-auto gap-[24px]">
          <div className="flex justify-between items-center self-stretch">
            <p className="text-black font-poppins text-[28px] font-semibold">
              Recent transactions
            </p>
            <div className="flex items-center gap-[8px]">
              <p className="text-[#2F2F2F] font-poppins text-[16px] font-medium">
                Sort By:
              </p>
              <button className="flex items-center h-[32px] w-auto gap-[2px] px-[12px] border-1 border-[#A8A8A8] rounded-[12px] bg-[#FFFFFF]">
                <p className="text-black font-poppins text-[15px] font-medium">
                  Recent first
                </p>
                <img src="/list.png" alt="picture" />
              </button>
            </div>
          </div>
          <div className="flex flex-col items-start self-stretch gap-[12px]">
            <div className="flex justify-between items-center self-stretch py-[12px] px-[36px] bg-[#FFFFFF] rounded-[12px]">
              <div>
                <p className="text-black font-poppins text-[26px] font-medium">
                  Subscription
                </p>
                <p className="text-black font-poppins text-[16px] font-normal">
                  Christopher Taylor
                </p>
              </div>
              <div className="flex max-md:flex-wrap max-md:gap-2 justify-center items-center gap-[40px]">
                <p className="text-[#A8A8A8] font-poppins text-[24px] font-medium">
                  05.08.2023
                </p>
                <p className="text-black font-poppins text-[24px] font-medium">
                  $120
                </p>
              </div>
              <img src="/option.png" alt="picture" />
            </div>
          </div>
          <div className="flex justify-center items-center py-[8px] px-[16px] gap-[8px] rounded-[12px] border-1 border-[#4989E6] bg-[#589CFF] shadow-[rgba(0, 0, 0, 0.10)]">
            <img src="/bigeye.png" alt="picture" />
            <p className="text-white font-poppins text-[16px] font-medium">
              See more
            </p>
          </div>
        </div>
        {/* ////////transactions list end//////////// */}
        {/* Balance card */}
        <div className="flex justify-center flex-wrap-reverse items-start gap-[40px] p-[40px] bg-[#FFFFFF] rounded-[24px]">
          <div className="flex flex-col items-start gap-[10px]">
            <p className="text-black font-poppins text-[24px] font-medium">
              Balance
            </p>
            <div className="flex items-center justify-center w-[217px] gap-[12px]">
              <img src="/bluecoin.png" alt="picture" />
              <p className="text-[#589CFF] font-poppins text-[64px] font-semibold">
                9000
              </p>
            </div>
            <div className="flex items-start self-stretch h-[29px] w-full gap-[10px]">
              <div className="flex items-center self-stretch py-[8px] px-[12px] gap-[8px] flex-1 border-1 border-[#C0C1C3] rounded-[4px] bg-[#E3E3E3]">
                <input
                  value={tokens}
                  onChange={(e) => {
                    setToken(e.target.value);
                  }}
                  className="bg-[#E3E3E3] text-[#A8A8A8] font-poppins text-[14px] font-medium"
                  type="text"
                  placeholder="Amount"
                />
                <p className="text-red-600 text-[10px]">{tokenError}</p>
              </div>
              <button
                onClick={() => {
                  buyToken();
                }}
                className="flex justify-center items-center py-[4px] px-[8px] gap-[4px] border-1 border-[#4989E6] rounded-[4px] bg-[#589CFF] shadow-[rgba(0, 0, 0, 0.10)]"
              >
                <p className="text-white font-poppins text-[14px] font-semibold text-center">
                  Buy tokens
                </p>
              </button>
            </div>
            <div className="flex justify-center items-center gap-[4px]">
              <p className="text-[#A8A8A8] text-center font-poppins text-[14px] font-semibold">
                100
              </p>
              <img src="/lightbluecoin.png" alt="picture" />
              <p className="text-[#A8A8A8] text-center font-poppins text-[14px] font-semibold">
                = 1$
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-[10px] w-[336px] h-auto">
            <img src="/mastercard.png" alt="picture" />
            <div className="flex justify-center items-center self-stretch gap-[10px]">
              <button
                onClick={() => setModal(true)}
                className="flex justify-center items-center py-[4px] px-[8px] gap-[4px] border-1 border-[#4989E6] rounded-[4px] bg-[#589CFF] shadow-[rgba(0, 0, 0, 0.10)]"
              >
                <p className="font-poppins text-white text-[14px] font-semibold text-center">
                  Add card
                </p>
              </button>
              <button className="flex justify-center items-center py-[4px] px-[8px] gap-[4px] border-1 border-[#4989E6] rounded-[4px] bg-[#589CFF] shadow-[rgba(0, 0, 0, 0.10)]">
                <p className="font-poppins text-white text-[14px] font-semibold text-center">
                  Remove card
                </p>
              </button>
              <button className="flex">
                <img src="/lefticon.png" alt="picture" />
                <img src="/righticon.png" alt="picture" />
              </button>
            </div>
          </div>
        </div>
        <div className="">
          {modal && <StripeCheckout setModal={setModal} />}
        </div>

        {/* card end */}
      </div>
      {/* creator withdrawl card */}
      {isCreator && (
        <div className="flex flex-col items-start gap-[24px] w-[458px] h-[738px] rounded-[12px] bg-white bg-opacity-50 py-[32px] px-[36px]">
          <button className="flex gap-[8px] py-[8px] px-[16px] rounded-[12px] bg-[#589CFF] items-center">
            <img src="/images/svgs/withdrawIcon.svg" alt="" />
            Withdrawl
          </button>
          <p className="text-[20px] text-black">Withdrawal methods</p>
          <div className="flex  flex-col ">
            {withdrawMethods.map((item, i) => {
              return (
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <img src={item.img} alt="" />
                    <p className="text-black whitespace-nowrap ">
                      {item.method}
                    </p>
                  </div>
                  <button
                    className={`px-[16px] py-[8px] rounded-[12px] whitespace-nowrap ${
                      item.connected
                        ? "bg-[#589CFF] text-white border-[#589CFF]"
                        : "bg-white text-[#589CFF] border-[#589CFF]"
                    } border-[1px]`}
                  >
                    {item.connected ? "Connected" : "Connect"}
                  </button>
                </div>
              );
            })}
          </div>
          <p className="text-[20px] text-black">Money flow</p>
          <PieChart
            labelStyle={(index) => ({
              color: "white",
              fontSize: "12px",
              fontFamily: "sans-serif",
            })}
            label={({ dataEntry }) => dataEntry.value}
            data={[
              { title: "One", value: 75, color: "#589CFF" },
              { title: "Two", value: 10, color: "#ACCBFC" },
              { title: "Three", value: 5, color: "#c9dcfb" },
            ]}
          />
          ;
        </div>
      )}
      {/* /////////// */}
    </div>
  );
};

export default page;
