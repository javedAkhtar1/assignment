import React, { createContext, useEffect, useState } from "react";
import { currentEvents } from "../current_events";

export const eventsContext = createContext();

function EventsProvider({ children }) {
  const [eventsList, setEventsList] = useState(() => {
    const storedEvents = localStorage.getItem("eventsList");
    return storedEvents ? JSON.parse(storedEvents) : currentEvents;
  });

  useEffect(() => {
    localStorage.setItem("eventsList", JSON.stringify(eventsList))
  }, [eventsList])

  return (
    <>
      <eventsContext.Provider value={{ eventsList, setEventsList }}>
        {children}
      </eventsContext.Provider>
    </>
  );
}

export default EventsProvider;
