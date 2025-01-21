'use client'
import { useContext, useMemo } from 'react'
import { FavoritesContext } from "@/app/contextAPI/FavoritesContext"
import { useMovies } from "@/app/contextAPI/MoviesContext"
import { FavoriteMovieCard } from "./components/FavoriteMovieCard"
import { NoFavorites } from "./components/NoFavorites"

const FavoritesPage = () => {
  const { favorites } = useContext(FavoritesContext)
  const movieData = useMovies()

  const favoriteMovies = useMemo(() =>
    movieData.filter(movie => favorites.includes(`${movie.trackId}`)),
    [movieData, favorites]
  )

  return (
    <main
      className="flex flex-col gap-5 bg-background p-5 min-h-screen"
      aria-label="Favorites page"
    >
      <h1 className="text-2xl font-bold text-textPrimary">
        My Favorites
      </h1>

      {movieData.length === 0 ? (
        <div className="flex items-center justify-center h-40">
          <p className="text-textSecondary">Loading movies...</p>
        </div>
      ) : favoriteMovies.length > 0 ? (
        <section
          className="flex flex-col gap-5"
          aria-label="Favorite movies list"
        >
          {favoriteMovies.map(movie => (
            <FavoriteMovieCard
              key={movie.trackId}
              movie={movie}
            />
          ))}
        </section>
      ) : (
        <NoFavorites />
      )}
    </main>
  )
}

export default FavoritesPage
