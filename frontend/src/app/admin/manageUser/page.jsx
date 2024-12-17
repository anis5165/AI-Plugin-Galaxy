'use client'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import Link from 'next/link'

const Manageuser = () => {

    const [userList, setUserList] = useState([])

    const fetchUserList = () => {
        axios.get('http://localhost:5000/user/getall')
            .then((res) => {
                console.log(res.status)
                console.table(res.data)
                setUserList(res.data)
            }).catch((err) => {
                console.log(err)
                toast.error('Failed to fetch user list')
            });
    }
    useEffect(() => {
        fetchUserList()
    }, [])

    const deleteUser = (id) => {
        axios.delete('http://localhost:5000/user/delete/' + id)
            .then((result) => {
                toast.success('User deleted successfully')
                fetchUserList()
            }).catch((err) => {
                console.log(err)
                toast.error('Failed to delete user')
            });
    }

    return (
        <div className='ml-72'>
            <div className='lg:max-w-[90%] mx-auto py-10'>
                <div className='border rounded-xl shadow-lg p-8'>
                    <h1 className='text-center mb-7 font-bold text-3xl'>Manage User</h1>
                    <hr />

                    <table className='w-full'>
                        <thead className='bg-violet-700 text-white'>
                            <tr>
                                <th className='p-2 border border-white'>ID</th>
                                <th className='p-2 border border-white'>NAME</th>
                                <th className='p-2 border border-white'>EMAIL</th>
                                <th className='p-2 border border-white'>PASSWORD</th>
                                <th colSpan={2}>Actions</th>
                            </tr>
                        </thead>

                        <tbody className='bg-violet-200 text-center'>
                            {
                                userList.map((user) => {
                                    // key is required for each element in the list to uniquely identify it,if not provided it will throw a warning but will still work
                                    return <tr key={user._id}>
                                        <td className='p-2 border border-violet-700'>{user._id}</td>
                                        <td className='p-2 border border-violet-700'>{user.name}</td>
                                        <td className='p-2 border border-violet-700'>{user.email}</td>
                                        <td className='p-2 border border-violet-700'>{user.password}</td>
                                        <td onClick={() => deleteUser(user._id)} className='p-2 border border-violet-700'>
                                            <button className='bg-red-500 text-white px-4 py-2 rounded-lg'>Delete</button>
                                        </td>
                                        <td className='p-2 border border-violet-700'>
                                            <Link href={'/updateUser/' + user._id} className='bg-blue-500 text-white px-4 py-2 rounded-lg'>Update</Link>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Manageuser