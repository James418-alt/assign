"use client";
import React from "react";
import { Components } from "./components/Components";

const TheComp = () => {
  return (
    <div>
      <Components
        logo="/rightlogo.svg"
        title="DUMO® Creator Cloud (DCC)."
        desc="Run your creator & digital commerce business."
        rImage="/img1.svg"
        bgImage="/bg1.svg"
        items={["/ic4.svg", "/ic1.svg", "/ic6.svg"]}
      />
      <Components
        logo="/lefelogo.svg"
        title="DUMO® Business Cloud (DBC)."
        desc="Manage important aspects of your Growing Enterprise on one scalable operating system."
        rImage="/img2.png"
        bgImage="/bg2.svg"
        items={["/ic5.svg", "/ic2.svg", "/ic3.svg"]}
      />
    </div>
  );
};

export default TheComp;
