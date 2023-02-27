import React from "react";
import { FollwersCard, LogoSearch, ProfileCard } from "./profileSideComponents";

const ProfileSide = () => {
  return (
    <div className="w-[20rem] flex flex-col items-center gap-[1rem] overflow-hidden">
      <LogoSearch />
      <ProfileCard profilePage={true}/>
      <FollwersCard />
    </div>
  );
};

export default ProfileSide;
