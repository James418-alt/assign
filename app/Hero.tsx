import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  const imgs = [
    {
      id: 1,
      img: "/chigosoft.svg",
      style: { width: "150px", height: "200px" },
    },
    { id: 2, img: "/hh.svg" },
    { id: 3, img: "/landpay.svg" },
    { id: 4, img: "/wipg.svg" },
    { id: 5, img: "/wipafir.svg" },
    { id: 6, img: "/velox.svg" },
  ];
  return (
    <div>
      <div className="px-[150px] pt-[55px] mb-6">
        <h1 className="font-bold text-[60px] font-sans leading-[70px] pb-6">
          All your <br /> businesses, in one <br /> place.
        </h1>
        <p className="font-medium text-[14px] text-gray-500 mb-8">
          Run your businesses without limitations; support customers, increase{" "}
          <br />
          sales, and do more. For growing businesses and smart creators.🌿
        </p>
        <div className="flex gap-6 items-center">
          <button className="p-2 rounded-md bg-blue-700 font-semibold text-[14px] text-white">
            Get started NOW
          </button>
          <div className="flex gap-2 items-center">
            <Link className="underline font-semibold text-[14px]" href={""}>
              See pricing
            </Link>
            <Image src={"/witheArrow.svg"} alt="#" width={10} height={10} />
          </div>
        </div>
        <div className="mt-7">
          <h2 className="text-gray-700 text-[13px]">Trused by:</h2>
          <div className="flex gap-5 mt-[-70px]">
            {imgs.map((el: any) => (
              <div className="flex gap-2" key={el.id}>
                <Image
                  src={el.img}
                  alt="#"
                  width={100}
                  height={100}
                  style={el.style}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
