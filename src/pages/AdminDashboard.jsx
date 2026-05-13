import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Plus, Edit, Trash, ShoppingBag, Package } from 'lucide-react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const { products, addProduct, deleteProduct, orders } = useContext(ShopContext);
  const [activeTab, setActiveTab] = useState('products');
  const [showAddForm, setShowAddForm] = useState(false);
  
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    category: 'Short Kurti',
    image: '',
    description: ''
  });

  const handleAddProduct = (e) => {
    e.preventDefault();
    addProduct({ ...newProduct, price: Number(newProduct.price) });
    setShowAddForm(false);
    setNewProduct({ name: '', price: '', category: 'Short Kurti', image: '', description: '' });
  };

  return (
    <div className="admin-container">
      <aside className="admin-sidebar">
        <div className="sidebar-header">
          <h2>VELOURA ADMIN</h2>
        </div>
        <nav className="sidebar-nav">
          <button 
            className={activeTab === 'products' ? 'active' : ''} 
            onClick={() => setActiveTab('products')}
          >
            <Package size={20} /> Products
          </button>
          <button 
            className={activeTab === 'orders' ? 'active' : ''} 
            onClick={() => setActiveTab('orders')}
          >
            <ShoppingBag size={20} /> Orders
          </button>
        </nav>
      </aside>

      <main className="admin-main">
        {activeTab === 'products' && (
          <div className="admin-section">
            <div className="section-header">
              <h3>Product Management</h3>
              <button className="btn-add" onClick={() => setShowAddForm(!showAddForm)}>
                {showAddForm ? 'Cancel' : <><Plus size={20} /> Add Product</>}
              </button>
            </div>

            {showAddForm && (
              <form className="add-product-form animate-fade-in" onSubmit={handleAddProduct}>
                <div className="form-group">
                  <label>Product Name</label>
                  <input 
                    type="text" 
                    value={newProduct.name} 
                    onChange={(e) => setNewProduct({...newProduct, name: e.target.value})} 
                    required 
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Price (₹)</label>
                    <input 
                      type="number" 
                      value={newProduct.price} 
                      onChange={(e) => setNewProduct({...newProduct, price: e.target.value})} 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>Category</label>
                    <select 
                      value={newProduct.category} 
                      onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
                    >
                      <option>Short Kurti</option>
                      <option>Sharara Set</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label>Image URL</label>
                  <input 
                    type="text" 
                    value={newProduct.image} 
                    onChange={(e) => setNewProduct({...newProduct, image: e.target.value})} 
                    placeholder="https://..."
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <textarea 
                    value={newProduct.description} 
                    onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
                  />
                </div>
                <button type="submit" className="btn-submit">Save Product</button>
              </form>
            )}

            <div className="product-table-container">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td><img src={product.image} alt="" className="table-img" /></td>
                      <td>{product.name}</td>
                      <td>{product.category}</td>
                      <td>₹{product.price}</td>
                      <td className="table-actions">
                        <button className="btn-edit"><Edit size={16} /></button>
                        <button className="btn-delete" onClick={() => deleteProduct(product.id)}><Trash size={16} /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'orders' && (
          <div className="admin-section">
            <div className="section-header">
              <h3>Order Details</h3>
            </div>
            <div className="product-table-container">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Date</th>
                    <th>Total</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.length === 0 ? (
                    <tr><td colSpan="5" className="empty-msg">No orders found yet.</td></tr>
                  ) : (
                    orders.map((order) => (
                      <tr key={order.id}>
                        <td>#{order.id}</td>
                        <td>{order.customerName}</td>
                        <td>{order.date}</td>
                        <td>₹{order.total}</td>
                        <td><span className={`status-badge ${order.status.toLowerCase()}`}>{order.status}</span></td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
