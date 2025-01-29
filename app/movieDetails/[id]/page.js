'use client'
import { use, useContext, useMemo } from 'react'
import { useMovies } from "@/app/contextAPI/MoviesContext"
import { FavoritesContext } from "@/app/contextAPI/FavoritesContext"

import { VideoPlayer } from './components/VideoPlayer'
import { MovieDetails } from './components/MovieDetails'
import { RelatedMovies } from './components/RelatedMovies'
import { FavoriteButton } from './components/FavoriteButton'

const MovieDetailsPage = ({ params }) => {
  const param = use(params)
  const movieData = useMovies()
  const { addFavorite, removeFavorite, isFavorite } = useContext(FavoritesContext)

  // Find current movie
  const currentMovie = useMemo(() => 
    movieData.find(movie => movie.trackId == param.id),
    [movieData, param.id]
  )

  // Filter related movies
  const relatedMovies = useMemo(() => 
    movieData.filter(movie => 
      movie.primaryGenreName === currentMovie?.primaryGenreName
    ),
    [movieData, currentMovie]
  )

  if (!currentMovie) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl text-textSecondary">Movie not found</p>
      </div>
    )
  }

  return (
    <main className="flex flex-col bg-background min-h-screen">
      <VideoPlayer url={currentMovie.previewUrl} />
      
      <div className="relative flex px-5 py-10 h-full cursor-default text-textPrimary">
        <MovieDetails movie={currentMovie} />
        
        <aside className="w-1/3 sm:w-1/5 absolute top-4 right-0">
          <FavoriteButton 
            movieId={param.id}
            isFavorite={isFavorite(param.id)}
            onToggle={() => 
              isFavorite(param.id) 
                ? removeFavorite(param.id) 
                : addFavorite(param.id)
            }
          />
        </aside>
      </div>

      <RelatedMovies movies={relatedMovies} />
    </main>
  )
}

export default MovieDetailsPage
