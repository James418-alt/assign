"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

const Slide = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  const items = [
    {
      id: 1,
      img: "/slide1.svg",
    },
    {
      id: 1,
      img: "/slide2.png",
    },
    {
      id: 1,
      img: "/slide3.svg",
    },
    {
      id: 1,
      img: "/slide4.svg",
    },
  ];
  return (
    <div>
      <Slider {...settings}>
        {items.map((el: any) => (
          <div key={el.id} className="flex gap-1 m-5">
            <Image src={el.img} alt="#" width={200} height={200} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slide;
