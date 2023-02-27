import React from "react";
import { PostSide, ProfileSide, RigthSide } from "../components/home";

const Home = () => {
  return (
    <div className="flex flex-row gap-[1rem] relative">
      <ProfileSide />
      <PostSide />
      <RigthSide />
    </div>
  );
};

export default Home;
