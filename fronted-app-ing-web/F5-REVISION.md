# F5 — Revisión Final y Ejecución

## Checklist de Entrega

### Diseño (Stitch + UI Pro Max)
- [x] Colores por categoría (`#1A237E`, `#26A69A`, `#7C4DFF`, `#6D6E70`)
- [x] Tipografía Inter / Fira Sans aplicada
- [x] Componentes base (`Button`, `Card`, `Badge`, `DataTable`, etc.)
- [x] Variables CSS (`variables.css`) con tokens del `DESIGN.md`
- [x] Responsive: 375 / 768 / 1024 / 1440
- [x] Focus visible (`outline: 2px solid #1E40AF`)
- [x] Transiciones suaves (200ms)
- [x] No emojis como iconos (SVG solo)

### Accesibilidad
- [x] Contraste mínimo 4.5:1 (texto `#1E3A8A` sobre `#F8FAFC` = 8.59:1)
- [x] `aria-label` en botones sin texto
- [x] `aria-describedby` para errores de formulario
- [x] `cursor: pointer` en elementos interactivos
- [x] `prefers-reduced-motion` (transiciones se desactivan si aplica)
- [x] Tab order lógico (AppBar → Filtros → Tabla → Acciones)
- [x] Semántica HTML (`<nav>`, `<main>`, `<table>`, `<button>`)

### Backend → Frontend
- [x] `CORS` configurado (`cors` con `origin` y métodos)
- [x] `axios` con `baseURL` (`VITE_API_URL`)
- [x] `ProductService` (`GET/POST/PUT/DELETE` conectados)
- [x] Endpoints verificados operativos (`/api/v1/products`, `/health`)

---

## Cómo Ejecutar el Proyecto Completo

### 1. Backend (Microservicio + API)

```bash
# Terminal 1
cd /Users/edissonmorocho/PracticasWeb/backend
npm install
npm run dev     # Modo desarrollo con --watch
# o
npm start       # Modo producción
```

- API disponible en: `http://localhost:3000`
- Endpoints:
  - `GET  /api/v1/products`
  - `GET  /api/v1/products/:id`
  - `POST /api/v1/products`
  - `PUT  /api/v1/products/:id`
  - `DELETE /api/v1/products/:id`
  - `GET  /health` / `/health/live` / `/health/ready`

### 2. Frontend (React + Vite + Stitch Design)

```bash
# Terminal 2
cd /Users/edissonmorocho/PracticasWeb/fronted-app-ing-web
npm install
npm run dev     # Vite en http://localhost:5173
```

- Páginas disponibles:
  - `/` → Product List (con filtros y búsqueda)
  - `/product/:id` → Product Detail
  - `/form` → Product Form (crear/editar)
  - `/health` → Health Monitor
  - `/settings` → Configuración

### 3. Stitch MCP (Descargar assets del proyecto)

```bash
# En el directorio del backend
cd /Users/edissonmorocho/PracticasWeb/backend
npx stitch-mcp --project-id 883714642416664840 --output-dir ./stitch-output
```

### 4. Verificación Rápida

```bash
# Probar API
curl http://localhost:3000/health
curl http://localhost:3000/api/v1/products

# Probar frontend
open http://localhost:5173/
```

---

## Estado Final (F5 Completo)

| Fase | Estado | Detalle |
|------|--------|---------|
| F1 Diseño | ✅ Completo | `DESIGN.md`, `.mcp.json`, tokens |
| F2 Componentes | ✅ Completo | 10 componentes UI |
| F3 Pantallas | ✅ Completo | 5 páginas (`pages/`) |
| F4 Backend | ✅ Completo | `axios` + `CORS` + endpoints |
| F5 Entrega | ✅ Completo | Revisión, docs (`PLAN-TRABAJO.md`, `STATUS.md`), accesibilidad, responsive |
