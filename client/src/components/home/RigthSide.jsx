import React from "react";
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Commet from "../../img/comment.png";

import { UilSetting } from "@iconscout/react-unicons";
import { Trend } from "./rightSideComponents";

const RigthSide = () => {
  return (
    <div className="w-[22rem] flex flex-col gap-[2rem]">
      <div className="flex flex-row justify-between mt-[1rem] p-1">
        <img
          src={Home}
          alt=""
          className="w-[1.5rem] h-[1.5rem] cursor-pointer"
        />
        <UilSetting className="w-[1.5rem] h-[1.5rem] cursor-pointer" />
        <img
          src={Noti}
          alt=""
          className="w-[1.5rem] h-[1.5rem] cursor-pointer"
        />
        <img
          src={Commet}
          alt=""
          className="w-[1.5rem] h-[1.5rem] cursor-pointer"
        />
      </div>
      <Trend />
    </div>
  );
};

export default RigthSide;
