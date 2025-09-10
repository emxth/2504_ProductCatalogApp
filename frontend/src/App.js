import './App.css';
import { useState } from 'react';
import Notification from './components/Notification';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

function App() {
const [notification, setNotification] = useState({ message: '', type: '' });
  const [refreshProducts, setRefreshProducts] = useState(0);

  const showNotification = (message, type = 'info') => {
    setNotification({ message, type });
    
    // Auto-hide notification after 5 seconds
    setTimeout(() => {
      setNotification({ message: '', type: '' });
    }, 5000);
  };

  const handleProductAdded = () => {
    // Trigger product list refresh
    setRefreshProducts(prev => prev + 1);
  };

  return (
    <div className="App">
      <h1 className='display-4 text-center'>Product Catalog Management</h1>
      
      <Notification 
        message={notification.message} 
        type={notification.type} 
      />
      
      <ProductForm 
        onProductAdded={handleProductAdded}
        showNotification={showNotification}
      />
      
      <ProductList key={refreshProducts} />
    </div>
  );
}

export default App;
