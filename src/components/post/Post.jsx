"use client";

import React from "react";
import { Poppins } from "next/font/google";
import axios from "axios";
import { baseUrl } from "@/config/baseUrl";
import { ApiUrls } from "@/apis/ApiUrls";
import { useEffect } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "./homePagePostSlice";
import Link from "next/link";

const Post = () => {
  // const [posts, setPosts] = React.useState([]);
  const user = useSelector((state) => state.userSlice.user);
  const homePagePosts = useSelector((state) => state.homePagePostSlice.posts);
  const dispatch = useDispatch();

  console.log(user, "login user");

  const getUserPosts = async () => {
    let token = localStorage.getItem("token");
    const header = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(
      baseUrl + ApiUrls.posts.getAllPosts,
      header
    );

    console.log(response);
    dispatch(setPosts(response.data.posts));
    // setPosts(response.data.posts);
  };

  const likePost = async (postId) => {
    let token = localStorage.getItem("token");
    const header = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(
      baseUrl + ApiUrls.posts.likePost,
      { postId, like: true },
      header
    );

    console.log(response);

    getUserPosts();
  };

  const unlikePost = async (postId) => {
    let token = localStorage.getItem("token");
    const header = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(
      baseUrl + ApiUrls.posts.likePost,
      { postId, like: false },
      header
    );

    console.log(response);

    getUserPosts();
  };

  useEffect(() => {
    getUserPosts();
  }, []);

  return (
    <div className="w-full">
      {homePagePosts.length > 0 ? (
        homePagePosts.map((post) => {
          return (
            <>
              {post.isPublic ? (
                <div className="flex flex-col items-start gap-[20px] mt-5 self-stretch p-[30px] bg-white border rounded-[12px] shadow-md">
                  <div className="flex self-stretch h-[64px] w-full justify-between items-center">
                    <div className="flex items-center gap-[12px]">
                      <Link href={`/profile?userId=${post?.userId}`}>
                        <img
                          src={
                            post?.avatar
                              ? `/ProfilePictures/${post?.avatar}`
                              : "/newgirl.png"
                          }
                          className="h-[64px] w-[64px] rounded"
                          alt="picture"
                        />
                      </Link>
                      <div className="flex flex-col justify-center items-start">
                        <div className="flex items-center gap-[8px]">
                          <Link href={`/profile?userId=${post?.userId}`}>
                            <p className="font-poppins text-[24px] font-semibold text-black">
                              {post?.username}
                            </p>
                          </Link>
                          <div className="flex items-center gap-[4px]">
                            <img src="/badge.png" alt="picture" />
                            <p className="font-poppins text-[16px] font-semibold text-[#4989E6]">
                              {post?.userBadges}
                            </p>
                          </div>
                        </div>
                        <p className="font-poppins text-[14px] font-light text-black">
                          {moment.utc(post?.created_at).local().fromNow()}
                        </p>
                      </div>
                    </div>
                    <button className="flex items-center gap-[8px] py-[8px] px-[16px] border-[1px] border-[#4989E6] rounded-[12px] bg-[#589CFF] shadow-md">
                      <img src="/hand.png" alt="picture" />
                      <p className="font-poppins text-[16px] font-semibold text-white">
                        Subscribe
                      </p>
                    </button>
                  </div>
                  <div className="flex flex-col justify-center self-stretch flex-1">
                    <p className="text-black font-poppins text-[14px] font-light">
                      {post?.description} {post?.tags}
                    </p>
                  </div>
                  <div className="w-full flex justify-center items-center">
                    <img
                      src={post?.media_url}
                      alt="picture"
                      className="h-[470px]"
                    />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <div className="flex w-[168px] items-center gap-[8px]">
                      <img
                        src={
                          post?.liked_by?.includes(user?.email)
                            ? "/sideheart.png"
                            : "/heart.png"
                        }
                        alt="picture"
                        onClick={() => {
                          post?.liked_by?.includes(user?.email)
                            ? unlikePost(post?._id)
                            : likePost(post?._id);
                        }}
                      />
                      <p className="text-[#4F4F4F] font-poppins text-[12px] font-semibold">
                        {post?.likes}
                      </p>
                      <img src="/chat.png" alt="picture" />
                      <img src="/bookmark.png" alt="picture" />
                    </div>
                    <img src="/option.png" alt="picture" />
                  </div>
                  <div className="flex justify-center items-center gap-[20px] w-full">
                    <img src="/bottomgirl.png" alt="picture" />
                    <div className="flex items-center py-[8px] px-[12px] flex-1 gap-[8px] border-[1px] border-[#C0C1C3] rounded-[12px] bg-[#E3E3E3]">
                      <img src="/chats.png" alt="picture" />
                      <input
                        className="font-poppins text-[16px] font-semibold text-[#A8A8A8] bg-[#E3E3E3]"
                        type="text"
                        placeholder="Add Comment"
                      />
                    </div>
                  </div>
                </div>
              ) : null}
            </>
          );
        })
      ) : (
        <div className="w-full flex justify-center items-center">
          <div className="flex flex-col w-full items-center justify-center p-[30px] bg-white border rounded-[12px] shadow-md">
            <p className="font-poppins text-[24px] font-semibold text-black">
              No Posts Available
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
