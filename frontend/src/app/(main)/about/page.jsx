'use client';
import React from 'react'
import Link from 'next/link';

const About = () => {
    return (
        <>
            <div>
                <div className='pb-16 md:py-0 font-mono min-h-screen bg-gradient-to-t from-black to-[#0E012D] bg-cover'>
                    <div className=''>
                        <h2 className='text-center py-10 text-white text-xl px-10 md:text-4xl font-bold'>About AI Plugin Galaxy</h2>
                    </div>
                    <div className='text-white px-10 md:px-24 text-md md:text-xl text-justify'>
                        <span>

                            <p className='py-5'> Welcome to "AI Plugin Galaxy", your ultimate hub for exploring, discovering, and integrating cutting-edge AI plugins into your workflows. At AI Plugin Galaxy, we are passionate about simplifying the way individuals and businesses harness the power of artificial intelligence.</p>

                            <p className='pb-5'>Our platform serves as a comprehensive directory and marketplace for AI plugins tailored to diverse needs—whether you're enhancing productivity, building smarter apps, automating complex tasks, or unlocking creative possibilities. From chatbots and natural language processing to image generation and data analytics, we curate the best tools to help you transform ideas into action.</p>

                            <p className='pb-3 md:pb-0'>"Why Choose AI Plugin Galaxy?""</p>
                            <p className='pb-3 md:pb-0'>- **Diverse Library**: Discover an extensive range of AI plugins across industries and use cases.</p>
                            <p className='pb-3 md:pb-0'>- **Seamless Integration**: Find plugins designed to integrate effortlessly with popular platforms and technologies.</p>
                            <p className='pb-3 md:pb-0'>- **Expert Guidance**: Access resources, tutorials, and support to make the most of each tool.</p>
                            <p className='pb-3 md:pb-0'>- **Community-Driven**: Join a thriving community of innovators and developers pushing the boundaries of AI.</p>

                            <p className='py-5'>Whether you’re a developer, entrepreneur, or enthusiast, AI Plugin Galaxy is here to help you navigate the universe of AI technology and take your projects to the next level.</p>

                            <p>Explore. Innovate. Transform. Welcome to the Galaxy of Possibilities! <button className='py-2 px-3 rounded-lg shadow-lg shadow-[#661557] hover:border hover:border-[#661557]'><Link href="/">Continue..</Link></button> </p>
                        </span>

                    </div>
                </div>
            </div>
        </>
    )
}

export default About