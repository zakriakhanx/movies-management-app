'use client'
import { use, useEffect, useRef } from "react"
import React from 'react'
import { useMovies } from "@/app/contextAPI/MoviesContext";
import Image from 'next/image'
import Link from 'next/link'
import ReactPlayer from 'react-player'
import { useState } from "react";
import { FavoritesContext } from "@/app/contextAPI/FavoritesContext";
import { useContext } from "react";

const Page = ({ params }) => {

  const param = use(params);

  const movieData = useMovies();

  const { addFavorite, removeFavorite, isFavorite } = useContext(FavoritesContext)

  return (
    <>
      {movieData.map((movie) => {
        if (movie.trackId == param.id) {
          return (
            <div key={movie.trackId} className='flex flex-col bg-gray-300 p-5 h-full min-h-screen'>

              <div className="bg-black flex justify-center items-center w-auto h-[40vh]">
                <ReactPlayer url={movie.previewUrl} width='100%' height='100%' controls={true} playing={false} />
              </div>

              <div className="flex justify-around px-5 py-10 h-full cursor-default">

                <div className="w-1/2">
                  <h1 className="text-4xl mb-5">{movie.trackName}</h1>
                  <p>{movie.longDescription}</p>
                </div>

                <div className="w-1/5">

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

                  <div className="cursor-default">
                    <h1>Director: {movie.artistName}</h1>
                    <h1>Genre: {movie.primaryGenreName}</h1>
                    <h1>ReleaseDate: {movie.releaseDate.split("T")[0]}</h1>
                    <h1>Price: ${movie.trackPrice}</h1>
                  </div>
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
