import React from "react";
import { Followers } from "../../data/follwersData";

const FollwersCard = () => {
  return (
    <div className="w-full rounded-[0.7rem] gap-[1rem] flex flex-col text-[13px]">
      <h3>Who is follwing you</h3>
      {Followers.map((follower) => (
        <div key={follower.id} className="flex justify-between gap-[10px] items-center">
          <div className="flex flex-row gap-[10px]">
            <img
              src={follower.img}
              alt=""
              className="w-[3.2rem] h-[3.2rem] rounded-full"
            />
            <div className="flex flex-col justify-center">
              <span className="font-bold">{follower.name}</span>
              <span>@{follower.username}</span>
            </div>
          </div>
          <button className="flex items-center justify-center h-[2rem] pl-[20px] pr-[20px] text-white hover:text-black hover:font-bold border-none rounded-[0.5rem] transition-all ease-out duration-100 bg-[linear-gradient(106.23deg,_#f99827,_#f95f35_100%)]">
            Follow
          </button>
        </div>
      ))}
    </div>
  );
};

export default FollwersCard;
