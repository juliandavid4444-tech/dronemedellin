/* ========================================
   DRONE MEDELLÍN — main.js
   ======================================== */

// ---------- Navbar scroll effect ----------
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });

// ---------- Mobile nav toggle ----------
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

// Close nav when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
    navToggle.setAttribute('aria-expanded', false);
  });
});

// ---------- Smooth active link highlight ----------
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => observer.observe(s));

// ---------- WhatsApp conversion tracking ----------
document.querySelectorAll('a[href*="api.whatsapp.com"], a[href*="wa.me"]').forEach(link => {
  link.addEventListener('click', () => {
    if (typeof gtag !== 'function') return;
    gtag('event', 'conversion', { 'send_to': 'AW-581774690' });
    gtag('event', 'whatsapp_click', {
      event_category: 'contacto',
      event_label: link.id || link.className || 'whatsapp'
    });
  });
});

// ---------- Click en teléfono ----------
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
  link.addEventListener('click', () => {
    if (typeof gtag !== 'function') return;
    gtag('event', 'phone_click', { event_category: 'contacto', event_label: link.href });
  });
});

// ---------- Click en email ----------
document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
  link.addEventListener('click', () => {
    if (typeof gtag !== 'function') return;
    gtag('event', 'email_click', { event_category: 'contacto', event_label: link.href });
  });
});

// ---------- Click en redes sociales ----------
document.querySelectorAll('.social-row a').forEach(link => {
  link.addEventListener('click', () => {
    if (typeof gtag !== 'function') return;
    gtag('event', 'social_click', {
      event_category: 'redes_sociales',
      event_label: link.getAttribute('aria-label') || link.href
    });
  });
});

// ---------- Click en botones CTA ----------
document.querySelectorAll('.btn-blue, .btn-whatsapp').forEach(btn => {
  btn.addEventListener('click', () => {
    if (typeof gtag !== 'function') return;
    gtag('event', 'cta_click', {
      event_category: 'engagement',
      event_label: btn.textContent.trim()
    });
  });
});

// ---------- Scroll depth ----------
(function () {
  const depths = [25, 50, 75, 100];
  const fired = new Set();
  window.addEventListener('scroll', () => {
    const scrolled = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100;
    depths.forEach(d => {
      if (scrolled >= d && !fired.has(d)) {
        fired.add(d);
        if (typeof gtag === 'function') {
          gtag('event', 'scroll_depth', { event_category: 'engagement', event_label: `${d}%`, value: d });
        }
      }
    });
  }, { passive: true });
})();

// ---------- Sección más vista ----------
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && typeof gtag === 'function') {
      gtag('event', 'section_view', {
        event_category: 'engagement',
        event_label: entry.target.id || entry.target.className
      });
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('section[id]').forEach(s => sectionObserver.observe(s));

// ---------- Tiempo en página (30s y 60s) ----------
[30, 60].forEach(seconds => {
  setTimeout(() => {
    if (typeof gtag === 'function') {
      gtag('event', 'time_on_page', { event_category: 'engagement', event_label: `${seconds}s`, value: seconds });
    }
  }, seconds * 1000);
});

// ---------- Scroll reveal animation ----------
const revealEls = document.querySelectorAll(
  '.service-card, .testimonial-card, .about-content, .about-image, .contact-info, .contact-centered'
);

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

// Inject reveal CSS dynamically
const revealStyle = document.createElement('style');
revealStyle.textContent = `
  .reveal        { opacity: 0; transform: translateY(28px); transition: opacity 0.6s ease, transform 0.6s ease; }
  .reveal.revealed { opacity: 1; transform: translateY(0); }
`;
document.head.appendChild(revealStyle);

// ---------- Lite YouTube facade ----------
// Reemplaza el poster por iframe sólo cuando el usuario hace click,
// mejorando dramáticamente el LCP y el peso inicial de la página.
document.querySelectorAll('.lite-youtube').forEach(el => {
  const activate = () => {
    if (el.dataset.loaded === '1') return;
    const id = el.dataset.id;
    if (!id) return;
    const title = el.dataset.title || 'Video';
    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`);
    iframe.setAttribute('title', title);
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('loading', 'lazy');
    el.innerHTML = '';
    el.appendChild(iframe);
    el.dataset.loaded = '1';
    if (typeof gtag === 'function') {
      gtag('event', 'video_play', { event_category: 'engagement', event_label: title });
    }
  };
  el.addEventListener('click', activate);
  el.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(); }
  });
});



