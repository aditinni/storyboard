import React from "react";
import "./About.css";

export const About = () => {
  return (
    <div className="about-container">
      <div className="about-wrapper">
        <div className="about-header">
          <h1>About Me</h1>
          <p className="about-subtitle">Writer, Developer & Storyteller</p>
        </div>

        <div className="about-card">
          <h2>My Story</h2>
          <p>
            Hi, I'm <strong>Aditya Raj</strong>, a passionate writer and developer who believes in the power of storytelling to inspire, captivate, and transform. My creative journey blends the technical world of web development with the boundless imagination of narrative creation.
          </p>

          <h3>What I Do</h3>
          <div className="about-content">
            <div className="content-block">
              <h4>🖥️ Development</h4>
              <p>I specialize in building modern web applications using React, Node.js, and MongoDB. I love solving complex problems and creating impactful digital experiences.</p>
            </div>
            <div className="content-block">
              <h4>✍️ Writing</h4>
              <p>Beyond coding, I dive into stories across genres in both Hindi and English. Whenever inspiration strikes, I turn my thoughts into meaningful narratives that blend real experiences with fiction.</p>
            </div>
            <div className="content-block">
              <h4>🎯 Passion</h4>
              <p>I'm driven by continuous learning, creative problem-solving, and building projects that matter. Every story I write and every code I craft reflects my commitment to excellence.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
