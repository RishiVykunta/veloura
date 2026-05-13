import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page container section-padding">
      <div className="about-header text-center">
        <span className="subtitle">Our Story</span>
        <h1>Welcome to Veloura</h1>
      </div>
      <div className="about-content-grid">
        <div className="about-text">
          <h2>Redefining Indian Elegance</h2>
          <p>Founded in 2024, Veloura was born out of a passion for traditional Indian craftsmanship and a desire to make it accessible to the modern woman. We believe that elegance shouldn't be complicated, and luxury should be a part of your everyday life.</p>
          <p>Our collections are carefully curated, focusing on premium fabrics like soft cottons, silks, and georgettes, embellished with traditional handwork that tells a story of heritage and heart.</p>
          <div className="stats-grid">
            <div className="stat-item">
              <h3>500+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Unique Designs</p>
            </div>
            <div className="stat-item">
              <h3>100%</h3>
              <p>Hand-crafted</p>
            </div>
          </div>
        </div>
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800" alt="Veloura Workshop" />
        </div>
      </div>
    </div>
  );
};

export default About;
