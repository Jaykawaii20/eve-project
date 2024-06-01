import {
  decreaseToken,
  sendMessage,
  uploadImageToChat,
} from "@/store/ConversationSlice";
import moment from "moment";
import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { unBlockContact } from "@/store/ConversationSlice";
import Picker from "emoji-picker-react";
import {
  ArrowDownCircleIcon,
  ArrowDownIcon,
} from "@heroicons/react/24/outline";
const CurrentChat = ({ closeModal, setCloseModal, currentChat }) => {
  console.log("this is the current chat", currentChat);
  const dispatch = useDispatch();
  const messages = useSelector(
    (state) => state.conversation?.messages?.[currentChat?._id] || []
  );

  const user = useSelector((state) => state.userSlice.user);
  const [image, setImage] = useState("");

  const [showPicker, setShowPicker] = useState(false);
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const togglePicker = () => {
    // setShowPicker(!showPicker);
    setShowPicker(true);
  };

  const handleEmojiClick = (emojiObject) => {
    setChosenEmoji(emojiObject);
    setNewMessage(newMessage + emojiObject.emoji);
    console.log(emojiObject, "selected emoji");
    // You can handle the selected emoji as needed
    // For example, you may want to insert it into a text input or send it as a message
  };

  const [newMessage, setNewMessage] = useState("");
  const chatContainerRef = useRef(null);

  const unBlockContactFun = async () => {
    // setLoader(true);
    let res = await dispatch(unBlockContact(currentChat._id));
    console.log(res, "user  blocked sucess");
    // setLoader(false);
  };

  const handleSendMessage = async () => {
    console.log(image, "images");
    if (image != "" && currentChat?._id) {
      let res = await dispatch(uploadImageToChat(image));
      console.log(res.payload, "image uploaded in component");
      const newMessageObj = {
        isImage: true,
        message: res.payload,
        receiver_email:
          user?.email === currentChat?.audience_email
            ? currentChat?.creator_email
            : currentChat?.audience_email,
        receiver_name:
          user?.email === currentChat?.audience_email
            ? currentChat?.creator_name
            : currentChat?.audience_name,
        chat_history_id: currentChat?._id,
      };
      dispatch(sendMessage(newMessageObj));
      dispatch(
        decreaseToken({ chatID: currentChat?._id, message: newMessage })
      );
      setImage("");
      setNewMessage("");
      setShowPicker(false);
      return;
    }

    if (newMessage.trim() === "") return;
    if (currentChat?._id) {
      const newMessageObj = {
        isImage: false,
        message: newMessage,
        receiver_email:
          user?.email === currentChat?.audience_email
            ? currentChat?.creator_email
            : currentChat?.audience_email,
        receiver_name:
          user?.email === currentChat?.audience_email
            ? currentChat?.creator_name
            : currentChat?.audience_name,
        chat_history_id: currentChat?._id,
      };
      dispatch(sendMessage(newMessageObj));
      dispatch(
        decreaseToken({ chatID: currentChat?._id, message: newMessage })
      );
    }

    setNewMessage("");
    setShowPicker(false);
    setImage("");
  };

  useEffect(() => {
    // Scroll to the bottom of the chat container
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);
  console.log(messages, user);
  return (
    <div
      className={`flex flex-col relative  h-full justify-between     w-[${
        closeModal ? "full" : "auto"
      }]`}
    >
      {currentChat ? (
        <div
          className={`flex flex-col relative h-full justify-between     w-[${
            closeModal ? "full" : "auto"
          }]`}
        >
          <div
            onClick={() => setCloseModal(false)}
            className="flex p-[20px] items-center  gap-[10px] bg-white rounded-[12px] w-full h-auto"
          >
            <div className="flex items-start gap-[10px] h-auto w-auto">
              <img
                height={80}
                width={80}
                className="rounded-[12px]"
                src={`/ProfilePictures${currentChat?.audience_avatar}`}
                alt="picture"
              />
              <div className="flex flex-col justify-center items-start gap-[2px] h-[77px] w-auto rounded-[12px]">
                <p className="text-black font-poppins font-semibold text-[20px] text-center">
                  {currentChat?.audience_name}
                </p>
                <p className="text-gray-700 text-center font-poppins font-semibold text-[14px]">
                  online
                </p>
                <p className="text-black text-right font-poppins font-light text-[12px]">
                  Last seen {moment(currentChat?.created_at)?.fromNow()}
                </p>
              </div>
            </div>
          </div>
          <div
            ref={chatContainerRef}
            className=" flex h-full flex-col items-end overflow-scroll  gap-[24px] w-full "
            style={{
              overflowX: "hidden",
            }}
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex flex-col w-full items-${
                  message?.receiver_email !== user?.email ? "end" : "start"
                } `}
              >
                <div
                  className={`flex  justify-center flex-col items-${
                    message?.receiver_email !== user?.email ? "end" : "start"
                  } gap-[2px]  h-auto w-auto `}
                >
                  <div
                    className={`${
                      message?.receiver_email !== user?.email
                        ? "text-white"
                        : "text-black"
                    } font-poppins text-[16px] font-normal`}
                  >
                    {message?.isImage ? (
                      <img
                        className="h-[200px] w-[200px] rounded-[8px]"
                        src={message?.message}
                        alt="Chat Image"
                      />
                    ) : (
                      <p
                        className={`${
                          message?.receiver_email !== user?.email
                            ? "bg-blue-500"
                            : "bg-[#E3E3E3]"
                        } p-[10px] rounded-[12px]`}
                      >
                        {message?.message}
                      </p>
                    )}
                  </div>
                </div>
                <div
                  className={`flex flex-col  px-[8px] items-${
                    message?.receiver_email !== user?.email ? "end" : "start"
                  } gap-[10px] w-full h-auto`}
                >
                  <p className="flex-1 text-gray-700 font-poppins font-normal text-[12px] text-right">
                    {moment(message.date).format("LT")}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {user.isCreator ? (
            <div>
              {currentChat?.isBlocked ? (
                <div className="text-[16px] text-[#4989E6] flex justify-center items-center gap-[5px]">
                  <p>You have blocked this contact.</p>
                  <div className=" top-[5px] left-[140px] bg-[#589CFF] px-[12px] py-[8px] rounded-lg text-white flex flex-col items-start gap-[12px]">
                    <button
                      onClick={() => {
                        unBlockContactFun();
                      }}
                      className="whitespace-nowrap"
                    >
                      Unblock
                    </button>
                  </div>
                  <p>to continue chatting.</p>
                </div>
              ) : (
                <div
                  className={`flex  justify-between items-end gap-[10px] w-full ${
                    showPicker ? "h-[300px]" : "h-[50px]"
                  }`}
                >
                  <div className="flex w-full justify-between h-auto py-[11px] px-[14px] bg-white items-center rounded-[8px]">
                    <input
                      type="text"
                      className="outline-none w-full border-none font-poppins font-semibold text-[16px] text-gray-600"
                      placeholder="Type message here "
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                    />

                    <div className=" inline-flex h-auto w-auto gap-[8px] items-center justify-center ">
                      <button onClick={togglePicker}>
                        {!showPicker && <img src="/emoji.png" alt="picture" />}
                        {showPicker && (
                          <div className="absolute bottom-[50px] right-0">
                            <Picker
                              height={250}
                              width={400}
                              searchPlaceholder={null}
                              searchDisabled={true}
                              onEmojiClick={handleEmojiClick}
                            />
                          </div>
                        )}
                      </button>
                      {showPicker && (
                        <img
                          className="h-[25px] w-[25px]"
                          onClick={() => setShowPicker(false)}
                          src="listing.png"
                          alt=""
                        />
                      )}
                      <button>
                        <label className="flex cursor-pointer items-center justify-center  ">
                          <img src="/attach.png" alt="picture" />

                          <input
                            type="file"
                            className="hidden"
                            accept="image/*,video/*"
                            onChange={(e) => {
                              setImage(e.target.files[0]),
                                setNewMessage("Image selected");
                            }}
                          />
                        </label>
                      </button>
                      <button>
                        <img src="/mic.png" alt="picture" />
                      </button>
                    </div>
                  </div>
                  <div
                    className=" flex flex-shrink-0 p-[9px] bg-blue-500 rounded-[8px] cursor-pointer"
                    onClick={handleSendMessage}
                  >
                    <img
                      className="h-[32px] w-[32px] "
                      src="/send.png"
                      alt="picture"
                    />
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div>
              {currentChat?.token === 0 ? (
                <div className="text-[16px] text-[#CF0505] flex justify-center items-center gap-[5px]">
                  <p>Your credits are depleted.</p>
                  <div className=" top-[5px] left-[140px] bg-[#FF3232] px-[12px] py-[8px] rounded-lg text-white flex flex-col items-start gap-[12px]">
                    <button onClick={() => {}} className="whitespace-nowrap">
                      Refill 0/100
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex  justify-between items-start gap-[10px] w-full h-[50px]">
                  <div className="flex w-full justify-between h-auto py-[11px] px-[14px] bg-white items-center rounded-[8px]">
                    <input
                      type="text"
                      className="outline-none w-full border-none font-poppins font-semibold text-[16px] text-gray-600"
                      placeholder="Type message here"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                    />

                    <div className="inline-flex h-auto w-auto gap-[8px] items-center justify-center">
                      <button onClick={togglePicker}>
                        {!showPicker && <img src="/emoji.png" alt="picture" />}
                        {showPicker && (
                          <div className="absolute bottom-[50px] right-0">
                            <Picker
                              height={250}
                              width={400}
                              searchPlaceholder={null}
                              searchDisabled={true}
                              onEmojiClick={handleEmojiClick}
                            />
                          </div>
                        )}
                      </button>
                      {showPicker && (
                        <img
                          className="h-[25px] w-[25px]"
                          onClick={() => setShowPicker(false)}
                          src="listing.png"
                          alt=""
                        />
                      )}

                      <button>
                        <label className="flex cursor-pointer items-center justify-center  ">
                          <img src="/attach.png" alt="picture" />

                          <input
                            type="file"
                            className="hidden"
                            accept="image/*,video/*"
                            onChange={(e) => {
                              setImage(e.target.files[0]),
                                setNewMessage("Image selected");
                            }}
                          />
                        </label>
                      </button>

                      <button>
                        <img src="/mic.png" alt="picture" />
                      </button>
                    </div>
                  </div>
                  <div
                    className=" flex flex-shrink-0 p-[9px] bg-blue-500 rounded-[8px] cursor-pointer"
                    onClick={handleSendMessage}
                  >
                    <img
                      className="h-[32px] w-[32px] "
                      src="/send.png"
                      alt="picture"
                    />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        <div className="flex justify-center items-center text-blue-500 text-[28px] h-full">
          <p>Welcome to Eve</p>
        </div>
      )}
    </div>
  );
};

export default CurrentChat;
