import React from 'react'
import { IoPlayBack } from "react-icons/io5";
import { IoPlay } from "react-icons/io5";
import { IoPlayForward } from "react-icons/io5";
import { GrPowerCycle } from "react-icons/gr";

const PlayControls = () => {
  return (
    <div className='flex justify-between items-center'>
      <button>1x</button>
      <button>
        <IoPlayBack className="text-gray-500"/>
      </button>
      <button className='outline-1'><IoPlay/></button>
      <button><IoPlayForward/></button>
      <button><GrPowerCycle/></button>
    </div>
  )
}

export default PlayControls