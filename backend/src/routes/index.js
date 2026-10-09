import { Router } from 'express';
import { config } from '../config/index.js';
import healthRoutes from './health.routes.js';
import productRoutes from './product.routes.js';

const router = Router();

// Endpoint de bienvenida / metadatos del servicio
router.get('/', (req, res) => {
  res.status(200).json({
    service: config.serviceName,
    status: 'running',
    docs: {
      health: '/health',
      products: `${config.apiPrefix}/products`
    }
  });
});

// Rutas de salud del microservicio (sin prefijo para facilidad con proxies y orquestadores)
router.use('/health', healthRoutes);

// Rutas de API versionadas
router.use(`${config.apiPrefix}/products`, productRoutes);

export default router;
