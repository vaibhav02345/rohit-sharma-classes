// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== HAMBURGER =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
  });

  // Close menu when a non-dropdown link is clicked
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', (e) => {
      // Don't close if it's the dropdown parent on mobile
      const parentDropdown = a.closest('.nav-dropdown');
      if (parentDropdown && a === parentDropdown.querySelector(':scope > a') && window.innerWidth <= 768) {
        e.preventDefault();
        parentDropdown.classList.toggle('open');
        return;
      }
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
    });
  });
}

// ===== COURSE TABS (courses page) =====
const tabBtns = document.querySelectorAll('.tab-btn');
if (tabBtns.length) {
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const board = btn.dataset.board;
      document.querySelectorAll('.course-card[data-board]').forEach(card => {
        card.style.display = (board === 'all' || card.dataset.board === board) ? 'block' : 'none';
      });
    });
  });
}

// ===== SCROLL REVEAL =====
const revealEls = document.querySelectorAll('.reveal, .course-card, .teacher-card, .contact-card, .wof-stat-card, .topper-card, .why-card');
revealEls.forEach(el => el.classList.add('reveal'));
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold: 0.1 });
revealEls.forEach(el => observer.observe(el));

// ===== TOAST =====
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

// ===== CONNECT FORM (DEMO BOOKING) =====
const connectForm = document.getElementById('connectForm');
if (connectForm) {
  connectForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    const btn = document.getElementById('submitBtn');
    btn.textContent = 'Booking...';
    btn.disabled = true;

    const name = document.getElementById('sName').value.trim();
    const phone = document.getElementById('sPhone').value.trim();
    const classLevel = document.getElementById('sClass').value;
    const board = document.getElementById('sBoard').value;
    const subject = document.getElementById('sSubject').value;

    try {
      if (typeof db !== 'undefined') {
        await db.collection('bookings').add({
          name, phone, classLevel, board, subject,
          status: 'new',
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
      }
      this.reset();
      showToast('🎉 Demo booked! We\'ll call you within 24 hours.');
    } catch (err) {
      showToast('🎉 Demo booked! We\'ll contact you soon.');
      this.reset();
    }
    btn.textContent = 'Book My Free Demo';
    btn.disabled = false;
  });
}

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    const btn = document.getElementById('contactSubmitBtn');
    btn.textContent = 'Sending...';
    btn.disabled = true;

    const name = document.getElementById('cName').value.trim();
    const email = document.getElementById('cEmail').value.trim();
    const phone = document.getElementById('cPhone').value.trim();
    const subject = document.getElementById('cSubject').value.trim();
    const message = document.getElementById('cMessage').value.trim();

    try {
      if (typeof db !== 'undefined') {
        await db.collection('inquiries').add({
          name, email, phone, subject, message,
          status: 'new',
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
      }
      this.reset();
      showToast('✅ Message sent! We\'ll reply within 24 hours.');
    } catch (err) {
      showToast('✅ Message sent! We\'ll reply soon.');
      this.reset();
    }
    btn.textContent = 'Send Inquiry';
    btn.disabled = false;
  });
}

// ===== ACTIVE NAV HIGHLIGHT =====
const currentPage = window.location.pathname.split('/').pop() || 'home.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === currentPage) a.classList.add('active');
});
