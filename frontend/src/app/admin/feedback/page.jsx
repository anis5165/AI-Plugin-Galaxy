'use client'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const Contact = () => {


    const router = useRouter()

    useEffect(() => {
        if (!localStorage.getItem('admin')) {
            router.push('/login');
            return
        }
    }, [])

    const [feedbackList, setFeedbackList] = useState([])

    const fetchFeedbackList = () => {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/contact/getall`)
            .then((res) => {
                console.log(res.status)
                console.table(res.data)
                setFeedbackList(res.data)
            }).catch((err) => {
                console.log(err)
                toast.error('Failed to fetch contact list')
            });
    }

    useEffect(() => {
        fetchFeedbackList();
    }, [])

    const deleteFeedback = (id) => {
        axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/contact/delete/` + id)
            .then((result) => {
                toast.success('User deleted successfully')
                fetchFeedbackList()
            }).catch((err) => {
                console.log(err)
                toast.error('Failed to delete user')
            });
    }


    return (
        <>
            <div className='min-h-screen w-full'>
                <div className='lg:max-w-[90%] md:pl-0 lg:pl-64 mx-auto py-24'>
                    <div className='border  rounded-xl shadow-lg p-8'>
                        <h1 className='text-center mb-7 text-white font-bold text-3xl'>Manage Feedback</h1>
                        <hr />
                        <div className='overflow-x-auto'>
                            <table className='min-w-full border border-white text-sm'>
                                <thead className='border border-b-2 text-white'>
                                    <tr>
                                        <th className='p-4 border '>Name</th>
                                        <th className='p-4 border '>Email</th>
                                        <th className='p-4 border '>Message</th>
                                        <th className='p-4 border '>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {feedbackList.map((feedback) => (
                                        <tr key={feedback._id} className='border-b border-gray-700 text-center'>
                                            <td className='p-4 border border-slate-700'>{feedback.fName}{" "}{feedback.lName}</td>
                                            <td className='p-4 border border-slate-700'>{feedback.email}</td>
                                            <td className='p-4 border border-slate-700'>{feedback.details}</td>
                                            <td onClick={() => deleteFeedback(feedback._id)} className='p-2 border text-center border-slate-700'>
                                                <button className='bg-red-500 text-white px-4 py-2 rounded-lg'>Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact   