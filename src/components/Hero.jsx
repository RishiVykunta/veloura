import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=2000&auto=format&fit=crop',
      subtitle: 'Luxury Ethnic Wear',
      title: 'DESIGNED TO MAKE YOU SHINE',
      description: 'Elegance in every thread. Discover our latest collection of premium Kurtis.'
    },
    {
      image: 'https://images.unsplash.com/photo-1610030469668-93530c1761cf?q=80&w=2000&auto=format&fit=crop',
      subtitle: 'Handcrafted Perfection',
      title: 'HANDCRAFTED FOR EVERY WOMAN',
      description: 'Experience the art of traditional craftsmanship blended with modern style.'
    },
    {
      image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=2000&auto=format&fit=crop',
      subtitle: 'Exclusive Collection',
      title: 'NEW ARRIVALS 2026',
      description: 'Refresh your wardrobe with our latest seasonal arrivals and best sellers.'
    }
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-slider">
      {slides.map((slide, index) => (
        <div 
          key={index} 
          className={`slide ${index === current ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="overlay"></div>
          <div className="container hero-container">
            <div className="hero-content animate-slide-up">
              <span className="subtitle">{slide.subtitle}</span>
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
              <div className="hero-btns">
                <Link to="/clothing" className="btn-primary">Shop Now</Link>
                <Link to="/new-arrivals" className="btn-outline">View Collection</Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button className="slider-btn prev" onClick={prevSlide}>
        <ChevronLeft size={30} />
      </button>
      <button className="slider-btn next" onClick={nextSlide}>
        <ChevronRight size={30} />
      </button>

      <div className="slider-dots">
        {slides.map((_, index) => (
          <span 
            key={index} 
            className={`dot ${index === current ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Hero;

