'use client';
import React, { useEffect } from 'react';
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa6";
import axios from 'axios';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import { ImFileText } from "react-icons/im";
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';

const ContactSchema = Yup.object().shape({
    fName: Yup.string().required('First Name is Required'),
    email: Yup.string().email('Please enter a valid email address').required('Email is Required'),
    details: Yup.string().required('Details are Required'),
});

const ContactUs = () => {
    const contactusForm = useFormik({
        initialValues: {
            fName: '',
            lName: '',
            email: '',
            details: '',
        },
        onSubmit: (values, { resetForm }) => {
            axios.post(`${process.env.NEXT_PUBLIC_API_URL}/contact/add`, values)
                .then(() => {
                    resetForm();
                    toast.success('Message sent successfully!');
                    router.push('/login');
                })
                .catch(() => {
                    toast.error('Failed to send message.');
                });
        },
        validationSchema: ContactSchema,
    });

    const router = useRouter();

    useEffect(() => {
        if (!localStorage.getItem('user')) {
            router.push('/login');
        }
    }, []);

    return (
        <div className="relative text-white flex justify-center items-center py-16 px-5 sm:px-10">
            <div className="relative w-full max-w-4xl flex flex-col md:flex-row shadow-xl shadow-[#6463cb] rounded-2xl overflow-hidden">
                {/* Form Section */}
                <div className="w-full md:w-1/2 p-6 md:p-12">
                    <h2 className="text-3xl font-semibold text-center mb-6">Contact Us</h2>
                    <form onSubmit={contactusForm.handleSubmit} className="w-full max-w-xs mx-auto space-y-6">
                        {/* First Name */}
                        <div className="relative">
                            <FaUser className="absolute top-3 left-3 text-gray-400" />
                            {contactusForm.errors.fName && contactusForm.touched.fName && (
                                <div className="text-red-500 text-sm">{contactusForm.errors.fName}</div>
                            )}
                            <input
                                type="text"
                                id="fName"
                                className="block w-full pl-10 py-2.5 text-sm text-white bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#6463cb] peer"
                                placeholder=" "
                                onChange={contactusForm.handleChange}
                                value={contactusForm.values.fName}
                            />
                            <label
                                htmlFor="fName"
                                className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 left-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                First Name
                            </label>
                        </div>

                        {/* Last Name */}
                        <div className="relative">
                            <FaUserPlus className="absolute top-3 left-3 text-gray-400" />
                            <input
                                type="text"
                                id="lName"
                                className="block w-full pl-10 py-2.5 text-sm text-white bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#6463cb] peer"
                                placeholder=" "
                                onChange={contactusForm.handleChange}
                                value={contactusForm.values.lName}
                            />
                            <label
                                htmlFor="lName"
                                className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 left-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Last Name
                            </label>
                        </div>

                        {/* Email */}
                        <div className="relative">
                            <MdEmail className="absolute top-3 left-3 text-gray-400" />
                            {contactusForm.errors.email && contactusForm.touched.email && (
                                <div className="text-red-500 text-sm">{contactusForm.errors.email}</div>
                            )}
                            <input
                                type="email"
                                id="email"
                                className="block w-full pl-10 py-2.5 text-sm text-white bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#6463cb] peer"
                                placeholder=" "
                                onChange={contactusForm.handleChange}
                                value={contactusForm.values.email}
                            />
                            <label
                                htmlFor="email"
                                className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 left-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Email
                            </label>
                        </div>

                        {/* Details */}
                        <div className="relative">
                            <ImFileText className="absolute top-3 left-3 text-gray-400" />
                            {contactusForm.errors.details && contactusForm.touched.details && (
                                <div className="text-red-500 text-sm">{contactusForm.errors.details}</div>
                            )}
                            <textarea
                                id="details"
                                className="block w-full pl-10 py-2.5 text-sm text-white bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#6463cb] peer"
                                placeholder=" "
                                onChange={contactusForm.handleChange}
                                value={contactusForm.values.details}
                            />
                            <label
                                htmlFor="details"
                                className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 left-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Message
                            </label>
                        </div>

                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-[#6463cb] text-white py-2 px-6 rounded-lg hover:bg-[#4a48b8] transition duration-300"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>

                {/* Background Section */}
                <div className="relative w-full md:w-1/2 flex items-center justify-center">
                    <div className="absolute md:-top-full md:-right-full  md:block w-[150%] md:h-[150%] h-[100%] bg-[#4a48b8] hover:bg-[#43429f] md:rotate-45 scale-125"></div>
                    <div className="relative z-10 text-center px-6">
                        <h3 className="text-2xl md:text-4xl font-bold">Drop Us a Line</h3>
                        <p className="my-2 mb-4 text-sm md:text-base">We’re listening – tell us what’s on your mind.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
