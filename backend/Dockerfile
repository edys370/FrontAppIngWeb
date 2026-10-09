# Etapa 1: Base ligera de Node.js Alpine
FROM node:22-alpine

# Definir variables de entorno por defecto en el contenedor
ENV NODE_ENV=production
ENV PORT=3000

# Directorio de trabajo en el contenedor
WORKDIR /app

# Copiar archivos de dependencias primero para aprovechar el caché de capas de Docker
COPY package*.json ./

# Instalar únicamente dependencias de producción
RUN npm ci --omit=dev

# Copiar el código fuente de la aplicación
COPY src ./src

# Usar el usuario sin privilegios 'node' por seguridad en lugar de root
USER node

# Exponer el puerto configurado
EXPOSE 3000

# Comando de inicio del microservicio
CMD ["node", "src/server.js"]
