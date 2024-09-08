import React from 'react'

const PlayListItem = ({name, artist, time}) => {
  return (
    <div className='flex w-full items-center justify-between'>
      <div>
        <p className='text-black font-medium'>{name}</p>
        <p className='text-gray-500 font-medium'>{artist}</p>
      </div>
      <p className='text-gray-500 font-medium'>{time}</p>

    </div>
  )
}

export default PlayListItem