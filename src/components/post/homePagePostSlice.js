import { createSlice } from "@reduxjs/toolkit";
import { http } from "@/config/http";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiUrls } from "@/apis/ApiUrls";
import toast from "react-hot-toast";



const homePagePostSlice = createSlice({
    name: "homePagePostSlice",
    initialState: {
        posts : [],
    },
    reducers: {

      
        
        setPosts: (state, action) => {
            state.posts = action.payload;
        },

        addPost: (state, action) => {
            state.posts.push(action.payload);
        },

        removePost: (state, action) => {
            state.posts = state.posts.filter(post => post._id !== action.payload);
        },




    },
    
    });

export const { setPosts, addPost, removePost} = homePagePostSlice.actions;

export default homePagePostSlice.reducer;