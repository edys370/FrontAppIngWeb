import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/axios';
import DataTable from '../components/ui/DataTable';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import SearchBar from '../components/ui/SearchBar';
import EmptyState from '../components/ui/EmptyState';
import Skeleton from '../components/ui/Skeleton';
import './ProductList.css';

const CATEGORIES = ['Todos', 'Computación', 'Accesorios', 'Monitores', 'General'];

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todos');

  const loadData = () => {
    setLoading(true);
    setError(null);
    api.get('/api/v1/products')
      .then(res => {
        const data = Array.isArray(res.data?.data) 
          ? res.data.data 
          : (Array.isArray(res.data) ? res.data : []);
        setProducts(data);
      })
      .catch(err => {
        console.error('Error fetching products:', err);
        setError('No se pudo conectar con el microservicio. Verifica que el backend esté en ejecución.');
        setProducts([]);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    let ignore = false;
    api.get('/api/v1/products')
      .then(res => {
        if (!ignore) {
          const data = Array.isArray(res.data?.data) 
            ? res.data.data 
            : (Array.isArray(res.data) ? res.data : []);
          setProducts(data);
          setError(null);
        }
      })
      .catch(err => {
        if (!ignore) {
          console.error('Error fetching products:', err);
          setError('No se pudo conectar con el microservicio. Verifica que el backend esté en ejecución.');
          setProducts([]);
        }
      })
      .finally(() => {
        if (!ignore) {
          setLoading(false);
        }
      });

    return () => {
      ignore = true;
    };
  }, []);

  // Filtrado por categoría y búsqueda
  const filteredProducts = products.filter(p => {
    const matchesCat = activeCategory === 'Todos' || 
      (p.category && p.category.toLowerCase() === activeCategory.toLowerCase());
    const matchesSearch = !search || 
      p.name?.toLowerCase().includes(search.toLowerCase()) ||
      p.description?.toLowerCase().includes(search.toLowerCase()) ||
      p.id?.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const columns = ['ID', 'Nombre', 'Categoría', 'Precio', 'Stock', 'Acciones'];

  const tableData = filteredProducts.map(p => ({
    ID: <span className="mono-id">{p.id}</span>,
    Nombre: (
      <Link to={`/product/${p.id}`} className="product-link">
        {p.name}
      </Link>
    ),
    Categoría: <Badge category={p.category}>{p.category || 'General'}</Badge>,
    Precio: <strong>${typeof p.price === 'number' ? p.price.toFixed(2) : p.price}</strong>,
    Stock: (
      <span className={p.stock < 10 ? 'stock-low' : ''}>
        {p.stock} {p.stock < 10 ? '⚠️' : ''}
      </span>
    ),
    Acciones: (
      <div className="action-links">
        <Link to={`/product/${p.id}`} className="action-btn action-btn-view">
          Ver
        </Link>
        <Link to={`/form/${p.id}`} className="action-btn action-btn-edit">
          Editar
        </Link>
      </div>
    )
  }));

  return (
    <div>
      <div className="page-header">
        <div className="page-title-group">
          <h1 className="page-title">
            Catálogo de Productos
            {!loading && <span className="badge-count">{products.length}</span>}
          </h1>
          <p className="page-subtitle">
            Gestión y monitorización de inventario del microservicio
          </p>
        </div>
        <Link to="/form">
          <Button variant="primary">+ Nuevo Producto</Button>
        </Link>
      </div>

      {error && (
        <div className="error-banner">
          <span>{error}</span>
          <Button variant="secondary" onClick={loadData}>Reintentar</Button>
        </div>
      )}

      <div className="controls-bar">
        <SearchBar 
          placeholder="Buscar por nombre, descripción o ID..." 
          value={search} 
          onChange={e => setSearch(e.target.value)} 
        />

        <div className="category-filters">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`filter-chip ${activeCategory === cat ? 'filter-chip-active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div>
          <Skeleton className="skeleton-card" />
          <Skeleton className="skeleton-card" />
          <Skeleton className="skeleton-card" />
        </div>
      ) : filteredProducts.length > 0 ? (
        <DataTable columns={columns} data={tableData} />
      ) : (
        <EmptyState 
          title="No se encontraron productos" 
          description={
            search || activeCategory !== 'Todos'
              ? "Prueba cambiando los filtros o el término de búsqueda."
              : "Aún no hay productos registrados en el microservicio."
          }
        />
      )}
    </div>
  );
}
