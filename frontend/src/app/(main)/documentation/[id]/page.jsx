'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';
import { CopyBlock, dracula } from 'react-code-blocks';
import axios from 'axios';
import toast from 'react-hot-toast';

const Documentation = () => {
  const router = useRouter();
  const { id } = useParams();
  const [extensionData, setExtensionData] = useState(null);

  const fetchExtensionData = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/extension/getbyid/${id}`);
      setExtensionData(res.data);
    } catch (error) {
      toast.error("Failed to fetch extension data.");
      console.log("Error fetching extension data:", error);
    }
  };

  useEffect(() => {
    fetchExtensionData();
    // eslint-disable-next-line
  }, [id]);

  if (extensionData === null) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#18181b]">
        <span className="text-xl text-[#a5b4fc] font-semibold animate-pulse">Loading...</span>
      </div>
    );
  }

  return (
    <main className="min-h-screen  flex flex-col items-center py-6 px-2">
      <div className="w-full max-w-4xl  rounded-2xl shadow-xl p-4 md:p-10">
        <header className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#818cf8] mb-3 leading-tight">
            Getting Started with {extensionData.extensionName}
          </h1>
          <p className="text-base md:text-lg text-[#d8dbdb]">
            A step-by-step guide to integrating <span className="font-semibold">{extensionData.extensionName}</span> using TensorFlow.js in your React application.
          </p>
        </header>

        <section className="space-y-8">
          {/* 1. Introduction */}
          <div className="bg-[#1F2937] rounded-xl p-5 md:p-7 shadow-md">
            <h2 className="text-xl md:text-2xl font-bold text-[#d8dbdb] mb-2">1. Introduction</h2>
            <p className="text-[#a1a1aa] text-base">{extensionData.details}</p>
          </div>

          {/* 2. Getting Started */}
          <div className="bg-[#1F2937] rounded-xl p-5 md:p-7 shadow-md">
            <h2 className="text-xl md:text-2xl font-bold text-[#d8dbdb] mb-2">2. Getting Started</h2>
            <h3 className="text-lg md:text-xl text-[#d8dbdb] mb-1">2.1 Prerequisites</h3>
            <ul className="list-disc pl-6 text-[#a1a1aa] space-y-1 text-base">
              <li>A project using HTML, CSS, and JavaScript</li>
              <li>Basic knowledge of React (optional, but recommended)</li>
              <li>An internet connection to load the external script</li>
            </ul>
          </div>

          {/* 3. Installation */}
          <div className="bg-[#1F2937] rounded-xl p-5 md:p-7 shadow-md">
            <h2 className="text-xl md:text-2xl font-bold text-[#d8dbdb] mb-2">3. Installation</h2>
            <p className="text-[#a1a1aa] text-base">No installation required. Just plug-and-play.</p>
          </div>

          {/* 4. Usage */}
          <div className="bg-[#1F2937] rounded-xl p-5 md:p-7 shadow-md">
            <h2 className="text-xl md:text-2xl font-bold text-[#d8dbdb] mb-2">4. Usage</h2>
            <h3 className="text-lg md:text-xl text-[#d8dbdb] mb-1">4.1 Include the Script</h3>
            <p className="text-[#a1a1aa] text-base">
              To add an AI component, simply include the following <b>div</b> tag where you want the component to appear:
            </p>
            <div className="mt-3 rounded-lg overflow-hidden border border-[#3b3b5c]">
              <CopyBlock
                text={`${extensionData.extensionId}\n${extensionData.script}`}
                theme={dracula}
                language="html"
                showLineNumbers={false}
                wrapLongLines
                codeBlock
              />
            </div>
          </div>

          {/* 5. Conclusion */}
          <div className="bg-[#1F2937] rounded-xl p-5 md:p-7 shadow-md">
            <h2 className="text-xl md:text-2xl font-bold text-[#d8dbdb] mb-2">5. Conclusion</h2>
            <p className="text-[#a1a1aa] text-base">
              Thank you for using <span className="font-semibold text-[#818cf8]">AI Extensio</span>! We hope this documentation helps you integrate our AI components easily.
              For further assistance, feel free to contact us{' '}
              <Link
                href="/contactus"
                className="text-[#818cf8] underline hover:text-[#6366f1] transition-colors"
              >
                here
              </Link>.
            </p>
          </div>
        </section>
      </div>

      <footer className="w-full text-center mt-10 text-[#a1a1aa] text-sm">
        © {new Date().getFullYear()} <span className="font-semibold text-[#818cf8]">AI Extensio</span>
      </footer>
    </main>
  );
};

export default Documentation;
