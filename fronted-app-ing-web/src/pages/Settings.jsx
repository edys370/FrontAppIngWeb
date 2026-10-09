import { useState, useEffect } from 'react';
import api from '../api/axios';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function Settings() {
  const [pingStatus, setPingStatus] = useState(null);
  const [testing, setTesting] = useState(false);

  const testConnection = async () => {
    setTesting(true);
    setPingStatus(null);
    try {
      const start = performance.now();
      await api.get('/health');
      const latency = Math.round(performance.now() - start);
      setPingStatus({ ok: true, latency });
    } catch {
      setPingStatus({ ok: false });
    } finally {
      setTesting(false);
    }
  };

  useEffect(() => {
    let ignore = false;
    const start = performance.now();
    api.get('/health')
      .then(() => {
        if (!ignore) {
          const latency = Math.round(performance.now() - start);
          setPingStatus({ ok: true, latency });
        }
      })
      .catch(() => {
        if (!ignore) {
          setPingStatus({ ok: false });
        }
      });

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div style={{ maxWidth: 800, margin: '0 auto' }}>
      <h1 style={{ marginBottom: 4 }}>Configuración del Microservicio</h1>
      <p style={{ color: 'var(--color-muted-foreground)', marginBottom: 'var(--space-lg)', fontSize: 14 }}>
        Parámetros de conexión, variables de entorno y estado de integración
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
        <Card header="Parámetros de Red y API">
          <p><strong>Base URL de Axios:</strong> <code>{api.defaults.baseURL || 'Relativo (sin baseURL)'}</code></p>
          <p><strong>Variable VITE_API_URL:</strong> <code>{import.meta.env.VITE_API_URL || '(No definida)'}</code></p>
          <p><strong>Prefijo de API:</strong> <code>/api/v1</code></p>
          <p><strong>Modo Vite:</strong> <code>{import.meta.env.MODE}</code></p>
        </Card>

        <Card header="Prueba de Conectividad">
          <p>Verifica si el frontend puede comunicarse directamente con el servidor Express:</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 16 }}>
            <Button variant="secondary" onClick={testConnection} disabled={testing}>
              {testing ? 'Probando...' : 'Probar Conexión (Ping)'}
            </Button>
            {pingStatus && (
              <span style={{ 
                fontWeight: 600, 
                color: pingStatus.ok ? '#15803D' : '#DC2626',
                display: 'flex',
                alignItems: 'center',
                gap: 6
              }}>
                {pingStatus.ok ? `✅ Conexión exitosa (${pingStatus.latency} ms)` : '❌ Error de conexión al backend'}
              </span>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
