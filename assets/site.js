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

    // ✅ FIX: Services dropdown added safely (NO UI change except expansion)
    { label: 'Services', children: globalServiceMenus },

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
        return '<li><a href="' + child.href + '">' + child.label + '</a></li>';
      }).join('');

      return '<li><a href="' + href + '">' + label + ' <span class="arr"></span></a><ul class="drop">' + childLinks + '</ul></li>';
    }).join('');
  }

  /* =========================
     MOBILE MENU (ONLY FIXED PART)
     ========================= */
  function renderMobileLinks(items) {
    var ls = 'display:block;padding:12px 32px;color:#1f2937;font-size:15px;font-weight:500;border-bottom:1px solid #e5e7eb;text-decoration:none;';

    return items.map(function(item, i) {
      var hasChildren = Array.isArray(item.children) && item.children.length;

      // normal link
      if (!hasChildren) {
        return '<a href="' + (item.href || '#') + '" style="' + ls + '">' + item.label + '</a>';
      }

      // dropdown parent (SAME STYLE AS YOUR LINKS)
      var children = item.children.map(function(c) {
        return '<a href="' + c.href + '" style="' +
          'display:block;padding:10px 48px;color:#374151;font-size:14px;text-decoration:none;border-bottom:1px solid #f1f5f9;">' +
          c.label + '</a>';
      }).join('');

      return (
        '<div>' +
          '<div class="mob-parent" data-id="mob-' + i + '" style="' + ls + 'cursor:pointer;display:flex;justify-content:space-between;align-items:center;">' +
            '<span>' + item.label + '</span>' +
            '<span>▾</span>' +
          '</div>' +
          '<div id="mob-' + i + '" style="display:none;background:#f9fafb;">' +
            children +
          '</div>' +
        '</div>'
      );
    }).join('');
  }

  /* =========================
     HEADER (UNCHANGED)
     ========================= */
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
        return '<li><a href="' + child.href + '">' + child.label + '</a></li>';
      }).join('');

      return '<li><a href="' + href + '">' + label + ' <span class="arr"></span></a><ul class="drop">' + childLinks + '</ul></li>';
    }).join('');
  }

  function renderHeaderDesktopHamburger() {
    var isHome = getIsHomePage();
    var ss = 'display:block;width:22px;height:2px;background:#fff;border-radius:2px;transition:background .28s;';

    return (
      '<header id="hdr"' + (isHome ? '' : ' class="inner-page-header"') + '>' +
      '<div class="nav-bg"><nav>' +
      '<a href="/" class="logo">' +
      '<img src="/assets/images/logo.png" style="height:100px;width:auto;display:block;"></a>' +

      '<div class="nav-end">' +
      '<button id="ham" aria-label="Menu" style="display:flex;flex-direction:column;gap:5px;cursor:pointer;padding:4px;background:none;border:none;">' +
      '<span style="' + ss + '"></span>' +
      '<span style="' + ss + '"></span>' +
      '<span style="' + ss + '"></span>' +
      '</button>' +
      '</div>' +

      '</nav></div></header>' +

      '<div id="mobNav" style="display:none;position:fixed;top:0;left:0;width:300px;height:100vh;background:#fff;z-index:1001;padding:80px 0 28px;overflow-y:auto;">' +
      renderMobileLinks(globalMobileMenuLinks) +
      '<div style="padding:20px;"><a href="/contact/#contact-form" class="btn-primary">Get a Free Quote</a></div>' +
      '</div>'
    );
  }

  function renderHeader() {
    return renderHeaderDesktopHamburger();
  }

  /* =========================
     HAMBURGER LOGIC (FIXED ONLY)
     ========================= */
  function initHamburger() {
    var ham = document.getElementById('ham');
    var mobNav = document.getElementById('mobNav');
    if (!ham || !mobNav || ham.dataset.gsBound) return;
    ham.dataset.gsBound = '1';

    var overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.45);z-index:1000;display:none;';
    document.body.appendChild(overlay);

    function open() {
      mobNav.style.display = 'block';
      overlay.style.display = 'block';
      document.body.style.overflow = 'hidden';
    }

    function close() {
      mobNav.style.display = 'none';
      overlay.style.display = 'none';
      document.body.style.overflow = '';
    }

    ham.addEventListener('click', function() {
      mobNav.style.display === 'block' ? close() : open();
    });

    overlay.addEventListener('click', close);

    mobNav.querySelectorAll('a').forEach(function(a) {
      a.addEventListener('click', close);
    });

    // ✅ SERVICES DROPDOWN (SAFE ADDITION)
    mobNav.querySelectorAll('.mob-parent').forEach(function(el) {
      el.addEventListener('click', function() {
        var id = el.getAttribute('data-id');
        var target = document.getElementById(id);
        if (!target) return;

        target.style.display = target.style.display === 'block' ? 'none' : 'block';
      });
    });
  }

  function initScrollBehavior() {
    var hdr = document.getElementById('hdr');
    if (!hdr) return;

    window.addEventListener('scroll', function() {
      hdr.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });
  }

  /* =========================
     FOOTER (UNCHANGED 100%)
     ========================= */
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
      '<div class="ft-logo"><img src="/assets/images/logo.png" style="height:100px;width:auto;display:block;"></div>' +
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

  function mountFooter() {
    var footerMount = document.getElementById('site-footer');
    if (footerMount) footerMount.outerHTML = renderFooter();
  }

  /* =========================
     MOUNT
     ========================= */
  var headerMount = document.getElementById('site-header');
  if (headerMount) headerMount.outerHTML = renderHeader();

  mountFooter();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initHamburger();
      initScrollBehavior();
      mountFooter();
    }, { once: true });
  } else {
    initHamburger();
    initScrollBehavior();
    mountFooter();
  }
})();