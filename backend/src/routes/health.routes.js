import { Router } from 'express';
import { config } from '../config/index.js';

const router = Router();

/**
 * Endpoint principal de salud para orquestadores y proxys inversos (Caddy / Docker / K8s).
 */
router.get('/', (req, res) => {
  const memoryUsage = process.memoryUsage();

  res.status(200).json({
    status: 'healthy',
    service: config.serviceName,
    environment: config.nodeEnv,
    uptimeSeconds: Math.floor(process.uptime()),
    timestamp: new Date().toISOString(),
    memory: {
      rssMb: (memoryUsage.rss / 1024 / 1024).toFixed(2),
      heapUsedMb: (memoryUsage.heapUsed / 1024 / 1024).toFixed(2),
      heapTotalMb: (memoryUsage.heapTotal / 1024 / 1024).toFixed(2)
    }
  });
});

/**
 * Liveness probe: ¿El proceso sigue vivo?
 */
router.get('/live', (req, res) => {
  res.status(200).json({ status: 'alive' });
});

/**
 * Readiness probe: ¿El servicio está listo para recibir tráfico?
 */
router.get('/ready', (req, res) => {
  // Aquí se podrían verificar conexiones a base de datos o brokers de mensajería
  res.status(200).json({ status: 'ready' });
});

export default router;
