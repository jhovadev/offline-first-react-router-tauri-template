# ⚡ Offline-First React Router + Tauri Template

> **Blazingly fast**, **production-ready** cross-platform desktop application template built with modern web technologies

[![React Router](https://img.shields.io/badge/React%20Router-v7-red?style=flat-square)](https://reactrouter.com/)
[![Tauri](https://img.shields.io/badge/Tauri-v2-blue?style=flat-square)](https://tauri.app/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat-square)](https://www.typescriptlang.org/)
[![Bun](https://img.shields.io/badge/Bun-Runtime-black?style=flat-square)](https://bun.sh/)

## 🚀 Features

- ⚡ **Blazingly Fast** - Powered by Vite, Tauri, and Bun for instant HMR and lightning-fast builds
- 🔌 **Offline-First** - Built-in SQLite database with Drizzle ORM for seamless offline functionality
- 🎯 **Production Ready** - Full TypeScript support with strict linting via Biome
- 🎨 **Modern UI** - TailwindCSS v4 with shadcn/ui components and Lucide icons
- 📦 **Cross-Platform** - Build native apps for Windows, macOS, and Linux from a single codebase
- 🧪 **Developer Experience** - Storybook for component development, Vitest for testing
- 🔐 **Type-Safe** - End-to-end type safety with TypeScript and Drizzle ORM
- 🎭 **SPA Mode** - Client-side rendering for optimal desktop app experience
- 📊 **Database Tools** - Drizzle Studio for visual database management

## 🛠️ Tech Stack

### Core
- **[React 19](https://react.dev/)** - Latest React with concurrent features
- **[React Router v7](https://reactrouter.com/)** - File-based routing with data loading
- **[Tauri v2](https://tauri.app/)** - Lightweight, secure desktop framework
- **[TypeScript 5.9](https://www.typescriptlang.org/)** - Type-safe development
- **[Bun](https://bun.sh/)** - Fast JavaScript runtime and package manager

### Database & State
- **[Drizzle ORM](https://orm.drizzle.team/)** - TypeScript-first ORM
- **[libSQL/SQLite](https://github.com/tursodatabase/libsql)** - Embedded database
- **[@tauri-apps/plugin-sql](https://github.com/tauri-apps/plugins-workspace)** - SQLite integration for Tauri

### Styling & UI
- **[TailwindCSS v4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable component library
- **[Lucide Icons](https://lucide.dev/)** - Beautiful, consistent icons
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible components
- **[CVA](https://cva.style/)** - Class variance authority for component variants

### Developer Tools
- **[Vite v7](https://vitejs.dev/)** - Next-gen frontend tooling
- **[Biome](https://biomejs.dev/)** - Fast formatter and linter (Prettier + ESLint replacement)
- **[Storybook v10](https://storybook.js.org/)** - Component development and testing
- **[Vitest](https://vitest.dev/)** - Unit testing with Playwright browser support
- **[Drizzle Kit](https://orm.drizzle.team/kit-docs/overview)** - Database migrations and studio
- **[Knip](https://knip.dev/)** - Find unused files, dependencies, and exports
- **[Taze](https://github.com/antfu/taze)** - Keep dependencies up-to-date

## 📦 Installation

### Prerequisites
- [Bun](https://bun.sh/) v1.0+
- [Rust](https://www.rust-lang.org/) (for Tauri builds)
- Node.js 18+ (if not using Bun)

### Setup

```bash
# Clone the repository
git clone <your-repo-url>
cd offline-first-react-router-tauri-template

# Install dependencies
bun install

# Generate database types
bun run db:generate

# Apply migrations
bun run db:migrate

# Seed database (optional)
bun run db:seed
```

## 🚀 Development

### Start Development Server

```bash
# Web development
bun dev

# Tauri desktop app
bun tauri dev

# Storybook component development
bun storybook
```

Your application will be available at `http://localhost:5173`

### Database Management

```bash
# Generate migrations from schema changes
bun run db:generate

# Apply migrations to database
bun run db:migrate

# Open Drizzle Studio (visual database editor)
bun run db:studio

# Seed database with sample data
bun run db:seed
```

### Code Quality

```bash
# Run linter
bun lint

# Fix linting issues
bun lint:fix

# Check code (lint + format)
bun check

# Fix all issues
bun check:fix

# Format code
bun format

# Type check
bun typecheck
```

## 🏗️ Building for Production

### Web Build
```bash
bun run build
```

### Desktop Build
```bash
# Build for your current platform
bun tauri build

# The output will be in src-tauri/target/release/
```

Build artifacts:
- **Windows**: `.exe` installer and `.msi`
- **macOS**: `.app` and `.dmg`
- **Linux**: `.AppImage`, `.deb`, and `.rpm`

## 📁 Project Structure

```
.
├── app/                      # Application source
│   ├── pages/               # Page components
│   ├── routes/              # React Router routes
│   ├── shared/              # Shared utilities
│   │   ├── api/db/          # Database schema and client
│   │   ├── components/      # Shared components
│   │   └── lib/             # Utilities
│   ├── features/            # Feature modules
│   └── widgets/             # Complex components
├── src-tauri/               # Tauri (Rust) source
│   ├── src/                 # Rust code
│   └── migrations/          # SQL migrations
├── stories/                 # Storybook stories
├── public/                  # Static assets
└── .storybook/              # Storybook config
```

## 🧰 Available Scripts

| Script | Description |
|--------|-------------|
| `bun dev` | Start development server |
| `bun build` | Build for production |
| `bun start` | Start production server |
| `bun tauri dev` | Run Tauri development |
| `bun tauri build` | Build Tauri desktop app |
| `bun storybook` | Start Storybook |
| `bun build-storybook` | Build Storybook |
| `bun typecheck` | Run TypeScript type checking |
| `bun lint` | Lint code with Biome |
| `bun lint:fix` | Fix linting issues |
| `bun check` | Run all checks |
| `bun check:fix` | Fix all issues |
| `bun format` | Format code |
| `bun db:generate` | Generate DB migrations |
| `bun db:migrate` | Apply migrations |
| `bun db:studio` | Open Drizzle Studio |
| `bun db:seed` | Seed database |
| `bun deps` | Check dependency updates |
| `bun knip` | Find unused exports/deps |

## 🎨 Styling

This template uses **TailwindCSS v4** with:
- **shadcn/ui** components for common UI patterns
- **CVA** for component variant management
- **tailwind-merge** for className conflicts resolution
- Custom Tailwind plugins and animations

## 🗄️ Database

The template includes a fully configured SQLite setup:
- **Drizzle ORM** for type-safe database queries
- **Drizzle Kit** for migrations and schema management
- **Drizzle Studio** for visual database exploration
- **SQLite Proxy** integration with Tauri for native database access

Database location: `~/.config/dev.jhoan.offline-first-react-router-tauri-template/database.db`

## 🧪 Testing & Storybook

### Storybook
Component development environment with:
- React Router integration via `storybook-addon-remix-react-router`
- Accessibility testing with `@storybook/addon-a11y`
- Vitest integration for component testing
- Automatic documentation generation

### Vitest
- Unit and integration testing
- Browser testing with Playwright
- Coverage reports with v8

## 🔧 Configuration Files

- `react-router.config.ts` - React Router configuration (SPA mode enabled)
- `vite.config.ts` - Vite bundler configuration
- `sb-vite.config.ts` - Storybook-specific Vite config
- `biome.json` - Linting and formatting rules
- `drizzle.config.ts` - Database configuration
- `tsconfig.json` - TypeScript compiler options
- `tailwind.config.ts` - TailwindCSS configuration
- `src-tauri/tauri.conf.json` - Tauri app configuration

## 🚢 Deployment

### Desktop Distribution
Build installers for all platforms:
```bash
bun tauri build
```

Distribute the generated installers from `src-tauri/target/release/bundle/`

### Web Deployment (if needed)
The build output in `build/` can be deployed to:
- Vercel, Netlify, or Cloudflare Pages (static hosting)
- Docker containers (Dockerfile included)
- Any Node.js hosting platform

## 📝 License

MIT

---

**Built with ❤️ using bleeding-edge web technologies**

🔥 **Performance-obsessed** | 🎯 **Production-ready** | ⚡ **Developer-friendly**
