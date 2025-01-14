import React from 'react'

const Pagination = ({ totalMovies, moviesPerPage, setCurrentPage, currentPage }) => {
  let pages = []

  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pages.push(i)
  }

  return (
    <div className='flex justify-center items-center bg-background'>
      {
        pages.map((page, index) => {
          return <button
            className={`h-10 w-10 bg-primary text-textPrimary dark:text-[#1D3557] m-2 sm:m-5 ${page == currentPage ? 'bg-[#F4A261]' : ''}`}
            key={index}
            onClick={() => setCurrentPage(page)}>{page}</button>
        })
      }
    </div>
  )
}

export default Pagination
