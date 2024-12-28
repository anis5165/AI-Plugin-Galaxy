'use client';
import React from "react";
import { IoExtensionPuzzle } from "react-icons/io5";
import { FcViewDetails } from "react-icons/fc";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import axios from "axios";



const DocumenForm = () => {

    const documenForms = useFormik({
        initialValues: {
            extensionName: '',
            details: ''
        },
        onSubmit: (values, { resetForm }) => {
            console.log(values)

            axios.post('http://localhost:5000/extension/add', values)
                .then((result) => {
                    console.log(result.status)
                    resetForm()
                    toast.success('Successfully Send')
                }).catch((err) => {
                    console.log(err)
                    toast.error('Failed to send')
                });
        },
    })

    return (
        <>
            <div className='font-mono'>
                <div className='py-16 min-h-screen w-full fixed bg-[url("/ai-bg-23.jpg")] bg-cover flex justify-center items-center'>
                    <div className='border bg-[] shadow-md rounded-xl w-1/3 flex justify-center items-center py-16 px-20'>
                        <form onSubmit={documenForms.handleSubmit}>
                            <h2 className='pb-10 text-lg text-white'>Documentation Form</h2>
                            <div className='flex items-center pl-4 mb-3 bg-white rounded-full'>
                                <label htmlFor=""
                                    className='inline-block pr-6 border-r border-gray-50 w-5'
                                >
                                    <IoExtensionPuzzle size={20} />
                                </label>
                                <input
                                    type="text"
                                    id="extensionName"
                                    onChange={documenForms.handleChange}
                                    value={documenForms.values.extensionName}
                                    className='w-full pl-4 pr-6 py-4 font-bold placeholder-gray-900 rounded-r-full focus:outline-none'
                                    placeholder='Extension Name'
                                />
                            </div>

                            <div className='flex items-center pl-4 mb-3 bg-white rounded-full'>
                                <label htmlFor=""
                                    className='inline-block pr-6 border-r border-gray-50 w-5'
                                >
                                    <FcViewDetails size={25} />
                                </label>
                                <textarea
                                    id="details"
                                    onChange={documenForms.handleChange}
                                    value={documenForms.values.details}
                                    placeholder='Message'
                                    className='w-full pl-4 py-1 font-bold placeholder-gray-900 rounded-r-full focus:outline-none'
                                ></textarea>
                            </div>
                            <div className='mt-5'>
                                <button type="submit" className='bg-white text-center w-full p-3 rounded-lg shadow-lg shadow-[#3e363e] hover:border hover:border-[#000000]'>Get Started</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default DocumenForm