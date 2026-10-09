import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import api from '../api/axios';
import Input from '../components/forms/Input';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const CATEGORY_OPTIONS = ['Computación', 'Accesorios', 'Monitores', 'General'];

export default function ProductForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = Boolean(id);

  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
    category: 'Computación'
  });
  const [loading, setLoading] = useState(isEditing);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (!id) return;
    let ignore = false;
    api.get(`/api/v1/products/${id}`)
      .then(res => {
        if (!ignore) {
          const data = res.data?.data || res.data;
          setForm({
            name: data.name || '',
            description: data.description || '',
            price: data.price ?? '',
            stock: data.stock ?? '',
            category: data.category || 'General'
          });
        }
      })
      .catch(err => {
        if (!ignore) {
          console.error('Error fetching product for edit:', err);
          setError('No se pudo cargar el producto a editar.');
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setSaving(true);

    const payload = {
      name: form.name.trim(),
      description: form.description.trim(),
      price: Number(form.price),
      stock: Number(form.stock),
      category: form.category
    };

    if (!payload.name) {
      setError('El nombre del producto es obligatorio.');
      setSaving(false);
      return;
    }

    if (isNaN(payload.price) || payload.price < 0) {
      setError('El precio debe ser un número positivo.');
      setSaving(false);
      return;
    }

    if (isNaN(payload.stock) || payload.stock < 0) {
      setError('El stock debe ser un entero positivo.');
      setSaving(false);
      return;
    }

    try {
      if (isEditing) {
        await api.put(`/api/v1/products/${id}`, payload);
        setSuccess('¡Producto actualizado correctamente!');
      } else {
        await api.post('/api/v1/products', payload);
        setSuccess('¡Producto creado exitosamente!');
      }
      setTimeout(() => {
        navigate('/');
      }, 1000);
    } catch (err) {
      console.error('Error saving product:', err);
      const msg = err.response?.data?.message || err.response?.data?.error || 'Error al guardar el producto.';
      setError(msg);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div style={{ padding: 'var(--space-lg)' }}>Cargando datos del producto...</div>;
  }

  return (
    <div style={{ maxWidth: 640, margin: '0 auto' }}>
      <div style={{ marginBottom: 'var(--space-md)' }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontWeight: 500 }}>
          ← Volver al Catálogo
        </Link>
      </div>

      <Card header={isEditing ? 'Editar Producto' : 'Crear Nuevo Producto'}>
        <form onSubmit={handleSubmit}>
          {error && (
            <div style={{ background: '#FEE2E2', color: '#991B1B', padding: 12, borderRadius: 8, marginBottom: 16 }}>
              {error}
            </div>
          )}

          {success && (
            <div style={{ background: '#DCFCE7', color: '#166534', padding: 12, borderRadius: 8, marginBottom: 16 }}>
              {success}
            </div>
          )}

          <Input 
            label="Nombre del Producto" 
            placeholder="Ej. Teclado Mecánico RGB"
            value={form.name} 
            onChange={e => setForm({ ...form, name: e.target.value })} 
            required 
          />

          <div className="input-group">
            <label className="input-label">Descripción</label>
            <textarea
              className="input"
              rows="3"
              placeholder="Detalles y especificaciones técnicas..."
              value={form.description}
              onChange={e => setForm({ ...form, description: e.target.value })}
              style={{ resize: 'vertical' }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <Input 
              label="Precio ($ USD)" 
              type="number" 
              step="0.01" 
              min="0"
              placeholder="0.00"
              value={form.price} 
              onChange={e => setForm({ ...form, price: e.target.value })} 
              required 
            />

            <Input 
              label="Stock (Unidades)" 
              type="number" 
              min="0"
              placeholder="0"
              value={form.stock} 
              onChange={e => setForm({ ...form, stock: e.target.value })} 
              required 
            />
          </div>

          <div className="input-group">
            <label className="input-label">Categoría</label>
            <select
              className="input"
              value={form.category}
              onChange={e => setForm({ ...form, category: e.target.value })}
            >
              {CATEGORY_OPTIONS.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12, marginTop: 24 }}>
            <Link to="/">
              <Button type="button" variant="secondary">Cancelar</Button>
            </Link>
            <Button type="submit" variant="primary" disabled={saving}>
              {saving ? 'Guardando...' : (isEditing ? 'Guardar Cambios' : 'Crear Producto')}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
