import { useEffect, useState, useCallback } from 'react';
import api from '../api/axios';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Skeleton from '../components/ui/Skeleton';

export default function HealthMonitor() {
  const [health, setHealth] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastCheck, setLastCheck] = useState(null);

  const fetchHealth = useCallback(async () => {
    try {
      const res = await api.get('/health');
      setHealth(res.data);
      setLastCheck(new Date());
      setError(null);
    } catch (err) {
      console.error('Error checking health:', err);
      setError('El servicio no responde o se encuentra caído.');
      setHealth(null);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleManualCheck = () => {
    setLoading(true);
    setError(null);
    fetchHealth();
  };

  useEffect(() => {
    let ignore = false;
    api.get('/health')
      .then(res => {
        if (!ignore) {
          setHealth(res.data);
          setLastCheck(new Date());
          setError(null);
        }
      })
      .catch(err => {
        if (!ignore) {
          console.error('Error checking health:', err);
          setError('El servicio no responde o se encuentra caído.');
          setHealth(null);
        }
      })
      .finally(() => {
        if (!ignore) {
          setLoading(false);
        }
      });

    // Auto-refresh cada 30 segundos
    const timer = setInterval(() => {
      api.get('/health')
        .then(res => {
          if (!ignore) {
            setHealth(res.data);
            setLastCheck(new Date());
            setError(null);
          }
        })
        .catch(() => {
          if (!ignore) setError('El servicio no responde o se encuentra caído.');
        });
    }, 30000);

    return () => {
      ignore = true;
      clearInterval(timer);
    };
  }, []);

  const formatUptime = (seconds) => {
    if (!seconds) return '0s';
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    return `${hrs > 0 ? `${hrs}h ` : ''}${mins > 0 ? `${mins}m ` : ''}${secs}s`;
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-lg)', flexWrap: 'wrap', gap: 12 }}>
        <div>
          <h1 style={{ marginBottom: 4 }}>Monitor de Salud del Microservicio</h1>
          <p style={{ color: 'var(--color-muted-foreground)', fontSize: 14 }}>
            Observabilidad, estado de contenedores y métricas en tiempo real
          </p>
        </div>
        <Button variant="secondary" onClick={handleManualCheck} disabled={loading}>
          {loading ? 'Comprobando...' : '🔄 Actualizar Estado'}
        </Button>
      </div>

      {error && (
        <div style={{ background: '#FEE2E2', border: '1px solid #FCA5A5', color: '#991B1B', padding: 16, borderRadius: 8, marginBottom: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>❌ {error}</span>
          <Button variant="secondary" onClick={handleManualCheck}>Reintentar</Button>
        </div>
      )}

      {loading && !health ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
          <Skeleton className="skeleton-card" />
          <Skeleton className="skeleton-card" />
          <Skeleton className="skeleton-card" />
        </div>
      ) : health ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-md)' }}>
          <Card header="Estado del Sistema">
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <span style={{ display: 'inline-block', width: 12, height: 12, borderRadius: '50%', background: health.status === 'healthy' ? '#22C55E' : '#EF4444' }} />
              <strong style={{ fontSize: 18, textTransform: 'uppercase', color: health.status === 'healthy' ? '#15803D' : '#B91C1C' }}>
                {health.status}
              </strong>
            </div>
            <p><strong>Servicio:</strong> {health.service}</p>
            <p><strong>Entorno:</strong> <span style={{ textTransform: 'capitalize' }}>{health.environment}</span></p>
            <p><strong>Tiempo activo:</strong> {formatUptime(health.uptimeSeconds)}</p>
          </Card>

          <Card header="Consumo de Memoria">
            {health.memory ? (
              <div>
                <p><strong>RSS:</strong> {health.memory.rssMb} MB</p>
                <p><strong>Heap Utilizado:</strong> {health.memory.heapUsedMb} MB</p>
                <p><strong>Heap Total:</strong> {health.memory.heapTotalMb} MB</p>
                <div style={{ width: '100%', height: 8, background: 'var(--color-muted)', borderRadius: 4, overflow: 'hidden', marginTop: 12 }}>
                  <div 
                    style={{ 
                      height: '100%', 
                      background: 'var(--color-primary)', 
                      width: `${Math.min(100, (parseFloat(health.memory.heapUsedMb) / parseFloat(health.memory.heapTotalMb)) * 100)}%` 
                    }} 
                  />
                </div>
              </div>
            ) : <p>Sin métricas disponibles.</p>}
          </Card>

          <Card header="Probes & Verificación">
            <p><strong>Última verificación:</strong> {lastCheck ? lastCheck.toLocaleTimeString() : '-'}</p>
            <p><strong>Timestamp Servidor:</strong> {health.timestamp}</p>
            <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
              <a href={`${api.defaults.baseURL}/health`} target="_blank" rel="noreferrer" className="action-btn action-btn-view">
                GET /health
              </a>
              <a href={`${api.defaults.baseURL}/health/live`} target="_blank" rel="noreferrer" className="action-btn action-btn-view">
                GET /health/live
              </a>
            </div>
          </Card>
        </div>
      ) : null}
    </div>
  );
}
