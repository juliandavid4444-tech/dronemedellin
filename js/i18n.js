/* ========================================
   DRONE MEDELLÍN — i18n.js
   Bilingual: Spanish (es) / English (en)
   Auto-detects browser language.
   User preference saved in localStorage.
   ======================================== */

(function () {
  var LANG_KEY = 'dm_lang';

  var T = {
    es: {
      /* Meta */
      'meta-title': 'Drone Medellín | Fotografía y Video Aéreo con Drones en Medellín y Antioquia',
      'meta-desc':  'Drone Medellín: 11+ años de experiencia en tomas aéreas, video promocional y fotografía con drones en Medellín, Antioquia, Llanogrande, Guatapé y todo Colombia. Cotiza por WhatsApp.',
      /* Skip */
      'skip-link': 'Saltar al contenido',
      /* Nav */
      'nav-toggle-aria': 'Abrir menú',
      'nav-home':         'Inicio',
      'nav-services':     'Servicios',
      'nav-about':        'Nosotros',
      'nav-coverage':     'Cobertura',
      'nav-testimonials': 'Clientes',
      'nav-faq':          'Preguntas',
      'nav-contact':      'Contacto',
      'nav-quote':        'COTIZAR',
      'lang-toggle-aria': 'Cambiar idioma',
      /* Hero */
      'hero-h1':  'Tomas\u00a0Aéreas con Drone en Medellín',
      'hero-p':   'Especialistas en fotografía y video aéreo con drones de última generación. Más de 11 años capturando momentos excepcionales en Medellín, Antioquia y toda Colombia.',
      'hero-cta': 'COTIZAR SERVICIO',
      /* Services intro */
      'services-title': 'Nuestros Servicios de Drone',
      'services-sub':   'Especialistas en tomas aéreas, video y fotografía profesional en Medellín y toda Antioquia.',
      /* Service panels */
      'panel-aerial-h3':    'Tomas Aéreas',
      'panel-aerial-p':     'Captura la magia desde lo alto con tomas aéreas profesionales. Incluyen edición cautivadora para redes sociales y entrega lista para publicar.',
      'panel-droneday-h3':  'Día de Drone',
      'panel-droneday-p':   'Cobertura completa con operador certificado para tu evento o proyecto: planeación, vuelo, captura y entrega del material editado.',
      'panel-videos-h3':    'Videos',
      'panel-videos-p':     'Filmaciones profesionales que destacan la singularidad de tu proyecto y cautivan a tu audiencia, generando interés y participación.',
      'panel-photo-h3':     'Fotografía',
      'panel-photo-p':      'Capturamos momentos memorables con fotografía profesional. Desde retratos hasta paisajes y eventos, con calidad de impresión y entrega rápida.',
      'panel-promo-h3':     'Video Promocional',
      'panel-promo-p':      'Da vida a tu negocio con un video promocional que cautiva. Fincas, hoteles, restaurantes y bienes raíces con una perspectiva única que invita a tus clientes a explorar lo que ofreces.',
      'common-quote':       'COTIZAR',
      /* Lite YouTube */
      'liteyoutube-aria':      'Reproducir video promocional Drone Medellín',
      'liteyoutube-play-aria': 'Reproducir video',
      /* Why Us */
      'whyus-label':    'Por qué elegirnos',
      'whyus-h2':       'La experiencia y el equipo correctos para tu proyecto',
      'whyus-1-strong': '+11 años',
      'whyus-1-span':   'de experiencia en producción audiovisual y operación de drones en Medellín y Antioquia.',
      'whyus-2-strong': 'Equipo profesional',
      'whyus-2-span':   'Drones DJI 4K, cámaras DSLR/mirrorless, estabilizadores, drones FPV y micrófonos profesionales.',
      'whyus-3-strong': 'Piloto certificado',
      'whyus-3-span':   'Operación con piloto certificado y vigente, planificación cuidadosa de cada vuelo y protocolos seguros en sitio.',
      'whyus-4-strong': 'Edición con Inteligencia Artificial',
      'whyus-4-span':   'Aprovechamos herramientas de IA en postproducción: mejora de color, estabilización, upscaling 4K, transcripción automática de subtítulos y entregas optimizadas para redes sociales.',
      'whyus-5-strong': 'Cobertura amplia',
      'whyus-5-span':   'Valle de Aburrá, Oriente Antioqueño, Suroeste y proyectos en toda Colombia.',
      'whyus-6-strong': 'Atención directa',
      'whyus-6-span':   'Hablas directamente con quien dirige el proyecto, sin intermediarios. Cotización por WhatsApp.',
      /* Industries */
      'industries-label':         'Industrias',
      'industries-h2':            'Para qué tipo de proyectos trabajamos',
      'industry-realestate-h3':   'Bienes Raíces',
      'industry-realestate-p':    'Tomas aéreas y video promocional de proyectos inmobiliarios, casas y apartamentos para acelerar tus ventas.',
      'industry-hotels-h3':       'Hoteles y Fincas Turísticas',
      'industry-hotels-p':        'Mostramos tu propiedad desde una perspectiva única que enamora a viajeros y huéspedes.',
      'industry-restaurants-h3':  'Restaurantes y Gastronomía',
      'industry-restaurants-p':   'Videos promocionales que comunican el ambiente, la propuesta y el valor de tu marca.',
      'industry-weddings-h3':     'Matrimonios y Eventos',
      'industry-weddings-p':      'Cobertura aérea y a nivel de tierra para que tu día más importante quede inolvidable.',
      'industry-agro-h3':         'Agro y Ganadería',
      'industry-agro-p':          'Mapeo aéreo, inspección de fincas, lotes y haciendas para proyectos agroindustriales.',
      'industry-construction-h3': 'Construcción e Infraestructura',
      'industry-construction-p':  'Seguimiento aéreo de obras, inspección de techos, torres y avances de proyectos.',
      'industry-brands-h3':       'Marcas y Empresas',
      'industry-brands-p':        'Producción de contenido audiovisual con drone para campañas, branding y redes sociales.',
      'industry-tourism-h3':      'Turismo y Aventura',
      'industry-tourism-p':       'Capturamos paisajes y experiencias turísticas en Antioquia y Colombia para promoción de destinos.',
      /* About */
      'about-label': 'Sobre nosotros',
      'about-h2':    'Más de 11 años creando audiovisuales con drone en Antioquia',
      'about-p1':    'Mi dedicación como creador audiovisual independiente sigue creciendo cada año. Trabajo con un equipo de profesionales expertos en fotografía y cinematografía, utilizando drones, cámaras DSLR/mirrorless y filmadoras para capturar y dar vida a tus ideas con una mirada única en cada proyecto.',
      'about-cite':  '– Julian Rua | CEO Fundador –',
      /* Coverage */
      'coverage-label':       'Cobertura',
      'coverage-h2':          'Dónde prestamos servicios de drone',
      'coverage-intro':       'Operamos en todo el departamento de Antioquia y atendemos proyectos especiales en otras regiones de Colombia bajo cotización.',
      'coverage-valleaburra': 'Valle de Aburrá',
      'coverage-oriente':     'Oriente Antioqueño',
      'coverage-suroeste':    'Suroeste y Norte',
      'coverage-otras':       'Otras regiones',
      'coverage-consult':     'A consultar',
      /* Testimonials */
      'testimonials-label': 'Testimoniales',
      'testimonials-h2':    'Lo que dicen nuestros clientes',
      'testimonial-1': '"Nos encantó el trabajo de Drone Medellín. Las fotos, los videos y la experiencia en nuestro matrimonio fueron maravillosos. ¡Mega recomendados!"',
      'testimonial-2': '"Excelente servicio, muy profesionales. Las tomas aéreas para nuestra finca quedaron espectaculares. Definitivamente los volveré a contratar."',
      'testimonial-3': '"El video promocional de nuestro hotel superó todas nuestras expectativas. La calidad del trabajo y la atención al detalle son incomparables."',
      /* FAQ */
      'faq-label': 'Preguntas frecuentes',
      'faq-h2':    'Resolvemos tus dudas sobre nuestros servicios',
      'faq-q1': '¿Cuánto cuesta contratar un drone en Medellín?',
      'faq-a1': 'El precio depende del tipo de proyecto: tomas aéreas básicas, día completo de drone, video promocional o cobertura de eventos. Cotizamos cada proyecto a la medida. Escríbenos por WhatsApp al +57 300 208 2371 para una cotización personalizada y sin costo.',
      'faq-q2': '¿En qué zonas de Antioquia prestan servicios?',
      'faq-a2': 'Cubrimos todo el Valle de Aburrá (Medellín, Envigado, Sabaneta, Itagüí, Bello), el Oriente Antioqueño (Rionegro, Llanogrande, El Retiro, Guatapé), el Suroeste (Jardín, Jericó, Santa Fe de Antioquia) y proyectos en otras regiones de Colombia bajo cotización.',
      'faq-q3': '¿Qué incluye un servicio de tomas aéreas para finca u hotel?',
      'faq-a3': 'Planeación del vuelo, operación con piloto certificado, captura en 4K, edición profesional con apoyo de inteligencia artificial, banda sonora y entrega en formatos optimizados para redes sociales, web y presentaciones.',
      'faq-q4': '¿Cuánto demora la entrega del video editado?',
      'faq-a4': 'Videos cortos para redes sociales: entre 5 y 10 días hábiles. Producciones más largas o con varios días de grabación: de 2 a 4 semanas, dependiendo del alcance del proyecto.',
      'faq-q5': '¿Realizan cobertura de matrimonios y eventos sociales?',
      'faq-a5': 'Sí. Tenemos amplia experiencia en matrimonios, quince años, eventos corporativos y celebraciones especiales, sumando tomas aéreas que dan una perspectiva única e inolvidable al video del evento.',
      'faq-q6': '¿Qué tipo de drones y equipos utilizan?',
      'faq-a6': 'Operamos con drones DJI de última generación capaces de grabar en 4K, complementados con cámaras DSLR y mirrorless, estabilizadores, drones FPV cuando aplica y micrófonos profesionales.',
      'faq-q7': '¿Hacen videos promocionales para empresas y bienes raíces?',
      'faq-a7': 'Sí, es una de nuestras especialidades. Producimos videos para hoteles, fincas turísticas, restaurantes, proyectos inmobiliarios, agencias de bienes raíces y marcas que necesitan mostrar sus instalaciones desde una perspectiva profesional.',
      /* Contact */
      'contact-h2':       '¿Listo para tu proyecto?',
      'contact-p':        'Tus proyectos, empresas o eventos al máximo nivel. Te prestaremos siempre el mejor servicio. Tomas aéreas y videos de la más alta calidad en Medellín y toda Antioquia.',
      'contact-whatsapp': 'Cotizar por WhatsApp',
      'contact-whatsapp-aria': 'Cotizar por WhatsApp',
      'whatsapp-float-aria':   'Cotizar por WhatsApp',
      'whatsapp-href': 'https://api.whatsapp.com/send?phone=573002082371&text=Hola%20llegu%C3%A9%20por%20tu%20p%C3%A1gina%20de%20DroneMedellin%20y%20quiero%20saber%20m%C3%A1s%20informaci%C3%B3n%20de%20tus%20servicios',
      /* Footer */
      'footer-desc':              'Fotografía y video aéreo con drones en Medellín, Antioquia y toda Colombia. +11 años de experiencia.',
      'footer-contact-title':     'Contacto',
      'footer-availability-title':'Disponibilidad',
      'footer-availability-p':    'Cubrimos proyectos <strong>todos los días</strong> de la semana, incluidos fines de semana y festivos. Sujeto a disponibilidad de agenda — escríbenos por WhatsApp para reservar tu fecha.',
      'footer-links-title':    'Enlaces',
      'footer-links-services': 'Servicios',
      'footer-links-coverage': 'Cobertura',
      'footer-links-clients':  'Clientes',
      'footer-copy': '2026 \u00a9 Todos los derechos reservados Drone Medell\u00edn\u00a0|\u00a0 Medell\u00edn, Antioquia, Colombia\u00a0|\u00a0 v 0.3.0'
    },

    en: {
      /* Meta */
      'meta-title': 'Drone Medellín | Aerial Photography and Video in Medellín and Antioquia',
      'meta-desc':  'Drone Medellín: 11+ years of experience in aerial shots, promotional video, and drone photography in Medellín, Antioquia, Llanogrande, Guatapé, and all of Colombia. Get a quote on WhatsApp.',
      /* Skip */
      'skip-link': 'Skip to content',
      /* Nav */
      'nav-toggle-aria': 'Open menu',
      'nav-home':         'Home',
      'nav-services':     'Services',
      'nav-about':        'About',
      'nav-coverage':     'Coverage',
      'nav-testimonials': 'Clients',
      'nav-faq':          'FAQ',
      'nav-contact':      'Contact',
      'nav-quote':        'QUOTE',
      'lang-toggle-aria': 'Change language',
      /* Hero */
      'hero-h1':  'Aerial\u00a0Drone Shots in Medell\u00edn',
      'hero-p':   'Specialists in aerial photography and video with state-of-the-art drones. Over 11 years capturing exceptional moments in Medellín, Antioquia, and all of Colombia.',
      'hero-cta': 'GET A QUOTE',
      /* Services intro */
      'services-title': 'Our Drone Services',
      'services-sub':   'Specialists in aerial shots, video, and professional photography in Medellín and all of Antioquia.',
      /* Service panels */
      'panel-aerial-h3':    'Aerial Shots',
      'panel-aerial-p':     'Capture the magic from above with professional aerial shots. Includes compelling edits for social media and ready-to-publish delivery.',
      'panel-droneday-h3':  'Drone Day',
      'panel-droneday-p':   'Full coverage with a certified operator for your event or project: planning, flight, capture, and delivery of edited material.',
      'panel-videos-h3':    'Videos',
      'panel-videos-p':     'Professional filming that highlights the uniqueness of your project and captivates your audience, driving interest and engagement.',
      'panel-photo-h3':     'Photography',
      'panel-photo-p':      'We capture memorable moments with professional photography. From portraits to landscapes and events, with print-quality results and fast delivery.',
      'panel-promo-h3':     'Promotional Video',
      'panel-promo-p':      'Bring your business to life with a promotional video that captivates. Farms, hotels, restaurants, and real estate with a unique perspective that invites clients to explore what you offer.',
      'common-quote':       'QUOTE',
      /* Lite YouTube */
      'liteyoutube-aria':      'Play Drone Medellín promotional video',
      'liteyoutube-play-aria': 'Play video',
      /* Why Us */
      'whyus-label':    'Why Choose Us',
      'whyus-h2':       'The right experience and team for your project',
      'whyus-1-strong': '+11 years',
      'whyus-1-span':   'of experience in audiovisual production and drone operation in Medellín and Antioquia.',
      'whyus-2-strong': 'Professional Equipment',
      'whyus-2-span':   'DJI 4K drones, DSLR/mirrorless cameras, gimbals, FPV drones, and professional microphones.',
      'whyus-3-strong': 'Certified Pilot',
      'whyus-3-span':   'Operation by a current certified pilot, careful planning for every flight, and on-site safety protocols.',
      'whyus-4-strong': 'AI-Powered Editing',
      'whyus-4-span':   'We leverage AI tools in post-production: color enhancement, stabilization, 4K upscaling, automatic subtitle transcription, and social-media-optimized deliveries.',
      'whyus-5-strong': 'Wide Coverage',
      'whyus-5-span':   'Valle de Aburrá, Eastern Antioquia, Southwest, and projects throughout Colombia.',
      'whyus-6-strong': 'Direct Service',
      'whyus-6-span':   'You speak directly with the project lead — no middlemen. Quote via WhatsApp.',
      /* Industries */
      'industries-label':         'Industries',
      'industries-h2':            'What type of projects we work on',
      'industry-realestate-h3':   'Real Estate',
      'industry-realestate-p':    'Aerial shots and promotional video for real estate projects, houses, and apartments to accelerate your sales.',
      'industry-hotels-h3':       'Hotels & Tourist Farms',
      'industry-hotels-p':        'We showcase your property from a unique perspective that captivates travelers and guests.',
      'industry-restaurants-h3':  'Restaurants & Gastronomy',
      'industry-restaurants-p':   'Promotional videos that communicate the atmosphere, concept, and value of your brand.',
      'industry-weddings-h3':     'Weddings & Events',
      'industry-weddings-p':      'Aerial and ground-level coverage so your most important day is unforgettable.',
      'industry-agro-h3':         'Agriculture & Livestock',
      'industry-agro-p':          'Aerial mapping, farm and estate inspection for agro-industrial projects.',
      'industry-construction-h3': 'Construction & Infrastructure',
      'industry-construction-p':  'Aerial progress tracking for construction sites, roof and tower inspections.',
      'industry-brands-h3':       'Brands & Companies',
      'industry-brands-p':        'Drone audiovisual content production for campaigns, branding, and social media.',
      'industry-tourism-h3':      'Tourism & Adventure',
      'industry-tourism-p':       'We capture landscapes and tourist experiences in Antioquia and Colombia to promote destinations.',
      /* About */
      'about-label': 'About Us',
      'about-h2':    'Over 11 years creating drone audiovisuals in Antioquia',
      'about-p1':    'My dedication as an independent audiovisual creator continues to grow every year. I work with a team of professionals expert in photography and cinematography, using drones, DSLR/mirrorless cameras, and video cameras to capture and bring your ideas to life with a unique perspective on every project.',
      'about-cite':  '– Julian Rua | CEO & Founder –',
      /* Coverage */
      'coverage-label':       'Coverage',
      'coverage-h2':          'Where we provide drone services',
      'coverage-intro':       'We operate throughout the department of Antioquia and handle special projects in other regions of Colombia upon request.',
      'coverage-valleaburra': 'Valle de Aburrá',
      'coverage-oriente':     'Eastern Antioquia',
      'coverage-suroeste':    'Southwest & North',
      'coverage-otras':       'Other regions',
      'coverage-consult':     'Upon request',
      /* Testimonials */
      'testimonials-label': 'Testimonials',
      'testimonials-h2':    'What our clients say',
      'testimonial-1': '"We loved Drone Medellín\'s work. The photos, videos, and experience at our wedding were wonderful. Highly recommended!"',
      'testimonial-2': '"Excellent service, very professional. The aerial shots for our farm turned out spectacular. I will definitely hire them again."',
      'testimonial-3': '"The promotional video for our hotel exceeded all our expectations. The quality of the work and attention to detail are unmatched."',
      /* FAQ */
      'faq-label': 'Frequently Asked Questions',
      'faq-h2':    'We answer your questions about our services',
      'faq-q1': 'How much does it cost to hire a drone in Medellín?',
      'faq-a1': 'The price depends on the type of project: basic aerial shots, full drone day, promotional video, or event coverage. We quote each project to fit your needs. Message us on WhatsApp at +57 300 208 2371 for a free personalized quote.',
      'faq-q2': 'What areas of Antioquia do you serve?',
      'faq-a2': 'We cover the entire Valle de Aburrá (Medellín, Envigado, Sabaneta, Itagüí, Bello), Eastern Antioquia (Rionegro, Llanogrande, El Retiro, Guatapé), the Southwest (Jardín, Jericó, Santa Fe de Antioquia), and projects in other regions of Colombia upon request.',
      'faq-q3': 'What does an aerial shot service for a farm or hotel include?',
      'faq-a3': 'Flight planning, operation by a certified pilot, 4K capture, professional editing with AI support, soundtrack, and delivery in formats optimized for social media, web, and presentations.',
      'faq-q4': 'How long does the edited video delivery take?',
      'faq-a4': 'Short videos for social media: between 5 and 10 business days. Larger productions with multiple shooting days: 2 to 4 weeks, depending on project scope.',
      'faq-q5': 'Do you cover weddings and social events?',
      'faq-a5': 'Yes. We have extensive experience covering weddings, quinceañeras, corporate events, and special celebrations, adding aerial shots that give a unique and unforgettable perspective to the event video.',
      'faq-q6': 'What type of drones and equipment do you use?',
      'faq-a6': 'We operate with the latest generation DJI drones capable of recording in 4K, complemented by DSLR and mirrorless cameras, gimbals, FPV drones when applicable, and professional microphones.',
      'faq-q7': 'Do you produce promotional videos for companies and real estate?',
      'faq-a7': 'Yes, it is one of our specialties. We produce videos for hotels, tourist farms, restaurants, real estate projects, agencies, and brands that need to showcase their facilities from a professional perspective.',
      /* Contact */
      'contact-h2':       'Ready for your project?',
      'contact-p':        'Your projects, companies, or events at the highest level. We will always provide you with the best service. Aerial shots and videos of the highest quality in Medellín and all of Antioquia.',
      'contact-whatsapp': 'Quote via WhatsApp',
      'contact-whatsapp-aria': 'Quote via WhatsApp',
      'whatsapp-float-aria':   'Quote via WhatsApp',
      'whatsapp-href': 'https://api.whatsapp.com/send?phone=573002082371&text=Hi%2C%20I%20found%20your%20DroneMedellin%20page%20and%20I%27d%20like%20to%20know%20more%20about%20your%20services',
      /* Footer */
      'footer-desc':              'Aerial drone photography and video in Medellín, Antioquia, and all of Colombia. 11+ years of experience.',
      'footer-contact-title':     'Contact',
      'footer-availability-title':'Availability',
      'footer-availability-p':    'We cover projects <strong>every day</strong> of the week, including weekends and holidays. Subject to schedule availability — message us on WhatsApp to book your date.',
      'footer-links-title':    'Links',
      'footer-links-services': 'Services',
      'footer-links-coverage': 'Coverage',
      'footer-links-clients':  'Clients',
      'footer-copy': '2026 \u00a9 All rights reserved Drone Medell\u00edn\u00a0|\u00a0 Medell\u00edn, Antioquia, Colombia\u00a0|\u00a0 v 0.3.0'
    }
  };

  function detect() {
    var saved = localStorage.getItem(LANG_KEY);
    if (saved === 'es' || saved === 'en') return saved;
    var nav = (navigator.language || navigator.userLanguage || 'es').slice(0, 2).toLowerCase();
    return nav === 'es' ? 'es' : 'en';
  }

  function apply(lang) {
    var t = T[lang];
    if (!t) return;

    /* html[lang] */
    document.documentElement.lang = lang === 'en' ? 'en' : 'es-CO';

    /* textContent */
    var els = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < els.length; i++) {
      var k = els[i].dataset.i18n;
      if (k in t) els[i].textContent = t[k];
    }

    /* innerHTML (elements with embedded HTML) */
    var htmlEls = document.querySelectorAll('[data-i18n-html]');
    for (var j = 0; j < htmlEls.length; j++) {
      var kh = htmlEls[j].dataset.i18nHtml;
      if (kh in t) htmlEls[j].innerHTML = t[kh];
    }

    /* aria-label */
    var ariaEls = document.querySelectorAll('[data-i18n-aria]');
    for (var a = 0; a < ariaEls.length; a++) {
      var ka = ariaEls[a].dataset.i18nAria;
      if (ka in t) ariaEls[a].setAttribute('aria-label', t[ka]);
    }

    /* href attributes */
    var hrefEls = document.querySelectorAll('[data-i18n-href]');
    for (var h = 0; h < hrefEls.length; h++) {
      var khr = hrefEls[h].dataset.i18nHref;
      if (khr in t) hrefEls[h].setAttribute('href', t[khr]);
    }

    /* <title> and meta description */
    if (t['meta-title']) document.title = t['meta-title'];
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && t['meta-desc']) metaDesc.setAttribute('content', t['meta-desc']);

    /* Toggle button active state */
    var opts = document.querySelectorAll('#langToggle .lang-opt');
    for (var o = 0; o < opts.length; o++) {
      opts[o].classList.toggle('active', opts[o].dataset.lang === lang);
    }

    localStorage.setItem(LANG_KEY, lang);
  }

  /* Run immediately (script is deferred, DOM is ready) */
  var currentLang = detect();
  apply(currentLang);

  /* Toggle button */
  var btn = document.getElementById('langToggle');
  if (btn) {
    btn.addEventListener('click', function () {
      var cur = localStorage.getItem(LANG_KEY) || detect();
      apply(cur === 'en' ? 'es' : 'en');
    });
  }
})();
