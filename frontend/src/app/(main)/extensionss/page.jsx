'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import toast from 'react-hot-toast';
import { CiSearch } from "react-icons/ci";
import { useRouter } from 'next/navigation';

const Documentation = () => {
    const [extensionData, setExtensionData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const router = useRouter();

    // Fetch extensions data
    const fetchExtensionData = async () => {
        try {
            const res = await axios.get('http://localhost:5000/extension/getall');
            setExtensionData(res.data);
            setFilteredData(res.data); // Initialize filtered data
        } catch (error) {
            toast.error("Failed to fetch project data.");
            console.error("Error fetching project data:", error);
        }
    };

    useEffect(() => {
        fetchExtensionData();
    }, []);

    // Redirect to login if user is not authenticated
    useEffect(() => {
        if (!localStorage.getItem('user')) {
            router.push('/login');
            return;
        }
    }, [router]);

    // Apply search when button is clicked
    const applySearch = () => {
        setFilteredData(
            extensionData.filter((extension) =>
                extension.extensionName.toLowerCase().includes(searchInput.toLowerCase())
            )
        );
    };

    return (
        <div className="min-h-screen">
            <div className="mx-10 py-8">
                {/* Header */}
                <div className="text-center font-semibold mt-20 my-5">
                    <h2 className="md:text-8xl text-3xl text-white">
                        Extensions <span className="text-[#6463cb]">{filteredData.length}</span>
                    </h2>
                </div>

                {/* Search Bar */}
                <div className="flex flex-cols gap-3 justify-center items-center mb-16">
                    <input
                        type="search"
                        id="exten"
                        className="py-3 pl-4 md:pr-28 rounded-lg outline-none"
                        placeholder="Search Extension"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <button
                        className="bg-blue-600 py-3 px-4 rounded-lg text-white"
                        onClick={applySearch}
                    >
                        <CiSearch size={25} />
                    </button>
                </div>

                {/* Extensions List */}
                <div className="flex flex-col justify-between items-center md:mx-10">
                    {filteredData.length > 0 ? (
                        filteredData.map((extension, index) => (
                            <div
                                key={index}
                                className="lg:px-20 border w-full lg:w-4/5 shadow-xl my-3 rounded-2xl p-8 lg:p-10"
                            >
                                <div className="md:flex md:justify-between">
                                    <div>
                                        <h3 className="text-slate-100">Extension</h3>
                                        <h2 className="text-3xl text-white">{extension.extensionName}</h2>
                                    </div>
                                </div>
                                <div className='md:flex md:justify-between md:items-center md:gap-10'>
                                    <div className='py-3 flex justify-center'>
                                        <img src={extension.imageurl} className='w-96 rounded-xl' alt="" />
                                    </div>
                                    <div className='md:w-1/2'>
                                        <p className="pt-8 text-slate-400">{extension.details}</p>
                                    </div>
                                </div>
                                <div className="pt-6">
                                    <button className="bg-white text-center py-3 px-8 rounded-lg shadow-lg shadow-[#cbc3cb] hover:border hover:border-[#ebe8eb]">
                                        <Link href={`/documentation/${extension._id}`}>View Documentation</Link>
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-400">No extensions found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Documentation;
