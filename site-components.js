(() => {
  const config = window.gsSiteComponents || {};
  const sharedMenuCss = `
.nav-ul>li{position:relative}
.arr{width:7px;height:7px;border-right:1.5px solid currentColor;border-bottom:1.5px solid currentColor;transform:rotate(45deg);margin-top:-3px;transition:transform .2s;flex-shrink:0}
.nav-ul>li:hover>a .arr{transform:rotate(-135deg);margin-top:2px}
.drop{position:absolute;top:100%;left:0;background:#fff;min-width:250px;box-shadow:0 20px 60px rgba(0,0,0,.13);border-top:3px solid var(--accent,#2d8cff);border-radius:0 0 10px 10px;padding:8px 0;opacity:0;visibility:hidden;transform:translateY(10px);transition:all .28s cubic-bezier(.4,0,.2,1);z-index:100}
.nav-ul>li:hover .drop{opacity:1;visibility:visible;transform:translateY(0)}
.drop li{display:block}
.drop a{display:block;padding:10px 20px;color:var(--text2,#1f2937);font-size:14px;font-weight:500;transition:all .28s cubic-bezier(.4,0,.2,1);white-space:nowrap}
.drop a:hover{color:var(--accent,#2d8cff);background:var(--light,#f8fafc);padding-left:26px}
.mob-group-label{display:block;padding:12px 32px 8px;color:var(--muted2,#64748b);font-size:11px;font-weight:700;letter-spacing:1.8px;text-transform:uppercase}
`;
  const globalDesktopMenus = [
    {
      href: 'web-design-development-singapore.html',
      label: 'Web Design',
      children: [
        { href: 'ecommerce-website-development-singapore.html', label: 'E-commerce Website Development' },
        { href: 'shopify-development-services-singapore.html', label: 'Shopify Development' },
        { href: 'wordpress-website-development-singapore.html', label: 'WordPress Website Development' },
        { href: 'bigcommerce-development-services-singapore.html', label: 'BigCommerce Development' },
        { href: 'landing-page-development-singapore.html', label: 'Landing Page Development' },
        { href: 'website-ui-ux-design-services-singapore.html', label: 'Website UI/UX' },
        { href: 'website-maintenance-services-singapore.html', label: 'Website Maintenance' }
      ]
    },
    {
      href: 'seo-services-singapore.html',
      label: 'SEO',
      children: [
        { href: 'technical-seo-services-singapore.html', label: 'Technical SEO' },
        { href: 'on-page-semantic-seo-services-singapore.html', label: 'On-Page & Semantic SEO' },
        { href: 'off-page-seo-link-building-singapore.html', label: 'Off-Page SEO & Link Building' },
        { href: 'local-seo-services-singapore.html', label: 'Local SEO' },
        { href: 'international-seo-services-singapore.html', label: 'International SEO' },
        { href: 'ecommerce-seo-services-singapore.html', label: 'E-commerce SEO' },
        { href: 'shopify-seo-services-singapore.html', label: 'Shopify SEO' },
        { href: 'free-seo-audit-singapore.html', label: 'Free SEO Audit' },
        { href: 'seo-packages-pricing-singapore.html', label: 'SEO Packages & Pricing' }
      ]
    },
    {
      href: 'app-development-services-singapore.html',
      label: 'App Development',
      children: [
        { href: 'custom-mobile-app-development-singapore.html', label: 'Mobile App Development' },
        { href: 'react-native-app-development-singapore.html', label: 'React Native Development' },
        { href: 'chatbot-development-services-singapore.html', label: 'Chatbot Development' }
      ]
    },
    {
      href: 'lead-generation-services-singapore.html',
      label: 'Lead Generation & Growth',
      children: [
        { href: 'b2b-lead-generation-services-singapore.html', label: 'B2B Lead Generation' },
        { href: 'lead-generation-services-singapore.html', label: 'Sales Automation' }
      ]
    },
    {
      href: 'content-creation-services-singapore.html',
      label: 'Content Creation',
      children: [
        { href: 'content-marketing-services-singapore.html', label: 'Content Marketing Strategy' },
        { href: 'blog-writing-services-singapore.html', label: 'Blog Writing Services' },
        { href: 'social-media-content-services-singapore.html', label: 'Social Media Content' }
      ]
    },
    {
      href: 'paid-media-social-advertising-singapore.html',
      label: 'Paid Media & Social',
      children: [
        { href: 'google-ads-ppc-services-singapore.html', label: 'Google Ads (PPC)' },
        { href: 'social-media-marketing-services-singapore.html', label: 'Social Media Marketing' }
      ]
    }
  ];
  const globalUtilityLinks = [
    { href: 'about.html', label: 'About' },
    { href: 'contact.html', label: 'Contact' }
  ];
  const globalMobileMenus = [
    { href: 'index.html', label: 'Home' },
    { href: 'web-design-development-singapore.html', label: 'Web Design' },
    { type: 'label', label: 'Web Services' },
    { href: 'ecommerce-website-development-singapore.html', label: 'E-commerce Website Development' },
    { href: 'shopify-development-services-singapore.html', label: 'Shopify Development' },
    { href: 'wordpress-website-development-singapore.html', label: 'WordPress Website Development' },
    { href: 'bigcommerce-development-services-singapore.html', label: 'BigCommerce Development' },
    { href: 'landing-page-development-singapore.html', label: 'Landing Page Development' },
    { href: 'website-ui-ux-design-services-singapore.html', label: 'Website UI/UX' },
    { href: 'website-maintenance-services-singapore.html', label: 'Website Maintenance' },
    { href: 'seo-services-singapore.html', label: 'SEO' },
    { type: 'label', label: 'SEO Services' },
    { href: 'technical-seo-services-singapore.html', label: 'Technical SEO' },
    { href: 'on-page-semantic-seo-services-singapore.html', label: 'On-Page & Semantic SEO' },
    { href: 'off-page-seo-link-building-singapore.html', label: 'Off-Page SEO & Link Building' },
    { href: 'local-seo-services-singapore.html', label: 'Local SEO' },
    { href: 'international-seo-services-singapore.html', label: 'International SEO' },
    { href: 'ecommerce-seo-services-singapore.html', label: 'E-commerce SEO' },
    { href: 'shopify-seo-services-singapore.html', label: 'Shopify SEO' },
    { href: 'free-seo-audit-singapore.html', label: 'Free SEO Audit' },
    { href: 'seo-packages-pricing-singapore.html', label: 'SEO Packages & Pricing' },
    { href: 'app-development-services-singapore.html', label: 'App Development' },
    { type: 'label', label: 'App Services' },
    { href: 'custom-mobile-app-development-singapore.html', label: 'Mobile App Development' },
    { href: 'react-native-app-development-singapore.html', label: 'React Native Development' },
    { href: 'chatbot-development-services-singapore.html', label: 'Chatbot Development' },
    { href: 'lead-generation-services-singapore.html', label: 'Lead Generation & Growth' },
    { type: 'label', label: 'Growth Services' },
    { href: 'b2b-lead-generation-services-singapore.html', label: 'B2B Lead Generation' },
    { href: 'lead-generation-services-singapore.html', label: 'Sales Automation' },
    { href: 'content-creation-services-singapore.html', label: 'Content Creation' },
    { type: 'label', label: 'Content Services' },
    { href: 'content-marketing-services-singapore.html', label: 'Content Marketing Strategy' },
    { href: 'blog-writing-services-singapore.html', label: 'Blog Writing Services' },
    { href: 'social-media-content-services-singapore.html', label: 'Social Media Content' },
    { href: 'paid-media-social-advertising-singapore.html', label: 'Paid Media & Social' },
    { type: 'label', label: 'Paid Media Services' },
    { href: 'google-ads-ppc-services-singapore.html', label: 'Google Ads (PPC)' },
    { href: 'social-media-marketing-services-singapore.html', label: 'Social Media Marketing' },
    { href: 'about.html', label: 'About' },
    { href: 'contact.html', label: 'Contact' }
  ];
  const replaceDesktopLabels = new Set(['SEO', 'Services', 'App Development', 'Lead Generation & Growth', 'Content Creation', 'Paid Media & Social']);
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
    'FAQs',
    'About',
    'Contact',
    'Get In Touch'
  ]);

  function injectGlobalDesktopMenus(items = []) {
    return [...globalDesktopMenus, ...globalUtilityLinks];
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
        .map((child) => `<li><a href="${child.href || '#'}">${child.label || ''}</a></li>`)
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

    const logoHref = header.logoHref || 'index.html';
    const logoText = header.logoText || 'GS ConsultPro';
    const displayLogoText = getDisplayBrandName(logoText);
    const hamId = header.hamId || 'ham';
    const navAttrs = header.navAriaLabel ? ` aria-label="${header.navAriaLabel}"` : '';
    const headerCta = '';
    const desktopLinks = injectGlobalDesktopMenus(header.desktopLinks || []);
    const mobileCta = null;
    const mobileLinks = injectGlobalMobileMenus(header.mobileLinks || []);
    const mobileCtaHtml = mobileCta
      ? `<div class="mob-cta"><a href="${mobileCta.href || '#'}" class="btn-primary"${header.mobileCtaInlineFlex ? ' style="display:inline-flex"' : ''}>${mobileCta.label || ''}</a></div>`
      : '';

    return `
<header id="hdr">
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
  if (!document.getElementById('gs-shared-menu-styles')) {
    const style = document.createElement('style');
    style.id = 'gs-shared-menu-styles';
    style.textContent = sharedMenuCss;
    document.head.appendChild(style);
  }
  if (headerMount) {
    headerMount.outerHTML = renderHeader(config.header);
  }

  const footerMount = document.getElementById('site-footer');
  if (footerMount) {
    footerMount.outerHTML = renderFooter(config.footer);
  }
})();
