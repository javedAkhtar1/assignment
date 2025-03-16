import React from "react";
import { useInView } from "react-intersection-observer";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import LocationOnIcon from '@mui/icons-material/LocationOn';

function EventsCard({ image, cost, date, category, timings, name, location }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className={`flex flex-col border border-gray-300 shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-500 ease-in-out transform ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <img
        src={image}
        alt="event-image"
        className="w-full h-48 sm:h-56 md:h-64 min-h-[180px] object-cover"
      />
      <div className="p-4 flex flex-col gap-2">
        <p
          style={{ color: cost.toLowerCase() === "free" ? "green" : "red" }}
          className="text-sm font-bold"
        >
          {cost.toUpperCase()}
        </p>
        <p className="text-gray-600 font-Lato font-semibold underline">
          {category}
        </p>
        <h2 className="font-semibold font-Lato text-xl">{name}</h2>
        <p className="text-gray-600 text-sm">
          <CalendarMonthIcon className="relative top-[-2px]" /> {date}
        </p>
        <p className="text-gray-600 text-sm">
          <AccessTimeIcon className="relative top-[-2px]" /> {timings}
        </p>
        <p className="text-gray-600 text-sm">
          <LocationOnIcon className="relative top-[-2px]" /> {location}
        </p>
        <button className="py-2 bg-[#222] hover:bg-gray-800 text-white rounded-lg">
          Event Details <ArrowOutwardIcon className="relative top-[-2px]" />
        </button>
      </div>
    </div>
  );
}

export default EventsCard;
