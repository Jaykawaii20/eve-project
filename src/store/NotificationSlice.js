import { createSlice } from "@reduxjs/toolkit";
import { http } from "@/config/http";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiUrls } from "@/apis/ApiUrls";
import toast from "react-hot-toast";

export const getNotification = createAsyncThunk(
  "notificationSlice/getNotification",
  async () => {
    try {
      const token = localStorage.getItem("token");
      const header = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await http.get(
        ApiUrls.notification.getNotification,
        header
      );
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

const notificationSlice = createSlice({
  name: "notificationSlice",
  initialState: {
    notifications: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNotification.fulfilled, (state, action) => {
      state.notifications = action.payload?.notifications ?? [];
    });
  },
});

export const {} = notificationSlice.actions;

export default notificationSlice.reducer;
