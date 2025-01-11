'use client'

import React from 'react'
import Image from 'next/image'
import Api from '../utils/Api'

const MovieCard = () => {
  const movieData = Api();
  return (
    <>

      {movieData.map((movie) => {
        return (
          <div key={movie.trackId} className='flex flex-col items-center border-2 border-black p-2 text-white rounded-lg'>
            <Image src={movie.artworkUrl100} alt={movie.trackName} width={200} height={200}
              className='w-full' />
            <h2>{movie.trackName}</h2>
          </div>
        )
      }
      )}

    </>
  )
}

export default MovieCard
