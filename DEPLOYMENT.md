# Instalación y Configuración Local

## Requisitos
- Node.js 18+ instalado
- Git

## Pasos de Instalación

### 1. Navega a la carpeta del proyecto
```bash
cd web-terapeuta
```

### 2. Instala las dependencias
```bash
npm install
```

### 3. Ejecuta el servidor de desarrollo
```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador

## Despliegue en Netlify

### Método 1: Usando Netlify CLI

1. Instala Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Conectate a tu cuenta de Netlify:
```bash
netlify login
```

3. Despliega el proyecto:
```bash
netlify deploy --prod
```

### Método 2: Usando GitHub (Recomendado)

1. Sube tu proyecto a GitHub
2. Ve a [Netlify](https://netlify.com)
3. Conecta tu repositorio de GitHub
4. Netlify desplegará automáticamente en cada push
5. Tu proyecto estará en: `https://tu-app.netlify.app`

## Configurar Dominio Personalizado

1. En Netlify, ve a **Site settings** → **Domain management**
2. Haz clic en **Add custom domain**
3. Ingresa tu dominio (ej: medicinaestelar.com)
4. Sigue las instrucciones para configurar DNS

## Variables de Entorno

Si necesitas variables de entorno en el futuro, crea un archivo `.env.local`:

```bash
NEXT_PUBLIC_EMAIL=contacto@medicinaestelar.com
```

En Netlify, configura las variables en **Site settings** → **Build & deploy** → **Environment**

## Formulario de Contacto con Netlify Forms

El formulario ya está configurado en `src/pages/contacto.js`. Solo necesitas:

1. Desplegar el sitio en Netlify
2. Los emails llegarán automáticamente a tu cuenta de Netlify
3. Configura notificaciones en Netlify **Forms** → **Settings**

## Estructura de Carpetas del Proyecto

```
web-terapeuta/
├── src/
│   ├── pages/
│   │   ├── _app.js           # App wrapper
│   │   ├── _document.js       # HTML document wrapper
│   │   ├── index.js           # Página de inicio
│   │   ├── servicios.js       # Página de servicios
│   │   ├── sobre.js           # Página sobre la terapeuta
│   │   └── contacto.js        # Página de contacto
│   ├── components/
│   │   ├── Header.jsx         # Navegación
│   │   ├── Header.module.css
│   │   ├── Footer.jsx         # Pie de página
│   │   ├── Footer.module.css
│   │   └── Layout.jsx         # Layout principal
│   └── styles/
│       ├── globals.css        # Estilos globales
│       ├── Home.module.css
│       ├── Servicios.module.css
│       ├── Sobre.module.css
│       └── Contacto.module.css
├── public/
│   └── images/                # Imágenes
├── content/                   # Artículos de blog (Markdown)
├── package.json
├── next.config.js
├── netlify.toml              # Configuración de Netlify
└── vercel.json               # Configuración de Vercel (alternativa a Netlify)
```

## Próximos Pasos

### Para Desarrollar Más:
- Agregar imágenes en la carpeta `public/images/`
- Crear más artículos en la carpeta `content/`
- Personalizar colores en `src/styles/globals.css`
- Agregar componentes adicionales

### Para Lanzar:
- [ ] Personalizar información (correo, teléfono, ubicación)
- [ ] Agregar imágenes profesionales
- [ ] Configurar dominio personalizado
- [ ] Probar formulario de contacto
- [ ] Optimizar para SEO
- [ ] Agregar política de privacidad
- [ ] Configurar Google Analytics (opcional)

## Comandos Útiles

```bash
# Desarrollo
npm run dev              # Inicia servidor local

# Producción
npm run build           # Construye para producción
npm start               # Inicia servidor de producción

# Linting
npm run lint            # Verifica código

# Limpiar
rm -rf .next node_modules
npm install
```

## Soporte

Para más información:
- [Documentación de Next.js](https://nextjs.org/docs)
- [Netlify Docs](https://docs.netlify.com)
- [React Documentation](https://react.dev)
