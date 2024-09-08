import React from 'react'
import { IoPlayBack } from "react-icons/io5";
import { IoPlay } from "react-icons/io5";
import { IoPlayForward } from "react-icons/io5";
import { GrPowerCycle } from "react-icons/gr";

const PlayControls = () => {
  return (
    <div className='flex justify-between items-center'>
      <p>1x</p>
      <IoPlayBack className="text-gray-500"/>
      <IoPlay/>
      <IoPlayForward/>
      <GrPowerCycle/>
    </div>
  )
}

export default PlayControls