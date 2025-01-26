'use client';
import React from 'react';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import * as Yup from 'yup';
import { useFormik } from 'formik';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { MdEmail } from "react-icons/md";

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .max(20, 'Name must be at most 20 characters')
        .required('Name is required'),

    email: Yup.string()
        .email('Please enter a valid email address')
        .required('Email is required'),

    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/[0-9]/, 'Password must contain at least one number')
        .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')
        .required('Password is required'),
});

const SignUp = () => {
    const router = useRouter();

    const signupForm = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        onSubmit: (values, { resetForm }) => {
            axios.post('http://localhost:5000/user/add', values)
                .then((result) => {
                    resetForm();
                    toast.success('User Successfully Added');
                    router.push('/login');
                })
                .catch(() => {
                    toast.error('Failed to add user');
                });
        },
        validationSchema: SignupSchema,
    });

    return (
        <div className="relative flex justify-center items-center py-24 px-5 sm:px-10">
            <div className="relative border border-[#6463cb] w-full max-w-4xl flex flex-col md:flex-row shadow-xl shadow-[#6463cb] rounded-2xl overflow-hidden">
                {/* Form Section */}
                <div className="w-full md:w-1/2 p-6 md:p-12">
                    <h2 className="text-3xl text-white font-semibold text-center mb-6">Register</h2>
                    <form
                        onSubmit={signupForm.handleSubmit}
                        className="w-full max-w-xs mx-auto space-y-6"
                    >
                        {/* Name Input */}
                        <div className="relative">
                            <FaUser className="absolute top-3 left-3 text-gray-400" />
                            {signupForm.errors.name && signupForm.touched.name && (
                                <div className="text-red-500 text-sm">{signupForm.errors.name}</div>
                            )}
                            <input
                                type="text"
                                id="name"
                                className="block w-full pl-10 py-2.5 text-sm text-white bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#6463cb] peer"
                                placeholder=" "
                                onChange={signupForm.handleChange}
                                value={signupForm.values.name}
                                required
                            />
                            <label
                                htmlFor="name"
                                className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 left-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Name
                            </label>
                        </div>

                        {/* Email Input */}
                        <div className="relative">
                            <MdEmail className="absolute top-3 left-3 text-gray-400" />
                            {signupForm.errors.email && signupForm.touched.email && (
                                <div className="text-red-500 text-sm">{signupForm.errors.email}</div>
                            )}
                            <input
                                type="email"
                                id="email"
                                className="block w-full pl-10 py-2.5 text-sm text-white bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#6463cb] peer"
                                placeholder=" "
                                onChange={signupForm.handleChange}
                                value={signupForm.values.email}
                                required
                            />
                            <label
                                htmlFor="email"
                                className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 left-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Email
                            </label>
                        </div>

                        {/* Password Input */}
                        <div className="relative">
                            <RiLockPasswordFill className="absolute top-3 left-3 text-gray-400" />
                            {signupForm.errors.password && signupForm.touched.password && (
                                <div className="text-red-500 text-sm">{signupForm.errors.password}</div>
                            )}
                            <input
                                type="password"
                                id="password"
                                className="block w-full pl-10 py-2.5 text-sm text-white bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#6463cb] peer"
                                placeholder=" "
                                onChange={signupForm.handleChange}
                                value={signupForm.values.password}
                                required
                            />
                            <label
                                htmlFor="password"
                                className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 left-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Password
                            </label>
                        </div>

                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-[#6463cb] text-white py-2 px-6 rounded-lg hover:bg-[#4a48b8] transition duration-300"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>

                {/* Background Section */}
                <div className="relative w-full md:w-1/2 flex items-center justify-center ">
                    <div className="absolute md:-top-80 md:-right-80  md:block w-[150%] md:h-[150%] h-[100%] bg-[#4a48b8] hover:bg-[#43429f] md:rotate-45 scale-125"></div>
                    <div className="relative z-10 text-white text-center px-6">
                        <h3 className="text-2xl md:text-5xl font-bold">Welcome!</h3>
                        <p className="my-1 mb-4 text-sm md:text-base">Register to continue.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
