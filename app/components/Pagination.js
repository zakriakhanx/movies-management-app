'use client'
import { useMemo } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

// Constants
const DOTS = '...'          // Ellipsis symbol for page range
const VISIBLE_PAGES = 5     // Number of page buttons to show at once

const Pagination = ({ 
  totalMovies,     // Total number of movies
  moviesPerPage,   // Number of movies per page
  setCurrentPage,  // Function to update current page
  currentPage      // Current active page number
}) => {
  // Calculate total number of pages
  const totalPages = Math.ceil(totalMovies / moviesPerPage)

  // Generate page numbers with ellipsis using memoization to prevent unnecessary recalculations
  const pageRange = useMemo(() => {
    const range = []
    
    if (totalPages <= VISIBLE_PAGES) {
      // If total pages is less than visible count, show all pages
      for (let i = 1; i <= totalPages; i++) {
        range.push(i)
      }
    } else {
      // Calculate range with ellipsis for large number of pages
      const leftSiblingIndex = Math.max(currentPage - 1, 1)
      const rightSiblingIndex = Math.min(currentPage + 1, totalPages)

      const shouldShowLeftDots = leftSiblingIndex > 2
      const shouldShowRightDots = rightSiblingIndex < totalPages - 1

      if (!shouldShowLeftDots && shouldShowRightDots) {
        // Show more pages at start with right dots
        for (let i = 1; i <= 3; i++) {
          range.push(i)
        }
        range.push(DOTS)
        range.push(totalPages)
      } else if (shouldShowLeftDots && !shouldShowRightDots) {
        // Show more pages at end with left dots
        range.push(1)
        range.push(DOTS)
        for (let i = totalPages - 2; i <= totalPages; i++) {
          range.push(i)
        }
      } else if (shouldShowLeftDots && shouldShowRightDots) {
        // Show dots on both sides with current page in middle
        range.push(1)
        range.push(DOTS)
        range.push(currentPage - 1)
        range.push(currentPage)
        range.push(currentPage + 1)
        range.push(DOTS)
        range.push(totalPages)
      }
    }
    
    return range
  }, [totalPages, currentPage])

  // Handle page change with validation
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
      // Scroll to top when changing pages for better UX
      window.scrollTo(0, 0)
    }
  }

  // Handle keyboard navigation for accessibility
  const handleKeyDown = (e, page) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handlePageChange(page)
    }
  }

  return (
    <nav 
      className="flex justify-center items-center bg-background p-4"
      role="navigation"
      aria-label="Pagination Navigation"
    >
      <div className="flex items-center gap-2">
        {/* Previous page button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`p-2 rounded-md flex items-center justify-center
            ${currentPage === 1 
              ? 'text-gray-400 cursor-not-allowed' 
              : 'text-textPrimary hover:bg-accent'
            }`}
          aria-label="Go to previous page"
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </button>

        {/* Page numbers */}
        {pageRange.map((pageNumber, index) => (
          <button
            key={index}
            onClick={() => pageNumber !== DOTS && handlePageChange(pageNumber)}
            onKeyDown={(e) => pageNumber !== DOTS && handleKeyDown(e, pageNumber)}
            disabled={pageNumber === DOTS}
            aria-current={pageNumber === currentPage ? 'page' : undefined}
            aria-label={pageNumber === DOTS 
              ? 'More pages' 
              : `Go to page ${pageNumber}`
            }
            className={`h-10 w-10 rounded-md flex items-center justify-center transition-colors
              ${pageNumber === currentPage 
                ? 'bg-accent text-textPrimary font-medium' 
                : pageNumber === DOTS
                  ? 'cursor-default'
                  : 'hover:bg-surface text-textPrimary'
              }`}
          >
            {pageNumber}
          </button>
        ))}

        {/* Next page button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`p-2 rounded-md flex items-center justify-center
            ${currentPage === totalPages 
              ? 'text-gray-400 cursor-not-allowed' 
              : 'text-textPrimary hover:bg-accent'
            }`}
          aria-label="Go to next page"
        >
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </div>
    </nav>
  )
}

export default Pagination
