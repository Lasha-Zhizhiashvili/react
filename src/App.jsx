import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ManyCards from "./pages/ManyCards";
import MoreFlights from "./pages/MoreFlights";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Navbar from "./components/NavbarBlack";
import FlightListing from "./pages/FlightListing";
import { useEffect, useState } from "react";
import FlightDetailPage from "./pages/FlightDetailPage";
import { useLocation } from "react-router-dom";
import BookingDetail from "./pages/BookingDetail.jsx";
import TermsAndCondition from "./pages/TermsAndCondition";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import AddPayment from './pages/AddPayment.jsx'

function App() {
  const [check, setcheck] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setcheck(false);
    }
    else if(location.pathname === "/LogIn" || location.pathname === "/SignUp" || location.pathname === "/SignUp/AddPayment"){
      setcheck(false)
    }
     else {
      setcheck(true);
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }
  }, [location.pathname]);

  return (
    <>
      <Navbar check={check} />
      <Routes>
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignUp/AddPayment" element={<AddPayment />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/" element={<Home />} />
        <Route path="/ManyCards/:id" element={<ManyCards />} />
        <Route path="/Moreflights" element={<MoreFlights />} />
        <Route path="/Moreflights/FlightListing" element={<FlightListing />} />
        <Route path="/FLightDetailPage" element={<FlightDetailPage />} />
        <Route path="/BookingDetail" element={<BookingDetail />} />
        <Route path="/TermsAndCondition" element={<TermsAndCondition />} />
      </Routes>
      <Footer check={check} />

    </>
  );
}

export default App;
