'use client'
import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (movieId) => {
    setFavorites([...favorites, movieId]);
    console.log('Added to favorites', favorites);
  };

  const removeFavorite = (movieId) => {
    setFavorites(favorites.filter((id) => id !== movieId));
    console.log('Removed from favorites', favorites);
  };

  const isFavorite = (movieId) => {
    console.log('Favorites',favorites);
    return(favorites.some((id) => id === movieId))
  };


  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
