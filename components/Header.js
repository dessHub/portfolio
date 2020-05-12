import Link from 'next/link'

class Header extends React.Component {

  state = {
    modal: 'nav-mobile__off'
  }

  toggle() {
    this.setState({
      modal: this.state.modal === 'nav-mobile__off' ? 'nav-mobile__on' : 'nav-mobile__off'
    })
  }

  render() {
    return (
      <>
        <header className="header">
          <nav className="nav nav-desktop-only">
           <ul>
             <li><Link href="/">
                  <a>Home</a>
             </Link></li>
             <li><Link href="/about">
               <a>About</a>
             </Link></li>
             <li><Link href="/skills">
               <a>Experties</a>
             </Link></li>
             <li><Link href="/projects">
               <a>Projects</a>
             </Link></li>
           </ul>
          </nav>

          <nav className="nav nav-mobile-only">
           <ul className="nav-mobile__top">
             <li>
                    <div className="nav-icon" onClick={() => this.toggle()}></div>
             </li>
          </ul>
           <ul className={this.state.modal}>
             <li><Link href="/">
                <a onClick={() => this.toggle()}>  
                    Home
              </a>
             </Link></li>
             <li><Link href="/about">
               <a onClick={() => this.toggle()}>About</a>
             </Link></li>
             <li><Link href="/skills">
               <a onClick={() => this.toggle()}>Experties</a>
             </Link></li>
             <li><Link href="/projects">
               <a onClick={() => this.toggle()}>Projects</a>
             </Link></li>
             <li>
                  <span onClick={() => this.toggle()}><img src="https://uploads-ssl.webflow.com/591e9525f13786217f2e347e/592e4bc09c929c1e5f55d366_Close%20Icon.png" className="nav-close-icon" /></span>  
           </li>
           </ul>
          </nav>
        </header>
      </>
    )
  }
}

export default Header;
