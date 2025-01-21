'use client'
import Image from 'next/image'

export const FavoriteButton = ({ movieId, isFavorite: isFav, onToggle }) => {
  return (
    <div className="mb-5 flex items-center">
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
      <h2 className="mx-2 cursor-default">Favorite</h2>
    </div>
  )
}