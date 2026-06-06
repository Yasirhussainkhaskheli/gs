(() => {
  const config = window.gsSiteComponents || {};
  const globalServiceMenus = [
    {
      href: '/seo-services-singapore/',
      label: 'SEO'
    },
    {
      href: '/content-creation-services-singapore/',
      label: 'Content Strategy & Writing'
    },
    {
      href: '/paid-media-social-advertising-singapore/',
      label: 'Paid Media & Social Advertising'
    },
    {
      href: '/lead-generation-services-singapore/',
      label: 'B2B Lead Generation & Sales Automation'
    },
    {
      href: '/web-design-development-singapore/',
      label: 'Web Design & Development'
    },
    {
      href: '/app-development-services-singapore/',
      label: 'App Development & AI Solutions'
    },
    {
      href: '/strategic-partnership-consulting-singapore/',
      label: 'Strategic Partnerships'
    },
    {
      href: '/corporate-sales-training-workshops-singapore/',
      label: 'Corporate Training & Workshops'
    },
    {
      href: '/tradeshow-exhibitor-strategy-singapore/',
      label: 'Trade Show & Exhibitor Strategy'
    }
  ];
  const globalDesktopMenus = [
    {
      href: '/services/',
      label: 'Services',
      children: globalServiceMenus
    }
  ];
  const globalUtilityLinks = [
    { href: '/about/', label: 'About' },
    { href: '/blog/', label: 'Blog' },
    { href: '/contact/', label: 'Contact' }
  ];
  const globalFooter = {
    brandName: 'GS ConsultPro',
    tagline: 'Strategy-Led Growth Across Singapore & APAC',
    description: 'GS ConsultPro helps businesses strengthen visibility, generate demand, and build scalable growth systems through strategy, digital execution, automation, and market engagement.',
    primaryEmail: 'hello@gsconsultpro.com',
    primaryEmailHref: 'mailto:hello@gsconsultpro.com',
    location: 'Singapore • Serving APAC',
    footerCtaLabel: 'Get a Free Quote',
    footerCtaHref: '/contact/#contact-form',
    columns: [
      {
        title: 'Services',
        links: [
          { href: '/seo-services-singapore/', label: 'SEO' },
          { href: '/content-creation-services-singapore/', label: 'Content Strategy & Writing' },
          { href: '/paid-media-social-advertising-singapore/', label: 'Paid Media & Social Advertising' },
          { href: '/lead-generation-services-singapore/', label: 'B2B Lead Generation & Sales Automation' },
          { href: '/web-design-development-singapore/', label: 'Web Design & Development' },
          { href: '/app-development-services-singapore/', label: 'App Development & AI Solutions' },
          { href: '/strategic-partnership-consulting-singapore/', label: 'Strategic Partnerships' },
          { href: '/corporate-sales-training-workshops-singapore/', label: 'Corporate Training & Workshops' },
          { href: '/tradeshow-exhibitor-strategy-singapore/', label: 'Trade Show & Exhibitor Strategy' }
        ]
      },
      {
        title: 'Contact',
        links: [
          { href: 'mailto:hello@gsconsultpro.com', label: 'hello@gsconsultpro.com' },
          { href: '/contact/#contact-form', label: 'Get a Free Quote' },
          { href: '/contact/', label: 'Singapore • Serving APAC' }
        ]
      }
    ],
    copyright: '&copy; 2026 GS ConsultPro. All rights reserved.',
    bottomLinks: [
      { href: '/contact/', label: 'Privacy Policy' },
      { href: '/contact/', label: 'Terms of Service' },
      { href: '/services/', label: 'Sitemap' }
    ]
  };
  const globalMobileMenus = [
    { href: '/', label: 'Home' },
    { href: '/seo-services-singapore/', label: 'SEO' },
    { href: '/content-creation-services-singapore/', label: 'Content Strategy & Writing' },
    { href: '/paid-media-social-advertising-singapore/', label: 'Paid Media & Social Advertising' },
    { href: '/lead-generation-services-singapore/', label: 'B2B Lead Generation & Sales Automation' },
    { href: '/web-design-development-singapore/', label: 'Web Design & Development' },
    { href: '/app-development-services-singapore/', label: 'App Development & AI Solutions' },
    { href: '/strategic-partnership-consulting-singapore/', label: 'Strategic Partnerships' },
    { href: '/corporate-sales-training-workshops-singapore/', label: 'Corporate Training & Workshops' },
    { href: '/tradeshow-exhibitor-strategy-singapore/', label: 'Trade Show & Exhibitor Strategy' },
    { href: '/about/', label: 'About' },
    { href: '/blog/', label: 'Blog' },
    { href: '/contact/', label: 'Contact' }
  ];
  const defaultHeaderConfig = {
    logoHref: '/',
    logoText: 'GS ConsultPro',
    hamId: 'ham',
    hamAriaLabel: 'Menu',
    desktopLinks: [{ href: '/', label: 'Home' }],
    mobileLinks: [{ href: '/', label: 'Home' }]
  };
  const replaceDesktopLabels = new Set(['SEO', 'Services', 'App Development', 'Lead Generation & Growth', 'Content Creation', 'Paid Media & Social', 'Strategy & Engagement']);
  const removeDesktopLabels = new Set(['FAQs', 'About', 'Contact', 'Get In Touch']);
  const removeMobileLabels = new Set([
    'SEO',
    'Services',
    'All Services',
    'SEO Services',
    'SEO Page',
    'Technical SEO',
    'On-Page & Semantic SEO',
    'Off-Page SEO & Link Building',
    'Local SEO',
    'International SEO',
    'E-commerce SEO',
    'Shopify SEO',
    'Free SEO Audit',
    'SEO Packages & Pricing',
    'App Development',
    'App Services',
    'Mobile App Development',
    'React Native Development',
    'Chatbot Development',
    'Lead Generation & Growth',
    'Growth Services',
    'B2B Lead Generation',
    'Sales Automation',
    'Content Creation',
    'Content Services',
    'Content Marketing Strategy',
    'Blog Writing Services',
    'Social Media Content',
    'Paid Media & Social',
    'Paid Media Services',
    'Google Ads (PPC)',
    'Social Media Marketing',
    'Strategy & Engagement',
    'Strategy & Engagement Services',
    'Trade Show & Exhibitor Strategy',
    'Strategic Partnerships',
    'Corporate Training & Workshops',
    'FAQs',
    'About',
    'Contact',
    'Get In Touch'
  ]);

  function injectGlobalDesktopMenus(items = []) {
    const homeLink = items.find((item) => item && item.label === 'Home');
    return [...(homeLink ? [homeLink] : []), ...globalDesktopMenus, ...globalUtilityLinks];
  }

  function injectGlobalMobileMenus(items = []) {
    return [...globalMobileMenus];
  }

  function getDisplayBrandName(name = '') {
    return name.replace(/^GS\s+/i, '') || name;
  }

  function renderLinks(items = [], isMobile = false) {
    return items.map((item) => {
      if (item.type === 'label') {
        return `<span class="mob-group-label">${item.label || ''}</span>`;
      }

      const children = Array.isArray(item.children) ? item.children : [];
      const label = item.label || '';
      const href = item.href || '#';
      const hasChildren = children.length > 0;

      if (isMobile) {
        return `<a href="${href}">${label}</a>`;
      }

      if (!hasChildren) {
        return `<li><a href="${href}">${label}</a></li>`;
      }

      const childLinks = children
        .map((child) => {
          const grandChildren = Array.isArray(child.children) ? child.children : [];
          if (!grandChildren.length) {
            return `<li><a href="${child.href || '#'}">${child.label || ''}</a></li>`;
          }

          const grandChildLinks = grandChildren
            .map((grandChild) => `<li><a href="${grandChild.href || '#'}">${grandChild.label || ''}</a></li>`)
            .join('');

          return `
            <li class="has-children">
              <a href="${child.href || '#'}">${child.label || ''}</a>
              <ul class="drop drop-sub">
                ${grandChildLinks}
              </ul>
            </li>
          `;
        })
        .join('');

      return `
        <li>
          <a href="${href}">${label} <span class="arr"></span></a>
          <ul class="drop">
            ${childLinks}
          </ul>
        </li>
      `;
    }).join('');
  }

  function renderHeader(header) {
    const resolvedHeader = header || defaultHeaderConfig;

    const logoHref = resolvedHeader.logoHref || '/';
    const logoText = resolvedHeader.logoText || 'GS ConsultPro';
    const isHomePage = /(^|\/)index\.html$/i.test(window.location.pathname) || window.location.pathname === '/' || window.location.pathname === '';
    const displayLogoText = getDisplayBrandName(logoText);
    const hamId = resolvedHeader.hamId || 'ham';
    const navAttrs = resolvedHeader.navAriaLabel ? ` aria-label="${resolvedHeader.navAriaLabel}"` : '';
    const headerCtaConfig = { href: '/contact/#contact-form', label: 'Get a Free Quote' };
    const headerCta = `<a href="${headerCtaConfig.href}" class="btn-primary">${headerCtaConfig.label}</a>`;
    const desktopLinks = injectGlobalDesktopMenus(resolvedHeader.desktopLinks || []);
    const mobileCta = headerCtaConfig;
    const mobileLinks = injectGlobalMobileMenus(resolvedHeader.mobileLinks || []);
    const mobileCtaHtml = mobileCta
      ? `<div class="mob-cta"><a href="${mobileCta.href || '#'}" class="btn-primary"${resolvedHeader.mobileCtaInlineFlex ? ' style="display:inline-flex"' : ''}>${mobileCta.label || ''}</a></div>`
      : '';

    return `
<header id="hdr"${isHomePage ? '' : ' class="inner-page-header"'}>
  <div class="nav-bg">
    <nav${navAttrs}>
      <a href="${logoHref}" class="logo" aria-label="${logoText} home">
        <div class="logo-mark">GS</div>
        <span class="logo-txt">${displayLogoText}</span>
      </a>
      <ul class="nav-ul">
        ${renderLinks(desktopLinks, false)}
      </ul>
      <div class="nav-end">
        ${headerCta}
        <button class="ham" id="${hamId}" aria-label="${resolvedHeader.hamAriaLabel || 'Menu'}"${resolvedHeader.hamAriaExpanded ? ` aria-expanded="${resolvedHeader.hamAriaExpanded}"` : ''}${resolvedHeader.hamAriaControls ? ` aria-controls="${resolvedHeader.hamAriaControls}"` : ''}>
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  </div>
</header>

<div class="mob-nav" id="mobNav">
  ${renderLinks(mobileLinks, true)}
  ${mobileCtaHtml}
</div>`;
  }

  function renderFooter(footer) {
    const resolvedFooter = {
      ...globalFooter,
      columns: globalFooter.columns,
      bottomLinks: globalFooter.bottomLinks
    };

    const displayBrandName = getDisplayBrandName(resolvedFooter.brandName || 'GS ConsultPro');
    const columns = (resolvedFooter.columns || []).map((col) => {
      const links = (col.links || [])
        .map((link) => `<li><a href="${link.href || '#'}">${link.label || ''}</a></li>`)
        .join('');
      return `
      <div class="ft-nav-col">
        <h4>${col.title || ''}</h4>
        <ul>${links}</ul>
      </div>`;
    }).join('');

    const bottomLinks = (resolvedFooter.bottomLinks || [])
      .map((link) => `<a href="${link.href || '#'}">${link.label || ''}</a>`)
      .join('');

    return `
<footer class="site-footer">
  <div class="container">
    <div class="ft-wrap">
      <div class="ft-top">
        <div class="ft-brand-panel">
          <div class="ft-logo"><div class="ft-logo-mark">GS</div><span class="ft-logo-txt">${displayBrandName}</span></div>
          <div class="ft-tagline">${resolvedFooter.tagline || ''}</div>
          <p class="ft-description">${resolvedFooter.description || ''}</p>
          <div class="ft-contact-list">
            <a href="${resolvedFooter.primaryEmailHref || '#'}">${resolvedFooter.primaryEmail || ''}</a>
            <a href="/contact/#contact-form">Book a Consultation</a>
            <span>${resolvedFooter.location || ''}</span>
          </div>
          <a href="${resolvedFooter.footerCtaHref || '#'}" class="ft-btn">${resolvedFooter.footerCtaLabel || ''}</a>
        </div>
        <div class="ft-links-grid">
          ${columns}
        </div>
      </div>
      <div class="ft-bottom">
        <p>${resolvedFooter.copyright || '&copy; 2026 GS ConsultPro. All rights reserved.'}</p>
        <div class="ft-bottom-links">${bottomLinks}</div>
      </div>
    </div>
  </div>
</footer>`;
  }

  const headerMount = document.getElementById('site-header');
  if (headerMount) {
    headerMount.outerHTML = renderHeader(config.header);
  }

  function initHeaderBehavior() {
    const hdr = document.getElementById('hdr');
    const ham = document.querySelector('.ham');
    const mobNav = document.getElementById('mobNav');

    if (hdr) {
      const syncHeaderScroll = () => {
        hdr.classList.toggle('scrolled', window.scrollY > 60);
      };
      syncHeaderScroll();
      window.addEventListener('scroll', syncHeaderScroll, { passive: true });
    }

    if (ham && mobNav && !ham.dataset.gsBound) {
      ham.dataset.gsBound = 'true';
      ham.addEventListener('click', () => {
        const open = mobNav.classList.toggle('open');
        ham.classList.toggle('open', open);
        ham.setAttribute('aria-expanded', open ? 'true' : 'false');
      });

      mobNav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
          mobNav.classList.remove('open');
          ham.classList.remove('open');
          ham.setAttribute('aria-expanded', 'false');
        });
      });
    }
  }

  function mountFooter() {
    const footerMount = document.getElementById('site-footer');
    if (footerMount) {
      footerMount.outerHTML = renderFooter(config.footer);
    }
  }

  mountFooter();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initHeaderBehavior();
      mountFooter();
    }, { once: true });
  } else {
    initHeaderBehavior();
    mountFooter();
  }
})();
