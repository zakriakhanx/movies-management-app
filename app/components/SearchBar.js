import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const SearchBar = () => {
  return (
    <div className='w-full bg-background h-[40vh] flex items-center justify-center relative'>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className='w-full h-[40vh] object-cover opacity-50' src="https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/PK-en-20250106-TRIFECTA-perspective_ac4f9910-e162-4463-9f26-4f7743230f6b_large.jpg" alt="" />

      <div className='absolute flex flex-col items-center gap-2 '>
        <input className='bg-background text-textPrimary border-[1px] border-border h-10 rounded-md px-3 opacity-80 w-52 sm:w-96' type="text" />
        <button className='bg-primary active:bg-secondary border-border border-[1px] w-36 h-10 rounded-md text-md text-textPrimary'>Search</button>
      </div>

    </div>
  )
}

export default SearchBar
