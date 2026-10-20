/**
 * Transfer landscape nodes (bilingual: en / de).
 * source: "strategy" | "map" | "placeholder"
 * moreUrl: optional official page for the sheet “More information” link
 * Map substrate: assets/landscape.svg (Illustrator brain/network export).
 * onMap:false — node stays in Explore list but has no hotspot on this graphic.
 */
window.TRANSFER_NODES = [
  {
    id: "jupiter-ai-factory",
    title: { en: "Jupiter AI Factory", de: "Jupiter AI Factory" },
    x: 30.8,
    y: 10.6,
    r: 4.0,
    areas: ["research-infra", "collaboration"],
    source: "map",
    moreUrl:
      "https://www.ai.rwth-aachen.de/cms/ki/partnerschaften/wissenschaft/~boibss/jupiter-ai-factory-jaif-/",
    summary: {
      en: "The JUPITER AI Factory (JAIF) connects RWTH’s research capabilities with Europe’s first exascale supercomputer, AI expertise, application support and access for research, industry and the public sector. It creates a direct pathway for bringing AI research and high-performance computing into real-world applications.",
      de: "Die JUPITER AI Factory (JAIF) verbindet Forschungskapazitäten der RWTH mit Europas erstem Exascale-Supercomputer, KI-Expertise, Anwendungsunterstützung und Zugang für Forschung, Industrie und öffentlichen Sektor. Sie schafft einen direkten Pfad, KI-Forschung und Hochleistungsrechnen in reale Anwendungen zu bringen."
    },
    bullets: {
      en: [
        "AI infrastructure built around Europe’s first exascale supercomputer",
        "Connecting researchers, industry, start-ups and the public sector",
        "Access to high-performance computing, AI expertise and application support",
        "From AI development and training to real-world application"
      ],
      de: [
        "KI-Infrastruktur rund um Europas ersten Exascale-Supercomputer",
        "Verbindung von Forschenden, Industrie, Start-ups und öffentlichem Sektor",
        "Zugang zu Hochleistungsrechnen, KI-Expertise und Anwendungsunterstützung",
        "Von KI-Entwicklung und Training zur realen Anwendung"
      ]
    }
  },
  {
    id: "rhenish-mining-area",
    title: { en: "Rhenish mining area", de: "Rheinisches Revier" },
    x: 18.5,
    y: 17.0,
    r: 4.0,
    areas: ["society", "collaboration"],
    source: "map",
    moreUrl:
      "https://www.rwth-aachen.de/cms/root/transfer/exzellenz-im-transfer/knowledge-hub/fruehere-schwerpunktthemen/der-strukturwandel-im-rheinischen-revier/~nlmzh/reviera-aktiv-beim-strukturwandel-im-r/",
    summary: {
      en: "The Rhenish mining area (Rheinisches Revier) is a region undergoing major structural transformation driven by the energy transition, the phase-out of lignite mining and industrial change.",
      de: "Das Rheinische Revier ist eine Region im strukturellen Wandel – getrieben von Energiewende, Braunkohleausstieg und industriellem Umbau."
    },
    bullets: {
      en: [
        "Regional transformation arena undergoing structural change",
        "Energy transition, circular materials and industrial transformation",
        "Co-creation between universities, municipalities, industry and society",
        "Place-based innovation through living labs and mission-oriented programmes"
      ],
      de: [
        "Regionale Transformationsarena im Strukturwandel",
        "Energiewende, Kreislaufmaterialien und industrieller Umbau",
        "Co-Creation zwischen Hochschulen, Kommunen, Industrie und Gesellschaft",
        "Ortsgebundene Innovation über Living Labs und missionsorientierte Programme"
      ]
    }
  },
  {
    id: "ai-gigafactory",
    title: { en: "AI Gigafactory", de: "KI-Gigafabrik" },
    x: 50.1,
    y: 8.1,
    r: 4.0,
    areas: ["research-infra", "collaboration"],
    source: "map",
    moreUrl:
      "https://commission.europa.eu/topics/competitiveness/competitiveness-coordination-tool-projects/ai-gigafactories_en",
    summary: {
      en: "An ambition to help realise one of Europe’s AI Gigafactories — the EU’s next scale of sovereign AI compute beyond today’s AI Factories. Pursued in close cooperation with Forschungszentrum Jülich (FZJ), where RWTH and FZJ integrate AI research and infrastructure as an essential step in RWTH’s drive to shape next-generation computing.",
      de: "Die Ambition, eine der europäischen KI-Gigafabriken mitzugestalten — die nächste Stufe souveräner KI-Rechenkapazität der EU jenseits der heutigen AI Factories. In enger Kooperation mit dem Forschungszentrum Jülich (FZJ), wo RWTH und FZJ KI-Forschung und -Infrastruktur integrieren: ein wesentlicher Schritt in der RWTH-Ambition, Next-Generation Computing mitzugestalten."
    },
    bullets: {
      en: [
        "Ambition: host / co-shape one of the EU’s AI Gigafactories",
        "EU scale-up of compute for frontier AI (beyond AI Factories)",
        "Cooperation with FZ Jülich on research + infrastructure",
        "Step toward next-generation computing at RWTH"
      ],
      de: [
        "Ambition: eine der EU-KI-Gigafabriken mitgestalten",
        "EU-Ausbau der Rechenkapazität für Frontier-KI (jenseits AI Factories)",
        "Kooperation mit FZ Jülich zu Forschung + Infrastruktur",
        "Schritt zu Next-Generation Computing an der RWTH"
      ]
    }
  },
  {
    id: "einstein-telescope",
    title: { en: "Einstein telescope", de: "Einstein-Teleskop" },
    x: 71.0,
    y: 11.5,
    r: 4.0,
    areas: ["research-infra", "collaboration"],
    source: "map",
    moreUrl:
      "https://www.einsteintelescope-emr.eu/en/",
    summary: {
      en: "An ambition — pursued as a trinational equal partnership of Belgium, the Netherlands and Germany (North Rhine-Westphalia) — to host Europe’s next-generation gravitational-wave observatory in the Euregio Meuse-Rhine. Like CERN for its region, ET is expected to strengthen the local economy and high-tech companies; RWTH contributes as one partner among many.",
      de: "Eine Ambition — getragen als trinationale gleichberechtigte Partnerschaft Belgiens, der Niederlande und Deutschlands (Nordrhein-Westfalen) —, Europas Gravitationswellen-Observatorium der nächsten Generation in der Euregio Maas-Rhein zu beheimaten. Wie das CERN für seine Region soll das ET lokale Wirtschaft und Hightech-Unternehmen stärken; die RWTH trägt als einer von vielen Partnern bei."
    },
    bullets: {
      en: [
        "Ambition: joint EMR bid for the Einstein Telescope",
        "Trinational equal partnership: BE – NL – DE (NRW)",
        "Regional economic impact analogous to CERN (jobs, SMEs, deep tech)",
        "RWTH among regional science & technology partners"
      ],
      de: [
        "Ambition: gemeinsame EMR-Bewerbung für das Einstein-Teleskop",
        "Trinationale gleichberechtigte Partnerschaft: BE – NL – DE (NRW)",
        "Regionalwirtschaftlicher Impact analog zum CERN (Jobs, KMU, Deep Tech)",
        "RWTH unter den regionalen Wissenschafts- und Technologiepartnern"
      ]
    }
  },
  {
    id: "translation-hubs",
    title: { en: "Translation Hubs", de: "Translation Hubs" },
    x: 64.6,
    y: 31.5,
    r: 4.0,
    areas: ["collaboration", "research-infra"],
    source: "strategy",
    summary: {
      en: "Translation Hubs are RWTH’s focused instrument for middle Technology Readiness Levels (TRL 4–6): orchestrated collaboration of science, industry and society around a shared roadmap. Unlike broad Campus Centers, hubs are few, selective and built only where RWTH already has proven excellence and committed partners — starting with fields such as Critical Raw Materials, Next Generation Computing and health technologies.",
      de: "Translation Hubs sind das fokussierte Instrument der RWTH für mittlere Technology Readiness Levels (TRL 4–6): orchestrierte Zusammenarbeit von Wissenschaft, Industrie und Gesellschaft um eine gemeinsame Roadmap. Anders als breite Campus Centers sind Hubs wenige, selektiv und nur dort aufgebaut, wo die RWTH bereits Exzellenz und verbindliche Partner hat — beginnend mit Feldern wie Critical Raw Materials, Next Generation Computing und Gesundheitstechnologien."
    },
    bullets: {
      en: [
        "Bridge the “valley of death” between discovery and application",
        "Bundle public and private third-party funding around one theme",
        "Integrate research, prototyping, scale-up and societal deployment",
        "Campus West is planned as a physical nucleus for Translation Hubs"
      ],
      de: [
        "Überbrücken das „Valley of Death“ zwischen Entdeckung und Anwendung",
        "Bündeln öffentliche und private Drittmittel um ein Thema",
        "Integrieren Forschung, Prototyping, Scale-up und gesellschaftliche Nutzung",
        "Campus West ist als physischer Kern für Translation Hubs geplant"
      ]
    }
  },
  {
    id: "leibniz-dwi",
    title: {
      en: "Leibniz DWI first in Translation",
      de: "Leibniz DWI first in Translation"
    },
    x: 93.7,
    y: 31.2,
    r: 4.0,
    areas: ["collaboration", "research-infra"],
    source: "map",
    moreUrl: "https://www.dwi.rwth-aachen.de/",
    summary: {
      en: "At DWI – Leibniz Institute for Interactive Materials, interdisciplinary groups develop materials for biomedical and sustainable impact. The Joint Lab “fiT” (first in Translation) accompanies biomedical discoveries through preclinical and clinical product development.",
      de: "Am DWI – Leibniz-Institut für Interaktive Materialien entwickeln interdisziplinäre Gruppen Materialien für biomedizinische und nachhaltige Wirkung. Das Joint Lab „fiT“ (first in Translation) begleitet biomedizinische Entdeckungen durch präklinische und klinische Produktentwicklung."
    },
    bullets: {
      en: [
        "Interactive materials under one roof",
        "Fields of impact: biomedical & sustainable materials",
        "Joint Lab fiT: first in Translation pathway"
      ],
      de: [
        "Interaktive Materialien unter einem Dach",
        "Wirkbereiche: biomedizinische & nachhaltige Materialien",
        "Joint Lab fiT: first-in-Translation-Pfad"
      ]
    }
  },
  {
    id: "exploratory-entrepreneurial-space",
    title: {
      en: "Exploratory Entrepreneurial Space",
      de: "Exploratory Entrepreneurial Space"
    },
    x: 79.9,
    y: 43.1,
    r: 3.8,
    areas: ["entrepreneurship"],
    source: "strategy",
    summary: {
      en: "Exploratory Entrepreneurial Spaces (EES) extend the logic of Exploratory Research Spaces and Exploratory Learning/Teaching Spaces into early, risk-tolerant venture exploration. They give students and researchers protected room to test ideas, technologies and business models before markets or organisational forms are clear — feeding later pathways such as the Collective Incubator and RWTH Innovation programmes.",
      de: "Exploratory Entrepreneurial Spaces (EES) erweitern die Logik von Exploratory Research Spaces und Exploratory Learning/Teaching Spaces auf frühe, risikotolerante Vorhabenexploration. Sie geben Studierenden und Forschenden geschützten Raum, Ideen, Technologien und Geschäftsmodelle zu testen, bevor Märkte oder Organisationsformen klar sind — und speisen spätere Pfade wie Collective Incubator und RWTH-Innovation-Programme."
    },
    bullets: {
      en: [
        "Early-stage, open-ended entrepreneurial exploration",
        "Complements ERS and ELS/ETS across research, teaching and start-ups",
        "Low pressure to commercialise immediately; learning over early KPIs",
        "Pipeline into Collective Incubator / RWTH Innovation / start-up funding"
      ],
      de: [
        "Frühe, ergebnisoffene unternehmerische Exploration",
        "Ergänzt ERS und ELS/ETS über Forschung, Lehre und Gründung",
        "Geringer Druck zur sofortigen Verwertung; Lernen vor frühen KPIs",
        "Pipeline in Collective Incubator / RWTH Innovation / Gründungsförderung"
      ]
    }
  },
  {
    id: "campus-melaten",
    title: { en: "Campus Melaten", de: "Campus Melaten" },
    x: 9.5,
    y: 34.5,
    r: 4.6,
    areas: ["research-infra", "collaboration"],
    source: "strategy",
    moreUrl:
      "https://www.rwth-aachen.de/cms/root/transfer/campusprojekt/~elg/campus-melaten/",
    summary: {
      en: "Campus Melaten is the established, largely developed part of the RWTH Aachen Campus – a dense landscape of research, development and collaboration facilities that provides a physical foundation for research-based cooperation and technology transfer.",
      de: "Campus Melaten ist der etablierte, weitgehend entwickelte Teil des RWTH Aachen Campus – eine dichte Landschaft aus Forschungs-, Entwicklungs- und Kooperationsflächen, die die physische Grundlage für forschungsbasierte Zusammenarbeit und Technologietransfer bildet."
    },
    bullets: {
      en: [
        "Established core of the RWTH Aachen Campus",
        "Dense landscape of research, development and collaboration facilities",
        "Around 2.5 km² of overall development area",
        "Enables long-term collaboration between research, industry and non-university partners"
      ],
      de: [
        "Etabliertes Kerngebiet des RWTH Aachen Campus",
        "Dichte Landschaft aus Forschungs-, Entwicklungs- und Kooperationsflächen",
        "Etwa 2,5 km² Gesamtentwicklungsfläche",
        "Ermöglicht langfristige Zusammenarbeit von Forschung, Industrie und außeruniversitären Partnern"
      ]
    }
  },
  {
    id: "campus-west",
    title: { en: "Campus West", de: "Campus West" },
    x: 93.2,
    y: 53.0,
    r: 4.2,
    areas: ["research-infra", "collaboration"],
    source: "strategy",
    moreUrl:
      "https://www.rwth-aachen.de/cms/root/transfer/campusprojekt/~elh/campus-west/",
    summary: {
      en: "Campus West continues the two-stage RWTH Aachen Campus expansion: about 325,000 m² around Aachen West station for five research clusters, linked to Campus Mitte. The site was taken over in 2018; zoning was adopted in 2021.",
      de: "Campus West setzt den zweistufigen Ausbau des RWTH Aachen Campus fort: rund 325.000 m² um den Westbahnhof für fünf Forschungscluster, verbunden mit Campus Mitte. Die Fläche wurde 2018 übernommen; der Bebauungsplan 2021 verabschiedet."
    },
    bullets: {
      en: [
        "≈ 325,000 m² around Aachen West station",
        "Five research clusters planned",
        "Linked thematically and spatially to Campus Mitte",
        "Complements mature Campus Melaten"
      ],
      de: [
        "≈ 325.000 m² um den Aachener Westbahnhof",
        "Fünf Forschungscluster geplant",
        "Thematisch und räumlich mit Campus Mitte verbunden",
        "Ergänzt den etablierten Campus Melaten"
      ]
    }
  },
  {
    id: "knowledge-hub",
    title: { en: "Knowledge Hub", de: "Knowledge Hub" },
    x: 8.0,
    y: 52.5,
    r: 3.8,
    areas: ["dialogue", "society"],
    source: "strategy",
    moreUrl:
      "https://www.rwth-aachen.de/cms/root/transfer/exzellenz-im-transfer/~nkjmb/knowledge-hub/",
    summary: {
      en: "How do we want to live — and what world do we leave behind? The Knowledge Hub opens RWTH research to society: annual focus themes, videos, podcasts and dialogue formats that build trust and invite citizens, schools, media and policymakers into the conversation.",
      de: "Wie wollen wir leben? Welche Welt wollen wir zukünftigen Generationen hinterlassen? Der Knowledge Hub macht RWTH-Forschung für die Gesellschaft erfahrbar: jährliche Schwerpunktthemen, Videos, Podcasts und Dialogformate — und schafft Vertrauen durch transparenten Wissenstransfer."
    },
    bullets: {
      en: [
        "2026 theme: how RWTH profile areas shape “a good tomorrow”",
        "Videos, podcasts, “curiosity allowed” and Science & Fiction",
        "Two-way exchange with society, media, education and policy",
        "Complements faculty dialogue practice — science communication, citizen science, remembrance culture"
      ],
      de: [
        "Schwerpunkt 2026: „Für ein gutes Morgen – Wie die Profilbereiche der RWTH wirken“",
        "Videos, Podcasts, „Auf den Punkt gebracht“, „Neugier erlaubt!“, Science & Fiction",
        "Wechselseitige Kommunikation mit Öffentlichkeit, Medien, Bildung und Politik",
        "Ergänzt fakultäre Dialogpraxis — Wissenschaftskommunikation, Citizen Science, Erinnerungskultur"
      ]
    }
  },
  {
    id: "living-lab-incubator",
    title: { en: "Living Lab Incubator", de: "Living Lab Incubator" },
    x: 24.0,
    y: 54.0,
    r: 4.0,
    areas: ["society", "entrepreneurship"],
    source: "strategy",
    moreUrl:
      "https://www.humtec.rwth-aachen.de/cms/humtec/forschung/~mgveq/living-labs-incubator/",
    summary: {
      en: "The Living Lab Incubator connects research and innovation with real-world societal needs. Through municipal partnerships, social innovation and responsible research and innovation (RRI), it enables emerging technologies and governance approaches to be explored and tested in real-life settings.",
      de: "Der Living Lab Incubator verbindet Forschung und Innovation mit gesellschaftlichen Bedarfen in der Praxis. Über kommunale Partnerschaften, soziale Innovation und Responsible Research and Innovation (RRI) ermöglicht er, neue Technologien und Governance-Ansätze in realen Settings zu erkunden und zu erproben."
    },
    bullets: {
      en: [
        "Real-world testing of emerging technologies and responsible AI frameworks",
        "Municipal partnerships, social innovation and user-centred design of tech, spaces and organisations",
        "Accompanying socio-technical change: acceptance research, evaluation and ELSI support",
        "Integrating societal needs and feedback into research and technology development"
      ],
      de: [
        "Realtests neuer Technologien und verantwortlicher KI-Rahmen",
        "Kommunale Partnerschaften, soziale Innovation und nutzerzentrierte Gestaltung von Technik, Räumen und Organisationen",
        "Begleitung soziotechnischer Veränderung: Akzeptanzforschung, Evaluation und ELSI-Begleitung",
        "Einbindung gesellschaftlicher Bedarfe und Rückmeldungen in Forschung und Technologieentwicklung"
      ]
    }
  },
  {
    id: "honors-college",
    title: { en: "Honors College", de: "Honors College" },
    x: 42.0,
    y: 56.5,
    r: 3.8,
    areas: ["teaching"],
    source: "strategy",
    moreUrl:
      "https://www.hc.rwth-aachen.de/cms/~lplqm/hc/",
    summary: {
      en: "The Honors College at RWTH Aachen University connects academic excellence with interdisciplinary learning, innovation skills and societal responsibility. As a transfer-oriented educational format, it prepares students to translate knowledge into practical solutions, explore emerging technologies and contribute to entrepreneurial and societal transformation.",
      de: "Das Honors College der RWTH Aachen verbindet akademische Exzellenz mit interdisziplinärem Lernen, Innovationskompetenz und gesellschaftlicher Verantwortung. Als transferorientiertes Bildungsformat bereitet es Studierende darauf vor, Wissen in praktische Lösungen zu übersetzen, neue Technologien zu erkunden und zu unternehmerischer und gesellschaftlicher Transformation beizutragen."
    },
    bullets: {
      en: [
        "Transfer-oriented teaching and interdisciplinary education",
        "Early exposure to emerging technologies, frontier research and innovation challenges",
        "Complementary learning opportunities through hackathons, maker spaces and thematic schools",
        "Developing entrepreneurial thinking, responsible innovation and leadership skills"
      ],
      de: [
        "Transferorientierte Lehre und interdisziplinäre Bildung",
        "Früher Kontakt zu neuen Technologien, Frontier-Forschung und Innovationsherausforderungen",
        "Ergänzende Lernangebote über Hackathons, Maker Spaces und thematische Schools",
        "Entwicklung unternehmerischen Denkens, verantwortlicher Innovation und Leadership-Kompetenz"
      ]
    }
  },
  {
    id: "women-transfer-training",
    title: {
      en: "Women Transfer Training",
      de: "Women Transfer Training"
    },
    x: 64.6,
    y: 54.5,
    r: 4.0,
    areas: ["teaching", "entrepreneurship"],
    source: "strategy",
    summary: {
      en: "A transfer measure of the new Excellence (ExU) phase: expand training geared toward women and early-stage entrepreneurship, focusing on idea generation, team development, and IP management.",
      de: "Eine Transfermaßnahme der neuen Exzellenzphase (ExU): Training ausbauen, das auf Frauen und Early-Stage-Entrepreneurship ausgerichtet ist — mit Fokus auf Ideengenerierung, Teamentwicklung und IP-Management."
    },
    bullets: {
      en: [
        "ExU measure: expand training geared toward women",
        "…and early-stage entrepreneurship",
        "Focus: idea generation, team development, IP management",
        "Part of strengthening the integrated transfer model"
      ],
      de: [
        "ExU-Maßnahme: Training für Frauen ausbauen",
        "…und Early-Stage-Entrepreneurship",
        "Fokus: Ideengenerierung, Teamentwicklung, IP-Management",
        "Teil der Stärkung des integrierten Transfermodells"
      ]
    }
  },
  {
    id: "rwth-innovation",
    title: { en: "RWTH Innovation", de: "RWTH Innovation" },
    x: 33.3,
    y: 70.0,
    r: 3.9,
    areas: ["collaboration", "entrepreneurship", "relationship"],
    source: "strategy",
    moreUrl:
      "https://www.rwth-innovation.de/de/",
    summary: {
      en: "RWTH Innovation GmbH is the central technology transfer and innovation interface of RWTH Aachen University. It connects researchers, students, start-ups, companies, investors, public institutions and societal partners with the expertise, services and networks needed to turn scientific discoveries into practical applications and entrepreneurial ventures.",
      de: "Die RWTH Innovation GmbH ist die zentrale Technologie-Transfer- und Innovationsschnittstelle der RWTH Aachen. Sie verbindet Forschende, Studierende, Start-ups, Unternehmen, Investoren, öffentliche Institutionen und gesellschaftliche Partner mit Expertise, Services und Netzwerken, um wissenschaftliche Entdeckungen in praktische Anwendungen und unternehmerische Vorhaben zu überführen."
    },
    bullets: {
      en: [
        "Central access point for technology transfer, innovation services and ecosystem navigation",
        "Intellectual property (IP) management, licensing and support for research-based start-ups",
        "Industry collaboration through the Innovation Club and Innovation Partnership",
        "Connecting founders and companies with the Collective Incubator, Gateway Factory and emerging innovation platforms"
      ],
      de: [
        "Zentrale Anlaufstelle für Technologietransfer, Innovationsservices und Ökosystem-Navigation",
        "IP-Management, Lizenzierung und Unterstützung forschungsbasierter Start-ups",
        "Industriezusammenarbeit über Innovation Club und Innovation Partnership",
        "Verbindung von Gründerinnen/Gründern und Unternehmen mit Collective Incubator, Gateway Factory und weiteren Plattformen"
      ]
    }
  },
  {
    id: "collective-incubator",
    title: { en: "Collective Incubator", de: "Collective Incubator" },
    x: 50.3,
    y: 68.8,
    r: 4.2,
    areas: ["entrepreneurship", "teaching"],
    source: "strategy",
    moreUrl:
      "https://www.collective-incubator.de/",
    summary: {
      en: "Founded by students in 2017, the Collective Incubator is RWTH Aachen University’s flagship platform for student entrepreneurship, co-innovation and practical learning. It connects students, researchers, start-ups and industry partners in an environment where ideas can be developed, prototypes tested and entrepreneurial projects advanced.",
      de: "2017 von Studierenden gegründet, ist der Collective Incubator die Flagship-Plattform der RWTH Aachen für studentisches Entrepreneurship, Co-Innovation und praxisnahes Lernen. Er verbindet Studierende, Forschende, Start-ups und Industriepartner in einer Umgebung, in der Ideen entwickelt, Prototypen erprobt und unternehmerische Vorhaben vorangebracht werden."
    },
    bullets: {
      en: [
        "Student-led platform connecting entrepreneurship, innovation and education",
        "More than 5,000 members, 300+ start-ups and 100+ student initiatives",
        "Approximately 4,000 m² of space, including co-working facilities, studios and maker spaces",
        "Connecting early-stage ventures with RWTH Innovation and Gateway Factory for further development and growth"
      ],
      de: [
        "Studierendengeführte Plattform für Entrepreneurship, Innovation und Bildung",
        "Mehr als 5.000 Mitglieder, 300+ Start-ups und 100+ Studierendeninitiativen",
        "Etwa 4.000 m² Fläche, darunter Co-Working, Studios und Maker Spaces",
        "Anbindung früher Vorhaben an RWTH Innovation und Gateway Factory für Weiterentwicklung und Wachstum"
      ]
    }
  },
  {
    id: "innovation-sprints",
    title: { en: "Innovation sprints", de: "Innovation Sprints" },
    x: 72.0,
    y: 70.0,
    r: 3.8,
    areas: ["entrepreneurship"],
    source: "strategy",
    moreUrl:
      "https://web.archive.org/web/20250909154152/https://www.rwth-innovation.de/de/gruender/angebote/innovation-sprint",
    summary: {
      en: "A transfer measure of the new Excellence phase: Innovation Sprints to encourage entrepreneurial ventures and strengthen follow-up into programmes such as EXIST — also open to internationals. Building on the proven idea of fast prototype support for research-based spin-offs.",
      de: "Eine Transfermaßnahme der neuen Exzellenzphase: Innovation Sprints, um unternehmerische Vorhaben anzuregen und den Anschluss an Programme wie EXIST zu stärken — auch offen für Internationale. Aufbauend auf der bewährten Idee schneller Prototypenförderung für forschungsbasierte Ausgründungen."
    },
    bullets: {
      en: [
        "ExU measure (new): encourage entrepreneurial ventures",
        "Stronger follow-up into EXIST; open to internationals",
        "Core idea: rapid prototype support toward spin-off",
        "Proven under ESC.NRW; continued in the new ExU phase"
      ],
      de: [
        "ExU-Maßnahme (neu): unternehmerische Vorhaben anregen",
        "Stärkerer EXIST-Anschluss; offen für Internationale",
        "Kernidee: schnelle Prototypenförderung Richtung Ausgründung",
        "Bewährt unter ESC.NRW; fortgeführt in der neuen ExU-Phase"
      ]
    }
  },
  {
    id: "gateway-factory",
    title: { en: "Gateway Factory", de: "Gateway Factory" },
    x: 86.5,
    y: 70.5,
    r: 4.0,
    areas: ["entrepreneurship", "relationship"],
    source: "strategy",
    moreUrl:
      "https://www.gateway-factory.de/",
    summary: {
      en: "An ambition shared across the Rhineland — as equal partners RWTH Aachen, the Gateway universities of Cologne, HHU Düsseldorf and Start2, with industry — to grow European DeepTech champions beyond the founding phase. One of Germany’s ten EXIST Startup Factories, it closes the scale-up gap with programmes, capital access and production infrastructure while keeping ventures anchored in the region.",
      de: "Eine gemeinsame Ambition im Rheinland — als gleichberechtigte Partner RWTH Aachen, die Gateway-Hochschulen Köln, HHU Düsseldorf und Start2 mit der Industrie —, europäische DeepTech-Champions über die Gründungsphase hinaus wachsen zu lassen. Als eine von zehn EXIST-Startup-Factories Deutschlands schließt sie die Scale-up-Lücke mit Programmen, Kapitalzugang und Produktionsinfrastruktur — und hält Vorhaben in der Region verankert."
    },
    bullets: {
      en: [
        "Ambition: European DeepTech champions made in the Rhineland",
        "Equal partnership: RWTH – Cologne – Düsseldorf – Start2 (+ industry)",
        "One of Germany’s ten EXIST Startup Factories (BMWE)",
        "Scale-up programmes + Production Campus Melaten / labs Cologne"
      ],
      de: [
        "Ambition: europäische DeepTech-Champions made im Rheinland",
        "Gleichberechtigte Partnerschaft: RWTH – Köln – Düsseldorf – Start2 (+ Industrie)",
        "Eine von zehn EXIST-Startup-Factories Deutschlands (BMWE)",
        "Scale-up-Programme + Production Campus Melaten / Labs Köln"
      ]
    }
  },
  {
    id: "transfer-in-teaching",
    title: { en: "Transfer in teaching", de: "Transfer in der Lehre" },
    x: 70.3,
    y: 94.3,
    r: 3.8,
    areas: ["teaching"],
    source: "strategy",
    moreUrl:
      "https://www.ezw.rwth-aachen.de/cms/ezw/das-institut/professuren/~ixkt/innovation-und-transfer-in-bildungssystemen/",
    summary: {
      en: "Transfer-oriented teaching and further education integrate entrepreneurial thinking, innovation and societal responsibility into academic learning. Beyond campus formats, this includes school materials, teacher professional development, language support and executive education — practice strengthened across faculties, including the Faculty of Arts and Humanities.",
      de: "Transferorientierte Lehre und Weiterbildung integrieren unternehmerisches Denken, Innovation und gesellschaftliche Verantwortung in akademisches Lernen. Über Campus-Formate hinaus gehören dazu Lehrmaterialien für Schulen, Lehrkräftefortbildung, Sprachförderung und Executive Education — Praxis, die fakultätsübergreifend gestärkt wird, auch an der Philosophischen Fakultät."
    },
    bullets: {
      en: [
        "Integrating transfer into teaching, curricula and further education",
        "Formats include Honors College, thematic schools, hackathons and maker spaces",
        "Also school materials, teacher CPD, language support and executive education",
        "Expanding transfer-oriented teaching as part of an Integrated Transfer Strategy"
      ],
      de: [
        "Transfer in Lehre, Curricula und Weiterbildung integrieren",
        "Formate umfassen Honors College, thematische Schools, Hackathons und Maker Spaces",
        "Auch Lehrmaterialien für Schulen, Lehrkräftefortbildung, Sprachförderung und Executive Education",
        "Ausbau transferorientierter Lehre als Teil einer integrierten Transferstrategie"
      ]
    }
  },
  {
    id: "transfer-areas",
    title: {
      en: "Transfer areas at RWTH",
      de: "Transferfelder an der RWTH"
    },
    x: 14.5,
    y: 76.0,
    r: 5.0,
    onMap: false,
    areas: [
      "collaboration",
      "entrepreneurship",
      "research-infra",
      "relationship",
      "society",
      "advice",
      "dialogue",
      "teaching"
    ],
    source: "strategy",
    moreUrl: "https://www.rwth-aachen.de/cms/root/~eew/transfer/",
    summary: {
      en: "RWTH structures transfer with the Stifterverband Transfer Barometer: eight transfer fields enabled by institutional prerequisites (strategy, incentives, structures, resources). The strategy phase emphasises research-based collaboration & exploitation, entrepreneurship and relationship management, while preparing fuller integration of teaching, science dialogue, advice and co-creation with society — fields where the Faculty of Arts and Humanities (Faculty 7) already contributes concrete practice.",
      de: "Die RWTH strukturiert Transfer mit dem Transfer-Barometer des Stifterverbands: acht Transferfelder, getragen von institutionellen Voraussetzungen (Strategie, Anreize, Strukturen, Ressourcen). Die Strategiephase betont forschungsbasierte Kooperation & Verwertung, Entrepreneurship und Relationship Management und bereitet die stärkere Integration von Lehre, Wissenschaftsdialog, Beratung und Co-Creation mit der Gesellschaft vor — Felder, in denen die Philosophische Fakultät (Fak. 7) bereits konkrete Praxis einbringt."
    },
    bullets: {
      en: [
        "Research-based collaboration and commercialisation",
        "Entrepreneurship · Research infrastructure · Relationship management",
        "R&D with society · Scientific advice · Science dialogue",
        "Transfer-oriented teaching — with Faculty 7 practice across advice, education, design, formats, transformation and dialogue"
      ],
      de: [
        "Forschungsbasierte Kooperation und Verwertung",
        "Entrepreneurship · Forschungsinfrastruktur · Relationship Management",
        "FuE mit der Gesellschaft · Wissenschaftliche Beratung · Wissenschaftsdialog",
        "Transferorientierte Lehre — mit Praxis der Fak. 7 in Beratung, Bildung, Gestaltung, Formaten, Transformation und Dialog"
      ]
    }
  }
];

window.TRANSFER_AREA_LABELS = {
  collaboration: {
    en: "Research-based collaboration and commercialisation",
    de: "Forschungsbasierte Kooperation und Verwertung"
  },
  entrepreneurship: {
    en: "Entrepreneurship",
    de: "Entrepreneurship"
  },
  "research-infra": {
    en: "Research infrastructure",
    de: "Forschungsinfrastruktur"
  },
  relationship: {
    en: "Relationship management",
    de: "Relationship Management"
  },
  society: {
    en: "R&D with society",
    de: "FuE mit der Gesellschaft"
  },
  advice: {
    en: "Scientific advice",
    de: "Wissenschaftliche Beratung"
  },
  dialogue: {
    en: "Science dialogue",
    de: "Wissenschaftsdialog"
  },
  teaching: {
    en: "Transfer-oriented teaching",
    de: "Transferorientierte Lehre"
  }
};
