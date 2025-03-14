import React from 'react'

function Navbar() {
  return (
    <>
        <nav className='flex justify-between p-4 items-center fixed top-0 left-1/2 -translate-x-1/2 w-[1070px]'>
            <div className='flex items-center gap-2'>
                <img className='h-7 w-7' src="./logo.png" alt="company-logo" />
                <h1 className='font-Prompt text-xl text-blue-800'>Communion</h1>
            </div>
            <div className='flex gap-8 font-Rubik text-sm'>
                <a className=' hover:text-blue-500' href="#">Home</a>
                <a className=' hover:text-blue-500' href="#">Communities</a>
                <a className=' hover:text-blue-500' href="#">Events</a>
                <a className=' hover:text-blue-500' href="#">Leaders</a>
                <a className=' hover:text-blue-500' href="#">Support</a>
            </div>
            <div>
                <button className='px-4 py-1 rounded-xl bg-gray-800 text-white hover:bg-blue-700 font-Rubik text-sm'>Sign in</button>
            </div>
        </nav>
    </>
  )
}

export default Navbar
