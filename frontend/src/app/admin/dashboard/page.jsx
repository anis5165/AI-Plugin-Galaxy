import React from 'react'

const Dashboard = () => {
  return (
    <>
      <div className='ml-64'>
        <div className='text-[#eeeee4] max-h-screen fixed font-mono bg-[url("/ai-bg-2.jpg")] bg-cover'>
          <div className='flex flex-col justify-center items-center min-h-screen'>
            <h2 className='text-8xl font-bold '>welcome</h2>
            <h3 className='text-4xl '>To The</h3>
            <h3 className='text-6xl'>Admin Panel</h3>
            <p className='pt-10 text-lg px-40 text-center'>An <strong>admin dashboard panel</strong> is a centralized interface providing administrators with tools to manage systems efficiently. It includes features like user management, data visualization, system settings, and analytics. The dashboard streamlines decision-making through real-time updates, performance monitoring, and content management, ensuring smooth operations and enhanced administrative control in one place.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
