import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Aditya Raj</h1>
        <p className="tagline">Writer & Storyteller</p>
      </div>
      <nav className="nav">
        <ul>
          <li><NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink></li>
          <li><NavLink to="/my-stories" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Stories</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
