"use client";
import { ApiUrls } from "@/apis/ApiUrls";
import { baseUrl } from "@/config/baseUrl";
import { http } from "@/config/http";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/store/userSlice";
import axios from "axios";

const useHomePage = () => {
  const router = useRouter();
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
  useEffect(() => {
    getUserDetails();
  }, []);

  return {
    getUserDetails,
  };
};

export default useHomePage;
