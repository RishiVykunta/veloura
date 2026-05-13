import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import AdminDashboard from './pages/AdminDashboard';
import WhatsAppButton from './components/WhatsAppButton';
import ShopContextProvider from './context/ShopContext';

function App() {
  return (
    <ShopContextProvider>
      <Router>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/admin" element={<AdminDashboard />} />
            {/* Add more routes as needed */}
            <Route path="*" element={<Home />} />
          </Routes>
          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </ShopContextProvider>
  );
}

export default App;
