import React from 'react'

const PlayListItem = ({name, artist, time}) => {
  return (
    <div>
      <div>{name}</div>
      <div>{artist}</div>
      <div>{time}</div>

    </div>
  )
}

export default PlayListItem