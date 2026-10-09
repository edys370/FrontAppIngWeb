# Plan de Trabajo — Integración Stitch → Frontend + Backend

**Proyecto:** Products Microservice  
**Frontend:** `/Users/edissonmorocho/PracticasWeb/fronted-app-ing-web` (React + Vite)  
**Backend:** `/Users/edissonmorocho/PracticasWeb/backend` (Node.js + Express)  
**Stitch Project:** `Creative Project Design` (`883714642416664840`)  
**Screens descargados:** 5 (en `backend/stitch-output/screens/`)

---

## Estado Actual del Proyecto

| Componente | Estado | Notas |
|-----------|--------|-------|
| Backend API | ✅ Completo | `/api/v1/products`, `/health`, etc. |
| Diseño (DESIGN.md) | ✅ Creado | Tokens, colores, componentes |
| Stitch MCP | ✅ Configurado | `.mcp.json` con 5 screens |
| Screens descargados | ✅ 15 archivos | 5 screens × 3 formatos |
| Frontend base (Vite) | ⚠️ Default | Solo `App.jsx`, `main.jsx`, `axios.js` |
| Integración Stitch → Frontend | ❌ Pendiente | **Este plan lo cubre** |

---

## Estructura de Carpetas del Frontend (Respetada)

```
fronted-app-ing-web/
├── src/
│   ├── api/           ← Ya existe (`axios.js`)
│   ├── assets/        ← Ya existe
│   ├── components/    ← NUEVA: Componentes reutilizables
│   │   ├── ui/        ← Diseño de Stitch (botones, cards, badges)
│   │   ├── layout/    ← AppBar, layout grid
│   │   └── forms/     ← Inputs, labels, validación
│   ├── pages/         ← NUEVA: Pantallas de Stitch
│   │   ├── ProductList.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── ProductForm.jsx
│   │   └── HealthMonitor.jsx
│   ├── hooks/         ← NUEVA: useProducts, useHealth, etc.
│   ├── contexts/      ← NUEVA: ProductContext, AppState
│   ├── styles/        ← NUEVA: CSS variables desde DESIGN.md
│   │   ├── variables.css
│   │   └── design-system.css
│   ├── App.jsx        ← Modificado: rutas + layout
│   └── main.jsx       ← Sin cambios
├── public/
├── design-system/     ← NUEVA (copiada desde backend)
│   └── products-microservice/
│       └── MASTER.md
└── index.html
```

---

## Fases de Desarrollo

### FASE 1 — Infraestructura y Diseño (Estado: EN PROGRESO)
**Objetivo:** Configurar el frontend para usar el design system de Stitch.

| Tarea | Componente/Archivo | Conexión Backend |
|-------|-------------------|------------------|
| 1.1 Copiar tokens CSS | `src/styles/variables.css` | — (diseño puro) |
| 1.2 Crear componente base | `src/components/ui/Button.jsx` | — |
| 1.3 Crear componente Card | `src/components/ui/Card.jsx` | — |
| 1.4 Crear componente Badge | `src/components/ui/Badge.jsx` | — (usa categorías) |
| 1.5 Configurar axios | `src/api/axios.js` → `baseURL` | `http://localhost:3000` |
| 1.6 Agregar fuente Inter/Fira | `index.html` | — |

**Estado esperado:** `F1: Diseño base aplicado`

---

### FASE 2 — Componentes UI de Stitch (Estado: PENDIENTE)
**Objetivo:** Implementar los componentes del DESIGN.md como componentes React.

| Tarea | Componente | Funcionalidad Backend |
|-------|-----------|----------------------|
| 2.1 AppBar | `src/components/layout/AppBar.jsx` | Muestra nombre servicio (`/`) |
| 2.2 SearchBar | `src/components/ui/SearchBar.jsx` | Filtra `?search=` en `/products` |
| 2.3 DataTable | `src/components/ui/DataTable.jsx` | Muestra `/api/v1/products` con paginación |
| 2.4 InputField | `src/components/forms/Input.jsx` | Validación con backend (POST/PUT) |
| 2.5 Dialog/Modal | `src/components/ui/Dialog.jsx` | Formulario producto (create/edit) |
| 2.6 Chip/Filter | `src/components/ui/Chip.jsx` | Filtra `?category=` en `/products` |
| 2.7 Skeleton | `src/components/ui/Skeleton.jsx` | Estado carga inicial |
| 2.8 EmptyState | `src/components/ui/EmptyState.jsx` | Cuando no hay productos |

**Estado esperado:** `F2: Componentes UI listos`

---

### FASE 3 — Pantallas de Stitch (Estado: PENDIENTE)
**Objetivo:** Integrar cada screen descargado como página funcional.

| Pantalla | Screen ID | Archivo | Funcionalidad Backend |
|----------|-----------|---------|----------------------|
| **Product List** | `4192102401428898962` | `src/pages/ProductList.jsx` | `GET /api/v1/products` + filtros |
| **Product Detail** | `8f42d2abfb9744d19207f0bc6423cb20` | `src/pages/ProductDetail.jsx` | `GET /api/v1/products/:id` |
| **Product Form** | `27a176c309c94514b1e58bac286d1177` | `src/pages/ProductForm.jsx` | `POST` / `PUT` / `DELETE` |
| **Health Monitor** | `1dfda326628c460c8aceed3909feb061` | `src/pages/HealthMonitor.jsx` | `GET /health`, `/live`, `/ready` |
| **Settings/Admin** | `e0f4564af64f40baba483fffe3006abb` | `src/pages/Settings.jsx` | Configuración de CORS/API prefix |

**Estado esperado:** `F3: Pantallas integradas`

---

### FASE 4 — Conexión Completa con Backend (Estado: PENDIENTE)
**Objetivo:** Todas las pantallas consumen la API real del backend.

| Pantalla | Endpoint | Método | Estado de actualización |
|----------|----------|--------|------------------------|
| Product List | `/api/v1/products` | GET | Listado + filtros + paginación |
| Product List (crear) | `/api/v1/products` | POST | Dialog → refrescar lista |
| Product Detail | `/api/v1/products/:id` | GET | Datos completos |
| Product Form (editar) | `/api/v1/products/:id` | PUT | Actualizar → redirigir |
| Product Form (eliminar) | `/api/v1/products/:id` | DELETE | Confirmación → actualizar lista |
| Health Monitor | `/health` | GET | Estado general |
| Health Monitor | `/health/live` | GET | Liveness |
| Health Monitor | `/health/ready` | GET | Readiness |

**Estado esperado:** `F4: Backend conectado`

---

### FASE 5 — Estado de Proyecto y Métricas (Estado: PENDIENTE)
**Objetivo:** Actualización continua y verificación de calidad.

| Tarea | Entrega | Estado |
|-------|---------|--------|
| 5.1 Actualizar `README.md` del frontend | Docs de integración | `F5` |
| 5.2 Crear `STATUS.md` | Estado por fase | `F5` |
| 5.3 Testear accesibilidad | Audita con reglas UI Pro Max | `F5` |
| 5.4 Responsive | 375px / 768px / 1024px / 1440px | `F5` |
| 5.5 Actualizar `DESIGN.md` del backend | Sincronizar cambios | `F5` |

**Estado esperado:** `F5: Proyecto completo`

---

## Archivo de Estado del Proyecto (Actualizable)

Creo `STATUS.md` en el frontend para rastrear cada avance:

```markdown
# Estado del Proyecto — Products Microservice Frontend

## Progreso por Fase

- [ ] F1: Diseño base aplicado
- [ ] F2: Componentes UI listos
- [ ] F3: Pantallas integradas
- [ ] F4: Backend conectado
- [ ] F5: Proyecto completo

## Última actualización: YYYY-MM-DD HH:MM

## Pantallas Stitch Integradas
- ✅ Product List (`419210240...`)
- ✅ Product Detail (`8f42d2...`)
- [ ] Product Form (`27a176c...`)
- [ ] Health Monitor (`1dfda...`)
- [ ] Settings (`e0f4564...`)
```

---

## Notas Técnicas de Integración

- **API Base:** `VITE_API_URL` en `src/api/axios.js` (apuntar a `http://localhost:3000` o Caddy `:8080`)
- **Rutas:** Usar `react-router-dom` para navegar entre pantallas
- **Estado:** `useState` / `useContext` para productos y filtros
- **Estilos:** Variables CSS en `src/styles/variables.css` desde `DESIGN.md`
- **Icons:** SVG de `public/icons.svg` como dice el diseño actual; reemplazar por Lucide/Heroicons según UI Pro Max
- **Categorías:** Usar colores `#1A237E`, `#26A69A`, `#7C4DFF`, `#6D6E70` para badges
- **Responsive:** Prefers `flex` + `grid` con `overflow-x-auto` para tablas
- **Accesibilidad:** Añadir `aria-label`, `aria-describedby`, `focus-visible`

---

## Comandos de Actualización de Estado

```bash
# Después de completar cada fase, actualizar:
echo "F1 complete" >> STATUS.md
echo "F2 complete" >> STATUS.md
# etc.
```
