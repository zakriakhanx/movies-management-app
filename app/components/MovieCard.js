import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// MovieCard component displays individual movie information

const MovieCard = ({ trackId, trackName, artwork, genre }) => {
  
  //Original image is 100x100, we are updating it to 500x500
  function updateImageUrl(url) {
    return url.replace(/\/\d+x\d+bb\.jpg$/, '/400x400bb.jpg');
  }
  const artwork_url = updateImageUrl(artwork);

  return (
    // Wrap the entire card in a Link for navigation to the movie details page
    <Link href={`/movieDetails/${trackId}`}>

      <div
        className='flex flex-col items-center border-2 border-border p-2 text-textPrimary rounded-lg bg-surface shadow-2xl dark:shadow-md h-[100%]'>

        {/* Display the movie artwork using the Next.js Image component */}
        <Image
          src={artwork_url}
          alt={trackName}
          width={400}
          height={400}
          priority={true}
          className='w-full' />

        {/* Display the genre of the movie below the artwork */}
        <p className='text-textSecondary text-xs sm:text-base m-2'>{genre}</p>

        {/* Display the movie Name below the genre */}
        <h2 className='text-xs sm:text-base'>{trackName}</h2>

      </div>

    </Link>
  )
}


export default MovieCard
