'use client'
import { useState } from 'react'
import ReactPlayer from 'react-player'
import { ExclamationCircleIcon } from '@heroicons/react/24/solid'

export const VideoPlayer = ({ url }) => {
  const [hasError, setHasError] = useState(false)

  if (!url) {
    return (
      <div className="bg-black flex justify-center items-center w-auto h-[40vh]">
        <p className="text-gray-400">No preview available</p>
      </div>
    )
  }

  return (
    <div className="bg-black flex justify-center items-center w-auto h-[40vh]">
      {!hasError ? (
        <ReactPlayer
          url={url}
          width="100%"
          height="100%"
          controls={true}
          playing={false}
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="flex flex-col items-center justify-center text-white">
          <ExclamationCircleIcon className="h-10 w-10 text-red-500" />
          <p className="text-lg text-gray-400">Unable to load the video.</p>
          <button
            className="mt-4 bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-600"
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </div>
      )}
    </div>
  )
}