import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Aditya Raj-Trying to write, to explore</h1>
      </div>
      <nav className="nav">
        <ul>
          <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/my-stories" activeClassName="active">My Stories</NavLink></li>
          <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
         
        </ul>
      </nav>
    </header>
  );
};

export default Header;
