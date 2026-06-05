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
    { href: '/contact/', label: 'Contact' }
  ];
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
    { href: '/contact/', label: 'Contact' }
  ];
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
    if (!header) return '';

    const logoHref = header.logoHref || '/';
    const logoText = header.logoText || 'GS ConsultPro';
    const isHomePage = /(^|\/)index\.html$/i.test(window.location.pathname) || window.location.pathname === '/' || window.location.pathname === '';
    const displayLogoText = getDisplayBrandName(logoText);
    const hamId = header.hamId || 'ham';
    const navAttrs = header.navAriaLabel ? ` aria-label="${header.navAriaLabel}"` : '';
    const headerCtaConfig = { href: '/contact/#contact-form', label: 'Get a Free Quote' };
    const headerCta = `<a href="${headerCtaConfig.href}" class="btn-primary">${headerCtaConfig.label}</a>`;
    const desktopLinks = injectGlobalDesktopMenus(header.desktopLinks || []);
    const mobileCta = headerCtaConfig;
    const mobileLinks = injectGlobalMobileMenus(header.mobileLinks || []);
    const mobileCtaHtml = mobileCta
      ? `<div class="mob-cta"><a href="${mobileCta.href || '#'}" class="btn-primary"${header.mobileCtaInlineFlex ? ' style="display:inline-flex"' : ''}>${mobileCta.label || ''}</a></div>`
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
        <button class="ham" id="${hamId}" aria-label="${header.hamAriaLabel || 'Menu'}"${header.hamAriaExpanded ? ` aria-expanded="${header.hamAriaExpanded}"` : ''}${header.hamAriaControls ? ` aria-controls="${header.hamAriaControls}"` : ''}>
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
    if (!footer) return '';

    const displayBrandName = getDisplayBrandName(footer.brandName || 'GS ConsultPro');
    const columns = (footer.columns || []).map((col) => {
      const links = (col.links || [])
        .map((link) => `<li><a href="${link.href || '#'}">${link.label || ''}</a></li>`)
        .join('');
      return `
      <div class="ft-col">
        <h4>${col.title || ''}</h4>
        <ul>${links}</ul>
      </div>`;
    }).join('');

    const socialLinks = (footer.socialLinks || []).length
      ? `<div class="social-row">${footer.socialLinks.map((link) => `<a href="${link.href || '#'}" class="soc" aria-label="${link.ariaLabel || link.label || ''}">${link.label || ''}</a>`).join('')}</div>`
      : '';

    const bottomLinks = (footer.bottomLinks || [])
      .map((link) => `<a href="${link.href || '#'}">${link.label || ''}</a>`)
      .join('');

    return `
<footer>
  <div class="container">
    <div class="ft-top">
      <div class="ft-brand">
        <div class="ft-logo"><div class="ft-logo-mark">GS</div><span class="ft-logo-txt">${displayBrandName}</span></div>
        <div class="ft-tagline">${footer.tagline || ''}</div>
        <p>${footer.description || ''}</p>
        ${socialLinks}
      </div>
      ${columns}
    </div>
    <div class="ft-bottom">
      <p>${footer.copyright || '&copy; 2026 GS ConsultPro. All rights reserved.'}</p>
      <div class="ft-links">${bottomLinks}</div>
    </div>
  </div>
</footer>`;
  }

  const headerMount = document.getElementById('site-header');
  if (headerMount) {
    headerMount.outerHTML = renderHeader(config.header);
  }

  const footerMount = document.getElementById('site-footer');
  if (footerMount) {
    footerMount.outerHTML = renderFooter(config.footer);
  }
})();
