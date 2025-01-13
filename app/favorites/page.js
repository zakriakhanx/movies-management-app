'use client';

import React, { useContext } from 'react';
import { FavoritesContext } from "@/app/contextAPI/FavoritesContext";
import { useMovies } from "@/app/contextAPI/MoviesContext";
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  const { favorites, addFavorite, removeFavorite, isFavorite } = useContext(FavoritesContext);
  const movieData = useMovies();

  const favoriteMovies = movieData.filter((movie) =>
    favorites.includes(String(movie.trackId))
  );

  console.log("Favorite Movies:", favoriteMovies);

  if (favoriteMovies.length > 0) {
    return (
      <div className="flex flex-col gap-5 bg-white p-5 min-h-screen">
        {favoriteMovies.map((movie) => (
          <div
            key={movie.trackId}
            className="flex items-center justify-between gap-5 border-2 border-black p-5 bg-gray-800 text-white rounded-lg shadow w-full"
          >
            <div className='flex items-start gap-5'>
              <div className='h-[20vh]'>
                <Link href={`/movieDetails/${movie.trackId}`}>
                  <Image
                    src={movie.artworkUrl100}
                    alt={movie.trackName}
                    width={100}
                    height={100}
                    className="rounded-lg h-full w-auto"
                  />
                </Link>
              </div>

              <div className='flex flex-col justify-evenly items-start w-[50%] h-[20vh] overflow-hidden'>
                <p className="text-lg">{movie.trackName}</p>
                <p className='text-sm'>{movie.shortDescription}</p>
              </div>
            </div>

            <div className="flex items-center justify-center w-[20%]" >
              <Image
                src={isFavorite(String(movie.trackId)) ? "/favoriteFilled.svg" : "/favorite.svg"}
                alt='favIcon'
                width={30}
                height={30}
                className="cursor-pointer"
                onClick={() => (isFavorite(String(movie.trackId)) ? removeFavorite(String(movie.trackId)) : addFavorite(String(movie.trackId)))} />
              <h1 className="mx-2 cursor-default">Favorite</h1>
            </div>

          </div>
        ))}
      </div>
    );
  } else {
    return <div className='flex flex-col gap-5 bg-white p-5 min-h-screen'>
      <div
            className="flex items-center justify-center border-2 border-black p-5 bg-gray-800 text-white rounded-lg shadow w-full"
          >
            <p>No favorite movies found. Please add some to your favorites list.</p>
          </div>
    </div>;
  }
};

export default Page;
