import { createSlice } from "@reduxjs/toolkit";
import { http } from "@/config/http";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiUrls } from "@/apis/ApiUrls";
import toast from "react-hot-toast";

export const getUserDetails = createAsyncThunk(
  "userSlice/getUserDetails",
  async (id) => {
    try {
      const response = await http.post(ApiUrls.users.getUserPublicDetails, {
        _id: id,
      });
      return response;
    } catch (error) {
      return error.response.data;
    }
  }
);

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    user: {},
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },

    deleteUser: (state, action) => {
      state.user = {};
    },
  },
});

export const { setUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
