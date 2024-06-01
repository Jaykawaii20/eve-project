"use client";
import React, { useState } from "react";
import { Poppins } from "next/font/google";
import { useDispatch, useSelector } from "react-redux";
import { useRouter, usePathname } from "next/navigation";
import axios from "axios";
import { baseUrl } from "@/config/baseUrl";
import { ApiUrls } from "@/apis/ApiUrls";
import { setUser } from "@/store/userSlice";
import BadgesIcon from "../../../public/images/svgs/menuBar-icons/BadgesIcon";
import CreateIcon from "../../../public/images/svgs/menuBar-icons/CreateIcon";
import FindIcon from "../../../public/images/svgs/menuBar-icons/FindIcon";
import SavedIcon from "../../../public/images/svgs/menuBar-icons/SavedIcon";
import RevenueIcon from "../../../public/images/svgs/menuBar-icons/RevenueIcon";
import PlansIcon from "../../../public/images/svgs/menuBar-icons/PlansIcon";
import SupportIcon from "../../../public/images/svgs/menuBar-icons/SupportIcon";
import SettingIcon from "../../../public/images/svgs/menuBar-icons/SettingIcon";
import PostIcon from "../../../public/images/svgs/menuBar-icons/PostIcon";
import { Switch } from "@headlessui/react";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const MenuBar = () => {
  const [color, setColor] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();

  const getUserDetails = async () => {
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

  const enableCreator = async () => {
    let token = localStorage.getItem("token");
    const header = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(
      baseUrl + ApiUrls.users.enableCreator,
      header
    );
    console.log(response);

    if (response.status === 200) {
      console.log("Creator Enabled");
      getUserDetails();
    }
  };

  const user = useSelector((state) => state.userSlice.user);
  return (
    <div className="flex py-[16px] h-auto  px-[12px] justify-between items-center flex-col  border border-solid border-[#E3E3E3] rounded-[12px] bg-white shadow-md">
      <div className="flex  flex-col items-center gap-[16px]">
        {user?.isCreator && (
          <div
            onClick={() => {
              router.push("/homepage");
            }}
            className="flex flex-col items-center cursor-pointer"
          >
            <CreateIcon
              color={pathname === "/homepage" ? "#589CFF" : "#A8A8A8"}
            />
            <p
              className={`font-${poppins} text-[12px] md:text-base font-[500] text-[${
                pathname === "/homepage" ? "#589CFF" : "#A8A8A8"
              }] uppercase`}
            >
              Create
            </p>
          </div>
        )}
        <div
          onClick={() => {
            router.push("/discover");
          }}
          className="flex flex-col items-center cursor-pointer"
        >
          <FindIcon color={pathname === "/discover" ? "#589CFF" : "#A8A8A8"} />
          <p
            className={`font-${poppins} text-[12px] md:text-base font-[500] text-[${
              pathname === "/discover" ? "#589CFF" : "#A8A8A8"
            }] uppercase`}
          >
            Find
          </p>
        </div>
        <div
          onClick={() => {
            router.push("/creatorprofile");
          }}
          className="flex flex-col items-center cursor-pointer"
        >
          <PostIcon
            color={pathname === "/creatorprofile" ? "#589CFF" : "#A8A8A8"}
          />
          <p
            className={`font-${poppins} text-[12px] md:text-base font-[500] text-[${
              pathname === "/creatorprofile" ? "#589CFF" : "#A8A8A8"
            }] uppercase`}
          >
            Posts
          </p>
        </div>
        <div
          onClick={() => {
            router.push("/achievements");
          }}
          className="flex flex-col items-center cursor-pointer"
        >
          <BadgesIcon
            color={pathname === "/achievements" ? "#589CFF" : "#A8A8A8"}
          />
          <p
            className={`font-${poppins} text-[12px] md:text-base font-[500] text-[${
              pathname === "/achievements" ? "#589CFF" : "#A8A8A8"
            }] uppercase`}
          >
            Badges
          </p>
        </div>
        <div
          onClick={() => {
            router.push("/bookmarkspage");
          }}
          className="flex flex-col items-center cursor-pointer"
        >
          <SavedIcon
            color={pathname === "/bookmarkspage" ? "#589CFF" : "#A8A8A8"}
          />
          <p
            className={`font-${poppins} text-[12px] md:text-base font-[500] text-[${
              pathname === "/bookmarkspage" ? "#589CFF" : "#A8A8A8"
            }] uppercase`}
          >
            Saved
          </p>
        </div>
        <div
          onClick={() => {
            router.push("/wallet");
          }}
          className="flex flex-col items-center cursor-pointer"
        >
          <RevenueIcon color={pathname === "/wallet" ? "#589CFF" : "#A8A8A8"} />
          <p
            className={`font-${poppins} text-[12px] md:text-base font-[500] text-[${
              pathname === "/wallet" ? "#589CFF" : "#A8A8A8"
            }] uppercase`}
          >
            Revenue
          </p>
        </div>
        <div
          onClick={() => {
            router.push("/subscriptionpage");
          }}
          className="flex flex-col items-center cursor-pointer"
        >
          <PlansIcon
            color={pathname === "/subscriptionpage" ? "#589CFF" : "#A8A8A8"}
          />
          <p
            className={`font-${poppins} text-[12px] md:text-base font-[500] text-[${
              pathname === "/subscriptionpage" ? "#589CFF" : "#A8A8A8"
            }] uppercase`}
          >
            Plans
          </p>
        </div>
      </div>
      <div className="flex flex-col mt-[100px] items-center gap-[16px]">
        {!user?.isCreator && (
          <div onClick={enableCreator} className="flex flex-col items-center">
            <Switch
              checked={isPublic}
              onChange={setIsPublic}
              className={classNames(
                isPublic ? "bg-indigo-600" : "bg-gray-200",
                "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
              )}
            >
              <span className="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                className={classNames(
                  isPublic ? "translate-x-5" : "translate-x-0",
                  "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                )}
              />
            </Switch>
            <p className="text-[#A8A8A8] text-center font-poppins text-[12px] md:text-base font-[500] uppercase">
              Enable <br /> Creator
            </p>
          </div>
        )}
        <div
          onClick={() => {
            router.push("/supportcenter");
          }}
          className="flex flex-col items-center cursor-pointer"
        >
          <SupportIcon
            color={pathname === "/supportcenter" ? "#589CFF" : "#A8A8A8"}
          />
          <p
            className={`font-${poppins} text-[12px] md:text-base font-[500] text-[${
              pathname === "/supportcenter" ? "#589CFF" : "#A8A8A8"
            }] uppercase`}
          >
            Support
          </p>
        </div>
        <div
          onClick={() => {
            router.push("/settings");
          }}
          className="flex flex-col items-center cursor-pointer"
        >
          <SettingIcon
            color={pathname === "/settings" ? "#589CFF" : "#A8A8A8"}
          />
          <p
            className={`font-${poppins} text-[12px] md:text-base font-[500] text-[${
              pathname === "/settings" ? "#589CFF" : "#A8A8A8"
            }] uppercase`}
          >
            Settings
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
