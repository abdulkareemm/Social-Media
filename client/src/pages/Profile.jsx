import React from 'react'
import { ProfileCard } from '../components/home/profileSideComponents';
import {ProfileLeft} from "../components/profile"
import {PostSide,RigthSide} from "../components/home"

const Profile = () => {
  return (
    <div className="flex flex-row gap-[1rem] relative">
      <ProfileLeft />
      <div className="flex flex-col gap-[1rem]">
        <ProfileCard profilePage={false}/>
        <PostSide />
      </div>
      <RigthSide />
    </div>
  );
}

export default Profile