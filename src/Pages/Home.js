import React from 'react'
import './Home.css'
import {NavLink} from 'react-router-dom'

export const Home=()=>{
    return(
        <>
        <section className="hero">
  <div className="hero-content">
    <h1>Welcome to My Story World</h1>
    <p>Hi, I'm Aditya Raj, a passionate writer who loves to share stories that captivate, inspire, and entertain. Dive into my creative universe and explore the tales I’ve crafted.</p>
    <button className="cta-btn"><NavLink to="/my-stories" style={{textDecoration:"none",color:"white"}}>Start Reading</NavLink>
    </button>
  </div>
</section>


        </>
    )
}