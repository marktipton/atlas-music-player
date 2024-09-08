import React from 'react'
import { HiMiniSpeakerWave } from "react-icons/hi2";
// import { HiMiniSpeakerXMark } from "react-icons/hi2";
import { Slider } from "@material-tailwind/react";

const VolumeControl = () => {
  return (
    <div className='flex items-center'>
      <HiMiniSpeakerWave/>
      <Slider color="blue-gray" />
    </div>
  )
}

export default VolumeControl