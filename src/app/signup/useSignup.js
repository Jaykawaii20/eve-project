import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signup, login } from "./signupSlice";
import { useRouter } from "next/navigation";
import * as z from "zod";
import axios from "axios";
import { baseUrl } from "@/config/baseUrl";
import { useRealm } from "@/contexts/Realm";

const useSignup = () => {
  const router = useRouter();
  const user = useSelector((state) => state.signupSlice.user);
  const realm = useRealm();
  const dispatch = useDispatch();
  const [mode, setMode] = useState("signup");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [confirmPassword, setConfirmPassword] = useState("");

  const formSchema = z.object({
    email: z.string().min(1, "Please provide the email"),
    password: z.string().min(1, "Please provide the password"),
    confirmPassword: z
      .string()
      .refine((value) => (value == password ? 1 : 0), "Password does not match")
      .optional(),
  });

  const handleSignUp = async () => {
    const data = {
      email,
      password,
      confirmPassword,
    };

    try {
      formSchema.parse(data);
      // const res = await dispatch(signup(data));
      // if (res.payload != undefined) {
      //   router.push("/Onboarding");
      // }
    } catch (error) {
      let oerrors = {};
      error.errors.forEach((err) => {
        oerrors = { ...oerrors, [err.path.join("")]: err.message };
      });

      setErrors(oerrors);
      return
    }

    try {
      await realm.signUp(email, password)
    } catch (e) {
      console.log(e)
    }
  };

  const handleSignIn = async () => {
    const data = {
      email,
      password,
    };

    try {
      formSchema.parse(data);
      // const res = await axios.post(baseUrl + "/api/auth/login", data);
      // if (res?.data?.status === 200) {
      //   localStorage.setItem("token", res.data.access_token);
      //   router.push("/homepage");
      // } else {
      //   alert("Login Failed!");
      // }
    } catch (error) {
      let oerrors = {};
      error.errors.forEach((err) => {
        oerrors = { ...oerrors, [err.path.join("")]: err.message };
      });
      setErrors(oerrors);
      return
    }

    try {
      const rst = realm.logIn('email', { email: 'text@hhhw.com', password: 'password123' });
    } catch (e) {
      console.log(e)
    }
    // const res = await dispatch(login(data));
    // if (res.payload != undefined) {
    //   router.push("/homepage");
    // }
    // const res = await axios.post("http://localhost:5000/api/auth/signin", data)
  };
  return {
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
  };
};

export default useSignup;
