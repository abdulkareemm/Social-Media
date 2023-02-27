import React from "react";
import { UilPen } from "@iconscout/react-unicons";

const Info = () => {
  return (
    <div className="flex flex-col gap-[0.75rem] bg-cardColor p-[1rem] rounded-[1rem] w-[90%] mb-[2rem]">
      <div className="flex justify-between items-center mb-[2rem]">
        <h4 className="font-bold text-lg">Your info</h4>
        <UilPen className="w-6 cursor-pointer" />
      </div>
      <div >
        <span>
          <b>Status</b>
        </span>
        <span>in Relationship</span>
      </div>
      <div>
        <span>
          <b>Lives in</b>
        </span>
        <span>Multan</span>
      </div>
      <div>
        <span>
          <b>Works at</b>
        </span>
        <span>Shyp</span>
      </div>
      <div className="flex items-center justify-end mt-[2rem]">
        <button className=" h-[2rem] pl-[20px] pr-[20px] text-white hover:text-black hover:font-bold border-none rounded-[0.5rem] transition-all ease-out duration-100 bg-[linear-gradient(106.23deg,_#f99827,_#f95f35_100%)]">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Info;
