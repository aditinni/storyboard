import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink for footer navigation
import "./Footer.css"; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <ul>
          <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
         
        </ul>
      </div>
      <div className="footer-info">
        <p style={{color:"white"}}>&copy; 2025 Aditya Raj-Trying to write, to explore. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
