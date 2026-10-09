---
version: alpha
name: Products Microservice Design System
description: Design system for the Products Microservice web dashboard and admin UI, built on Google Stitch and Material Design 3 principles.
colors:
  primary: "#1A237E"
  on-primary: "#FFFFFF"
  primary-container: "#C5CAE9"
  on-primary-container: "#051346"
  secondary: "#26A69A"
  on-secondary: "#FFFFFF"
  secondary-container: "#BFEDE8"
  on-secondary-container: "#003630"
  tertiary: "#7C4DFF"
  on-tertiary: "#FFFFFF"
  tertiary-container: "#D1C4E9"
  on-tertiary-container: "#1D00B4"
  surface: "#FAFAFA"
  on-surface: "#1C1B1F"
  surface-variant: "#E7E0EC"
  on-surface-variant: "#49454F"
  surface-container-lowest: "#FFFFFF"
  surface-container-low: "#F7F2FA"
  surface-container: "#F3EDF7"
  surface-container-high: "#EDE7F6"
  surface-container-highest: "#E8E0F0"
  outline: "#79747E"
  outline-variant: "#CAC4D0"
  inverse-surface: "#313033"
  inverse-on-surface: "#F4EFF4"
  error: "#B3261E"
  onError: "#FFFFFF"
  error-container: "#F9DEDC"
  onErrorContainer: "#410E0B"
  success: "#2E7D32"
  success-container: "#C8E6C9"
  warning: "#F57F17"
  warning-container: "#FFF3CD"
  info: "#1565C0"
  info-container: "#BBDEFB"
  category-computacion: "#1A237E"
  category-accesorios: "#26A69A"
  category-monitores: "#7C4DFF"
  category-general: "#6D6E70"
typography:
  display-large:
    fontFamily: "Inter"
    fontSize: 57px
    fontWeight: 400
    lineHeight: 64px
    letterSpacing: -0.25px
  display-medium:
    fontFamily: "Inter"
    fontSize: 45px
    fontWeight: 400
    lineHeight: 52px
    letterSpacing: 0px
  display-small:
    fontFamily: "Inter"
    fontSize: 36px
    fontWeight: 400
    lineHeight: 44px
    letterSpacing: 0px
  headline-large:
    fontFamily: "Inter"
    fontSize: 32px
    fontWeight: 400
    lineHeight: 40px
    letterSpacing: 0px
  headline-medium:
    fontFamily: "Inter"
    fontSize: 28px
    fontWeight: 400
    lineHeight: 36px
    letterSpacing: 0px
  headline-small:
    fontFamily: "Inter"
    fontSize: 24px
    fontWeight: 500
    lineHeight: 32px
    letterSpacing: 0px
  title-large:
    fontFamily: "Inter"
    fontSize: 22px
    fontWeight: 500
    lineHeight: 28px
    letterSpacing: 0px
  title-medium:
    fontFamily: "Inter"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
    letterSpacing: 0.15px
  title-small:
    fontFamily: "Inter"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
    letterSpacing: 0.1px
  body-large:
    fontFamily: "Inter"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: 0.5px
  body-medium:
    fontFamily: "Inter"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 0.25px
  body-small:
    fontFamily: "Inter"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
    letterSpacing: 0.4px
  label-large:
    fontFamily: "Inter"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
    letterSpacing: 0.1px
  label-medium:
    fontFamily: "Inter"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 16px
    letterSpacing: 0.5px
  label-small:
    fontFamily: "Inter"
    fontSize: 11px
    fontWeight: 500
    lineHeight: 16px
    letterSpacing: 0.5px
rounded:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  xxxl: 64px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
    padding: 10px 24px
    height: 40px
  button-primary-hover:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.on-primary-container}"
  button-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    rounded: "{rounded.sm}"
    padding: 10px 24px
    height: 40px
  button-secondary-hover:
    backgroundColor: "{colors.secondary-container}"
    textColor: "{colors.on-secondary-container}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: 10px 24px
    height: 40px
  button-outline-hover:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.on-primary-container}"
  button-danger:
    backgroundColor: "{colors.error}"
    textColor: "{colors.onError}"
    rounded: "{rounded.sm}"
    padding: 10px 24px
    height: 40px
  button-danger-hover:
    backgroundColor: "#8E0000"
    textColor: "{colors.onError}"
  button-small:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.xs}"
    padding: 6px 12px
    height: 32px
  card:
    backgroundColor: "{colors.surface-container-lowest}"
    rounded: "{rounded.md}"
    padding: 16px
  card-hover:
    backgroundColor: "{colors.surface-container-low}"
  card-header:
    backgroundColor: "transparent"
    padding: 0px
  card-body:
    backgroundColor: "transparent"
    padding: 0px
  input-field:
    backgroundColor: "{colors.surface-container-lowest}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.sm}"
    padding: 10px 12px
    height: 48px
  input-field-focus:
    backgroundColor: "{colors.surface}"
  input-field-error:
    backgroundColor: "{colors.surface}"
  input-label:
    backgroundColor: "transparent"
    padding: 0px
  input-hint:
    backgroundColor: "transparent"
    padding: 0px
  badge:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.on-primary-container}"
    rounded: "{rounded.full}"
    padding: 4px 12px
    height: 24px
  badge-category-computacion:
    backgroundColor: "{colors.category-computacion}"
    textColor: "{colors.on-primary}"
  badge-category-accesorios:
    backgroundColor: "{colors.category-accesorios}"
    textColor: "{colors.on-secondary}"
  badge-category-monitores:
    backgroundColor: "{colors.category-monitores}"
    textColor: "{colors.on-tertiary}"
  badge-category-general:
    backgroundColor: "{colors.category-general}"
    textColor: "{colors.on-surface}"
  table-row:
    backgroundColor: "{colors.surface-container-lowest}"
    padding: 12px 16px
  table-row-striped:
    backgroundColor: "{colors.surface-container}"
  table-row-hover:
    backgroundColor: "{colors.surface-container-low}"
  dialog:
    backgroundColor: "{colors.surface-container-lowest}"
    rounded: "{rounded.lg}"
    padding: 24px
  dialog-title:
    backgroundColor: "transparent"
    padding: 0px
  dialog-content:
    backgroundColor: "transparent"
    padding: 0px 0px 24px 0px
  dialog-actions:
    backgroundColor: "transparent"
    padding: 0px
  app-bar:
    backgroundColor: "{colors.primary}"
    height: 64px
    padding: 16px
  app-bar-title:
    backgroundColor: "transparent"
    color: "{colors.on-primary}"
    padding: 0px
  app-bar-action:
    backgroundColor: "transparent"
    color: "{colors.on-primary}"
    size: 40px
    padding: 0px
  chip:
    backgroundColor: "{colors.surface-container-low}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.full}"
    padding: 8px 16px
    height: 32px
  chip-selected:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.on-primary-container}"
  chip-delete:
    backgroundColor: "transparent"
    color: "{colors.on-primary-container}"
    size: 24px
    padding: 0px
  search-bar:
    backgroundColor: "{colors.surface-container-low}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.sm}"
    padding: 10px 16px
    height: 48px
  search-bar-icon:
    backgroundColor: "transparent"
    color: "{colors.on-surface-variant}"
    size: 20px
    padding: 0px
  empty-state:
    backgroundColor: "transparent"
    padding: 0px
  skeleton:
    backgroundColor: "{colors.surface-container-low}"
    padding: 0px
  snackbar:
    backgroundColor: "#323232"
    textColor: "{colors.surface}"
    rounded: "{rounded.sm}"
    padding: 14px 16px
    height: 56px
  snackbar-error:
    backgroundColor: "{colors.error-container}"
    textColor: "{colors.onErrorContainer}"
  snackbar-success:
    backgroundColor: "{colors.success-container}"
    textColor: "{colors.on-success-container}"
  tooltip:
    backgroundColor: "{colors.inverse-surface}"
    textColor: "{colors.inverse-on-surface}"
    rounded: "{rounded.sm}"
    padding: 6px 12px
    height: auto
  progress-bar:
    backgroundColor: "{colors.surface-container-low}"
    width: 100%
    height: 8px
    padding: 0px
  progress-bar-indeterminate:
    backgroundColor: "{colors.primary}"
    width: 100%
    height: 8px
    padding: 0px
  tag:
    backgroundColor: "{colors.surface-container-low}"
    textColor: "{colors.on-surface-variant}"
    rounded: "{rounded.full}"
    padding: 4px 8px
    height: 20px
  separator:
    backgroundColor: "{colors.outline-variant}"
    width: 100%
    height: 1px
    padding: 0px
  avatar:
    backgroundColor: "{colors.primary-container}"
    width: 40px
    height: 40px
    padding: 0px
  avatar-large:
    backgroundColor: "{colors.primary-container}"
    width: 56px
    height: 56px
    padding: 0px
---

# Products Microservice Design System

A comprehensive design system for the Products Microservice administration dashboard and web interface, built on Material Design 3 principles and optimized for Google Stitch.

This system defines the visual language for managing products through a full CRUD interface, with dedicated UI components for displaying product listings, forms for data entry, and health monitoring screens.

## Colors

The color system is structured around semantic roles with category-specific extensions:

| Role | Token | Hex | Usage |
|------|-------|-----|-------|
| Primary | `primary` | `#1A237E` | App bar, primary buttons, active states |
| On Primary | `on-primary` | `#FFFFFF` | Text/icons on primary surfaces |
| Primary Container | `primary-container` | `#C5CAE9` | Hover states, selected items |
| Secondary | `secondary` | `#26A69A` | Success actions, secondary buttons |
| On Secondary | `on-secondary` | `#FFFFFF` | Text on secondary surfaces |
| Tertiary | `tertiary` | `#7C4DFF` | Category badges (Monitores), accent elements |
| Surface | `surface` | `#FAFAFA` | Page background |
| On Surface | `on-surface` | `#1C1B1F` | Primary text |
| Surface Container Low | `surface-container-low` | `#F7F2FA` | Card hover states, striped table rows |
| Surface Container Lowest | `surface-container-lowest` | `#FFFFFF` | Cards, dialogs, inputs |
| Outline | `outline` | `#79747E` | Input borders, dividers |
| Error | `error` | `#B3261E` | Error states, delete actions |
| Error Container | `error-container` | `#F9DEDC` | Error backgrounds |
| Success | `success` | `#2E7D32` | Stock availability indicators |
| Warning | `warning` | `#F57F17` | Low stock warnings |
| Info | `info` | `#1565C0` | Informational states |

Category colors map directly to the product categories from the API:
- **Computación** → Primary (`primary` / `#1A237E`)
- **Accesorios** → Secondary (`secondary` / `#26A69A`)
- **Monitores** → Tertiary (`tertiary` / `#7C4DFF`)
- **General** → On Surface (`on-surface` / `#6D6E70`)

## Typography

Typography uses Inter at multiple scales optimized for data-dense interfaces:

| Style | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| Display Large | 57px | 400 | 64px | Dashboard hero, main titles |
| Display Medium | 45px | 400 | 52px | Section headers, breadcrumbs |
| Headline Small | 24px | 500 | 32px | Card headers, modal titles |
| Title Medium | 16px | 500 | 24px | Table headers, section labels |
| Body Medium | 14px | 400 | 20px | Product descriptions, details |
| Label Large | 14px | 500 | 20px | Button text, badge labels |
| Label Small | 11px | 500 | 16px | Category badges, captions |

## Layout & Spacing

The system uses an 8px grid system for consistent spacing:

- **xs (4px)**: Minimal internal spacing, icon gaps
- **sm (8px)**: Form field gaps, tight component groups
- **md (16px)**: Standard component padding, card content
- **lg (24px)**: Section dividers, sidebar gaps
- **xl (32px)**: Major content regions, page sections
- **xxl (48px)**: Dashboard layout divisions
- **xxl (64px)**: Hero section spacing

Grid layout: 24px gutter for desktop, 16px for mobile. Content width: 1200px max on desktop.

## Elevation & Depth

Subtle elevation system using shadow properties:

- **Level 0**: No shadow, default state for cards
- **Level 1**: 1px elevation (1px, 2px offset), card hover
- **Level 2**: 2px elevation (2px, 4px offset), active elements
- **Level 3**: 4px elevation (4px, 8px offset), dropdown content

All elevations use indigo tint at 8% opacity for subtle depth perception.

## Shapes

Progressive rounding system:

- **xs (4px)**: Input fields, small tags, close icons
- **sm (8px)**: Buttons, cards, chips, search bars
- **md (12px)**: Dialog containers, feature cards
- **lg (16px)**: Bottom sheets, modal dialogs
- **full (9999px)**: Badges, pills, avatar in circle mode

## Components

### Button

Four button variants for different action contexts:
- **Primary**: Indigo filled, for main actions (Create, Save, Update)
- **Secondary**: Teal filled, for success/confirmation actions
- **Outline**: Transparent with indigo border, for tertiary actions
- **Danger**: Red filled, for destructive actions (Delete)
- **Small**: Compact 32px variant for dense layouts

All buttons: 40px height (32px for small), 16px horizontal padding, centered alignment.

Hover states transition to container colors for visual feedback. Accessible focus ring at 2px offset.

### Card

Cards provide content containers with clean separation:
- **Background**: Surface container lowest (`#FFFFFF`)
- **Border**: 1px outline variant
- **Padding**: 16px internal spacing
- **Border Radius**: 12px (md)
- **Hover State**: Background shifts to surface container low

Cards contain headers, body content, and action areas. Use for product detail views and form containers.

### Input Field

Form inputs with clear visual hierarchy:
- **Size**: 48px height, 1px border
- **Background**: Surface container lowest
- **Focus**: 2px primary border
- **Error**: 2px error border, helper text below
- **Disabled**: Reduced opacity, not editable cursor
- **Padding**: 12px horizontal, 10px vertical

Labels appear above fields (body-medium), error text below (label-small).

### Badge / Chip

Category identification components:
- **Badge**: Primary container background, pill shape, label-medium text
- **Category Colors**: Maps to category-specific semantic colors
- **Selected Chip**: Primary container background
- **Deletable Chips**: Include delete icon in on-primary-container color

Use badges for product categories in tables, chips for filter selection.

### Data Table

Structured data display optimized for product lists:
- **Header Row**: Title-medium, surface container background
- **Body Rows**: Body-medium text, alternating row colors
- **Hover**: Subtle background highlight
- **Actions Column**: Right-aligned icon buttons
- **Loading**: Skeleton rows with grey backgrounds
- **Empty State**: Centered message with icon

Pagination at bottom with page info and navigation controls.

### Dialog / Modal

Focused interactions with clear hierarchy:
- **Container**: Surface container lowest, 16px border-radius, 24px padding
- **Title**: Headline-small, 24px bottom padding
- **Content**: Body-medium with 16px top padding
- **Actions**: Right-aligned button group with 8px gaps
- **Close**: Top-right icon button

Use for product form submission, delete confirmation, detail views.

### App Bar

Primary navigation and branding:
- **Height**: 64px on desktop, 56px on mobile
- **Background**: Primary color
- **Title**: Headline-small, center-aligned
- **Actions**: Search, filter icons at 40px touch targets
- **Navigation Drawer**: For additional views (Settings, Help, Export)

### Search Bar

Quick filtering and finding:
- **Style**: Filled input with search icon
- **Icon**: 20px, on-surface-variant color
- **Placeholder**: "Search products..."
- **Clear Button**: Appears when text present

### Snackbar

Non-blocking notifications:
- **Default**: Dark background, light text
- **Error**: Red container background
- **Success**: Green container background
- **Duration**: 4 seconds auto-dismiss
- **Action**: Optional clickable button

### Chip

Filter and selection controls:
- **Style**: Full border-radius, label-medium text
- **Selected**: Primary container background
- **Deletable**: X icon in on-primary-container color
- **Category Chips**: Use category-specific colors

### Avatar

User or product initials display:
- **Sizes**: 40px (small), 56px (medium)
- **Background**: Primary container
- **Text**: On-primary color, label-medium

### Progress Bar

Loading and status visualization:
- **Height**: 8px
- **Background**: Surface container low
- **Progress**: Primary color fill
- **Indeterminate**: Animated sliding color

### Tag

Small category or status indicators:
- **Style**: Pill badge, label-small text
- **Variants**: Category colors mapped to product categories
- **Usage**: Inline with text, table cells

### Separator

Visual dividers between content sections:
- **Line**: 1px height, outline-variant color
- **Full Width**: Use in lists, between form sections

## Screen Designs

### Product List Screen

The main dashboard displays a comprehensive product inventory:

**Layout Structure:**
- App bar with service name and search action
- Category filter chips directly below (Computación, Accesorios, Monitores)
- Action row with "Create Product" button floated right
- Data table with columns: ID, Name, Category, Price, Stock, Actions
- Empty state centered when no products match filters
- Pagination footer with page info

**Interaction Patterns:**
- Click row to view details, or click eye icon
- Click edit icon to modify product
- Click trash icon to delete (shows confirmation dialog)
- Search filters table in real-time
- Hover shows action icons for row

### Product Detail Screen

Expanded view for product management:

**Content Organization:**
- App bar with back navigation
- Card container with product information
- Header: Product name as title-medium
- Category: Colored badge with category name
- Description: Body-medium text in surface-variant
- Properties: Grid of price, stock, category with labels
- Action buttons: Edit (primary) and Delete (danger) side-by-side

### Product Form Screen

Dialog-based form for data entry:

**Form Fields (in order):**
1. **Name**: Required text field, 48px height
2. **Description**: Optional textarea, auto-grow
3. **Price**: Required number field, currency format
4. **Stock**: Required integer field, must be non-negative
5. **Category**: Dropdown with category colors

**Validation:**
- Real-time inline validation
- Error message below field (label-small, error color)
- Submit disabled until all required fields valid
- Category defaults to "General"

**Actions:**
- Save button (primary) validates and submits
- Cancel button (outline) closes dialog

### Health Monitor Screen

System status dashboard:

**Status Indicators:**
- Healthy badge with service name
- Uptime counter (auto-updating)
- Memory metrics: RSS, Heap Used, Heap Total (all in MB)
- Environment indicator with color

**Refresh Controls:**
- Circular progress indicator when refreshing
- Manual refresh button in app bar

### Settings Screen

Configuration options:

**Content Areas:**
- Environment selector dropdown
- CORS origin configuration
- API prefix display
- Version information

### Empty/Error States

Consistent experience when data unavailable:

**Visual Elements:**
- 64px icon in outline color
- Headline-small title describing the state
- Body-medium description with helpful context
- Primary action button to recover

## Do's and Don'ts

### Color

- **Do** use primary color for all primary actions and branding
- **Do** use category-specific colors for product classification
- **Do** maintain WCAG AA contrast ratios (4.5:1 minimum)
- **Don't** use pure black `#000000` for text
- **Don't** add custom accent colors outside the palette
- **Don't** use gradient backgrounds

### Typography

- **Do** keep title styles for headers, body styles for content
- **Do** use label styles for buttons and badges
- **Don't** mix more than two font weights on a screen
- **Don't** use decorative fonts for body text
- **Don't** hardcode font sizes; use defined scales

### Layout

- **Do** align content to the 8px grid
- **Do** use consistent padding (16px) for cards
- **Don't** stack more than 3 elements without visual grouping
- **Don't** use absolute positioning for responsive layouts
- **Don't** overflow horizontal margins

### Components

- **Do** use elevation consistently for interactive elements
- **Do** maintain 40px touch targets for all interactive items
- **Don't** override component padding without reason
- **Don't** combine outline and filled button styles
- **Don't** use chips as buttons (use proper button component)

### Accessibility

- **Do** include aria-labels for icon buttons
- **Do** use semantic heading structure (h1 → h6)
- **Don't** rely solely on color for meaning
- **Don't** use auto-playing animations