import React, { useRef, useState } from "react";
import Profile from "../../../img/profileImg.jpg";
import {
  UilScenery,
  UilPlayCircle,
  UilLocationPoint,
  UilSchedule,
  UilTimes,
} from "@iconscout/react-unicons";

const Share = () => {
  const [image, setImage] = useState(null);
  console.log(image);
  const imageRef = useRef();
  const ImageChange = ({ target }) => {
    if (target.files && target.files[0]) {
      let img = target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };
  return (
    <div className="flex flex-col gap-[1rem] bg-cardColor p-1 rounded-[1rem]">
      <div className="flex flex-row justify-center items-center w-[90%] gap-[1rem]">
        <img src={Profile} alt="" className="w-[3rem] h-[3rem] rounded-full" />
        <div className="w-full">
          <input
            type="text"
            placeholder="What's happening "
            className="bg-inputColor w-full p-1 pl-3 rounded-[10px] text-[17px] border-none outline-none"
          />
        </div>
      </div>
      <div className="flex justify-around">
        <div
          className="flex p-[5px] pl-[10px] pr-[10px] rounded-[10px] cursor-pointer text-Photo"
          onClick={() => imageRef.current.click()}
        >
          <UilScenery />
          Photo
        </div>
        <div className="flex p-[5px] pl-[10px] pr-[10px] rounded-[10px] cursor-pointer text-Vidoe">
          <UilPlayCircle />
          Video
        </div>
        <div className="flex p-[5px] pl-[10px] pr-[10px] rounded-[10px] cursor-pointer text-Location">
          <UilLocationPoint />
          Location
        </div>
        <div className="flex p-[5px] pl-[10px] pr-[10px] rounded-[10px] cursor-pointer text-Shedule">
          <UilSchedule />
          Schedule
        </div>
        <button className="flex items-center justify-center h-[2rem] pl-[20px] pr-[20px] text-white hover:text-black hover:font-bold border-none rounded-[0.5rem] transition-all ease-out duration-100 bg-[linear-gradient(106.23deg,_#f99827,_#f95f35_100%)]">
          Share
        </button>
        <div className="hidden">
          <input
            type="file"
            name="myImage"
            ref={imageRef}
            onChange={ImageChange}
          />
        </div>
      </div>
      {image && (
        <div className="relative">
          <UilTimes onClick={() => setImage(null)} className="cursor-pointer absolute right-[1rem] top-[0.5rem]" />
          <img src={image.image} alt="" className="w-full max-h-[20rem] object-cover"/>
        </div>
      )}
    </div>
  );
};

export default Share;
