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
import AddPayment from "./pages/AddPayment.jsx";
import NotFound from "./pages/NotFound";
import MoreHotels from "./pages/MoreHotels";
import HotelListing from "./pages/HotelListing";
import BookingDetail1 from "./pages/BookingDetail1.jsx";
import Favorites from "./pages/Favorites";

function App() {
  const [check, setcheck] = useState(true);
  const [check1, setcheck1] = useState(true);
  const [hotel, setHotel] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setcheck(false);
    } else if (location.pathname === "/MoreHotels" || location.pathname === "/MoreHotels/HotelListing") {
      setHotel(true);
      setcheck(true)
    } else if (
      location.pathname === "/LogIn" ||
      location.pathname === "/SignUp" ||
      location.pathname === "/SignUp/AddPayment"
    ) {
      setcheck(false);
      setcheck1(false);
    } else {
      setcheck(true);
      setcheck1(true);
      setHotel(false);
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }
  }, [location.pathname]);

  const [user, setUser] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    async function wait() {
      const creditCard = await JSON.parse(localStorage.getItem("CreditCard"));
      setUser(creditCard);
    }

    wait();

    if (user?.LoggedIn != null && user.LoggedIn === true) {
      setFormSubmitted(true);
    }
  }, [user]);

  return (
    <>
      <Navbar check={check} hotel={hotel} />
      <Routes>
        {!formSubmitted && (
          <>
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/SignUp/AddPayment" element={<AddPayment />} />
            <Route path="/LogIn" element={<LogIn />} />
          </>
        )}
        <Route path="/" element={<Home />} />
        <Route path="/ManyCards/:id" element={<ManyCards />} />
        <Route path="/Moreflights" element={<MoreFlights />} />
        <Route path="/Moreflights/FlightListing" element={<FlightListing />} />
        <Route path="/MoreHotels/HotelListing" element={<HotelListing />} />
        <Route path="/FLightDetailPage" element={<FlightDetailPage />} />
        <Route path="/BookingDetail" element={<BookingDetail />} />
        <Route path="/TermsAndCondition" element={<TermsAndCondition />} />
        <Route path="/Favorites" element={<Favorites />} />

        <Route path="/MoreHotels" element={<MoreHotels />} />
        <Route path="/BookingDetail1" element={<BookingDetail1 />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer check={check1} />
    </>
  );
}

export default App;
