import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const MovieCard = ({trackId, trackName, artwork}) => {

        return (
          <Link href={`/movieDetails/${trackId}`}>
          <div className='flex flex-col items-center border-2 border-border p-2 text-textPrimary rounded-lg bg-surface shadow h-[100%]'>
            <Image src={artwork} alt={trackName} width={200} height={200}
              className='w-full' />
            <h2>{trackName}</h2>
          </div>
          </Link>
        )
      }
    

export default MovieCard
