import React from 'react'
import CoverArt from './CoverArt'
import SongTitle from './SongTitle'
import PlayControls from './PlayControls'
import VolumeControl from './VolumeControl'

const CurrentlyPlaying = () => {
  return (
    <div>
      <CoverArt/>
      <SongTitle/>
      <PlayControls/>
      <VolumeControl/>
    </div>
  )
}

export default CurrentlyPlaying