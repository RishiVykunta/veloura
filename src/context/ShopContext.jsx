import React, { createContext, useState, useEffect } from 'react';

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Royal Navy Gold Kurti',
      price: 1899,
      category: 'Short Kurti',
      image: '/src/assets/hero-kurti.png',
      description: 'A premium navy blue short kurti with intricate gold zari work.',
      isBestSeller: true,
      isNewArrival: true,
    },
    {
      id: 2,
      name: 'Elegance Sharara Set',
      price: 3499,
      category: 'Sharara Set',
      image: '/src/assets/sharara-set.png',
      description: 'Stunning royal blue sharara set with gold foil print and matching dupatta.',
      isBestSeller: true,
      isNewArrival: true,
    },
    {
      id: 3,
      name: 'Golden Bloom Kurti',
      price: 1499,
      category: 'Short Kurti',
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800',
      description: 'Casual yet elegant gold-toned short kurti for everyday grace.',
      isBestSeller: false,
      isNewArrival: true,
    },
    {
      id: 4,
      name: 'Peacock Grace Set',
      price: 4299,
      category: 'Sharara Set',
      image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&q=80&w=800',
      description: 'Vibrant blue sharara set inspired by the majestic peacock.',
      isBestSeller: true,
      isNewArrival: false,
    }
  ]);

  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  // Load from local storage if available
  useEffect(() => {
    try {
      const storedProducts = localStorage.getItem('veloura_products');
      if (storedProducts) setProducts(JSON.parse(storedProducts));

      const storedOrders = localStorage.getItem('veloura_orders');
      if (storedOrders) setOrders(JSON.parse(storedOrders));
    } catch (error) {
      console.error("Error loading from localStorage:", error);
    }
  }, []);

  // Save to local storage when state changes
  useEffect(() => {
    localStorage.setItem('veloura_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('veloura_orders', JSON.stringify(orders));
  }, [orders]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter(item => item.id !== id));
  };

  const placeOrder = (customerDetails) => {
    const newOrder = {
      id: Date.now(),
      items: cart,
      total: cart.reduce((acc, item) => acc + item.price, 0),
      status: 'Pending',
      date: new Date().toLocaleDateString(),
      ...customerDetails
    };
    setOrders((prev) => [...prev, newOrder]);
    setCart([]);
  };

  // Admin Functions
  const addProduct = (product) => {
    setProducts((prev) => [...prev, { ...product, id: Date.now() }]);
  };

  const updateProduct = (updatedProduct) => {
    setProducts((prev) => prev.map(p => p.id === updatedProduct.id ? updatedProduct : p));
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter(p => p.id !== id));
  };

  const updateOrderStatus = (id, status) => {
    setOrders((prev) => prev.map(o => o.id === id ? { ...o, status } : o));
  };

  const value = {
    products,
    cart,
    orders,
    addToCart,
    removeFromCart,
    placeOrder,
    addProduct,
    updateProduct,
    deleteProduct,
    updateOrderStatus
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
