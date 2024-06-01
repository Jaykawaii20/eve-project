import { configureStore } from "@reduxjs/toolkit";
import signupSlice from "@/app/signup/signupSlice";
import onboardingSlice from "@/app/Onboarding/onboardingSlice";
import userSlice from "./userSlice";
import PostSlice from "./PostSlice";
import homePagePostSlice from "@/components/post/homePagePostSlice";
import NotificationSlice from "./NotificationSlice";
import ConversationSlice from "./ConversationSlice";
import paymentSlice from "./paymentSlice";
export const store = configureStore({
  reducer: {
    signupSlice: signupSlice,
    onboardingSlice: onboardingSlice,
    userSlice: userSlice,
    post: PostSlice,
    homePagePostSlice: homePagePostSlice,
    notification: NotificationSlice,
    conversation: ConversationSlice,
    paymentSlice: paymentSlice,
  },
});
