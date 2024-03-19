import { useState } from 'react'

import logo1 from '../../assets/imgs/Group3.png'
import './Navbar.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };


  return (

    
    <nav className="navbar">
      <div className="navCon">
        <div className="logo">
          <div className="bigE text_colorBg">
          E
          </div>
          <div className="logoText">
          <div className="logoName">
          eazzyfundzz
          </div>
          <div className="logoTagline">
          FUNDING MADE EASY
          </div>
          </div>
        </div>

        <div className={`navlinks ${isOpen ? 'open' : ''}`}>

          <NavLink to="/" className="links">Home</NavLink>
          <NavLink to="/faq" className="links">Faqs </NavLink>
          <NavLink to="/contactUs" className="links">Who we are?</NavLink>
          <NavLink to="/aboutUs" className="links">Contact Us</NavLink>
          <button className="btn1 drawerbtn">Sign Up</button>
        </div>

        <div className="btns">
          <button className="btn1">Sign Up</button>
        </div>

        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleNavbar}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar