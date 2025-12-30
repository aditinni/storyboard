import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink for footer navigation
import "./Footer.css"; // Import the CSS file for styling

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p style={{color:'white'}}>&copy; {currentYear} Aditya Raj. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
