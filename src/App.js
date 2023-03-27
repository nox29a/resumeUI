import React from 'react';
import About from './components/About';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Certification from './components/Certification';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Skills from './components/Skills';

const App = () => {
  return <div className='overflow-hidden'>
    <Header />
    <Hero />
    <About />
    <Skills />
    <Portfolio />
    <Certification />
    <Contact />
    <Footer />
  </div>;
};

export default App;
