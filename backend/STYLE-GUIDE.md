# Products Microservice - Style Guide for Web Components & Screens

Generated from **Google Stitch DESIGN.md** + **UI/UX Pro Max** integration for the Products Microservice backend.

## Design Tokens

### Color Palette (UI/UX Pro Max Recommended)

| Role | Hex | CSS Variable | Usage |
|------|-----|--------------|-------|
| Primary | `#1E40AF` | `--color-primary` | Buttons, links, active states |
| On Primary | `#FFFFFF` | `--color-on-primary` | Text on primary surfaces |
| Secondary | `#3B82F6` | `--color-secondary` | Secondary actions, info |
| On Secondary | `#000000` | `--color-on-secondary` | Text on secondary surfaces |
| Accent/CTA | `#D97706` | `--color-accent` | Primary CTAs, highlights |
| On Accent | `#000000` | `--color-on-accent` | Text on accent surfaces |
| Background | `#F8FAFC` | `--color-background` | Page background |
| Foreground | `#1E3A8A` | `--color-foreground` | Primary text |
| Card | `#FFFFFF` | `--color-card` | Card backgrounds |
| Card Foreground | `#1E3A8A` | `--color-card-foreground` | Card text |
| Muted | `#E9EEF6` | `--color-muted` | Subtle backgrounds |
| Muted Foreground | `#475569` | `--color-muted-foreground` | Secondary text |
| Border | `#DBEAFE` | `--color-border` | Borders, dividers |
| Destructive | `#DC2626` | `--color-destructive` | Error states, delete |
| On Destructive | `#FFFFFF` | `--color-on-destructive` | Text on destructive |
| Ring | `#1E40AF` | `--color-ring` | Focus rings |

### Category Colors (Backend API Mapping)

| Category | Token | Hex | Usage |
|----------|-------|-----|-------|
| Computación | `category-computacion` | `#1A237E` | Product badges, filters |
| Accesorios | `category-accesorios` | `#26A69A` | Product badges, filters |
| Monitores | `category-monitores` | `#7C4DFF` | Product badges, filters |
| General | `category-general` | `#6D6E70` | Product badges, filters |

### Typography

**Font Pairing:** Fira Code + Fira Sans (Dashboard Data)
- **Headings:** Fira Code (mono for data precision)
- **Body:** Fira Sans (sans for readability)
- **CSS Import:** `https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600;700&family=Fira+Sans:wght@300;400;500;600;700&display=swap`

**Size Scale:**
| Level | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| Display | 32px | 600 | 1.1 | Dashboard hero |
| H1 | 24px | 600 | 1.2 | Page titles |
| H2 | 20px | 600 | 1.3 | Section headers |
| H3 | 18px | 500 | 1.4 | Card headers |
| Body | 16px | 400 | 1.5 | Product descriptions |
| Small | 14px | 400 | 1.4 | Labels, captions |
| Caption | 12px | 400 | 1.3 | Timestamps, metadata |

### Spacing (8px Grid)

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | 4px | Tight gaps |
| `--space-sm` | 8px | Icon gaps, inline spacing |
| `--space-md` | 16px | Standard padding |
| `--space-lg` | 24px | Section padding |
| `--space-xl` | 32px | Large gaps |
| `--space-2xl` | 48px | Section margins |
| `--space-3xl` | 64px | Hero padding |

### Shadow Depths

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle lift |
| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.1)` | Cards, buttons |
| `--shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)` | Modals, dropdowns |
| `--shadow-xl` | `0 20px 25px rgba(0,0,0,0.15)` | Hero images |

## Component Styles

### Buttons

```css
/* Primary Button */
.btn-primary {
  background: #D97706;
  color: #000000;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
  border: 2px solid transparent;
  font-size: 14px;
  line-height: 1.5;
}

.btn-primary:hover {
  opacity: 0.9;
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.btn-primary:focus-visible {
  outline: 2px solid #1E40AF;
  outline-offset: 2px;
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: #1E40AF;
  border: 2px solid #1E40AF;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
  font-size: 14px;
}

.btn-secondary:hover {
  background: #1E40AF;
  color: #FFFFFF;
}

/* Danger Button */
.btn-danger {
  background: #DC2626;
  color: #FFFFFF;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
  border: 2px solid transparent;
  font-size: 14px;
}

.btn-danger:hover {
  background: #B91C1C;
}
```

### Cards

```css
.card {
  background: #F8FAFC;
  border-radius: 12px;
  padding: 24px;
  box-shadow: var(--shadow-md);
  transition: all 200ms ease;
  cursor: pointer;
  border: 1px solid #DBEAFE;
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.card-header {
  font-family: 'Fira Code', monospace;
  font-size: 18px;
  font-weight: 600;
  color: #1E3A8A;
  margin-bottom: 12px;
}

.card-body {
  font-family: 'Fira Sans', sans-serif;
  font-size: 14px;
  color: #475569;
  line-height: 1.5;
}
```

### Inputs

```css
.input {
  padding: 12px 16px;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  font-size: 16px;
  font-family: 'Fira Sans', sans-serif;
  transition: border-color 200ms ease, box-shadow 200ms ease;
  background: #FFFFFF;
  color: #1E293B;
  width: 100%;
}

.input:focus {
  border-color: #1E40AF;
  outline: none;
  box-shadow: 0 0 0 3px rgba(30, 64, 175, 0.1);
}

.input-error {
  border-color: #DC2626;
}

.input-error:focus {
  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
}

.input-label {
  font-family: 'Fira Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #1E3A8A;
  margin-bottom: 6px;
  display: block;
}

.input-hint {
  font-family: 'Fira Sans', sans-serif;
  font-size: 12px;
  color: #475569;
  margin-top: 4px;
}

.input-error-text {
  font-family: 'Fira Sans', sans-serif;
  font-size: 12px;
  color: #DC2626;
  margin-top: 4px;
}
```

### Data Table

```css
.table-container {
  overflow-x: auto;
  border-radius: 12px;
  border: 1px solid #DBEAFE;
  background: #FFFFFF;
}

.table {
  width: 100%;
  border-collapse: collapse;
  font-family: 'Fira Sans', sans-serif;
}

.table th {
  background: #F8FAFC;
  padding: 12px 16px;
  text-align: left;
  font-size: 12px;
  font-weight: 600;
  color: #475569;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 2px solid #DBEAFE;
  white-space: nowrap;
}

.table td {
  padding: 12px 16px;
  font-size: 14px;
  color: #1E293B;
  border-bottom: 1px solid #E2E8F0;
}

.table tbody tr:hover {
  background: #F8FAFC;
}

.table tbody tr:nth-child(even) {
  background: #F8FAFC;
}

.table tbody tr:nth-child(even):hover {
  background: #E9EEF6;
}
```

### Badge / Category Tag

```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 600;
  font-family: 'Fira Sans', sans-serif;
  letter-spacing: 0.025em;
}

.badge-category-computacion {
  background: #1A237E;
  color: #FFFFFF;
}

.badge-category-accesorios {
  background: #26A69A;
  color: #FFFFFF;
}

.badge-category-monitores {
  background: #7C4DFF;
  color: #FFFFFF;
}

.badge-category-general {
  background: #6D6E70;
  color: #FFFFFF;
}
```

### Modal / Dialog

```css
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
}

.modal {
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: var(--shadow-xl);
  max-width: 500px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
}

.modal-title {
  font-family: 'Fira Code', monospace;
  font-size: 20px;
  font-weight: 600;
  color: #1E3A8A;
  margin-bottom: 16px;
}

.modal-body {
  font-family: 'Fira Sans', sans-serif;
  font-size: 14px;
  color: #475569;
  line-height: 1.6;
  margin-bottom: 24px;
}

.modal-footer {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 24px;
}
```

### App Bar

```css
.app-bar {
  background: #1E40AF;
  color: #FFFFFF;
  height: 64px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 40;
  box-shadow: var(--shadow-sm);
}

.app-bar-title {
  font-family: 'Fira Code', monospace;
  font-size: 20px;
  font-weight: 600;
  color: #FFFFFF;
}

.app-bar-actions {
  display: flex;
  gap: 8px;
  align-items: center;
}
```

### Snackbar / Toast

```css
.snackbar {
  background: #1E293B;
  color: #FFFFFF;
  padding: 14px 16px;
  border-radius: 8px;
  font-family: 'Fira Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  box-shadow: var(--shadow-lg);
  display: flex;
  align-items: center;
  gap: 12px;
  animation: slideIn 200ms ease;
}

.snackbar-success {
  background: #059669;
}

.snackbar-error {
  background: #DC2626;
}

@keyframes slideIn {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
```

### Skeleton Loader

```css
.skeleton {
  background: linear-gradient(90deg, #E9EEF6 25%, #DBEAFE 50%, #E9EEF6 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 8px;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

.skeleton-text {
  height: 16px;
  margin-bottom: 8px;
}

.skeleton-card {
  height: 120px;
  margin-bottom: 16px;
}
```

## Screen Designs

### Product List Screen

**Layout:**
```
┌─────────────────────────────────────────────────────────┐
│  App Bar (Sticky)                                       │
│  "Products" [Search] [Filter] [+ Create]                │
├─────────────────────────────────────────────────────────┤
│  Category Filters: [All] [Computación] [Accesorios]     │
│                                           [Monitores]   │
├─────────────────────────────────────────────────────────┤
│  Data Table                                            │
│  ┌─────┬─────────────────────┬──────────┬───────┬─────┐ │
│  │ ID  │ Name                │ Category │ Price │ ... │ │
│  ├─────┼─────────────────────┼──────────┼───────┼─────┤ │
│  │ ... │ ...                 │ Badge    │ ...   │ ... │ │
│  └─────┴─────────────────────┴──────────┴───────┴─────┘ │
├─────────────────────────────────────────────────────────┤
│  Pagination: [1] [2] [3] ...            10 per page     │
└─────────────────────────────────────────────────────────┘
```

**Implementation Notes:**
- Table must have `overflow-x: auto` wrapper for mobile responsiveness
- Category badges use category-specific colors (see Badge styles)
- Row hover shows action icons (edit, delete)
- Sticky app bar uses `scroll-padding-top` to prevent content obscuring

**Accessibility:**
- `aria-label` on table: "Products list"
- Keyboard navigation: Tab through rows, Enter to view detail
- Focus visible on all interactive elements

### Product Detail Screen

**Layout:**
```
┌─────────────────────────────────────────────────────────┐
│  ← Back  |  Product Name              [Edit] [Delete]   │
├─────────────────────────────────────────────────────────┤
│  ┌─────────────────────┐  ┌──────────────────────┐      │
│  │ Product Image       │  │ Properties           │      │
│  │ (Placeholder)       │  │ • ID: prod-xxx       │      │
│  │                     │  │ • Category: Badge    │      │
│  │                     │  │ • Price: $X.XX       │      │
│  │                     │  │ • Stock: XX units    │      │
│  └─────────────────────┘  └──────────────────────┘      │
│                                                         │
│  Description                                            │
│  Lorem ipsum dolor sit amet...                          │
└─────────────────────────────────────────────────────────┘
```

**Implementation Notes:**
- Back button uses `cursor-pointer`, visible focus ring
- Edit/Delete buttons use secondary/danger styles
- Properties grid uses 2-column layout on desktop, 1-column on mobile

### Product Form Screen

**Layout (Dialog/Modal):**
```
┌─────────────────────────────────────────┐
│  Create Product                  [×]    │
├─────────────────────────────────────────┤
│  Name *                                   │
│  ┌─────────────────────────────────┐     │
│  │ Enter product name              │     │
│  └─────────────────────────────────┘     │
│  Description                              │
│  ┌─────────────────────────────────┐     │
│  │ Enter description               │     │
│  └─────────────────────────────────┘     │
│  Price *                                   │
│  ┌─────────────────────────────────┐     │
│  │ 0.00                            │     │
│  └─────────────────────────────────┘     │
│  Stock *                                   │
│  ┌─────────────────────────────────┐     │
│  │ 0                               │     │
│  └─────────────────────────────────┘     │
│  Category                                  │
│  ┌─────────────────────────────────┐     │
│  │ Select category ▼               │     │
│  └─────────────────────────────────┘     │
│                                           │
│  [Cancel]              [Create Product]   │
└─────────────────────────────────────────┘
```

**Validation Rules (UX Guidelines):**
- **Inline validation** on blur (not just on submit)
- **Error message** below each field with `aria-describedby`
- **Focus** moves to first invalid field on submit
- **Loading state** on submit button with spinner
- **Success** shows snackbar: "Product created successfully"

**Accessibility:**
- `<label>` elements for all inputs
- `aria-required="true"` on required fields
- `aria-invalid="true"` and `aria-describedby` on error fields
- Focus trap within modal

### Health Monitor Screen

**Layout:**
```
┌─────────────────────────────────────────────────────────┐
│  App Bar (Sticky)                                       │
│  "Health Monitor" [Refresh]                              │
├─────────────────────────────────────────────────────────┤
│  ┌──────────────────┐  ┌──────────────────┐             │
│  │ Status: ✅ Healthy│  │ Uptime: 99.9%   │             │
│  └──────────────────┘  └──────────────────┘             │
│                                                         │
│  ┌───────────────────────────────────────────────────┐  │
│  │ Memory Usage                                      │  │
│  │ ████████████████████░░░░░░░░░░░░  45%             │  │
│  │ RSS: 256MB | Heap Used: 128MB | Heap Total: 512MB │  │
│  └───────────────────────────────────────────────────┘  │
│                                                         │
│  ┌──────────────────┐  ┌──────────────────┐             │
│  │ Environment      │  │ Last Check       │             │
│  │ production       │  │ 2026-10-05 16:31 │             │
│  └──────────────────┘  └──────────────────┘             │
└─────────────────────────────────────────────────────────┘
```

**Implementation Notes:**
- Status badge uses `success` color for healthy, `destructive` for errors
- Auto-refresh every 30 seconds with visual indicator
- Refresh button shows loading spinner during fetch

## Accessibility Checklist

- [ ] **Color Contrast**: All text meets WCAG AA 4.5:1 minimum
  - `#1E3A8A` on `#F8FAFC` = 8.59:1 ✅
  - `#FFFFFF` on `#1E40AF` = 5.92:1 ✅
  - `#000000` on `#D97706` = 3.45:1 ⚠️ (Use only for large text)
- [ ] **Focus Visible**: All interactive elements have visible focus ring
- [ ] **Keyboard Navigation**: Tab order logical, no traps
- [ ] **ARIA Labels**: Icons have `aria-label`, buttons have descriptive text
- [ ] **Semantic HTML**: Use `<button>`, `<nav>`, `<main>`, `<article>` appropriately
- [ ] **Reduced Motion**: Respect `prefers-reduced-motion` media query
- [ ] **Screen Reader**: Form errors announced via `role="alert"`
- [ ] **Responsive**: 375px, 768px, 1024px, 1440px breakpoints

## Responsive Breakpoints

| Breakpoint | Width | Layout |
|------------|-------|--------|
| Mobile | 375px | Single column, stacked cards |
| Tablet | 768px | 2-column grid, compact table |
| Desktop | 1024px | 3-4 column grid, full table |
| Wide | 1440px | 4-6 column grid, sidebar nav |

## Animation Guidelines

- **Duration**: 150-300ms for interactions
- **Easing**: `ease-in-out` for smooth transitions
- **Hover**: Subtle `translateY(-1px)` + shadow increase
- **Loading**: Skeleton shimmer animation (1.5s infinite)
- **Modal**: Fade in + slide up (200ms)
- **Reduced Motion**: Disable all animations when `prefers-reduced-motion: reduce`

## Do's and Don'ts

### Do
- Use consistent 8px grid spacing
- Show loading states for all async operations
- Use semantic HTML with proper ARIA attributes
- Include empty state illustrations/messages
- Validate forms inline with clear error messages
- Use SVG icons (Heroicons/Lucide) - never emojis
- Respect `prefers-reduced-motion`
- Test keyboard navigation on all pages

### Don't
- Don't use placeholder-only labels
- Don't rely only on color to convey meaning
- Don't use instant state changes (0ms transitions)
- Don't have horizontal scroll on desktop
- Don't omit focus rings on interactive elements
- Don't use pure black `#000000` for text (use `#1E293B`)
- Don't mix more than 2 font families
- Don't use gradient backgrounds

## Integration with Backend API

| Screen | API Endpoint | Method | Purpose |
|--------|-------------|--------|---------|
| Product List | `/api/v1/products` | GET | Fetch all products with filters |
| Product Detail | `/api/v1/products/:id` | GET | Fetch single product |
| Create Product | `/api/v1/products` | POST | Create new product |
| Update Product | `/api/v1/products/:id` | PUT | Update existing product |
| Delete Product | `/api/v1/products/:id` | DELETE | Remove product |
| Health Monitor | `/health` | GET | Service health status |
| Health Monitor | `/health/live` | GET | Liveness probe |
| Health Monitor | `/health/ready` | GET | Readiness probe |

## Files Generated

- **DESIGN.md** - Google Stitch design system specification
- **design-system/products-microservice/MASTER.md** - UI/UX Pro Max persisted design system
- **README.md** - Updated with Stitch integration documentation
- **.mcp.json** - MCP server configuration for Stitch

## Pre-Delivery Checklist

- [ ] No emojis used as icons (use SVG: Heroicons/Lucide)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Light mode: text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind fixed navbars
- [ ] No horizontal scroll on mobile
- [ ] All form labels visible (not placeholder-only)
- [ ] Error messages connected to fields via `aria-describedby`
- [ ] Loading states present for all async operations
- [ ] Empty states shown when no data
- [ ] Keyboard navigation tested on all pages
