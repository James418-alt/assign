import Image from "next/image";
import React, { FC } from "react";
interface iComp {
  title: string;
  desc: string;
  logo: string;
  rImage: string;
  bgImage: string;
  items: string[];
}
interface iTcomp {
  img: string;
  text: string;
}
interface sComp {
  text: string;
  img: string;
}

export const Components: FC<iComp> = ({
  title,
  desc,
  logo,
  rImage,
  bgImage,
  items,
}) => {
  const style = {
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="flex flex-col gap-10 mt-7">
      <div
        style={style}
        className="rounded-[40px] flex justify-between p-[70px]"
      >
        <div className="w-[50%] flex flex-col gap-5">
          <Image src={logo} alt="#" width={30} height={30} />
          <h2 className="font-semibold text-white text-[30px]">{title}</h2>
          <p className="font-semibold text-white text-[15px]">{desc}</p>
          <div className="flex gap-3">
            {items.map((el: any, id: any) => (
              <Image key={id} src={el} alt="#" width={50} height={50} />
            ))}
          </div>
        </div>
        <div className="w-[50%] flex justify-end">
          <Image src={rImage} alt="#" width={350} height={350} />
        </div>
      </div>
    </div>
  );
};

export const TComponents: FC<iTcomp> = ({ img, text }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="bg-slate-200 p-3 pb-0 rounded-[30px]">
        <Image src={img} alt="#" width={250} height={250} />
      </div>

      <h1 className="font-semibold text-[18px]">{text}</h1>
    </div>
  );
};

export const Scomponents: FC<sComp> = ({ text, img }) => {
  const style = {
    backgroundImage: `url(${img})`,
    backgroundRepeat: "no-repeat",
  };
  return (
    <div
      style={style}
      className="flex items-end p-5 min-h-[500px] rounded-[30px]"
    >
      <h1 className="font-bold text-[20px] text-white ">{text}</h1>
    </div>
  );
};
