'use client'
import React from 'react'
import { HeartIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import DarkModeToggle from './DarkModeToggle'

const Navbar = () => {
    return (
        <>
            <div className='relative flex justify-around items-center h-16 bg-background sticky top-0 z-10 text-textPrimary' >

                <div>
                    <Link href="/" className="flex items-center">
                        <button className='bg-primary active:bg-secondary border-border border-[1px] w-20 h-10 rounded-md text-md text-textPrimary'>Home</button>
                    </Link>
                </div>

                <div>
                    <h2>Movie Management App</h2>
                </div>

                <div className='flex gap-5'>
                    <div>
                        <Link href="/favorites" className="flex items-center">
                            <HeartIcon className="h-10 w-10 text-primary active:text-secondary" />
                            <span>Favorites</span>
                        </Link>
                    </div>
                    <div><DarkModeToggle /></div>
                </div>

                <div className="absolute bottom-0 w-full h-1 bg-border"></div>

            </div>
        </>
    )
}

export default Navbar
