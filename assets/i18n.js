/**
 * UI chrome + language helpers for the Transfer Landscape prototype.
 * Content strings live on nodes/details as { en, de }; this file covers chrome only.
 * Default language: German. Map substrate: assets/landscape.svg (English network graphic).
 */
(function (global) {
  const STORAGE_KEY = "rwth-transfer-lang";
  const SUPPORTED = ["de", "en"];

  const UI = {
    de: {
      docTitle: "RWTH Transfer-Landkarte — Kollaborativer, offener und verantwortungsvoller Transfer",
      brandTitle: "RWTH Transfer-Landkarte",
      brandSubtitle: "Kollaborativer, offener und verantwortungsvoller Transfer",
      skipExplore: "Zur Erkunden-Liste springen",
      skipMap: "Zur Karte springen",
      explore: "Erkunden",
      exploreHeading: "Erkunden",
      searchLabel: "Knoten durchsuchen",
      searchPlaceholder: "Knoten suchen…",
      exploreHint:
        "Tastatur: Suche Home/Ende = Cursor · ↓ zur Liste · Filter nur ←→ (↑ Suche, ↓ Liste) · Liste ↑↓/Pos1/Ende · auf der Karte Enter + Pfeile · Umschalt+Pfeile verschieben · Panel ←→.",
      filterAll: "Alle",
      filterGroup: "Nach Transferfeld filtern",
      listStatusAll: "{n} Knoten.",
      listStatusFiltered: "{shown} von {total} Knoten angezeigt.",
      listStatusEmpty: "Keine Knoten passen zu Suche oder Filter.",
      listEmpty: "Keine Treffer.",
      resetView: "Ansicht zurücksetzen",
      showAnchors: "Anker zeigen",
      hideAnchors: "Anker ausblenden",
      zoomIn: "Vergrößern",
      zoomOut: "Verkleinern",
      zoomGroup: "Vergrößerung",
      mapRegion:
        "Transfer-Landkarte. Enter fokussiert einen Knoten; Pfeiltasten springen zum räumlichen Nachbarn; Umschalt+Pfeile verschieben die Karte; Plus und Minus zoomen; Pos1 setzt zurück. Im geöffneten Panel: Pfeil links/rechts zum vorherigen oder nächsten Knoten. Die Erkunden-Liste ist die Textalternative.",
      mapTitle:
        "Ziehen zum Verschieben · Mausrad oder Fingerpinch zum Zoomen · Enter und Pfeile für Knoten · Umschalt+Pfeile verschieben",
      mapAlt:
        "Collaborative, Open and Responsible Transfer — SVG-Netzwerkgrafik der Transfer-Landschaft. Nutzen Sie die Erkunden-Liste für dieselben Knoten als Text.",
      moreInfo: "Weitere Informationen →",
      landscapeBrief: "Landschafts-Kurzinfo →",
      moreInfoAria: "Weitere Informationen zu {title}",
      moreInfoAriaNewTab: "Weitere Informationen zu {title} (öffnet in neuem Tab)",
      briefAria: "Landschafts-Kurzinfo zu {title} öffnen",
      closeDetails: "Details schließen",
      openDetails: "Details öffnen: {title}",
      coachTitle: "Landkarte erkunden",
      coachBody:
        "Kreise auf der Karte öffnen ein Detailpanel. Tastatur: in Erkunden ↑↓ über Suche, Filter und Liste; Enter auf der Karte fokussiert einen Knoten, Pfeile springen zum Nachbarn, Umschalt+Pfeile verschieben, im Panel ←→ wechselt den Knoten.",
      coachDismiss: "Verstanden",
      footerPrototype: "Prototyp — keine offizielle RWTH-Veröffentlichung",
      a11yLink: "Erklärung zur Barrierefreiheit",
      langSwitchLabel: "Sprache",
      langDe: "DE",
      langEn: "EN",
      railAria: "Knoten erkunden",
      a11yDocTitle: "Erklärung zur Barrierefreiheit — RWTH Transfer-Landkarte",
      areaShort: {
        collaboration: "Kooperation",
        entrepreneurship: "Gründung",
        "research-infra": "Infrastruktur",
        relationship: "Beziehungen",
        society: "Gesellschaft",
        advice: "Beratung",
        dialogue: "Dialog",
        teaching: "Lehre"
      },
      sourceLabel: {
        strategy: "Strategie",
        map: "Karten-Callout",
        placeholder: "Platzhalter"
      },
      // detail.html
      detailDocTitleSuffix: " — RWTH Transfer-Landkarte",
      skipContent: "Zum Inhalt springen",
      backLandscape: "← Zurück zur Landkarte",
      loading: "Laden…",
      loadingHint:
        "Falls das bestehen bleibt, Seite mit Knoten-ID öffnen, z. B. detail.html?id=rwth-innovation.",
      nodeNotFound: "Knoten nicht gefunden",
      unknownId: "Unbekannte ID",
      returnLandscape: "← Zurück zur Landkarte",
      officialPage: "Offizielle Seite →",
      learnMore: "Weiterführende Links",
      backToNode: "← Zurück zur Karte an diesem Knoten",
      fullLandscape: "Gesamte Landkarte"
    },
    en: {
      docTitle: "RWTH Transfer Landscape — Collaborative, Open and Responsible Transfer",
      brandTitle: "RWTH Transfer Landscape",
      brandSubtitle: "Collaborative, Open and Responsible Transfer",
      skipExplore: "Skip to Explore list",
      skipMap: "Skip to map",
      explore: "Explore",
      exploreHeading: "Explore",
      searchLabel: "Search nodes",
      searchPlaceholder: "Search nodes…",
      exploreHint:
        "Keyboard: search Home/End = caret · ↓ to list · filters ←→ only (↑ search, ↓ list) · list ↑↓/Home/End · on map Enter + arrows · Shift+arrows pan · panel ←→.",
      filterAll: "All",
      filterGroup: "Filter by transfer area",
      listStatusAll: "{n} nodes.",
      listStatusFiltered: "{shown} of {total} nodes shown.",
      listStatusEmpty: "No nodes match the current search or filter.",
      listEmpty: "No nodes match.",
      resetView: "Reset view",
      showAnchors: "Show anchors",
      hideAnchors: "Hide anchors",
      zoomIn: "Zoom in",
      zoomOut: "Zoom out",
      zoomGroup: "Zoom controls",
      mapRegion:
        "Transfer landscape map. Enter focuses a node; arrow keys jump to the spatial neighbour; Shift+arrows pan; plus and minus zoom; Home resets. In the open panel: left/right arrow for previous or next node. Explore list is the text alternative.",
      mapTitle:
        "Drag to pan · scroll / pinch to zoom · Enter and arrows for nodes · Shift+arrows pan",
      mapAlt:
        "Collaborative, Open and Responsible Transfer — SVG network graphic of the RWTH transfer landscape. Use the Explore list for the same nodes as text.",
      moreInfo: "More information →",
      landscapeBrief: "Landscape brief →",
      moreInfoAria: "More information about {title}",
      moreInfoAriaNewTab: "More information about {title} (opens in a new tab)",
      briefAria: "Open landscape brief for {title}",
      closeDetails: "Close details",
      openDetails: "Open details: {title}",
      coachTitle: "Explore the landscape",
      coachBody:
        "Circles on the map open a detail panel. Keyboard: in Explore ↑↓ across search, filters and list; Enter on the map focuses a node, arrows jump to a neighbour, Shift+arrows pan, ←→ in the panel switches nodes.",
      coachDismiss: "Got it",
      footerPrototype: "Prototype — not an official RWTH publication",
      a11yLink: "Accessibility statement",
      langSwitchLabel: "Language",
      langDe: "DE",
      langEn: "EN",
      railAria: "Explore nodes",
      a11yDocTitle: "Accessibility statement — RWTH Transfer Landscape",
      areaShort: {
        collaboration: "Collaboration",
        entrepreneurship: "Entrepreneurship",
        "research-infra": "Infrastructure",
        relationship: "Relationships",
        society: "Society",
        advice: "Advice",
        dialogue: "Dialogue",
        teaching: "Teaching"
      },
      sourceLabel: {
        strategy: "Strategy",
        map: "Map callout",
        placeholder: "Placeholder"
      },
      detailDocTitleSuffix: " — RWTH Transfer Landscape",
      skipContent: "Skip to content",
      backLandscape: "← Back to landscape",
      loading: "Loading…",
      loadingHint:
        "If this persists, open the page with a node id, e.g. detail.html?id=rwth-innovation.",
      nodeNotFound: "Node not found",
      unknownId: "Unknown id",
      returnLandscape: "← Return to landscape",
      officialPage: "Official page →",
      learnMore: "Further links",
      backToNode: "← Back to map at this node",
      fullLandscape: "Full landscape"
    }
  };

  function normalizeLang(raw) {
    if (!raw) return null;
    const base = String(raw).toLowerCase().slice(0, 2);
    return SUPPORTED.indexOf(base) >= 0 ? base : null;
  }

  function detectLang() {
    try {
      const params = new URLSearchParams(global.location.search);
      const fromUrl = normalizeLang(params.get("lang"));
      if (fromUrl) return fromUrl;
    } catch (_) {}
    try {
      const stored = normalizeLang(global.localStorage.getItem(STORAGE_KEY));
      if (stored) return stored;
    } catch (_) {}
    return "de";
  }

  function setLang(lang) {
    const next = normalizeLang(lang) || "de";
    try {
      global.localStorage.setItem(STORAGE_KEY, next);
    } catch (_) {}
    return next;
  }

  /** Pick localized string/array from { en, de } or pass through plain values. */
  function L(value, lang) {
    if (value == null) return "";
    if (typeof value === "string" || typeof value === "number") return String(value);
    if (Array.isArray(value)) return value;
    const pack = value;
    if (pack[lang] != null) return pack[lang];
    if (pack.de != null) return pack.de;
    if (pack.en != null) return pack.en;
    return "";
  }

  function ui(lang) {
    return UI[lang] || UI.de;
  }

  function format(template, vars) {
    return String(template).replace(/\{(\w+)\}/g, (_, key) =>
      vars[key] != null ? String(vars[key]) : ""
    );
  }

  function withLangParam(url, lang) {
    try {
      const u = new URL(url, global.location.href);
      u.searchParams.set("lang", lang);
      return u.pathname + u.search + u.hash;
    } catch (_) {
      const sep = url.indexOf("?") >= 0 ? "&" : "?";
      return url + sep + "lang=" + encodeURIComponent(lang);
    }
  }

  global.TRANSFER_I18N = {
    STORAGE_KEY,
    SUPPORTED,
    UI,
    detectLang,
    setLang,
    L,
    ui,
    format,
    withLangParam
  };
})(window);
