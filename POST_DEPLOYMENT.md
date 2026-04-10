# Guía de Configuración Post-Despliegue

Después de desplegar tu sitio en Netlify, realiza las siguientes configuraciones:

## 1. Configurar Formulario de Contacto

### En Netlify Dashboard:
1. Ve a tu sitio
2. **Forms** → **Set up notifications**
3. Agrega tu email para recibir notificaciones de formularios
4. (Opcional) Configura **After-submission** con redireccionamiento

## 2. Configurar Dominio Personalizado

1. En Netlify, ve a **Domain settings**
2. Haz clic en **Add custom domain**
3. Ingresa tu dominio (ej: medicinaestelar.com)
4. Sigue las instrucciones para configurar DNS:
   - Si compraste en GoDaddy, Namecheap, etc.
   - Actualiza los nameservers → Netlify
   - O crea registros CNAME según instrucciones

## 3. SSL/HTTPS

- ✅ **Automático**: Netlify genera certificado SSL gratis y automático
- Espera 24-48 horas después de configurar dominio

## 4. Optimizaciones SEO

### En tu proyecto, actualiza:

**`src/pages/_document.js`:**
```javascript
<meta name="description" content="Tu descripción personalizada" />
<meta name="keywords" content="medicina estelar, terapia, sanación" />
```

### Google Search Console:
1. Ve a [Google Search Console](https://search.google.com/search-console)
2. Agrega tu propiedad (dominio)
3. Verifica con DNS o archivo
4. Sube sitemap en **Sitemaps**

### Google Analytics (Opcional):
```javascript
// En _document.js, agrega:
<script
  async
  src={`https://www.googletagmanager.com/gtag/js?id=GA_ID`}
/>
<script
  dangerouslySetInnerHTML={{
    __html: `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GA_ID');`
  }}
/>
```

## 5. Email Automático para Consultas

### Opción A: Reenvío de Emails (Recomendado)
1. En Netlify **Forms**, copia el email de notificaciones
2. Configura auto-respuesta en Gmail/Outlook

### Opción B: Integración con Zapier/IFTTT
- Conecta Netlify Forms → Zapier
- Automatiza envío de emails de confirmación

## 6. Personalizar Información de Contacto

Edita estos archivos con tu información:

**`src/pages/contacto.js`:**
```javascript
<p>contacto@medicinaestelar.com</p>  // Tu email
<p>Buenos Aires, Argentina</p>        // Tu ubicación
```

**`src/pages/sobre.js`:**
- Actualiza tu biografía
- Cambia año de formación

## 7. Agregar Imágenes

1. Coloca imágenes en `public/images/`
2. Usa en componentes:
```javascript
import Image from 'next/image';

<Image
  src="/images/foto.jpg"
  alt="Descripción"
  width={300}
  height={300}
/>
```

## 8. Agregar Social Media

En `src/components/Footer.jsx`, actualiza los links:
```javascript
<a href="https://instagram.com/tuusuario">Instagram</a>
<a href="https://facebook.com/tupagina">Facebook</a>
```

## 9. Política de Privacidad y Términos

Crea una página `src/pages/privacidad.js`:
```javascript
export default function Privacidad() {
  return (
    <>
      <h1>Política de Privacidad</h1>
      <p>Tus datos son protegidos...</p>
    </>
  );
}
```

Agrega en Footer:
```javascript
<Link href="/privacidad">Privacidad</Link>
```

## 10. Verificaciones Finales

### Antes de Lanzar:
- [ ] Formulario de contacto funciona
- [ ] HTTPS activo (candado en navegador)
- [ ] Responsive en móvil
- [ ] Todos los links funcionan
- [ ] Imágenes cargan rápido
- [ ] Sin errores en consola

### Testing Tools:
- [PageSpeed Insights](https://pagespeed.web.dev)
- [GTmetrix](https://gtmetrix.com)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

## 11. Monitoreo Continuo

### Configurar alertas:
1. **Netlify** → **Monitoring**
2. Recibe notificaciones de deployments fallidos
3. Revisa logs automáticamente

### Backups automáticos:
- GitHub: Todos tus cambios están versionados
- Netlify: Guarda histórico de deployments

## 12. Próximas Mejoras

Con el tiempo, considera agregar:
- [ ] Blog dinámico desde CMS
- [ ] Calendario de citas integrado
- [ ] Página de testimonios con imágenes
- [ ] Integración de pagos (Stripe)
- [ ] Chat en vivo
- [ ] Curso/producto online

---

## Soporte Rápido

**Problema: Formulario no envía**
- Verifica que el sitio esté desplegado en Netlify
- Revisa "Forms" en Netlify dashboard
- Asegúrate que `name="contacto"` esté correcto

**Problema: Dominio no funciona**
- Espera 24-48 horas para propagación DNS
- Verifica nameservers en tu registrador
- Usa DNS Checker: https://dnschecker.org

**Problema: Páginas lentas**
- Optimiza imágenes (usa WebP)
- Activa CDN en Netlify (automático)
- Revisa PageSpeed Insights

¡Tu sitio está listo para recibir consultas! 🚀
