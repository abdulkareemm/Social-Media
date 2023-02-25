import React from "react";
import { PostSide, ProfileSide, RigthSide } from "../components";

const Home = () => {
  return (
    <div className="flex flex-row gap-1">
      <ProfileSide />
      <PostSide />
      <RigthSide />
    </div>
  );
};

export default Home;
