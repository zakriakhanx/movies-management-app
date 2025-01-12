'use client';

import React, { useContext } from 'react';
import { FavoritesContext } from "@/app/contextAPI/FavoritesContext";
import { useMovies } from "@/app/contextAPI/MoviesContext";

const Page = () => {
  const { favorites } = useContext(FavoritesContext);
  const movieData = useMovies();

  const favoriteMovies = movieData.filter((movie) =>
    favorites.includes(String(movie.trackId))
  );
  
  console.log("Favorite Movies:", favoriteMovies);

  if (favoriteMovies.length > 0) {
    return (
      <>
        {favoriteMovies.map((movie) => (
          <div key={movie.trackId}>{movie.trackName}</div>
        ))}
      </>
    );
  } else {
    return <div>No favorite movies found</div>;
  }
};

export default Page;
