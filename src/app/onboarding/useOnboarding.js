import { ApiUrls } from "@/apis/ApiUrls";
import { baseUrl } from "@/config/baseUrl";
import { http } from "@/config/http";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const useOnboarding = () => {
  const [tab, setTab] = useState(1);
  const [commonCard, setCommonCard] = useState("web");
  const [showCommonCard, setShowCommonCard] = useState(true);
  const user = useSelector((state) => state.onboardingSlice.user);
  console.log("user", user);
  const data = user;
  const router = useRouter();

  useEffect(() => {
    if (!showCommonCard) {
      return; // Exit early if showCommonCard is false
    }

    const handleResize = () => {
      if (window.innerWidth <= 768) {
        console.log("use effect chala");
        setCommonCard("mobile");
        setTab(0);
      } else {
        setTab(1);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [showCommonCard]);

  function commonCardFun() {
    console.log("code chala");
    setTab(1);
    setShowCommonCard(false);
  }

  const uploadOnBoarding = async () => {
    try {
      console.log("data", user);
      const token = localStorage.getItem("token");
      const header = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const res = await http.post(
        baseUrl + ApiUrls.users.onBoarding,
        user,
        header
      );
      if (res?.status === 200) {
        router.push("/homepage");
        console.log(data);

        return res;
      } else {
        throw new Error(res.message);
      }
    } catch (error) {
      throw error;
    }
  };

  return {
    tab,
    setTab,
    commonCard,
    setCommonCard,
    showCommonCard,
    setShowCommonCard,
    uploadOnBoarding,
    commonCardFun,
  };
};

export default useOnboarding;
