import React, { useState } from "react";

function Navbar() {
  const [showCommunities, setShowCommunities] = useState(false);
  const [showEvents, setShowWEvents] = useState(false);

  function handleShowCommunities() {
    setShowWEvents(false)
    setShowCommunities(prev => !prev)
  }
  function handleShowEvents() {
    setShowCommunities(false)
    setShowWEvents(prev => !prev)
  }

  return (
    <>
      <nav className="flex justify-between p-4 items-center fixed top-0 left-1/2 -translate-x-1/2 w-[1070px]">
        <div className="flex items-center gap-2">
          <img className="h-7 w-7" src="./logo.png" alt="company-logo" />
          <h1 className="font-Prompt text-xl text-blue-800">Communion</h1>
        </div>
        <div className="flex gap-8 font-Rubik text-sm">
          <a className=" hover:text-blue-500" href="#">
            Home
          </a>
          <div className=" hover:text-blue-500 relative cursor-pointer" onClick={handleShowCommunities}>
            Communities
          {showCommunities && 
            <div className="absolute w-[160px] shadow-md text-gray-400 font-thin font-Rubik z-[999] bg-white cursor-pointer">
                <p className="p-2 border-b border-gray-300 hover:text-blue-700 hover:bg-blue-100">Discover communities</p>
                <p className="p-2 hover:text-blue-700 hover:bg-blue-100">Create a community</p>
            </div>
          }
          </div>
          <div className=" hover:text-blue-500 relative cursor-pointer" onClick={handleShowEvents}>
            Events
          {showEvents && 
            <div className="absolute w-[160px] shadow-md text-gray-400 font-thin font-Rubik z-[999] bg-white cursor-pointer">
                <p className="p-2 border-b border-gray-300 hover:text-blue-700 hover:bg-blue-100">View events</p>
                <p className="p-2 hover:text-blue-700 hover:bg-blue-100">Create an event</p>
            </div>
          }
          </div>
          <a className=" hover:text-blue-500" href="#">
            Leaders
          </a>
          <a className=" hover:text-blue-500" href="#">
            Support
          </a>
        </div>
        <div>
          <button className="px-4 py-1 rounded-xl bg-gray-800 text-white hover:bg-blue-700 font-Rubik text-sm">
            Sign in
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
