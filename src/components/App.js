import React from 'react';
import '../styles/App.scss';
import Hero from './Hero';
import About from './About';
import Experties from './Experties';

function App() {
  return (
    <div className="App">
       <Hero />
       <About />
       <Experties />
    </div>
  );
}

export default App;
