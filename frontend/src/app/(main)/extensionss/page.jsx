'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import toast from 'react-hot-toast';

const Documentation = () => {
    const [extensionData, setextensionData] = useState([]);

    const fetchExtensionData = async () => {
        try {
            const res = await axios.get('http://localhost:5000/extension/getall');
            setextensionData(res.data);
        } catch (error) {
            toast.error("Failed to fetch project data.");
            console.error("Error fetching project data:", error);
        }
    };

    useEffect(() => {
        fetchExtensionData();
    }, []);

    return (
        <div className='bg-[url("/ai-bg-2.jpg")] bg-cover'>
            <div className='mx-10 py-8'>
                <div className='font-semibold'>
                    <h2 className='text-6xl text-white'>Extensions 24</h2>
                </div>
                <div className='flex flex-col justify-between items-center md:mx-10'>
                    {extensionData.map((exten) => (
                    <div className='md:px-20 border bg-[] w-full md:w-4/5 shadow-xl my-3 rounded-2xl p-8 md:p-10 mt-10'>
                        <div className='md:flex md:justify-between'>
                            <div>
                                <h3 className='text-slate-100'>Extension</h3>
                                <h2 className='text-3xl text-white'>{exten.extensionName}</h2>
                            </div>
                        </div>
                        <p className='pt-8 md:pt-12 text-slate-400'>{exten.details}</p>
                        <div className='pt-6'>
                            <button className='bg-white text-center py-3 px-8 rounded-lg shadow-lg shadow-[#cbc3cb] hover:border hover:border-[#ebe8eb]'><Link href="/documentation\[id]">View Documentation</Link></button>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Documentation;
