'use client'
import { use } from "react"
import React from 'react'
import { useMovies } from "@/app/contextAPI/MoviesContext";
import Image from 'next/image'
import Link from 'next/link'
import ReactPlayer from 'react-player'
import { useState } from "react";
import { FavoritesContext } from "@/app/contextAPI/FavoritesContext";
import { useContext } from "react";
import { ExclamationCircleIcon } from '@heroicons/react/24/solid';


const Page = ({ params }) => {

  const param = use(params);

  const movieData = useMovies();

  const { addFavorite, removeFavorite, isFavorite } = useContext(FavoritesContext);
  const [hasError, setHasError] = useState(false);

  return (
    <>
      {movieData.map((movie) => {
        if (movie.trackId == param.id) {
          return (
            <div key={movie.trackId} className='flex flex-col bg-background p-5 h-full min-h-screen'>

              <div className="bg-black flex justify-center items-center w-auto h-[40vh]">
                {!hasError ? (
                  <ReactPlayer
                    url={movie.previewUrl}
                    width="100%"
                    height="100%"
                    controls={true}
                    playing={false}
                    onError={() => setHasError(true)}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-white">
                    <ExclamationCircleIcon className="h-10 w-10 text-red-500" />

                    <p className="text-lg text-gray-400">Unable to load the video.</p>
                    <button
                      className="mt-4 bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-600"
                      onClick={() => window.location.reload()}
                    >
                      Retry
                    </button>
                  </div>
                )}
              </div>

              <div className="flex justify-around px-5 py-10 h-full cursor-default text-textPrimary">

                <div className="w-1/2 break-words">
                  <h1 className="text-4xl mb-5 sm:font-semibold">{movie.trackName}</h1>
                  <p className="text-textSecondary">{movie.longDescription}</p>
                </div>

                <div className="w-1/3 sm:w-1/5">

                  <div className="mb-5 flex items-center" >
                    <Image
                      src={isFavorite(param.id) ? "/favoriteFilled.svg" : "/favorite.svg"}
                      alt='favIcon'
                      width={30}
                      height={30}
                      className="cursor-pointer"
                      onClick={() => (isFavorite(param.id) ? removeFavorite(param.id) : addFavorite(param.id))} />
                    <h1 className="mx-2 cursor-default">Favorite</h1>
                  </div>

                  <div className="cursor-default text-textSecondary">
                    <h1 className="mb-2">Director: {movie.artistName}</h1>
                    <h1 className="mb-2">Genre: {movie.primaryGenreName}</h1>
                    <h1 className="mb-2">ReleaseDate: {movie.releaseDate.split("T")[0]}</h1>
                    <h1 className="mb-2">Price: ${movie.trackPrice}</h1>
                  </div>
                </div>
              </div>

              <div className="w-full h-1 bg-border"></div>

              <div className="bg-background w-full h-auto p-10 flex flex-col justify-center">
                <h1 className="text-xl sm:text-3xl mb-10 text-textPrimary">Related Movies</h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-16 w-full">
                  {
                    movieData.map((movie2) => {
                      if (movie2.primaryGenreName === movie.primaryGenreName) {
                        return (
                          <Link key={movie2.trackId} href={`/movieDetails/${movie2.trackId}`}>
                            <div className='flex flex-col items-center border-2 border-border p-2 text-textPrimary rounded-lg bg-surface shadow h-[100%]'>
                              <Image src={movie2.artworkUrl100} alt={movie2.trackName} width={200} height={200}
                                className='w-full' />
                              <p className='text-textSecondary text-sm m-2'>{movie2.primaryGenreName}</p>
                              <h2>{movie2.trackName}</h2>
                            </div>
                          </Link>
                        )
                      }
                    })
                  }
                </div>
              </div>

            </div>
          )
        }
      }
      )}
    </>
  )
}

export default Page
