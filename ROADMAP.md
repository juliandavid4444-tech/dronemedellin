# 🗺️ Roadmap Drone Medellín — SEO + AI Discovery

> Documento vivo. Marcar `[x]` lo que se vaya completando.
> Última actualización: 2026-04-29 — versión web actual: **v0.2.0**

---

## 🎯 Objetivos

1. **Aparecer en el Local Pack** de Google para "drone medellín" y variantes (top 3 en mapa).
2. **Rankear orgánico top 5** para 5–8 keywords clave en Medellín y Antioquia.
3. **Ser citado por ChatGPT, Perplexity, Claude y Gemini** cuando preguntan por servicios de drone en Colombia.
4. **Reducir el costo por lead de Google Ads** mejorando la conversión orgánica complementaria.

---

## 📊 KPIs a monitorear (mensual)

- Posición promedio en Search Console para 10 keywords objetivo
- Impresiones y clics orgánicos (Search Console)
- Reseñas en Google Business Profile (cantidad + rating)
- Backlinks (Ahrefs / Ubersuggest gratis)
- Menciones en respuestas de ChatGPT/Perplexity (verificar manualmente cada 2 semanas)
- Lighthouse score (Performance, SEO, Accessibility, Best Practices)
- Leads orgánicos (clics WhatsApp medidos por GA4)

---

## 🟢 SPRINT 0 — Listo (v0.2.0)

- [x] Refactor HTML semántico con `lang="es-CO"`, `<main>`, `<section>`, headings jerárquicos
- [x] Schema.org `@graph`: Organization + ProfessionalService + WebSite + VideoObject + BreadcrumbList + FAQPage + 5 Services + 3 Reviews + AggregateRating
- [x] FAQ visible con `<details>` (7 preguntas) + FAQPage schema
- [x] Sección "Por qué elegirnos", "Industrias", "Cobertura geográfica" (32 ciudades)
- [x] Imágenes optimizadas a WebP con `width/height`, `loading="lazy"`, `alt` SEO
- [x] Hero video diferido con `requestIdleCallback` + poster WebP
- [x] Lite-YouTube facade para video promocional (ahorra ~500 KB)
- [x] `llms.txt` para IAs
- [x] `robots.txt` permitiendo bots de IA (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.)
- [x] `sitemap.xml` con imágenes
- [x] `manifest.webmanifest` (PWA básica) + theme-color
- [x] Meta geo tags (lat/lng)
- [x] OG + Twitter Cards completos
- [x] `vercel.json` con HSTS, cache headers
- [x] Tracking GA4 + Google Ads intacto
- [x] Servicio "Edición con Inteligencia Artificial" agregado
- [x] Disponibilidad 7 días (ajustado en footer y schema)

---

## 🔴 SPRINT 1 — Mes 1 (mayor ROI inmediato)

### 1.1 Google Business Profile (GBP) — palanca #1
- [ ] Reclamar / verificar perfil en https://business.google.com
- [ ] Categoría primaria: **"Servicio de fotografía aérea"**
- [ ] Categorías secundarias: Fotógrafo de bodas, Servicio de producción de video, Estudio de fotografía
- [ ] NAP idéntico a la web (Nombre, Dirección, Teléfono +57 300 208 2371)
- [ ] Subir mínimo **30 fotos** (equipo, drones, antes/después, CEO, behind the scenes)
- [ ] Subir 1 video corto del showreel
- [ ] Habilitar mensajería + reservas
- [ ] Habilitar horarios "abierto todos los días" (consistente con la web)
- [ ] Agregar "Servicios" dentro de GBP (Tomas aéreas, Video promocional, Fotografía, Día de drone, Edición IA)
- [ ] Conseguir las primeras **10 reseñas reales** (pedir a clientes recientes con link directo)
- [ ] Responder TODAS las reseñas
- [ ] Publicar 1 "Post" semanal en GBP

### 1.2 Indexación oficial
- [ ] Crear cuenta en **Google Search Console** y verificar dominio
- [ ] Enviar `sitemap.xml`
- [ ] Verificar que indexe la home y revisar errores
- [ ] Crear cuenta en **Bing Webmaster Tools** (Bing alimenta ChatGPT Search) + enviar sitemap
- [ ] Conectar IndexNow para notificación inmediata de cambios

### 1.3 Backlinks locales — primeros 5
- [ ] Páginas Amarillas Colombia
- [ ] Cylex Colombia
- [ ] Listado.co
- [ ] Hotfrog Colombia
- [ ] Cámara de Comercio de Medellín (perfil empresarial público)

### 1.4 Limpiar `/img/` (1 hora)
- [ ] Mover a `/img/_archive/` o borrar:
  - `5Carrusel_Instagram_Drone_Medellin_noviembre2020.jpg`
  - `DSC_9342-2K.jpg`, `DSC_9342-scaled.jpg`
  - `Dron-Medellin.jpg`, `Dron-Medellin2.png`, `Dron-Medellin3.png`
  - `Fotografia.jpg`
  - `Youtube.jpg`
  - `dia-de-drone.jpg`
  - `pexels-matt-hardy-1680317-90x90.jpg`, `pexels-moose-photos-1036623-90x90.jpg`, `pexels-vera-arsic-984923-90x90.jpg`
  - `tomas-aereas.jpg`
  - `video.jpeg`

### 1.5 Quick wins de schema en `index.html` actual
- [ ] Quitar `<meta name="keywords">` (obsoleto, posible señal de spam)
- [ ] Crear `og-cover.webp` 1200x630 con logo + texto y reemplazar OG image cuadrada
- [ ] Title sugerido: `Drone Medellín ★ Fotografía y Video Aéreo Profesional 4K | +11 años`
- [ ] Description con check marks y star rating

---

## 🟠 SPRINT 2 — Mes 2 (estructura multipágina + reseñas)

### 2.1 Landings dedicadas (multi-página)
> Cada landing: 800–1500 palabras, H1 con keyword, schema `Service`, FAQ específico, CTA WhatsApp, 3–5 imágenes con alt.

#### Servicios:
- [ ] `/servicios/tomas-aereas/`
- [ ] `/servicios/video-promocional/`
- [ ] `/servicios/fotografia-aerea/`
- [ ] `/servicios/drone-bodas-matrimonios/`
- [ ] `/servicios/drone-bienes-raices/`
- [ ] `/servicios/edicion-video-ia/`

#### Cobertura por ciudad:
- [ ] `/cobertura/medellin/`
- [ ] `/cobertura/llanogrande/`
- [ ] `/cobertura/rionegro/`
- [ ] `/cobertura/guatape/`
- [ ] `/cobertura/envigado/`

### 2.2 Portafolio
- [ ] Estructura `/portafolio/` (índice con 8–10 casos)
- [ ] Crear los 5 primeros casos individuales `/portafolio/[slug]/`
- [ ] Cada caso: cliente, problema, solución, resultado, testimonio, imágenes antes/después, embed de video

### 2.3 Reseñas — meta 20 totales
- [ ] +10 reseñas reales en GBP
- [ ] Crear página `/clientes/` con casos verificables

### 2.4 YouTube SEO
- [ ] Subir 5 videos cortos (showreel, casos de éxito) con descripción rica
- [ ] Cada descripción incluye: link a la web, timestamps, keywords, hashtags

### 2.5 Backlinks — meta 10 totales
- [ ] Bodas.com.co
- [ ] Matrimonios.com.co
- [ ] Casamientos.com.co
- [ ] 2 colaboraciones con hoteles boutique (intercambio de menciones)

---

## 🟡 SPRINT 3 — Mes 3 (contenido editorial + IAs)

### 3.1 Blog — calendario inicial (1 post/semana)
> Estructura: H1 con keyword, mín. 1500 palabras, 5+ imágenes con alt, FAQ embebido, schema `Article` + `BreadcrumbList`, autor visible (Julian Rua).

- [ ] *"¿Cuánto cuesta contratar un drone en Medellín en 2026? Guía completa"*
- [ ] *"Drone para matrimonios en Llanogrande: lo que debes saber antes de contratar"*
- [ ] *"Tomas aéreas para fincas en Antioquia: 7 razones para invertir en video"*
- [ ] *"Video promocional para hoteles boutique: caso de estudio Hotel Villa del Sol"*
- [ ] *"Drone para bienes raíces: cómo vender tu casa 30 % más rápido"*
- [ ] *"Guatapé desde el aire: las 5 mejores tomas con drone"*
- [ ] *"Edición de video con IA: cómo cambiamos la postproducción en 2026"*
- [ ] *"FPV vs drone tradicional: cuándo necesitas cada uno"*

### 3.2 AI Discovery — expansión
- [ ] Expandir `llms.txt` con: datos verificables, casos de éxito, comparativa, tarifas indicativas, FAQ extendido
- [ ] Crear `llms-full.txt` (versión extendida)
- [ ] Crear `/contenido.md` (mirror Markdown plano del contenido principal)
- [ ] Crear FAQ Hub `/preguntas-frecuentes/` con 25+ preguntas
- [ ] Estrategia de "triangulación de menciones":
  - [ ] Perfil empresarial en LinkedIn activo (3 posts/semana)
  - [ ] Crunchbase / About.me con descripción larga
  - [ ] Responder 5 preguntas en Quora con firma + link
  - [ ] Responder 5 hilos en Reddit (r/Colombia, r/Medellin) sin spam
  - [ ] Republicar 2 posts del blog en Medium con backlink

### 3.3 Performance — apuntar a Lighthouse 100
- [ ] Inline crítico CSS del hero en `<style>` y cargar resto async
- [ ] Self-host Google Fonts (descargar Montserrat + Lato a `/fonts/`, `font-display: swap`)
- [ ] Convertir imágenes clave a AVIF + `<picture>` fallback a WebP
- [ ] Minificar CSS y JS (csso, terser)
- [ ] Verificar Brotli activo en Vercel

---

## 🔵 SPRINT 4 — Mes 4 en adelante (mantenimiento + escala)

### 4.1 Schema avanzado
- [ ] Agregar `@type: Person` para Julian Rua con `knowsAbout`, `award`, `alumniOf`
- [ ] Agregar `@type: Product` para "Paquete bodas", "Paquete hotel" con precios
- [ ] Agregar `@type: Event` para casos pasados destacados
- [ ] Si haces talleres: `@type: Course`
- [ ] Actualizar `aggregateRating` cuando haya 10+ reseñas reales
- [ ] Agregar `interactionStatistic` al VideoObject (views/likes desde YouTube API)

### 4.2 Páginas legales
- [ ] `/privacidad/` — política de privacidad
- [ ] `/terminos/` — términos de servicio
- [ ] Banner de cookies (si aplica para Europa) — Cookiebot o Klaro

### 4.3 Backlinks — meta 30 totales
- [ ] Aparecer en listas "Top 10 fotógrafos de bodas en Medellín" (email a editores)
- [ ] Sponsorship de algún evento local con backlink
- [ ] Press release en medios locales (El Colombiano, Minuto30) si hay novedad

### 4.4 Contenido continuo
- [ ] Blog: 1 post/semana sostenido
- [ ] GBP: 1 post/semana sostenido
- [ ] LinkedIn empresarial: 3 posts/semana
- [ ] YouTube: 1 video/mes mínimo
- [ ] Conseguir 50 reseñas en GBP

### 4.5 Wikipedia (largo plazo)
- [ ] Si calificas para artículo (cobertura en medios verificables), crear borrador
- [ ] Página de Wikidata con identificadores (Q-ID) para que IAs te reconozcan como entidad

---

## 📈 Resultado esperado

| Mes | Hito |
|---|---|
| **1** | Entrar en el Local Pack de "drone medellín" |
| **2** | 5 landings activas + 20 reseñas + 10 backlinks |
| **3** | Top 5 orgánico para 5–8 keywords + 8 posts de blog |
| **6** | ChatGPT / Perplexity te citan al preguntar "mejor servicio de drone en Medellín" |

---

## 🛠️ Herramientas útiles (mayoría gratis)

- **Search Console** (Google) — indexación y queries
- **Bing Webmaster Tools** — mismo pero para Bing/ChatGPT
- **PageSpeed Insights** — performance
- **Schema Markup Validator** (https://validator.schema.org) — validar JSON-LD
- **Rich Results Test** (Google) — preview de SERP
- **Ubersuggest** (gratis limitado) — keyword research + backlinks
- **Ahrefs Webmaster Tools** (gratis si verificas dominio) — auditoría técnica + backlinks
- **GTmetrix** — performance detallado
- **WAVE** o **axe DevTools** — accesibilidad
- **Yandex Metrica** — heatmaps gratis si quieres comportamiento de usuario sin cookies

---

## 📌 Notas importantes

- ⚠️ **No mover los IDs de Google Ads (`AW-581774690`) ni GA4 (`G-Q1QX4HF70T`)** sin coordinar — puede romper conversiones.
- ⚠️ **No prometer "permisos Aerocivil"** en la web — eso se habla con el cliente directamente.
- ✅ Sí mencionar **piloto certificado** (es real y suma confianza).
- ✅ Mantener mensaje consistente: cobertura **todos los días sujeto a agenda**.
- 📞 Toda CTA debe llevar a WhatsApp `+573002082371` con mensaje pre-cargado.

---

*Roadmap creado el 2026-04-29 por el equipo de desarrollo. Actualizar al cierre de cada sprint.*
