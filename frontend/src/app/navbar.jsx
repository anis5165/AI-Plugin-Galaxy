'use client';
import Link from 'next/link';
import { useState } from 'react';
import useAppContext from '@/context/appContext';

export const Navbar = () => {
  const { loggedIn, logout } = useState(); // Adjusted: Properly fetch `loggedIn` and `logout` from context
  const [active, setActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for dropdown menu

  const handleClick = () => setActive(!active);
  const toggleMenu = () => setMenuOpen(!menuOpen); // Toggle dropdown menu

  return (
    <>
      <nav className="font-mono bg-[#0E012D] text-white flex items-center flex-wrap px-2 md:px-16">
        <div className="w-24 px-2 md:px-0 animate-pulse">
          <img className="pt-2 h-16 w-16" src="logo12.png" alt="Logo" />
        </div>
        <button
          className="inline-flex p-3 rounded lg:hidden ml-auto outline-none"
          onClick={handleClick}
        >
          <span className="text-white text-3xl">☰</span> {/* Simple hamburger icon */}
        </button>
        <div
          className={`${
            active ? 'rounded-xl' : 'hidden'
          } w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="gap-4 lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
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

            <div className="relative">
              <button
                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:text-gray-500"
                onClick={toggleMenu}
              >
                Extensions
              </button>
              {menuOpen && (
                <div className="absolute bg-[#1E013D] text-white rounded shadow-lg mt-2">
                  <Link
                    href="/extensionss/feature1"
                    className="block px-4 py-2 hover:bg-gray-700"
                  >
                    Feature 1
                  </Link>
                  <Link
                    href="/extensionss/feature2"
                    className="block px-4 py-2 hover:bg-gray-700"
                  >
                    Feature 2
                  </Link>
                  <Link
                    href="/extensionss/feature3"
                    className="block px-4 py-2 hover:bg-gray-700"
                  >
                    Feature 3
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/contactus"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:text-gray-500"
            >
              Contact Us
            </Link>

            {loggedIn ? (
              <button
                onClick={logout}
                className="lg:inline-flex lg:w-auto w-full px-3 py-2 shadow-lg shadow-[#661557] rounded-lg items-center justify-center hover:border hover:border-[#7d316f]"
              >
                LogOut
              </button>
            ) : (
              <Link
                href="/login"
                className="lg:inline-flex lg:w-auto w-full px-3 py-2 shadow-lg shadow-[#661557] rounded-lg items-center justify-center hover:border hover:border-[#7d316f]"
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