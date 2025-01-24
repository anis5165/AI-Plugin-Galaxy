'use client';
import React, { useEffect } from 'react'
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa6";
import axios from 'axios';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import { ImFileText } from "react-icons/im";
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';




const ConatctSchema = Yup.object().shape({
    fName: Yup.string()
        .required('First Name is Required'),

    email: Yup.string()
        .email('Please enter a vaild email address')
        .required('Email is Required'),

    details: Yup.string()
        .required('Details is Required')
})


const ContactUs = () => {

    const contactusForm = useFormik({
        initialValues: {
            fName: '',
            lName: '',
            email: '',
            details: ''
        },
        onSubmit: (values, { resetForm }) => {
            console.log(values)

            axios.post('http://localhost:5000/contact/add', values)
                .then((result) => {
                    console.log(result.status)
                    resetForm()
                    toast.success('Successfully Send')
                    router.push('/login')
                }).catch((err) => {
                    console.log(err)
                    toast.error('Failed to send')
                });
        },
        validationSchema: ConatctSchema
    })

      const router = useRouter();
    
      useEffect(() => {
        if (!localStorage.getItem('user')) {
          router.push('/login');
          return
        }
      }, [])

    return (
        <>
            <div className='font-mono'>
                <div className='py-16  flex justify-center items-center'>
                    <div className='border bg-[] shadow-md rounded-xl w-1/3 flex justify-center items-center py-16 px-16'>
                        <form onSubmit={contactusForm.handleSubmit}>
                            <h2 className='pb-10 text-lg text-white'>Conatct us</h2>
                            <div className='flex justify-between items-center gap-3'>
                                <div className='flex items-center pl-4 mb-3 bg-white rounded-full'>
                                    <label htmlFor=""
                                        className='inline-block pr-6 border-r border-gray-50 w-5'
                                    >
                                        <FaUser size={20} />
                                    </label>
                                    {contactusForm.errors.fName && contactusForm.touched.fName ? (
                                        <div className='text-red-600 text-sm'>{contactusForm.errors.fName}</div>
                                    ) : null}
                                    <input
                                        type="text"
                                        id='fName'
                                        onChange={contactusForm.handleChange}
                                        value={contactusForm.values.fName}
                                        className='w-full pl-1 pr-6 py-4 font-bold placeholder-gray-900 rounded-r-full focus:outline-none'
                                        placeholder='First Name'
                                    />
                                </div>

                                <div className='flex items-center pl-4 mb-3 bg-white rounded-full'>
                                    <label htmlFor=""
                                        className='inline-block pr-6 border-r border-gray-50 w-5'
                                    >
                                        <FaUserPlus size={22} />

                                    </label>
                                    <input
                                        type="text"
                                        id='lName'
                                        onChange={contactusForm.handleChange}
                                        value={contactusForm.values.lName}
                                        className='w-full pl-1 py-4 font-bold placeholder-gray-900 rounded-r-full focus:outline-none'
                                        placeholder='Last NAME'
                                    />
                                </div>
                            </div>
                            <div className='flex items-center pl-4 mb-3 bg-white rounded-full'>
                                <label htmlFor=""
                                    className='inline-block pr-6 border-r border-gray-50 w-5'
                                >
                                    <MdEmail size={20} />
                                </label>
                                {contactusForm.errors.email && contactusForm.touched.email ? (
                                    <div className='text-red-600 text-sm'>{contactusForm.errors.email}</div>
                                ) : null}
                                <input
                                    type="email"
                                    id='email'
                                    onChange={contactusForm.handleChange}
                                    value={contactusForm.values.email}
                                    className='w-full pl-4 py-4 font-bold placeholder-gray-900 rounded-r-full focus:outline-none'
                                    placeholder='example@email.com'
                                />
                            </div>
                            <div className='flex items-center pl-4 mb-3 bg-white rounded-full'>
                                <label htmlFor=""
                                    className='inline-block pr-6 border-r border-gray-50 w-5'
                                >
                                    <ImFileText size={20} />
                                </label>
                                {contactusForm.errors.details && contactusForm.touched.details ? (
                                    <div className='text-red-600 text-sm'>{contactusForm.errors.details}</div>
                                ) : null}
                                <textarea
                                    id="details"
                                    placeholder='Message'
                                    onChange={contactusForm.handleChange}
                                    value={contactusForm.values.details}
                                    className='w-full pl-4 py-1 font-bold placeholder-gray-900 rounded-r-full focus:outline-none'
                                ></textarea>
                            </div>
                            <div className='inline-block pt-3'>

                                <input
                                    type="checkbox"
                                    class='accent-[#a82d91]'
                                />
                                <span className='font-mono pl-2 text-white'>You agree to our Terms, Policy & Cookies.</span>
                            </div>
                            <div className='mt-5'>
                                <button className='bg-white text-center w-full p-3 rounded-lg shadow-lg shadow-[#cbc3cb] hover:border hover:border-[#f7f5f5]'>Submit</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs