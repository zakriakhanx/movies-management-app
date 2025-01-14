'use client';
import React, { useContext } from 'react';
import { FavoritesContext } from "@/app/contextAPI/FavoritesContext";
import { useMovies } from "@/app/contextAPI/MoviesContext";
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {

  // Destructuring favorite-related functions and state from FavoritesContext
  const { favorites, addFavorite, removeFavorite, isFavorite } = useContext(FavoritesContext);

  // Fetching movie data from the Movies context
  const movieData = useMovies();

  // Filtering out the movies that are in the favorites list based on trackId
  const favoriteMovies = movieData.filter((movie) =>
    favorites.includes(String(movie.trackId))
  );

  console.log("Favorite Movies:", favoriteMovies);

  // Checking if there are any favorite movies, and rendering accordingly
  if (favoriteMovies.length > 0) {
    return (
      <div className="flex flex-col gap-5 bg-background p-5 min-h-screen">

        {favoriteMovies.map((movie) => (
          <div
            key={movie.trackId}
            className="flex items-center justify-between gap-5 border-2 border-border p-5 bg-surface text-textPrimary rounded-lg shadow w-full"
          >
            <div className='flex items-start gap-5'>
              <div className='h-[20vh]'>
                
                {/* Link to navigate to the movie's details page */}
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

              {/* Displaying the movie's name and description */}
              <div className='flex flex-col justify-evenly items-start w-[50%] h-[20vh] overflow-hidden'>
                <p className="text-sm sm:text-lg font-semibold">{movie.trackName}</p>
                <p className='text-xs sm:text-sm text-textSecondary'>{movie.shortDescription}</p>
              </div>

            </div>

            {/* Displaying the favorite icon (changes based on whether the movie is a favorite) */}
            <div className="flex flex-col items-center justify-center w-[20%]" >
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
    
    // Message when no favorite movies are found
    return <div className='flex flex-col gap-5 bg-background p-5 min-h-screen'>
      <div
            className="flex items-center justify-center border-2 border-border p-5 bg-background text-textPrimary rounded-lg shadow w-full"
          >
            <p>No favorite movies found. Please add some to your favorites list.</p>
          </div>
    </div>;
  }
};

export default Page;
