const htmlEl = document.documentElement;
const navToggle = document.querySelector('.menu-toggle');
const navPanel = document.getElementById('primary-navigation');
const navLinks = navPanel ? navPanel.querySelectorAll('a[href^="#"]') : [];
const langButtons = document.querySelectorAll('.lang-switch button');
const scrollTopBtn = document.querySelector('.scroll-top');

const translations = {
  fr: {
    'meta.title': 'Ayoub G alias tismo_tech | Creative Tech Builder',
    'brand.name': 'Ayoub G alias tismo_tech',
    'brand.tagline': 'Creative Tech Builder • Discord & Web Experiences',
    'brand.logoLabel': "Retour à l'accueil",
    'menu.open': 'Ouvrir le menu',
    'menu.close': 'Fermer le menu',
    'nav.services': 'Services',
    'nav.projects': 'Portfolio',
    'nav.process': 'Process',
    'nav.contact': 'Contact',
    'nav.cta': 'Book on Fiverr',
    'lang.switchLabel': 'Choisir la langue',
    'hero.tag': 'Tech freelance ultra moderne',
    'hero.heading': 'Le choc des clients : des prix épatants pour un rendu éclatant.',
    'hero.highlight': 'Ayoub G (tismo_tech)',
    'hero.description': "Je conçois des bots Discord sur mesure, des sites web responsives et des expériences interactives. Tu veux un portfolio avec un mini-jeu, un dashboard pour ton ASBL ou une automatisation intelligente ? Je livre vite, fort et à des tarifs imbattables.",
    'hero.primaryCta': 'Lancer ton projet',
    'hero.secondaryCta': 'Voir les projets',
    'stats.discord': 'Automations Discord réalisées (rôles, transcripts, scripts vocaux...)',
    'stats.responsive': 'Sites responsive & pensés mobile + desktop',
    'stats.express': 'Livraison express disponible pour choquer tes prospects',
    'stack.title': 'Mes super-pouvoirs',
    'stack.description': 'Spécialisé en HTML • CSS • JavaScript (sites web statiques, dynamiques, modernes), gestion de serveurs & bases de données légères, intégrations API, mini-jeux web et bots Discord fiables.',
    'stack.skill.bot': 'Bot Discord',
    'stack.skill.server': 'Serveur & Hosting',
    'stack.skill.ui': 'UI futuriste (sur demande)',
    'stack.skill.automation': 'Automations',
    'stack.skill.portfolio': 'Portfolios modernes pour tes projets',
    'stack.skill.transcripts': 'HTML • CSS • JavaScript',
    'stack.note': "Je m'occupe du front, du back léger, des dashboards et de la maintenance quand il le faut.",
    'services.title': 'Services taillés pour dominer Fiverr',
    'services.subtitle': 'Des packs ultra-accessibles, pensés pour étonner tes clients avec un rendu premium.',
    'services.bot.title': 'Bots Discord surpuissants',
    'services.bot.desc': 'Gestion automatique des rôles, commandes custom, transcripts intelligents, logs propres et intégrations API. Optimisés pour tes serveurs communautaires ou pros.',
    'services.web.title': 'Sites web & landing ultra modernes',
    'services.web.desc': 'Portfolios interactifs, vitrines pour ASBL, dashboards réactifs et mini-jeux intégrés. Responsive, rapides et faciles à maintenir.',
    'services.automation.title': 'Automations & maintenance',
    'services.automation.desc': 'Gestion serveur, bases de données légères, scripts vocaux, intégrations avec Google Sheets ou Notion pour piloter ton business sans douleur.',
    'projects.title': 'Showcase • Projets qui claquent',
    'projects.subtitle': 'Voici quelques projets montrant la qualité de mon travail.',
    'projects.asbl.title': 'Site web pour ASBL • site statique moderne et sérieux pour une ASBL',
    'projects.asbl.desc': 'Site sérieux, clair et animé pour présenter les missions, projets, collecter des dons et gérer les newsletters en un clin d’œil.',
    'projects.asbl.visit': 'Visiter',
    'projects.asbl.alt': 'Site moderne pour ASBL',
    'projects.arcade.title': 'Jeu du Dino V2 • Jeu responsive',
    'projects.arcade.desc': 'Mini-jeu jouable sur PC & mobile, scores en temps réel, animations fluides.Jeu du dinosaure amelioré, parfait pour faire passer le temps.',
    'projects.arcade.play': 'Jouer',
    'projects.arcade.repo': 'Repo',
    'projects.arcade.alt': 'Jeu web responsive',
    'projects.discord.title': 'Bot Discord • Rôles, ticketsystem, transcripts, etc..',
    'projects.discord.desc': 'Automatisation des rôles selon la vocale, transcripts auto avec interface de recherche, commandes admin custom.',
    'projects.discord.demo': 'Demo',
    'projects.discord.scripts': 'Scripts',
    'projects.discord.alt': 'Bot Discord automation',
    'process.title': 'Mon process pour choquer les clients',
    'process.subtitle': 'Collaboration limpide, communication claire et livrables premium qui dépassent les attentes.',
    'process.step1.title': 'Polyvalence',
    'process.step1.desc': 'On analyse ton besoin, tes objectifs et le rendu qui fera dire « wow ». Je te propose des idées visuelles directement.',
    'process.step2.title': 'Offres avantageuses',
    'process.step2.desc': 'Étant adolescent, je cherche juste à me faire un revenu sur le côté, mes prix sont donc très compétitifs.',
    'process.step3.title': 'Livraison & boost',
    'process.step3.desc': 'Commande livrée le plus vite possible avec option de maintenance.',
    'contact.title': 'Prêt à lancer un projet ?',
    'contact.subtitle': 'Check le Fiverr pour voir ce que je propose, il y a sûrement un truc qui te plaît.',
    'contact.direct': 'Contact direct',
    'contact.discord': 'Discord&nbsp;: <strong>Rejoins le serveur, ouvre un ticket et contacte Ayoub/tismo</strong><br />Instagram&nbsp;: <strong>@tismo_tech</strong>',
    'contact.discordLink': 'Rejoins le Discord',
    'contact.instagramLink': 'Instagram',
    'contact.fiverrLink': 'Offre Fiverr',
    'contact.options.title': 'Options populaires',
    'contact.options.bot': 'Bot Discord complet avec rôles automatiques et transcripts',
    'contact.options.site': "Site vitrine + dashboard d'administration en 7 jours",
    'contact.options.portfolio': 'Portfolio premium avec mini-jeu intégré',
    'footer.copy': '© <span data-year></span> Ayoub G alias tismo_tech • Construisons des expériences digitales qui marquent.',
    'projects.media.prev': 'Image précédente',
    'projects.media.next': 'Image suivante',
    'scrollTop.label': 'Retour en haut'
  },
  en: {
  'meta.title': 'Ayoub G (tismo_tech) | Creative Tech Builder',
  'brand.name': 'Ayoub G (tismo_tech)',
  'brand.tagline': 'Creative Tech Builder • Discord & Web Experiences',
  'brand.logoLabel': 'Back to home',

  'menu.open': 'Open menu',
  'menu.close': 'Close menu',

  'nav.services': 'Services',
  'nav.projects': 'Portfolio',
  'nav.process': 'Process',
  'nav.contact': 'Contact',
  'nav.cta': 'Book on Fiverr',

  'lang.switchLabel': 'Switch language',

  'hero.tag': 'Ultra-modern freelance tech',
  'hero.heading': 'The shock for clients: stunning prices for a dazzling result.',
  'hero.highlight': 'Ayoub G (tismo_tech)',
  'hero.description': 'I build custom Discord bots, responsive websites, and interactive experiences. Need a mini-game portfolio, a dashboard for your non-profit, or smart automation? I deliver fast, premium-quality work at unbeatable rates.',
  'hero.primaryCta': 'Start your project',
  'hero.secondaryCta': 'View projects',

  'stats.discord': 'Advanced Discord automations delivered (roles, transcripts, voice scripts...)',
  'stats.responsive': 'Fully responsive sites for mobile and desktop',
  'stats.express': 'Express delivery available to impress your audience',

  'stack.title': 'Tech stack & superpowers',
  'stack.description': 'Expert in HTML • CSS • JavaScript (static, dynamic, and modern sites), lightweight server setups, API integrations, web mini-games, and reliable Discord bots.',
  'stack.skill.bot': 'Discord bots',
  'stack.skill.server': 'Server & hosting',
  'stack.skill.ui': 'Futuristic UI (on request)',
  'stack.skill.automation': 'Automations',
  'stack.skill.portfolio': 'Modern portfolios',
  'stack.skill.transcripts': 'HTML • CSS • JavaScript',
  'stack.note': 'I handle front-end, light back-end, dashboards, and maintenance when needed.',

  'services.title': 'Services built to dominate Fiverr',
  'services.subtitle': 'Accessible packages designed to deliver a premium punch.',
  'services.bot.title': 'High-performance Discord bots',
  'services.bot.desc': 'Automated roles, custom commands, smart transcripts, clean logs, and API integrations — for communities and professional servers.',
  'services.web.title': 'Modern websites & landing pages',
  'services.web.desc': 'Interactive portfolios, non-profit showcases, dashboards, and built-in web mini-games. Fast, responsive, and easy to maintain.',
  'services.automation.title': 'Automations & maintenance',
  'services.automation.desc': 'Server setup, lightweight databases, voice scripts, and integrations with Google Sheets or Notion — automate your workflow effortlessly.',

  'projects.title': 'Showcase • Work that stands out',
  'projects.subtitle': 'A selection of builds that speak for themselves.',

  'projects.asbl.title': 'Non-profit website • Modern & engaging',
  'projects.asbl.desc': 'A clean, animated platform to present missions, collect donations, and manage newsletters effortlessly.',
  'projects.asbl.visit': 'Visit',
  'projects.asbl.alt': 'Modern non-profit website',

  'projects.arcade.title': 'Web Arcade • Responsive browser game',
  'projects.arcade.desc': 'Mobile-friendly mini-game with live scoring and smooth animations — perfect for engagement.',
  'projects.arcade.play': 'Play',
  'projects.arcade.repo': 'Repo',
  'projects.arcade.alt': 'Browser-based web game',

  'projects.discord.title': 'Discord automation bot',
  'projects.discord.desc': 'Automated voice-role assignment, transcript system with search UI, and custom moderation tools.',
  'projects.discord.demo': 'Demo',
  'projects.discord.scripts': 'Scripts',
  'projects.discord.alt': 'Discord bot system',

  'process.title': 'My process to impress clients',
  'process.subtitle': 'Clear communication, smooth collaboration, and premium results.',
  'process.step1.title': 'Discovery & concept',
  'process.step1.desc': 'We analyze your needs, define your goals, and explore visuals that create a “wow” effect.',
  'process.step2.title': 'Fast prototyping',
  'process.step2.desc': 'As a young freelancer, I keep prices competitive while delivering pro-level results.',
  'process.step3.title': 'Delivery & support',
  'process.step3.desc': 'Fast delivery with optional maintenance and scaling add-ons.',

  'contact.title': 'Ready to start?',
  'contact.subtitle': 'Check my Fiverr page — there’s a perfect option waiting for you.',
  'contact.direct': 'Direct contact',
  'contact.discord': 'Discord:&nbsp;<strong>Join the server, open a ticket, and reach out to Ayoub/tismo</strong><br />Instagram:&nbsp;<strong>@tismo_tech</strong>',
  'contact.discordLink': 'Join Discord',
  'contact.instagramLink': 'Instagram',
  'contact.fiverrLink': 'Fiverr offer',

  'contact.options.title': 'Popular services',
  'contact.options.bot': 'Full Discord bot with auto-roles & transcripts',
  'contact.options.site': 'Professional website + admin dashboard in 7 days',
  'contact.options.portfolio': 'Premium portfolio with built-in mini-game',

  'footer.copy': '© <span data-year></span> Ayoub G (tismo_tech) • Crafting digital experiences that make an impact.',

  'projects.media.prev': 'Previous image',
  'projects.media.next': 'Next image',
  'scrollTop.label': 'Back to top'
}
};

let currentLang = 'fr';

const getTranslation = (lang, key) => {
  const dict = translations[lang] || translations.fr;
  return dict[key] ?? translations.fr[key] ?? '';
};

const updateYear = () => {
  const year = new Date().getFullYear();
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = year;
  });
};

const applyTranslations = (lang) => {
  const dict = translations[lang] || translations.fr;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (key && dict[key]) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.dataset.i18nHtml;
    if (key && dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
    const mapping = el.dataset.i18nAttr;
    if (!mapping) return;

    mapping.split(';').forEach((pair) => {
      const [attr, key] = pair.split(':').map((part) => part.trim());
      if (!attr || !key) return;
      const value = dict[key];
      if (value) {
        el.setAttribute(attr, value);
      }
    });
  });

  langButtons.forEach((btn) => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', isActive.toString());
  });

  htmlEl.setAttribute('lang', lang);
  document.title = dict['meta.title'] || document.title;
  currentLang = lang;
  updateYear();
  updateMenuLabel(navToggle?.getAttribute('aria-expanded') === 'true');
};

const updateMenuLabel = (isOpen) => {
  if (!navToggle) return;
  const labelKey = isOpen ? 'menu.close' : 'menu.open';
  const label = getTranslation(currentLang, labelKey);
  if (label) {
    navToggle.setAttribute('aria-label', label);
  }
};

const setMenuState = (shouldOpen) => {
  if (!navToggle || !navPanel) return;
  navPanel.setAttribute('data-visible', shouldOpen ? 'true' : 'false');
  navToggle.setAttribute('aria-expanded', shouldOpen.toString());
  navToggle.classList.toggle('is-open', shouldOpen);
  updateMenuLabel(shouldOpen);
};

const handleNavToggle = () => {
  if (!navToggle) return;
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    setMenuState(!isOpen);
  });
};

const closeMenuOnResize = () => {
  if (!navToggle || !navPanel) return;
  if (window.innerWidth > 720) {
    setMenuState(false);
  }
};

const initSmoothAnchors = () => {
  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      const target = document.querySelector(href);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
      if (window.innerWidth <= 720) {
        setMenuState(false);
      }
    });
  });
};

const handleLanguageSwitch = () => {
  langButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (!lang || lang === currentLang) return;
      applyTranslations(lang);
    });
  });
};

const initScrollTop = () => {
  if (!scrollTopBtn) return;

  const toggleVisibility = () => {
    if (window.scrollY > 420) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  };

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', toggleVisibility, { passive: true });
  toggleVisibility();
};

const initProjectSliders = () => {
  document.querySelectorAll('.project-card').forEach((card) => {
    if (card.dataset.sliderInit === 'true') return;

    const slides = Array.from(card.querySelectorAll('.project-slide'));
    const prevBtn = card.querySelector('.slider-btn.prev');
    const nextBtn = card.querySelector('.slider-btn.next');

    if (slides.length <= 1 || !prevBtn || !nextBtn) {
      card.dataset.sliderInit = 'true';
      return;
    }

    let activeIndex = slides.findIndex((slide) => slide.classList.contains('is-active'));
    if (activeIndex < 0) {
      activeIndex = 0;
    }

    const setActiveSlide = (index) => {
      slides.forEach((slide, idx) => {
        const isActive = idx === index;
        slide.classList.toggle('is-active', isActive);
        slide.setAttribute('aria-hidden', (!isActive).toString());
      });
    };

    const goToSlide = (offset) => {
      activeIndex = (activeIndex + offset + slides.length) % slides.length;
      setActiveSlide(activeIndex);
    };

    prevBtn.addEventListener('click', () => goToSlide(-1));
    nextBtn.addEventListener('click', () => goToSlide(1));

    setActiveSlide(activeIndex);
    card.dataset.sliderInit = 'true';
  });
};

const init = () => {
  updateYear();
  applyTranslations(currentLang);
  handleNavToggle();
  initSmoothAnchors();
  handleLanguageSwitch();
  initScrollTop();
  initProjectSliders();

  window.addEventListener('resize', closeMenuOnResize);
  window.addEventListener('orientationchange', closeMenuOnResize);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navToggle?.getAttribute('aria-expanded') === 'true') {
      setMenuState(false);
    }
  });
};

init();
