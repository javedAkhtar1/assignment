import React from "react";
import Navbar from "./Navbar";
import StarIcon from "@mui/icons-material/Star";
import { currentEvents } from "../current_events";
import EventsCard from "./EventsCard";
import Footer from "./Footer.jsx";

function UpcomingEvents() {
  return (
    <>
      <Navbar />
      <div className="mt-[5rem] flex flex-col gap-3 text-blue-900 h-24">
        <h1 className="text-center font-Lato font-bold text-3xl">
          We Help Communities Connect & Flourish
        </h1>
        <h2 className="text-center font-Lato text-2xl text-[#dfac47]">
          <StarIcon className="relative top-[-2px]" />
          Upcoming Events
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-5 max-w-6xl mx-auto mb-20">
      {currentEvents.map((event, index) => {
          return <EventsCard
            key={index}
            name={event.name}
            category={event.category}
            timings={event.timings}
            date={event.date}
            image={event.image}
            cost={event.cost}
          />;
        })}
      </div>
        <Footer />
    </>
  );
}

export default UpcomingEvents;
