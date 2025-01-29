'use client'
import MovieGrid from '@/app/components/MovieGrid'
import Image from 'next/image'
import Link from 'next/link'

export const RelatedMovies = ({ movies = [] }) => {
  if (!movies.length) return null

  return (
    <section>
      <h2 className="text-xl sm:text-3xl text-textPrimary p-5">Related Movies</h2>
      <MovieGrid movieData={movies}/>
    </section>
  )
}