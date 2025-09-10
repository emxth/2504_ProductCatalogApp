import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = ({ onProductAdded, showNotification }) => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [loading, setLoading] = useState(false);

  const API_BASE_URL = 'https://localhost:7073';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Basic validation
    if (!productName.trim() || !price) {
      showNotification('Please fill in all fields', 'error');
      setLoading(false);
      return;
    }

    if (parseFloat(price) <= 0) {
      showNotification('Price must be greater than zero', 'error');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(`${API_BASE_URL}/api/products`, {
        productName: productName.trim(),
        price: parseFloat(price)
      });

      showNotification('Product added successfully!', 'success');
      setProductName('');
      setPrice('');

      // Notify parent component
      if (onProductAdded) {
        onProductAdded(response.data);
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        showNotification('A product with this name already exists', 'error');
      } else {
        showNotification('Error adding product: ' + error.message, 'error');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-sm text-bg-light">
        <div className="card-body">
          <h2 className="card-title mb-4 text-center">Add New Product</h2>
          <form onSubmit={handleSubmit}>
            {/* Product Name */}
            <div className="mb-3">
              <label htmlFor="productName" className="form-label">
                Product Name
              </label>
              <input
                type="text"
                id="productName"
                className="form-control"
                placeholder="Enter product name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                disabled={loading}
                required
              />
            </div>

            {/* Price */}
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                type="number"
                id="price"
                className="form-control"
                placeholder="Enter price"
                step="0.01"
                min="0.01"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                disabled={loading}
                required
              />
            </div>

            {/* Submit Button */}
            <div className="d-flex flex-row mt-4">
              <button type="submit" className="btn btn-success px-4" disabled={loading}>
                {loading ? (
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                ) : (
                  "Add Product"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;