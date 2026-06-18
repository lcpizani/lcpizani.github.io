(function () {
  var burger = document.querySelector('.nav-burger');
  var nav = document.querySelector('nav');
  if (!burger || !nav) return;

  burger.addEventListener('click', function () {
    var open = nav.classList.toggle('nav-open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  document.addEventListener('click', function (e) {
    if (nav.classList.contains('nav-open') && !nav.contains(e.target)) {
      nav.classList.remove('nav-open');
      burger.setAttribute('aria-expanded', 'false');
    }
  });

  document.querySelectorAll('.nav-links a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('nav-open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
})();
