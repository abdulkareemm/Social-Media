import React from "react";
import Logo from "../../../img/logo.png";
import { UilSearch } from "@iconscout/react-unicons";

const LogoSearch = () => {
  return (
    <div className="flex gap-[0.71rem]">
      <img src={Logo} alt="" />
      <div className="flex bg-inputColor rounded-[10px] p-[5px]">
        <input
          type="text"
          placeholder="#Explore"
          className="bg-transparent border-none outline-none"
        />
        <div className="flex items-center justify-center bg-[linear-gradient(106.23deg,_#f99827,_#f95f35_100%)] text-white rounded-[5px] p-[4px]">
          <UilSearch className="cursor-pointer"/>
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;
