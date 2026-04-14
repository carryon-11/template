// ============================================================
// [브랜드명] 한의원 — 메인페이지 인터랙션
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ===== Header scroll state =====
  const header = document.getElementById('siteHeader');
  const onScroll = () => {
    if (window.scrollY > 40) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ===== All-menu (hamburger) =====
  const hamburger = document.getElementById('hamburger');
  const allMenu = document.getElementById('allMenu');
  const allMenuBg = document.getElementById('allMenuBg');
  const allMenuClose = document.getElementById('allMenuClose');

  const openMenu = () => { allMenu.classList.add('open'); allMenuBg.classList.add('open'); };
  const closeMenu = () => { allMenu.classList.remove('open'); allMenuBg.classList.remove('open'); };

  hamburger.addEventListener('click', openMenu);
  allMenuClose.addEventListener('click', closeMenu);
  allMenuBg.addEventListener('click', closeMenu);

  // ===== Hero swiper (fade) =====
  if (window.Swiper) {
    new Swiper('.heroSwiper', {
      effect: 'fade',
      fadeEffect: { crossFade: true },
      speed: 1400,
      loop: true,
      allowTouchMove: false,
      autoplay: { delay: 4500, disableOnInteraction: false }
    });

    new Swiper('.tourSwiper', {
      slidesPerView: 'auto',
      spaceBetween: 24,
      loop: true,
      allowTouchMove: false,
      speed: 5000,
      autoplay: { delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false }
    });
  }

  // ===== Scroll fade-in (sections) =====
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in-view');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.sec').forEach((s) => io.observe(s));

  // ===== Specialty cards: re-trigger on every entry =====
  const specialtyCards = document.getElementById('specialtyCards');
  if (specialtyCards) {
    const cardIo = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) specialtyCards.classList.add('animate');
        else specialtyCards.classList.remove('animate');
      });
    }, { threshold: 0.25 });
    cardIo.observe(specialtyCards);
  }
});
