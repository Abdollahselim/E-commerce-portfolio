# 🏗️ Abdullah Selim Portfolio — E-Commerce Systems Engineering

A high-performance, bilingual professional portfolio built for the GCC market. This project represents a transition from a legacy HTML/CSS architecture to a robust, type-safe Next.js 15 environment with a focus on editorial design, conversion-driven UX, and extreme performance.

---

## 🚀 Technical Stack & Tooling

- **Framework**: [Next.js 15.3](https://nextjs.org/) (App Router)
- **Runtime**: React 19 (Server & Client Components)
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/) (New `@theme` variable bridge)
- **Interactivity**: [Framer Motion 12](https://www.framer.com/motion/) & [GSAP](https://gsap.com/)
- **Typography**: Optimized Google Fonts via `next/font`
- **Infrastructure**: TypeScript 5, ESLint 9

---

## 🛠️ Key Technical Improvements

### 1. Unified Design Token System
Transformed hardcoded CSS values into a centralized, variable-driven theme system.
- **Dynamic Theming**: Integrated Dark/Light mode logic using CSS variables injected via Tailwind's bridge, ensuring zero layout shift (CLS) during theme toggle.
- **Radius & Easing Standards**: Standardized radii (`--radius-lg: 10px`) and custom cubic-bezier curves (`--ease-out: cubic-bezier(.16,1,.3,1)`) across all interactive components.

### 2. Bilingual RTL Orchestration
Implemented a robust localization system for the English/Arabic dual-market requirement.
- **Font Scoping**: Automated font-family switching using `[data-locale]` selectors.
  - *Arabic Body*: IBM Plex Sans Arabic.
  - *Arabic Header*: Tajawal.
  - *Display*: Cormorant Garamond.
- **Directional UI**: Logical padding/margin mapping (`ps`, `pe`, `ms`, `me`) and icon rotation logic for RTL layout consistency.

### 3. Interaction Design & Motion Logic
Refined interactivity to match a premium "Editorial" aesthetic while maintaining strict performance budgets.
- **Cursor Glow Engine**: A custom, 10% lerped radial glow follows the pointer on hover-capable devices, driven by `requestAnimationFrame` for buttery-smooth visual feedback.
- **Selective Animation**: Implemented `MotionReveal` wrappers to orchestrate scroll-triggered entry animations without bloat.
- **CSS-First Hovers**: Shifted complex hover effects (like card lifting and gold-line sweeps) to pure CSS to minimize JS main-thread execution.

### 4. Performance & Core Web Vitals
- **Image Optimization**: Fully integrated `next/image` with AVIF/WebP support and optimized `sizes` attributes for responsive loading.
- **Static Site Generation (SSG)**: Leveraged React Server Components for critical SEO content while keeping interactive elements localized in Client Components.
- **Font Subsetting**: Reduced font payloads by strictly subsetting Arabic and Latin glyphs.

### 5. SEO & Structured Data
- **JSON-LD Schema**: Implemented `Person` and `ProfilePage` schema for enhanced SERP visibility.
- **Security Headers**: Custom Content Security Policy (CSP) and security headers configured in `next.config.ts`.
- **Metadata API**: Dynamic metadata generation including OpenGraph and Twitter card optimizations.

---

## 📦 Project Structure

```text
src/
├── app/             # Next.js App Router (Layouts, Pages, Globals)
├── components/      # UI Components & Feature Sections
│   ├── ui/          # Low-level primitives (CursorGlow, Shells, etc.)
│   └── sections/    # Modular page sections (Hero, Work, Contact)
├── data/            # Centralized site content & localization data
├── lib/             # Utilities (i18n, tailwind-merge)
└── public/          # Optimized assets & project images
```

---

## 🛠️ Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

---

## ⚖️ License
Internal Project - All Rights Reserved.
