import React from 'react'
import PlayListItem from './PlayListItem'

const Playlist = () => {
  return (
    <div>
      <h1 className='font-medium text-xl'>Playlist</h1>
      <PlayListItem name='Painted in Blue' artist='Soul Canvas' time='3:21'/>
      <PlayListItem name='Painted in Blue' artist='Soul Canvas' time='3:21'/>

    </div>
  )
}

export default Playlist