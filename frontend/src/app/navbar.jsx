'use client';
import Link from 'next/link';
import { useState } from 'react';
import useAppContext from '@/context/appContext';

export const Navbar = () => {
  const { loggedIn, logout } = useAppContext(); // Adjusted: Properly fetch `loggedIn` and `logout` from context
  const [active, setActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for dropdown menu

  const handleClick = () => setActive(!active);
  const toggleMenu = () => setMenuOpen(!menuOpen); // Toggle dropdown menu

  return (
    <>
      <nav className="text-white flex items-center flex-wrap px-2 md:px-20">
        <div className="w-24 px-2 md:px-0 animate-pulse">
          <img className="pt-2 h-16 w-16" src="/logo12.png" alt="Logo" />
        </div>
        <button
          className="inline-flex p-3 rounded lg:hidden ml-auto outline-none"
          onClick={handleClick}
        >
          <span className="text-white text-3xl">☰</span> {/* Simple hamburger icon */}
        </button>
        <div
          className={`${active ? 'rounded-xl' : 'hidden'
            } w-full text-center lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="gap-4 lg:font-normal font-light tracking-tighter lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
            <Link
              href="/"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:text-gray-500"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:text-gray-500"
            >
              About Us
            </Link>
            <Link
              href="/extensionss"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:text-gray-500"
            >
              Extensions
            </Link>


            <Link
              href="/contactus"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:text-gray-500"
            >
              Contact Us
            </Link>

            {loggedIn ? (
              <button
                onClick={logout}
                className="lg:inline-flex lg:w-auto over w-full px-4 py-2 shadow-lg shadow-[#6463cb] rounded-lg items-center justify-center hover:border hover:border-[#6463cb]"
              >
                LogOut
              </button>
            ) : (
              <Link
                href="/login"
                className="lg:inline-flex lg:w-auto w-full px-3 py-2 shadow-lg shadow-[#6463cb] rounded-xl items-center justify-center hover:border hover:border-[#6463cb]"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
