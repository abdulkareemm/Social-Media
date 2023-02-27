import React from "react";
import Commet from "../../../img/comment.png";
import Share from "../../../img/share.png";
import Heart from "../../../img/like.png";
import NotLike from "../../../img/notlike.png";

const Post = ({ data }) => {
  return (
    <div className="flex flex-col p-[1rem] bg-cardColor rounded-[1rem] no-scrollbar gap-[1rem]">
      <img
        src={data.img}
        alt=""
        className="w-full max-h-[28rem] object-cover rounded-[0.5rem]"
      />
      <div className="flex items-start gap-[1.5rem]">
        <img src={data.liked ? Heart : NotLike} alt="" />
        <img src={Share} alt="" />
        <img src={Commet} alt="" />
      </div>
      <span>{data.likes} likes</span>
      <div className="flex gap-[0.70rem]">
        <span>
          <b>{data.name}</b>
        </span>
        <span>{data.desc}</span>
      </div>
    </div>
  );
};

export default Post;
