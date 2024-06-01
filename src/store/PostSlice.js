import { createSlice } from "@reduxjs/toolkit";
import { http } from "@/config/http";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiUrls } from "@/apis/ApiUrls";
import toast from "react-hot-toast";

export const createPost = createAsyncThunk(
  "postSlice/createPost",
  async (data) => {
    try {
      const { payload, callback } = data;
      const formdata = new FormData();
      const token = localStorage.getItem("token");
      const header = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      formdata.append("file", payload.image);
      const response = await http.post(
        ApiUrls.posts.uploadImage,
        formdata,
        header
      );
      const createPost = await http.post(
        ApiUrls.posts.createPost,
        {
          media_url: response?.media?.secure_url,
          description: payload.description,
          category: payload.category,
          tags: payload.tags,
          isPublic: payload.isPublic,
        },
        header
      );
      callback(createPost);
      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      throw error;
    }
  }
);

const postSLice = createSlice({
  name: "postSLice",
  initialState: {
    user: {},
    postModal: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },

    deleteUser: (state, action) => {
      state.user = {};
    },
    setPostModal: (state, action) => {
      state.postModal = action.payload;
    },
  },
});

export const { setUser, deleteUser, setPostModal } = postSLice.actions;

export default postSLice.reducer;
