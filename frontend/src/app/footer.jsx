'use client';
import React from 'react'
import Link from 'next/link';
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
//bg-gradient-to-r from-indigo-500
//bg-gradient-to-r from-cyan-500 to-blue-500
const Footer = () => {
    return (
        <div className='font-mono'>
            <footer className='bg-gradient-to-t from-black to-[#0E012D] bg-cover text-white'>
                <div className='pt-5'>
                    <div className='flex justify-between items-center p-4 lg:px-24 md:px-5 md:py-5'>
                        <div className='hidden sm:block w-36'>
                            <img src="/logo12.png" width="" alt="" />
                        </div>
                        <div className=''>
                            <h2 className='mb-2 text-lg sm:text-3xl'>Contact us</h2>
                            <h3 className='text-gray-300 text-md mb-1 hover:text-gray-100'><span>+91 97297 06784</span></h3>
                            <h3 className='text-gray-300 text-md mb-1 hover:text-gray-100'><span>ryan51@tomorjerry.com</span></h3>
                            <h3 className='text-gray-300 text-md mb-1 hover:text-gray-100'><span>Lucknow, 226001</span></h3>
                            <h3 className='text-gray-300 text-md mb-1 hover:text-gray-100'><span>Mon-Fri: 10-20, Sun: 12-16</span></h3>
                        </div>
                        <div className='pl-2'>
                            <h2 className='mb-2 text-2xl'>Our Services</h2>
                            <h4 className='text-gray-300 text-md mb-1 hover:text-gray-100'><Link href="/">Home</Link></h4>
                            <h4 className='text-gray-300 text-md mb-1 hover:text-gray-100'><Link href="/about">About</Link></h4>
                            <h4 className='text-gray-300 text-md mb-1 hover:text-gray-100'><Link href="/contactus">Contact</Link></h4>
                            <h4 className='text-gray-300 text-md mb-1 hover:text-gray-100'><Link href="/extensionss">extension</Link></h4>
                        </div>
                        <div className='pl-2'>
                            <h2 className='mb-3 text-2xl'>Newsletter</h2>
                            <div className='flex gap-5'>
                                <input
                                    type="email"
                                    className='p-3 pr-2 rounded-xl text-black focus:outline-none'
                                    placeholder='Email Address'
                                />
                                <button className=''><Link href="/" className='py-3 px-4 rounded-lg shadow-lg shadow-[#661557] hover:border hover:border-[#7d316f]'>Subscribe</Link></button>
                            </div>
                            <div className='flex gap-1 pt-3'>
                                <FaInstagramSquare size={30} />
                                <Link href="https://x.com/anish_5165"><FaSquareXTwitter size={30} /></Link>
                                <FaFacebookSquare size={30} />
                                <FaSquareWhatsapp size={30} />
                                <Link href="https://www.linkedin.com/in/anish-kumar-4007a6255/"><FaLinkedin size={30} /></Link>
                            </div>
                        </div>
                    </div>
                    <div className='bg-gray-950 text-sm text-center p-4'>
                        <div className='px-4'>Copyright &copy; 2024 All rights reserved | Block is made with by <Link href="/"><span className='text-[#a7238f] hover:text-[#581c4d]'>AI-Plugin-Galaxy</span></Link></div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer