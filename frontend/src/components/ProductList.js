import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const API_BASE_URL = 'https://localhost:7073';

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_BASE_URL}/api/products`);
      setProducts(response.data);
      setError('');
    } catch (error) {
      setError('Failed to fetch products: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;

    try {
      await axios.delete(`${API_BASE_URL}/api/products/${id}`);
      setProducts(products.filter(product => product.id !== id));
    } catch (error) {
      alert('Failed to delete product: ' + error.message);
    }
  };

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mt-5">
      <div className="card shadow-sm">
        <div className="card-body">
          <h2 className="card-title mb-4 text-center">Product Catalog</h2>

          {products.length === 0 ? (
            <p className="text-muted text-center">
              No products found. Add some products using the form above.
            </p>
          ) : (
            <div className="table-responsive">
              <table className="table table-striped table-hover align-middle">
                <thead className="table-dark">
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Added On</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td>{product.id}</td>
                      <td>{product.productName}</td>
                      <td>${product.price.toFixed(2)}</td>
                      <td>{new Date(product.createdAt).toLocaleDateString()}</td>
                      <td>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => handleDelete(product.id)}
                        >
                          <i className="bi bi-trash"></i> Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;