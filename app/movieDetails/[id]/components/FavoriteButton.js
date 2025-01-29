'use client'
import Image from 'next/image'

export const FavoriteButton = ({ movieId, isFavorite: isFav, onToggle }) => {
  return (
    <div className="flex items-center justify-center bg-surface w-11 h-10 rounded-full shadow-md dark:shadow-md">
      <Image
        src={isFav ? "/favoriteFilled.svg" : "/favorite.svg"}
        alt={isFav ? 'Remove from favorites' : 'Add to favorites'}
        width={30}
        height={30}
        className="cursor-pointer"
        onClick={onToggle}
        role="button"
        tabIndex={0}
      />
    </div>
  )
}