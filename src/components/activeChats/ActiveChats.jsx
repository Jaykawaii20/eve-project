"use client";
import React, { useState } from "react";
import { Poppins } from "next/font/google";
import {
  XMarkIcon,
  CheckIcon,
  BackspaceIcon,
  ArrowLeftCircleIcon,
} from "@heroicons/react/24/outline";
import { useSelector, useDispatch } from "react-redux";
import {
  acceptMessageRequest,
  blockContact,
  unBlockContact,
} from "@/store/ConversationSlice";
import moment from "moment";
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const ActiveChats = ({ setCurrentChat, conversations }) => {
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);
  const user = useSelector((state) => state.userSlice.user);
  const [tab, setTab] = useState("chat");
  const [blockOpen, setBlockOpen] = useState(null);
  const [activeChatIndex, setActiveChatIndex] = useState(1);

  function setBlockOpenFun(index) {
    if (index === blockOpen) {
      setBlockOpen(null);
    } else {
      setBlockOpen(index);
    }
  }

  const acceptMessageRequestFun = async (requestID, status) => {
    // setLoader(true);
    let res = await dispatch(acceptMessageRequest({ requestID, status }));
    console.log(res, "user message request accpeted");
    // setLoader(false);
  };

  const blockContactFun = async (chatID) => {
    // setLoader(true);
    let res = await dispatch(blockContact(chatID));
    setBlockOpenFun(false);
    console.log(res, "user  blocked sucess");
    // setLoader(false);
  };
  const unBlockContactFun = async (chatID) => {
    // setLoader(true);
    let res = await dispatch(unBlockContact(chatID));
    setBlockOpenFun(false);
    console.log(res, "user  blocked sucess");
    // setLoader(false);
  };

  return (
    <div className="flex flex-col p-[24px] h-[78vh] overflow-hidden   w-auto items-end  gap-[12px] bg-white bg-opacity-50 rounded-[12px]">
      {user.isCreator ? (
        <div className="w-full">
          {tab === "chat" || tab === "request" ? (
            <div className="flex relative w-full  justify-center items-center  gap-[10px]">
              <div className="flex items-start p-[12px] gap-[12px]">
                <button
                  onClick={() => setTab("chat")}
                  className={`flex justify-center items-center  w-[134px] h-[61px] border-[1px] border-[#589CFF] rounded-[20px] bg-[${
                    tab === "chat" ? "#589CFF" : "white"
                  }] shadow-[rgba-0-0-0-0.10]`}
                >
                  <p
                    className={`font-[${poppins}] text-[24px] font-semibold text-center text-[${
                      tab === "chat" ? "white" : "#589CFF"
                    }]`}
                  >
                    Chat
                  </p>
                </button>
                <button
                  onClick={() => setTab("request")}
                  className={`flex justify-center items-center  w-[134px] h-[61px] border-[1px] border-[#589CFF] rounded-[20px] bg-[${
                    tab === "request" ? "#589CFF" : "white"
                  }] shadow-rgba-0-0-0-0.10`}
                >
                  <p
                    className={`font-[${poppins}] text-[24px] font-semibold text-center text-[${
                      tab === "request" ? "white" : "#589CFF"
                    }]`}
                  >
                    Requests
                  </p>
                </button>
              </div>
              <div>
                <button
                  className=""
                  onClick={() => {
                    setMenuOpen(!menuOpen);
                  }}
                >
                  <img src="/option.png" alt="picture" />
                </button>
                {menuOpen && (
                  <div className="absolute right-[50px] bg-white p-[12px] rounded-lg text-black flex flex-col items-start gap-[12px]">
                    <button
                      onClick={() => {
                        setTab("BlockedContacts"), setMenuOpen(false);
                      }}
                      className="whitespace-nowrap"
                    >
                      Blocked Contacts
                    </button>
                    <button
                      onClick={() => {
                        setMenuOpen(false), setTab("DeclinedContacts");
                      }}
                      className="whitespace-nowrap"
                    >
                      Declined Contact
                    </button>
                    <button className="whitespace-nowrap text-red-600">
                      Delete all message
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex  justify-between text-[24px] font-[600] items-center w-full">
              <button
                onClick={() => setTab("chat")}
                className={`flex justify-center gap-[8px] items-center  w-[134px] h-[61px] border-[1px] border-[#589CFF] rounded-[20px] bg-[#589CFF] shadow-[rgba-0-0-0-0.10]`}
              >
                <ArrowLeftCircleIcon className="h-[32px] w-[32px] text-white" />
                <p
                  className={`font-[${poppins}] text-[24px] font-semibold text-center  text-white]`}
                >
                  Back
                </p>
              </button>
              <p className="text-black">{tab}</p>
            </div>
          )}{" "}
        </div>
      ) : null}
      <div className="flex py-[0px] px-[24px] items-center gap-[8px]">
        <p className="font-[${poppins}] text-[20px] font-semibold text-[#2F2F2F]">
          Sort By
        </p>
        <button className="flex  px-[12px] h-[48px] items-center gap-[2px] border-1 border-[#A8A8A8]  rounded-[12px] bg-[#FFFFFF]">
          <p className="text-[#000000] font-[${poppins}] text-[16px] font-semibold">
            Recent first
          </p>
          <img src="/list.png" alt="picture" />
        </button>
      </div>
      <div
        className={`flex w-full px-[22px] ${
          user?.isCreator ? "h-[50vh]" : "h-[60vh]"
        }  overflow-scroll bg-[#FFFFFF] rounded-[12px] items-start  justify-center`}
      >
        <div className="h-[100%] w-[420px]  mt-[22px] flex-col items-start gap-[15px] overflow-x-hidden bg-[#FFFFFF]">
          {/* use map here */}
          {tab === "chat" ? (
            <div className="h-full">
              {conversations?.length > 0 &&
                conversations.map((item, index) => {
                  return (
                    <div>
                      {!item.isBlocked ? (
                        <div
                          onClick={() => {
                            setActiveChatIndex(index), setCurrentChat(item);
                          }}
                          className={`flex gap-[8px] relative cursor-pointer flex-col mb-3 justify-between items-start w-full p-[12px] rounded-[12px] border-[2px] border-[${
                            activeChatIndex === index ? "#589CFF" : "#E3E3E3"
                          }]`}
                        >
                          <div className="flex   justify-between  w-full items-start gap-[10px]">
                            <div className="flex justify-between gap-[10px]">
                              <img
                                src={
                                  item?.isCreator
                                    ? `/ProfilePictures${item?.audience_avatar}`
                                    : `/ProfilePictures${item?.creator_avatar}`
                                }
                                height={70}
                                width={70}
                                alt="picture"
                              />
                              <div className="flex flex-col items-start gap-[-2px] rounded-[12px]">
                                <div className="flex items-center gap-[8px]">
                                  <p className="text-[#2F2F2F] text-center font-[${poppins}] text-[20px] font-semibold">
                                    {item?.isCreator
                                      ? item.audience_name
                                      : item.creator_name}
                                  </p>
                                  <div className="relative">
                                    <img
                                      onClick={() => setBlockOpenFun(index)}
                                      src="/option.png"
                                      alt="picture"
                                    />
                                    {blockOpen === index && (
                                      <div className="absolute top-[25px] left-[20px] bg-[#589CFF] px-[12px] py-[8px] rounded-lg text-white flex flex-col items-start gap-[12px]">
                                        <button
                                          onClick={() => {
                                            blockContactFun(item?._id);
                                          }}
                                          className="whitespace-nowrap"
                                        >
                                          Block
                                        </button>
                                      </div>
                                    )}
                                  </div>
                                </div>
                                <div>
                                  <p className="text-[#4F4F4F] text-center font-[${poppins}] font-semibold text-[14px]">
                                    {item.roll}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col justify-center flex-shrink-0">
                              <p className="text-[#000000] text-right font-[${poppins}] font-light text-[12px]">
                                {moment(item?.created_at)?.fromNow()}
                              </p>
                            </div>
                          </div>
                          <div className="flex-1 0 0">
                            <p className="font-[${poppins}] font-light text-[12px] text-[#000000] overflow-hidden ellipsis">
                              {item.last_message}
                            </p>
                          </div>

                          {user.isCreator ? null : (
                            <div className="flex-1 ">
                              <p
                                className={`font-[${poppins}] bg-[#FF3232] rounded-[8px] ${
                                  item.token < 10 ? "py-[2px]" : "py-0"
                                } ${
                                  item.token < 10 ? "px-[8px]" : "px-0"
                                } text-white font-light text-[12px] overflow-hidden ellipsis`}
                              >
                                {item.token == 0
                                  ? "Credits are depleted"
                                  : item.token < 10
                                  ? "Low credits"
                                  : null}
                              </p>
                            </div>
                          )}
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              {!conversations?.length > 0 && (
                <div className="text-black text-center h-full flex items-center justify-center">
                  No Chat Record!
                </div>
              )}
            </div>
          ) : tab === "request" ? (
            <div className="w-full h-full">
              {user.message_request_sent_by &&
                user.message_request_sent_by.map((item, i) => {
                  if (item.status === "pending") {
                    return (
                      <div className="flex flex-col mb-3 justify-between items-start w-full p-[12px] rounded-[12px] border-[1px] border-[#E3E3E3]">
                        <div className="flex justify-between  w-full items-start gap-[20px]">
                          <div className="flex justify-between gap-[10px] w-full">
                            <img
                              className=""
                              height={50}
                              width={50}
                              src={`/ProfilePictures${item.avatar}`}
                              alt="picture"
                            />
                            <div className="flex w-full flex-col items-start gap-[-2px] rounded-[12px]">
                              <div className="flex items-center gap-[8px]">
                                <p className="text-[#2F2F2F] text-center font-[${poppins}] text-[20px] font-semibold">
                                  {item.username}
                                </p>
                                <div>
                                  <img src="/option.png" alt="picture" />
                                </div>
                              </div>
                              <div>
                                <p className="text-[#4F4F4F] text-center font-[${poppins}] font-semibold text-[14px]">
                                  {item.status}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col justify-center mt-2">
                            <p className="text-[#000000] text-right font-[${poppins}] font-light whitespace-nowrap text-[12px]">
                              {"2 days ago"}
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-between w-full gap-[10px] items-center">
                          <p className="font-[${poppins}] font-light text-[12px] text-[#000000] overflow-hidden ellipsis">
                            hello user i want to connect
                          </p>
                          <div className="flex gap-[15px]">
                            <button
                              onClick={() => {
                                acceptMessageRequestFun(
                                  item.sender_id,
                                  "accepted"
                                );
                              }}
                              className="p-[6px] rounded-sm bg-[#589CFF] "
                            >
                              <CheckIcon className="h-[20px] w-[20px] text-white" />
                            </button>
                            <button
                              onClick={() => {
                                acceptMessageRequestFun(
                                  item.sender_id,
                                  "rejected",
                                  user.id
                                );
                              }}
                              className="p-[6px] rounded-sm bg-[#FF3232] "
                            >
                              <XMarkIcon className="h-[20px] w-[20px] text-white" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
              {user?.message_request_sent_by?.length > 0 &&
                !user?.message_request_sent_by.some(
                  (item) => item.status === "pending"
                ) && (
                  <div className="text-black text-center h-full flex items-center justify-center">
                    No new Request!
                  </div>
                )}
            </div>
          ) : null}
          {/* /////// declined content/////// */}
          {/* <div className="h-full"> */}
          {tab === "DeclinedContacts" && (
            <div className="w-full h-full">
              {user.message_request_sent_by &&
                user.message_request_sent_by.map((item, i) => {
                  if (item.status === "rejected") {
                    return (
                      <div className="flex flex-col mb-3 justify-start items-start w-full p-[12px] rounded-[12px] border-[1px] border-[#E3E3E3]">
                        <div className="flex justify-between  w-full items-start gap-[20px]">
                          <div className="flex justify-between gap-[10px] w-full">
                            <img
                              className=""
                              height={50}
                              width={50}
                              src={`/ProfilePictures${item.avatar}`}
                              alt="picture"
                            />
                            <div className="flex w-full flex-col items-start gap-[-2px] rounded-[12px]">
                              <div className="flex items-center gap-[8px]">
                                <p className="text-[#2F2F2F] text-center font-[${poppins}] text-[20px] font-semibold">
                                  {item.username}
                                </p>
                                <div>
                                  <img src="/option.png" alt="picture" />
                                </div>
                              </div>
                              <div>
                                <p className="text-[#4F4F4F] text-center font-[${poppins}] font-semibold text-[14px]">
                                  {item.status}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col justify-center mt-2">
                            <p className="text-[#000000] text-right font-[${poppins}] font-light whitespace-nowrap text-[12px]">
                              {"2 days ago"}
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-between w-full gap-[10px] items-center">
                          <p className="font-[${poppins}] font-light text-[12px] text-[#000000] overflow-hidden ellipsis">
                            hello user i want to connect
                          </p>
                        </div>
                      </div>
                    );
                  }
                })}
              {user?.message_request_sent_by?.length > 0 &&
                !user?.message_request_sent_by.some(
                  (item) => item.status === "rejected"
                ) && (
                  <div className="text-black text-center h-full flex items-center justify-center">
                    No new Declined Contact!
                  </div>
                )}
            </div>
          )}
          {/* </div> */}

          {/* /////// blocked content/////// */}
          {/* <div className="h-full bg-red-500"> */}
          {tab === "BlockedContacts" && (
            <div className="h-full">
              {conversations?.length > 0 &&
                conversations.map((item, index) => {
                  return (
                    <div>
                      {item.isBlocked ? (
                        <div
                          onClick={() => {
                            setActiveChatIndex(index), setCurrentChat(item);
                          }}
                          className={`flex relative cursor-pointer flex-col mb-3 justify-between items-start w-full p-[12px] rounded-[12px] border-[2px] border-[${
                            activeChatIndex === index ? "#589CFF" : "#E3E3E3"
                          }]`}
                        >
                          <div className="flex justify-between  w-full items-start gap-[10px]">
                            <div className="flex justify-between gap-[10px]">
                              <img
                                src={
                                  item?.isCreator
                                    ? `/ProfilePictures${item?.audience_avatar}`
                                    : `/ProfilePictures${item?.creator_avatar}`
                                }
                                height={50}
                                width={50}
                                alt="picture"
                              />
                              <div className="flex flex-col items-start gap-[-2px] rounded-[12px]">
                                <div className="flex items-center gap-[8px]">
                                  <p className="text-[#2F2F2F] text-center font-[${poppins}] text-[20px] font-semibold">
                                    {item?.isCreator
                                      ? item.audience_name
                                      : item.creator_name}
                                  </p>
                                  <div className="relative">
                                    <img
                                      onClick={() => setBlockOpenFun(index)}
                                      src="/option.png"
                                      alt="picture"
                                    />
                                    {blockOpen === index && (
                                      <div className="absolute top-[25px] left-[20px] bg-[#589CFF] px-[12px] py-[8px] rounded-lg text-white flex flex-col items-start gap-[12px]">
                                        <button
                                          onClick={() => {
                                            unBlockContactFun(item?._id);
                                          }}
                                          className="whitespace-nowrap"
                                        >
                                          UnBlock
                                        </button>
                                      </div>
                                    )}
                                  </div>
                                </div>
                                <div>
                                  <p className="text-[#4F4F4F] text-center font-[${poppins}] font-semibold text-[14px]">
                                    {item.roll}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col justify-center flex-shrink-0">
                              <p className="text-[#000000] text-right font-[${poppins}] font-light text-[12px]">
                                {moment(item?.created_at)?.fromNow()}
                              </p>
                            </div>
                          </div>
                          <div className="flex-1 0 0">
                            <p className="font-[${poppins}] font-light text-[12px] text-[#000000] overflow-hidden ellipsis">
                              {item.last_message}
                            </p>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              {conversations?.length > 0 &&
                !conversations?.some((item) => item.isBlocked) && (
                  <div className="text-black text-center h-full flex items-center justify-center">
                    No Blocked Contact!
                  </div>
                )}
            </div>
          )}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default ActiveChats;
