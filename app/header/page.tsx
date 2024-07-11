import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slide from "../Slide";
import TheComp from "../TheComp";
import { Scomponents, TComponents } from "../components/Components";

const Page = () => {
  const style = {
    backgroundImage: "url('/bg4.jpeg')",
    backgroundRepeat: "no-repeat",
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const navs = [
    { id: 1, title: "Products" },
    { id: 2, title: "Customers" },
    { id: 3, title: "Company" },
    { id: 4, title: "Pricing" },
  ];
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
      <div>
        <div className="flex justify-between items-center px-[150px] py-7">
          <div className="flex gap-10">
            <div>
              <Image src={"/blackLogo.svg"} alt="#" width={100} height={100} />
            </div>
            <div className="flex gap-8">
              {navs.map((el: any) => (
                <div key={el.id}>
                  <h2 className="text-gray-500 text-[15px]">{el.title}</h2>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-3">
            <div className="bg-gray-300 p-2 rounded-md">
              <Image src={"/phone.svg"} alt="#" width={15} height={15} />
            </div>
            <div className="bg-blue-800 flex justify-center items-center gap-[0.9] text-white font-semibold p-2 rounded-md h-8 text-[12px]">
              <h1>My</h1>
              <Image src={"/witheLogo.svg"} alt="#" width={50} height={50} />
              <h1>Cloud</h1>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="border-b w-[76%]" />
        </div>
      </div>

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
      </div>

      <div className="px-[150px] mt-[50px]">
        <div>
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
        <div>
          <h2 className="text-gray-600 font-semibold text-[27px]">
            Connect the tools that matters to your business
          </h2>
          <h3 className="font-bold text-[27px]">
            — Payments, Sales, Operations, Marketing, <br /> Customer Engagement
            e.t.c with solid{" "}
            <span className="underline">
              data <br /> protection
            </span>{" "}
            .
          </h3>
        </div>

        <div className="mt-[50px]">
          <div>
            <div className="bg-gray-200 p-1 flex gap-5 rounded-xl w-[43%] justify-center items-center h-[60px]">
              <div className="bg-white p-2 rounded-xl font-semibold text-[14px]">
                Creator Cloud
              </div>
              <div className="bg-white p-2 rounded-xl font-semibold text-[14px]">
                Business Cloud
              </div>
              <div className="bg-white p-2 rounded-xl font-semibold text-[14px]">
                Developer Cloud
              </div>
            </div>
          </div>
        </div>
        <TheComp />

        <div className="flex flex-col gap-7">
          <div>
            <button className="mt-6 p-2 rounded-md bg-blue-700 font-semibold text-[14px] text-white">
              Get started NOW
            </button>
          </div>

          <h2 className="font-bold text-[30px] mt-4">
            <span className="text-blue-700">Do more with DUMO®</span> .{" "}
            <span className="text-gray-500">No more restrictions</span> — <br />{" "}
            Gain access ALL apps with ALL the premium <br /> features you need
            to grow.
          </h2>

          <div
            style={style}
            className="flex justify-between rounded-[20px] p-12"
          >
            <div className="flex w-[50%] justify-center items-center">
              <h1 className="font-bold text-[20px] text-white">
                Featued Apps.
              </h1>
            </div>

            <div className="flex flex-col gap-6 justify-end w-[40%]">
              <div className="flex flex-col gap-5 bg-white rounded-md p-8">
                <h1 className="font-bold text-[15px]">Ava</h1>
                <p className="text-gray-500 text-[12px]">
                  Deliver your online courses to anyone, anywhere!
                </p>
                <div className="flex gap-2 items-center">
                  <Link
                    className="underline font-semibold text-[14px]"
                    href={""}
                  >
                    Learn More
                  </Link>
                  <Image
                    src={"/witheArrow.svg"}
                    alt="#"
                    width={10}
                    height={10}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-5 bg-white rounded-md p-8">
                <h1 className="font-bold text-[15px]">Pali</h1>
                <p className="text-gray-500 text-[12px]">
                  Sell anything downloadable to anyone, anywhere.
                </p>
                <div className="flex gap-2 items-center">
                  <Link
                    className="underline font-semibold text-[14px]"
                    href={""}
                  >
                    See pricing
                  </Link>
                  <Image
                    src={"/witheArrow.svg"}
                    alt="#"
                    width={10}
                    height={10}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-5 justify-between mt-5">
            <TComponents img="/brand1.svg" text="Keep your customers closer." />
            <TComponents img="/brand2.svg" text="Keep your Money." />
            <TComponents img="/brand3.svg" text="Boost your brand growth." />
          </div>

          <h2 className="font-bold text-[26px] mt-4">
            <span className="text-gray-500">
              {" "}
              Stay updated with the latest news at DUMO®{" "}
            </span>
            <br /> as well as industry insights to elevate your <br /> brand
            game.
          </h2>
          <div className="flex justify-between">
            <div className="w-[48%]">
              <Scomponents
                img="/blog1.jpg"
                text="How ChigiSoft Academy Uses Dumo Ava to Deliver top-notch"
              />
            </div>

            <div className="w-[48%]">
              {" "}
              <Scomponents
                img="/blog2.jpg"
                text="How ChigiSoft Academy Uses Dumo Ava to Deliver top-notch"
              />
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Page;
