import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import Products from "./components/Products";
import MissionVision from "./components/MissionVision";
import WhyTrust from "./components/WhyTrust";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import { initAOS } from "./utils/aosInit";

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
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Brands />
      <Products />
      <MissionVision />
      <WhyTrust />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
