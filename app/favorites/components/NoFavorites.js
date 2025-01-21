'use client'

export const NoFavorites = () => {
  return (
    <div className="flex items-center justify-center border-2 border-border p-5 bg-background text-textPrimary rounded-lg shadow w-full">
      <p className="text-center">
        No favorite movies found. Please add some to your favorites list.
      </p>
    </div>
  )
}