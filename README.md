# Portafolio Brayan - Desarrollador Full Stack

Un portafolio personal moderno y responsivo construido con React 19, TypeScript y Tailwind CSS. Optimizado para SEO y con una experiencia de usuario excepcional.

## 🚀 Características

- **Diseño Moderno**: Interfaz limpia y profesional con Tailwind CSS v4
- **Completamente Responsivo**: Optimizado para todos los dispositivos
- **Optimizado para SEO**: Meta tags, estructura semántica y rendimiento optimizado
- **Componentes Reutilizables**: Arquitectura modular con shadcn/ui
- **Navegación Fluida**: Scroll suave y navegación intuitiva
- **Formulario de Contacto**: Funcionalidad completa de contacto
- **Accesibilidad**: ARIA labels, navegación por teclado, contraste adecuado, lectores de pantalla
- **Iconos de marca reconocibles**: GitHub, LinkedIn, X, Instagram con logos oficiales

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS v4, shadcn/ui
- **Icons**: Lucide React (íconos generales), @phosphor-icons/react (íconos de marcas)
- **Build Tool**: Vite
- **Linting**: ESLint con reglas de React
- **SEO**: Meta tags, Open Graph, Twitter Cards, JSON-LD, robots.txt, sitemap.xml, accesibilidad WCAG

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── ui/           # Componentes de shadcn/ui
│   ├── Hero.tsx      # Sección de presentación
│   ├── Skills.tsx    # Habilidades y tecnologías
│   ├── Projects.tsx  # Proyectos realizados
│   ├── Contact.tsx   # Formulario de contacto
│   ├── Navbar.tsx # Barra de navegación
│   ├── Footer.tsx    # Pie de página
│   └── ScrollToTop.tsx # Botón de volver arriba
├── lib/
│   └── utils.ts      # Utilidades (cn function)
├── assets/           # Recursos estáticos
└── main.tsx          # Punto de entrada
public/
├── robots.txt          # SEO - Instrucciones para motores de búsqueda
├── sitemap.xml         # SEO - Mapa del sitio para indexación
└── code.svg            # Favicon
```

## 🏃‍♂️ Inicio Rápido

1. **Instalar dependencias**
   ```bash
   npm install
   ```

2. **Iniciar servidor de desarrollo**
   ```bash
   npm run dev
   ```

3. **Construir para producción**
   ```bash
   npm run build
   ```

4. **Vista previa de producción**
   ```bash
   npm run preview
   ```

## 📝 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run lint` - Ejecuta ESLint para verificar código
- `npm run preview` - Vista previa de la build de producción

## 🎨 Personalización

### Colores y Tema
Los colores del tema se definen en `src/index.css` usando variables CSS:

```css
--color-background: var(--background);
--color-foreground: var(--foreground);
--color-primary: var(--primary);
```

### Contenido
Para personalizar el contenido del portafolio, edita los siguientes archivos:

- `src/components/Hero.tsx` - Información personal y presentación
- `src/components/Skills.tsx` - Tecnologías y habilidades
- `src/components/Projects.tsx` - Lista de proyectos
- `src/components/Contact.tsx` - Información de contacto

### SEO
Los meta tags SEO se configuran en `index.html`. Actualiza:
- Título de la página
- Meta description
- Open Graph tags
- Twitter Card tags

## 📱 Secciones del Portafolio

1. **Hero/Presentación**: Introducción personal con llamada a la acción
2. **Habilidades**: Tecnologías organizadas por categorías
3. **Proyectos**: Galería de proyectos con descripciones detalladas
4. **Contacto**: Formulario de contacto y enlaces a redes sociales

## 🔧 Configuración de Desarrollo

### ESLint
Configurado con reglas estrictas de React y TypeScript. Para desarrollo de producción, considera habilitar reglas type-aware:

```js
// eslint.config.js
import tseslint from 'typescript-eslint'

export default defineConfig([
  // ... existing config
  tseslint.configs.recommendedTypeChecked,
  // ... other configs
])
```

### TypeScript
Configuración estricta habilitada con:
- `strict: true`
- `noUnusedLocals: true`
- `noUnusedParameters: true`

## 🚀 Despliegue

El proyecto está optimizado para despliegue en cualquier plataforma moderna:

- **Vercel**: Despliegue automático desde Git
- **Netlify**: Configuración simple con build command `npm run build`
- **GitHub Pages**: Usando GitHub Actions

## 🐳 Despliegue con Docker

### Producción

1. **Despliegue automático (recomendado)**
   ```bash
   # Linux/Mac
   ./deploy.sh

   # Windows
   .\deploy.ps1
   ```

2. **Despliegue manual**
   ```bash
   docker-compose up --build -d
   ```

3. **Verificar que está corriendo**
   ```bash
   curl http://localhost/health
   ```

4. **Detener el contenedor**
   ```bash
   docker-compose down
   ```

### Desarrollo con Docker (opcional)

Si prefieres desarrollo con Docker:

```bash
# Construir imagen de desarrollo
docker build -f Dockerfile.dev -t portfolio-dev .

# Ejecutar contenedor de desarrollo
docker run -p 5173:5173 -v $(pwd):/app portfolio-dev
```

### Archivos de Docker incluidos

- `Dockerfile`: Multi-stage build para producción (incluye configuración de nginx integrada)
- `docker-compose.yml`: Orquestación básica de contenedores
- `docker-compose.prod.yml`: Configuración avanzada con healthchecks y límites de recursos
- `.dockerignore`: Archivos excluidos del build
- `deploy.sh` / `deploy.ps1`: Scripts de despliegue automatizado
- `public/robots.txt`: SEO - Instrucciones para motores de búsqueda
- `public/sitemap.xml`: SEO - Mapa del sitio para indexación

## 🔍 SEO Optimizado

- **Meta tags completos**: Título, descripción, keywords
- **Open Graph**: Para compartir en redes sociales
- **Twitter Cards**: Optimización para Twitter
- **Datos estructurados**: JSON-LD para motores de búsqueda
- **Robots.txt**: Instrucciones para crawlers
- **Sitemap.xml**: Mapa del sitio para motores de búsqueda
- **URLs canónicas**: Evita contenido duplicado

## ♿ Accesibilidad

### Características Implementadas
- **ARIA Labels**: Todos los botones y enlaces tienen etiquetas descriptivas
- **Navegación por teclado**: Soporte completo para navegación con teclado
- **Texto alternativo**: Iconos con descripciones accesibles
- **Contraste adecuado**: Colores que cumplen estándares WCAG
- **Lectores de pantalla**: Optimizado para JAWS, NVDA, VoiceOver

### Elementos con Accesibilidad Mejorada
- Botón de menú móvil: "Abrir menú" / "Cerrar menú"
- Enlaces de redes sociales: "Visitar perfil de [plataforma] de Brayan Salazar"
- Botón de scroll to top: "Volver al inicio de la página"
- Selector de tema: "Cambiar tema" (con sr-only text)

## ⚡ Optimización de Rendimiento

### 🚀 Características Implementadas

- **Code Splitting**: Bundle dividido en chunks optimizados
- **Lazy Loading**: Componentes cargados bajo demanda
- **Preload Hints**: Recursos críticos precargados
- **Tree Shaking**: Eliminación de código no utilizado
- **Gzip Compression**: Assets comprimidos en nginx
- **Cache Headers**: Estrategias de cache optimizadas
- **Bundle Analysis**: Tamaño de chunks monitoreado

### 📊 Métricas de Rendimiento

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **First Input Delay**: < 100ms
- **Bundle Size**: < 500KB (gzipped)

### 🛠️ Optimizaciones Técnicas

#### Build Optimization
```javascript
// vite.config.ts
build: {
  rollupOptions: {
    output: {
      manualChunks: {
        'vendor-react': ['react', 'react-dom'],
        'vendor-ui': ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
        'vendor-icons': ['lucide-react', '@phosphor-icons/react'],
      }
    }
  }
}
```

#### Lazy Loading
```tsx
const Projects = lazy(() => import("@/components/Projects"))
const Contact = lazy(() => import("@/components/Contact"))
```

#### Preload Hints
```html
<link rel="preload" href="/src/main.tsx" as="script" crossorigin>
<link rel="modulepreload" href="/src/components/Hero.tsx">
```

### 📈 Monitoreo de Rendimiento

#### Lighthouse Audit
```bash
# Ejecutar auditoría de Lighthouse
npx lighthouse http://localhost:4173 --output html --output-path ./report.html
```

#### Bundle Analyzer
```bash
# Analizar tamaño del bundle
npm run build -- --mode analyze
npx vite-bundle-analyzer dist
```

#### Core Web Vitals
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms  
- **CLS (Cumulative Layout Shift)**: < 0.1

### 🔧 Comandos de Optimización

```bash
# Build optimizado para producción
npm run build

# Preview del build optimizado
npm run preview

# Analizar bundle (nuevo)
npm run analyze
```
