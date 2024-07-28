import React, { useRef } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Events from './Components/Events/Events'
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero'
import Base from './Components/Main/Base';

function App() {
  const baseRef = useRef(null);

  const scrollToBase = () => {
    if (baseRef.current) {
      baseRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Navbar scrollToBase={scrollToBase} />
      <Hero />
      <Events />
      <Base ref={baseRef} />
      <Footer />
    </div>

  );
}

export default App;