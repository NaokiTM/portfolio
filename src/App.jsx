import './index.css';
import Qualifications from './components/Qualifications';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {

  return (
     <>
       {/* add bg-image class to enable transparent bg image */}
        <div className = "bg-black text-white font-light font-mono">  
              <Navbar />
              <Hero />
              <Qualifications />
              <Projects />
              <Contact />
              <Footer />
        </div>
     </>
  );
}

export default App;
