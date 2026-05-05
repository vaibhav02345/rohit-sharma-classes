// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== HAMBURGER =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
if (hamburger) {
  hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
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

// ===== REVIEWS CAROUSEL =====
const track = document.getElementById('reviewsTrack');
if (track) {
  const cards = track.querySelectorAll('.review-card');
  const dotsContainer = document.getElementById('carouselDots');
  let currentIdx = 0;
  let autoSlide;

  cards.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => { goTo(i); resetAuto(); });
    dotsContainer.appendChild(dot);
  });

  function goTo(idx) {
    currentIdx = (idx + cards.length) % cards.length;
    const cardWidth = cards[0].offsetWidth + 22;
    track.style.transform = `translateX(-${currentIdx * cardWidth}px)`;
    document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === currentIdx));
  }

  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  if (prevBtn) prevBtn.addEventListener('click', () => { goTo(currentIdx - 1); resetAuto(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { goTo(currentIdx + 1); resetAuto(); });

  function startAuto() { autoSlide = setInterval(() => goTo(currentIdx + 1), 4500); }
  function resetAuto() { clearInterval(autoSlide); startAuto(); }
  startAuto();
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

// ===== CONNECT FORM =====
const connectForm = document.getElementById('connectForm');
if (connectForm) {
  connectForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = document.getElementById('submitBtn');
    btn.textContent = 'Booking...';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = 'Book My Free Demo';
      btn.disabled = false;
      this.reset();
      showToast('🎉 Demo booked! We\'ll call you within 24 hours.');
    }, 1200);
  });
}

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = document.getElementById('contactSubmitBtn');
    btn.textContent = 'Sending...';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = 'Send Inquiry';
      btn.disabled = false;
      this.reset();
      showToast('✅ Message sent! We\'ll reply within 24 hours.');
    }, 1000);
  });
}

// ===== ACTIVE NAV HIGHLIGHT =====
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === currentPage) a.classList.add('active');
});
