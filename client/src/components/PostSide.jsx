import React from "react";
import { Posts, Share } from "./postSideComponents";

const PostSide = () => {
  return (
    <div className="w-[58rem] flex flex-col gap-[1rem] h-[100vh] overflow-auto">
      <Share />
      <Posts />
    </div>
  );
};

export default PostSide;
