import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import api from '../api/axios';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import Dialog from '../components/ui/Dialog';
import Skeleton from '../components/ui/Skeleton';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let ignore = false;
    api.get(`/api/v1/products/${id}`)
      .then(res => {
        if (!ignore) {
          const data = res.data?.data || res.data;
          setProduct(data);
        }
      })
      .catch(err => {
        if (!ignore) {
          console.error('Error fetching product:', err);
          setError('No se pudo encontrar el producto solicitado.');
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
  }, [id]);

  const handleDelete = async () => {
    setDeleting(true);
    try {
      await api.delete(`/api/v1/products/${id}`);
      setShowDeleteModal(false);
      navigate('/');
    } catch (err) {
      console.error('Error deleting product:', err);
      alert('Error al eliminar el producto');
      setDeleting(false);
    }
  };

  if (loading) {
    return (
      <div>
        <Skeleton className="skeleton-card" />
        <Skeleton className="skeleton-card" />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div>
        <p style={{ color: 'var(--color-destructive)' }}>{error || 'Producto no encontrado'}</p>
        <Link to="/">
          <Button variant="secondary">← Volver al catálogo</Button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div style={{ marginBottom: 'var(--space-md)' }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontWeight: 500 }}>
          ← Volver al Catálogo
        </Link>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-lg)', flexWrap: 'wrap', gap: 'var(--space-sm)' }}>
        <div>
          <h1 style={{ marginBottom: 'var(--space-xs)' }}>{product.name}</h1>
          <span style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-muted-foreground)', fontSize: 14 }}>
            ID: {product.id}
          </span>
        </div>
        <div style={{ display: 'flex', gap: 'var(--space-sm)' }}>
          <Link to={`/form/${product.id}`}>
            <Button variant="secondary">Editar Producto</Button>
          </Link>
          <Button variant="danger" onClick={() => setShowDeleteModal(true)}>
            Eliminar
          </Button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-md)', marginBottom: 'var(--space-lg)' }}>
        <Card header="Información Principal">
          <p><strong>Categoría:</strong> <Badge category={product.category}>{product.category || 'General'}</Badge></p>
          <p><strong>Precio:</strong> <span style={{ fontSize: 20, fontWeight: 700, color: 'var(--color-primary)' }}>${typeof product.price === 'number' ? product.price.toFixed(2) : product.price}</span></p>
          <p><strong>Stock Disponible:</strong> <span style={{ fontWeight: 600 }}>{product.stock} unidades</span></p>
          {product.createdAt && (
            <p><strong>Fecha Registro:</strong> {new Date(product.createdAt).toLocaleString()}</p>
          )}
        </Card>

        <Card header="Descripción">
          <p style={{ lineHeight: 1.6, color: 'var(--color-muted-foreground)' }}>
            {product.description || 'Sin descripción detallada.'}
          </p>
        </Card>
      </div>

      <Dialog 
        open={showDeleteModal} 
        title="Confirmar eliminación" 
        onClose={() => setShowDeleteModal(false)}
      >
        <p>¿Estás seguro de que deseas eliminar permanentemente <strong>{product.name}</strong>?</p>
        <p style={{ fontSize: 13, color: 'var(--color-muted-foreground)', marginTop: 8 }}>Esta acción no se puede deshacer.</p>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12, marginTop: 24 }}>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>Cancelar</Button>
          <Button variant="danger" onClick={handleDelete} disabled={deleting}>
            {deleting ? 'Eliminando...' : 'Eliminar'}
          </Button>
        </div>
      </Dialog>
    </div>
  );
}
