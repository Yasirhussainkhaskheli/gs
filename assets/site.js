(() => {
  const globalServiceMenus = [
    { href: '/seo-services-singapore/', label: 'SEO' },
    { href: '/content-creation-services-singapore/', label: 'Content Strategy & Writing' },
    { href: '/paid-media-social-advertising-singapore/', label: 'Paid Media & Social Advertising' },
    { href: '/lead-generation-services-singapore/', label: 'B2B Lead Generation & Sales Automation' },
    { href: '/web-design-development-singapore/', label: 'Web Design & Development' },
    { href: '/app-development-services-singapore/', label: 'App Development & AI Solutions' },
    { href: '/strategic-partnership-consulting-singapore/', label: 'Strategic Partnerships' },
    { href: '/corporate-sales-training-workshops-singapore/', label: 'Corporate Training & Workshops' },
    { href: '/tradeshow-exhibitor-strategy-singapore/', label: 'Trade Show & Exhibitor Strategy' }
  ];

  const globalDesktopMenus = [
    { href: '/services/', label: 'Services', children: globalServiceMenus },
    { href: '/about/', label: 'About' },
    { href: '/blog/', label: 'Insightful Reads' },
    { href: '/video-insights/', label: 'Video Insights' },
    { href: '/contact/', label: 'Contact' }
  ];

  const globalMobileMenus = [
    { href: '/', label: 'Home' },
    { href: '/services/', label: 'Services', children: globalServiceMenus },
    { href: '/about/', label: 'About' },
    { href: '/blog/', label: 'Insightful Reads' },
    { href: '/video-insights/', label: 'Video Insights' },
    { href: '/contact/', label: 'Contact' }
  ];

  const globalFooter = {
    tagline: 'Strategy-Led Growth Across Singapore & APAC',
    description:
      'GS ConsultPro helps businesses strengthen visibility, generate demand, and build scalable growth systems through strategy, digital execution, automation, and market engagement.',
    primaryEmail: 'hello@gsconsultpro.com',
    primaryEmailHref: 'mailto:hello@gsconsultpro.com',
    location: 'Singapore &bull; Serving APAC',
    footerCtaLabel: 'Book a Consultation',
    footerCtaHref: '/contact/#contact-form',
    columns: [
      {
        title: 'Marketing & Growth',
        links: [
          { href: '/seo-services-singapore/', label: 'SEO Services' },
          { href: '/content-creation-services-singapore/', label: 'Content Strategy & Writing' },
          { href: '/paid-media-social-advertising-singapore/', label: 'Paid Media & Social Advertising' },
          { href: '/lead-generation-services-singapore/', label: 'B2B Lead Generation & Sales Automation' }
        ]
      },
      {
        title: 'Technology Solutions',
        links: [
          { href: '/web-design-development-singapore/', label: 'Web Design & Development' },
          { href: '/app-development-services-singapore/', label: 'App Development & AI Solutions' }
        ]
      },
      {
        title: 'Consulting Services',
        links: [
          { href: '/strategic-partnership-consulting-singapore/', label: 'Strategic Partnerships' },
          { href: '/corporate-sales-training-workshops-singapore/', label: 'Corporate Training & Workshops' },
          { href: '/tradeshow-exhibitor-strategy-singapore/', label: 'Trade Show & Exhibitor Strategy' }
        ]
      },
      {
        title: 'Company',
        links: [
          { href: '/', label: 'Home' },
          { href: '/about/', label: 'About Us' },
          { href: '/blog/', label: 'Insightful Reads' },
          { href: '/contact/', label: 'Contact' }
        ]
      }
    ],
    copyright: '&copy; 2026 GS ConsultPro. All rights reserved.',
    bottomLinks: [{ href: '/privacy-policy/', label: 'Privacy Policy' }]
  };

  function renderDesktopLinks(items) {
    return items
      .map((item) => {
        const children = Array.isArray(item.children) ? item.children : [];
        if (!children.length) {
          return `<li><a href="${item.href}">${item.label}</a></li>`;
        }

        const childLinks = children
          .map((child) => `<li><a href="${child.href}">${child.label}</a></li>`)
          .join('');

        return `<li><a href="${item.href}">${item.label} <span class="arr"></span></a><ul class="drop">${childLinks}</ul></li>`;
      })
      .join('');
  }

  function renderMobileLinks(items) {
    return items
      .map((item, index) => {
        const children = Array.isArray(item.children) ? item.children : [];
        if (!children.length) {
          return `<a class="mob-nav-link" href="${item.href}">${item.label}</a>`;
        }

        const childLinks = children
          .map((child) => `<a class="mob-submenu-link" href="${child.href}">${child.label}</a>`)
          .join('');

        return `
          <div class="mob-menu-group">
            <button class="mob-parent" type="button" aria-expanded="false" data-target="mob-submenu-${index}">
              <span>${item.label}</span>
              <span class="mob-parent-icon"></span>
            </button>
            <div class="mob-submenu" id="mob-submenu-${index}">${childLinks}</div>
          </div>
        `;
      })
      .join('');
  }

  function renderHeader() {
    const isHome = document.body.classList.contains('home-page');

    return `
      <header id="hdr"${isHome ? '' : ' class="inner-page-header"'}>
        <div class="nav-bg">
          <nav>
            <a href="/" class="logo" aria-label="GS ConsultPro home">
              <img class="site-logo-img" src="/assets/images/logo.png" alt="GS ConsultPro" />
            </a>
            <ul class="nav-ul">${renderDesktopLinks(globalDesktopMenus)}</ul>
            <div class="nav-end">
              <a class="btn-primary" href="/contact/#contact-form">Get a Free Quote</a>
              <button id="ham" class="ham" aria-label="Menu" aria-expanded="false" aria-controls="mobNav" type="button">
                <span></span><span></span><span></span>
              </button>
            </div>
          </nav>
        </div>
      </header>
      <div id="mobNav" class="mob-nav">
        ${renderMobileLinks(globalMobileMenus)}
        <div class="mob-cta"><a href="/contact/#contact-form" class="btn-primary">Get a Free Quote</a></div>
      </div>
    `;
  }

  function initHamburger() {
    const ham = document.getElementById('ham');
    const mobNav = document.getElementById('mobNav');
    if (!ham || !mobNav || ham.dataset.gsBound) return;
    ham.dataset.gsBound = '1';

    const overlay = document.createElement('div');
    overlay.className = 'mob-overlay';
    document.body.appendChild(overlay);

    function open() {
      ham.classList.add('open');
      ham.setAttribute('aria-expanded', 'true');
      mobNav.classList.add('open');
      overlay.classList.add('open');
      document.body.classList.add('menu-open');
    }

    function close() {
      ham.classList.remove('open');
      ham.setAttribute('aria-expanded', 'false');
      mobNav.classList.remove('open');
      overlay.classList.remove('open');
      document.body.classList.remove('menu-open');
    }

    const onHamClick = (event) => {
      event.preventDefault();
      event.stopImmediatePropagation();
      if (mobNav.classList.contains('open')) close();
      else open();
    };

    // Capture-phase binding keeps legacy per-page hamburger handlers
    // from double-toggling the shared drawer.
    ham.addEventListener('click', onHamClick, true);

    overlay.addEventListener(
      'click',
      (event) => {
        event.stopImmediatePropagation();
        close();
      },
      true
    );

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && mobNav.classList.contains('open')) {
        close();
      }
    });

    mobNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener(
        'click',
        (event) => {
          event.stopImmediatePropagation();
          close();
        },
        true
      );
    });

    mobNav.querySelectorAll('.mob-parent').forEach((button) => {
      button.addEventListener(
        'click',
        (event) => {
          event.preventDefault();
          event.stopImmediatePropagation();
        const target = document.getElementById(button.getAttribute('data-target'));
        const isOpen = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', String(!isOpen));
        if (target) target.classList.toggle('open', !isOpen);
        },
        true
      );
    });
  }

  function initScrollBehavior() {
    const hdr = document.getElementById('hdr');
    if (!hdr) return;

    const toggleScrolled = () => {
      hdr.classList.toggle('scrolled', window.scrollY > 60);
    };

    toggleScrolled();
    window.addEventListener('scroll', toggleScrolled, { passive: true });
  }

  function initServicePairSync() {
    if (!document.body.classList.contains('page-service-template')) return;

    const desktopQuery = window.matchMedia('(min-width: 1121px)');

    const resetHeights = (elements) => {
      elements.forEach((el) => {
        if (!el) return;
        el.style.minHeight = '';
        el.style.height = '';
      });
    };

    const maxHeight = (elements) =>
      Math.max(
        0,
        ...elements.map((el) => {
          if (!el) return 0;
          return el.getBoundingClientRect().height;
        })
      );

    const setExactHeight = (elements) => {
      const height = maxHeight(elements);
      elements.forEach((el) => {
        if (el) el.style.height = height ? `${height}px` : '';
      });
    };

    const syncPair = (grid) => {
      const left = grid.querySelector('.problem-card');
      const right = grid.querySelector('.solution-card');
      if (!left || !right) return;

      const leftLabel = left.querySelector('.stag-plain, .mini-label');
      const rightLabel = right.querySelector('.stag-plain, .mini-label');
      const leftHeading = left.querySelector('h2');
      const rightHeading = right.querySelector('h2');
      const leftIntro = left.querySelector(':scope > p');
      const rightIntro = right.querySelector(':scope > p');
      const leftItems = Array.from(left.querySelectorAll('.problem-list > li'));
      const rightItems = Array.from(right.querySelectorAll('.solution-list > li'));

      resetHeights([leftLabel, rightLabel, leftHeading, rightHeading, leftIntro, rightIntro]);
      resetHeights([...leftItems, ...rightItems]);
      resetHeights([left, right]);

      if (!desktopQuery.matches) return;

      setExactHeight([leftLabel, rightLabel]);
      setExactHeight([leftHeading, rightHeading]);
      setExactHeight([leftIntro, rightIntro]);

      const rowCount = Math.max(leftItems.length, rightItems.length);
      for (let i = 0; i < rowCount; i += 1) {
        setExactHeight([leftItems[i], rightItems[i]]);
      }

      setExactHeight([left, right]);
    };
    let rafId = null;
    const runSync = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        document.querySelectorAll('.split-grid').forEach(syncPair);
      });
    };

    runSync();
    window.addEventListener('resize', runSync, { passive: true });
    window.addEventListener('load', runSync, { once: true });
  }

  function initFaqs() {
    document.querySelectorAll('.faq-item').forEach((item) => {
      if (item.dataset.gsFaqBound) return;
      const trigger = item.querySelector('.faq-q');
      const panel = item.querySelector('.faq-a');
      if (!trigger) return;
      item.dataset.gsFaqBound = '1';

      const closeItem = (target) => {
        if (!target) return;
        target.classList.remove('on', 'open');
        const targetPanel = target.querySelector('.faq-a');
        if (targetPanel) targetPanel.style.maxHeight = '0px';
      };

      const openItem = (target) => {
        if (!target) return;
        target.classList.add('on', 'open');
        const targetPanel = target.querySelector('.faq-a');
        if (targetPanel) targetPanel.style.maxHeight = `${targetPanel.scrollHeight}px`;
      };

      if (panel && !(item.classList.contains('on') || item.classList.contains('open'))) {
        panel.style.maxHeight = '0px';
      }

      trigger.addEventListener(
        'click',
        (event) => {
          event.preventDefault();
          event.stopImmediatePropagation();

          const group =
            item.closest('.faq-grid, .faq-wrap, .faq-list, .faq-section') || item.parentElement;
        const isOpen = item.classList.contains('on') || item.classList.contains('open');

        if (group) {
          group.querySelectorAll('.faq-item').forEach((other) => {
            if (other !== item) closeItem(other);
          });
        }

          if (isOpen) {
            closeItem(item);
          } else {
            closeItem(item);
            openItem(item);
          }
        },
        true
      );
    });

    const syncOpenFaqHeights = () => {
      document.querySelectorAll('.faq-item.on, .faq-item.open').forEach((item) => {
        const panel = item.querySelector('.faq-a');
        if (panel) panel.style.maxHeight = `${panel.scrollHeight}px`;
      });
    };

    syncOpenFaqHeights();
    window.addEventListener('resize', syncOpenFaqHeights, { passive: true });
  }

  function initRevealBlocks() {
    const blocks = document.querySelectorAll('section, footer');
    if (!blocks.length) return;

    if (!('IntersectionObserver' in window)) {
      blocks.forEach((block) => block.classList.add('in-view'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' }
    );

    blocks.forEach((block) => observer.observe(block));
  }

  function initFaqHeadings() {
    const faqSections = document.querySelectorAll('#faq, .faq-sec');
    faqSections.forEach((section) => {
      const heading = section.querySelector('.sec-hd h2, h2');
      if (heading) heading.textContent = 'FAQs';
    });
  }

  function renderFooter() {
    const columns = globalFooter.columns
      .map((col) => {
        const links = col.links
          .map((link) => `<li><a href="${link.href}">${link.label}</a></li>`)
          .join('');
        return `<div class="ft-nav-col"><h4>${col.title}</h4><ul>${links}</ul></div>`;
      })
      .join('');

    const bottomLinks = globalFooter.bottomLinks
      .map((link) => `<a href="${link.href}">${link.label}</a>`)
      .join('');

    return `
      <footer class="site-footer">
        <div class="container">
          <div class="ft-wrap">
            <div class="ft-top">
              <div class="ft-brand-panel">
                <div class="ft-logo">
                  <img class="ft-logo-image" src="/assets/images/logo.png" alt="GS ConsultPro" />
                </div>
                <div class="ft-tagline">${globalFooter.tagline}</div>
                <p class="ft-description">${globalFooter.description}</p>
                <div class="ft-contact-list">
                  <a href="${globalFooter.primaryEmailHref}">${globalFooter.primaryEmail}</a>
                  <span>${globalFooter.location}</span>
                </div>
                <a href="${globalFooter.footerCtaHref}" class="ft-btn">${globalFooter.footerCtaLabel}</a>
              </div>
              <div class="ft-links-grid">${columns}</div>
            </div>
            <div class="ft-bottom">
              <p>${globalFooter.copyright}</p>
              <div class="ft-bottom-links">${bottomLinks}</div>
            </div>
          </div>
        </div>
      </footer>
    `;
  }

  function mountFooter() {
    const footerMount = document.getElementById('site-footer');
    if (footerMount) footerMount.outerHTML = renderFooter();
  }

  const headerMount = document.getElementById('site-header');
  if (headerMount) headerMount.outerHTML = renderHeader();

  mountFooter();

  if (document.readyState === 'loading') {
    document.addEventListener(
      'DOMContentLoaded',
      () => {
        initHamburger();
        initScrollBehavior();
        initServicePairSync();
        initFaqs();
        initFaqHeadings();
        initRevealBlocks();
        mountFooter();
      },
      { once: true }
    );
  } else {
    initHamburger();
    initScrollBehavior();
    initServicePairSync();
    initFaqs();
    initFaqHeadings();
    initRevealBlocks();
    mountFooter();
  }
})();
