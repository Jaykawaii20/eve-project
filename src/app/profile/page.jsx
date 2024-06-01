"use client";

import Post from "@/components/post/Post";
import { getUserDetails, setUser } from "@/store/userSlice";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessageRequest } from "@/store/ConversationSlice";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function page() {
  const router = useRouter();

  const user = useSelector((state) => state.userSlice.user);

  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const userId = searchParams.get("userId");
  const userStatus = user?.message_request_sent_to?.find(
    (user) => user?.creator_id === userId
  );
  const message = userStatus
    ? userStatus.status === "pending"
      ? "Request Sent"
      : userStatus.status === "accepted"
      ? "Message"
      : userStatus.status
    : "Message Request";
  const [userData, setUserData] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [loader, setLoader] = React.useState(false);
  console.log(userData, "========user data");
  const getUserData = async () => {
    setLoading(true);
    const response = await dispatch(getUserDetails(userId));
    setUserData(response?.payload?.user);
    setLoading(false);
  };

  const sendMessageRequestFun = async () => {
    setLoader(true);
    let res = await dispatch(sendMessageRequest(userId));
    console.log(res, "user message request sent");
    setLoader(false);
  };
  useEffect(() => {
    if (userId) {
      getUserData();
    }
  }, [userId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen w-full">
        {/* draw custom loader with tailwind */}

        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  const logout = async () => {
    toast.loading("Logout ...");
    await localStorage.removeItem("token");
    toast.dismiss();
    toast.success("Logout Success");
    dispatch(setUser({}));
    router.push("/signup");
  };
  return (
    <div className="sm:ml-[50px]">
      <div>
        <img
          src="/bg4.png"
          className="w-full h-full max-lg:h-[300px]"
          alt="picture"
        />
      </div>
      <div className="flex justify-center w-[99%] h-[243px] rounded-[12px] max-lg:bg-transparent bg-white shadow-[0 0 10px rgba(0, 0, 0, 0.1)] mt-[-50px] ml-[4px]">
        <div className="flex flex-col w-full h-[288px]  gap-[4px]">
          <div className="mt-[-40px] ml-[40px] border-blue-500  border-2 rounded-full h-[120px] w-[120px]">
            {userData?.avatar ? (
              <img
                className="h-full w-full rounded-[50%]"
                src={`/ProfilePictures/${userData?.avatar}`}
                alt="picture"
              />
            ) : (
              <img className="h-full w-full rounded-[50%]" src="/contact.png" />
            )}
          </div>
          <div className="flex flex-col py-[12px] px-[40px]">
            <div className="flex justify-between flex-wrap items-center">
              <p className="text-uppercase font-poppins text-[40px] max-md:text-[24px] max-lg:text-[30px] font-[600] text-[#2F2F2F]">
                {userData?.username}
              </p>
              <div className="flex h-[48px] items-start gap-[4px]">
                {user?.id != userId && (
                  <button className="flex items-center py-[8px] px-[16px] gap-[8px] border-1 border-solid border-blue-500 rounded-[12px] bg-[#589CFF] shadow-[0 0 10px rgba(0, 0, 0, 0.1)]">
                    <img src="/hand.png" alt="picture" />
                    <p className="font-poppins text-[16px] font-semibold text-white">
                      Subscribe
                    </p>
                  </button>
                )}
                {user?.id != userId && (
                  <button
                    onClick={() => {
                      userStatus?.status === "accepted"
                        ? router.push(`/inbox`)
                        : sendMessageRequestFun();
                    }}
                    className=" py-[8px] px-[16px] w-[215px] flex justify-center  border-1 border-solid border-blue-500 rounded-[12px] bg-[#589CFF] shadow-[0 0 10px rgba(0, 0, 0, 0.1)]"
                  >
                    {loader ? (
                      <div className="animate-spin rounded-full h-[20px] w-[20px] border-t-2 border-b-2 border-white"></div>
                    ) : (
                      <div className="flex items-center gap-[8px]">
                        <img src="/message1.png" alt="picture" />
                        <p className="font-poppins text-[16px] font-semibold text-white">
                          {message || "Message Request"}
                        </p>
                      </div>
                    )}
                  </button>
                )}

                {user?.id === userId && (
                  <button
                    onClick={() => {
                      logout();
                    }}
                    className=" py-[18px] px-[20px] flex justify-center  border-1 border-solid border-blue-500 rounded-[12px] bg-[#589CFF] shadow-[0 0 10px rgba(0, 0, 0, 0.1)]"
                  >
                    <p className="font-poppins text-[16px] font-semibold text-white">
                      Logout
                    </p>
                  </button>
                )}
                {user?.id === userId && (
                  <button
                    onClick={() => {
                      router.push("/editprofile");
                    }}
                    className=" py-[8px] px-[16px] flex justify-center  border-1 border-solid border-blue-500 rounded-[12px] bg-[#589CFF] shadow-[0 0 10px rgba(0, 0, 0, 0.1)]"
                  >
                    {loader ? (
                      <div className="animate-spin rounded-full h-[20px] w-[20px] border-t-2 border-b-2 border-white"></div>
                    ) : (
                      <div className="flex items-center gap-[8px]">
                        <img src="/edit.png" alt="picture" />
                        <p className="font-poppins text-[16px] font-semibold text-white">
                          Edit Profile
                        </p>
                      </div>
                    )}
                  </button>
                )}
              </div>
            </div>
            <div className="flex  justify-between flex-wrap items-center ">
              <p className=" text-gray-600">
                Thanks for checking this bio, I am Batman The one dark knight 🦇
              </p>
              <div className="flex items-start gap-[12px] mt-[12px]">
                <div className="flex items-center gap-[9px]">
                  <img src="/blueheart.png" alt="picture" />
                  <p className="text-16 font-semibold text-gray-800">
                    {userData?.liked_posts || 0}
                  </p>
                </div>
                <div className="flex items-center gap-[9px]">
                  <img src="/bluebadge.png" alt="picture" />
                  <p className="text-16 font-semibold text-gray-800">
                    {userData?.shared_posts || 0}
                  </p>
                </div>
                <button className="flex items-center justify-center py-[4px] px-[8px] gap-[4px] border-1 border-solid border-blue-500 rounded-[4px] bg-[#589CFF] shadow-[0 0 10px rgba(0, 0, 0, 0.1)]">
                  <p className="text-center font-poppins text-[14px] font-semibold text-white">
                    View all badges
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-[60px] items-start self-stretch gap-[40px] flex-1 flex-wrap">
        <Post />
      </div>
    </div>
  );
}
