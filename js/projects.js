/* Portfolio data: one entry per project. Used by portfolio.html (cards) and project.html (case pages).
   Facts for the first four come from Svetlana's 2026 deck.
   Images live in images/projects/<slug>/; empty lists simply hide their section on the project page. */
window.PROJECTS = [
  {
    slug: 'upper-floor-australia', n: '01', cover: 'images/projects/upper-floor-australia/final-2.jpg',
    services: [['svp.s1', 'Interior rendering', 'services.html#interior', 1]],
    title: { en: 'Upper floor of a family home', ru: 'Второй этаж семейного дома' },
    type: { en: 'Interior renderings', ru: 'Интерьерные визуализации' },
    client: 'Scott · BYO Floor Plan', location: { en: 'Australia', ru: 'Австралия' },
    // the designer supplied his own 3D model and set the camera angles; Svetlana did the rendering
    role: { en: 'Rendering the four views from the designer’s own 3D model and camera angles, finished by hand in Procreate', ru: 'Визуализация четырёх видов по собственной 3D-модели и ракурсам дизайнера, прорисовка вручную в Procreate' },
    facts: [
      [{ en: 'Views', ru: 'Виды' }, { en: '4 interior views: hallway with a bar niche, master en-suite, office, walk-in robe', ru: '4 интерьерных вида: холл с барной нишей, мастер-ванная, кабинет, гардеробная' }],
      [{ en: 'Supplied', ru: 'Прислано' }, { en: 'The designer’s 3D model with four camera angles, and a render brief for each room', ru: '3D-модель дизайнера с четырьмя ракурсами и бриф на визуализацию каждой комнаты' }],
      [{ en: 'Delivered', ru: 'Срок' }, { en: '10 days', ru: '10 дней' }]
    ],
    intro: { en: 'Four views of the upper floor of a family home designed by BYO Floor Plan: the hallway with its bar niche and lit shelving, the master en-suite, the office and the walk-in robe. The designer built the 3D model and set the camera angles himself; my part was the rendering, following his specification room by room.', ru: 'Четыре вида второго этажа семейного дома по проекту BYO Floor Plan: холл с барной нишей и подсвеченными полками, мастер-ванная, кабинет и гардеробная. 3D-модель и ракурсы дизайнер подготовил сам; моя задача — визуализация строго по его спецификации, комната за комнатой.' },
    brief: { en: 'The designer sent his own 3D model with the four angles already set, and a render brief for each room: limestone-look tumbled tiles, rural oak, V-joint wall lining, textured lime paint, tapware, the freestanding bath, wall lights and joinery details. The task was to show the client how these finishes work together before anything was ordered.', ru: 'Дизайнер прислал свою 3D-модель с уже выставленными ракурсами и бриф на каждую комнату: плитка под галтованный известняк, дуб, вагонка V-joint, фактурная известковая краска, смесители, отдельностоящая ванна, бра и детали столярки. Задача — показать заказчику, как эти отделки работают вместе, до заказа материалов.' },
    note: { en: 'Have your own 3D model? Send it with your camera angles and I’ll render from it. If something in the model needs fixing or finishing, I’ll adjust it before rendering.', ru: 'Есть своя 3D-модель? Пришлите её вместе с ракурсами — я сделаю визуализацию по ней. Если в модели что-то нужно исправить или доработать, я поправлю это перед визуализацией.' },
    sentLead: { en: 'No floor plans or elevations this time: the designer’s own 3D model with the camera angles already set, and the materials and fixtures for every view.', ru: 'В этот раз без планов и развёрток: собственная 3D-модель дизайнера с готовыми ракурсами, материалы и сантехника для каждого вида.' },
    angles: ['view-1', 'view-2', 'view-3', 'view-4'],
    materialsTitle: { en: 'Materials and fixtures from the brief', ru: 'Материалы и сантехника из брифа' },
    materials: ['material-1', 'material-2', 'material-3', 'material-4', 'material-5', 'material-6', 'material-7', 'material-8', 'material-9', 'material-10', 'material-11', 'material-12'], materialsStill: true,
    angle: 'angle', angleFinal: 'final-2',
    angleTitle: { en: 'The designer’s angle and the final view', ru: 'Ракурс дизайнера и финальный вид' },
    angleText: { en: 'The angles came ready-made in the designer’s model; I rendered each one following his specification. Move across the image to compare.', ru: 'Ракурсы пришли готовыми в модели дизайнера; я сделала визуализацию каждого по его спецификации. Проведите по изображению, чтобы сравнить.' },
    revText: { en: 'Because the 3D model was the designer’s own, he could comment on every view twice, free of charge, and every comment went into the final images.', ru: 'Так как 3D-модель была собственной моделью дизайнера, он мог дважды бесплатно вносить правки в каждый вид, и каждая из них вошла в финальные изображения.' },
    revisions: ['revisions-1', 'revisions-2'], finals: ['final-1', 'final-2', 'final-3', 'final-4'], zoom: ['zoom-1', 'zoom-2', 'zoom-3', 'zoom-4'],
    // his reply to the first drafts (the blurred screenshot shows only these words)
    review: { q: { en: '“Thanks Sveta. This is looking wonderful so far. … Thanks so much”', ru: '«Спасибо, Света. Пока всё выглядит чудесно. … Огромное спасибо»' }, who: 'Scott, Director / Licensed Building Designer', shot: 'images/review-shot-scott-2.png' }
  },
  {
    slug: 'growing-scope', n: '02', cover: 'images/projects/growing-scope/final-1.jpg',
    services: [['svp.s1', 'Interior rendering', 'services.html#interior', 1], ['svp.s9', 'Axonometric view', 'axonometric-views.html', 5]],
    title: { en: 'One client, growing scope', ru: 'Один клиент, растущий объём' },
    type: { en: 'Interior renderings · Axonometric views', ru: 'Интерьерные визуализации · Аксонометрия' },
    client: 'Mariella · Splendor Styling', clientUrl: 'https://www.instagram.com/splendorstyling/', location: { en: 'Washington, USA', ru: 'Вашингтон, США' },
    // the designer sent a concept plan, a material board and a spec sheet; Svetlana built the 3D model herself
    role: { en: 'The 3D model from the designer’s concept plan and photos, the camera angles and all five views, finished by hand in Procreate', ru: '3D-модель по концепт-плану и фото дизайнера, ракурсы и все пять видов, прорисованные вручную в Procreate' },
    facts: [
      [{ en: 'Views', ru: 'Виды' }, { en: '3 interior views (living room, entry with the kitchen and dining area, bedroom) + 2 axonometric views', ru: '3 интерьерных вида (гостиная, прихожая с кухней-столовой, спальня) + 2 аксонометрии' }],
      [{ en: 'Supplied', ru: 'Прислано' }, { en: 'A concept plan with dimensions and room photos, a material board and a spec sheet with vendor links', ru: 'Концепт-план с размерами и фото комнат, доска материалов и спецификация со ссылками на поставщиков' }],
      [{ en: 'Delivered', ru: 'Срок' }, { en: '12 days, added in stages over several weeks', ru: '12 дней, дозаказы в течение нескольких недель' }],
      [{ en: 'Model', ru: 'Модель' }, { en: 'One 3D model for all five views', ru: 'Одна 3D-модель для всех пяти видов' }]
    ],
    intro: { en: 'Mariella first reached out for a single visualization — then returned with a second, and later added three more as her project evolved. All five visuals were treated as one project and priced together.', ru: 'Мариэлла сначала обратилась за одной визуализацией, потом вернулась за второй, а позже добавила ещё три по мере развития проекта. Все пять визуализаций вели как один проект и посчитали вместе.' },
    brief: { en: 'She sent a concept plan with dimensions and photos of the rooms with the furniture drawn in, a material board with a wallpaper for every wall and ceiling, drapery details and a spec sheet with a link for every item. I built the 3D model from them, so every view added later came from the same model and stayed consistent with the ones before it. Started with one visual, grew into five, and the bundle discount still applied to everything.', ru: 'Она прислала концепт-план с размерами и фото комнат с нарисованной поверх мебелью, доску материалов с обоями для каждой стены и потолка, детали штор и спецификацию со ссылкой на каждый предмет. 3D-модель по ним построила я, поэтому каждый новый вид брался из той же модели и совпадал с предыдущими. Начали с одной визуализации, выросли до пяти, и скидка за пакет применилась ко всему.' },
    note: { en: 'Only have a floor plan and a material board? That is enough: I build the 3D model myself and send you angles to choose from.', ru: 'Есть только план и доска материалов? Этого достаточно: 3D-модель я построю сама и пришлю ракурсы на выбор.' },
    sentLead: { en: 'No 3D model this time: a concept plan with dimensions, photos of the rooms, a material board and a spec sheet with vendor links.', ru: 'В этот раз без 3D-модели: концепт-план с размерами, фото комнат, доска материалов и спецификация со ссылками на поставщиков.' },
    drawings: ['drawing-1', 'drawing-2'], drawingsStill: true,
    drawingsTitle: { en: 'The designer’s concept plan and material board', ru: 'Концепт-план и доска материалов дизайнера' },
    materialsTitle: { en: 'Wallpapers, fabrics and furniture from the spec', ru: 'Обои, ткани и мебель из спецификации' },
    materials: ['material-1', 'material-2', 'material-3', 'material-4', 'material-5', 'material-6', 'material-7', 'material-8', 'material-9', 'material-10', 'material-11', 'material-12'], materialsStill: true,
    // Svetlana's own model: a walk-through video (4:3) and the five angles
    video: 'model-video', models: ['model-1', 'model-2', 'model-3', 'model-4', 'model-5'],
    modelText: { en: 'I built the 3D model from the concept plan and the photos, then sent angles to choose from. The video walks through the model; below are the angles of all five views.', ru: '3D-модель я построила по концепт-плану и фото, затем прислала ракурсы на выбор. На видео — проход по модели, ниже — ракурсы всех пяти видов.' },
    angle: 'angle', angleFinal: 'final-1',
    finals: ['final-1', 'final-2', 'final-3', 'final-4', 'final-5'], zoom: ['zoom-1', 'zoom-2', 'zoom-3', 'zoom-4', 'zoom-5'],
    review: { q: { en: '“Everything looks fabulous! Thanks so much for sharing your talent with me, and for going the extra mile to get things on time. I really appreciate it and look forward to working together again.”', ru: '«Всё выглядит потрясающе! Спасибо, что поделились своим талантом и сделали всё возможное, чтобы успеть вовремя. Очень ценю это и с нетерпением жду новой работы вместе.»' }, who: 'Mariella, Lead Designer', shot: 'images/review-shot-mariella.png' }
  },
  {
    slug: 'exterior-to-interior', n: '03', cover: 'images/projects/exterior-to-interior/final-1.jpg',
    services: [['svp.s4', 'Exterior rendering', 'services.html#exterior', 2], ['svp.s6', '2D floor plan', 'floor-plan-rendering.html', 3], ['svp.s9', 'Axonometric view', 'axonometric-views.html', 5]],
    title: { en: 'From exterior to interior', ru: 'От экстерьера до интерьера' },
    type: { en: 'Exterior · Floor plans · Axonometry', ru: 'Экстерьер · Планы · Аксонометрия' },
    client: 'Michelle · Belyn Studio', clientUrl: 'https://www.instagram.com/belynstudio/',
    // the designer supplied her SketchUp model with room scenes; Svetlana refined it before rendering
    role: { en: 'Refining the designer’s SketchUp model, then the exterior, both floor plans, the axonometry and the interior view, finished by hand in Procreate', ru: 'Доработка SketchUp-модели дизайнера, затем экстерьер, планы обоих этажей, аксонометрия и интерьерный вид, прорисованные вручную в Procreate' },
    facts: [
      [{ en: 'First order', ru: 'Первый заказ' }, { en: '2D floor plans for both levels + 1 exterior view', ru: '2D-планы обоих этажей + 1 экстерьер' }],
      [{ en: 'Follow-up', ru: 'Дозаказ' }, { en: '1 axonometric view + 1 additional interior angle', ru: '1 аксонометрия + 1 дополнительный интерьерный ракурс' }],
      [{ en: 'Supplied', ru: 'Прислано' }, { en: 'The designer’s SketchUp model with room scenes, and a finishes presentation: exterior direction, floor plans with materials, kitchen and furniture boards', ru: 'SketchUp-модель дизайнера со сценами комнат и презентация отделки: направление экстерьера, планы с материалами, доски кухни и мебели' }],
      [{ en: 'Delivered', ru: 'Срок' }, { en: '10 days', ru: '10 дней' }],
      [{ en: 'Model', ru: 'Модель' }, { en: 'One 3D model, inside and out: the designer’s, refined by me', ru: 'Одна 3D-модель снаружи и внутри: модель дизайнера, доработанная мной' }]
    ],
    intro: { en: 'Michelle first came with a two-floor layout and a request to show both the interior plans and how the building looks from outside. The order included 2D floor plans for both levels and one exterior visualization, based on a precise 3D model — a complete picture of the project, inside and out.', ru: 'Мишель пришла с двухэтажной планировкой и просьбой показать и интерьерные планы, и то, как дом выглядит снаружи. В заказ вошли 2D-планы обоих этажей и экстерьер на основе точной 3D-модели — полная картина проекта, снаружи и внутри.' },
    brief: { en: 'Once the project was approved, Michelle came back for more — adding an axonometry and an additional interior angle, again with the bundle discount applied. The full project became one continuous collaboration, with the discount applied to both the original order and the follow-up.', ru: 'После согласования Мишель вернулась за дополнением — аксонометрией и ещё одним интерьерным ракурсом, снова со скидкой за пакет. Проект стал одним непрерывным сотрудничеством, и скидка применилась и к первому заказу, и к дозаказу.' },
    note: { en: 'Working in SketchUp yourself? Send the model with your scenes. I’ll refine what the views need and render from it.', ru: 'Работаете в SketchUp сами? Пришлите модель со сценами. Я доработаю то, что нужно для видов, и сделаю по ней визуализацию.' },
    sentLead: { en: 'The designer’s own SketchUp model with scenes of the rooms and the exterior, and her finishes presentation for every space.', ru: 'Собственная SketchUp-модель дизайнера со сценами комнат и экстерьера и её презентация отделки для каждого помещения.' },
    drawings: ['drawing-1', 'drawing-2', 'drawing-3', 'drawing-4'], drawingsStill: true, drawingsRow: true,
    drawingsTitle: { en: 'Pages from the designer’s finishes presentation', ru: 'Страницы из презентации отделки дизайнера' },
    materialsTitle: { en: 'Finishes, fixtures and furniture from the brief', ru: 'Отделка, сантехника и мебель из брифа' },
    materials: ['material-1', 'material-2', 'material-3', 'material-4', 'material-5', 'material-6', 'material-7', 'material-8', 'material-9', 'material-10', 'material-11', 'material-12'], materialsStill: true,
    video: 'model-video', models: ['model-1', 'model-2', 'model-3'],
    modelTitle: { en: 'The 3D model, refined', ru: '3D-модель после доработки' },
    modelText: { en: 'The model came from the designer; I refined it for the views and set the angles. The video walks through it; below are the angles of the exterior, the interior view and the axonometry.', ru: 'Модель пришла от дизайнера; я доработала её для видов и выставила ракурсы. На видео — проход по модели, ниже — ракурсы экстерьера, интерьерного вида и аксонометрии.' },
    angle: 'angle', angleFinal: 'final-1',
    angleTitle: { en: 'The model angle and the final exterior', ru: 'Ракурс модели и финальный экстерьер' },
    finals: ['final-1', 'final-2', 'final-3', 'final-4', 'final-5'], zoom: ['zoom-1', 'zoom-2', 'zoom-3', 'zoom-4', 'zoom-5'],
    review: { q: { en: '“Amazing! Yes! Thank you. … Thank you for all your work!”', ru: '«Потрясающе! Да! Спасибо. … Спасибо за всю вашу работу!»' }, who: 'Michelle, Design & Development', shot: 'images/projects/exterior-to-interior/review-shot.png' }
  },
  {
    slug: 'four-rooms-presentation', n: '04', cover: 'images/projects/four-rooms-presentation/final-1.jpg',
    services: [['svp.s1', 'Interior rendering', 'services.html#interior', 1], ['svp.s6', '2D floor plan', 'floor-plan-rendering.html', 3]],
    title: { en: 'Four rooms for a client presentation', ru: 'Четыре комнаты для презентации клиенту' },
    type: { en: 'Interior renderings · Floor plan', ru: 'Интерьерные визуализации · План' },
    client: 'Patrick · Interior designer', location: { en: 'Los Angeles, USA', ru: 'Лос-Анджелес, США' },
    // Svetlana built the 3D model and reworked the floor plan to the designer's specification
    role: { en: 'The 3D model, the floor plan reworked to match the specification, four interior views and a 2D plan, finished by hand in Procreate', ru: '3D-модель, план этажа, доработанный под спецификацию, четыре интерьерных вида и 2D-план, прорисованные вручную в Procreate' },
    facts: [
      [{ en: 'Views', ru: 'Виды' }, { en: '4 interior views (primary bedroom, great room, guest room, dining room) + a 2D floor plan', ru: '4 интерьерных вида (главная спальня, гостиная, гостевая, столовая) + 2D-план' }],
      [{ en: 'Supplied', ru: 'Прислано' }, { en: 'A CAD plan set with wall elevations, renderings and furniture mockups', ru: 'Пакет чертежей в CAD с развёртками стен, рендеры и мудборды с мебелью' }],
      [{ en: 'Delivered', ru: 'Срок' }, { en: '16 days', ru: '16 дней' }],
      [{ en: 'Revisions', ru: 'Правки' }, { en: 'Many rounds beyond the two included, ordered as extras', ru: 'Много кругов сверх двух включённых, оплачены отдельно' }]
    ],
    intro: { en: 'Patrick needed four rooms and a floor plan for a presentation to his clients: the primary bedroom, the great room, the guest room and the dining room, all from one 3D model.', ru: 'Патрику нужны были четыре комнаты и план этажа для презентации своим клиентам: главная спальня, гостиная, гостевая комната и столовая, всё по одной 3D-модели.' },
    brief: { en: 'He sent a full CAD plan set with the wall elevations, renderings and furniture mockups for the rooms. I built the 3D model from them and reworked the floor plan where the specification asked for changes. Patrick refined the design view by view, asked for many more rounds than the two included and gladly paid for each extra one.', ru: 'Он прислал полный пакет чертежей в CAD с развёртками стен, рендеры и мудборды с мебелью для комнат. 3D-модель по ним построила я и доработала план этажа там, где этого требовала спецификация. Патрик уточнял дизайн вид за видом, попросил гораздо больше кругов правок, чем два включённых, и охотно оплатил каждый дополнительный.' },
    note: { en: 'Need more than two rounds of changes? Extra revisions are simply added to the order, view by view.', ru: 'Нужно больше двух кругов правок? Дополнительные правки просто добавляются к заказу, вид за видом.' },
    sentLead: { en: 'A CAD plan set with the floor plan and wall elevations, renderings and furniture mockups for every room.', ru: 'Пакет чертежей в CAD с планом и развёртками стен, рендеры и мудборды с мебелью для каждой комнаты.' },
    drawings: ['drawing-1', 'drawing-2', 'drawing-3', 'drawing-4'], drawingsStill: true,
        drawingsRow: true,
drawingsTitle: { en: 'From the designer’s plan set and mockups', ru: 'Из пакета чертежей и мудбордов дизайнера' },
    materialsTitle: { en: 'Finishes and furniture chosen for the views', ru: 'Отделка и мебель, выбранные для видов' },
    materials: ['material-1', 'material-2', 'material-3', 'material-4', 'material-5', 'material-6', 'material-7', 'material-8', 'material-9', 'material-10', 'material-11', 'material-12'], materialsStill: true,
    video: 'model-video', models: ['model-1', 'model-2', 'model-3', 'model-4'],
    modelText: { en: 'I built the 3D model from the plan set and reworked the plan where the specification asked for it. The video walks through the model; below are the four angles.', ru: '3D-модель я построила по пакету чертежей и доработала план там, где этого требовала спецификация. На видео — проход по модели, ниже — четыре ракурса.' },
    angle: 'angle-2', angleFinal: 'final-2',
    revText: { en: 'Two rounds are included on every view. Patrick wanted to refine the design further, so the extra rounds were added to the order, and he gladly paid for them.', ru: 'Два круга правок на каждый вид включены. Патрик хотел доработать дизайн дальше, поэтому дополнительные круги добавили к заказу, и он охотно их оплатил.' },
    finals: ['final-1', 'final-2', 'final-3', 'final-4', 'final-5'], zoom: ['zoom-1', 'zoom-2', 'zoom-3', 'zoom-4', 'zoom-5'],
    review: { q: { en: '“Of course! I’m so glad I found you! Your artwork is adding so much to my presentations and I’m so excited to share them with my clients.”', ru: '«Конечно! Я так рад, что нашёл вас! Ваши работы так много добавляют моим презентациям, и мне не терпится показать их клиентам.»' }, who: 'Patrick, Interior designer', shot: 'images/projects/four-rooms-presentation/review-shot.png' }
  },
  { slug: 'coastal-kitchen', n: '06', cover: 'images/hero-kitchen.jpg', title: { en: 'Kitchen with a blue tile range niche', ru: 'Кухня с нишей из синей плитки' }, type: { en: 'Interior rendering', ru: 'Интерьерная визуализация' }, finalsAbs: ['images/hero-kitchen.jpg'] },
  { slug: 'girls-bedroom', n: '07', cover: 'images/hero-kids-bedroom.jpg', title: { en: 'Girl\'s bedroom', ru: 'Детская для девочки' }, type: { en: 'Interior rendering', ru: 'Интерьерная визуализация' }, finalsAbs: ['images/hero-kids-bedroom.jpg'] },
  { slug: 'stone-bathroom', n: '08', cover: 'images/hero-dark-bath.jpg', title: { en: 'Bathroom in dark stone', ru: 'Ванная в тёмном камне' }, type: { en: 'Interior rendering', ru: 'Интерьерная визуализация' }, finalsAbs: ['images/hero-dark-bath.jpg'] },
  { slug: 'kitchen-dining', n: '09', cover: 'images/parallax-kitchen-dining.jpg', title: { en: 'Open kitchen and dining room', ru: 'Кухня-столовая' }, type: { en: 'Interior rendering', ru: 'Интерьерная визуализация' }, finalsAbs: ['images/parallax-kitchen-dining.jpg'] },
  { slug: 'laundry-room', n: '10', cover: 'images/laundry-room.jpg', title: { en: 'Laundry room', ru: 'Прачечная' }, type: { en: 'Interior rendering', ru: 'Интерьерная визуализация' }, finalsAbs: ['images/laundry-room.jpg'] }
];
