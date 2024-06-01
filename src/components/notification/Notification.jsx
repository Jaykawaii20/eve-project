import React, { useEffect } from "react";
import { Poppins } from "next/font/google";
import { useDispatch, useSelector } from "react-redux";
import { getNotification } from "@/store/NotificationSlice";
import moment from "moment";
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});
const NotificationItem = ({
  title,
  description,
  time,
  btnText,
  btnColor,
  imgSrc,
  btn2Color,
  btn2Text,
}) => {
  return (
    <div className="w-[386px] py-[16px] px-[12px] flex flex-col justify-between items-start gap-[12px] bg-white rounded-[12px] shadow-md">
      <div className="flex items-center w-full gap-[12px]">
        <img src={imgSrc} alt="picture" />
        <div className="flex flex-col items-start flex-1">
          <div className="flex">
            <p className="text-black font-poppins text-2xl font-medium">
              {title}
            </p>
          </div>
          <p className="text-[#A8A8A8] font-poppins text-base font-medium text-center">
            {description}
          </p>
        </div>
        <p className="font-poppins text-xs font-normal text-[#A8A8A8] text-right">
          {time}
        </p>
      </div>

      <div className="flex gap-[24px] self-stretch">
        <div
          className={`flex py-[4px] px-[8px] justify-center items-center gap-[4px] border-[1px] border-${btnColor}-500 rounded-[4px] bg-blue-600 shadow-md`}
        >
          <p className="text-white font-poppins text-base font-medium text-center">
            {btnText}
          </p>
          <img src={`/tick.png`} alt="picture" />
        </div>
        {btn2Text ? (
          <div
            className={`flex py-[4px] px-[8px] justify-center items-center gap-[4px] border-[1px] border-${btn2Color}-500 rounded-[4px] bg-red-600 shadow-md`}
          >
            <p className="text-white font-poppins text-base font-medium text-center">
              {btn2Text}
            </p>
            <img src={`/tick.png`} alt="picture" />
          </div>
        ) : null}
        <div className="flex self-stretch w-[29px] border-[1px] border-gray-300 rounded-[4px] bg-gray-300 shadow-md">
          <img src="/wrong2.png" alt="picture" />
        </div>
      </div>
    </div>
  );
};

const Notification = () => {
  const dispatch = useDispatch();
  const notifications = useSelector(
    (state) => state.notification.notifications
  );
  // const notifications = [
  //   {
  //     title: "Elena Gilbert",
  //     description: "wants to chat with you",
  //     time: "10min ago",
  //     btnText: "Accept",
  //     btnColor: "blue",
  //     btn2Text: "Decline",
  //     btn2Color: "red",
  //     imgSrc: "/samegirl.png",
  //   },
  //   {
  //     title: "Elena Gilbert",
  //     description: "has sent you a message",
  //     time: "4:53 PM",
  //     btnText: "View message",
  //     btnColor: "blue",
  //     imgSrc: "/samegirl.png",
  //   },
  //   // Add more notifications as needed
  // ];
  useEffect(() => {
    dispatch(getNotification());
  }, []);

  return (
    <div className="flex flex-col items-start gap-[12px]">
      <p className="font-poppins text-2xl font-medium text-gray-800">
        Recent Notifications
      </p>

      {notifications.length > 0 ? (
        notifications.map((notification, index) => (
          <NotificationItem
            imgSrc="/samegirl.png"
            title={notification?.requested_user_username}
            description={notification?.notification_message}
            time={moment(notification?.created_at).fromNow()}
            btnText="Accept"
            btnColor="blue"
            btn2Text="Decline"
            btn2Color="red"
            key={index}
            {...notification}
          />
        ))
      ) : (
        <div className="w-full">
          <p className="text-center text-blue-500 ">No new Notifications</p>
        </div>
      )}
    </div>
  );
};

export default Notification;
