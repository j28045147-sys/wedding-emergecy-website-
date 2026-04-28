import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Roles from './components/Roles';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <Features />
      <HowItWorks />
      <Roles />
      <Footer />
    </div>
  );
}

export default App;
