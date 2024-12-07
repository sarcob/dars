import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo">Tailor.</div>
        <nav className="nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button className="visit-btn">Visit Us</button>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <div className="circle-text">BEST TAILOR SERVICE IN YOUR CITY</div>
          <h1>About us</h1>
        </div>
        <div className="hero-image">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Tailor Image"
          />
        </div>
      </section>

      <section className="overlap-container">
        <div className="image-wrapper">
          <img
            src="https://via.placeholder.com/400x500"
            alt="Tailor 1"
            className="image image-1"
          />
          <img
            src="https://via.placeholder.com/300x400"
            alt="Tailor 2"
            className="image image-2"
          />
        </div>
      </section>

      <section className="about-section">
        <div className="about-content">
          <h2>About our tailor house</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
          <p>
            Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
            Suspendisse varius enim in eros elementum tristique.
          </p>
          <button className="more-btn">More About Us</button>
        </div>
      </section>
    </div>
  );
}

export default Home;