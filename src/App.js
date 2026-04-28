import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Roles from './components/Roles';
import Footer from './components/Footer';
import DebugInfo from './components/DebugInfo';

function App() {
  // Show debug info in development or if URL has ?debug=true
  const showDebug = process.env.NODE_ENV === 'development' || 
                    window.location.search.includes('debug=true');
  
  return (
    <div className="App">
      <Hero />
      <Features />
      <HowItWorks />
      <Roles />
      <Footer />
      {showDebug && <DebugInfo />}
    </div>
  );
}

export default App;
