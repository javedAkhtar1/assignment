import React, { useContext, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { eventsContext } from "../context/EventsProvider";
import { useNavigate } from "react-router";

function CreateEvent() {
  const [newEvent, setNewEvent] = useState({
    name: "",
    date: "",
    timeFrom: "",
    timeTo: "",
    location: "",
    cost: "free",
    category: "charity",
    image: "",
  });

  const { eventsList, setEventsList } = useContext(eventsContext);
  const navigate = useNavigate()

  function formatTime(time) {
    if (!time) return "";
    let [hours, minutes] = time.split(":").map(Number);
    let period = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert 0 or 12+ hour to 12-hour format
    return `${hours}:${minutes.toString().padStart(2, "0")} ${period}`;
  }
  
  function formatDate(date) {
    if (!date) return "";
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString("en-US", options);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setNewEvent((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const defaultImage = "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ="

    const eventWithImage = {
        ...newEvent,
        date: formatDate(newEvent.date),
        timeFrom: formatTime(newEvent.timeFrom),
        timeTo: formatTime(newEvent.timeTo),
        image: defaultImage
    }

    setEventsList([...eventsList, eventWithImage]);
    setNewEvent({
      name: "",
      date: "",
      timeFrom: "",
      timeTo: "",
      location: "",
      cost: "Free",
      category: "Charity",
      image: "",
    });
    // console.log(eventsList)
    alert("Event added!")
    navigate("/upcoming-events")
  }

  return (
    <>
      <Navbar />
      <div className="mt-[4rem] mb-10 flex justify-center font-Lato">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg flex flex-col gap-4"
        >
          <h2 className="text-2xl font-semibold text-center text-blue-900">
            Create an Event
          </h2>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">Event Name:</label>
            <input
              type="text"
              name="name"
              value={newEvent.name}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter event name"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">Date:</label>
            <input
              type="date"
              name="date"
              value={newEvent.date}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">Time (from):</label>
            <input
              type="time"
              name="timeFrom"
              value={newEvent.timeFrom}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">Time (to):</label>
            <input
              type="time"
              name="timeTo"
              value={newEvent.timeTo}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">Location:</label>
            <input
              type="text"
              name="location"
              value={newEvent.location}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter location"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">Cost:</label>
            <select
              name="cost"
              value={newEvent.cost}
              onChange={handleChange}
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
              value={newEvent.category}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="charity">Charity</option>
              <option value="religious">Religious</option>
              <option value="social">Social</option>
            </select>
          </div>

          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-all"
          >
            Create Event
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default CreateEvent;
