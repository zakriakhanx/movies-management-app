'use client'

import React from 'react'
import Image from 'next/image'
import Api from '../utils/Api'

const MovieCard = () => {
  const movieData = Api();
  return (
    <>
      <ul>
        {movieData.map((movie) => {
          return (
            <li key={movie.trackId}>
              <Image src={movie.artworkUrl100} alt={movie.trackName} width={100} height={100} />
              <h2>{movie.trackName}</h2>
              <p>{movie.longDescription}</p>
            </li>
          )
        }
        )}
      </ul>
    </>
  )
}

export default MovieCard
