const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (contactForm && formSuccess) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    formSuccess.classList.add('show');
    contactForm.reset();
  });
}
