import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home({ title, ...props }) {
  return (
    <Layout pageTitle={`${title}`} >
      <div className="hero fade-in">
        <div className="hero__intro">
             <p className="hero__intro-hi">oh!, Hello, nice to meet you!<span role="img" aria-label="winky">😉</span></p>
                 <p className="hero__intro-name"><span>I'M</span> Korir Desmond</p>
   <p className="hero__intro-title"> <span role="img" aria-label="dev">👨🏽‍💻</span> <span>Full-stack Node Js | React | Vue Js Developer</span></p>
         <p className="hero__intro-subtitle">Blockchain Enthusiast! </p>

         <div className="hero__socials">
             <span><a href="https://github.com/dessHub" target="_blank">Github</a></span>
             <span><a href="https://www.linkedin.com/in/kipngetich-korir-desmond/" target="_blank">LinkedIn</a></span>
             <span><a href="https://twitter.com/DeskipL" target="_blank">Twitter</a></span>
         </div>
         <div className="hero__cta">
               <p>Learn more  <Link href="/about"><span>About Me ></span></Link></p>
         </div>
        </div>
        <div className="hero__avatar">
          <div className="hero__avatar-frame">
              <img src="./profile.png" alt=""/>  
          </div>  
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {

  return {
    props: {
      title: "Korir Desmond"
    },
  }
}

