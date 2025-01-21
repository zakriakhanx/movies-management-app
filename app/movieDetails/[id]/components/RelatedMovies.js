'use client'
import Image from 'next/image'
import Link from 'next/link'

export const RelatedMovies = ({ movies = [] }) => {
  if (!movies.length) return null

  return (
    <section className="bg-background w-full h-auto p-10 flex flex-col justify-center">
      <h2 className="text-xl sm:text-3xl mb-10 text-textPrimary">Related Movies</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-16 w-full">
        {movies.map((movie) => (
          <Link key={movie.trackId} href={`/movieDetails/${movie.trackId}`}>
            <div className="flex flex-col items-center border-2 border-border p-2 text-textPrimary rounded-lg bg-surface shadow h-[100%]">
              <Image 
                src={movie.artworkUrl100} 
                alt={movie.trackName} 
                width={200} 
                height={200}
                className="w-full" 
              />
              <p className="text-textSecondary text-xs sm:text-base m-2">
                {movie.primaryGenreName}
              </p>
              <h3 className="text-xs sm:text-base">{movie.trackName}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}