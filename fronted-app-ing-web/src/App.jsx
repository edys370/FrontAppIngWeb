import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppBar from './components/layout/AppBar';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import ProductForm from './pages/ProductForm';
import HealthMonitor from './pages/HealthMonitor';
import Settings from './pages/Settings';

function App() {
  return (
    <BrowserRouter>
      <AppBar title="Products Microservice" />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/form" element={<ProductForm />} />
          <Route path="/form/:id" element={<ProductForm />} />
          <Route path="/health" element={<HealthMonitor />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
