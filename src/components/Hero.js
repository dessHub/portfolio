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

       <div class="hero__socials">
           <span><a href="https://github.com/dessHub" target="_blank">Github</a></span>
           <span><a href="https://www.linkedin.com/in/kipngetich-korir-desmond/" target="_blank">LinkedIn</a></span>
           <span><a href="https://twitter.com/DeskipL" target="_blank">Twitter</a></span>
       </div>
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
