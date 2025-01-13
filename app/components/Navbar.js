'use client'
import React from 'react'
import { HeartIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import DarkModeToggle from './DarkModeToggle'

const Navbar = () => {
    return (
        <>
            <div className='flex justify-around items-center h-16 bg-gray-400 sticky top-0 z-10' >

                <div>
                    <Link href="/" className="flex items-center">
                        <h1>Home</h1>
                    </Link>
                </div>

                <div>
                    <h2>Movie Management App</h2>
                </div>

                <div className='flex gap-5'>
                    <div>
                        <Link href="/favorites" className="flex items-center">
                            <HeartIcon className="h-10 w-10 text-red-500" />
                            <span>Favorites</span>
                        </Link>
                    </div>
                    <div><DarkModeToggle /></div>
                </div>

            </div>
        </>
    )
}

export default Navbar
