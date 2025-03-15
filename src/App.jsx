import { Route, Routes } from "react-router"
import Home from "./components/Home.jsx"
import TermsAndConditions from "./pages/TermsAndConditions.jsx"
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx"


function App() {

  return (
    <>

    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/termsandconditions" element={<TermsAndConditions />}/>
    <Route path="/privacypolicy" element={<PrivacyPolicy />}/>
      
    </Routes>
    </>
  )
}

export default App
