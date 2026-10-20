/**
 * Portal chrome + Startseite copy (future ambition only; paraphrased).
 * RWTH Innovation is framed as the central operational entry for transfer.
 * Extends TRANSFER_I18N.UI — load after assets/i18n.js.
 */
(function (global) {
  const I18N = global.TRANSFER_I18N;
  if (!I18N) return;

  const portal = {
    de: {
      siteDocTitle: "Transferlandschaft der RWTH Aachen University",
      siteBrandTitle: "Transferlandschaft",
      siteBrandSubtitle: "der RWTH Aachen University",
      navHome: "Startseite",
      navMap: "Transfer-Landkarte",
      navContact: "Kontakt",
      wordmark: "RWTH Aachen University",
      footerPrototype: "Prototyp — keine offizielle RWTH-Veröffentlichung",
      footerImprint: "Impressum",
      footerPrivacy: "Datenschutz",
      a11yLink: "Erklärung zur Barrierefreiheit",
      skipContent: "Zum Inhalt springen",

      heroBrand: "Transferlandschaft",
      heroHeadline: "Aus Wissen wird Wirkung.",
      heroLede:
        "Für alle Transferaktivitäten ist RWTH Innovation die zentrale Anlaufstelle und das operative Realisierungsinstrument — für Forschende, Gründungsteams und Unternehmen auf dem Weg in die Anwendung.",
      ctaMap: "Zu RWTH Innovation",
      ctaAbout: "Ambition verstehen",
      ctaLandscape: "Transfer-Landkarte erkunden",

      stripLabel: "Direkt einsteigen",
      chipInnovation: "RWTH Innovation",
      chipTranslation: "Translation Hubs",
      chipCampusWest: "Campus West",
      chipKnowledge: "Knowledge Hub",
      chipLivingLabs: "Living Labs",
      chipIncubator: "Collective Incubator",

      aboutTitle: "Was Transfer hier bedeutet",
      aboutP1:
        "Transfer ist mehr als die Weitergabe fertiger Ergebnisse. Es ist ein multidimensionaler Prozess: Forschung, Lehre und Anwendung greifen ineinander — interdisziplinär in der Tiefe, transdisziplinär im Dialog mit Partnern aus Gesellschaft und Industrie.",
      aboutP2:
        "Operativ bündelt RWTH Innovation diesen Weg: Verwertung und Schutz von Forschungsergebnissen, Gründungsbegleitung und Kooperation mit der Wirtschaft — damit aus wissenschaftlichen Ideen Anwendung, Partnerschaft und Wirkung werden.",

      modulesTitle: "Ambition — wohin wir wollen",
      modInnovationTitle: "RWTH Innovation",
      modInnovationBody:
        "Zentrale Anlaufstelle und Realisierungsinstrument für Technologietransfer: individuelle Beratung, IP-Expertise, Gründungsunterstützung und maßgeschneiderte Kooperationsmodelle für Unternehmen — Innovation hat eine Adresse.",
      modInnovationExternal: "Offizielle Website →",
      modTranslationTitle: "Translation Hubs",
      modTranslationBody:
        "Statt linearer Technologiepfade entsteht ein kontinuierlicher Zyklus aus Entdeckung, Erprobung und gesellschaftlicher Einbettung — in strategischen Hubs für gemeinsame Entwicklung.",
      modCampusTitle: "Campus West",
      modCampusBody:
        "Ein Ort für kollaborative Ökosysteme, in dem akademische Entdeckung mit Prototyping, Scale-up und gesellschaftlicher Anwendung zusammenkommt.",
      modKnowledgeTitle: "Knowledge Hub",
      modKnowledgeBody:
        "Zentrale Schnittstelle für Wissenschaftskommunikation und Dialog — Formate, die Forschung sichtbar machen und Stakeholder einbinden.",
      modLabsTitle: "Living Labs",
      modLabsBody:
        "Offene Reallabore, in denen Studierende, Forschende, Kommunen und Bürgerinnen und Bürger Lösungen für gesellschaftliche Herausforderungen mitentwickeln.",
      modIntegrateTitle: "Forschung, Lehre und Transfer verbinden",
      modIntegrateBody:
        "Transfer soll nicht neben dem Kernauftrag stehen, sondern nahtlos mit Forschung und Lehre verzahnt sein — getragen von geteilter Expertise und gemeinsamen Missionen.",
      modExplore: "Auf der Landkarte →",

      inviteText:
        "Starten Sie bei RWTH Innovation — und entdecken Sie auf der Landkarte, wie Akteure, Orte und Transferfelder zusammenwirken.",
      inviteCta: "Zur Transfer-Landkarte",

      contactTitle: "Kontakt",
      contactIntro:
        "RWTH Innovation ist die zentrale Anlaufstelle für Transfer an der RWTH: für Forschende, Gründungsinteressierte und Unternehmen.",
      contactNote:
        "RWTH Innovation GmbH · Campus-Boulevard 57 · 52074 Aachen · info@rwth-innovation.de · +49 241 80 96610",
      contactExternal: "rwth-innovation.de →",
      contactMapLink: "Auf der Landkarte →"
    },
    en: {
      siteDocTitle: "Transfer Landscape of RWTH Aachen University",
      siteBrandTitle: "Transfer Landscape",
      siteBrandSubtitle: "of RWTH Aachen University",
      navHome: "Home",
      navMap: "Transfer Landscape",
      navContact: "Contact",
      wordmark: "RWTH Aachen University",
      footerPrototype: "Prototype — not an official RWTH publication",
      footerImprint: "Legal notice",
      footerPrivacy: "Privacy",
      a11yLink: "Accessibility statement",
      skipContent: "Skip to content",

      heroBrand: "Transfer Landscape",
      heroHeadline: "From knowledge to impact.",
      heroLede:
        "For all transfer activities, RWTH Innovation is the central entry point and operational realisation instrument — supporting researchers, founding teams, and companies on the path to application.",
      ctaMap: "Go to RWTH Innovation",
      ctaAbout: "Understand the ambition",
      ctaLandscape: "Explore the Transfer Landscape",

      stripLabel: "Jump in",
      chipInnovation: "RWTH Innovation",
      chipTranslation: "Translation Hubs",
      chipCampusWest: "Campus West",
      chipKnowledge: "Knowledge Hub",
      chipLivingLabs: "Living Labs",
      chipIncubator: "Collective Incubator",

      aboutTitle: "What transfer means here",
      aboutP1:
        "Transfer is more than handing over finished results. It is a multidimensional process: research, teaching, and application interlock — interdisciplinary in depth, transdisciplinary in dialogue with partners from society and industry.",
      aboutP2:
        "Operationally, RWTH Innovation bundles that path: valorisation and protection of research results, start-up support, and collaboration with industry — so scientific ideas become application, partnership, and impact.",

      modulesTitle: "Ambition — where we are heading",
      modInnovationTitle: "RWTH Innovation",
      modInnovationBody:
        "Central contact point and realisation instrument for technology transfer: tailored advice, IP expertise, start-up support, and collaboration models for companies — innovation has an address.",
      modInnovationExternal: "Official website →",
      modTranslationTitle: "Translation Hubs",
      modTranslationBody:
        "Instead of linear technology paths, a continuous cycle of discovery, testing, and societal embedding — in strategic hubs for joint development.",
      modCampusTitle: "Campus West",
      modCampusBody:
        "A place for collaborative ecosystems where academic discovery meets prototyping, scale-up, and societal deployment.",
      modKnowledgeTitle: "Knowledge Hub",
      modKnowledgeBody:
        "A central interface for science communication and dialogue — formats that make research visible and involve stakeholders.",
      modLabsTitle: "Living Labs",
      modLabsBody:
        "Open real-world labs where students, researchers, municipalities, and citizens co-develop responses to societal challenges.",
      modIntegrateTitle: "Connecting research, teaching, and transfer",
      modIntegrateBody:
        "Transfer should not sit beside the core mission, but interweave with research and teaching — carried by shared expertise and joint missions.",
      modExplore: "On the map →",

      inviteText:
        "Start with RWTH Innovation — then explore on the map how actors, places, and transfer areas work together.",
      inviteCta: "Go to the Transfer Landscape",

      contactTitle: "Contact",
      contactIntro:
        "RWTH Innovation is the central contact point for transfer at RWTH — for researchers, aspiring founders, and companies.",
      contactNote:
        "RWTH Innovation GmbH · Campus-Boulevard 57 · 52074 Aachen · info@rwth-innovation.de · +49 241 80 96610",
      contactExternal: "rwth-innovation.de →",
      contactMapLink: "On the map →"
    }
  };

  Object.keys(portal).forEach((lang) => {
    Object.assign(I18N.UI[lang], portal[lang]);
  });
})(window);
