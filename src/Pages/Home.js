import React from 'react'
import './Home.css'
import {NavLink} from 'react-router-dom'

export const Home=()=>{
    return(
        <>
        <section className="hero">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Welcome to My Literary World</h1>
              <p className="hero-subtitle">Discover captivating stories that inspire, challenge, and entertain</p>
              <p className="hero-description">Explore carefully crafted narratives by Aditya Raj—a storyteller dedicated to creating immersive experiences through the art of writing.</p>
              <NavLink to="/my-stories" className="cta-btn">Explore Stories</NavLink>
            </div>
          </div>
        </section>
        </>
    )
}