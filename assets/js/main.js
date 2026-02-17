const navigationItems = [
  { href: 'index.html', label: 'Αρχική', key: 'index' },
  { href: 'services.html', label: 'Υπηρεσίες', key: 'services' },
  { href: 'about.html', label: 'Σχετικά', key: 'about' },
  { href: 'contact.html', label: 'Επικοινωνία', key: 'contact' }
];

const sharedContact = {
  phoneDisplay: '+30 210 5910100',
  phoneLink: 'tel:+302105910100',
  email: 'zamanis.gr@gmail.com',
  emailLink: 'mailto:zamanis.gr@gmail.com',
  city: 'Αθήνα',
  year: '© 2012 Zamanis Corporate Services'
};

function createHeaderMarkup(activePage) {
  const navLinks = navigationItems
    .map((item) => `<a class="nav-link${item.key === activePage ? ' active' : ''}" href="${item.href}">${item.label}</a>`)
    .join('');

  return `
    <header class="site-header">
      <div class="container nav-wrap">
        <a class="brand" href="index.html">Zamanis Corporate Services</a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-nav">Μενού</button>
        <nav id="primary-nav" class="site-nav" aria-label="Κύρια πλοήγηση">
          ${navLinks}
          <a class="btn btn-primary" href="contact.html">Κλείστε συνάντηση</a>
        </nav>
      </div>
    </header>
  `;
}

function createFooterMarkup(activePage) {
  const footerLinks = navigationItems
    .map((item) => `<a class="${item.key === activePage ? 'active' : ''}" href="${item.href}">${item.label}</a>`)
    .join('');

  return `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div>
          <p><strong>Επικοινωνία:</strong> <a href="${sharedContact.phoneLink}">${sharedContact.phoneDisplay}</a> | <a href="${sharedContact.emailLink}">${sharedContact.email}</a> | ${sharedContact.city}</p>
          <p>${sharedContact.year}</p>
        </div>
        <nav class="footer-links" aria-label="Footer menu">
          ${footerLinks}
        </nav>
      </div>
    </footer>
  `;
}

function initializeSharedLayout() {
  const activePage = document.body.dataset.page || '';
  const headerMount = document.getElementById('site-header');
  const footerMount = document.getElementById('site-footer');

  if (headerMount) {
    headerMount.innerHTML = createHeaderMarkup(activePage);
  }

  if (footerMount) {
    footerMount.innerHTML = createFooterMarkup(activePage);
  }
}

initializeSharedLayout();

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
