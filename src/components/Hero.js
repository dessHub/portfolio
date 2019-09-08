import React from 'react';
import prof from '../prof.jpg';

function Hero() {
  return (
    <div className="hero">
      <div className="hero__intro">
           <p className="hero__intro-hi">oh!, Hello, nice to meet you!<span role="img" aria-label="winky">😉</span></p>
               <p className="hero__intro-name"><span>I'M</span> Korir Desmond</p>
 <p className="hero__intro-title"> <span role="img" aria-label="dev">👨🏽‍💻</span> <span>Full-stack Node Js | React | Vue Js Developer</span></p>
       <p className="hero__intro-subtitle">Blockchain Enthusiast! </p>
      </div>
      <div className="hero__avatar">
        <div className="hero__avatar-frame">
            <img src={prof} alt=""/>  
        </div>  
      </div>
    </div>
  )
}

export default Hero;
