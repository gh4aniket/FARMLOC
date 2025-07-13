// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
// import other pages like Contact, etc.

const FullLandingPage = () => {
  return (
    <>
      <Home />
      <About />
      <Services /> {/* ✅ Added Services here */}
      {/* You can continue adding more sections like Contact, Testimonials, etc. */}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* ✅ All-in-one landing page */}
        <Route path="/" element={<FullLandingPage />} />

        {/* ✅ Individual routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        {/* Add more routes as needed */}
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
