/* project.html?p=<slug>: builds the case page from window.PROJECTS. Runs before main.js, so main.js wires up
   the comparison slider, the lightbox galleries ([data-lb]), reveal animations and the RU texts (window.EXTRA_RU). */
(function () {
  'use strict';
  // the four full case studies are static pages (case-<slug>.html, written by .claude/build-cases.ps1 from this
  // same code): there the HTML is already in #pg, and this script only registers the RU texts and wires it up
  var pg = document.getElementById('pg'), isStatic = pg.hasAttribute('data-static');
  var list = window.PROJECTS || [], slug = pg.getAttribute('data-slug') || new URLSearchParams(location.search).get('p');
  var pageOf = function (q) { return q.intro ? 'case-' + q.slug + '.html' : 'project.html?p=' + q.slug; };
  var i = Math.max(0, list.findIndex(function (p) { return p.slug === slug; })), p = list[i], next = list[(i + 1) % list.length];
  // old links (project.html?p=<case>) go to the case's own page
  if (!isStatic && !window.PG_EXPORT && p.intro && p.slug === slug) { location.replace(pageOf(p) + location.hash); return; }
  var ru = window.EXTRA_RU = window.EXTRA_RU || {}, k = 'pj.' + p.slug + '.';
  var esc = function (s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); };
  // a translatable piece of text: EN in the HTML, RU registered for main.js
  var t = function (key, v) { ru[k + key] = v.ru; return '<span data-i18n="' + k + key + '">' + esc(v.en) + '</span>'; };
  var src = function (name) { return 'images/projects/' + p.slug + '/' + name + '.jpg'; };
  var title = p.title.en;
  window.PAGE_META_RU = { t: p.title.ru + ' — Светлана Постол', d: p.intro ? p.intro.ru.slice(0, 155) : '' };
  if (!isStatic) { // static pages carry their own title and description
    document.title = title + ' — Svetlana Postol';
    var md = document.querySelector('meta[name="description"]'); if (md && p.intro) md.setAttribute('content', p.intro.en.slice(0, 155));
  }
  var what = { angles: 'the designer\u2019s 3D model view', revisions: 'marked-up comments', drawings: 'client drawing', materials: 'material and furniture reference', models: '3D model view', finals: 'final rendering' };

  var gallery = function (names, group, cls, abs) {
    return '<div class="pg-grid ' + (cls || '') + '">' + names.map(function (n, j) {
      var s = abs ? n : src(n);
      return '<button type="button" class="pg-item" data-lb="' + group + '" aria-label="Open image ' + (j + 1) + '"><img src="' + s + '" alt="' + esc(title + ': ' + (what[group] || 'image') + ' ' + (j + 1)) + '" loading="lazy" decoding="async"></button>';
    }).join('') + '</div>';
  };
  // pictures that are shown but don't open: the designer's own model views, supplier swatches, marked-up comments
  // (their authors are the designer and the suppliers, so they aren't offered at full size)
  var still = function (names, group, cls) {
    return '<div class="pg-still ' + cls + '">' + names.map(function (n, j) {
      return '<figure class="pg-still-i"><img src="' + src(n) + '" alt="' + esc(title + ': ' + (what[group] || 'image') + ' ' + (j + 1)) + '" loading="lazy" decoding="async"></figure>';
    }).join('') + '</div>';
  };
  // final views: one large view with a magnifier, and a row of thumbnails that switch it
  var viewer = function (names) {
    var zoom = function (j) { return p.zoom && p.zoom[j] ? src(p.zoom[j]) : src(names[j]); };
    var alt = function (j) { return esc(title + ': ' + what.finals + ' ' + (j + 1)); };
    return '<div class="pg-view rise"><figure class="pg-view-main"><img src="' + src(names[0]) + '" data-zoom="' + zoom(0) + '" alt="' + alt(0) + '" loading="lazy" decoding="async"><span class="pg-lens" aria-hidden="true"></span></figure>' +
      '<div class="pg-view-thumbs" style="--n:' + names.length + '">' + names.map(function (n, j) {
        return '<button type="button" class="pg-thumb" aria-pressed="' + (j ? 'false' : 'true') + '" data-src="' + src(n) + '" data-zoom="' + zoom(j) + '" data-alt="' + alt(j) + '" aria-label="Show view ' + (j + 1) + '"><img src="' + src(n) + '" alt="" loading="lazy" decoding="async"></button>';
      }).join('') + '</div></div>';
  };
  var section = function (num, labelKey, label, body, extra) {
    return '<section class="pg-sec ' + (extra || '') + '"><div class="wrap"><div class="pg-head rise"><span class="pg-n">' + num + '</span><h2 class="pg-h">' + t(labelKey, label) + '</h2></div>' + body + '</div></section>';
  };
  var n = 0, num = function () { n++; return (n < 10 ? '0' : '') + n; };
  var html = '';

  // hero, with a way back to all projects right under the header
  var arrowL = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 8H2M6.5 3.5 2 8l4.5 4.5"/></svg>';
  var back = '<a class="pg-back" href="portfolio.html">' + arrowL + '<span data-i18n="pg.back">All projects</span></a>';
  var cover = p.finals ? src(p.finals[0]) : p.finalsAbs[0];
  // case studies: smaller WebP copies of the hero in images/w/ (the original stays the fallback)
  var w = p.intro && p.finals ? 'images/w/projects-' + p.slug + '-' + p.finals[0] : '';
  var heroSet = w ? ' srcset="' + w + '-1000.webp 1000w, ' + w + '-2000.webp 2000w" sizes="100vw"' : '';
  html += '<div class="wrap pg-bar">' + back + '</div>' +
    '<section class="pg-hero"><img src="' + cover + '"' + heroSet + ' alt="' + esc(title) + '" fetchpriority="high"><div class="pg-hero-cap wrap">' +
    '<span class="label">[ ' + t('type', p.type) + ' ]</span><h1 class="pg-title">' + t('title', p.title) + '</h1>' +
    (p.client ? '<p class="pg-client">' + (p.clientUrl ? '<a href="' + p.clientUrl + '" target="_blank" rel="noopener noreferrer">' + esc(p.client) + '</a>' : esc(p.client)) + (p.location ? ' · ' + t('loc', p.location) : '') + '</p>' : '') +
    '</div></section>';

  // 01 overview
  if (p.intro) {
    var role = [[{ en: 'My role', ru: 'Моя роль' }, { en: 'The 3D model from the designer’s drawings and every view, finished by hand', ru: '3D-модель по чертежам дизайнера и все виды, дорисованные вручную' }]];
    if (p.role) role = [[{ en: 'My role', ru: 'Моя роль' }, p.role]];
    var facts = role.concat(p.facts || []).map(function (f, j) { return '<div><dt>' + t('fk' + j, f[0]) + '</dt><dd>' + t('fv' + j, f[1]) + '</dd></div>'; }).join('');
    html += section(num(), 'l.overview', { en: 'Brief and objective', ru: 'Бриф и задача' }, '<div class="pg-split rise"><div><p class="pg-intro">' + t('intro', p.intro) + '</p>' +
      (p.brief ? '<p class="pg-text">' + t('brief', p.brief) + '</p>' : '') +
      (p.note ? '<p class="pg-note">' + t('note', p.note) + '</p>' : '') + '</div><dl class="pg-facts">' + facts + '</dl></div>');
  }
  // what the client sent
  if ((p.drawings && p.drawings.length) || (p.materials && p.materials.length) || (p.angles && p.angles.length)) {
    html += section(num(), 'l.sent', { en: 'What the client sent', ru: 'Что прислал заказчик' },
      '<p class="pg-lead rise">' + t('l.sent.d', p.sentLead || { en: 'Drawings, references and the specification: everything the view is built on.', ru: 'Чертежи, референсы и спецификация — всё, на чём строится визуализация.' }) + '</p>' +
      (p.angles && p.angles.length ? '<h3 class="pg-sub rise">' + t('l.angles', { en: 'The designer\u2019s 3D model views', ru: 'Ракурсы из 3D-модели дизайнера' }) + '</h3>' + still(p.angles, 'angles', 'pg-still--row') : '') +
      (p.drawings && p.drawings.length ? '<h3 class="pg-sub rise">' + t('l.drawings', p.drawingsTitle || { en: 'Drawings', ru: 'Чертежи' }) + '</h3>' + (p.drawingsStill ? still(p.drawings, 'drawings', p.drawingsRow ? 'pg-still--fit' : 'pg-still--2') : gallery(p.drawings, 'drawings', 'pg-grid--2')) : '') +
      (p.materials && p.materials.length ? '<h3 class="pg-sub rise">' + t('l.materials', p.materialsTitle || { en: 'Materials and photos', ru: 'Материалы и фото' }) + '</h3>' + (p.materialsStill ? still(p.materials, 'materials', 'pg-still--swatch') : gallery(p.materials, 'materials', 'pg-grid--4')) : ''), 'pg-sec--gray');
  }
  // 3D model & angles (+ video slot)
  if (p.models && p.models.length) {
    html += section(num(), 'l.model', p.modelTitle || { en: '3D model and angles', ru: '3D-модель и ракурсы' },
      '<p class="pg-lead rise">' + t('l.model.d', p.modelText || { en: 'A precise model built from the drawings. We look at several angles together and choose the one that tells the design best.', ru: 'Точная модель по чертежам. Вместе смотрим несколько ракурсов и выбираем тот, что лучше всего показывает проект.' }) + '</p>' +
      // the model video (muted, plays while on screen); without one a photo holds its place
      (p.video ? '<figure class="pg-video pg-video--clip rise"><video src="images/projects/' + p.slug + '/' + p.video + '.mp4" poster="images/projects/' + p.slug + '/' + p.video + '-poster.jpg" width="1440" height="1080" muted loop playsinline controls preload="none" aria-label="' + esc(title + ': 3D model walk-through') + '"></video></figure>'
        : '<figure class="pg-video rise"><img src="' + src(p.models[0]) + '" alt="" loading="lazy"><span class="mk-play" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z"/></svg></span><figcaption>' + t('l.video', { en: 'The 3D model, turning', ru: '3D-модель в движении' }) + '</figcaption></figure>') +
      (p.video ? still(p.models, 'models', 'pg-still--fit') : gallery(p.models, "models", "pg-grid--4")));
  }
  // chosen angle → final view (the render side gets its 3000px version on sharp screens, if there is one)
  var zi = p.finals && p.zoom ? p.finals.indexOf(p.angleFinal) : -1;
  var cmpSet = zi > -1 && p.zoom[zi] ? ' srcset="' + src(p.angleFinal) + ' 2000w, ' + src(p.zoom[zi]) + ' 3000w" sizes="(max-width: 900px) 100vw, 80vw"' : '';
  if (p.angle) {
    html += section(num(), 'l.angle', p.angleTitle || { en: 'The chosen angle and the final view', ru: 'Выбранный ракурс и финальный вид' },
      '<p class="pg-lead rise">' + t('l.angle.d', p.angleText || { en: 'Move across the image: the approved angle of the 3D model, and the same view finished by hand.', ru: 'Проведите по изображению: утверждённый ракурс 3D-модели и тот же вид, прорисованный вручную.' }) + '</p>' +
      '<p class="pg-rev rise"><b>' + t('l.rev.h', { en: 'Revisions included.', ru: 'Правки включены.' }) + '</b> ' + t('l.rev.d', p.revText || { en: 'Two free rounds on every view: one at the 3D stage, one on the final view. Comments come straight on the image.', ru: 'Два бесплатных раунда на каждый вид: на этапе 3D и на финальном виде. Комментарии приходят прямо на изображении.' }) + '</p>' +
      '<div class="cmp pg-cmp rise" style="--p:100%" role="group" aria-label="Angle and render comparison"><img src="' + src(p.angleFinal) + '"' + cmpSet + ' alt="" draggable="false" loading="lazy"><img class="cmp-top" src="' + src(p.angle) + '" alt="" draggable="false" loading="lazy">' +
      '<span class="cmp-tag cmp-tag--l" data-i18n="cmp.a">Angle</span><span class="cmp-tag cmp-tag--r" data-i18n="cmp.b">Render</span>' +
      '<button class="cmp-handle" type="button" role="slider" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" aria-label="Drag to compare angle and render"><i><svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 5 2 9l4 4M12 5l4 4-4 4"/></svg></i></button></div>', 'pg-sec--gray');
  }
  // final views
  html += section(num(), 'l.final', { en: 'Final views', ru: 'Финальные виды' }, p.finals ? '<p class="pg-lead rise">' + t('l.final.d', { en: 'Choose a view below; move across the large image to look at the details.', ru: 'Выберите вид ниже; проведите по большому изображению, чтобы рассмотреть детали.' }) + '</p>' + viewer(p.finals) : gallery(p.finalsAbs, 'finals', 'pg-grid--1', true), p.angle ? '' : 'pg-sec--gray');
  // the big quote mark replaces the quote marks inside the text
  function unquote(q) { var o = {}; for (var k in q) o[k] = q[k].replace(/^[“"«]\s*/, '').replace(/\s*[”"»]$/, ''); return o; }
  // client review: labelled and set in big quote marks, so it reads as a testimonial
  if (p.review) {
    html += '<section class="pg-sec pg-review"><div class="wrap rise"><span class="label" data-i18n="pg.review">[ Client review ]</span>' +
      [p.review].concat(p.moreReviews || []).map(function (r, j) {
        return '<figure class="pg-quote' + (j ? ' pg-quote--sm' : '') + '"><span class="pg-qmark" aria-hidden="true">“</span><blockquote>' + t('review' + (j || ''), unquote(r.q)) + '</blockquote>' +
          '<figcaption class="pg-who">' + esc(r.who) + ' <button type="button" class="rvw-orig" data-full="' + r.shot + '" data-alt="Original message"><span data-i18n="rv.orig">View original</span><svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M3 11 11 3M5 3h6v6"/></svg></button></figcaption></figure>';
      }).join('') + '</div></section>';
  }
  // one compact closing row: related services on the left, "Start a similar project" on the right,
  // then the way back to all projects and the up arrow (the footer is far away on a long case study)
  var svc = p.services ? p.services.map(function (s) { return '<a href="' + s[2] + '" data-i18n="' + s[0] + '">' + esc(s[1]) + '</a>'; }).join(' · ') : '';
  html += '<div class="wrap pg-end">' + (p.services ? '<div class="pg-end-row"><p class="pg-rel"><span class="label" data-i18n="pg.rel">[ Related services ]</span> ' + svc + '</p>' +
      '<a class="btn btn--accent" href="contact.html?type=' + p.services[0][3] + '"><span data-i18n="pg.similar">Start a similar project</span><span class="ico"><svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M3 11 11 3M5 3h6v6"/></svg></span></a></div>' : '') +
    '<div class="pg-nav">' + back + '<a class="pg-up" href="#top"><span data-i18n="pg.up">Back to top</span><span class="pg-up-i" aria-hidden="true"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M8 14V2M3.5 6.5 8 2l4.5 4.5"/></svg></span></a></div></div>';
  // next project
  html += '<a class="pg-next" href="' + pageOf(next) + '"><span class="label" data-i18n="pg.next">Next project</span><span class="pg-next-t">[ ' + t('next', next.title) + ' ]</span>' +
    '<img src="' + next.cover + '" alt="" loading="lazy"></a>';

  if (!isStatic) pg.innerHTML = html;
  if (window.PG_EXPORT) return; // .claude/build-cases.ps1 saves the markup as written, before images load
  // nearly square works (axonometries, plans) are shown whole in the hero instead of being cropped
  var heroImg = document.querySelector('.pg-hero > img');
  if (heroImg) { var heroFit = function () { if (heroImg.naturalWidth && heroImg.naturalWidth / heroImg.naturalHeight < 1.35) heroImg.classList.add('pg-hero--whole'); }; if (heroImg.complete) heroFit(); else heroImg.addEventListener('load', heroFit); }
  // final views: thumbnails switch the large view; a round magnifier follows the pointer over it (mouse only)
  var view = document.querySelector('.pg-view');
  if (view) {
    var main = view.querySelector('.pg-view-main img'), lens = view.querySelector('.pg-lens'), Z = 2.3, hi = null; // 2.3x of a ~1300px view stays within the 3000px zoom file
    view.querySelectorAll('.pg-thumb').forEach(function (b) {
      b.addEventListener('click', function () {
        view.querySelectorAll('.pg-thumb').forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
        main.src = b.getAttribute('data-src'); main.alt = b.getAttribute('data-alt'); main.setAttribute('data-zoom', b.getAttribute('data-zoom')); hi = null;
      });
    });
    if (window.matchMedia && matchMedia('(hover: hover) and (pointer: fine)').matches) {
      var fig = main.parentNode;
      var load = function () { if (hi && hi.src.indexOf(main.getAttribute('data-zoom')) > -1) return; hi = new Image(); hi.src = main.getAttribute('data-zoom'); lens.style.backgroundImage = 'url("' + hi.src + '")'; };
      fig.addEventListener('pointerenter', function () { load(); fig.classList.add('zooming'); });
      fig.addEventListener('pointerleave', function () { fig.classList.remove('zooming'); });
      fig.addEventListener('pointermove', function (e) {
        var r = main.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
        if (x < 0 || y < 0 || x > r.width || y > r.height) { fig.classList.remove('zooming'); return; }
        fig.classList.add('zooming');
        var fr = fig.getBoundingClientRect(), L = lens.offsetWidth / 2;
        lens.style.transform = 'translate(' + (e.clientX - fr.left - L) + 'px,' + (e.clientY - fr.top - L) + 'px)';
        // never magnify past the zoom file's own pixels (cases without a 3000px file zoom less)
        var z = hi && hi.naturalWidth ? Math.max(1.4, Math.min(Z, hi.naturalWidth / r.width)) : Z;
        lens.style.backgroundSize = (r.width * z) + 'px ' + (r.height * z) + 'px';
        lens.style.backgroundPosition = (L - x * z) + 'px ' + (L - y * z) + 'px';
      });
    }
  }
  // a row of still pictures shown whole, all at one height: each takes width in proportion to its picture
  document.querySelectorAll('.pg-still--fit img').forEach(function (im) {
    var set = function () { var w = +im.getAttribute('width') || im.naturalWidth, h = +im.getAttribute('height') || im.naturalHeight; if (w && h) im.parentNode.style.setProperty('--ar', (w / h).toFixed(4)); };
    set(); if (!im.parentNode.style.getPropertyValue('--ar')) im.addEventListener('load', set);
  });
  // the model video plays (muted) only while it is on screen; with reduced motion it waits for the play button
  var vid = document.querySelector('.pg-video video');
  if (vid && 'IntersectionObserver' in window && !(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches)) {
    new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { var pr = vid.play(); if (pr && pr.catch) pr.catch(function () {}); } else vid.pause(); }); }, { threshold: 0.4 }).observe(vid);
  }
  // the comparison takes the proportions of its own render (angle and render share the same size)
  var cmpImg = document.querySelector('.pg-cmp img');
  if (cmpImg) { var fit = function () { if (!cmpImg.naturalWidth) return; var ar = cmpImg.naturalWidth / cmpImg.naturalHeight, box = cmpImg.parentNode; box.style.aspectRatio = cmpImg.naturalWidth + ' / ' + cmpImg.naturalHeight; box.style.maxWidth = 'calc(80svh * ' + ar.toFixed(4) + ')'; /* fits the screen height */ }; if (cmpImg.complete) fit(); else cmpImg.addEventListener('load', fit); }
})();
