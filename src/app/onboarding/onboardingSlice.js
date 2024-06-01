import { createSlice } from "@reduxjs/toolkit";
import { http } from "@/config/http";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiUrls } from "@/apis/ApiUrls";
import toast from "react-hot-toast";

const onBoardingSlice = createSlice({
  name: "onBoarding",
  initialState: {
    user: {
      fName: "",
      mName: "",
      lName: "",
      country: "",
      phone: "",
      username: "",
      bio: "",
      interest: "",
      avatar: "",
      tab: 0,
    },
  },
  reducers: {
    setDetailedInformation: (state, action) => {
      console.log("action.payload", action.payload);
      state.user.fName = action.payload.fName;
      state.user.mName = action.payload.mName;
      state.user.lName = action.payload.lName;
      state.user.country = action.payload.country;
      state.user.phone = action.payload.phone;
    },
    setPickupInterest: (state, action) => {
      state.user.username = action.payload.username;
      state.user.bio = action.payload.bio;
      state.user.interest = action.payload.interest;
    },
    setYourAvatar: (state, action) => {
      console.log("action.payload", action.payload.avatar);
      state.user.avatar = action.payload.avatar;
    },
  },
});

export const { setDetailedInformation, setPickupInterest, setYourAvatar } =
  onBoardingSlice.actions;

export default onBoardingSlice.reducer;
