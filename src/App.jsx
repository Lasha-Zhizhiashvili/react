import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Cards from "./pages/Cards";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cards/:number" element={<Cards />} />
        </Routes>
      </Router>
    </>
  );
  
  
}

export default App;
