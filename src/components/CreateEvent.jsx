import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function CreateEvent() {
  return (
    <>
      <Navbar />
      <div className="mt-[4rem] mb-10 flex justify-center font-Lato">
        <form className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-center text-blue-900">Create an Event</h2>

          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-700 font-medium">Event Name:</label>
            <input 
              type="text" 
              name="name" 
              className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter event name"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="date" className="text-gray-700 font-medium">Date:</label>
            <input 
              type="date" 
              name="date" 
              className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="date" className="text-gray-700 font-medium">Time (from):</label>
            <input 
              type="time" 
              name="time" 
              className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="date" className="text-gray-700 font-medium">Time (to):</label>
            <input 
              type="time" 
              name="time" 
              className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="location" className="text-gray-700 font-medium">Location:</label>
            <input 
              type="text" 
              name="location" 
              className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter location"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">Cost:</label>
            <select 
              name="cost" 
              className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="free">FREE</option>
              <option value="paid">PAID</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">Category:</label>
            <select 
              name="category" 
              className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="charity">Charity</option>
              <option value="religious">Religious</option>
              <option value="social">Social</option>
            </select>
          </div>

          <button className="mt-4 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-all">
            Create Event
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default CreateEvent;
