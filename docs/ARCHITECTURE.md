# Architecture Documentation

## Overview

Nebula Dashboard follows **Feature-Sliced Design (FSD)** methodology, a modern architectural approach that promotes modularity, maintainability, and scalability in frontend applications.

## 🏗️ Architectural Principles

### Feature-Sliced Design (FSD)

FSD organizes code by features and layers, not by technical concerns. This approach provides:

- **Clear boundaries** between different parts of the application
- **Predictable structure** that scales with team size
- **Explicit dependencies** between modules
- **Easy testing** and refactoring

### Layer Structure

```
src/
├── app/          # Application layer (Routing & initialization)
├── pages/        # Page layer (Future: complex pages)
├── widgets/      # Widget layer (Complex business features)
├── features/     # Feature layer (User interaction scenarios)
├── entities/     # Entity layer (Business entities)
└── shared/       # Shared layer (Reusable resources)
```

## 📋 Layer Responsibilities

### 1. App Layer (`src/app/`)

**Purpose**: Application initialization, routing, and global providers.

**Contents**:

- Next.js App Router configuration
- Global layouts and error boundaries
- Route definitions and middleware
- Application-wide providers

**Example**:

```typescript
// app/layout.tsx - Root layout with global providers
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>
        <Container className="mx-auto flex w-full max-w-[1920px]">
          <Sidebar />
          {children}
        </Container>
      </body>
    </html>
  );
}
```

**Import Rules**:

- ✅ Can import from: `widgets`, `features`, `entities`, `shared`
- ❌ Cannot import from: other `app` modules

### 2. Pages Layer (`src/pages/`)

**Purpose**: Complex page compositions and page-specific logic.

**Contents**:

- Page components with complex business logic
- Page-specific state management
- Data fetching and composition logic

**Current Status**: Prepared for future complex pages

**Import Rules**:

- ✅ Can import from: `widgets`, `features`, `entities`, `shared`
- ❌ Cannot import from: `app`, other `pages`

### 3. Widgets Layer (`src/widgets/`)

**Purpose**: Complex business features and large UI blocks.

**Contents**:

- `Charts/` - Data visualization components
- `Sidebar/` - Navigation and menu system
- `Header/` - Application header with search and user info
- `Earnings/` - Revenue tracking and analytics

**Structure Example**:

```
widgets/Charts/
├── ui/                 # UI components
│   ├── Charts.tsx     # Main charts container
│   └── MonthChart/    # Specific chart implementations
├── model/             # Business logic
│   ├── types.ts       # TypeScript interfaces
│   ├── constants.ts   # Chart configuration
│   └── math.ts        # Chart calculations
└── lib/               # Utilities
    └── config.tsx     # Chart configurations
```

**Import Rules**:

- ✅ Can import from: `features`, `entities`, `shared`
- ❌ Cannot import from: `app`, `pages`, other `widgets`

### 4. Features Layer (`src/features/`)

**Purpose**: User interaction scenarios and specific functionality.

**Current Status**: Prepared for future features like:

- Authentication flows
- Data filtering and search
- User preferences management
- Real-time updates

**Import Rules**:

- ✅ Can import from: `entities`, `shared`
- ❌ Cannot import from: `app`, `pages`, `widgets`, other `features`

### 5. Entities Layer (`src/entities/`)

**Purpose**: Business entities and domain models.

**Contents**:

- UI components specific to business entities
- Type definitions for domain models
- Entity-specific utilities

**Structure**:

```
entities/ui/
├── button/
├── container/
├── heading/
├── icons/
├── input/
├── list/
├── page-layout/
└── text/
```

**Import Rules**:

- ✅ Can import from: `shared`
- ❌ Cannot import from: `app`, `pages`, `widgets`, `features`, other `entities`

### 6. Shared Layer (`src/shared/`)

**Purpose**: Reusable resources used across the application.

**Contents**:

#### UI Kit (`shared/ui/`)

```
shared/ui/
├── Button/           # Reusable button component
├── Container/        # Layout container
├── Heading/          # Typography component
├── Icons/            # Icon system
├── Input/            # Form input component
├── LanguageSwitcher/ # i18n language switcher
├── List/             # List component
├── PageLayout/       # Page layout wrapper
└── Text/             # Text component
```

#### Hooks (`shared/hooks/`)

```
shared/hooks/
├── useChartData.ts      # Chart data processing
├── useKnob.ts           # Interactive knob control
├── useResizeObserver.ts # Responsive behavior
└── useSidebarMenu.tsx   # Sidebar menu logic
```

#### Configuration (`shared/config/`)

```
shared/config/
├── constants.ts      # Application constants
├── pagesHeaders.ts   # Page header configurations
└── lib/
    └── types.ts      # Shared type definitions
```

#### Internationalization (`shared/i18n/`)

```
shared/i18n/
├── index.ts          # i18n setup
└── locales/
    ├── en.json       # English translations
    └── ua.json       # Ukrainian translations
```

#### Utilities (`shared/lib/` & `shared/utils/`)

```
shared/lib/helpers/
├── isLocale.ts       # Locale validation
└── parseSize.tsx     # Size parsing utility

shared/utils/helpers/
├── pagesHeadersMap.ts    # Page header mapping
├── parseExtraTitle.ts    # Title parsing
├── toLocale.ts           # Locale conversion
└── ui.ts                 # UI utilities
```

**Import Rules**:

- ✅ Can import from: other `shared` modules
- ❌ Cannot import from: any upper layers

## 🔄 Data Flow

### Unidirectional Data Flow

```
┌─────────────┐
│     App     │ ← User interactions
└─────────────┘
       │
┌─────────────┐
│   Widgets   │ ← Complex business logic
└─────────────┘
       │
┌─────────────┐
│  Features   │ ← User scenarios
└─────────────┘
       │
┌─────────────┐
│  Entities   │ ← Business entities
└─────────────┘
       │
┌─────────────┐
│   Shared    │ ← Reusable resources
└─────────────┘
```

### Component Communication

1. **Props Down**: Data flows down through props
2. **Events Up**: User actions bubble up through callbacks
3. **Context**: For cross-cutting concerns (theme, locale)
4. **Custom Hooks**: For shared stateful logic

## 🎨 UI Architecture

### Design System Hierarchy

```
Design System
├── Tokens (shared/config/)
│   ├── Colors
│   ├── Typography
│   ├── Spacing
│   └── Breakpoints
├── Primitives (shared/ui/)
│   ├── Button
│   ├── Input
│   ├── Text
│   └── Container
├── Components (entities/ui/)
│   ├── Navigation
│   ├── Forms
│   └── Data Display
└── Compositions (widgets/)
    ├── Charts
    ├── Sidebar
    └── Header
```

### Component Patterns

#### 1. Compound Components

```typescript
// Sidebar compound component
<Sidebar>
  <SidebarLogo />
  <SidebarNav items={items} />
  <SidebarUpsellCard info={info} />
</Sidebar>
```

#### 2. Render Props

```typescript
// Chart with render prop for customization
<Chart
  data={data}
  renderTooltip={({ value, label }) => (
    <CustomTooltip value={value} label={label} />
  )}
/>
```

#### 3. Hook-based Logic

```typescript
// Custom hook for chart interactions
function useChartInteractions(data) {
  const [selectedPoint, setSelectedPoint] = useState(null);
  // ... logic
  return { selectedPoint, handlePointSelect };
}
```

## 🔄 State Management

### State Architecture

```
State Management Strategy
├── Local State (useState, useReducer)
│   ├── Component-specific state
│   ├── Form state
│   └── UI state (modals, dropdowns)
├── Shared State (Custom Hooks)
│   ├── Chart interactions
│   ├── Responsive behavior
│   └── Data processing
├── Global State (Context API)
│   ├── Theme preferences
│   ├── User locale
│   └── Authentication (future)
└── Server State (Future: SWR/React Query)
    ├── API data caching
    ├── Background updates
    └── Optimistic updates
```

### State Colocation Principle

State is placed as close as possible to where it's used:

- **Component state**: For UI-specific state
- **Custom hooks**: For reusable stateful logic
- **Context**: Only for truly global state
- **URL state**: For shareable application state

## 🧪 Testing Strategy

### Testing Pyramid

```
E2E Tests (Few)
├── Critical user journeys
├── Cross-browser compatibility
└── Performance testing

Integration Tests (Some)
├── Widget interactions
├── Data flow testing
└── API integration

Unit Tests (Many)
├── Utility functions
├── Custom hooks
├── Business logic
└── Component behavior
```

### Testing by Layer

- **Shared Layer**: Extensive unit testing for utilities and hooks
- **Entities Layer**: Component testing with various props
- **Widgets Layer**: Integration testing for complex interactions
- **Features Layer**: User scenario testing
- **App Layer**: E2E testing for complete workflows

## 📦 Module Boundaries

### Import Rules Enforcement

```typescript
// ESLint rule for import boundaries
{
  "rules": {
    "boundaries/element-types": [
      "error",
      {
        "default": "disallow",
        "rules": [
          {
            "from": "shared",
            "allow": ["shared"]
          },
          {
            "from": "entities",
            "allow": ["shared", "entities"]
          },
          {
            "from": "features",
            "allow": ["shared", "entities"]
          },
          {
            "from": "widgets",
            "allow": ["shared", "entities", "features"]
          },
          {
            "from": "pages",
            "allow": ["shared", "entities", "features", "widgets"]
          },
          {
            "from": "app",
            "allow": ["shared", "entities", "features", "widgets", "pages"]
          }
        ]
      }
    ]
  }
}
```

## 🔧 Development Workflow

### File Creation Guidelines

1. **Identify the layer** based on responsibility
2. **Follow naming conventions** for the layer
3. **Create accompanying files** (types, tests, docs)
4. **Export through index files** for clean imports

### Refactoring Guidelines

1. **Bottom-up refactoring**: Start from shared layer
2. **Maintain layer boundaries** during refactoring
3. **Update imports** systematically
4. **Test after each step** to ensure functionality

## 🚀 Scalability Considerations

### Team Scaling

- **Layer ownership**: Teams can own specific layers
- **Feature teams**: Can work on complete feature slices
- **Parallel development**: Clear boundaries enable parallel work
- **Code reviews**: Focused on layer-specific concerns

### Code Scaling

- **Lazy loading**: Widget-level code splitting
- **Tree shaking**: Effective with clear module boundaries
- **Bundle optimization**: Layer-based chunk splitting
- **Progressive enhancement**: Feature-based loading

## 📈 Performance Architecture

### Optimization Strategies

1. **Component Level**
   - React.memo for expensive components
   - useMemo for expensive calculations
   - useCallback for stable references

2. **Widget Level**
   - Lazy loading with React.lazy
   - Code splitting at widget boundaries
   - Virtual scrolling for large datasets

3. **Application Level**
   - Route-based code splitting
   - Preloading critical resources
   - Service worker caching

### Bundle Splitting Strategy

```
Chunk Strategy
├── Framework Chunk (React, Next.js)
├── Vendor Chunk (Third-party libraries)
├── Shared Chunk (Shared utilities)
├── Widget Chunks (Individual widgets)
└── Page Chunks (Route-specific code)
```

---

This architecture provides a solid foundation for building scalable, maintainable, and testable applications while following modern best practices and industry standards.
