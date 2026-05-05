# Dhanush Raja T Portfolio

A production-ready, interview-grade portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. Features a bold black-and-white editorial design inspired by high-end systems engineering aesthetics.

![Portfolio Preview](https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80)

## Features

- **Hero Section**: Giant typography with parallax scroll effect and grayscale portrait
- **About Me**: Dark theme section with scroll-triggered animations
- **Active Projects**: 3 project cards (Shelly, Lexx, Dazai) with hover effects
- **Tech Stack**: Categorized skill grid with editorial layout
- **Featured Blog**: Prominent article showcase with engagement metrics
- **Core Commitments**: Three-pillar value proposition (Auditable, Autonomous, Resilient)
- **Technical Logs**: Blog post grid with Medium sync aesthetic
- **Contact Section**: Email copy functionality, social links, resume download
- **Responsive Design**: Mobile-first with hamburger navigation
- **Smooth Animations**: Framer Motion scroll reveals and parallax effects

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite 5
- **Package Manager**: npm

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone or extract the project
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will start at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder, ready for deployment.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
portfolio/
├── public/                 # Static assets
├── src/
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Entry point
│   ├── index.css          # Global styles + Tailwind
│   └── vite-env.d.ts      # Vite type declarations
├── index.html             # HTML template
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript config
├── tsconfig.node.json     # Node TS config
├── vite.config.ts         # Vite configuration
├── tailwind.config.js     # Tailwind config
├── postcss.config.js      # PostCSS config
└── README.md              # This file
```

## Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel --prod
```

### Netlify
```bash
npm i -g netlify-cli
netlify deploy --dir=dist --prod
```

### GitHub Pages
1. Build the project: `npm run build`
2. Push `dist` folder to `gh-pages` branch
3. Or use GitHub Actions for CI/CD

## Customization

### Changing Personal Info
Edit the data arrays in `src/App.tsx`:
- `PROJECTS` - Update project details
- `BLOG_POSTS` - Update blog entries
- `SKILL_CATEGORIES` - Update tech stack
- `COMMITMENTS` - Update value propositions

### Changing Images
Replace Unsplash URLs in the code with your own images:
- Hero portrait: Line ~340
- Project images: Lines ~45-60

### Changing Colors
The site uses a strict black/white palette. To modify:
- Backgrounds: `bg-[#0a0a0a]` (dark) or `bg-white` (light)
- Text: `text-white` or `text-black`
- Accents: `bg-red-600` for featured elements

## Performance

- Lazy-loaded images with `loading="lazy"`
- GPU-accelerated animations via Framer Motion
- Minimal JavaScript bundle with tree shaking
- Optimized scrollbar styling

## Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard-navigable navigation
- Focus states on all buttons
- Reduced motion support (add `prefers-reduced-motion` media query as needed)

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

MIT License - feel free to use this template for your own portfolio.

## Contact

For questions or collaboration:
- Email: dhanushrajathamarai.015@gmail.com
- LinkedIn: [Dhanush Raja T](https://www.linkedin.com/in/dhanush-raja-t-85a8602bb)
- GitHub: [dhanushraja015](https://github.com/dhanushraja015)

---

Built with precision by Dhanush Raja T
