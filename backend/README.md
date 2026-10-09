# Microservicio de Productos (Node.js + Express)

API RESTful estructurada bajo los principios y patrones de **arquitectura en capas para microservicios**, lista para ser ejecutada en contenedores Docker y expuesta tras proxys inversos de alto rendimiento como **Caddy**.

---

## 🏛️ Arquitectura del Microservicio

El proyecto implementa una estricta separación de responsabilidades:

```
express-service/
├── src/
│   ├── config/              # Configuración centralizada y variables de entorno
│   │   └── index.js
│   ├── controllers/         # Capa HTTP: recibe peticiones, valida entrada y delega
│   │   └── product.controller.js
│   ├── services/            # Lógica de negocio pura (independiente de HTTP/Express)
│   │   └── product.service.js
│   ├── routes/              # Mapeo de rutas, verbos HTTP y endpoints
│   │   ├── index.js
│   │   ├── health.routes.js
│   │   └── product.routes.js
│   ├── middlewares/         # Middlewares globales (Errores, 404, Seguridad)
│   │   ├── errorHandler.js
│   │   └── notFoundHandler.js
│   ├── app.js               # Ensamblado de Express, CORS, Helmet y middlewares
│   └── server.js            # Punto de entrada, escucha HTTP y Graceful Shutdown
├── Caddyfile                # Configuración de proxy inverso Caddy
├── Dockerfile               # Imagen de producción ligera basada en Alpine (Non-root)
├── docker-compose.yml       # Orquestación del servicio y Caddy
├── package.json
└── .env
```

### Flujo de Datos
```
[Cliente / Proxy Caddy]
          │
          ▼
   [Express Router] (src/routes)
          │
          ▼
   [Controlador] (src/controllers)  <── Captura req/res y códigos HTTP
          │
          ▼
   [Servicio] (src/services)        <── Reglas de negocio y persistencia
```

---

## 🚀 Características Clave para Microservicios y Contenedores

1. **Desacoplamiento Total:** La capa de servicios no tiene dependencias con `req` ni `res`, lo que facilita pruebas unitarias o cambiar el protocolo de transporte a gRPC o mensajería (RabbitMQ/Kafka).
2. **Observabilidad y Health Checks:**
   - `GET /health`: Estado general, consumo de memoria RAM (RSS, Heap), uptime y metadatos.
   - `GET /health/live`: Liveness probe para Kubernetes o Docker.
   - `GET /health/ready`: Readiness probe indicando si el servicio está listo para recibir tráfico.
3. **Cierre Elegante (Graceful Shutdown):** Intercepta señales `SIGTERM` y `SIGINT` para terminar peticiones activas antes de detener el contenedor.
4. **Proxy Friendly:** Incluye `app.set('trust proxy', 1)` para interpretar adecuadamente cabeceras `X-Forwarded-For`, `X-Forwarded-Proto` y `X-Real-IP` generadas por **Caddy**.
5. **Seguridad Integrada:** Cabeceras HTTP seguras mediante `helmet` y control de orígenes con `cors`.
6. **Contenedor Seguro:** Dockerfile ejecuta la aplicación bajo el usuario sin privilegios `node`.

---

## 📦 Endpoints de la API

| Método | Endpoint | Descripción |
| :--- | :--- | :--- |
| **GET** | `/health` | Chequeo de salud detallado del servicio |
| **GET** | `/health/live` | Sonda de vida (Liveness Probe) |
| **GET** | `/health/ready` | Sonda de disponibilidad (Readiness Probe) |
| **GET** | `/api/v1/products` | Lista todos los productos (Filtros: `?category=` y `?search=`) |
| **GET** | `/api/v1/products/:id` | Obtiene un producto por su ID |
| **POST** | `/api/v1/products` | Crea un nuevo producto |
| **PUT** | `/api/v1/products/:id` | Actualiza un producto existente |
| **DELETE** | `/api/v1/products/:id` | Elimina un producto por ID |

### Ejemplo de Payload (POST / PUT)
```json
{
  "name": "Teclado Ergonómico",
  "description": "Teclado mecánico inalámbrico dividido",
  "price": 149.99,
  "stock": 20,
  "category": "Accesorios"
}
```

---

## 💻 Ejecución Local

### 1. Instalar dependencias
```bash
npm install
```

### 2. Iniciar en modo desarrollo
```bash
npm run dev
```

### 3. Iniciar en modo producción
```bash
npm start
```

---

## 🛡️ Ejecución con Caddy

### Opción A: Caddy Local (Host)
Si tienes Caddy instalado en tu sistema, levanta la API en el puerto 3000 y ejecuta en la raíz del proyecto:
```bash
caddy run --config Caddyfile
```
Caddy escuchará en `http://localhost:8080` y redirigirá el tráfico internamente a `http://localhost:3000`.

### Opción B: Docker Compose (Microservicio + Caddy)
Para levantar todo el ecosistema en contenedores aislados:
```bash
docker compose up --build -d
```
- La API responderá a través de Caddy en: `http://localhost:8080`
- Puedes probar el endpoint de salud con:
  ```bash
  curl http://localhost:8080/health
  curl http://localhost:8080/api/v1/products
  ```

## 🎨 Diseño con Google Stitch

### Configuración del MCP

Este proyecto integra un **Stitch MCP Server** para acceder al proyecto **Creative Project Design** (ID: `883714642416664840`).

- **Archivo de configuración**: `.mcp.json`
- **Configuración**: El servidor se conecta al proyecto de Stitch y descarga los assets de los componentes y pantallas

### Instalación para Diseño

```bash
npm install stitch-mcp --save
```

### Descarga de Pantallas y Componentes

Usa `curl -L` para descargar los assets del proyecto Stitch:

```bash
# Descargar código HTML de pantallas
curl -L "https://stitch.withgoogle.com/project/883714642416664840/screens" -o ./stitch-output/screens.html

# Aplicar diseño generado a los componentes
npx stitch-mcp --project-id 883714642416664840 --output-dir ./stitch-output
```

### Sistema de Diseño (DESIGN.md)

Se ha generado `DESIGN.md` con el sistema de diseño basado en el backend de productos. Incluye:

- **Paleta de colores** por categoría de productos (Computación, Accesorios, Monitores, General)
- **Tipografía** Inter con escala Material Design 3
- **Componentes**: Botones, Cards, Inputs, Tablas, Badges, Dialogs, App Bar
- **Pantallas**: Product List, Product Detail, Product Form, Health Monitor
- **Do's and Don'ts** para consistencia visual

### Integración con el Backend

El diseño se vincula con los endpoints de la API:

- **Product List** → `/api/v1/products`
- **Product Detail** → `/api/v1/products/:id`
- **Product Form** → `POST /api/v1/products` / `PUT /api/v1/products/:id`
- **Health Monitor** → `/health`, `/health/live`, `/health/ready`

---

## 📸 Evidencias de Funcionamiento

Las capturas fotográficas se encuentran alojadas en `Docs/Capturas/`:

| Evidencia | Captura |
| :--- | :--- |
| **Dashboard Catálogo (Frontend)** | `../Docs/Capturas/dasbordEjecutando.png` |
| **Diseño Base Google Stitch** | `../Docs/Capturas/DisenioDeGoogleSticth.png` |
| **Inspección HTTP DevTools (Frontend)** | `../Docs/Capturas/PeticoinesOKfront.png` |
| **Diagnóstico y Prueba de Conexión (Ping)** | `../Docs/Capturas/ParametrosyPrueba%20deConexion.png` |
| **Terminal del Backend en Ejecución** | `../Docs/Capturas/PeticionesOKBackTerminal.png` |
| **Orquestación Docker & Caddy** | `../Docs/Capturas/Docker.png` |

