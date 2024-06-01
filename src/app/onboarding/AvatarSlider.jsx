import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { setYourAvatar } from "./onboardingSlice";
import { useDispatch, useSelector } from "react-redux";
import useOnboarding from "./useOnboarding";


export default ({
  uploadOnBoarding
}) => {
  const slider = React.useRef(null);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.onboardingSlice.user);

  const settings = {
    prevArrow: null,
    nextArrow: null,
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    draggable: true,
    swipeToSlide: true,
    verticalSwiping: true,

    vertical: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  const imagePaths = [...Array(10).keys()]
    .map((i) => `/M${i + 1}.png`)
    .concat([...Array(20).keys()].map((i) => `/W${i + 1}.png`));
  console.log(imagePaths);
  const handleAvatarClick = (avatar) => {
    console.log(avatar, "=======");
    setSelectedAvatar(avatar);
    dispatch(setYourAvatar({avatar:avatar}));

  };


  const uploadOnBoardingData = async () => {
    uploadOnBoarding();
  };
  return (
    <div className=" h-[100%] overflow-hidden flex justify-center items-center relative">
      {/* <div className=" absolute top-6 flex gap-5">
        <button
          className="text-right"
          onClick={() => slider?.current?.slickPrev()}
        >
          {" "}
          <img src={"/apple.png"} alt="slider wali img" />
        </button>
        <button onClick={() => slider?.current?.slickNext()}>
          <img src={"/apple.png"} alt="slider wali img" />
        </button>
      </div> */}

      <div className="w-[100%] h-[272px] bg-white rounded-[24px] ">
        <div className="ml-[40%] h-[272px] gap-[32px] flex flex-col justify-center items-center">
          <p className="text-black text-[24px]font-[500] text-center">
            Scroll to <br />
            Select your <span className="text-[#589CFF]">Avatar</span>
          </p>
          <div className="flex w-[200px] max-sm:w-[250px] cursor-pointer justify-center items-center gap-[8px] bg-[#589CFF]  py-[8px] px-[16px] rounded-[12px] z-20"
          onClick={async() => {
            console.log(user)
            uploadOnBoardingData();

            
          }}

          >
            <img src="/images/svgs/forward-circle.svg" alt="img" />

            <p className="text-[16px] font-[500] text-white ">Continue</p>
          </div>
        </div>
      </div>
      <div className="absolute ">
        <div className="w-[35%]  h-[100%] pt-[100px] ml-[5%] overflow-hidden flex justify-center items-center">
          <Slider ref={slider} {...settings}>
            {imagePaths.map((avatar, index) => (
              <div key={index} onClick={() => handleAvatarClick(avatar)}>
                <img
                  src={`/ProfilePictures${avatar}`}
                  alt={`Avatar ${index + 1}`}
                  style={{
                    width: "200px",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "50%",
                    border:
                      selectedAvatar === avatar ? "5px solid #589CFF" : "",
                  }}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
