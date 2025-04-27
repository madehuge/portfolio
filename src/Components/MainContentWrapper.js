import React, { useState } from 'react';
import Navbar from './Navbar';
import About from './About';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Blog from './Blog';
import Contact from './Contact';

const MainContentWrapper = () => {
  const [activeSection, setActiveSection] = useState('about'); // default About

  return (
    <>
      <div className="main-content">
        <Navbar setActiveSection={setActiveSection} activeSection={activeSection} />
        <About activeSection={activeSection} />
        <Resume activeSection={activeSection} />
        <Portfolio activeSection={activeSection} />
        <Blog activeSection={activeSection} />
        <Contact activeSection={activeSection} />
      </div>
    </>
  );
};

export default MainContentWrapper;