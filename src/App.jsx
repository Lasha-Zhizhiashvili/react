import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cards from "./pages/Cards";
import MoreFlights from "./pages/MoreFlights";
import Footer from './components/Footer';
import Home from './pages/Home';
import Navbar from './components/NavbarBlack'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cards/:number" element={<Cards />} />
          <Route path="/moreflights" element={<MoreFlights />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
