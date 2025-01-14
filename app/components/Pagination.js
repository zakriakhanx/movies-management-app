import React from 'react'

// Pagination component for navigating between pages of movies

const Pagination = ({ totalMovies, moviesPerPage, setCurrentPage, currentPage }) => {
  let pages = []

  // Calculate the total number of pages and populate the pages array
  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pages.push(i)
  }

  return (
    <div className='flex justify-center items-center bg-background'>
      {
        // Map through the pages array to render a button for each page
        pages.map((page, index) => {
          return <button
            className={`h-10 w-10 bg-primary text-textPrimary dark:text-[#1D3557] m-2 sm:m-5
            ${page == currentPage ? 'bg-yellow-600' : ''}`} 
            key={index}
            onClick={() => setCurrentPage(page)}> {/* Set the current page on button click */}
            {page} {/* Display the page number */}
          </button>
        })
      }
    </div>
  )
}

export default Pagination
