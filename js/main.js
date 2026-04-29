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

// ---------- Textarea character count ----------
const textarea  = document.getElementById('detalles');
const charCount = document.querySelector('.char-count');

if (textarea && charCount) {
  textarea.addEventListener('input', () => {
    charCount.textContent = `${textarea.value.length} / 1000 caracteres`;
  });
}

// ---------- Contact form (Formspree) ----------
const form       = document.getElementById('contactForm');
const submitBtn  = document.getElementById('submitBtn');
const formSuccess = document.getElementById('formSuccess');
const formError   = document.getElementById('formError');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;
    formSuccess.style.display = 'none';
    formError.style.display   = 'none';

    try {
      const data = new FormData(form);
      const response = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        formSuccess.style.display = 'block';
        form.reset();
        if (charCount) charCount.textContent = '0 / 1000 caracteres';
      } else {
        throw new Error('Server error');
      }
    } catch {
      formError.style.display = 'block';
    } finally {
      submitBtn.textContent = 'Enviar Mensaje';
      submitBtn.disabled = false;
    }
  });
}

// ---------- Scroll reveal animation ----------
const revealEls = document.querySelectorAll(
  '.service-card, .testimonial-card, .about-content, .about-image, .contact-info, .contact-form-wrap'
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
