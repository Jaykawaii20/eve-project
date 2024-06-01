"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});
export default () => {

  const settings = {
    // prevArrow: null,
    // nextArrow: null,
    // dots: true,
    infinite: true,
    // speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 1500,
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
  const creatorsData = [
    { girlImage: "/girl1.png", overlayImage: "/1.png" },
    { girlImage: "/girl2.png", overlayImage: "/2.png" },
    { girlImage: "/girl3.png", overlayImage: "/3.png" },
    { girlImage: "/girl4.png", overlayImage: "/4.png" },
  ];
  return (
    <div id="blog" className="  w-[800px] max-md:w-[500px]">

      {/* <div className=" "> */}
        <Slider  {...settings}>
          {/* {creatorsData.map(({ girlImage, overlayImage }, index) => (
            <div key={index} className="relative w-[100px]  mx-3">
              <img src={girlImage}  alt={`Girl ${index + 1}`} />
              <div className="absolute   items-end left-[30px] bottom-[-25px]">
                <img src={overlayImage} alt={`Overlay ${index + 1}`} />
              </div>
            </div>
          ))} */}
              <img src={"/girl3.png"}  alt={`Girl ${1}`} />
              <img src={"/girl3.png"}  alt={`Girl ${1}`} />
              <img src={"/girl3.png"}  alt={`Girl ${1}`} />
              <img src={"/girl3.png"}  alt={`Girl ${1}`} />

        </Slider>
      {/* </div> */}
    </div>
  );
};
