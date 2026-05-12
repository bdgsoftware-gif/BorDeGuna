import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import Products from "./components/Products";
import MissionVision from "./components/MissionVision";
import WhyTrust from "./components/WhyTrust";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Gallery from "./pages/Gallery";
import { initAOS } from "./utils/aosInit";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Brands />
      <Products />
      <MissionVision />
      <WhyTrust />
      <FAQ />
      <Footer />
    </>
  );
};

function App() {
  useEffect(() => {
    initAOS();

    // Refresh AOS on load
    window.addEventListener("load", () => {
      setTimeout(() => {
        if (window.AOS) {
          window.AOS.refresh();
        }
      }, 100);
    });

    return () => {
      window.removeEventListener("load", () => {});
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

