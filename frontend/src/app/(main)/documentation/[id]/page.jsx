'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { CopyBlock, dracula } from 'react-code-blocks';
import { FaCopy, FaArrowRight } from 'react-icons/fa';
import { useParams } from 'next/navigation';
import axios from 'axios';
import toast from 'react-hot-toast';

const Documentation = () => {
  const router = useRouter();

  const { id } = useParams();
  const [extensionData, setExtensionData] = useState(null);

  const fetchExtensionData = async (values) => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/extension/getbyid/` + id, values)
      console.log(res.data)
      setExtensionData(res.data)
    } catch (error) {
      toast.error("Failed to fetch extension data.");
      console.log("Error fetching extension data:", error);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && !localStorage.getItem('user')) {
      router.push('/login');
    }
    fetchExtensionData();
  }, []);
  if(extensionData===null){
    return <h1>LOading...</h1>
  }

  return (
    <div className="flex flex-col items-center justify-center w-full text-white min-h-screen">
      <div className="lg:w-3/5 w-11/12">
        <header className="text-center mt-10 mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-[#6463cb] mb-4">
            Getting Started with {extensionData.extensionName}
          </h1>
          <p className="text-lg text-[#d8dbdb]">
            A step-by-step guide to integrating {extensionData.extensionName} using TensorFlow.js in your React application.
          </p>
        </header>

        <section className="space-y-12">

          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-[#d8dbdb] mb-4">1. Introduction</h2>
            <p className="text-[#94A3B8]">
              {extensionData.details}
            </p>
          </div>


          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-[#d8dbdb] mb-4">2. Getting Started</h2>
            <h3 className="text-xl text-[#d8dbdb] mb-2">2.1 Prerequisites</h3>
            <ul className="list-disc pl-6 text-[#94A3B8]">
              <li>A project using HTML, CSS, and JavaScript</li>
              <li>Basic knowledge of React (optional, but recommended)</li>
              <li>An internet connection to load the external script</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-[#d8dbdb] mb-4">3. Installation</h2>
            <p className="text-[#94A3B8]">No installation required. Just plug-and-play.</p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-[#d8dbdb] mb-4">4. Usage</h2>
            <h3 className="text-xl text-[#d8dbdb] mb-2">4.1 Include the Script</h3>
            <p className="text-[#94A3B8]">
              To add an AI component, simply include the following <b>div</b> tag where you want the component to appear:
            </p>
            <div className="mt-4">
              <CopyBlock 
              text={`${extensionData.extensionId} \n${extensionData.script}`}
                theme={dracula}
                language="html"
                showLineNumbers
              />
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-[#d8dbdb] mb-4">5. Conclusion</h2>
            <p className="text-[#94A3B8]">
              Thank you for using AI Extensio! We hope this documentation helps you integrate our AI components easily.
              For further assistance, feel free to contact us <Link href="/contactus" className="text-[#6463cb] underline">here</Link>.
            </p>
          </div>
        </section>
      </div>

      <div className="text-center mt-12 text-[#94A3B8]">
        © {new Date().getFullYear()} AI Extensio
      </div>
    </div>
  );
};

export default Documentation;
