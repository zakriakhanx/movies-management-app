'use client'
import { createContext, useContext, useState, useCallback, useEffect } from "react"
import axios from "axios"

// Create context for managing movie data globally
const MoviesContext = createContext()

export const MoviesProvider = ({ children }) => {
  // State for storing movie data and UI states
  const [movieData, setMovieData] = useState([])  // Stores the list of movies
  const [isLoading, setIsLoading] = useState(true)  // Tracks loading state during API calls
  const [error, setError] = useState(null)  // Stores any error messages

  // Memoized function to fetch movie data from the API
  // Uses useCallback to prevent unnecessary re-renders
  const getMovieData = useCallback(async () => {
    // Reset states before making the API call
    setIsLoading(true)
    setError(null)

    try {
      // Create an AbortController to cancel the request if needed
      const controller = new AbortController()
      
      // Make the API call with timeout and cancellation support
      const response = await axios.get('/api/itunes/search?term=movies', {
        signal: controller.signal,  // For request cancellation
        timeout: 5000  // Request will timeout after 5 seconds
      })
      
      // Validate the response data structure
      if (!response.data?.results) {
        throw new Error('Invalid response format')
      }

      // Update the movie data state with the API response
      setMovieData(response.data.results)
      
      // Return cleanup function to abort the request if needed
      return () => controller.abort()
    } catch (error) {
      // Don't set error state if the request was intentionally cancelled
      if (error.name === 'AbortError') return
      
      // Set appropriate error message based on the error type
      setError(
        error.response?.data?.message ||  // Use server error message if available
        error.message ||  // Use JS error message as fallback
        'Failed to fetch movies'  // Default error message
      )
    } finally {
      // Always hide loading state after request completes or fails
      setIsLoading(false)
    }
  }, [])

  // Fetch movie data when the component mounts
  useEffect(() => {
    const cleanup = getMovieData()
    // Cleanup function to cancel any ongoing requests when component unmounts
    return () => cleanup && cleanup()
  }, [getMovieData])

  // Context value object containing all the data and functions
  // to be provided to consuming components
  const value = {
    movies: movieData,      // The list of movies
    isLoading,             // Loading state for UI feedback
    error,                 // Error state for error handling
    refetch: getMovieData  // Function to manually refresh data
  }

  return (
    <MoviesContext.Provider value={value}>
      {children}
    </MoviesContext.Provider>
  )
}

// Custom hook to consume the movies context
// Provides type-safety and ensures the context is used correctly
export const useMovies = () => {
  const context = useContext(MoviesContext)
  
  // Throw error if hook is used outside of MoviesProvider
  if (context === undefined) {
    throw new Error('useMovies must be used within a MoviesProvider')
  }
  
  return context.movies // Return just movies array for backward compatibility
}