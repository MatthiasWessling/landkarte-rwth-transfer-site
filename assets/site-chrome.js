/**
 * Shared header/footer i18n + language switching for portal pages.
 * Expects TRANSFER_I18N (+ site-i18n.js). Set data-site-page on <body>: home | map | contact | a11y
 */
(function (global) {
  const I18N = global.TRANSFER_I18N;
  if (!I18N) return;

  function applyPortalChrome(lang) {
    const t = I18N.ui(lang);
    const withLang = I18N.withLangParam;
    document.documentElement.lang = lang;

    const titleEl = document.querySelector("[data-site-doc-title]");
    if (titleEl && t.siteDocTitle) {
      document.title = titleEl.getAttribute("data-site-doc-title") === "map"
        ? t.docTitle
        : t.siteDocTitle;
    } else if (document.body && document.body.dataset.sitePage === "home") {
      document.title = t.siteDocTitle;
    } else if (document.body && document.body.dataset.sitePage === "contact") {
      document.title = t.contactTitle + " — " + t.siteBrandTitle;
    }

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (key && t[key] != null) el.textContent = t[key];
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (key && t[key] != null) el.innerHTML = t[key];
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      if (key && t[key] != null) el.setAttribute("aria-label", t[key]);
    });

    const page = (document.body && document.body.dataset.sitePage) || "";
    document.querySelectorAll("[data-nav]").forEach((a) => {
      const id = a.getAttribute("data-nav");
      if (id === page) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
      const href = a.getAttribute("data-href-base") || a.getAttribute("href");
      if (href) {
        a.setAttribute("data-href-base", href.split("?")[0]);
        a.href = withLang(a.getAttribute("data-href-base"), lang);
      }
    });

    document.querySelectorAll("a[data-lang-link]").forEach((a) => {
      const base = a.getAttribute("data-lang-link");
      if (base) a.href = withLang(base, lang);
    });

    const langDe = document.getElementById("lang-de");
    const langEn = document.getElementById("lang-en");
    if (langDe) langDe.setAttribute("aria-pressed", lang === "de" ? "true" : "false");
    if (langEn) langEn.setAttribute("aria-pressed", lang === "en" ? "true" : "false");

    const langGroup = document.getElementById("lang-switch");
    if (langGroup && t.langSwitchLabel) {
      langGroup.setAttribute("aria-label", t.langSwitchLabel);
    }
  }

  function bindLangSwitch(onChange) {
    const langDe = document.getElementById("lang-de");
    const langEn = document.getElementById("lang-en");
    function go(next) {
      const lang = I18N.setLang(next);
      applyPortalChrome(lang);
      if (typeof onChange === "function") onChange(lang);
      try {
        const url = new URL(global.location.href);
        url.searchParams.set("lang", lang);
        global.history.replaceState({}, "", url.pathname + url.search + url.hash);
      } catch (_) {}
    }
    if (langDe) langDe.addEventListener("click", () => go("de"));
    if (langEn) langEn.addEventListener("click", () => go("en"));
  }

  function initPortal(onChange) {
    let lang = I18N.detectLang();
    I18N.setLang(lang);
    applyPortalChrome(lang);
    bindLangSwitch(onChange);
    return lang;
  }

  global.TRANSFER_SITE = {
    applyPortalChrome,
    bindLangSwitch,
    initPortal
  };
})(window);
