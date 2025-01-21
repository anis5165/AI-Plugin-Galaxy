'use client'
import Link from 'next/link'; // Import Link from next/link
import { useParams } from 'next/navigation';
import { CodeBlock } from "react-code-blocks";
import { FaCopy } from 'react-icons/fa';
import copy from 'copy-to-clipboard';

const HGDocumentation = () => {



  const myCustomTheme = {
    backgroundColor: 'black',
    textColor: 'white',
    keywordColor: "#0077ff",

  }

  const code = '<script src="main.js"></script>';
  const language = 'javascript';

  return (
    <>
      <div className='flex items-center justify-center bg-cover bg-[url("/ai-bg.jpg")] w-full'>
        <div className='lg:w-4/5 font-mono min-h-screen text-white'>
          <div className='px-5 sm:px-14 md:pl-14 md:pr-36'>
            <div className=''>
              <h2 className='md:pl-20 text-[#d8dbdb] text-3xl sm:text-4xl pt-10 hover:motion-preset-typewriter hover:motion-duration-1500 font-bold'>Getting Started With Hand Gesture</h2>
              <h2 className='md:pl-20 pt-16 text-[#d8dbdb] text-xl'><span className='text-xl'>1.</span> Introduction</h2>
              <p className='pl-8 md:pl-28 pt-2 text-[#94A3B8]'>Object detection in React using TensorFlow involves integrating TensorFlow.js, a JavaScript library for machine learning, to enable real-time identification and localization of objects in images or video streams within a web application. By loading pre-trained models such as COCO-SSD or MobileNet, developers can leverage TensorFlow's prediction capabilities directly in the browser without requiring a backend server. HTML5 elements like `` or `` are used for media capture, and the detection results, including object labels and bounding boxes, are rendered dynamically using React's state or DOM manipulation. This approach is ideal for creating interactive, AI-powered web experiences such as real-time video analytics or augmented reality applications.
              </p>
            </div>
            <div className='pt-10'>
              <div className='text-[#d8dbdb]'>
                <h2 className='md:pl-20 text-xl'><span className=''>2.</span> Getting Started</h2>
                <div className='pl-8 md:pl-28'>
                  <h2 className='text-lg'>2.1 Prequisites</h2>
                  <p className='pl-8 md:pl-10 text-[#94A3B8]'>Before you start, make sure you have the following:</p>
                  <p className='pl-8 md:pl-14 text-[#94A3B8]'>(a) A project using HTML, CSS, and JavaScript. <br />
                  (b) Basic knowledge of React (optional, but recommended). <br />
                  (c) Internet connection to load the external script.
                  </p>
                </div>
              </div>
              <div className='text-[#d8dbdb] pt-10'>
                <h2 className='md:pl-20 text-xl'><span className=''>3.</span> Installation</h2>
                <div className='pl-8 md:pl-28'>
                  <h2 className='text-lg'>3.1 Include the script</h2>
                  <p className='pl-8 md:pl-10 text-[#94A3B8]'>To use the AI components, include the following <b>script</b> tag in the <b>head</b> section of your HTML file:
                  </p>
                </div>
              </div>
              <div className='text-[#d8dbdb] pt-10'>
                <h2 className='md:pl-20 text-xl'><span className=''>4.</span> Usage</h2>
                <div className='pl-8 md:pl-28'>
                  <h2 className='text-lg'>4.1 Include the script</h2>
                  <p className='pl-8 md:pl-10 text-[#94A3B8]'>To add an AI component, simply include the following <b>div</b> tag where you want the component to appear:
                  </p>
                </div>
              </div>
              <div className='text-[#d8dbdb] pt-10'>
                <h2 className='md:pl-20 text-xl'><span className=''>5.</span> Conclusion</h2>
                <div className='pl-8 md:pl-28 pb-20'>
                  <p className='text-[#94A3B8]'>Thank you for using AI Extensio! We hope this documentation helps you integrate our AI components easily. For any further assistance, feel free to contact us here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HGDocumentation;