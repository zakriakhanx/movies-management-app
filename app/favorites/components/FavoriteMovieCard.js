'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'
import { FavoritesContext } from "@/app/contextAPI/FavoritesContext"

export const FavoriteMovieCard = ({ movie }) => {
  const { addFavorite, removeFavorite, isFavorite } = useContext(FavoritesContext)
  const movieId = `${movie.trackId}`

  return (
    <article className="flex items-center justify-between gap-5 border-2 border-border p-5 bg-surface text-textPrimary rounded-lg shadow w-full">
      <div className="flex items-start gap-5">
        <div className="h-[20vh]">
          <Link href={`/movieDetails/${movieId}`}>
            <Image
              src={movie.artworkUrl100}
              alt={movie.trackName}
              width={100}
              height={100}
              className="rounded-lg h-full w-auto"
            />
          </Link>
        </div>

        <div className="flex flex-col justify-evenly items-start w-[50%] h-[20vh] overflow-hidden">
          <h2 className="text-sm sm:text-lg font-semibold">{movie.trackName}</h2>
          <p className="text-xs sm:text-sm text-textSecondary">
            {movie.shortDescription}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-[20%]">
        <Image
          src={isFavorite(movieId) ? "/favoriteFilled.svg" : "/favorite.svg"}
          alt={isFavorite(movieId) ? "Remove from favorites" : "Add to favorites"}
          width={30}
          height={30}
          className="cursor-pointer"
          onClick={() => isFavorite(movieId) ? removeFavorite(movieId) : addFavorite(movieId)}
          role="button"
          tabIndex={0}
        />
        <span className="mx-2 cursor-default">Favorite</span>
      </div>
    </article>
  )
}