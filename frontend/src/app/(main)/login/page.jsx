'use client';
import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast';
import useAppContext from '@/context/appContext'



const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Please enter a valid email address')
        .required('email is required'),

    password: Yup.string()
        .min(8, 'password must be atleast 8 character')
        .matches(/[a-z]/, 'password must contain atleast one lowercase letter')
        .matches(/[A-Z]/, 'password must contain atleat one uppercase letter')
        .matches(/[0-9]/, 'password must contain atleast one number')
        .matches(/[!@#$%^&*(){/}|[\]:"'';,.?]/, 'password must contain atleast one character')
        .required('password is required')
})


const Login = () => {
    
    const {setLoggedIn, setCurrentUser} = useAppContext();

    const router = useRouter()
  
    const loginForm = useFormik({
      initialValues: {
        email:'',
        password:'',
      },
      onSubmit: async (values, action) => {
        console.log(values);

        const res = await fetch('http://localhost:5000/user/authenticate', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(res.status);
        action.resetForm();

        if (res.status === 200) {
            toast.success("Login Successfull")
            setLoggedIn(true);

            const data = await res.json();
            localStorage.setItem('isloggedin', true);
            if(data.role === 'admin'){
                localStorage.setItem('admin', JSON.stringify(data));
                router.push('/admin/dashboard');
            }else{
                localStorage.setItem('user', JSON.stringify(data));
                router.push('/');
            }
        } else if (res.status === 400
            ) {
            toast.error("Something went wrong")
        }
        },
      validationSchema: LoginSchema
    })


    return (
        <>
            <div className='font-mono'>
                <div className='py-24 md:py-16 min-h-full  flex justify-center items-center'>
                    <div className='border bg-[] shadow-md rounded-xl w-5/6 md:w-1/3 flex justify-center items-center py-10 md:py-16 px-8 md:px-20'>
                        <form onSubmit={loginForm.handleSubmit}>
                            <h2 className='pb-10 text-xl md:text-lg text-white'>Sign In Here</h2>
                            <div className='flex items-center pl-4 mb-3 bg-white rounded-full'>
                                <label htmlFor=""
                                    className='inline-block pr-6 border-r border-gray-50 w-5'
                                >
                                    <FaUser size={20} />
                                </label>
                                {loginForm.errors.email && loginForm.touched.email ? (
                                    <div className='text-red-500 text-sm'>{loginForm.errors.email}</div>
                                ) : null}
                                <input
                                    type="text"
                                    id='email'
                                    onChange={loginForm.handleChange}
                                    value={loginForm.values.email}
                                    className='w-full pl-4 pr-6 py-4 font-bold placeholder-gray-900 rounded-r-full focus:outline-none'
                                    placeholder='example@habib.com'
                                />
                            </div>

                            <div className='flex items-center pl-4 mb-3 bg-white rounded-full'>
                                <label htmlFor=""
                                    className='inline-block pr-6 border-r border-gray-50 w-5'
                                >
                                    <RiLockPasswordFill size={20} />
                                </label>
                                {loginForm.errors.password && loginForm.touched.password ? (
                                    <div className='text-red-500 text-sm'>{loginForm.errors.password}</div>
                                ) : null}
                                <input
                                    type="Password"
                                    id='password'
                                    onChange={loginForm.handleChange}
                                    value={loginForm.values.password}
                                    className='w-full pl-4 py-4 font-bold placeholder-gray-900 rounded-r-full focus:outline-none'
                                    placeholder='Password'
                                />
                            </div>
                            <div className='inline-block pt-3'>

                                <input
                                    type="checkbox"
                                    className='accent-[#a82d91]'
                                />
                                <span className='font-mono text-sm pl-2 text-white'>By sign up, you agree to our Terms, Policy & Cookies.</span>
                            </div>
                            <div className='mt-6'>
                                <button className='bg-white text-center w-full p-3 rounded-lg shadow-lg shadow-[#3e363e] hover:border hover:border-[#000000]'>Get Started</button>
                            </div>
                            <div className='pt-5 text-white text-sm md:text-lg md:text-black'>Don't have an account? <Link href="/signup" className='text-[#d49dca] md:text-white'>SignUp Here</Link></div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Login