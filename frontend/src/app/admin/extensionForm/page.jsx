'use client';
import React, { useEffect } from "react";
import { IoExtensionPuzzle } from "react-icons/io5";
import { FcViewDetails } from "react-icons/fc";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { FaLink } from "react-icons/fa";
import { IoIosCode } from "react-icons/io";



const DocumenForm = () => {

    const documenForms = useFormik({
        initialValues: {
            extensionName: '',
            details: '',
            imageurl: '',
            extensionId: '',
            script: '',
        },
        onSubmit: (values, { resetForm }) => {
            console.log(values)

            axios.post(`${process.env.NEXT_PUBLIC_API_URL}/extension/add`, values)
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

    const upload = (e) => {
        const file = e.target.files[0];
        const fd = new FormData();
        fd.append('file', file);
        fd.append('upload_preset', 'Mernbatch8')
        fd.append('colud_name', 'dgx8094we')

        axios.post('https://api.cloudinary.com/v1_1/dgx8094we/image/upload', fd)
            .then((result) => {
                toast.success('file upload successfully');
                // Set the imageurl in formik values automatically
                documenForms.setFieldValue('imageurl', result.data.secure_url);
                console.log(result.data);
            }).catch((err) => {
                console.log(err);
                toast.error('failed to upload file');
        });
    }

    const router = useRouter()

    useEffect(() => {
        if (!localStorage.getItem('admin')) {
            router.push('/login');
            return
        }
    }, [])
    return (
        <>
            <div className='  '>
                <div className='py-10 w-full flex justify-center items-center'>
                    <div className='border shadow-md rounded-xl w-1/3 flex justify-center items-center py-16 px-16'>
                        <form onSubmit={documenForms.handleSubmit}>
                            <h2 className='pb-10 text-lg text-white'>Documentation Form</h2>
                            <div className='flex items-center pl-4 mb-3 bg-white rounded-full'>
                                <label htmlFor=""
                                    className='inline-block pr-6 border-r border-gray-50 w-5'
                                >
                                    <IoExtensionPuzzle size={20} className="text-black" />
                                </label>
                                <input
                                    type="text"
                                    id="extensionName"
                                    onChange={documenForms.handleChange}
                                    value={documenForms.values.extensionName}
                                    className='w-full pl-4 pr-6 py-4 font-bold text-black rounded-r-full focus:outline-none'
                                    placeholder='Extension Name'
                                />
                            </div>
                            <div className='flex items-center pl-4 mb-3 bg-white rounded-full'>
                                <label htmlFor=""
                                    className='inline-block pr-6 border-r border-gray-50 w-5'
                                >
                                    <IoExtensionPuzzleOutline size={20} className="text-black"/>
                                </label>
                                <input
                                    type="text"
                                    id="extensionId"
                                    onChange={documenForms.handleChange}
                                    value={documenForms.values.extensionId}
                                    className='w-full pl-4 pr-6 py-4 font-bold text-black rounded-r-full focus:outline-none'
                                    placeholder='Extension Id'
                                />
                            </div>

                            <div className='flex items-center pl-4 mb-3 bg-white rounded-full'>
                                <label htmlFor=""
                                    className='inline-block pr-6 border-r border-gray-50 w-5'
                                >
                                    <IoIosCode size={25} className="text-black"/>
                                </label>
                                <input 
                                    type="text" 
                                    id="script"
                                    onChange={documenForms.handleChange}
                                    value={documenForms.values.script}
                                    className='w-full pl-4 pr-6 py-4 font-bold text-black rounded-r-full focus:outline-none'
                                    placeholder='script'
                                />
                            </div>
                            <div className='flex items-center pl-4 mb-3 bg-white rounded-full'>
                                <label htmlFor="upload"
                                    className='inline-block pr-6 border-r border-gray-50 w-5'
                                >
                                    <input type="file" onChange={upload} id="upload" hidden/><FaLink size={25} className="text-black"/>
                                
                                </label>
                                <input 
                                    type="text" 
                                    id="imageurl"
                                    onChange={documenForms.handleChange}
                                    value={documenForms.values.imageurl}
                                    className='w-full pl-4 pr-6 py-4 font-bold text-black rounded-r-full focus:outline-none'
                                    placeholder='Image'
                                />
                            </div>
                            <div className='flex items-center pl-4 mb-3 bg-white rounded-full'>
                                <label htmlFor=""
                                    className='inline-block pr-6 border-r border-gray-50 w-5'
                                >
                                    <FcViewDetails size={25} className="text-black"/>
                                </label>
                                <textarea
                                    id="details"
                                    onChange={documenForms.handleChange}
                                    value={documenForms.values.details}
                                    placeholder='Details'
                                    className='w-full pl-4 py-1 font-bold text-black rounded-r-full focus:outline-none'
                                ></textarea>
                            </div>
                            <div className='mt-5'>
                                <button type="submit" className='bg-white text-black text-center w-full p-3 rounded-lg shadow-lg shadow-[#3e363e] hover:border hover:border-[#000000]'>Get Started</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default DocumenForm