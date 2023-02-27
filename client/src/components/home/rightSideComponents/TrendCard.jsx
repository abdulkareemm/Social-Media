import React from "react";
import { TrendData } from "../../../data/TrendData";

const TrendCard = () => {
  return (
    <div className="flex flex-col gap-[1rem] bg-cardColor p-[1rem] pl-[2rem] rounded-[1rem]">
      <h3 className="font-bold text-lg">Trends for you</h3>
      {TrendData.map((trend) => {
        return (
          <div key={trend.id} className="flex flex-col gap-[0.5rem]">
            <span className="font-bold">#{trend.name}</span>
            <span className="text-xs">{trend.shares}k shares</span>
          </div>
        );
      })}
      <button className="flex items-center justify-center h-[3rem] mt-[1rem] text-white hover:text-black hover:font-bold border-none rounded-[0.5rem] transition-all ease-out duration-100 bg-[linear-gradient(106.23deg,_#f99827,_#f95f35_100%)]">
        Share
      </button>
    </div>
  );
};

export default TrendCard;
