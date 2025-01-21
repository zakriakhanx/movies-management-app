'use client'
import { useState, useMemo, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useMovies } from '../contextAPI/MoviesContext'
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'

// Constants for search configuration
const MAX_RESULTS = 5  // Maximum number of search results to display
const MIN_SEARCH_LENGTH = 2  // Minimum characters required to trigger search

const SearchBar = () => {
  // Get movie data from context
  const movieData = useMovies()

  // State management
  const [inputValue, setInputValue] = useState('')  // Search input text
  const [isOpen, setIsOpen] = useState(false)       // Dropdown visibility
  const [selectedIndex, setSelectedIndex] = useState(-1)  // Keyboard navigation index

  // Refs for DOM elements
  const searchRef = useRef(null)  // Reference to search container for click outside detection
  const inputRef = useRef(null)   // Reference to input element for focus management

  // Memoize search results to prevent unnecessary recalculations
  const matchingMovies = useMemo(() => {
    // Only search if input meets minimum length requirement
    if (inputValue.length < MIN_SEARCH_LENGTH) return []
    
    const searchTerm = inputValue.toLowerCase()
    return movieData
      .filter(movie => (
        // Search in both title and description
        movie.trackName.toLowerCase().includes(searchTerm) ||
        movie.longDescription?.toLowerCase().includes(searchTerm)
      ))
      .slice(0, MAX_RESULTS)  // Limit number of results
  }, [inputValue, movieData])

  // Handle clicks outside of search component
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false)  // Close dropdown when clicking outside
      }
    }

    // Add and remove event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Handle input changes
  const handleChange = (e) => {
    setInputValue(e.target.value)
    setIsOpen(true)  // Show dropdown when typing
    setSelectedIndex(-1)  // Reset selection
  }

  // Clear search input and reset states
  const handleClear = () => {
    setInputValue('')
    setIsOpen(false)
    setSelectedIndex(-1)
    inputRef.current?.focus()  // Return focus to input
  }

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (!matchingMovies.length) return

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        // Move selection down, but not past last item
        setSelectedIndex(prev => 
          prev < matchingMovies.length - 1 ? prev + 1 : prev
        )
        break
      case 'ArrowUp':
        e.preventDefault()
        // Move selection up, but not past first item
        setSelectedIndex(prev => prev > 0 ? prev - 1 : -1)
        break
      case 'Enter':
        // Navigate to selected movie
        if (selectedIndex >= 0) {
          window.location.href = `/movieDetails/${matchingMovies[selectedIndex].trackId}`
        }
        break
      case 'Escape':
        // Close dropdown
        setIsOpen(false)
        setSelectedIndex(-1)
        break
    }
  }

  return (
    <div className="w-full bg-background h-[40vh] flex items-center justify-center relative">
      {/* Hero background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className='w-full h-[40vh] object-cover opacity-50 absolute'
        src="https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/PK-en-20250106-TRIFECTA-perspective_ac4f9910-e162-4463-9f26-4f7743230f6b_large.jpg" alt="" />

      {/* Search container */}
      <div ref={searchRef} className="relative flex flex-col items-center gap-1">
        {/* Search input container */}
        <div className="relative flex items-center w-52 sm:w-96">
          {/* Search icon */}
          <MagnifyingGlassIcon className="absolute left-3 h-5 w-5 text-textSecondary" />
          
          {/* Search input */}
          <input
            ref={inputRef}
            className="bg-background text-textPrimary border-[1px] border-black h-10 rounded-md 
                     pl-10 pr-10 opacity-80 w-full focus:outline-none focus:ring-2 
                     focus:ring-accent focus:border-transparent"
            type="text"
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Search movies..."
            aria-label="Search movies"
            aria-controls="search-results"
            aria-activedescendant={selectedIndex >= 0 ? `result-${selectedIndex}` : undefined}
          />

          {/* Clear button - only show when there's input */}
          {inputValue && (
            <button
              onClick={handleClear}
              className="absolute right-3 text-textSecondary hover:text-textPrimary"
              aria-label="Clear search"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Search results dropdown */}
        {isOpen && (
          <div
            id="search-results"
            role="listbox"
            className="absolute top-full mt-1 w-52 sm:w-96 bg-background border-[1px] 
                     border-border rounded-md shadow-lg z-10 max-h-[60vh] overflow-y-auto"
          >
            {matchingMovies.length > 0 ? (
              // Map through matching movies
              matchingMovies.map((movie, index) => (
                <Link 
                  key={movie.trackId} 
                  href={`/movieDetails/${movie.trackId}`}
                >
                  <div
                    role="option"
                    id={`result-${index}`}
                    aria-selected={selectedIndex === index}
                    className={`flex items-center gap-3 p-2 hover:bg-accent cursor-pointer
                              ${selectedIndex === index ? 'bg-accent' : 'bg-surface'}`}
                  >
                    {/* Movie thumbnail */}
                    <Image
                      src={movie.artworkUrl100}
                      alt={movie.trackName}
                      width={40}
                      height={40}
                      className="rounded"
                    />
                    {/* Movie details */}
                    <div className="flex flex-col">
                      <span className="text-textPrimary font-medium">
                        {movie.trackName}
                      </span>
                      <span className="text-textSecondary text-sm">
                        {movie.primaryGenreName}
                      </span>
                    </div>
                  </div>
                </Link>
              ))
            ) : inputValue.length >= MIN_SEARCH_LENGTH ? (
              // Show when no results found
              <div className="p-3 text-textSecondary text-center">
                No results found
              </div>
            ) : (
              // Show when input is too short
              <div className="p-3 text-textSecondary text-center">
                Type at least {MIN_SEARCH_LENGTH} characters to search
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchBar
