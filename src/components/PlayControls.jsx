import React from 'react'
import { IoPlayBack } from "react-icons/io5";
import { IoPlay } from "react-icons/io5";
import { IoPlayForward } from "react-icons/io5";
import { GrPowerCycle } from "react-icons/gr";

const PlayControls = () => {
  return (
    <div className='flex'>
      <p>1x</p>
      <IoPlayBack/>
      <IoPlay/>
      <IoPlayForward/>
      <GrPowerCycle/>
    </div>
  )
}

export default PlayControls