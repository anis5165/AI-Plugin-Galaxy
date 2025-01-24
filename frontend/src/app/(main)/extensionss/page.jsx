'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import toast from 'react-hot-toast';
import { CiSearch } from "react-icons/ci";
import { useRouter } from 'next/navigation';


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


    const applysearch = (e) => {
        const value = e.target.value;
        setextensionData(extensionData.filter((extensionData)=> {
            return (extensionData.extensionName.toLowerCase().includes(value.toLowerCase()))
        }))
    }

      const router = useRouter();
    
      useEffect(() => {
        if (!localStorage.getItem('user')) {
          router.push('/login');
          return
        }
      }, [])
    
    return (
        <div className=''>
            <div className='mx-10 py-8'>
                <div className='text-center font-semibold mt-20 my-5'>
                    <h2 className='text-8xl text-white'>Extensions 24</h2>
                </div>
                <div className='flex flex-cols gap-3 justify-center items-center mb-16'>
                    <input type="search" 
                        id='exten'
                        className='py-3 pl-4 pr-28 rounded-lg outline-none'
                        placeholder='Search Extension'
                        onChange={applysearch}
                    />
                    <button className='bg-blue-600 py-3 px-4 rounded-lg text-white'><CiSearch size={25}/></button>
                </div>
                <div className='flex flex-col justify-between items-center md:mx-10'>
                    {extensionData.map((exten, index) => (
                    <div key={index} className='md:px-20 border bg-[] w-full md:w-4/5 shadow-xl my-3 rounded-2xl p-8 md:p-10 mt-10'>
                        <div className='md:flex md:justify-between'>
                            <div>
                                <h3 className='text-slate-100'>Extension</h3>
                                <h2 className='text-3xl text-white'>{exten.extensionName}</h2>
                            </div>
                        </div>
                        <p className='pt-8 md:pt-12 text-slate-400'>{exten.details}</p>
                        <div className='pt-6'>
                            <button className='bg-white text-center py-3 px-8 rounded-lg shadow-lg shadow-[#cbc3cb] hover:border hover:border-[#ebe8eb]'><Link href="/documentations/objectDetectionDocumentation">View Documentation</Link></button>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Documentation;
