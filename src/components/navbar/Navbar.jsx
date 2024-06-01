"use client";

import React, { useEffect } from "react";
import { Poppins } from "next/font/google";
import { getNotification } from "@/store/NotificationSlice";
import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import { setPostModal } from "@/store/PostSlice";
import { ApiUrls } from "@/apis/ApiUrls";
import { baseUrl } from "@/config/baseUrl";
import { http } from "@/config/http";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/store/userSlice";
import axios from "axios";
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const Navbar = () => {
  const user = useSelector((state) => state.userSlice.user);
  const router = useRouter();
  const dispatch = useDispatch();
  const notifications = useSelector(
    (state) => state.notification.notifications
  );
  useEffect(() => {
    dispatch(getNotification());
  }, []);
  const getUserDetails = async () => {
    console.log("called function");
    try {
      let token = localStorage.getItem("token");
      const header = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const res = await axios.get(
        baseUrl + ApiUrls.users.getUserDetails,
        header
      );
      dispatch(setUser(res.data.user));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <div>
      <nav className="flex justify-center w-full flex-shrink-0  bg-opacity-50 bg-white py-[15px] max-sm:py-0 px-[10px]">
        <div className="inline-flex  max-sm:w-full py-[16px] px-[48px] max-lg:px-[24px] items-center justify-center max-sm:justify-between gap-[159px] max-lg:gap-[30px] border border-solid border-[#E3E3E3] rounded-[12px] max-sm:rounded-none bg-white shadow-md">
          <div
            className="flex items-center gap-[20px] cursor-pointer"
            onClick={() => (window.location.href = "/homepage")}
          >
            <p
              className={`font-${poppins} text-[32px] font-[500] max-sm:text-[#68696A] text-[#589CFF]`}
            >
              Eve
            </p>
            <img className="max-md:hidden" src="/homeIcon.png" alt="" />
          </div>
          <div className="flex w-[300px] max-sm:hidden h-[40px] py-[8px] px-[12px] items-center gap-[8px] flex-shrink-0 border border-solid max-sm:border-none border-[#A8A8A8] rounded-[12px]">
            <img src="/searchIcon.png" alt="search icon" />
            <input
              type="text"
              className={`w-[480px] outline-none text-[#A8A8A8] font-${poppins} text-[16px] font-[500]`}
              placeholder="Search"
            />
          </div>
          <div className="flex justify-end cursor-pointer items-end gap-[16px]">
            <img
              src="/message.png"
              onClick={() => {
                router.push("/inbox");
              }}
              alt=""
            />

            <p
              style={{
                borderRadius: "50%",
                backgroundColor: "#FFFFFF",
                color: "#589CFF",
                width: "20px",
                height: "20px",
                fontSize: "12px",
                fontWeight: "bold",
                textAlign: "center",
                border: "2px solid #589CFF",
                marginLeft: "-30px",
              }}
            >
              {notifications.length}
            </p>

            <div className="flex justify-end cursor-pointer items-end">
              <img
                className="max-md:hidden "
                src="/notification.png"
                alt="notification icon"
              />
              {/* notification counter */}
              <p
                style={{
                  borderRadius: "50%",
                  backgroundColor: "#FFFFFF",
                  color: "#589CFF",
                  width: "20px",
                  height: "20px",
                  fontSize: "12px",
                  fontWeight: "bold",
                  textAlign: "center",
                  border: "2px solid #589CFF",
                  marginLeft: "-20px",
                }}
              >
                {notifications.length}
              </p>
            </div>
            <img
              onClick={() => {
                router.push("/wallet");
              }}
              className="max-md:hidden cursor-pointer"
              src="/wallet.png"
              alt="wallet icon"
            />
            {user?.isCreator && (
              <div
                onClick={() => dispatch(setPostModal(true))}
                className="max-sm:hidden cursor-pointer flex py-[8px] px-[16px] justify-center items-center gap-[8px] border border-solid border-[#4989E6] rounded-[12px] bg-[#589CFF] shadow-md"
              >
                <img src="/plusIcon.png" alt="plus icon" />
                <p
                  className={`font-${poppins} text-[16px] font-[500] text-white`}
                >
                  Create
                </p>
              </div>
            )}
            <div className="flex relative items-center gap-[16px]">
              <img src="/searchIcon.png" alt="search icon" />

              {user?.avatar && (
                <img
                  // onClick={()=>{router.push("/editprofile")}}
                  onClick={() => {
                    router.push(`/profile?userId=${user?.id}`);
                  }}
                  src={`/ProfilePictures/${user?.avatar}`}
                  className="max-sm:rounded-[50%] rounded w-[48px] h-[48px]"
                  alt="girl icon"
                />
              )}
              <div className="flex items-center gap-[6px]">
                <div className="flex w-[20px] max-sm:absolute max-sm:bottom-0 max-sm:right-[15px] h-[20px] justify-center items-center gap-[10px]">
                  <img src="/star.png" alt="star icon" />
                </div>
                <p className="max-lg:hidden text-center font-${poppins} text-[16px] font-[500] text-[#4989E6]">
                  {user?.tokens || 0}
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
