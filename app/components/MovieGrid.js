import React from 'react'
import MovieCard from './MovieCard'

const MovieGrid = () => {
    return (
        <div className=" bg-white w-full h-auto p-10 flex justify-center items-center">
            <div className='grid grid-cols-4 gap-16 w-[80vw]'>
                <MovieCard />
            </div>
        </div>
    )
}

export default MovieGrid
