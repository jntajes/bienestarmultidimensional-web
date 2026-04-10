# 🌟 Sitio Web - Terapeuta Medicina Estelar

MVP (Minimum Viable Product) completo y funcional para una terapeuta especializada en medicina estelar.

## 🚀 Tecnologías
- **Frontend:** Next.js 14 + React 18
- **Formularios:** Netlify Forms (sin backend requerido)
- **Hosting:** Netlify (gratuito inicialmente)
- **Dominio:** Personalizado (agregable después)
- **Estilos:** CSS Modules + Global CSS
- **Despliegue:** Git + Netlify automático

## ✨ Características Incluidas

### ✅ Completadas en MVP
- ✓ Header y Footer responsivos
- ✓ Página de inicio con hero section
- ✓ Página de servicios (6 servicios disponibles)
- ✓ Página sobre la terapeuta con timeline
- ✓ Formulario de contacto con Netlify Forms
- ✓ Blog/Contenido en Markdown
- ✓ Diseño responsivo (mobile-first)
- ✓ Colores personalizados (medicina estelar)
- ✓ Efectos hover y transiciones suaves
- ✓ SEO optimizado con Next.js

### 📁 Contenido Incluido
- 5 artículos sobre servicios y prácticas
- Información completa de servicios
- Testimonios y preguntas frecuentes
- Formulario de contacto funcional

## 📂 Estructura del Proyecto

```
web-terapeuta/
├── src/
│   ├── pages/
│   │   ├── _app.js                # Configuración global
│   │   ├── _document.js           # HTML wrapper
│   │   ├── index.js               # Página inicio
│   │   ├── servicios.js           # Página servicios
│   │   ├── sobre.js               # Página sobre mí
│   │   └── contacto.js            # Página contacto
│   ├── components/
│   │   ├── Header.jsx + .css
│   │   ├── Footer.jsx + .css
│   │   └── Layout.jsx             # Envoltorio principal
│   └── styles/
│       ├── globals.css            # Estilos globales
│       ├── Home.module.css
│       ├── Servicios.module.css
│       ├── Sobre.module.css
│       └── Contacto.module.css
├── public/
│   └── images/                    # Imágenes (agregar aquí)
├── content/
│   └── *.md                       # Artículos de blog
├── netlify.toml                   # Config Netlify
├── vercel.json                    # Config Vercel (alternativa)
├── package.json
├── next.config.js
├── DEPLOYMENT.md                  # Guía de despliegue
└── README.md
```

## 🛠️ Instalación Local

### Requisitos
- Node.js 18+
- npm o yarn

### Pasos

```bash
# 1. Navega a la carpeta
cd web-terapeuta

# 2. Instala dependencias
npm install

# 3. Inicia desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

## 📦 Comandos Disponibles

```bash
npm run dev          # Servidor local de desarrollo
npm run build        # Construir para producción
npm start            # Iniciar servidor producción
npm run lint         # Verificar código
```

## 🌐 Despliegue Rápido

### Opción 1: Netlify (Recomendado)
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

### Opción 2: GitHub + Netlify (Automático)
1. Sube a GitHub
2. Conecta repo en [netlify.com](https://netlify.com)
3. ¡Desplegado automáticamente!

## 📋 Próximos Pasos

### Antes de Lanzar
- [ ] Personalizar email y teléfono
- [ ] Agregar imágenes profesionales
- [ ] Revisar y editar contenido
- [ ] Configurar dominio personalizado
- [ ] Probar formulario de contacto

### Para Expandir
- [ ] Agregar blog dinámico
- [ ] Integrar calendario (Calendly)
- [ ] Sistema de pagos (Stripe)
- [ ] Panel de administración
- [ ] Analytics (Google Analytics)

### Documentación Adicional
Ver [DEPLOYMENT.md](DEPLOYMENT.md) para instrucciones detalladas de despliegue y configuración.

## 🎨 Personalización

### Colores
Edita `src/styles/globals.css`:
```css
:root {
  --primary: #6b5b95;      /* Cambiar aquí */
  --secondary: #d4a574;
  --accent: #c7a87e;
  --dark: #2c2c2c;
  --light: #f9f7f4;
}
```

### Contenido
- Editables en archivos `.js` y `.md`
- Imágenes en `public/images/`
- Artículos en `content/`

## 💬 Soporte y Documentación
- [Next.js Docs](https://nextjs.org/docs)
- [Netlify Docs](https://docs.netlify.com)
- [React Docs](https://react.dev)

---

**MVP Completo y Listo para Producción ✨**
