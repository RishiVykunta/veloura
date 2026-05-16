import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, User, Menu, X, Search } from 'lucide-react';
import './Navbar.css';

// Custom Brand Icons
const InstagramIcon = ({ size = 20, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const WhatsAppIcon = ({ size = 20, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-10.4 8.38 8.38 0 0 1 3.8.9L21 4.2l-1.7 4.7a8.38 8.38 0 0 1 .9 3.8z"/>
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      {/* Top Announcement Bar */}
      <div className="announcement-bar">
        <div className="announcement-content">
          <span>🌸 DESIGNED TO MAKE YOU SHINE</span>
          <span>🚚 FREE SHIPPING ABOVE ₹2999</span>
          <span>✨ HANDCRAFTED FOR EVERY WOMAN</span>
        </div>
      </div>

      <nav className="navbar">
        <div className="container main-nav">
          {/* Left: Social Icons */}
          <div className="nav-left social-icons hide-mobile">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <InstagramIcon size={20} className="icon" />
            </a>
            <a href="https://wa.me/yournumber" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon size={20} className="icon" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </div>

          {/* Center: Logo */}
          <Link to="/" className="logo">
            <img src="https://res.cloudinary.com/dqcxekzxn/image/upload/v1778683336/Screenshot_2026-05-13_194015_rtsdbz.png" alt="Veloura Logo" />
          </Link>

          {/* Right: Actions */}
          <div className="nav-actions">
            <Search size={20} className="icon" />
            <Link to="/admin" className="hide-mobile">
              <User size={20} className="icon" />
            </Link>
            <div className="cart-icon">
              <ShoppingBag size={20} className="icon" />
              <span className="cart-count">0</span>
            </div>
          </div>
        </div>

        {/* Desktop Navigation Categories */}
        <div className="categories-nav hide-mobile">
          <ul className="nav-links">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/new-arrivals">NEW ARRIVALS</Link></li>
            <li className="dropdown">
              <Link to="/clothing">CLOTHING</Link>
              <ul className="dropdown-menu">
                <li><Link to="/category/short-kurti">Short Kurti</Link></li>
                <li><Link to="/category/sharara-set">Sharara Set</Link></li>
              </ul>
            </li>
            <li><Link to="/best-seller">BEST SELLER</Link></li>
            <li><Link to="/tag-on-us">TAG ON US</Link></li>
            <li><Link to="/about-us">ABOUT US</Link></li>
          </ul>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isOpen ? 'active' : ''}`}>
          <ul className="mobile-links">
            <li><Link to="/" onClick={() => setIsOpen(false)}>HOME</Link></li>
            <li><Link to="/new-arrivals" onClick={() => setIsOpen(false)}>NEW ARRIVALS</Link></li>
            <li><Link to="/clothing" onClick={() => setIsOpen(false)}>CLOTHING</Link></li>
            <li><Link to="/best-seller" onClick={() => setIsOpen(false)}>BEST SELLER</Link></li>
            <li><Link to="/tag-on-us" onClick={() => setIsOpen(false)}>TAG ON US</Link></li>
            <li><Link to="/about-us" onClick={() => setIsOpen(false)}>ABOUT US</Link></li>
            <li className="mobile-socials">
              <InstagramIcon size={24} />
              <WhatsAppIcon size={24} />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;


