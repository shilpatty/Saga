// Accordion
document.querySelectorAll('.accordion-header').forEach((btn) => {
  btn.addEventListener('click', () => {
    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!isOpen));
    const body = btn.nextElementSibling;
    if (!isOpen) {
      body.style.maxHeight = `${body.scrollHeight}px`;
      body.classList.add('open');
    } else {
      body.style.maxHeight = '0';
      body.classList.remove('open');
    }
  });
});

// Animate on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .accordion-item').forEach((el) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
  observer.observe(el);
});
