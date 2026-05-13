import React from 'react';
import { ShoppingBag } from 'lucide-react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        {product.isNewArrival && <span className="badge">New</span>}
        <button className="add-to-cart-btn">
          <ShoppingBag size={20} />
        </button>
      </div>
      <div className="product-info">
        <span className="category">{product.category}</span>
        <h3>{product.name}</h3>
        <p className="price">₹{product.price.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default ProductCard;
