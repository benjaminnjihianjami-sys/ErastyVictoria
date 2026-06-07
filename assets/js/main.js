const nav = document.querySelector('#mainNav');
const revealItems = document.querySelectorAll('.reveal');
const pageLoader = document.getElementById('pageLoader');

window.addEventListener('load', () => {
  setTimeout(() => {
    pageLoader.classList.add('hidden');
  }, 1200);
});

function updateNav() {
  if (!nav) return;
  nav.classList.toggle('scrolled', window.scrollY > 24);
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

revealItems.forEach((item) => revealObserver.observe(item));
window.addEventListener('scroll', updateNav, { passive: true });
updateNav();
