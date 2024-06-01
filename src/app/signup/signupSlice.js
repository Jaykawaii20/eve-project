import { createSlice } from "@reduxjs/toolkit";
import { http } from "@/config/http";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiUrls } from "@/apis/ApiUrls";
import toast from "react-hot-toast";
import { useRouter } from "next/router"; // Correct import

export const signup = createAsyncThunk("do/signup", async (dispatch) => {
  try {
    const res = await http.post(ApiUrls.users.signup, dispatch);
    if (res?.status === 200) {
      localStorage.setItem("token", res.access_token);
      return res;
    } else {
      throw new Error(res.message);
    }
  } catch (error) {
    throw error;
  }
});


export const login = createAsyncThunk("do/login", async (dispatch) => {
  try {
    const res = await http.post(ApiUrls.users.login, dispatch);
    if (res?.status === 200) {
      localStorage.setItem("token", res.access_token);
      return res;
    } else {
      throw new Error(res.message);
    }
  } catch (error) {
    throw error;
  }
});
export const signupSlice = createSlice({
  name: "counter",
  initialState: {
    user: {},
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state, action) => {
        toast.loading("Please wait");
      })
      .addCase(signup.fulfilled, (state, action) => {
        toast.dismiss();
        toast.success(action.payload.message);

        state.user = action.payload;
      })
      .addCase(signup.rejected, (state, action) => {
        toast.dismiss();
        toast.error(action.error.message);
      })
      .addCase(login.pending, (state, action) => {
        toast.loading("Please wait");
      })
      .addCase(login.fulfilled, (state, action) => {
        toast.dismiss();
        toast.success(action.payload.message);
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        toast.dismiss();
        toast.error(action.error.message);
      });
  },
});

export const { increment, decrement, incrementByAmount } = signupSlice.actions;

export default signupSlice.reducer;
