import React, { useContext } from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { ShopContext } from '../context/ShopContext';
import './Home.css';

const Home = () => {
  const { products } = useContext(ShopContext);
  const bestSellers = products.filter(p => p.isBestSeller);
  const newArrivals = products.filter(p => p.isNewArrival);

  return (
    <div className="home-page">
      <Hero />
      
      <section className="section-padding container">
        <div className="section-title">
          <span className="subtitle">Curated for you</span>
          <h2>Best Sellers</h2>
        </div>
        <div className="product-grid">
          {bestSellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="category-banners section-padding">
        <div className="container banner-grid">
          <div className="banner kurti-banner animate-fade-in">
            <div className="banner-content">
              <h3>Short Kurtis</h3>
              <p>Chic, comfortable, and timeless.</p>
              <button className="btn-gold">Explore</button>
            </div>
          </div>
          <div className="banner sharara-banner animate-fade-in">
            <div className="banner-content">
              <h3>Sharara Sets</h3>
              <p>Royal flair for your special occasions.</p>
              <button className="btn-gold">Explore</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding container">
        <div className="section-title">
          <span className="subtitle">Just In</span>
          <h2>New Arrivals</h2>
        </div>
        <div className="product-grid">
          {newArrivals.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="about-snippet section-padding">
        <div className="container flex-center">
          <div className="about-content text-center">
            <h2>About Veloura</h2>
            <p>Veloura is more than just a clothing brand; it's a celebration of Indian heritage blended with modern aesthetics. Every piece is crafted with love and attention to detail, ensuring you feel like royalty every time you wear us.</p>
            <button className="btn-primary">Our Story</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
