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
      autoplay: { delay: 4500, disableOnInteraction: false },
      pagination: {
        el: '.hero-pagination',
        clickable: true
      }
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

  // ===== Re-triggering observers (specialty cards & doctor img) =====
  const retriggerTargets = [
    { el: document.getElementById('specialtyCards'), threshold: 0.25 },
    { el: document.getElementById('doctorImg'), threshold: 0.3 }
  ];
  retriggerTargets.forEach(({ el, threshold }) => {
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) el.classList.add('animate');
        else el.classList.remove('animate');
      });
    }, { threshold });
    obs.observe(el);
  });
});
