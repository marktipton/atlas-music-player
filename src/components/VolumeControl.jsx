import React from 'react'
import { HiMiniSpeakerWave } from "react-icons/hi2";
// import { HiMiniSpeakerXMark } from "react-icons/hi2";
import { Slider } from "@material-tailwind/react";

const VolumeControl = () => {
  return (
    <div className='flex align-middle'>
      <HiMiniSpeakerWave/>
      <Slider defaultValue={75} barClassName="bg-[#818899]"/>
    </div>
  )
}

export default VolumeControl