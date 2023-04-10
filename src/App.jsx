import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cards from "./pages/Cards";
import MoreFlights from "./pages/MoreFlights";
import Footer from './components/Footer';
import Home from './pages/Home';
import Navbar from './components/NavbarBlack'
import FLightListing from './pages/FlightListing'
import FlightListing from "./pages/FlightListing";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cards/:number" element={<Cards />} />
          <Route path="/moreflights" element={<MoreFlights />} />
          <Route path="/FlightListing" element={<FlightListing />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
