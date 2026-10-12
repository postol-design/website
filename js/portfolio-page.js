/* portfolio.html: the cards are static HTML (for search engines); this only registers their RU titles from js/projects.js for main.js */
(function () {
  var ru = window.EXTRA_RU = window.EXTRA_RU || {};
  (window.PROJECTS || []).forEach(function (p) {
    ru['pf.' + p.slug + '.t'] = p.title.ru;
    ru['pf.' + p.slug + '.c'] = p.type.ru + (p.location ? ' · ' + p.location.ru : '');
  });
})();
/* "More work": the category chips show one group at a time, 9 pictures at first, "See more" adds 9 more
   (hidden pictures are left out of the lightbox) */
(function () {
  var chips = document.querySelectorAll('.mw-chip'), items = document.querySelectorAll('.mw-item'), more = document.querySelector('.mw-more');
  var STEP = 9, cat = 'all', shown = STEP;
  var apply = function () {
    var n = 0;
    items.forEach(function (it) { var fits = cat === 'all' || it.getAttribute('data-cat') === cat; it.hidden = !fits || n >= shown; if (fits) n++; });
    if (more) more.hidden = n <= shown;
  };
  chips.forEach(function (c) {
    c.addEventListener('click', function () {
      cat = c.getAttribute('data-cat'); shown = STEP;
      chips.forEach(function (x) { x.setAttribute('aria-pressed', x === c ? 'true' : 'false'); });
      apply();
    });
  });
  if (more) more.addEventListener('click', function () { shown += STEP; apply(); });
  apply();
  // portfolio.html#more-<category> (the home page "See examples" links): open that category and scroll to the block
  var m = /^#more(?:-([a-z]+))?$/.exec(location.hash), head = document.getElementById('more');
  if (m && head) {
    var chip = m[1] && document.querySelector('.mw-chip[data-cat="' + m[1] + '"]');
    if (chip) chip.click();
    var go = function () { head.scrollIntoView({ block: 'start', behavior: 'instant' }); };
    setTimeout(go, 0); window.addEventListener('load', go);
  }
})();
