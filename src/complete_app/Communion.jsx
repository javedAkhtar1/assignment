import { Route, Routes } from "react-router"
import Home from "../components/Home.jsx"
import TermsAndConditions from "../pages/TermsAndConditions.jsx"
import PrivacyPolicy from "../pages/PrivacyPolicy.jsx"
import UpcomingEvents from "../components/UpcomingEvents.jsx"
import CreateEvent from "../components/CreateEvent.jsx"
import EventsProvider from "../context/EventsProvider.jsx"


function Communion() {

  return (
    <>
    <EventsProvider>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/termsandconditions" element={<TermsAndConditions />}/>
    <Route path="/privacypolicy" element={<PrivacyPolicy />}/>
    <Route path="/upcoming-events" element={<UpcomingEvents />}/>
    <Route path="/create-event" element={<CreateEvent />}/>
    </Routes>
    </EventsProvider>
    </>
  )
}

export default Communion
