import React from 'react'

const PlayListItem = ({name, artist, time}) => {
  return (
    <div className='flex space-x-10'>
      <div>
        <p className='text-black font-medium'>{name}</p>
        <p className='text-gray-500 font-medium'>{artist}</p>
      </div>
      <p className='text-gray-500 font-medium'>{time}</p>

    </div>
  )
}

export default PlayListItem