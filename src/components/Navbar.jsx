import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router";

function Navbar() {
  const [showCommunities, setShowCommunities] = useState(false);
  const [showEvents, setShowEvents] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  function handleShowCommunities() {
    setShowEvents(false);
    setShowCommunities((prev) => !prev);
  }

  function handleShowEvents() {
    setShowCommunities(false);
    setShowEvents((prev) => !prev);
  }

  function handleToggleMenu() {
    setToggleMenu((prev) => !prev);
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <nav className="flex lg:justify-evenly justify-between px-2 py-4 xl:items-center fixed top-0 left-1/2 -translate-x-1/2 w-full bg-white z-50">
        <div className="flex items-center gap-2">
          <img className="h-7 w-7" src="./logo.png" alt="company-logo" />
          <h1 className="font-Prompt text-xl text-blue-800">Communion</h1>
        </div>
        <div className="lg:flex gap-8 font-Rubik text-sm hidden">
          <Link className=" hover:text-blue-500" to="/">
            Home
          </Link>
          <div
            className=" hover:text-blue-500 relative cursor-pointer"
            onClick={handleShowCommunities}
          >
            Communities
            {showCommunities && (
              <div className="absolute w-[160px] shadow-md text-gray-400 font-thin font-Rubik z-[999] bg-white cursor-pointer">
                <p className="p-2 border-b border-gray-300 hover:text-blue-700 hover:bg-blue-100">
                  Discover communities
                </p>
                <p className="p-2 hover:text-blue-700 hover:bg-blue-100">
                  Create a community
                </p>
              </div>
            )}
          </div>
          <div
            className=" hover:text-blue-500 relative cursor-pointer"
            onClick={handleShowEvents}
          >
            Events
            {showEvents && (
              <div className="absolute w-[160px] shadow-md text-gray-400 font-thin font-Rubik z-[999] bg-white cursor-pointer">
                <Link to={"/upcoming-events"} className="block p-2 border-b border-gray-300 hover:text-blue-700 hover:bg-blue-100">
                  Upcoming events
                </Link>
                <Link to={'/create-event'} className="block p-2 hover:text-blue-700 hover:bg-blue-100">
                  Create an event
                </Link>
              </div>
            )}
          </div>
          <a className=" hover:text-blue-500" href="#">
            Leaders
          </a>
          <a className=" hover:text-blue-500" href="#">
            Support
          </a>
        </div>
        <div className="flex lg:block gap-2">
          <div className="">
            <button className="px-4 py-1 rounded-xl bg-gray-800 text-white hover:bg-blue-700 font-Rubik text-sm">
              Sign in
            </button>
          </div>
          <div
            className="lg:hidden"
            onClick={handleToggleMenu}
          >
            {toggleMenu ? (
              <CloseIcon className="cursor-pointer text-lg  hover:text-blue-500" />
            ) : (
              <MenuIcon className="cursor-pointer text-lg  hover:text-blue-500" />
            )}
          </div>
        </div>
      </nav>
               
      {/* Menu for smaller screens */}
      {toggleMenu && (
        <>
          <div className="flex flex-col items-center justify-center gap-1 py-1 font-Rubik text-sm w-full h-[150px] mt-10 lg:hidden">
            <Link
              className="hover:text-blue-700 hover:bg-blue-100 w-full text-center"
              to={"/"}
            >
              Home
            </Link>
            <div
              className="relative cursor-pointer hover:text-blue-700 hover:bg-blue-100 w-full text-center"
              onClick={handleShowCommunities}
            >
              Communities
              {showCommunities && (
                <div className="absolute w-[160px] left-1/2 -translate-x-1/2 shadow-md text-gray-400 font-thin font-Rubik z-[999] bg-white cursor-pointer">
                  <p className="p-2 border-b border-gray-300 hover:text-blue-700 hover:bg-blue-100">
                    Discover communities
                  </p>
                  <p className="p-2 hover:text-blue-700 hover:bg-blue-100">
                    Create a community
                  </p>
                </div>
              )}
            </div>
            <div
              className="relative cursor-pointer hover:text-blue-700 hover:bg-blue-100 w-full text-center"
              onClick={handleShowEvents}
            >
              Events
              {showEvents && (
                <div className="absolute w-[160px] left-1/2 -translate-x-1/2 shadow-md text-gray-400 font-thin font-Rubik z-[999] bg-white cursor-pointer">
                  <Link to={"/upcoming-events"} className="block p-2 border-b border-gray-300 hover:text-blue-700 hover:bg-blue-100">
                    Upcoming events
                  </Link>
                  <Link to={"/create-event"} className="block p-2 hover:text-blue-700 hover:bg-blue-100">
                    Create an event
                  </Link>
                </div>
              )}
            </div>
            <a
              className="hover:text-blue-700 hover:bg-blue-100 w-full text-center"
              href="#"
            >
              Leaders
            </a>
            <a
              className="hover:text-blue-700 hover:bg-blue-100 w-full text-center"
              href="#"
            >
              Support
            </a>
          </div>
        </>
      )}
    </>
  );
}

export default Navbar;
