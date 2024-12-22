import React from 'react'
import Link from 'next/link'

const NavBar = () => {
    return (
        <nav className='sticky top-0 left-0 z-[1000] p-[1rem] px-[3rem] w-full h-fit bg-[#1a1a1a] text-white flex flex-row justify-between items-center'>
            <Link href={'/'}>
                <button className='font-semibold text-xl hover:text-cyan-300 transition duration-200'>Scroll Fund</button>
            </Link>

            <ul className='flex flex-row gap-[2rem]'>
                <li className='text-neutral-200 hover:text-cyan-300 transition duration-200 cursor-pointer'>Charities</li>
                <li className='text-neutral-200 hover:text-cyan-300 transition duration-200 cursor-pointer'>Feed</li>
                <li className='text-neutral-200 hover:text-cyan-300 transition duration-200 cursor-pointer'>Profile</li>
            </ul>

            <div className="flex flex-row gap-2 w-fit">
                <Link href={'/signup'}>
                    <button className='text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-white dark:focus:ring-white px-4 py-2 rounded-full transition duration-200 text-sm'>Sign Up</button>
                </Link>

                <Link href={'/login'}>
                    <button className='text-white border-cyan-400 border-2 focus:ring-4 focus:outline-none focus:ring-white dark:focus:ring-white px-4 py-1.5 rounded-full transition duration-200 text-sm'>Login</button>
                </Link>
            </div>
        </nav>
    )
}

export default NavBar