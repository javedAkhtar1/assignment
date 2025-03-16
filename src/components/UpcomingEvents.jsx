import React, { useContext } from "react";
import Navbar from "./Navbar";
import StarIcon from "@mui/icons-material/Star";
import EventsCard from "./EventsCard";
import Footer from "./Footer.jsx";
import { eventsContext } from "../context/EventsProvider.jsx";

function UpcomingEvents() {
  const {eventsList} = useContext(eventsContext)
  return (
    <>
      <Navbar />
      <div className="mt-[5rem] flex flex-col gap-3 text-blue-900 p-2">
        <h1 className="text-center font-Lato font-bold text-3xl">
          We Help Communities Connect & Flourish
        </h1>
        <h2 className="text-center font-Lato text-2xl text-[#dfac47]">
          <StarIcon className="relative top-[-2px]" />
          Upcoming Events
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto mb-20 mt-3 p-5">
      {eventsList.map((event, index) => {
          return <EventsCard
            key={index}
            name={event.name}
            category={event.category}
            location={event.location}
            timeFrom={event.timeFrom}
            timeTo={event.timeTo}
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
