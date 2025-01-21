'use client'

export const MovieDetails = ({ movie }) => {
  if (!movie) return null

  return (
    <div className="w-1/2 break-words">

      <h1 className="text-4xl mb-5 sm:font-semibold">{movie.trackName}</h1>
      
      <div className="mt-6 text-textSecondary">
        <h2 className="mb-2">Director: {movie.artistName}</h2>
        <h2 className="mb-2">Genre: {movie.primaryGenreName}</h2>
        <h2 className="mb-2">Release Date: {movie.releaseDate.split("T")[0]}</h2>
        <h2 className="mb-2">Price: ${movie.trackPrice}</h2>
      </div>

      <p className="text-textPrimary">{movie.longDescription}</p>
      
    </div>
  )
}