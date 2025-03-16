import React, { createContext, useState } from "react";
import { currentEvents } from "../current_events";

export const eventsContext = createContext();

function EventsProvider({ children }) {
  const [eventsList, setEventsList] = useState(currentEvents);

  return (
    <>
      <eventsContext.Provider value={{ eventsList, setEventsList }}>
        {children}
      </eventsContext.Provider>
    </>
  );
}

export default EventsProvider;
