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

function App() {
  const [check, setcheck] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setcheck(false);
    } else {
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
        <Route path="/" element={<Home />} />
        <Route path="/ManyCards/:id" element={<ManyCards />} />
        <Route path="/Moreflights" element={<MoreFlights />} />
        <Route path="/Moreflights/FlightListing" element={<FlightListing />} />
        <Route path="/FLightDetailPage" element={<FlightDetailPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
