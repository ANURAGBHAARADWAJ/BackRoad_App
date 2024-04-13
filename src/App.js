import React from 'react';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Services from './components/Services';
import Tours from './components/Tours';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
return (
  <React.Fragment>
  <Navbar />
  <Hero />
  <About />
  <Services />
  <Tours />
  <Footer />
  </React.Fragment>

  );
}

export default App;
