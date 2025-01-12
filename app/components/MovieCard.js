import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useMovies } from '../contextAPI/MoviesContext'

const MovieCard = () => {

  const movieData = useMovies();

  return (
    <>

      {movieData.map((movie) => {
        return (
          <Link href={`/movieDetails/${movie.trackId}`} key={movie.trackId}>
          <div key={movie.trackId} className='flex flex-col items-center border-2 border-black p-2 text-white rounded-lg bg-gray-800 shadow'>
            <Image src={movie.artworkUrl100} alt={movie.trackName} width={200} height={200}
              className='w-full' />
            <h2>{movie.trackName}</h2>
          </div>
          </Link>
        )
      }
      )}

    </>
  )
}

export default MovieCard
