'use client';
import React from 'react'
import Link from 'next/link';
import Footer from "./footer";
import Navbar from './navbar';
import { motion } from "framer-motion"
import logo from '../../public/logo12.png';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className=' md:px-10 text-white '>
        {/* hero section  */}
        <div className=' text-white '>
          <div className='py-40 md:py-40 flex flex-col justify-center items-center'>
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.5 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              whileDrag={{ scale: 0.9, rotate: 10 }}
              drag
              className='h-32 w-32'>
              <img src="/logo12.png" width={200} height={100} alt="Logo" />

            </motion.div>
            <motion.h1
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className='text-2xl font-semibold text-center md:text-5xl'>AI PLUGIN <span className='text-[#6463cb]'>GALAXY</span></motion.h1>
            <motion.h3
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className='text-slate-300 text-sm md:text-xl pt-3 px-10 md:px-12 lg:px-52 text-center'>Welcome to the documentation for AI Extensions! This guide will help you integrate our AI components into your own projects seamlessly. Our components are designed to be plug-and-play, requiring minimal setup.
            </motion.h3>
          </div>
        </div>


        {/* about us  */}
        <div className=''>
          <div className='pb-24 md:py-28 w-full'>
            <motion.h2
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.5 }}
              className='text-center text-2xl md:text-5xl mb-16 font-semibold '>ABOUT <span className='text-[#6463cb]'>US</span></motion.h2>
            <div className='md:gap-24 md:flex md:justify-between  md:items-center px-10 md:px-24'>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className='rounded-xl flex justify-center items-center lg:ml-36 ml-0'>
                <img 
                  src="/about.jpg" 
                  alt="About Us" 
                  width={500} 
                  height={300} 
                  // priority 
                  className='rounded-2xl shadow-2xl w-96' 
                />
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                className='md:w-1/2 w-fit'>
                <p className='pt-10 sm:pt-0'>Welcome to AI Plugin Galaxy, your one-stop destination for exploring a universe of cutting-edge AI-powered plugins and extensions. Our platform offers a diverse collection of tools designed to seamlessly integrate with your projects, enhancing functionality and simplifying complex tasks. From object detection and hand gesture recognition to advanced AI-based utilities, we provide solutions that empower developers, creators, and businesses alike.</p> <br />

                <p className='hidden md:block text-justify'> At AI Plugin Galaxy, we are dedicated to delivering innovative, user-friendly, and highly adaptable plugins that harness the power of artificial intelligence. Whether you're building applications, working on interactive systems, or exploring new possibilities in AI, our curated collection is here to fuel your creativity and productivity. </p> <br />

                <p className='text-justify'> Discover the future of AI tools—explore AI Plugin Galaxy today!</p>
                <button className='pt-5'><Link href="/about" className='p-3 rounded-xl shadow-lg shadow-[#6463cb] hover:border hover:border-[#6463cb]'>Read More</Link></button>
              </motion.div>
            </div>
          </div>
        </div>




        {/* features */}
        <section id="features" className="py-16">
          <div className="container mx-auto px-6 md:px-24">
            <h2 className="text-2xl md:text-5xl font-bold text-center mb-12">Key <span className='text-[#6463cb]'>Features</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 p-8 rounded-xl backdrop-blur-sm">
                <div className="w-16 h-16 bg-[#6463cb] rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Plug-and-Play</h3>
                <p className="text-gray-300">
                  Integrate our components in minutes with minimal configuration required.
                </p>
              </div>
              <div className="bg-white/5 p-8 rounded-xl backdrop-blur-sm">
                <div className="w-16 h-16 bg-[#6463cb] rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Customizable</h3>
                <p className="text-gray-300">
                  Tailor components to match your application's style and functionality needs.
                </p>
              </div>
              <div className="bg-white/5 p-8 rounded-xl backdrop-blur-sm">
                <div className="w-16 h-16 bg-[#6463cb] rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Secure</h3>
                <p className="text-gray-300">
                  Built with security in mind, ensuring your data remains private and protected.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}

        <div>

          <div className='pb-10'>
            <div>
              <section className="">
                <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                  <motion.h2
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.5 }}
                    className="text-center text-4xl font-bold tracking-tight text-gray-200 sm:text-5xl">
                    Read trusted reviews from our <span className='text-[#6463cb]'>Users</span>
                  </motion.h2>
                  <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 overflow-y-auto">
                    <blockquote className="rounded-lg bg-[] border p-6 shadow-sm sm:p-8">
                      <div className="flex items-center gap-4">
                        <img
                          alt="User"
                          src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                          width={500}
                          height={300}
                          // priority
                          className="size-14 rounded-full object-cover"
                        />

                        <div>
                          <div className="flex justify-center gap-0.5 text-green-500">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="size-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="size-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="size-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="size-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="size-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              />
                            </svg>
                          </div>

                          <p className="mt-0.5 text-lg font-medium text-[#CBD5E1]">Sandeep Yadav</p>
                        </div>
                      </div>

                      <p className="mt-4 text-[#CBD5E1]">
                        Time-Saver for Developers: AI Plugin Galaxy transforms project workflows. It’s easy to use, packed with versatile extensions, and ensures smooth AI adoption without any hassle.                      </p>
                    </blockquote>

                    <blockquote className="rounded-lg bg-[] border p-6 shadow-sm sm:p-8">
                      <div className="flex items-center gap-4">
                        <img
                          alt="User"
                          src="/sarthak.jpg"
                          width={500}
                          height={300}
                          // priority
                          className="size-14  rounded-full object-cover"
                        />

                        <div>
                          <div className="flex justify-center gap-0.5 text-green-500">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="size-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="size-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="size-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="size-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="size-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              />
                            </svg>
                          </div>

                          <p className="mt-0.5 text-lg font-medium text-[#CBD5E1]">Sarthak Verma</p>
                        </div>
                      </div>

                      <p className="mt-4 text-[#CBD5E1]">
                        All-in-One AI Solution: A perfect hub for developers. With a wide variety of plugins, it offers seamless AI integration. The intuitive interface ensures effortless usability.                      </p>
                    </blockquote>

                    <blockquote className="rounded-lg bg-[] border p-6 shadow-sm sm:p-8">
                      <div className="flex items-center gap-4">
                        <img
                          alt="User"
                          src="/priya.jpg"
                          width={500}
                          height={300}
                          // priority
                          className="size-14 rounded-full object-cover"
                        />

                        <div>
                          <div className="flex justify-center gap-0.5 text-green-500">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="size-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="size-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="size-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="size-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="size-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              />
                            </svg>
                          </div>

                          <p className="mt-0.5 text-lg font-medium text-[#CBD5E1]">Priyam Kesarwani</p>
                        </div>
                      </div>

                      <p className="mt-4 text-[#CBD5E1]">
                        Innovative and User-Friendly: AI Plugin Galaxy simplifies integrating AI into projects. The extensive hub of AI extensions makes it a breeze to find and implement tools, saving hours of development time. Highly recommended!                      </p>
                    </blockquote>
                  </motion.div>
                </div>
              </section>
            </div>
          </div>

        </div>

        {/* CTA Section */}
        <section className="py-28">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to enhance your application with AI?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of developers who are building smarter applications with AI Extensions.
            </p>
            <Link href="/extensionss" className="text-[#6463cb] hover:text-white shadow-xl shadow-[#6463cb] hover:border hover:border-[#6463cb] font-bold py-3 px-8 rounded-lg transition">
              Get Started Today
            </Link>
          </div>
        </section>

      </div >

      <Footer />
    </>

  )
}

export default Home;