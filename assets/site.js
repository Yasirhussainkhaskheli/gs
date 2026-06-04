(() => {
  const config = window.gsSiteComponents || {};
  const globalServiceMenus = [
    {
      href: '/web-design-development-singapore/',
      label: 'Web Design',
      children: [
        { href: '/ecommerce-website-development-singapore/', label: 'E-commerce Website Development' },
        { href: '/shopify-development-services-singapore/', label: 'Shopify Development' },
        { href: '/wordpress-website-development-singapore/', label: 'WordPress Website Development' },
        { href: '/bigcommerce-development-services-singapore/', label: 'BigCommerce Development' },
        { href: '/landing-page-development-singapore/', label: 'Landing Page Development' },
        { href: '/website-ui-ux-design-services-singapore/', label: 'Website UI/UX' },
        { href: '/website-maintenance-services-singapore/', label: 'Website Maintenance' }
      ]
    },
    {
      href: '/seo-services-singapore/',
      label: 'SEO',
      children: [
        { href: 'technical-/seo-services-singapore/', label: 'Technical SEO' },
        { href: '/on-page-semantic-seo-services-singapore/', label: 'On-Page & Semantic SEO' },
        { href: '/off-page-seo-link-building-singapore/', label: 'Off-Page SEO & Link Building' },
        { href: '/local-seo-services-singapore/', label: 'Local SEO' },
        { href: '/international-seo-services-singapore/', label: 'International SEO' },
        { href: '/ecommerce-seo-services-singapore/', label: 'E-commerce SEO' },
        { href: 'shopify-/seo-services-singapore/', label: 'Shopify SEO' },
        { href: '/free-seo-audit-singapore/', label: 'Free SEO Audit' },
        { href: '/seo-packages-pricing-singapore/', label: 'SEO Packages & Pricing' }
      ]
    },
    {
      href: '/app-development-services-singapore/',
      label: 'App Development',
      children: [
        { href: '/custom-mobile-app-development-singapore/', label: 'Mobile App Development' },
        { href: '/react-native-app-development-singapore/', label: 'React Native Development' },
        { href: '/chatbot-development-services-singapore/', label: 'Chatbot Development' }
      ]
    },
    {
      href: '/lead-generation-services-singapore/',
      label: 'Lead Generation & Growth',
      children: [
        { href: '/b2b-lead-generation-services-singapore/', label: 'B2B Lead Generation' },
        { href: '/lead-generation-services-singapore/', label: 'Sales Automation' }
      ]
    },
    {
      href: '/content-creation-services-singapore/',
      label: 'Content Creation',
      children: [
        { href: '/content-marketing-services-singapore/', label: 'Content Marketing Strategy' },
        { href: '/blog-writing-services-singapore/', label: 'Blog Writing Services' },
        { href: '/social-media-content-services-singapore/', label: 'Social Media Content' }
      ]
    },
    {
      href: '/paid-media-social-advertising-singapore/',
      label: 'Paid Media & Social',
      children: [
        { href: '/google-ads-ppc-services-singapore/', label: 'Google Ads (PPC)' },
        { href: '/social-media-marketing-services-singapore/', label: 'Social Media Marketing' }
      ]
    },
    {
      href: '/services/',
      label: 'Strategy & Engagement',
      children: [
        { href: '/tradeshow-exhibitor-strategy-singapore/', label: 'Trade Show & Exhibitor Strategy' },
        { href: '/strategic-partnership-consulting-singapore/', label: 'Strategic Partnerships' },
        { href: '/corporate-sales-training-workshops-singapore/', label: 'Corporate Training & Workshops' }
      ]
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
    { href: '/web-design-development-singapore/', label: 'Web Design' },
    { type: 'label', label: 'Web Services' },
    { href: '/ecommerce-website-development-singapore/', label: 'E-commerce Website Development' },
    { href: '/shopify-development-services-singapore/', label: 'Shopify Development' },
    { href: '/wordpress-website-development-singapore/', label: 'WordPress Website Development' },
    { href: '/bigcommerce-development-services-singapore/', label: 'BigCommerce Development' },
    { href: '/landing-page-development-singapore/', label: 'Landing Page Development' },
    { href: '/website-ui-ux-design-services-singapore/', label: 'Website UI/UX' },
    { href: '/website-maintenance-services-singapore/', label: 'Website Maintenance' },
    { href: '/seo-services-singapore/', label: 'SEO' },
    { type: 'label', label: 'SEO Services' },
    { href: 'technical-/seo-services-singapore/', label: 'Technical SEO' },
    { href: '/on-page-semantic-seo-services-singapore/', label: 'On-Page & Semantic SEO' },
    { href: '/off-page-seo-link-building-singapore/', label: 'Off-Page SEO & Link Building' },
    { href: '/local-seo-services-singapore/', label: 'Local SEO' },
    { href: '/international-seo-services-singapore/', label: 'International SEO' },
    { href: '/ecommerce-seo-services-singapore/', label: 'E-commerce SEO' },
    { href: 'shopify-/seo-services-singapore/', label: 'Shopify SEO' },
    { href: '/free-seo-audit-singapore/', label: 'Free SEO Audit' },
    { href: '/seo-packages-pricing-singapore/', label: 'SEO Packages & Pricing' },
    { href: '/app-development-services-singapore/', label: 'App Development' },
    { type: 'label', label: 'App Services' },
    { href: '/custom-mobile-app-development-singapore/', label: 'Mobile App Development' },
    { href: '/react-native-app-development-singapore/', label: 'React Native Development' },
    { href: '/chatbot-development-services-singapore/', label: 'Chatbot Development' },
    { href: '/lead-generation-services-singapore/', label: 'Lead Generation & Growth' },
    { type: 'label', label: 'Growth Services' },
    { href: '/b2b-lead-generation-services-singapore/', label: 'B2B Lead Generation' },
    { href: '/lead-generation-services-singapore/', label: 'Sales Automation' },
    { href: '/content-creation-services-singapore/', label: 'Content Creation' },
    { type: 'label', label: 'Content Services' },
    { href: '/content-marketing-services-singapore/', label: 'Content Marketing Strategy' },
    { href: '/blog-writing-services-singapore/', label: 'Blog Writing Services' },
    { href: '/social-media-content-services-singapore/', label: 'Social Media Content' },
    { href: '/paid-media-social-advertising-singapore/', label: 'Paid Media & Social' },
    { type: 'label', label: 'Paid Media Services' },
    { href: '/google-ads-ppc-services-singapore/', label: 'Google Ads (PPC)' },
    { href: '/social-media-marketing-services-singapore/', label: 'Social Media Marketing' },
    { href: '/services/', label: 'Strategy & Engagement' },
    { type: 'label', label: 'Strategy & Engagement Services' },
    { href: '/tradeshow-exhibitor-strategy-singapore/', label: 'Trade Show & Exhibitor Strategy' },
    { href: '/strategic-partnership-consulting-singapore/', label: 'Strategic Partnerships' },
    { href: '/corporate-sales-training-workshops-singapore/', label: 'Corporate Training & Workshops' },
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
