# Portafolio de Carlos Pulido - Desarrollador Frontend

Un portafolio moderno y dinámico construido con Next.js 15, React 19 y Sanity CMS, diseñado para mostrar proyectos y artículos de desarrollo frontend con animaciones avanzadas y optimización SEO.

## 🚀 Stack Tecnológico 

- **Framework**: Next.js 15.3.3 con React 19
- **Lenguaje**: TypeScript 5
- **Styling**: TailwindCSS 4.1.8 + DaisyUI 5.0.43
- **CMS**: Sanity 3.94.2 con next-sanity 9.12.0
- **Animaciones**: GSAP 3.13.0 con @gsap/react 2.1.2
- **Temas**: next-themes 0.4.6 con soporte para modo oscuro/claro
- **Chat**: Crisp SDK Web para soporte en tiempo real
- **Notificaciones**: React Toastify 11.0.5

## ✨ Características Principales

### 🎨 Sistema de Temas Dual

- Tema **Corporate** (claro) y **Business** (oscuro)
- Cambio automático basado en preferencias del sistema
- Integración completa con DaisyUI

### 🎬 Animaciones Avanzadas
- Animaciones GSAP con SplitText para efectos de texto
- Transiciones suaves entre páginas con View Transitions
- Efectos hover y transformaciones CSS optimizadas

### 📱 SEO y Performance 

- Metadata estructurada y OpenGraph completo
- Sitemap dinámico generado desde Sanity CMS
- Optimización de imágenes con Next.js Image
- Fuentes optimizadas con Google Fonts

### 🔄 Gestión de Contenido 

- CMS headless con Sanity Studio
- Generación automática de tipos TypeScript
- Revalidación en tiempo real via webhooks
- Soporte para contenido rico (código, imágenes, videos)

## 🛠️ Instalación y Configuración

### Prerrequisitos
- Node.js 18+ 
- npm, pnpm o bun

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/carlosfrontend/portafolio-dev.git
cd portafolio-dev

# Instalar dependencias
npm install

# Generar tipos de Sanity
npm run typegen

# Iniciar servidor de desarrollo
npm run dev
```

### Variables de Entorno
Crear un archivo `.env.local` con:

```env
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=tu_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=tu_read_token
SANITY_REVALIDATE_SECRET=tu_secret_key

# Crisp Chat
NEXT_PUBLIC_CRISP_WEBSITE_ID=tu_crisp_id
```

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── (frontend)/          # Páginas públicas
│   │   ├── page.tsx         # Homepage con Hero y secciones
│   │   ├── blog/            # Sistema de blog
│   │   ├── projects/        # Galería de proyectos
│   │   └── timeline/        # Línea de tiempo profesional
│   ├── api/                 # API Routes
│   │   └── revalidate/      # Webhook de revalidación
│   └── layout.tsx           # Layout raíz con providers
├── components/              # Componentes reutilizables
├── sanity/                  # Configuración y tipos de Sanity
├── consts/                  # Constantes y configuraciones
└── types/                   # Definiciones de tipos TypeScript
```

## 🎯 Scripts Disponibles 

- `npm run dev` - Servidor de desarrollo con Turbopack
- `npm run build` - Build de producción
- `npm run start` - Servidor de producción
- `npm run lint` - Linting con ESLint
- `npm run typegen` - Generación de tipos desde Sanity

## 🏗️ Arquitectura Técnica

### Sistema de Tipos Automático
El proyecto utiliza generación automática de tipos TypeScript desde los esquemas de Sanity: [7] 

### Componentes Principales 

- **Hero**: Sección principal con animaciones GSAP
- **AboutSection**: Información personal y profesional  
- **SkillsSection**: Tecnologías y herramientas
- **Stats**: Estadísticas dinámicas de proyectos y blog

### Integración con Sanity 

- Consultas GROQ tipadas para contenido
- Revalidación automática via webhooks
- Soporte para contenido rico con PortableText

## 🎨 Personalización de Temas 

El sistema de temas adapta iconos y colores automáticamente según el tema activo, proporcionando una experiencia visual coherente.

## 🚀 Deployment

El proyecto está optimizado para deployment en Vercel:

1. Conectar repositorio a Vercel
2. Configurar variables de entorno
3. El build automático incluye generación de tipos

## 📞 Soporte y Chat 

Integración con Crisp Chat que se oculta automáticamente en el Sanity Studio para una experiencia de edición limpia.

## 🔧 Tecnologías de Desarrollo

- **ESLint**: Configuración con reglas de Next.js
- **TypeScript**: Tipado estricto en todo el proyecto
- **Tailwind CSS**: Utility-first CSS framework
- **GSAP**: Animaciones de alto rendimiento

## 📈 SEO y Analytics

- Sitemap dinámico generado desde contenido CMS
- Metadata estructurada para redes sociales
- Optimización de Core Web Vitals
- Soporte completo para OpenGraph y Twitter Cards

---

**Desarrollado por Carlos Pulido** | [LinkedIn](https://www.linkedin.com/in/carlosfrontend/) | [GitHub](https://github.com/carlosfrontend)

## Notas

Documentación que podrías querer explorar:
- [Overview (carlosfrontend/portafolio-dev)](https://deepwiki.com/carlosfrontend/portafolio-dev/1-overview)
- [Architecture & Configuration (carlosfrontend/portafolio-dev)](https://deepwiki.com/carlosfrontend/portafolio-dev/2-architecture-and-configuration)
- [Sanity Integration & Type System (carlosfrontend/portafolio-dev)](https://deepwiki.com/carlosfrontend/portafolio-dev/4.1-sanity-integration-and-type-system)
