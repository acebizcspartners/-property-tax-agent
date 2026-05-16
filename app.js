// Property Tax Agent — minimal progressive enhancement.

(function () {
  'use strict';

  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  var hdr = document.getElementById('hdr');
  if (hdr) {
    var lastY = -1;
    var onScroll = function () {
      var y = window.scrollY || window.pageYOffset;
      if ((y > 8) !== (lastY > 8)) hdr.classList.toggle('is-scrolled', y > 8);
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  document.querySelectorAll('a[href^="tel:"]').forEach(function (a) {
    a.addEventListener('click', function () {
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'click_to_call', {
          event_category: 'engagement',
          event_label: a.getAttribute('href').replace('tel:', '')
        });
      }
      if (Array.isArray(window.dataLayer)) {
        window.dataLayer.push({ event: 'click_to_call', phone: a.getAttribute('href').replace('tel:', '') });
      }
    });
  });

  var faqItems = document.querySelectorAll('.faq details');
  faqItems.forEach(function (d) {
    d.addEventListener('toggle', function () {
      if (d.open) {
        faqItems.forEach(function (other) {
          if (other !== d && other.open) other.open = false;
        });
      }
    });
  });
})();
