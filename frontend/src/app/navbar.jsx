'use client';
import Link from 'next/link'
import { useState } from 'react'
import useAppContext from '@/context/appContext';

export const Navbar = () => {

  const { loggedIn, logout } = useAppContext();

  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }

  return (
    <>
      <nav className='font-mono bg-[#0E012D] text-white flex items-center flex-wrap px-2 md:px-16'>
        <div className='w-24 animate-pulse'><img className='pt-2 h-16 w-16' src="logo12.png" alt="" /></div>
        <button
          className='inline-flex p-3 rounded lg:hidden ml-auto outline-none'
          onClick={handleClick}
        >
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? 'rounded-xl ' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='gap-4 lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>

              <Link
               href="/"
               className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:text-gray-500'>
                Home
              </Link>

              <Link
               href="/about"
               className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:text-gray-500'>
                About Us
            </Link>

              <Link 
              href="/extensionss"
              className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:text-gray-500'>
                Extensions
              </Link>


              <Link
               href="/contactus"
               className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:text-gray-500'>
                Contact Us
              </Link>

              {loggedIn ? (
                <Link onClick={logout}
                href=""
                className='lg:inline-flex lg:w-auto w-full px-3 py-2 shadow-lg shadow-[#661557] rounded-lg items-center justify-center hover:border hover:border-[#7d316f]'>
                 LogOut
               </Link>
              ):(
                <Link
                href="/login"
                className='lg:inline-flex lg:w-auto w-full px-3 py-2 shadow-lg shadow-[#661557] rounded-lg items-center justify-center hover:border hover:border-[#7d316f]'>
                 Sign In
               </Link>
              )}

          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar