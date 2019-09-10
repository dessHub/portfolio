import React from 'react';
import '../styles/App.scss';
import Hero from './Hero';
import About from './About';
import Experties from './Experties';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
       <Hero />
       <About />
       <Experties />
       <Testimonials />
       <Contact />
       <Footer />
    </div>
  );
}

export default App;
