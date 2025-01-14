import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { useMovies } from '../contextAPI/MoviesContext'

const SearchBar = () => {

  const movieData = useMovies();

  const [inputValue, setInputValue] = useState('')

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const matchingMovies = inputValue
    ? movieData.filter((movie) =>
      movie.trackName.toLowerCase().startsWith(inputValue.toLowerCase())
    )
    : [];

  return (
    <div className='w-full bg-background h-[40vh] flex items-center justify-center relative'>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img 
      className='w-full h-[40vh] object-cover opacity-50 absolute' 
      src="https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/PK-en-20250106-TRIFECTA-perspective_ac4f9910-e162-4463-9f26-4f7743230f6b_large.jpg" alt="" />

      <div className="relative flex flex-col items-center gap-1">
        <input
          className="bg-background text-textPrimary border-[1px] border-black h-10 rounded-md px-3 opacity-80 w-52 sm:w-96"
          type="text"
          value={inputValue}
          placeholder='Search Here'
          onChange={handleChange}
        />

        {/* Dropdown */}
        {matchingMovies.length > 0 && (
          <div className="absolute top-full mt-1 w-52 sm:w-96 bg-background border-[1px] border-border rounded-md shadow-lg z-10">

            {matchingMovies.map((movie) => (
              <Link key={movie.trackId} href={`/movieDetails/${movie.trackId}`}>

                <div
                  className="text-textPrimary h-10 px-3 flex items-center hover:bg-accent cursor-pointer">
                  {movie.trackName}
                </div>

              </Link>
            ))}

          </div>
        )}
      </div>

    </div>

  )
}

export default SearchBar
