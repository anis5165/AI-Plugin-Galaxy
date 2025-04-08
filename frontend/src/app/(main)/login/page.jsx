'use client';
import React from 'react';
import { RiLockPasswordFill } from "react-icons/ri";
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { MdEmail } from "react-icons/md";
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import useAppContext from '@/context/appContext';


const LoginSchema = Yup.object().shape({
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

const Login = () => {
    const { setLoggedIn } = useAppContext();
    const router = useRouter();

    const loginForm = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: async (values, action) => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/authenticate`, {
                    method: 'POST',
                    body: JSON.stringify(values),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                action.resetForm();

                if (res.status === 200) {
                    toast.success('Login Successful');
                    setLoggedIn(true);
                    const data = await res.json();
                    localStorage.setItem('isloggedin', true);

                    if (data.role === 'admin') {
                        localStorage.setItem('admin', JSON.stringify(data));
                        router.push('/admin/dashboard');
                    } else {
                        localStorage.setItem('user', JSON.stringify(data));
                        router.push('/');
                    }
                } else {
                    toast.error('Invalid Details');
                }
            } catch (error) {
                toast.error('Failed to login');
            }
        },
        validationSchema: LoginSchema,
    });

    return (
        <div className="relative text-white flex justify-center items-center min-h-screen py-16 px-5 sm:px-10">
            <div className="relative border border-[#6463cb] w-full max-w-4xl flex flex-col md:flex-row shadow-xl shadow-[#6463cb] rounded-2xl overflow-hidden">
                {/* Form Section */}
                <div className="w-full md:w-1/2 p-6 md:p-12">
                    <h2 className="text-3xl font-semibold text-center mb-6">LOGIN</h2>
                    <form
                        onSubmit={loginForm.handleSubmit}
                        className="w-full max-w-xs mx-auto space-y-6"
                    >
                        <div className="relative">
                            <MdEmail className="absolute top-3 left-3 text-gray-400" />
                            {loginForm.errors.email && loginForm.touched.email && (
                                <div className="text-red-500 text-sm">{loginForm.errors.email}</div>
                            )}
                            <input
                                type="email"
                                id="email"
                                className="block w-full pl-10 py-2.5 text-sm text-white bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#6463cb] peer"
                                placeholder=" "
                                onChange={loginForm.handleChange}
                                value={loginForm.values.email}
                                required
                            />
                            <label
                                htmlFor="email"
                                className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 left-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Email
                            </label>
                        </div>

                        <div className="relative">
                            <RiLockPasswordFill className="absolute top-3 left-3 text-gray-400" />
                            {loginForm.errors.password && loginForm.touched.password && (
                                <div className="text-red-500 text-sm">{loginForm.errors.password}</div>
                            )}
                            <input
                                type="password"
                                id="password"
                                className="block w-full pl-10 py-2.5 text-sm text-white bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#6463cb] peer"
                                placeholder=" "
                                onChange={loginForm.handleChange}
                                value={loginForm.values.password}
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
                                Login
                            </button>
                        </div>

                        <div className="mt-4 text-center">
                            <p>Don&apos;t have an account?</p>
                            <p>
                                <Link href="/signup" className="text-[#6463cb] hover:underline">
                                    Sign Up
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>

                {/* Rotated Background Section */}
                <div className="relative w-full md:w-1/2 flex items-center justify-center">
                    <div className="absolute md:-top-80 md:-right-80  md:block w-[150%] md:h-[150%] h-[100%] bg-[#4a48b8] hover:bg-[#43429f] md:rotate-45 scale-125"></div>
                    <div className="relative z-10 text-center px-6">
                        <h3 className="text-2xl md:text-4xl font-bold">Welcome Back!</h3>
                        <p className="my-1 mb-4 text-sm md:text-base">Sign in to continue.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
