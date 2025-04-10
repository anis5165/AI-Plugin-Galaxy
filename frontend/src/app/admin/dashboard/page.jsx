"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const Dashboard = () => {
const router = useRouter()

  useEffect(() => {
    if (!localStorage.getItem('admin')) {
      router.push('/login');
    }
  }, [router]) // Add router to dependency array

  return (
    <>
      <div className=''>
        <div className='text-[#eeeee4] min-h-screen text-center'>
          <div className='flex flex-col justify-center h-screen items-center'>
            <h2 className='text-5xl md:text-7xl lg:text-9xl font-thin '>WELCOME</h2>
            <h3 className='text-6xl'>Admin</h3>
            <p className='pt-10 text-lg px-10 md:px-60 text-center'>An <strong>admin dashboard panel</strong> is a centralized interface providing administrators with tools to manage systems efficiently. It includes features like user management, data visualization, system settings, and analytics. The dashboard streamlines decision-making through real-time updates, performance monitoring, and content management, ensuring smooth operations and enhanced administrative control in one place.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
