"use client";
import React, { useState, useEffect } from "react";
import { Poppins } from "next/font/google";
import CommonCard from "./CommonCard";
import useOnboarding from "./useOnboarding";
import AvatarChooser from "./AvatarSlider";
import { useSelector, useDispatch } from "react-redux";
import styles from "../globals.module.css";
import {
  setDetailedInformation,
  setPickupInterest,
  setYourAvatar,
} from "./onboardingSlice";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const page = () => {
  const {
    tab,
    setTab,
    commonCard,
    setCommonCard,
    showCommonCard,
    commonCardFun,
    uploadOnBoarding,
  } = useOnboarding();
  console.log(tab, commonCard, "page=====");
  const user = useSelector((state) => state.onboardingSlice.user);
  const dispatch = useDispatch();

  console.log(user);
  const [country, setCountry] = React.useState(user.country);
  const [phone, setPhone] = React.useState(user.phone);
  const [username, setUsername] = React.useState(user.username);
  const [fName, setFName] = React.useState(user.fName);
  const [mName, setMName] = React.useState(user.mName);
  const [lName, setLName] = React.useState(user.lName);
  const [bio, setBio] = React.useState(user.bio);
  const [interest, setInterest] = React.useState(user.interest);
  const [avatar, setAvatar] = React.useState(user.avatar);
  const [errors, setErrors] = React.useState({});
  const [isFormValid, setIsFormValid] = React.useState(false);

  const countries = [
    { country: "United States", code: "+1" },
    { country: "Canada", code: "+1" },
    { country: "Russia", code: "+7" },
    { country: "India", code: "+91" },
    { country: "China", code: "+86" },
    { country: "United Kingdom", code: "+44" },
    { country: "Germany", code: "+49" },
    { country: "France", code: "+33" },
    { country: "Brazil", code: "+55" },
    { country: "South Africa", code: "+27" },
    // Add more countries and codes as needed
  ];

  useEffect(() => {
    validateForm();
  }, [username, phone, fName, mName, lName, bio, interest]);

  const validateForm = () => {
    let errors = {};

    if (!username) {
      errors.username = "Username is required.";
    } else if (username.length < 12) {
      errors.username = "Username must be at least 12 characters.";
    }

    if (!phone) {
      errors.phone = "Phone is required.";
    } else if (!/^\d+$/.test(phone)) {
      errors.phone = "Phone must contain only numbers.";
    } else if (phone.length < 9) {
      errors.phone = "Phone must be at least 9 numerical";
    }

    if (!fName) {
      errors.fName = "Name is required.";
    } else if (fName.length < 3) {
      errors.fName = "Name must be at least 3 characters.";
    }

    if (!mName) {
      errors.mName = "Middle Name is required.";
    } else if (mName.length < 3) {
      errors.mName = "Middle Name must be at least 2 characters.";
    }

    if (!lName) {
      errors.lName = "Last Name is required.";
    } else if (lName.length < 3) {
      errors.lName = "Last Name must be at least 3 characters.";
    }

    if (!bio) {
      errors.bio = "Bio is required.";
    } else if (bio.length < 10) {
      errors.bio = "Bio must be at least 10 characters.";
    }

    if (!interest) {
      errors.interest = "Interest is required.";
    } else if (interest.length < 3) {
      errors.interest = "Interest must be at least 3 characters.";
    }

    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  return (
    <div
      className={` flex flex-1 justify-start items-center h-screen w-full`}
      style={{
        backgroundImage: "url(/background.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* <div> */}
      {showCommonCard && (
        <CommonCard
          tab={tab}
          commonCard={commonCard}
          commonCardFun={commonCardFun}
        />
      )}
      {/* </div> */}

      {/* 
      onBoarding Tab#1
      */}
      {tab === 1 && (
        <div className="ml-[15%] w-[35%] max-sm:w-[90%] max-sm:ml-[5%] bg-white flex flex-col rounded-[24px] justify-center items-center py-[60px] px-[36px]">
          {errors.fName && (
            <p style={{ ...styles.error, color: "red" }}>{errors.fName}</p>
          )}
          <div className="flex items-start gap-[10px] content-start self-stretch flex-wrap  border-b-2 border-b-[#E3E3E3] pb-[20px] mb-[20px]">
            <h1 className="sm:hidden text-center text-[24px] font-[600] text-black">
              Detailed Information
            </h1>
            <input
              className="w-[45%] max-sm:w-[100%] py-[8px] px-[12px] flex items-center gap-[8px] bg-[#E3E3E3] border border-[#C0C1C3] rounded-[12px] text-[#A8A8A8] font-[500] text-[16px]"
              type="text"
              placeholder="First Name"
              value={fName}
              onChange={(e) => setFName(e.target.value)}
              maxLength={12}
            />

            <input
              type="text"
              className="w-[45%] max-sm:w-[100%] py-[8px] px-[12px] flex items-center gap-[8px] bg-[#E3E3E3] border border-[#C0C1C3] rounded-[12px] text-[#A8A8A8] font-[500] text-[16px]"
              placeholder="Middle Name"
              value={mName}
              onChange={(e) => setMName(e.target.value)}
              maxLength={12}
            />
            {errors.lName && (
              <p style={{ ...styles.error, color: "red" }}>{errors.lName}</p>
            )}
            <input
              type="text"
              className="w-[100%] py-[8px] px-[12px] flex items-center gap-[8px] bg-[#E3E3E3] border border-[#C0C1C3] rounded-[12px] text-[#A8A8A8] font-[500] text-[16px]"
              placeholder="Last Name (Surname)"
              value={lName}
              onChange={(e) => setLName(e.target.value)}
              maxLength={12}
            />
          </div>

          <div className="flex w-[100%] items-center gap-[20px]">
            <select
              className="text-black py-[8px] px-[12px] rounded-[12px] border border-[#A8A8A8]"
              name="dropdown"
              id=""
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              {countries.map((country, index) => (
                <option key={index} value={country.code}>
                  {country.code}
                </option>
              ))}
              {/* <option value="92">(+92)</option> */}
            </select>
            <input
              type="text"
              className="w-[100%] py-[8px] px-[12px] flex items-center gap-[8px] bg-[#E3E3E3] border border-[#C0C1C3] rounded-[12px] text-[#A8A8A8] font-[500] text-[16px]"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              maxLength={9}
            />
          </div>
          {errors.phone && (
            <p style={{ ...styles.error, color: "red" }}>{errors.phone}</p>
          )}
          <div
            onClick={() => {
              if (fName && mName && lName && phone) {
                dispatch(
                  setDetailedInformation({
                    fName,
                    mName,
                    lName,
                    country,
                    phone,
                  })
                );
                setTab(2);
              }
            }}
            className="flex w-[200px] max-sm:w-[250px] cursor-pointer justify-center items-center gap-[8px] bg-[#589CFF] mt-[32px] py-[8px] px-[16px] rounded-[12px]"
          >
            <img src="/images/svgs/forward-circle.svg" alt="img" />

            <p className="text-[16px] font-[500] text-white">Continue</p>
          </div>
          <div className="flex gap-2 mt-[40px] sm:hidden">
            <p className={`w-[10px] h-[10px] rounded-full bg-[#589CFF]`}></p>
            <p className={`w-[10px] h-[10px] rounded-full bg-[#A8A8A8]`}></p>
            <p className={`w-[10px] h-[10px] rounded-full bg-[#A8A8A8]`}></p>
          </div>
        </div>
      )}
      {/* 
      onBoarding Tab#2
      */}
      {tab === 2 && (
        <div className="ml-[15%] w-[35%] max-sm:w-[90%] max-sm:ml-[5%] bg-white flex flex-col gap-[32px] max-sm:gap-[20px] rounded-[24px] justify-center items-center py-[60px] px-[36px]">
          <div className="flex items-start gap-[10px] content-start self-stretch flex-wrap  border-b-2 border-b-[#E3E3E3] pb-[20px] mb-[20px]">
            <h1 className="sm:hidden text-[24px] font-[600] text-center text-black">
              Personalize Avatar{" "}
            </h1>
            {errors.username && (
              <p style={{ ...styles.error, color: "red" }}>{errors.username}</p>
            )}
            <input
              className="w-[100%] py-[8px] px-[12px] flex items-center gap-[8px] bg-[#E3E3E3] border border-[#C0C1C3] rounded-[12px] text-[#A8A8A8] font-[500] text-[16px]"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              maxLength={12}
            />
            {errors.bio && (
              <p style={{ ...styles.error, color: "red" }}>{errors.bio}</p>
            )}
            <textarea
              rows={4}
              className="w-[100%] py-[8px] px-[12px] flex items-center gap-[8px] bg-[#E3E3E3] border border-[#C0C1C3] rounded-[12px] text-[#A8A8A8] font-[500] text-[16px]"
              type="textarea"
              placeholder="Bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              maxLength={255}
            />
            {errors.interest && (
              <p style={{ ...styles.error, color: "red" }}>{errors.interest}</p>
            )}
            <input
              className="w-[100%] py-[8px] px-[12px] flex items-center gap-[8px] bg-[#E3E3E3] border border-[#C0C1C3] rounded-[12px] text-[#A8A8A8] font-[500] text-[16px]"
              type="text"
              placeholder="Interest"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              maxLength={255}
            />
          </div>
          <div
            onClick={() => {
              if (username && bio && interest) {
                setTab(3);
                dispatch(setPickupInterest({ username, bio, interest }));
              }
            }}
            className="flex w-[200px] max-sm:w-[250px] cursor-pointer justify-center items-center gap-[8px] bg-[#589CFF]  py-[8px] px-[16px] rounded-[12px]"
          >
            <img src="/images/svgs/forward-circle.svg" alt="img" />

            <p className="text-[16px] font-[500] text-white">Continue</p>
          </div>
          <div className="flex gap-2 mt-[10px] sm:hidden">
            <p className={`w-[10px] h-[10px] rounded-full bg-[#589CFF]`}></p>
            <p className={`w-[10px] h-[10px] rounded-full bg-[#589CFF]`}></p>
            <p className={`w-[10px] h-[10px] rounded-full bg-[#A8A8A8]`}></p>
          </div>
        </div>
      )}
      {/* 
      onBoarding Tab#3
      */}
      {tab === 3 && (
        <div className="w-[40%] h-[100%] ml-[15%]">
          <AvatarChooser
            avatar={avatar}
            setAvatar={setAvatar}
            uploadOnBoarding={uploadOnBoarding}
          />
        </div>
      )}
    </div>
  );
};

export default page;
