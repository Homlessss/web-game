import React from 'react'

const playGame = () => {
  return (
    <div className='play-game grid place-items-center'>
      <iframe
        src='https://games.h5h5games.com/collection/tombrun3/'
        allowFullScreen
        width={500}
        height={500}
      >   
      </iframe>
    </div>
  )
}

export default playGame