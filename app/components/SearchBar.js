import React from 'react'
import Image from 'next/image'

const SearchBar = () => {
  return (
    <div className='w-full bg-black h-[40vh] flex items-center justify-center relative'>
        <img className='w-full h-[40vh] object-cover opacity-50' src="https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/PK-en-20250106-TRIFECTA-perspective_ac4f9910-e162-4463-9f26-4f7743230f6b_large.jpg" alt="" />

        <input className='bg-black text-white border-[1px] border-slate-100 absolute w-96 h-10 rounded-md px-3 opacity-80' type="text" />
        <button className='bg-red-700 text-white absolute w-40 h-10 rounded-md text-md bottom-14'>Search</button>

    </div>
  )
}

export default SearchBar
