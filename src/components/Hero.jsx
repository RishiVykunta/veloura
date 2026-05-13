import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import heroImage from '../assets/hero-kurti.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content animate-fade-in">
        <span className="subtitle">Luxury Ethnic Wear</span>
        <h1>VELOURA</h1>
        <p>Elegance in every thread. Discover our latest collection of premium Kurtis and Sharara sets.</p>
        <div className="hero-btns">
          <Link to="/clothing" className="btn-primary">Shop Now</Link>
          <Link to="/new-arrivals" className="btn-gold">New Arrivals</Link>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Veloura Hero" />
        <div className="image-accent"></div>
      </div>
    </section>
  );
};

export default Hero;
