'use client';
import React from 'react'
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUserPlus } from "react-icons/fa";
import * as Yup from 'yup';
import { Formik, useFormik } from 'formik';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';



const SignupSchema = Yup.object().shape({
    name: Yup.string()
    .max(20,'name must be atmost 20 letters')
    .required('name is required'),

    email: Yup.string()
    .email('Please enter a valid email address')
    .required('email is required'),

    password: Yup.string()
    .min(8,'password must be atleast 8 character')
    .matches(/[a-z]/,'password must contain atleast one lowercase letter')
    .matches(/[A-Z]/,'password must contain atleat one uppercase letter')
    .matches(/[0-9]/,'password must contain atleast one number')
    .matches(/[!@#$%^&*(){/}|[\]:"'';,.?]/,'password must contain atleast one character')
    .required('password is required')
})



const SignUp = () => {

    const router = useRouter()

    const signupForm = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        onSubmit: (values, { resetForm }) => {
            console.log(values)

            axios.post('http://localhost:5000/user/add', values)
            .then((result) => {
                console.log(result.status)
                resetForm()
                toast.success('User Successfully Added')
                router.push('/login')
            }).catch((err) => {
                console.log(err)
                toast.error('Failed to add user')
            });
        },
        validationSchema: SignupSchema
    })



    return (
        <>
            <div className='font-mono'>
                <div className='py-20 bg-[url("/ai-bg-23.jpg")] bg-cover flex justify-center items-center'>
                    <div className='border bg-[] shadow-md rounded-xl w-1/3 flex justify-center items-center py-14 px-20'>
                        <form onSubmit={signupForm.handleSubmit}>
                            <h2 className='pb-10 text-lg text-white'>Register Here</h2>
                            <div className='mb-3 flex items-center pl-4 bg-white rounded-full'>
                                <label htmlFor=""
                                    className='inline-block pr-6 border-r border-gray-50 w-5'
                                >
                                    <FaUserPlus size={20} />
                                </label>
                                {signupForm.errors.name && signupForm.touched.name ? (
                                    <div className='text-red-500 text-sm'>{signupForm.errors.name}</div>
                                ): null}
                                <input 
                                    type="text" 
                                    id='name'
                                    onChange={signupForm.handleChange}
                                    value={signupForm.values.name}
                                    className='w-full pl-4 pr-6 font-bold placeholder-gray-900 focus:outline-none rounded-r-full py-4'
                                    placeholder='Username'
                                />
                            </div>
                            <div className='flex items-center pl-4 mb-3 bg-white rounded-full'>
                                <label htmlFor=""
                                    className='inline-block pr-6 border-r border-gray-50 w-5'
                                >
                                    <FaUser size={20} />
                                </label>
                                {signupForm.errors.email && signupForm.touched.email ? (
                                    <div className='text-red-500 text-sm'>{signupForm.errors.email}</div>
                                ): null}
                                <input
                                    type="text"
                                    id='email'
                                    onChange={signupForm.handleChange}
                                    value={signupForm.values.email}
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
                                {signupForm.errors.password && signupForm.touched.password ?(
                                    <div className='text-red-500 text-sm'>{signupForm.errors.password}</div>
                                ): null}
                                <input
                                    type="Password"
                                    id='password'
                                    onChange={signupForm.handleChange}
                                    value={signupForm.values.password}
                                    className='w-full pl-4 py-4 font-bold placeholder-gray-900 rounded-r-full focus:outline-none'
                                    placeholder='Password'
                                />
                            </div>
                            <div className='inline-block pt-3'>

                                <input
                                    type="checkbox"
                                    class='accent-[#661557]'
                                />
                                <span className='font-mono pl-2 text-white'>By sign up, you agree to our Terms, Policy & Cookies.</span>
                            </div>
                            <div className='mt-5'>
                            <button className='bg-white text-center w-full p-3 rounded-lg shadow-lg shadow-[#3e363e] hover:border hover:border-[#7d316f]'>Get Started</button>

                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp