"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Poppins } from "next/font/google";
import { Button } from "../../components/Button/Button";
import useSignup from "./useSignup";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const SignUpCard = () => {
  const {
    mode,
    setMode,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    errors,
    handleSignIn,
    handleSignUp,
  } = useSignup();
  const router = useRouter();

  return (
    <div className="bg-white w-[600px] max-md:w-[450px] max-sm:w-[311px] rounded-3xl flex flex-col items-center justify-center py-[60px] max-sm:py-[40px]">
      <p className="sm:hidden text-[40px] font-extrabold text-[#589CFF] mt-[-20px] mb-[20px]">
        Eve
      </p>
      <div className="flex gap-[12px]">
        <Button
          text="Sign In"
          buttonStyle={`border rounded-[20px] bg-[${
            mode === "signin" ? "#589CFF" : "white"
          }]  border-[#589CFF]`}
          textStyle={`font-[500] px-[26px] max-sm:px-[19px] sm:py-[12px] text-[${
            mode === "signin" ? "red" : "#589CFF"
          }] text-[24px] max-sm:text-[18px]`}
          onClick={() => {
            setMode("signin");
          }}
        />
        <Button
          text="Sign up"
          buttonStyle={`border rounded-[20px] bg-[${
            mode === "signup" ? "#589CFF" : "white"
          }]  border-[#589CFF]`}
          textStyle={`font-[500] px-[26px] max-sm:px-[19px] sm:py-[12px] text-[${
            mode === "signup" ? "red" : "#589CFF"
          }] text-[24px] max-sm:text-[18px]`}
          onClick={() => {
            setMode("signup");
          }}
        />
      </div>
      <p className="text-gray-700 font-poppins max-sm:my-[20] my-[32px] text-3xl font-semibold">
        {mode === "signup" ? "Hi, Amazing user!" : "Welcome again!"}
      </p>

      <div className="flex flex-col gap-[20px] w-full max-sm:px-[24px] px-[80px]">
        <div>
          <input
            className="w-full h-[48px] rounded-lg border border-gray-300 pl-[25px] text-base font-medium text-gray-600 bg-gray-200"
            placeholder="@ Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="text-red-600 mt-1">{errors.email}</p>}
        </div>

        <div>
          <input
            className="w-full h-[48px] rounded-lg border border-gray-300 pl-[25px] text-base font-medium text-gray-600 bg-gray-200"
            placeholder="@ Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <p className="text-red-600 mt-1">{errors.password}</p>
          )}

          {mode === "signin" && (
            <p className="text-blue-500 mb-[20px] text-base">
              Forgot password?
            </p>
          )}
        </div>

        {mode === "signup" && (
          <div>
            <input
              className="w-full h-[48px] rounded-lg border border-gray-300 pl-[25px] text-base font-medium text-gray-600 bg-gray-200"
              placeholder="@ Confirm password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {errors.confirmPassword && (
              <p className="text-red-600 mt-1">{errors.confirmPassword}</p>
            )}
          </div>
        )}
      </div>

      {mode === "signup" && (
        <div className="flex items-center my-[32px] max-sm:my-[20px] justify-center text-center">
          <p className="font-poppins text-base font-light text-gray-700">
            By selecting agree and continue below, <br /> I agree to{" "}
            <span className="text-[#589CFF]">
              Terms of Service and Privacy Policy
            </span>
          </p>
        </div>
      )}

      <button
        className="flex w-[218px] h-[37px] items-center justify-center  p-[8px] gap-[8px] bg-[#589CFF] border border-blue-600 rounded-lg"
        onClick={mode === "signup" ? handleSignUp : handleSignIn}
      >
        <p className="font-poppins text-base flex justify-center items-center gap-[8px] font-semibold text-white">
          <img src="/images/svgs/forward-circle.svg" alt="img" />
          {mode === "signup" ? "Agree and continue" : "Explore"}
        </p>
      </button>

      <div className="flex flex-col justify-center mt-[32px] max-sm:mt-[20px] items-center gap-[12px]">
        <p className="font-poppins text-base font-semibold text-gray-700">
          - or continue with -
        </p>
        <div className="flex gap-[16px]">
          <img src="/google.png" alt="Google" />
          <img src="Facebook.png" alt="Facebook" />
          <img src="apple.png" alt="apple" />
        </div>
      </div>
    </div>
  );
};
