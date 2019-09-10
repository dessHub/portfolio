import React from 'react';
import '../styles/App.scss';
import Hero from './Hero';
import About from './About';
import Experties from './Experties';
import Testimonials from './Testimonials';

function App() {
  return (
    <div className="App">
       <Hero />
       <About />
       <Experties />
       <Testimonials />
    </div>
  );
}

export default App;
