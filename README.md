# Drone Medellín — Sitio Web Estático

Sitio web one-page para **Drone Medellín**, servicio de fotografía y video aéreo con drones en Medellín, Colombia.

## Stack
- HTML5 + CSS3 + JavaScript puro (sin frameworks, sin build step)
- Deploy: Azure Static Web Apps / Netlify / Vercel

## Estructura del proyecto
```
dronemedellin/
├── index.html                  # Página principal
├── css/
│   └── styles.css              # Estilos
├── js/
│   └── main.js                 # Interacciones y formulario
├── img/                        # Imágenes (agregar aquí)
│   ├── og-image.jpg            # Imagen para redes sociales (1200x630)
│   └── favicon.png             # Favicon
├── sitemap.xml                 # SEO sitemap
├── robots.txt                  # Directivas para buscadores
├── staticwebapp.config.json    # Configuración Azure
└── README.md
```

## Configuración pendiente

### 1. Formspree (formulario de contacto)
1. Crea cuenta gratis en https://formspree.io
2. Crea un nuevo formulario
3. Copia el ID del formulario
4. Reemplaza en `index.html` la línea:
   ```
   action="https://formspree.io/f/REPLACE_WITH_YOUR_FORMSPREE_ID"
   ```

### 2. Imágenes
Agrega en la carpeta `img/`:
- `og-image.jpg` — imagen de redes sociales (1200×630 px)
- `favicon.png` — ícono del sitio (32×32 px)
- Foto del equipo/founder para la sección "Nosotros"

### 3. Deploy en Azure Static Web Apps
1. Sube el proyecto a GitHub
2. Ve a portal.azure.com
3. Crea un recurso "Static Web App"
4. Conecta tu repositorio de GitHub
5. En "App location" pon `/`, sin build command ni output location
6. Una vez desplegado, apunta tu dominio dronemedellin.com.co al dominio de Azure

### 4. Dominio personalizado
En Azure Static Web Apps > Custom Domains, agrega `dronemedellin.com.co` y sigue las instrucciones para actualizar los registros DNS en tu proveedor de dominio.

## Vista previa local
Abre `index.html` directamente en el navegador, o usa la extensión **Live Server** de VS Code.

## Contacto
- WhatsApp: +57 300 208 2371
- Email: info@dronemedellin.com.co
