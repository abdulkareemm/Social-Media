import React from "react";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";

const ProfileCard = () => {
  return (
    <div className="rounded-[1.5rem] flex flex-col relative gap-[1rem] overflow-x-clip bg-cardColor">
      <div className="flex relative items-center justify-center flex-col">
        <img src={Cover} alt="" className="w-full" />
        <img
          src={Profile}
          alt=""
          className="w-[6rem] rounded-full absolute bottom-[-3rem] shadow-profileShadow"
        />
      </div>
      <div className="flex flex-col gap-[10px] items-center mt-[3rem]">
        <span className="font-bold">Zendaya MJ</span>
        <span>Senior UI/UX Designer</span>
      </div>
      <div className="flex flex-col items-center justify-center gap-[0.75rem]">
        <hr className="w-[85%] border-[2px] border-hrColor" />
        <div className="flex gap-[1rem] w-[80%] items-center justify-around">
          <div className="flex flex-col items-center justify-center gap-[0.4rem]">
            <span className="font-bold">6,980</span>
            <span className="text-Gray">Follwings</span>
          </div>
          <div className="h-[120%] border-l-[3px] border-hrColor" />
          <div className="flex flex-col items-center justify-center gap-[0.4rem]">
            <span className="font-bold">1,000</span>
            <span className="text-Gray">Followers</span>
          </div>
        </div>
        <hr className="w-[85%] border-[2px] border-hrColor" />
      </div>
      <span className="font-bold text-Orange self-center mb-[1rem] cursor-pointer">My Profile</span>
    </div>
  );
};

export default ProfileCard;
