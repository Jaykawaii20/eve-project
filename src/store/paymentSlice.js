import { createSlice } from "@reduxjs/toolkit";
import { http } from "@/config/http";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiUrls } from "@/apis/ApiUrls";
import toast from "react-hot-toast";

const paymentSlice = createSlice({
  name: "paymentSlice",
  initialState: {},
  reducers: {},
});

export const buyToken = createAsyncThunk(
  "conversationSlice/buyToken",
  async (loading) => {
    try {
      const token = localStorage.getItem("token");
      const header = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await http.post(
        ApiUrls.payments.addToken,
        { amount: 10 },
        header
      );
      console.log(response, "token buying sucess");
      return response;
    } catch (error) {
      console.log(error, "error in buying token");
      throw error;
    } finally {
    }
  }
);

export const addCard = createAsyncThunk(
  "conversationSlice/addCard",
  async (loading) => {
    try {
      const token = localStorage.getItem("token");
      const header = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await http.post(
        ApiUrls.payments.attachUrl,
        { payment_method_id: paymentMethod.id },
        header
      );
      console.log(response, "success aaya h payment");

      return response;
    } catch (error) {
      console.log(error, "error aaya h payment");
      throw error;
    } finally {
    }
  }
);

export const {} = paymentSlice.actions;

export default paymentSlice.reducer;
