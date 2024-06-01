"use client";
import React, { useState, useEffect } from "react";
import { Poppins } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import MenuBar from "@/components/menuBar/MenuBar";
import ActiveChats from "@/components/activeChats/ActiveChats";
import CurrentChat from "@/components/currentChat/CurrentChat";
import CurrentChatProfile from "@/components/currentChatProfile/CurrentChatProfile";
import useConversation from "@/hooks/useConversation";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const Page = () => {
  const [modal, setModal] = useState(1);
  const [device, setDevice] = useState("web");
  const [screenWidth, setScreenWidth] = useState(0);
  const [closeModal, setCloseModal] = useState(true);

  const { conversations, currentChat, setCurrentChat } = useConversation();
  useEffect(() => {
    const handleResize = () => {
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
    <div className="flex w-full   px-[42px] max-lg:px-[20px] justify-start items-start">
      <div className="flex w-full h-full  items-start gap-[20px]">
        {(device === "web" || modal === 1) && (
          <div className="">
            <ActiveChats
              setCurrentChat={setCurrentChat}
              conversations={conversations}
            />
          </div>
        )}
        <div className="flex h-[78vh] w-full overflow-hidden gap-[12px] bg-white bg-opacity-50 p-[14px] rounded-[12px]">
          {(device === "web" || device === "tab" || modal === 2) && (
            <div className="flex w-full  h-full items-start gap-[16px]    rounded-[12px]">
              <div className="w-full h-full">
                <CurrentChat
                  currentChat={currentChat}
                  setCloseModal={setCloseModal}
                  closeModal={closeModal}
                />
              </div>
            </div>
          )}
          {((device === "web" && !closeModal) || modal === 3) && (
            <div className="flex w-full  h-full items-start     rounded-[12px]">
              <div className="w-full">
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
