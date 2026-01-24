# Dashboard Template - Next.js
[English](#english) | [Español](#español)
---

## English
### 📋 Description
A modern, production-ready dashboard template built with Next.js 15, featuring authentication with Auth0, a responsive sidebar navigation, and a clean, scalable architecture. This template is designed to help quickly bootstrap new dashboard projects.

### ✨ Features
- 🔐 **Authentication** - Integrated Auth0 authentication with protected routes
- 🎨 **Modern UI** - Built with Tailwind CSS and NextUI components
- 🌙 **Dark Mode** - Built-in dark theme support with system preference detection
- 📱 **Responsive Design** - Mobile-friendly layout with sidebar navigation
- 🚀 **Next.js 15** - Latest App Router with Server Components
- 🔄 **State Management** - React Query for server state management
- 📊 **TypeScript** - Full TypeScript support for type safety
- 🎯 **Atomic Design** - Well-organized component structure
- 🔒 **Route Protection** - Middleware-based route protection
- ⚡ **Performance** - Optimized for production with code splitting

### 🛠️ Tech Stack
- **Framework:** Next.js 15.4.4
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 3.4.1
- **UI Components:** NextUI, HeroUI
- **Authentication:** Auth0 Next.js SDK 3.5.0
- **Theme Management:** next-themes 0.4.6
- **Data Fetching:** TanStack React Query 5.90.10
- **HTTP Client:** Axios 1.5.0
- **Icons:** React Icons 5.5.0
- **Charts:** Recharts 2.15.1

### 📦 Prerequisites
Before you begin, ensure you have the following installed:
- **Node.js** 18.x or higher
- **npm**, **yarn**, **pnpm**, or **bun**
- An **Auth0 account** and application configured

### 🚀 Getting Started
#### 1. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

#### 2. Configure environment variables
Copy the `.env.example` file to `.env`:
```bash
cp .env.example .env
```

Fill in your Auth0 credentials in the `.env` file:
```env
AUTH0_ISSUER_BASE_URL=https://your-domain.auth0.com
AUTH0_CLIENT_ID=your_client_id
AUTH0_CLIENT_SECRET=your_client_secret
AUTH0_BASE_URL=http://localhost:3000
AUTH0_SECRET=your_random_secret_string
```

**Important:** 
- Do not use quotes around values in `.env` files
- `AUTH0_SECRET` should be a long, random string (you can generate one using `openssl rand -hex 32`)
- `AUTH0_BASE_URL` should match your application URL

#### 3. Run the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### 📜 Available Scripts
- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check for code issues

### 📁 Project Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes (Auth0 handlers)
│   ├── home/              # Protected dashboard routes
│   │   ├── dashboard/     # Dashboard page
│   │   ├── costs/         # Costs page
│   │   └── layout.tsx     # Layout for protected routes
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page (redirects to dashboard)
├── components/            # React components
│   ├── atoms/             # Atomic design - smallest components
│   │   ├── Button/       # Button component
│   │   ├── Icons/         # Icon components
│   │   ├── NavLink/       # Navigation link component
│   │   ├── Skeleton/      # Loading skeleton component
│   │   └── ThemeToggle/    # Dark mode toggle component
│   └── organism/          # Atomic design - complex components
│       ├── NavBar/        # Top navigation bar
│       └── Sidebar/       # Side navigation menu
├── api/                   # API utilities
│   └── axiosBase.ts      # Axios configuration and interceptors
├── interfaces/            # TypeScript type definitions
├── provider/              # React context providers
├── styles/                # Global styles
├── utils/                 # Utility functions
└── middleware.ts          # Next.js middleware for route protection
```

### 🔐 Authentication Flow
1. User visits the application
2. Middleware checks for authentication
3. If not authenticated, user is redirected to Auth0 login
4. After successful login, user is redirected back to the application
5. Access token is stored in cookies for API requests
6. Protected routes are accessible only to authenticated users

### 🎨 Customization
#### Adding New Routes
1. Create a new page in `src/app/home/your-route/page.tsx`
2. Add the route to the sidebar configuration in `src/components/organism/Sidebar/index.tsx`
3. The route will be automatically protected by the middleware

#### Styling
The project uses Tailwind CSS with custom colors defined in `tailwind.config.js`. You can customize:
- Colors in the `theme.extend.colors` section
- Fonts in the root layout
- Global styles in `src/styles/globals.css`

#### Dark Mode
The template includes full dark mode support using `next-themes`:

- **Toggle Button:** Located in the NavBar, allows users to switch between light and dark themes
- **System Preference:** Automatically detects and follows the user's system theme preference
- **Persistence:** Theme preference is saved in localStorage and persists across sessions
- **Smooth Transitions:** All theme changes include smooth color transitions

To customize dark mode colors, update the `dark:` variants in your Tailwind classes. The template includes dark mode styles for:
- Background colors (main content, sidebar, navbar)
- Text colors
- Border colors
- Interactive elements (buttons, links, hover states)

Example:
```tsx
<div className="bg-white dark:bg-gray_900 text-gray_800 dark:text-gray_100">
  Content with dark mode support
</div>
```

### 🐛 Troubleshooting
#### "issuerBaseURL must be a valid uri" Error
- Ensure `AUTH0_ISSUER_BASE_URL` in your `.env` file doesn't have quotes
- Make sure the URL includes the `https://` protocol
- Restart the development server after changing `.env` files

#### Authentication Not Working
- Verify all Auth0 environment variables are set correctly
- Check that your Auth0 application's callback URLs include `http://localhost:3000/api/auth/callback`
- Ensure `AUTH0_BASE_URL` matches your current application URL

### 📝 License
Agustina Fassina

---

## Español
### 📋 Descripción
Una plantilla de dashboard moderna y lista para producción construida con Next.js 15, que incluye autenticación con Auth0, navegación con barra lateral responsive y una arquitectura limpia y escalable. Esta plantilla está diseñada para ayudar a iniciar rápidamente nuevos proyectos de dashboard.

### ✨ Características
- 🔐 **Autenticación** - Autenticación integrada con Auth0 y rutas protegidas
- 🎨 **UI Moderna** - Construida con Tailwind CSS y componentes NextUI
- 🌙 **Modo Oscuro** - Soporte integrado para tema oscuro con detección de preferencia del sistema
- 📱 **Diseño Responsive** - Layout amigable para móviles con navegación lateral
- 🚀 **Next.js 15** - Último App Router con Server Components
- 🔄 **Gestión de Estado** - React Query para gestión de estado del servidor
- 📊 **TypeScript** - Soporte completo de TypeScript para seguridad de tipos
- 🎯 **Atomic Design** - Estructura de componentes bien organizada
- 🔒 **Protección de Rutas** - Protección de rutas basada en middleware
- ⚡ **Rendimiento** - Optimizado para producción con code splitting

### 🛠️ Stack Tecnológico
- **Framework:** Next.js 15.4.4
- **Lenguaje:** TypeScript 5
- **Estilos:** Tailwind CSS 3.4.1
- **Componentes UI:** NextUI, HeroUI
- **Autenticación:** Auth0 Next.js SDK 3.5.0
- **Gestión de Temas:** next-themes 0.4.6
- **Obtención de Datos:** TanStack React Query 5.90.10
- **Cliente HTTP:** Axios 1.5.0
- **Iconos:** React Icons 5.5.0
- **Gráficos:** Recharts 2.15.1

### 📦 Requisitos Previos
Antes de comenzar, asegúrate de tener instalado lo siguiente:
- **Node.js** 18.x o superior
- **npm**, **yarn**, **pnpm**, o **bun**
- Una cuenta de **Auth0** y una aplicación configurada

### 🚀 Comenzar
#### 1. Instalar dependencias
```bash
npm install
# o
yarn install
# o
pnpm install
# o
bun install
```

#### 2. Configurar variables de entorno
Copiar el archivo `.env.example` a `.env`:

```bash
cp .env.example .env
```

Completar con credenciales de Auth0 en el archivo `.env`:
```env
AUTH0_ISSUER_BASE_URL=https://tu-dominio.auth0.com
AUTH0_CLIENT_ID=tu_client_id
AUTH0_CLIENT_SECRET=tu_client_secret
AUTH0_BASE_URL=http://localhost:3000
AUTH0_SECRET=tu_cadena_secreta_aleatoria
```

**Importante:** 
- No usar comillas alrededor de los valores en los archivos `.env`
- `AUTH0_SECRET` debe ser una cadena larga y aleatoria (puedes generar una usando `openssl rand -hex 32`)
- `AUTH0_BASE_URL` debe coincidir con la URL de tu aplicación

#### 3. Ejecutar el servidor de desarrollo
```bash
npm run dev
# o
yarn dev
# o
pnpm dev
# o
bun dev
```

Abrir [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

### 📜 Scripts Disponibles
- `npm run dev` - Iniciar el servidor de desarrollo
- `npm run build` - Construir la aplicación para producción
- `npm run start` - Iniciar el servidor de producción
- `npm run lint` - Ejecutar ESLint para verificar problemas en el código

### 📁 Estructura del Proyecto
```
src/
├── app/                    # Páginas del App Router de Next.js
│   ├── api/               # Rutas API (manejadores de Auth0)
│   ├── home/              # Rutas protegidas del dashboard
│   │   ├── dashboard/     # Página del dashboard
│   │   ├── costs/         # Página de costos
│   │   └── layout.tsx     # Layout para rutas protegidas
│   ├── layout.tsx         # Layout raíz
│   └── page.tsx           # Página de inicio (redirige al dashboard)
├── components/            # Componentes React
│   ├── atoms/             # Atomic design - componentes más pequeños
│   │   ├── Button/       # Componente Button
│   │   ├── Icons/         # Componentes de iconos
│   │   ├── NavLink/       # Componente de enlace de navegación
│   │   ├── Skeleton/      # Componente de skeleton de carga
│   │   └── ThemeToggle/    # Componente de alternancia de tema oscuro
│   └── organism/          # Atomic design - componentes complejos
│       ├── NavBar/        # Barra de navegación superior
│       └── Sidebar/       # Menú de navegación lateral
├── api/                   # Utilidades de API
│   └── axiosBase.ts      # Configuración e interceptores de Axios
├── interfaces/            # Definiciones de tipos TypeScript
├── provider/              # Proveedores de contexto React
├── styles/                # Estilos globales
├── utils/                 # Funciones utilitarias
└── middleware.ts          # Middleware de Next.js para protección de rutas
```

### 🔐 Flujo de Autenticación
1. El usuario visita la aplicación
2. El middleware verifica la autenticación
3. Si no está autenticado, el usuario es redirigido al login de Auth0
4. Después de un login exitoso, el usuario es redirigido de vuelta a la aplicación
5. El token de acceso se almacena en cookies para las solicitudes API
6. Las rutas protegidas son accesibles solo para usuarios autenticados

### 🎨 Personalización
#### Agregar Nuevas Rutas
1. Crea una nueva página en `src/app/home/tu-ruta/page.tsx`
2. Agrega la ruta a la configuración del sidebar en `src/components/organism/Sidebar/index.tsx`
3. La ruta será automáticamente protegida por el middleware

#### Estilos
El proyecto usa Tailwind CSS con colores personalizados definidos en `tailwind.config.js`. Puedes personalizar:
- Colores en la sección `theme.extend.colors`
- Fuentes en el layout raíz
- Estilos globales en `src/styles/globals.css`

#### Modo Oscuro
La plantilla incluye soporte completo para modo oscuro usando `next-themes`:

- **Botón de Alternancia:** Ubicado en el NavBar, permite a los usuarios cambiar entre tema claro y oscuro
- **Preferencia del Sistema:** Detecta automáticamente y sigue la preferencia de tema del sistema del usuario
- **Persistencia:** La preferencia de tema se guarda en localStorage y persiste entre sesiones
- **Transiciones Suaves:** Todos los cambios de tema incluyen transiciones de color suaves

Para personalizar los colores del modo oscuro, actualiza las variantes `dark:` en tus clases de Tailwind. La plantilla incluye estilos de modo oscuro para:
- Colores de fondo (contenido principal, sidebar, navbar)
- Colores de texto
- Colores de borde
- Elementos interactivos (botones, enlaces, estados hover)

Ejemplo:
```tsx
<div className="bg-white dark:bg-gray_900 text-gray_800 dark:text-gray_100">
  Contenido con soporte para modo oscuro
</div>
```

### 🐛 Solución de Problemas
#### Error "issuerBaseURL must be a valid uri"
- Asegúrate de que `AUTH0_ISSUER_BASE_URL` en tu archivo `.env` no tenga comillas
- Asegúrate de que la URL incluya el protocolo `https://`
- Reinicia el servidor de desarrollo después de cambiar archivos `.env`

#### La Autenticación No Funciona
- Verifica que todas las variables de entorno de Auth0 estén configuradas correctamente
- Verifica que las URLs de callback de tu aplicación Auth0 incluyan `http://localhost:3000/api/auth/callback`
- Asegúrate de que `AUTH0_BASE_URL` coincida con la URL actual de tu aplicación

### 📝 Licencia
Agustina Fassina
