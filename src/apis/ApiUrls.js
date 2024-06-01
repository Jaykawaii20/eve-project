export const ApiUrls = {
  users: {
    login: "api/auth/signin",
    register: "api/auth/register",
    onBoarding: "/api/auth/onboarding",
    getUserDetails: "/api/auth/get_user_details",
    enableCreator: "/api/auth/enable_creator",
    getUserPublicDetails: "api/auth/get_user_public_details",
  },
  posts: {
    getUserPosts: "/api/posts/user_posts",
    getAllPosts: "/api/posts/all_posts",
    likePost: "/api/posts/like_post",
    uploadImage: "/api/posts/upload_post",
    createPost: "/api/posts/create_post",
  },
  notification: {
    getNotification: "/api/notifications/get_user_notification",
  },
  conversation: {
    getConversations: "api/chat/get_user_chat_history",
    getMessagesForConversation: "get_conversation",
    sendMessage: "new_conversation",
    sendMessageRequest: "api/chat/add_new_request",
    acceptMessageRequest: "api/chat/request_response",
    blockAContact: "/api/chat/block_user_chat_history",
    unblockAContact: "/api/chat/unblock_user_chat_history",
    decreaseToken: "/api/chat/decrease_user_token",
  },
  payments: {
    addToken: "/api/payment/add_token",
    attachUrl: "/api/payment/attach_card",
  },
};
