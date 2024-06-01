import { createSlice } from "@reduxjs/toolkit";
import { http } from "@/config/http";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiUrls } from "@/apis/ApiUrls";
import toast from "react-hot-toast";

export const getConversations = createAsyncThunk(
  "conversationSlice/getConversations",
  async (loading) => {
    try {
      const token = localStorage.getItem("token");
      const header = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await http.get(
        ApiUrls.conversation.getConversations,
        header
      );
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      loading && loading(false);
    }
  }
);

export const getMessagesForConversation = createAsyncThunk(
  "conversationSlice/getMessagesForConversation",
  async (chat_history_id) => {
    try {
      const token = localStorage.getItem("token");
      const header = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await http.post(
        ApiUrls.conversation.getMessagesForConversation,
        { chat_history_id },
        header
      );
      return { ...response, chat_history_id };
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
    }
  }
);

export const sendMessage = createAsyncThunk(
  "conversationSlice/sendMessage",
  async (message) => {
    try {
      const token = localStorage.getItem("token");
      const header = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await http.post(
        ApiUrls.conversation.sendMessage,
        message,
        header
      );
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
    }
  }
);

export const sendMessageRequest = createAsyncThunk(
  "conversationSlice/sendMessageRequest",
  async (create_id) => {
    try {
      toast.loading("Message Request sending");
      const token = localStorage.getItem("token");
      const header = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      console.log(header, "token =======");
      const response = await http.post(
        ApiUrls.conversation.sendMessageRequest,
        // { creator_id: "65b2954e40dd2e66b3111f34"},
        { creator_id: create_id },
        header
      );
      toast.dismiss();

      toast.success("Message Request Sent");
      return response;
    } catch (error) {
      toast.error("some thing went wrong");
      console.log(error, "error in the slice");
      throw error;
    } finally {
    }
  }
);

export const acceptMessageRequest = createAsyncThunk(
  "conversationSlice/acceptMessageRequest",
  async (data) => {
    try {
      toast.loading("Message Request Accepting");

      const token = localStorage.getItem("token");
      const header = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      console.log(data, "token =======");
      const response = await http.post(
        ApiUrls.conversation.acceptMessageRequest,
        // { creator_id: "65b2954e40dd2e66b3111f34"},
        {
          audience_id: data.requestID,
          status: data.status,
          creator_id: data.creator_id,
        },
        header
      );
      toast.dismiss();
      toast.success("Message Request Accept");

      return response;
    } catch (error) {
      console.log(error);
      toast.error("some thing went ");

      throw error;
    } finally {
    }
  }
);

export const blockContact = createAsyncThunk(
  "conversationSlice/blockContact",
  async (chatId) => {
    try {
      toast.loading("blocking contact...");

      const token = localStorage.getItem("token");
      const header = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await http.post(
        ApiUrls.conversation.blockAContact,
        // { creator_id: "65b2954e40dd2e66b3111f34"},
        {
          chat_id: chatId,
        },
        header
      );
      toast.dismiss();
      toast.success("Contact blocked Success");

      return response;
    } catch (error) {
      console.log(error);
      toast.error("some thing went ");

      throw error;
    } finally {
    }
  }
);

export const unBlockContact = createAsyncThunk(
  "conversationSlice/unBlockContact",
  async (chatId) => {
    try {
      toast.loading("unBlocking contact...");

      const token = localStorage.getItem("token");
      const header = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await http.post(
        ApiUrls.conversation.unblockAContact,
        // { creator_id: "65b2954e40dd2e66b3111f34"},
        {
          chat_id: chatId,
        },
        header
      );
      toast.dismiss();
      toast.success("Contact unblocked Success");

      return response;
    } catch (error) {
      console.log(error);
      toast.error("some thing went ");

      throw error;
    } finally {
    }
  }
);

export const decreaseToken = createAsyncThunk(
  "conversationSlice/decreaseToken",
  async (data) => {
    console.log(data, "data======= decrease token");
    try {
      toast.loading("decreasing token...");

      const token = localStorage.getItem("token");
      const header = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await http.post(
        ApiUrls.conversation.decreaseToken,
        {
          last_message: data.message,
          chat_id: data.chatID,
        },
        header
      );
      toast.dismiss();
      toast.success("decrease token");

      return response;
    } catch (error) {
      console.log(error);
      toast.error("some thing went token");

      throw error;
    } finally {
    }
  }
);

export const uploadImageToChat = createAsyncThunk(
  "conversationSlice/uploadImageToChat",
  async (image) => {
    const formdata = new FormData();
    try {
      toast.loading("image uploading ...");

      const token = localStorage.getItem("token");
      const header = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      formdata.append("file", image);
      const response = await http.post(
        ApiUrls.posts.uploadImage,
        formdata,
        header
      );
      toast.dismiss();
      toast.success("image uploaded token");
      console.log(response?.media?.secure_url, "image uploded");
      return response?.media?.secure_url;
    } catch (error) {
      console.log(error);
      toast.error("some thing wrong image uploading");

      throw error;
    } finally {
    }
  }
);

const conversationSlice = createSlice({
  name: "conversationSlice",
  initialState: {
    conversations: [],
    messages: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getConversations.fulfilled, (state, action) => {
      state.conversations = action.payload?.chat_history ?? [];
    });

    builder.addCase(getMessagesForConversation.fulfilled, (state, action) => {
      state.messages[action.payload?.chat_history_id] = action.payload?.data;
    });
    // builder.addCase(sendMessage.fulfilled, (state, action) => {
    //   state.messages[action.payload.data?.chat_history_id] =
    //     action.payload?.data?.chat;
    // });
  },
});

export const {} = conversationSlice.actions;

export default conversationSlice.reducer;
