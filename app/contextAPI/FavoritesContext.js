'use client'
import React, { createContext, useState } from 'react';

// Creating a context for managing favorites globally.
export const FavoritesContext = createContext(); 

export const FavoritesProvider = ({ children }) => {

  // State for managing the list of favorite movie IDs
  const [favorites, setFavorites] = useState([]);

  // Function to add a movie to the favorites list
  const addFavorite = (movieId) => {
    setFavorites([...favorites, movieId]);
    console.log('Added to favorites', favorites);
  };

  // Function to remove a movie from the favorites list
  const removeFavorite = (movieId) => {
    setFavorites(favorites.filter((id) => id !== movieId));
    console.log('Removed from favorites', favorites);
  };

  // Function to check if a movie is already in the favorites list
  const isFavorite = (movieId) => {
    console.log('Favorites',favorites);
    // Returning true if the movieId exists in the favorites array, else false
    return(favorites.some((id) => id === movieId))
  };


  return (
    // Providing the context values (favorites array and functions) to the children components
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
