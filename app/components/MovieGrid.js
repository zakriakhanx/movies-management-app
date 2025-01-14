import React from 'react'
import MovieCard from './MovieCard'

// MovieGrid component displays a grid of MovieCards using provided movieData

const MovieGrid = ({movieData}) => {

    return (
        <div className="relative bg-background w-full h-auto p-10 flex justify-center items-center">

            {/* Decorative border line at the top of the grid */}
            <div className="absolute top-0 w-full h-1 bg-border"></div>

            {/* Grid container for displaying MovieCard components */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-16 w-full'>

                {/* Map through the movieData array and render a MovieCard for each movie */}
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
