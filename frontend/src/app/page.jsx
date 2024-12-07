'use client';
import React from 'react'
import Link from 'next/link';
import Footer from "./footer";
import { Slide, Fade } from "react-awesome-reveal";

const Home = () => {
  return (
    <>

      <div className='bg-[url("/ai-bg.jpg")] bg-cover text-white font-mono'>
        {/* hero section  */}
        <div className=' text-white '>
          <Slide duration={400} direction='up' delay={100}>
            <div className='py-40 md:py-40 flex flex-col justify-center items-center'>
              <img src="/logo12.png" className='h-32 w-32' />
              <h1 className='text-2xl font-mono font-semibold text-center md:text-5xl'>AI PLUGIN GALAXY</h1>
              <h3 className='text-slate-300 text-sm md:text-xl pt-3 font-mono px-10 md:px-52 text-center'>AI Plugin Galaxy is an extension hub that centralizes a wide range of AI plugins, enabling seamless integration and enhanced functionality for AI-powered applications. It offers developers and users an ecosystem to discover, install, and manage tools efficiently.</h3>
            </div>
          </Slide>
        </div>


        {/* about us  */}
        <div>
            <div className='pb-24 md:py-20'>

              <div className='md:gap-24 md:flex md:justify-between md:items-center px-10 md:px-24'>
                <video src="logo.mp4" autoPlay loop className='hidden md:block'></video>
                <div className=''>
                  <h2 className='text-center text-5xl font-semibold font-mono'>ABOUT</h2>
                  <p className='text-justify font-mono pt-10'>Welcome to AI Plugin Galaxy, your one-stop destination for exploring a universe of cutting-edge AI-powered plugins and extensions. Our platform offers a diverse collection of tools designed to seamlessly integrate with your projects, enhancing functionality and simplifying complex tasks. From object detection and hand gesture recognition to advanced AI-based utilities, we provide solutions that empower developers, creators, and businesses alike.</p> <br />

                  <p className='hidden md:block text-justify'> At AI Plugin Galaxy, we are dedicated to delivering innovative, user-friendly, and highly adaptable plugins that harness the power of artificial intelligence. Whether you're building applications, working on interactive systems, or exploring new possibilities in AI, our curated collection is here to fuel your creativity and productivity. </p> <br />

                  <p className='text-justify'> Discover the future of AI tools—explore AI Plugin Galaxy today!</p>
                  <button className='pt-5'><Link href="/about" className='p-3 rounded-lg shadow-lg shadow-[#661557] hover:border hover:border-[#7d316f]'>Read More</Link></button>
                </div>
              </div>
            </div>
        </div>


        {/* features section  */}

        <div>
          <div>
            <div>
              <div>

              </div>
            </div>
          </div>
        </div>
      </div >
      <Footer />
    </>

  )
}

export default Home;