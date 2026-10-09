import { config } from '../config/index.js';

/**
 * Middleware centralizado de manejo de errores.
 */
export function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Error interno del servidor';

  // Registrar error en la consola del contenedor/proceso
  console.error(`[ERROR] [${new Date().toISOString()}] ${req.method} ${req.originalUrl} - ${statusCode}: ${message}`);
  if (err.stack && !config.isProduction) {
    console.error(err.stack);
  }

  res.status(statusCode).json({
    success: false,
    error: {
      message,
      statusCode,
      ...(config.isProduction ? {} : { stack: err.stack })
    }
  });
}
