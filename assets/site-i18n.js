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
      ctaDimensions: "Transferfelder verstehen",
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

      dimTitle: "Acht Transferfelder — so lesen Sie die Landkarte",
      dimIntro:
        "Die Landkarte folgt der Transfersystematik des Stifterverband-Transferbarometers: acht Felder von industrie- und verwertungsnaher Kooperation bis zu Dialog, Beratung und Lehre. So wird sichtbar, wie unterschiedlich Wissen an der RWTH wirksam wird — nicht nur über Patente und Start-ups.",
      dimPrereq:
        "Getragen wird das von institutionellen Voraussetzungen: Strategie, Anreize, Strukturen und Ressourcen.",
      dimFigAlt: "Kreisdiagramm der acht Transferfelder des Transferbarometers",
      dimFigCaption: "Transfersystematik des Transferbarometers (Stifterverband)",
      dimSourceLink: "Quelle",
      dimMapLink: "Transferfelder auf der Landkarte →",
      dimCollabTitle: "Forschungsbasierte Kooperation & Verwertung",
      dimCollabBody:
        "Gemeinsame Forschung mit Wirtschaft und Partnern — inklusive IP, Lizenzierung und Verwertung.",
      dimEntreTitle: "Entrepreneurship",
      dimEntreBody:
        "Wissenschaftliche Ideen werden zu Gründungen und Geschäftsmodellen — von Ideation bis Scale-up.",
      dimInfraTitle: "Forschungsinfrastruktur",
      dimInfraBody:
        "Labore, Anlagen und Daten als geteilte Infrastruktur für Partner außerhalb der Hochschule.",
      dimRelTitle: "Relationship Management",
      dimRelBody:
        "Langfristige Netzwerke mit Alumni, Fördernden und Partnern — Transfer braucht dauerhafte Beziehungen.",
      dimSocietyTitle: "Forschen und entwickeln mit der Gesellschaft",
      dimSocietyBody:
        "Gemeinsame FuE mit Bürgerinnen und Bürgern, Kommunen und Zivilgesellschaft an realen Herausforderungen.",
      dimAdviceTitle: "Wissenschaftliche Beratung",
      dimAdviceBody:
        "Expertise für Politik, Verwaltung und andere Entscheidungsträgerinnen und -träger.",
      dimDialogueTitle: "Wissenschaftsdialog",
      dimDialogueBody:
        "Offener Austausch: Wissenschaftskommunikation und Dialog mit der Öffentlichkeit.",
      dimTeachTitle: "Transferorientierte Lehre & Weiterbildung",
      dimTeachBody:
        "Praxis, Partner und reale Herausforderungen in Curricula, Schools und Weiterbildung.",

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
      ctaDimensions: "Understand the transfer areas",
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

      dimTitle: "Eight transfer areas — how to read the landscape",
      dimIntro:
        "The landscape follows the Stifterverband Transfer Barometer: eight areas spanning industry collaboration and commercialisation through to dialogue, advice, and teaching. That makes visible how knowledge creates impact at RWTH — not only through patents and start-ups.",
      dimPrereq:
        "It rests on institutional prerequisites: strategy, incentives, structures, and resources.",
      dimFigAlt: "Ring diagram of the eight Transfer Barometer transfer areas",
      dimFigCaption: "Transfer Barometer systematics (Stifterverband)",
      dimSourceLink: "Source",
      dimMapLink: "Transfer areas on the map →",
      dimCollabTitle: "Research-based collaboration and commercialisation",
      dimCollabBody:
        "Joint research with industry and partners — including IP, licensing, and commercialisation.",
      dimEntreTitle: "Entrepreneurship",
      dimEntreBody:
        "Scientific ideas become ventures and business models — from ideation to scale-up.",
      dimInfraTitle: "Research infrastructure",
      dimInfraBody:
        "Labs, facilities, and data as shared infrastructure for partners beyond the university.",
      dimRelTitle: "Relationship management",
      dimRelBody:
        "Long-term networks with alumni, sponsors, and partners — transfer needs lasting relationships.",
      dimSocietyTitle: "R&D with society",
      dimSocietyBody:
        "Research and development with citizens, municipalities, and civil society on real-world challenges.",
      dimAdviceTitle: "Scientific advice",
      dimAdviceBody:
        "Expertise for policymakers, public administration, and other decision-makers.",
      dimDialogueTitle: "Science dialogue",
      dimDialogueBody:
        "Open exchange: science communication and dialogue with the public.",
      dimTeachTitle: "Transfer-oriented teaching & further education",
      dimTeachBody:
        "Practice, partners, and real-world challenges in curricula, schools, and further education.",

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
