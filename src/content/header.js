import React, { useState } from 'react';
import Buttons from '../components/Buttons/Button';
import Logo from "../Scenes/images/Logo.png";
import "./styles.css";

const Header = () => {
  const [activeLink, setActiveLink] = useState('home');

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveLink(sectionId);
    }
  };

  return (
    <header>
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <div className="logo">
              <img src={Logo} alt='logo' className='logo' />
            </div>
          </li>
          <li>
            <a href="#home" onClick={() => scrollToSection('home')} className={activeLink === 'home' ? 'active' : ''}>Home</a>
          </li>
          <li>
            <a href="#about" onClick={() => scrollToSection('about')} className={activeLink === 'about' ? 'active' : ''}>About</a>
          </li>
          <li>
            <a href="#services" onClick={() => scrollToSection('services')} className={activeLink === 'services' ? 'active' : ''}>Services</a>
          </li>
          <li>
            <a href="#works" onClick={() => scrollToSection('works')} className={activeLink === 'works' ? 'active' : ''}>Works</a>
          </li>
          <li>
            <a href="#how_it_works" onClick={() => scrollToSection('how_it_works')} className={activeLink === 'how_it_works' ? 'active' : ''}>How It Works</a>
          </li>
          <li>
            <a href="#blogs" onClick={() => scrollToSection('blogs')} className={activeLink === 'blogs' ? 'active' : ''}>Blogs</a>
          </li>
          <li>
            <div className="button">
              <Buttons mode="hover" size="large">
                Demo
              </Buttons>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
