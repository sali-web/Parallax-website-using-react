import React from 'react';
import Buttons from '../components/Buttons/Button';
import "./styles.css";
const header = () => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
    };
  return (
    <header>
      <nav className="navbar">
        <ul className="nav-links">
          <div className="logo">
            <img src="your-logo.png" alt="Logo" />
          </div>

          <li>
            <a href="#home" onClick={() => scrollToSection('home')}>Home</a>
          </li>
          <li>
            <a href="#about" onClick={() => scrollToSection('about')}>About</a>
          </li>
          <li>
            <a href="#services" onClick={() => scrollToSection('services')}>Services</a>
          </li>
          <li>
            <a href="#works" onClick={() => scrollToSection('works')}>Works</a>
          </li>
          <li>
            <a href="#blogs" onClick={() => scrollToSection('blogs')}>Blogs</a>
          </li>

          <div className="button">
            <Buttons mode="hover" size="large">
              Schedule a demo
            </Buttons>
          </div>
        </ul>
      </nav>
    </header>
  )
  };
export default header;