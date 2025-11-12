# CLAUDE.md - Portfolio Project Context

> **IMPORTANT NOTE**: This file should not exceed 500 lines. It only contains relevant project context information so that AI agents can work efficiently.

## 📋 General Project Information

- **Name**: german_portfolio
- **Version**: 1.0.0
- **Type**: Professional personal portfolio
- **Owner**: Antonio Germán Márquez Trujillo
- **Repository**: portfolio (GermanMT)
- **Main branch**: main

## 👨‍💻 About the Owner

**Antonio Germán Márquez Trujillo**
- PhD in Computer Engineering (University of Seville, 2021-2025)
- Doctoral thesis with Cum Laude honors on software supply chain security
- Specialized in: software development, cybersecurity, supply chain security
- Education: Baccalaureate (2014-2016) → Bachelor's in Computer Engineering (2016-2020) → Master's in Software Engineering (2020-2021) → PhD (2021-2025)
- Certified B2 English level
- Creator of SecureChain.dev - comprehensive platform for vulnerability analysis

## 🛠️ Technology Stack

### Framework and Core
- **Next.js 15.2.4** (App Router)
- **React 19** 
- **TypeScript 5**
- **Node.js** (running with pnpm)

### Styling
- **TailwindCSS 3.4.17** with `tailwindcss-animate`
- **PostCSS 8.5**
- Dark/light mode theme with `next-themes 0.4.4`
- Custom CSS variables for colors

### UI Components
- **shadcn/ui** - Component system based on Radix UI
- **Radix UI** - Accessible primitives (accordions, dialogs, dropdowns, etc.)
- **Lucide React 0.454.0** - Icons
- **Geist 1.3.1** - Typography font

### Forms and Validation
- **react-hook-form 7.54.1**
- **@hookform/resolvers 3.9.1**
- **zod 3.24.1**

### Other Libraries
- **class-variance-authority** - Component variants
- **clsx** + **tailwind-merge** - CSS class utilities
- **sonner** - Toasts/notifications
- **recharts** - Charts
- **embla-carousel-react** - Carousels
- **date-fns** - Date manipulation
- **vaul** - Drawers
- **react-icons** - Brand icons (GitHub, LinkedIn, Google Scholar)
- **@vercel/analytics** - Analytics tracking
- **sonner** - Toasts/notifications
- **recharts** - Charts
- **embla-carousel-react** - Carousels
- **date-fns** - Date manipulation
- **vaul** - Drawers

## 📁 Project Structure

```
portfolio/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Portfolio main page
│   └── globals.css          # Global styles
├── components/              
│   ├── ui/                  # shadcn/ui components (40+ components)
│   └── theme-provider.tsx   # Provider for dark/light mode
├── hooks/                   # Custom hooks
│   ├── use-mobile.tsx      
│   └── use-toast.ts        
├── lib/
│   └── utils.ts            # Utilities (cn for class merging)
├── public/
│   ├── CVs/                # PDF CVs (ES/EN)
│   ├── profile.jpeg        # Profile photo
│   ├── securechain-logo.ico
│   └── favicon.png
└── styles/                 # Additional styles
```

## 🎨 Portfolio Features

### Main Page Structure (app/page.tsx)

1. **Fixed Navigation** (sticky nav)
   - Section links: About me, Journey, Skills, Contact
   - Language selector (ES/EN)
   - Dark/light mode toggle

2. **Hero Section**
   - Bilingual title, subtitle and description
   - Circular profile photo with "PhD" badge
   - CV download button (ES/EN version based on selected language)
   - Scroll down animation

3. **Roadmap Section** (Journey)
   - Animated vertical timeline with scroll reveal effect
   - Different layouts for desktop/mobile
   - Milestones: Baccalaureate (2014-2016), Bachelor's (2016-2020), Master's (2020-2021), PhD (2021-2025), Future (2025+)
   - Themed icons and color gradients per stage
   - Cards with hover effects and animations
   - Link to doctoral thesis in IDUS

4. **Skills Section**
   - **Technical Skills**: 
     - Description of SecureChain work
     - Technology badges: Python, FastAPI, MongoDB, Neo4j, Docker, React, NextJS, Ubuntu, Bash, Git, Java, Springboot, Kubernetes, Cybersecurity, AI
     - Link to securechain.dev
   - **Scientific Publications**: 
     - 4 papers in Elsevier journals (JSS, Computers & Security, SoftwareX, Data in Brief)
     - Links to DOIs
   - **Soft Skills**:
     - Public speaking
     - Conference participation (JNIC, JISBD, SPLC)
     - Proposal for PyConES 2025

5. **Projects Section** ✨ NEW
   - Dedicated section showcasing SecureChain platform
   - Features list and technology stack
   - Visual card with gradient header
   - Direct link to live platform

6. **Contact Section**
   - Buttons with links to: Email, GitHub, LinkedIn, Google Scholar ✨ NEW

7. **Footer**
   - Copyright and all rights reserved

### Internationalization (i18n)

Translation system integrated in component with `translations` object:
- Available languages: Spanish (`es`), English (`en`)
- All sections are translated
- Language controlled with local state (`useState`)
- **Persistent preferences** ✨ NEW: Language and theme saved in localStorage
- **Auto-detection** ✨ NEW: Browser language detected on first visit

### UX/UI Features

- **Responsive Design**: Specific breakpoints for mobile and desktop
- **Mobile Menu** ✨ NEW: Hamburger menu with smooth animations
- **Dark Mode**: Implemented with Tailwind classes (`dark:`)
- **Animations**:
  - Scroll reveal with `IntersectionObserver`
  - Hover effects on cards
  - Ping/pulse animations on timeline
  - Animated gradients
  - Mobile menu slide-in animation
- **Accessibility**: Radix UI components with ARIA support

## 🎯 Important Configuration

### TypeScript (tsconfig.json)
- Target: ES6
- Module: ESNext with bundler resolution
- Path aliases: `@/*` points to root
- Strict mode enabled

### TailwindCSS (tailwind.config.ts)
- Dark mode: class-based
- Custom CSS variables for colors
- Plugin: tailwindcss-animate
- Themes: background, foreground, card, primary, secondary, muted, accent, destructive, border, chart, sidebar

### shadcn/ui (components.json)
- Style: default
- RSC: true (React Server Components)
- Base color: neutral
- CSS Variables: true
- Icon library: lucide

### Next.js
- App Router (Next.js 15)
- Metadata configured in layout.tsx with full SEO ✨ NEW
- Title: "Antonio Germán Márquez Trujillo - PhD in Computer Engineering"
- Open Graph tags for social media ✨ NEW
- Twitter Card support ✨ NEW
- Sitemap.xml auto-generated ✨ NEW
- Robots.txt configured ✨ NEW

### Analytics ✨ NEW
- **Vercel Analytics** integrated for visitor tracking
- Automatically tracks page views and interactions
- Privacy-focused, GDPR compliant

## 📦 Available Scripts

```bash
pnpm dev      # Development server
pnpm build    # Production build
pnpm start    # Production server
pnpm lint     # ESLint linter
```

## 🔗 Important Links

- **Portfolio**: https://portfolio-germanmt.vercel.app ✨ NEW
- **GitHub**: https://github.com/GermanMT
- **LinkedIn**: https://www.linkedin.com/in/antonio-germ%C3%A1n-m%C3%A1rquez-trujillo-0aaa63215/
- **Google Scholar**: https://scholar.google.es/citations?hl=es&user=Lv7HBqMAAAAJ ✨ NEW
- **Email**: germanoctako@gmail.com
- **SecureChain**: https://securechain.dev/
- **Doctoral Thesis**: https://idus.us.es/items/b9a2da42-7468-4c6d-a6f6-f242c23274e5 ✨ NEW
- **PyConES 2025**: https://2025.es.pycon.org/

### Publications (DOIs)
1. https://doi.org/10.1016/j.jss.2022.111541
2. https://doi.org/10.1016/j.cose.2023.103669
3. https://doi.org/10.1016/j.softx.2025.102152
4. https://doi.org/10.1016/j.dib.2025.111903

## 🎨 Assets and Resources

- **CVs**: PDF files in `/public/CVs/` (ES and EN versions)
- **Images**: 
  - `/public/profile.jpeg` - Profile photo
  - `/public/securechain-logo.ico` - SecureChain logo
  - `/public/favicon.png` - Site favicon

## 💡 Development Notes

### When working with this project:

1. **UI Components**: All shadcn/ui components are in `components/ui/`. No need to install them, they're already integrated.

2. **Styles**: Uses Tailwind utility pattern. For merging conflicting CSS classes, use the `cn()` function from `lib/utils.ts`.

3. **Dark Mode**: Add `dark:` variants in Tailwind classes to support dark theme.

4. **Icons**: Import from `lucide-react`. Example: `import { Mail, Github } from "lucide-react"`

5. **Paths**: Use `@/` alias for absolute imports from root.

6. **Internationalization**: Current system is a translations object in the component. To scale, consider next-intl or similar.

7. **Animations**: Scroll animations are implemented with refs and useEffect. Consider using libraries like framer-motion for more complex animations.

8. **Performance**: 
   - Main component is client-side (`"use client"`)
   - Consider splitting into smaller components for better code splitting
   - Images should use `next/image` for optimization

### Potential Improvement Areas

- Migrate to `next/image` for image optimization
- Implement ISR (Incremental Static Regeneration) if dynamic sections are added
- Separate translations object into JSON files
- Consider SSG (Static Site Generation) for better SEO
- Add tests (Jest + React Testing Library)
- Implement analytics (Google Analytics, Vercel Analytics)
- Add sitemap.xml and robots.txt
- Improve SEO with Open Graph tags and structured data

## 🚀 Professional Background Technologies

The owner has experience in:
- **Backend**: Python, FastAPI, Java, Springboot
- **Databases**: MongoDB, Neo4j
- **DevOps**: Docker, Kubernetes
- **Frontend**: React, NextJS
- **Operating System**: Ubuntu, Bash scripting
- **Version Control**: Git
- **Specialized Areas**: Cybersecurity, AI, Software Supply Chain Security

### Main Project: SecureChain

Comprehensive platform designed and built from scratch for:
- Vulnerability analysis in software projects
- Dependency traceability
- Risk management in software supply chain
- Security analysis automation
- Using AI to strengthen software development ecosystem resilience

## 📝 Market Context

The owner is currently seeking job opportunities in the industry:
- Open to new technologies and challenges
- Interest in continuous professional growth
- Available for offers in software development, cybersecurity, or related areas

## 🚀 Recent Updates (November 2025)

### High Priority Improvements Implemented:

1. **✅ Mobile Navigation Menu**
   - Responsive hamburger menu for mobile devices
   - Smooth slide-in animation
   - Auto-closes when navigating to sections
   - Icons: Menu (hamburger) and X (close)

2. **✅ Enhanced SEO**
   - Complete Open Graph tags for social media
   - Twitter Card support
   - Dynamic metadata with keywords
   - Auto-generated sitemap.xml
   - Robots.txt configuration
   - Improved meta descriptions in multiple languages

3. **✅ Projects Section**
   - New dedicated section showcasing SecureChain
   - Visual card with gradient header
   - Features list with bullet points
   - Technology stack badges
   - Call-to-action button to visit platform
   - Available in both languages

4. **✅ Persistent User Preferences**
   - Language preference saved in localStorage
   - Theme preference (light/dark) saved in localStorage
   - Auto-detection of browser language on first visit
   - Seamless experience across sessions

5. **✅ Vercel Analytics**
   - Integrated @vercel/analytics package
   - Privacy-focused tracking
   - Page view and interaction analytics
   - Zero configuration required
   - GDPR compliant

### Additional Improvements:

- Fixed deprecated brand icons (Github, Linkedin) by migrating to react-icons
- Optimized images using Next.js Image component
- Added Google Scholar link in contact section
- Added doctoral thesis link with styled button in PhD section
- Improved contrast and accessibility
- Better mobile responsiveness

---

**Last update**: November 12, 2025
**Maintainer**: Antonio Germán Márquez Trujillo
**Contact**: germanoctako@gmail.com
