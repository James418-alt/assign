import React from "react";
import TheComp from "./TheComp";
import Link from "next/link";
import Image from "next/image";
import { Scomponents, TComponents } from "./components/Components";

const Body = () => {
  const style = {
    backgroundImage: "url('/bg4.jpeg')",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div>
      <div className="px-[150px] mt-[50px]">
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

export default Body;
