'use client';
import React from 'react'
import Link from 'next/link';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <>
            <div>
                <div className='md:py-0 min-h-screen '>
                    <div className=''>
                        <motion.h2
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                            className='text-center pt-16 text-white text-xl px-10 md:text-6xl font-bold'>About</motion.h2>
                        <motion.h2
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className='text-center pb-10 text-[#6463cb] text-xl px-10 md:text-5xl font-bold'>AI Plugin Galaxy</motion.h2>
                    </div>
                    <div className='text-white px-10 md:px-48 text-md md:text-xl text-justify pb-16'>
                        <motion.span
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1.5, delay: 1.5 }}
                        >
                            <p className='py-5'> Welcome to "AI Plugin Galaxy", your ultimate hub for exploring, discovering, and integrating cutting-edge AI plugins into your workflows. At AI Plugin Galaxy, we are passionate about simplifying the way individuals and businesses harness the power of artificial intelligence.</p>

                            <p className='pb-5'>Our platform serves as a comprehensive directory and marketplace for AI plugins tailored to diverse needs—whether you're enhancing productivity, building smarter apps, automating complex tasks, or unlocking creative possibilities. From chatbots and natural language processing to image generation and data analytics, we curate the best tools to help you transform ideas into action.</p>

                            <p className='pb-3 md:pb-0'>Why Choose AI Plugin Galaxy?</p>
                            <p className='pb-3 md:pb-0'>- **Diverse Library**: Discover an extensive range of AI plugins across industries and use cases.</p>
                            <p className='pb-3 md:pb-0'>- **Seamless Integration**: Find plugins designed to integrate effortlessly with popular platforms and technologies.</p>
                            <p className='pb-3 md:pb-0'>- **Expert Guidance**: Access resources, tutorials, and support to make the most of each tool.</p>
                            <p className='pb-3 md:pb-0'>- **Community-Driven**: Join a thriving community of innovators and developers pushing the boundaries of AI.</p>

                            <p className='py-5'>Whether you’re a developer, entrepreneur, or enthusiast, AI Plugin Galaxy is here to help you navigate the universe of AI technology and take your projects to the next level.</p>

                            <p>Explore. Innovate. Transform. Welcome to the Galaxy of Possibilities! <button
                                className='py-2 mt-2 px-4 ml-3 rounded-xl shadow-lg shadow-[#6463cb] hover:border hover:border-[#6463cb]'><Link href="/">Continue..</Link></button> </p>

                            <p>Text "quoted" here</p>
                            <p>It&apos;s working</p>
                        </motion.span>

                    </div>
                </div>
            </div>
        </>
    )
}

export default About