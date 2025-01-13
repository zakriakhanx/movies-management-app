import React from 'react'
import MovieCard from './MovieCard'
// import { useMovies } from '../contextAPI/MoviesContext'

const MovieGrid = ({movieData}) => {

    // const movieData = useMovies();

    return (
        <div className=" bg-background w-full h-auto p-10 flex justify-center items-center">
            <div className='grid grid-cols-4 gap-16 w-[80vw]'>

                {movieData.map((movie) => {
                    return (
                    <MovieCard
                     key={movie.trackId}
                     trackId={movie.trackId}
                     artwork={movie.artworkUrl100}
                     trackName={movie.trackName}
                     genre={movie.primaryGenreName}
                      />
                    )
                }
            )}

            </div>
        </div>
    )
}

export default MovieGrid
