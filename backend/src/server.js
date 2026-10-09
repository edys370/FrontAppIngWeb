import app from './app.js';
import { config } from './config/index.js';

const server = app.listen(config.port, '0.0.0.0', () => {
  console.log(`====================================================`);
  console.log(` 🚀 Microservicio: ${config.serviceName}`);
  console.log(` 🌐 Entorno:       ${config.nodeEnv}`);
  console.log(` 📡 Escuchando en: http://0.0.0.0:${config.port}`);
  console.log(` ❤️  Salud:         http://0.0.0.0:${config.port}/health`);
  console.log(` 📦 Productos:     http://0.0.0.0:${config.port}${config.apiPrefix}/products`);
  console.log(`====================================================`);
});

server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`\n❌ [ERROR] El puerto ${config.port} ya está en uso.`);
    console.error(`👉 Cambia el puerto en el archivo .env o detén el proceso que lo está usando.\n`);
  } else {
    console.error('[SERVER ERROR]', error);
  }
  process.exit(1);
});

/**
 * Cierre elegante (Graceful Shutdown)
 * Esencial para contenedores Docker y orquestadores (Kubernetes/Docker Swarm).
 */
function gracefulShutdown(signal) {
  console.log(`\n[${signal}] Señal recibida. Cerrando servidor de forma ordenada...`);
  server.close(() => {
    console.log('[SHUTDOWN] Servidor HTTP cerrado correctamente.');
    process.exit(0);
  });

  // Forzar apagado después de 10 segundos si hay peticiones colgadas
  setTimeout(() => {
    console.error('[SHUTDOWN] Tiempo de espera agotado. Forzando salida.');
    process.exit(1);
  }, 10000).unref();
}

process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));

process.on('unhandledRejection', (reason, promise) => {
  console.error('[UNHANDLED REJECTION] Promesa rechazada no manejada:', reason);
});

process.on('uncaughtException', (error) => {
  console.error('[UNCAUGHT EXCEPTION] Excepción no capturada:', error);
  process.exit(1);
});
