(() => {
  const config = window.gsSiteComponents || {};

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
    { href: '/services/', label: 'Services', children: globalServiceMenus }
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
    location: 'Singapore \u2022 Serving APAC',
    footerCtaLabel: 'Book a Consultation',
    footerCtaHref: '/contact/#contact-form',
    columns: [
      {
        title: 'Growth & Marketing',
        links: [
          { href: '/seo-services-singapore/', label: 'SEO' },
          { href: '/content-creation-services-singapore/', label: 'Content Strategy & Writing' },
          { href: '/paid-media-social-advertising-singapore/', label: 'Paid Media & Social Advertising' }
        ]
      },
      {
        title: 'Web & Development',
        links: [
          { href: '/lead-generation-services-singapore/', label: 'B2B Lead Generation & Sales Automation' },
          { href: '/web-design-development-singapore/', label: 'Web Design & Development' },
          { href: '/app-development-services-singapore/', label: 'App Development & AI Solutions' }
        ]
      },
      {
        title: 'Consulting & Training',
        links: [
          { href: '/strategic-partnership-consulting-singapore/', label: 'Strategic Partnerships' },
          { href: '/corporate-sales-training-workshops-singapore/', label: 'Corporate Training & Workshops' },
          { href: '/tradeshow-exhibitor-strategy-singapore/', label: 'Trade Show & Exhibitor Strategy' }
        ]
      }
    ],
    copyright: '\u00a9 2026 GS ConsultPro. All rights reserved.',
    bottomLinks: [
      { href: '/privacy-policy/', label: 'Privacy Policy' }
    ]
  };

  const globalMobileMenuLinks = [
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

  function getIsHomePage() {
    return (
      /(^|\/)index\.html$/i.test(window.location.pathname) ||
      window.location.pathname === '/' ||
      window.location.pathname === ''
    );
  }

  function renderDesktopLinks(items) {
    return items.map(function(item) {
      var children = Array.isArray(item.children) ? item.children : [];
      var label = item.label || '';
      var href = item.href || '#';
      if (!children.length) {
        return '<li><a href="' + href + '">' + label + '</a></li>';
      }
      var childLinks = children.map(function(child) {
        var grandChildren = Array.isArray(child.children) ? child.children : [];
        if (!grandChildren.length) {
          return '<li><a href="' + (child.href || '#') + '">' + (child.label || '') + '</a></li>';
        }
        var gcLinks = grandChildren.map(function(gc) {
          return '<li><a href="' + (gc.href || '#') + '">' + (gc.label || '') + '</a></li>';
        }).join('');
        return '<li class="has-children"><a href="' + (child.href || '#') + '">' + (child.label || '') + '</a><ul class="drop drop-sub">' + gcLinks + '</ul></li>';
      }).join('');
      return '<li><a href="' + href + '">' + label + ' <span class="arr"></span></a><ul class="drop">' + childLinks + '</ul></li>';
    }).join('');
  }

  function renderMobileLinks(items) {
    var ls = 'display:block;padding:12px 32px;color:#1f2937;font-size:15px;font-weight:500;border-bottom:1px solid #e5e7eb;text-decoration:none;transition:color .2s;';
    return items.map(function(item) {
      return '<a href="' + (item.href || '#') + '" style="' + ls + '">' + (item.label || '') + '</a>';
    }).join('');
  }

  /* ============================================================
     OPTION A: Full desktop navbar
     ============================================================ */
  function renderHeaderDesktopNav() {
    var isHome = getIsHomePage();
    var desktopLinks = [{ href: '/', label: 'Home' }].concat(globalDesktopMenus).concat(globalUtilityLinks);
    return (
      '<header id="hdr"' + (isHome ? '' : ' class="inner-page-header"') + '>' +
      '<div class="nav-bg"><nav>' +
      '<a href="/" class="logo" aria-label="GS ConsultPro home">' +
      '<img src="/assets/images/logo.png" alt="GS ConsultPro" style="height:100px;width:auto;display:block;"></a>' +
      '<ul class="nav-ul">' + renderDesktopLinks(desktopLinks) + '</ul>' +
      '<div class="nav-end">' +
      '<button class="ham" id="ham" aria-label="Menu" style="display:none;"><span></span><span></span><span></span></button>' +
      '</div></nav></div></header>' +
      '<div class="mob-nav" id="mobNav">' +
      renderMobileLinks(globalMobileMenuLinks) +
      '<div class="mob-cta"><a href="/contact/#contact-form" class="btn-primary">Get a Free Quote</a></div>' +
      '</div>'
    );
  }

  /* ============================================================
     OPTION B: Hamburger on all screen sizes
     ============================================================ */
  function renderHeaderDesktopHamburger() {
    var isHome = getIsHomePage();
    var ss = 'display:block;width:22px;height:2px;background:#0b1220;border-radius:2px;';
    return (
      '<header id="hdr"' + (isHome ? '' : ' class="inner-page-header"') + '>' +
      '<div class="nav-bg"><nav>' +
      '<a href="/" class="logo" aria-label="GS ConsultPro home">' +
      '<img src="/assets/images/logo.png" alt="GS ConsultPro" style="height:100px;width:auto;display:block;"></a>' +
      '<div class="nav-end">' +
      '<button id="ham" aria-label="Menu" style="display:flex;flex-direction:column;gap:5px;cursor:pointer;padding:4px;background:none;border:none;">' +
      '<span style="' + ss + '"></span>' +
      '<span style="' + ss + '"></span>' +
      '<span style="' + ss + '"></span>' +
      '</button>' +
      '</div></nav></div></header>' +
      '<div id="mobNav" style="display:none;position:fixed;top:0;left:0;width:300px;height:100vh;background:#fff;z-index:1001;padding:80px 0 28px;overflow-y:auto;box-shadow:4px 0 24px rgba(15,23,42,.13);border-right:1px solid #e5e7eb;">' +
      renderMobileLinks(globalMobileMenuLinks) +
      '<div class="mob-cta"><a href="/contact/#contact-form" class="btn-primary">Get a Free Quote</a></div>' +
      '</div>'
    );
  }

  /* ============================================================
     ACTIVE — swap function name to switch modes
     ============================================================ */
  function renderHeader() {
    // return renderHeaderDesktopNav();
    return renderHeaderDesktopHamburger();
  }

  function renderFooter() {
    var f = globalFooter;
    var columns = f.columns.map(function(col) {
      var links = col.links.map(function(link) {
        return '<li><a href="' + link.href + '">' + link.label + '</a></li>';
      }).join('');
      return '<div class="ft-nav-col"><h4>' + col.title + '</h4><ul>' + links + '</ul></div>';
    }).join('');
    var bottomLinks = f.bottomLinks.map(function(link) {
      return '<a href="' + link.href + '">' + link.label + '</a>';
    }).join('');
    return (
      '<footer class="site-footer"><div class="container"><div class="ft-wrap"><div class="ft-top">' +
      '<div class="ft-brand-panel">' +
      '<div class="ft-logo"><img src="/assets/images/logo.png" alt="GS ConsultPro" style="height:100px;width:auto;display:block;"></div>' +
      '<div class="ft-tagline">' + f.tagline + '</div>' +
      '<p class="ft-description">' + f.description + '</p>' +
      '<div class="ft-contact-list"><a href="' + f.primaryEmailHref + '">' + f.primaryEmail + '</a><span>' + f.location + '</span></div>' +
      '<a href="' + f.footerCtaHref + '" class="ft-btn">' + f.footerCtaLabel + '</a>' +
      '</div>' +
      '<div class="ft-links-grid">' + columns + '</div>' +
      '</div>' +
      '<div class="ft-bottom"><p>' + f.copyright + '</p><div class="ft-bottom-links">' + bottomLinks + '</div></div>' +
      '</div></div></div></footer>'
    );
  }

  function initHamburger() {
    var ham = document.getElementById('ham');
    var mobNav = document.getElementById('mobNav');
    if (!ham || !mobNav || ham.dataset.gsBound) return;
    ham.dataset.gsBound = 'true';

    // Create overlay
    var overlay = document.createElement('div');
    overlay.id = 'drawerOverlay';
    overlay.style.cssText = 'display:none;position:fixed;inset:0;background:rgba(0,0,0,0.45);z-index:1000;';
    document.body.appendChild(overlay);

    function openDrawer() {
      mobNav.style.display = 'block';
      overlay.style.display = 'block';
      document.body.style.overflow = 'hidden';
      var spans = ham.querySelectorAll('span');
      if (spans[0]) spans[0].style.transform = 'rotate(45deg) translate(5px,5px)';
      if (spans[1]) spans[1].style.opacity = '0';
      if (spans[2]) spans[2].style.transform = 'rotate(-45deg) translate(5px,-5px)';
    }

    function closeDrawer() {
      mobNav.style.display = 'none';
      overlay.style.display = 'none';
      document.body.style.overflow = '';
      var spans = ham.querySelectorAll('span');
      if (spans[0]) spans[0].style.transform = '';
      if (spans[1]) spans[1].style.opacity = '1';
      if (spans[2]) spans[2].style.transform = '';
    }

    ham.addEventListener('click', function() {
      mobNav.style.display === 'block' ? closeDrawer() : openDrawer();
    });

    overlay.addEventListener('click', closeDrawer);

    mobNav.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', closeDrawer);
    });
  }

    function initScrollBehavior() {
    var hdr = document.getElementById('hdr');
    if (!hdr) return;
    var syncScroll = function() {
      hdr.classList.toggle('scrolled', window.scrollY > 60);
    };
    syncScroll();
    window.addEventListener('scroll', syncScroll, { passive: true });
  }

  // Mount header
  var headerMount = document.getElementById('site-header');
  if (headerMount) {
    headerMount.outerHTML = renderHeader();
  }

  // Mount footer
  function mountFooter() {
    var footerMount = document.getElementById('site-footer');
    if (footerMount) {
      footerMount.outerHTML = renderFooter();
    }
  }
  mountFooter();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initScrollBehavior();
      initHamburger();
      mountFooter();
    }, { once: true });
  } else {
    initScrollBehavior();
    initHamburger();
    mountFooter();
  }
})();