'use client'
import React from 'react'
import { HeartIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import DarkModeToggle from './DarkModeToggle'

// Navbar component displays the navigation bar for the application

const Navbar = () => {
    return (
        <>
            <div className='flex justify-around items-center h-[10vh] bg-background sticky top-0 z-10 text-textPrimary p-3' >

                {/* Home button linking to the main page */}
                <div>
                    <Link href="/" className="flex items-center">
                        <button className='bg-primary active:bg-secondary border-border border-[1px] w-20 h-10 rounded-md text-md text-textPrimary'>
                            Home</button>
                    </Link>
                </div>

                {/* App title displayed in the center */}
                <div className='font-semibold text-xs text-center min-w-20 p-2 sm:text-lg'>
                    <h2>Movie Management App</h2>
                </div>

                {/* Favorites icon and dark mode toggle button */}
                <div className='flex gap-2 sm:gap-5'>

                    {/* Favorites link with icon */}
                    <div>
                        <Link href="/favorites" className="flex flex-col items-center">
                            <HeartIcon className="h-8 w-8 text-primary active:text-secondary" />
                            <span className='text-xs'>Favorites</span>
                        </Link>
                    </div>

                    {/* Dark mode toggle button */}
                    <div><DarkModeToggle /></div>

                </div>

                {/* Decorative border line at the bottom of the navbar */}
                <div className="absolute bottom-0 w-full h-1 bg-border"></div>

            </div>
        </>
    )
}

export default Navbar
