'use client'
import { createContext, useState, useCallback } from 'react'

export const FavoritesContext = createContext()

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([])

  const addFavorite = useCallback((movieId) => {
    if (!movieId) return
    setFavorites(prev => {
      if (prev.includes(movieId)) return prev
      return [...prev, movieId]
    })
  }, [])

  const removeFavorite = useCallback((movieId) => {
    if (!movieId) return
    setFavorites(prev => prev.filter(id => id !== movieId))
  }, [])

  const isFavorite = useCallback((movieId) => {
    if (!movieId) return false
    return favorites.includes(movieId)
  }, [favorites])

  const value = {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite
  }

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  )
}
