import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useState } from "react";

import Hero from "./components/Hero";
import Header from "./components/Header";
import NavMobile from './components/NavMobile';
import Stats from './components/Stats';
import Why from './components/Why';
import Calculate from './components/Calculate';
import Trade from './components/Trade';
import Features from './components/Features';
import Newsletter from "./components/Newsletter";
import Footer from './components/Footer';

const App = () => {
  const [navMobile, setNavMobile] = useState(false)

  useEffect(() => {
    Aos.init ({
      duration: 2500,
      delay: 400,
    })
  })
  return (
    <div className="overflow-hidden">
      <Header setNavMobile={setNavMobile} />
      <Hero />
      {/* mobile view */}
      <div className={`${navMobile ? 'right-0' : '-right-full'} fixed z-10 top-0 h-full transition-all duration-200`}>
        <NavMobile setNavMobile={setNavMobile}/>
      </div>
      <Stats />
      <Why />
      <Calculate />
      <Trade />
      <Features />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
