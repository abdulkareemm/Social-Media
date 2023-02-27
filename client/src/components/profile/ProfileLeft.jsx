import React from 'react'
import {FollwersCard, LogoSearch} from "../home/profileSideComponents"
import Info from './left-section/Info'

const ProfileLeft = () => {
  return (
        <div className="w-[20rem] flex flex-col items-center gap-[1.5rem] overflow-hidden">
        <LogoSearch />
        <Info />
        <FollwersCard/>
</div>
  )
}

export default ProfileLeft