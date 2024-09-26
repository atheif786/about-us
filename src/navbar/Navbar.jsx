//import { CiSearch } from "react-icons/ci";
import React, { useRef } from 'react';
import './Navbar.css'; 
import aboutus from '../assets/1.png';
import work from '../assets/2.png';
import awards from '../assets/3.png';
import leader from '../assets/4.png';
import product from '../assets/5.png';

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <a href="https://github.com/sampanna17/Trashset_Intern/tree/main" role="button">eleks<sup>&reg;</sup></a>
        </div>
        <ul className="nav-links">
          <li><a href="https://github.com/sampanna17/Trashset_Intern/tree/main" role="button">Services</a></li>
          <li><a href="https://github.com/sampanna17/Trashset_Intern/tree/main" role="button">Industries</a></li>
          <li><a href="https://github.com/sampanna17/Trashset_Intern/tree/main" role="button">Clients</a></li>

          <li className="about-us-item">
  <a href="https://github.com/sampanna17/Trashset_Intern/tree/main" role="button"className="about-us-link">About us</a>
  <div className="about-us-submenu">
    <div className="submenu-item">
      <a href="About.jsx" className="submenu-link">
        <h4>About us</h4>
        <p>Meet ELEKS, a trusted partner for software engineering and technology consulting services.</p>
        <img src={aboutus} alt="Icon for About us" className="submenu-icon"/>
      </a>
    </div>
    <div className="submenu-item">
      <a href="Work.jsx" role="button"className="submenu-link">
        <h4>How we work</h4>
        <p>Learn how we help our clients address complex business problems with technology solutions.</p>
        <img src={work} alt="Icon for How we work" className="submenu-icon"/>
      </a>
    </div>
    <div className="submenu-item">
      <a href="Award.jsx" role="button" className="submenu-link">
        <h4>Awards and partners</h4>
        <p>The recognition our solutions receive from prestigious associations and award programs.</p>
        <img src={awards} alt="Icon for Awards and partners" className="submenu-icon"/>
      </a>
    </div>
    <div className="submenu-item">
      <a href="https://github.com/sampanna17/Trashset_Intern/tree/main" role="button" className="submenu-link">
        <h4>Leadership team</h4>
        <img src={leader} alt="Icon for Leadership team" className="submenu-icon-work"/>
      </a>
      <a href="https://github.com/sampanna17/Trashset_Intern/tree/main" role="button" className="submenu-link">
        <h4>Our products</h4>
        <img src={product} alt="Icon for Our products" className="submenu-icon-work"/>
      </a>
    </div>
        <div className="submenu-item">
          <a href="https://github.com/sampanna17/Trashset_Intern/tree/main" role="button"className="submenu-link">
            <h4>CSR</h4>
          </a>
          <a href="https://github.com/sampanna17/Trashset_Intern/tree/main" role="button" className="submenu-link">
            <h4>Careers</h4>
          </a>
          <a href="https://github.com/sampanna17/Trashset_Intern/tree/main" role="button" className="submenu-link">
            <h4>Press kit</h4>
          </a>
        </div>
      </div>
    </li>
          <li><a href="https://github.com/sampanna17/Trashset_Intern/tree/main" role="button">Blog</a></li>
        </ul>
        <div className="right-section">
          <a href="https://github.com/sampanna17/Trashset_Intern/tree/main" role="button" className="language-switch">EN</a>
          <a href="https://github.com/sampanna17/Trashset_Intern/tree/main" role="button" className="contact-us">Contact us <span>&#8599;</span></a>
          {/* <CiSearch className="search-icon"/> */}
        </div>
      </nav>
      <div id="horizontal_line"></div>
    </>
  );
}

export default Navbar;
