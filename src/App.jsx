import React from "react";
import "./index.css";
import Qualifications from "./components/Qualifications";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import ThreeScene from "./components/ThreeScene";

function App() {
  return (
    <>
      <div className="bg-image bg-gray-200 font-mono font-light text-white">
        <Hero />
        <ThreeScene />
        <Qualifications />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
