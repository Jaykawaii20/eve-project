"use client";
import React, { useState, useEffect } from "react";
import { Poppins } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import MenuBar from "@/components/menuBar/MenuBar";
import ActiveChats from "@/components/activeChats/ActiveChats";
import CurrentChat from "@/components/currentChat/CurrentChat";
import CurrentChatProfile from "@/components/currentChatProfile/CurrentChatProfile";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const Page = () => {
  const [modal, setModal] = useState(1);
  const [device, setDevice] = useState("web");
  const [screenWidth, setScreenWidth] = useState(0);
  const [closeModal, setCloseModal] = useState(true);
  const [currentChat, setCurrentChat] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      // Ensure window is defined
      if (typeof window !== "undefined") {
        const newWidth = window.innerWidth;
        setScreenWidth(newWidth);
        if (newWidth <= 900) {
          setDevice("mobile");
        } else if (newWidth < 1400) {
          setDevice("tab");
        } else {
          setDevice("web");
        }
      }
    };

    // Add event listener and call handleResize if window is defined
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      handleResize();
    }

    // Cleanup
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return (
    <div className="flex w-full h-full  px-[42px] max-lg:px-[20px] justify-center items-center">
      <div className="flex justify-center items-start gap-[20px]">
        {(device === "web" || modal === 1) && (
          <div className="">
            <ActiveChats setCurrentChat={setCurrentChat} />
          </div>
        )}
        <div className="flex h-screen overflow-hidden gap-[12px] bg-white bg-opacity-50 p-[12px] rounded-[12px]">
          {(device === "web" || device === "tab" || modal === 2) && (
            <div className="flex  h-full items-start gap-[16px]    rounded-[12px]">
              <div className="">
                <CurrentChat
                  currentChat={currentChat}
                  setCloseModal={setCloseModal}
                  closeModal={closeModal}
                />
              </div>
            </div>
          )}
          {((device === "web" && !closeModal) || modal === 3) && (
            <div className="flex  h-full items-start     rounded-[12px]">
              <div className="">
                <CurrentChatProfile
                  currentChat={currentChat}
                  closeModal={closeModal}
                  setCloseModal={setCloseModal}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
