import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { config } from './config/index.js';
import routes from './routes/index.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';

const app = express();

/**
 * Habilitar 'trust proxy' para que Express reconozca correctamente
 * las cabeceras X-Forwarded-* enviadas por Caddy, Traefik o Nginx.
 */
app.set('trust proxy', 1);

// Middlewares de seguridad y observabilidad
app.use(helmet());
app.use(cors({
  origin: config.corsOrigin,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Formato de logs: combinado en producción, dev en desarrollo
app.use(morgan(config.isProduction ? 'combined' : 'dev'));

// Parseo de cuerpo JSON y URL-encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Montar enrutador principal
app.use('/', routes);

// Manejo de recursos no encontrados (404)
app.use(notFoundHandler);

// Manejo centralizado de errores (500, 400, etc.)
app.use(errorHandler);

export default app;
