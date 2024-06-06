import React from "react";
import "./index.css";
import Bio from "./components/Bio";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {

  return (
    <>
      <div className="font-mono text-white bg-black">
        <Hero />
        <div className="relative grid md:columns-2">
            <Bio />
        </div>
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
