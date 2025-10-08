# 🌌 Nebula Dashboard

[![Next.js](https://img.shields.io/badge/Next.js-15.5.3-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.13-38B2AC)](https://tailwindcss.com/)
[![ESLint](https://img.shields.io/badge/ESLint-9.35.0-4B32C3)](https://eslint.org/)

A modern, enterprise-grade dashboard application built with Next.js 15, featuring advanced data visualization, internationalization, and a component-driven architecture following Feature-Sliced Design principles.

![Dashboard Preview](https://via.placeholder.com/800x400/6366f1/ffffff?text=Nebula+Dashboard+Preview)

## ✨ Features

### 🎨 **Modern UI/UX**

- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Interactive Charts**: Custom SVG-based data visualizations with smooth animations
- **Dark/Light Theme**: Seamless theme switching (planned)
- **Glassmorphism Effects**: Modern UI with backdrop blur and transparency

### 🌍 **Internationalization**

- **Multi-language Support**: English and Ukrainian locales
- **Dynamic Content**: Real-time language switching
- **Type-safe Translations**: Fully typed i18n with TypeScript

### 📊 **Data Visualization**

- **Interactive Line Charts**: Draggable data points with real-time tooltips
- **Revenue Analytics**: Weekly and monthly revenue tracking
- **Performance Metrics**: KPI dashboards with trend analysis

### 🏗️ **Architecture**

- **Feature-Sliced Design (FSD)**: Modular architecture for scalability
- **SOLID Principles**: Clean, maintainable, and testable code
- **Component-Driven**: Reusable UI components with clear boundaries
- **Type Safety**: Full TypeScript coverage with strict type checking

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.0+
- **npm** 9.0+ / **yarn** 1.22+ / **pnpm** 8.0+

### Installation

```bash
# Clone the repository
git clone https://github.com/Roman-Chaban/Nebula_Dashboard.git
cd Nebula_Dashboard

# Install dependencies
npm install
# or
yarn install
# or
pnpm install

# Start development server
npm run dev
# or
yarn dev
# or
pnpm dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### Scripts

```bash
# Development
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run typecheck    # TypeScript type checking
```

## 🏗️ Architecture

### Feature-Sliced Design Structure

```
src/
├── app/                    # Next.js App Router (Routing layer)
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Home page
│   └── [locale]/          # Internationalized routes
│       ├── layout.tsx     # Locale-specific layout
│       ├── dashboard/     # Dashboard pages
│       ├── marketplace/   # NFT Marketplace
│       ├── tables/        # Data tables
│       ├── kanban/        # Kanban board
│       └── profile/       # User profile
│
├── widgets/               # Business logic blocks (Feature layer)
│   ├── Charts/           # Data visualization components
│   │   ├── ui/           # Chart components
│   │   ├── model/        # Chart logic and types
│   │   └── lib/          # Chart utilities
│   ├── Sidebar/          # Navigation sidebar
│   ├── Header/           # Application header
│   └── Earnings/         # Revenue widgets
│
├── features/             # User interaction scenarios
│   └── [future features]
│
├── entities/             # Business entities (Entity layer)
│   └── ui/               # Entity-specific components
│
├── shared/               # Shared resources (Shared layer)
│   ├── ui/               # UI Kit components
│   │   ├── Button/       # Reusable button component
│   │   ├── Container/    # Layout container
│   │   ├── Input/        # Form input component
│   │   └── Icons/        # Icon components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utilities and helpers
│   ├── config/           # Application configuration
│   ├── i18n/             # Internationalization setup
│   └── locales/          # Translation files
│
└── styles/               # Global styles
    └── globals.css       # Tailwind CSS imports
```

### Layer Responsibilities

| Layer        | Purpose                      | Example                             |
| ------------ | ---------------------------- | ----------------------------------- |
| **App**      | Routing and page composition | `app/[locale]/dashboard/page.tsx`   |
| **Widgets**  | Complex business features    | `widgets/Charts/`                   |
| **Features** | User interaction scenarios   | Authentication, data filtering      |
| **Entities** | Business logic units         | User, Chart, Revenue models         |
| **Shared**   | Reusable resources           | UI components, utilities, constants |

## 🎨 UI Components

### Design System

Our component library follows atomic design principles:

```tsx
// Example: Reusable Button component
import { Button } from '@/shared/ui/Button';

<Button variant="primary" size="large" onClick={handleClick}>
  Submit
</Button>;
```

### Chart Components

Advanced, reusable chart components with full TypeScript support:

```tsx
// Example: Interactive Line Chart
import { LineChartWithSlider } from '@/widgets/Charts';

<LineChartWithSlider data={revenueData} onDataPointSelect={handleSelection} />;
```

## 🌍 Internationalization

### Supported Languages

- 🇺🇸 **English** (`en`)
- 🇺🇦 **Ukrainian** (`ua`)

### Usage

```tsx
import { useTranslation } from 'react-i18next';

function Component() {
  const { t } = useTranslation();

  return <h1>{t('NAVIGATION_MENU.dashboard')}</h1>;
}
```

### Adding New Languages

1. Create new locale file in `src/shared/locales/`
2. Add locale to `SUPPORTED_LOCALES` in `src/shared/config/constants.ts`
3. Update routing in `middleware.ts`

## 📊 Charts & Data Visualization

### Interactive Features

- **Draggable Data Points**: Real-time value updates
- **Smooth Animations**: CSS transitions and SVG animations
- **Responsive Design**: Adaptive to container size
- **Accessibility**: Screen reader support and keyboard navigation

### Chart Types

- 📈 **Line Charts**: Trend analysis with interactive sliders
- 📊 **Bar Charts**: Comparative data visualization (planned)
- 🥧 **Pie Charts**: Distribution analysis (planned)

## 🔧 Development

### Code Quality

We maintain high code quality with:

- **ESLint**: Code linting with TypeScript rules
- **Prettier**: Automatic code formatting
- **TypeScript**: Strict type checking
- **Import Sorting**: Automatic import organization

### Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```bash
feat: add new chart component
fix: resolve chart rendering issue
docs: update README documentation
refactor: improve component structure
```

### Testing Strategy

```bash
# Unit Tests (planned)
npm run test

# E2E Tests (planned)
npm run test:e2e

# Component Testing (planned)
npm run test:components
```

## 🚀 Deployment

### Build Optimization

- **Turbopack**: Fast bundling for development and production
- **Image Optimization**: Next.js automatic image optimization
- **Bundle Analysis**: Built-in bundle analyzer
- **Tree Shaking**: Automatic dead code elimination

### Environment Variables

Create `.env.local` for local development:

```env
# Example environment variables
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_ANALYTICS_ID=GA-XXXXXXX
```

### Production Deployment

```bash
# Build for production
npm run build

# Start production server
npm run start
```

Recommended platforms:

- **Vercel** (Recommended for Next.js)
- **Netlify**
- **Docker** containers

## 🤝 Contributing

We welcome contributions! Please read our contributing guidelines:

### Development Workflow

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'feat: add amazing feature'`)
4. **Push** to branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Code Standards

- Follow **Feature-Sliced Design** architecture
- Maintain **TypeScript** strict mode compliance
- Write **self-documenting** code with clear naming
- Add **JSDoc** comments for complex functions
- Follow **SOLID** principles

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Roman Chaban**

- GitHub: [@Roman-Chaban](https://github.com/Roman-Chaban)
- LinkedIn: [Roman Chaban](https://linkedin.com/in/roman-chaban)

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Vercel** for deployment platform
- **Tailwind CSS** for utility-first CSS
- **Feature-Sliced Design** community for architectural guidance

## 📈 Roadmap

### Upcoming Features

- [ ] **Dark Theme Implementation**
- [ ] **Real-time Data Integration**
- [ ] **Advanced Filtering System**
- [ ] **Export Functionality**
- [ ] **Mobile Application**
- [ ] **AI-Powered Analytics**

### Performance Goals

- [ ] **Lighthouse Score**: 95+ on all metrics
- [ ] **Core Web Vitals**: Green across all pages
- [ ] **Bundle Size**: < 250KB initial load
- [ ] **Time to Interactive**: < 2s on 3G

---

<div align="center">

**⭐ Star this repository if it helped you!**

[Report Bug](https://github.com/Roman-Chaban/Nebula_Dashboard/issues) • [Request Feature](https://github.com/Roman-Chaban/Nebula_Dashboard/issues) • [Documentation](https://github.com/Roman-Chaban/Nebula_Dashboard/wiki)

</div>
