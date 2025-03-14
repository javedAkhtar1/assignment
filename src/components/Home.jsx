import React from 'react'
import Navbar from './Navbar'

function Home() {
  return (
    <>
        <Navbar />
        <div className='flex flex-col gap-3 mt-[5.5rem] font-Lato items-center'>
            <h1 className='text-5xl font-semibold'>Connecting Communities</h1>
            <p className='text-sm text-gray-500 font-Rubik'>Bringing people of all faiths together through community support and events!</p>
        </div>
    </>
  )
}

export default Home
