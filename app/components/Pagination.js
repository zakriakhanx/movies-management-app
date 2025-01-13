import React from 'react'

const Pagination = ({totalMovies, moviesPerPage, setCurrentPage, currentPage}) => {
    let pages = []

    for(let i = 1; i<= Math.ceil(totalMovies/moviesPerPage); i++){
        pages.push(i)
    }

  return (
    <div className='flex justify-center items-center'>
      {
        pages.map((page, index)=>{
            return <button className={`h-10 w-10 bg-gray-800 text-white m-5 ${page == currentPage? 'bg-yellow-600 text-black' : ''}`} key={index} onClick={()=> setCurrentPage(page)}>{page}</button>
        })
      }
    </div>
  )
}

export default Pagination
