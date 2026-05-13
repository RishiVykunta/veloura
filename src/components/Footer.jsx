import React from 'react';
import { Camera, Mail, Phone, MapPin, Share2, Send } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <h2>VELOURA</h2>
          <p>Exquisite Indian ethnic wear for the modern woman. Redefining elegance since 2024.</p>
          <div className="social-links">
            <a href="https://www.instagram.com/_.velouraofficial?igsh=MWhld20xam0zb3ZmNQ==" target="_blank" rel="noreferrer"><Camera size={20} /></a>
            <a href="#"><Share2 size={20} /></a>
            <a href="#"><Send size={20} /></a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/new-arrivals">New Arrivals</a></li>
            <li><a href="/best-seller">Best Seller</a></li>
            <li><a href="/about-us">About Us</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>Policies</h3>
          <ul>
            <li><a href="#">Shipping Policy</a></li>
            <li><a href="#">Refund Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <ul>
            <li><Phone size={16} /> +91 8320187353</li>
            <li><Mail size={16} /> hello@veloura.com</li>
            <li><MapPin size={16} /> Gujarat, India</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Veloura. All Rights Reserved. Designed with Love.</p>
      </div>
    </footer>
  );
};

export default Footer;
