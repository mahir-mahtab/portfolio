// Mobile navigation toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-btn');
const closeIcon = document.getElementById('menu-btn-2');

if (menuToggle && mobileMenu && menuIcon && closeIcon) {
  const toggleMenu = () => {
    const isOpen = !mobileMenu.classList.contains('hidden');
    
    if (isOpen) {
      mobileMenu.classList.add('hidden');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
      menuToggle.setAttribute('aria-expanded', 'false');
    } else {
      mobileMenu.classList.remove('hidden');
      menuIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
      menuToggle.setAttribute('aria-expanded', 'true');
    }
  };

  menuToggle.addEventListener('click', toggleMenu);

  // Close on escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
      toggleMenu();
    }
  });

  // Close menu when clicking on links
  mobileMenu.addEventListener('click', (e) => {
    if (e.target && e.target.tagName === 'A') {
      toggleMenu();
    }
  });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add active state to navigation links on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('text-purple-400');
    link.classList.add('text-slate-300');
    
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.remove('text-slate-300');
      link.classList.add('text-purple-400');
    }
  });
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('nav');
  if (window.scrollY > 50) {
    navbar.classList.add('backdrop-blur-2xl', 'bg-slate-900/95');
  } else {
    navbar.classList.remove('backdrop-blur-2xl', 'bg-slate-900/95');
  }
});