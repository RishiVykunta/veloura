import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, User, Menu, X, Search } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container flex-between">
        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>

        <Link to="/" className="logo">
          <img src="https://res.cloudinary.com/dqcxekzxn/image/upload/v1778683336/Screenshot_2026-05-13_194015_rtsdbz.png" alt="Veloura Logo" />
        </Link>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/new-arrivals" onClick={() => setIsOpen(false)}>New Arrivals</Link></li>
          <li className="dropdown">
            <Link to="/clothing" onClick={() => setIsOpen(false)}>Clothing</Link>
            <ul className="dropdown-menu">
              <li><Link to="/category/short-kurti" onClick={() => setIsOpen(false)}>Short Kurti</Link></li>
              <li><Link to="/category/sharara-set" onClick={() => setIsOpen(false)}>Sharara Set</Link></li>
            </ul>
          </li>
          <li><Link to="/best-seller" onClick={() => setIsOpen(false)}>Best Seller</Link></li>
          <li><Link to="/tag-on-us" onClick={() => setIsOpen(false)}>Tag On Us</Link></li>
          <li><Link to="/about-us" onClick={() => setIsOpen(false)}>About Us</Link></li>
        </ul>

        <div className="nav-actions flex-center">
          <Search size={20} className="icon" />
          <Link to="/admin"><User size={20} className="icon" /></Link>
          <div className="cart-icon">
            <ShoppingBag size={20} className="icon" />
            <span className="cart-count">0</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
