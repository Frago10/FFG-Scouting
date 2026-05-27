export type Lang = "en" | "es";

export const dict = {
  en: {
    brand: {
      short: "FFG",
      long: "FFG-Scouting",
      tagline: "Beyond the game. Global athlete careers."
    },
    nav: {
      who: "Who We Are",
      philosophy: "Philosophy",
      process: "How We Work",
      services: "Services",
      staff: "Staff",
      book: "Book Assessment"
    },
    hero: {
      tag: "Global Athlete Career Advisory",
      first: "Beyond",
      last: "the game.",
      sub: "FFG-Scouting builds real, sustainable international careers for athletes and their families. Strategy. Clarity. Execution.",
      active: "Booking Open",
      stats: [
        { v: "15–28", l: "Athlete age range" },
        { v: "4", l: "Continents covered" },
        { v: "0", l: "False promises" }
      ],
      ctaPrimary: "Book Athlete Path Assessment",
      ctaSecondary: "Read the Philosophy",
      footnote: "/01 · We don't sell dreams. We design processes.",
      scroll: "Scroll"
    },
    who: {
      section: "Section 01 · Who We Are",
      title1: "A global advisory",
      title2: "for serious careers.",
      pillars: [
        {
          k: "Advisory",
          t: "International consultancy",
          d: "We sit on the same side as athletes and families. Independent counsel — no hidden agency fees, no third-party loyalties."
        },
        {
          k: "Pathway",
          t: "Real, sustainable careers",
          d: "We design global pathways that hold up over a decade — not the loudest deal of the month."
        },
        {
          k: "Method",
          t: "Strategy · clarity · execution",
          d: "Diagnosis before action. A pathway before a transfer. Execution before a promise."
        }
      ]
    },
    philosophy: {
      section: "Section 02 · Philosophy",
      title1: "We don't promise contracts.",
      title2: "We build pathways.",
      mantras: [
        {
          en: "We don't promise contracts — we build pathways.",
          es: "No prometemos contratos — construimos caminos."
        },
        {
          en: "We don't sell dreams. We design processes.",
          es: "No vendemos sueños. Diseñamos procesos."
        },
        {
          en: "Right decisions > fast decisions.",
          es: "Decisiones correctas > decisiones rápidas."
        },
        {
          en: "The right environment changes everything.",
          es: "El entorno correcto lo cambia todo."
        }
      ],
      footer: "Built from real high-performance experience — beyond the game."
    },
    serve: {
      section: "Section 03 · Who We Serve",
      title1: "Built for athletes",
      title2: "who want clarity.",
      cards: [
        {
          k: "01",
          t: "Athletes",
          d: "Talents at the inflection point — about to decide what the next 10 years of their life look like."
        },
        {
          k: "02",
          t: "Families seeking structure",
          d: "Parents who want a real plan and an honest voice in a market full of noise and middlemen."
        },
        {
          k: "03",
          t: "International opportunities",
          d: "Europe & USA pathways — academy, college, professional. The corridor between LATAM and the rest of the world."
        },
        {
          k: "04",
          t: "Injury / stalled careers",
          d: "Post-injury transitions, plateaus, contract limbos — moments when the next move matters most."
        }
      ]
    },
    process: {
      section: "Section 04 · How We Work",
      title1: "Four steps.",
      title2: "Zero shortcuts.",
      sub: "A repeatable system we run with every athlete — from the first call to the contract that follows.",
      steps: [
        {
          k: "01",
          t: "Athlete Path Assessment",
          tag: "Diagnosis",
          d: "A 30–40 min deep-dive: profile, level, ambition, family context, current market position. Output: an honest read of where you really stand."
        },
        {
          k: "02",
          t: "Strategy & Pathway Plan",
          tag: "Route",
          d: "A written, dated plan. Targets, fallback routes, timeline. The map you can actually defend to a sporting director or to your own family."
        },
        {
          k: "03",
          t: "Opportunity Activation",
          tag: "Network",
          d: "We open doors with clubs, academies, scouts and universities — only the doors that align with the plan. Quality of fit over quantity of trials."
        },
        {
          k: "04",
          t: "Ongoing Guidance",
          tag: "Execution",
          d: "We stay on the field. Decisions reviewed in real time, contracts pressure-tested, the next 12 months protected — not just the next 12 weeks."
        }
      ]
    },
    services: {
      section: "Section 04 · Services",
      title1: "Services.",
      title2: "",
      sub: "Every engagement starts with the Assessment. Pricing is shared once we understand your situation.",
      items: [
        {
          k: "S1",
          t: "Athlete Path Assessment",
          unit: "Diagnostic · 30–40 min",
          d: "The diagnostic call. Honest read of level, market fit and realistic next steps.",
          best: false
        },
        {
          k: "S2",
          t: "Career Path Advisory",
          unit: "Continuous · min. 3 months",
          d: "Continuous advisory over a horizon. Monthly check-ins, decision support, market intel.",
          best: true
        },
        {
          k: "S3",
          t: "USA Athlete Path Program",
          unit: "Full pathway",
          d: "Full-spectrum path to U.S. collegiate / pro: positioning, school targeting, NCAA navigation.",
          best: false
        },
        {
          k: "S4",
          t: "Private Advisory",
          unit: "Bespoke engagement",
          d: "Confidential engagement for elite individual cases. Scope built around the athlete.",
          best: false
        }
      ]
    },
    staff: {
      section: "Section 05 · Staff",
      title1: "The people",
      title2: "behind the path.",
      sub: "Built from real high-performance experience. Click a profile to expand.",
      open: "Open profile",
      close: "Close",
      members: [
        {
          id: "malcom",
          name: "Malcom Frago",
          role: "Founder · Active Pro Footballer · Lead Advisor",
          locale: "San José ↔ Madrid",
          short: "Active professional footballer playing in Spain. Aspire Academy alumnus with experience across Europe / USA / Middle East / LATAM. He advises athletes from the only place that matters: the inside of the dressing room.",
          tags: ["Founder", "Active Pro", "Scouter"]
        },
        {
          id: "advisor-2",
          name: "Advisor · ESP Desk",
          role: "Network & Club Relations",
          locale: "Madrid",
          short: "Profile available upon engagement.",
          tags: ["Network", "ESP"]
        },
        {
          id: "advisor-3",
          name: "Advisor · USA Desk",
          role: "NCAA & Collegiate Pathways",
          locale: "Greenville · USA",
          short: "Profile available upon engagement.",
          tags: ["NCAA", "USA"]
        }
      ],
      malcom: {
        kicker: "Founder · Active Pro Footballer",
        intro:
          "Malcom Frago is a former international football player and sports entrepreneur with a career developed across elite environments in Europe, the United States, Central America and the Middle East. Selected at a young age for one of the world's most prestigious football development programs, Aspire Academy in Doha, Qatar, he later continued his progression within professional structures connected to clubs and high-performance systems internationally.\n\nAfter years of firsthand experience inside the competitive world of football — understanding both the opportunities and the challenges that talented players face — Malcolm transitioned his knowledge, international network and professional experience into the creation of a platform dedicated to helping athletes advance their careers beyond borders.\n\nToday, through Frago Football Group, he works closely with players and families to create real pathways toward professional clubs, academies, scholarships and university opportunities around the world. The agency is built on a combination of international exposure, strategic guidance, honest mentorship and a deep understanding of the modern football industry from the inside.\n\nHaving personally experienced the realities of elite football development, international transitions and career decision-making at a young age, Malcolm brings a unique perspective focused not only on talent, but also on discipline, mentality, commitment and long-term growth.\n\nFrago Football Group was created with a clear vision: to connect ambitious players with genuine opportunities and help them maximize their potential both on and off the field.",
        dual: {
          playerTitle: "The Player",
          playerSub: "Feels the grass.",
          playerBody:
            "Forged at Aspire Academy, sharpened in Saprissa Sub-23, the United States and Spain. He played where space is rare and decisions are split-second — and he never stopped scanning. That muscle now goes into every advisory call.",
          playerBullets: [
            "Forward / Attacking midfielder",
            "Right footed · Two-footed shooter",
            "Press-resistant under pressure",
            "Lived 5 football cultures from inside"
          ],
          scouterTitle: "The Advisor",
          scouterSub: "Reads the future.",
          scouterBody:
            "A footballer who lives the dressing room from inside has a window the analyst will never own. Malcom advises athletes & elite Spanish clubs — connecting Latin America with European decision-makers. He doesn't sell players; he builds careers and lowers risk.",
          scouterBullets: [
            "U-15 → U-23 talent identification",
            "Latin America ↔ Europe corridor",
            "Tactical fit & psychological screening",
            "Long-form pathways, not transactions"
          ]
        },
        stats: [
          { v: "13+", l: "Years professional" },
          { v: "5", l: "Countries lived" },
          { v: "200+", l: "Reports per year" },
          { v: "08", l: "Pro contracts · '24" }
        ],
        chapters: [
          {
            year: "2010–14",
            place: "Seattle Sounders FC",
            flag: "🇺🇸",
            coord: "47°N · 122°W",
            title: "The Forge",
            body:
              "Selected for one of the world's most rigorous academies. Trained alongside top global U-15 prospects. Built a foundation that lives in the body forever: discipline, repetition, decision speed."
          },
          {
            year: "2015–17",
            place: "Saprissa Sub-23",
            flag: "🇨🇷",
            coord: "09°N · 84°W",
            title: "The Street",
            body:
              "Promoted to Deportivo Saprissa's Sub-23 — the development engine of Costa Rica's most decorated club. The Tibás school of grit, where a kid becomes a professional."
          },
          {
            year: "2018–19",
            place: "United States",
            flag: "🇺🇸",
            coord: "37°N · 95°W",
            title: "The System",
            body:
              "USL & American collegiate structure with Greenville Triumph. Data-led player development, analytics rooms, video review. First exposure to scouting as a profession."
          },
          {
            year: "2020–22",
            place: "Costa Rica",
            flag: "🇨🇷",
            coord: "09°N · 84°W",
            title: "The Return",
            body:
              "Senior football in Primera División. Captaincy moments, leadership in a young dressing room — and the first scouting reports written for European desks."
          },
          {
            year: "2023–Now",
            place: "España",
            flag: "🇪🇸",
            coord: "40°N · 3°W",
            title: "The Dual Mandate",
            body:
              "Active footballer in Spain & advisor for elite Spanish clubs. FFG-Scouting is born — Latin America to Europe corridor, built by someone who lives both sides of the line."
          }
        ],
        social: {
          ig: "@_fragom11",
          igUrl: "https://instagram.com/_fragom11"
        }
      }
    },
    manifesto: {
      section: "Section 06 · Manifesto",
      signed: "Signed",
      role: "Founder · FFG-Scouting",
      where: "San José ↔ Madrid",
      year: "MMXXVI",
      words: [
        { t: "Real", c: "lime" },
        { t: "careers.", c: "cream" },
        { t: "Smart", c: "gold" },
        { t: "decisions.", c: "cream" },
        { t: "Beyond", c: "cream" },
        { t: "the", c: "cream" },
        { t: "game.", c: "shimmer" }
      ]
    },
    contact: {
      section: "Section 07 · Booking",
      title1: "Book your",
      title2: "Athlete Path Assessment.",
      sub: "DM 'PATH' on Instagram, or open a WhatsApp line below. We reply within 48h.",
      steps: ["DM 'PATH' on Instagram", "Send 'PATH' on WhatsApp → quick details", "Schedule call → Assessment → next steps"],
      whatsappEs: "WhatsApp Spain",
      whatsappCr: "WhatsApp Costa Rica",
      instagram: "Instagram",
      instagramHandle: "@athletepathfrago",
      name: "Name",
      role: "I am a…",
      roles: ["Athlete", "Parent / Family", "Club / Sporting director", "Other"],
      email: "Email",
      message: "Tell us about your situation",
      transmit: "Request Assessment",
      current: "Currently",
      open: "Open to engagements",
      tagline: "Real careers. Smart decisions. Beyond the game."
    },
    footer: {
      tagline: "FFG-Scouting · Global Athlete Career Advisory. The corridor between Latin America and Europe.",
      site: "Site",
      contact: "Contact",
      network: "Network",
      rights: "© MMXXVI · FFG-Scouting. All rights reserved.",
      designed: "Designed in Madrid · Built in Costa Rica",
      version: "v3.2 · CONFIDENTIAL"
    },
    ui: {
      advisoryTag: "Athlete Career Advisory",
      founderTag: "FOUNDER",
      advisorTag: "ADVISOR",
      clickExpand: "Click to expand full profile",
      founderRoleFull: "Founder · Active Pro Footballer · Lead Advisor",
      trajectory: "Trajectory · Five passports",
      chapterPrefix: "CH.",
      endProfile: "END OF PROFILE",
      confidential: "FFG-SCOUTING · CONFIDENTIAL",
      recommended: "RECOMMENDED",
      serveLabels: ["ATHLETE", "FAMILY", "GLOBAL", "TRANSITION"],
      staffProfiles: "Staff profiles",
      founderIG: "Founder IG",
      openChat: "open chat"
    },
    ticker: [
      "BEYOND THE GAME",
      "GLOBAL ATHLETE CAREERS",
      "STRATEGY",
      "CLARITY",
      "EXECUTION",
      "NO FALSE PROMISES",
      "PATHWAYS, NOT TRANSFERS",
      "FFG-SCOUTING"
    ],
    form: {
      required: "Name, email and message are required.",
      sending: "Sending…",
      sent: "Message sent — we'll be in touch.",
      error: "Something went wrong. Try WhatsApp.",
      network: "Network error. Please try WhatsApp."
    }
  },

  es: {
    brand: {
      short: "FFG",
      long: "FFG-Scouting",
      tagline: "Más allá del juego. Carreras globales para atletas."
    },
    nav: {
      who: "Quiénes Somos",
      philosophy: "Filosofía",
      process: "Cómo Trabajamos",
      services: "Servicios",
      staff: "Staff",
      book: "Agendar Evaluación"
    },
    hero: {
      tag: "Consultoría Global de Carrera Deportiva",
      first: "Más allá",
      last: "del juego.",
      sub: "FFG-Scouting construye carreras internacionales reales y sostenibles para atletas y sus familias. Estrategia. Claridad. Ejecución.",
      active: "Agenda abierta",
      stats: [
        { v: "15–28", l: "Rango de edad atleta" },
        { v: "4", l: "Continentes cubiertos" },
        { v: "0", l: "Promesas falsas" }
      ],
      ctaPrimary: "Agendar Athlete Path Assessment",
      ctaSecondary: "Leer la Filosofía",
      footnote: "/01 · No vendemos sueños. Diseñamos procesos.",
      scroll: "Scroll"
    },
    who: {
      section: "Sección 01 · Quiénes Somos",
      title1: "Una consultoría global",
      title2: "para carreras serias.",
      pillars: [
        {
          k: "Asesoría",
          t: "Consultoría internacional",
          d: "Estamos del mismo lado del atleta y la familia. Consejo independiente — sin comisiones ocultas ni lealtades a terceros."
        },
        {
          k: "Camino",
          t: "Carreras reales y sostenibles",
          d: "Diseñamos caminos globales que aguantan una década — no el contrato más ruidoso del mes."
        },
        {
          k: "Método",
          t: "Estrategia · claridad · ejecución",
          d: "Diagnóstico antes que acción. Camino antes que traspaso. Ejecución antes que promesa."
        }
      ]
    },
    philosophy: {
      section: "Sección 02 · Filosofía",
      title1: "No prometemos contratos.",
      title2: "Construimos caminos.",
      mantras: [
        {
          en: "No prometemos contratos — construimos caminos.",
          es: "No prometemos contratos — construimos caminos."
        },
        {
          en: "No vendemos sueños: diseñamos procesos.",
          es: "No vendemos sueños: diseñamos procesos."
        },
        {
          en: "Decisiones correctas > decisiones rápidas.",
          es: "Decisiones correctas > decisiones rápidas."
        },
        {
          en: "El entorno correcto lo cambia todo.",
          es: "El entorno correcto lo cambia todo."
        }
      ],
      footer: "Construido desde experiencia real de alto rendimiento — más allá del juego."
    },
    serve: {
      section: "Sección 03 · Para Quién Es",
      title1: "Hecho para atletas",
      title2: "que quieren claridad.",
      cards: [
        {
          k: "01",
          t: "Atletas",
          d: "Talentos en el punto de inflexión — a punto de decidir cómo se verán los próximos 10 años de su vida."
        },
        {
          k: "02",
          t: "Familias que buscan estructura",
          d: "Padres que quieren un plan real y una voz honesta en un mercado lleno de ruido e intermediarios."
        },
        {
          k: "03",
          t: "Oportunidades internacionales",
          d: "Caminos a Europa y USA — academia, universidad, profesional. El corredor entre LATAM y el resto del mundo."
        },
        {
          k: "04",
          t: "Lesión / carrera estancada",
          d: "Transiciones post-lesión, mesetas, contratos en limbo — momentos donde la siguiente decisión importa más."
        }
      ]
    },
    process: {
      section: "Sección 04 · Cómo Trabajamos",
      title1: "Cuatro pasos.",
      title2: "Cero atajos.",
      sub: "Un sistema repetible que aplicamos con cada atleta — desde la primera llamada hasta el contrato que sigue.",
      steps: [
        {
          k: "01",
          t: "Athlete Path Assessment",
          tag: "Diagnóstico",
          d: "Profundidad de 30–40 min: perfil, nivel, ambición, contexto familiar, posición real en el mercado. Output: una lectura honesta de dónde estás."
        },
        {
          k: "02",
          t: "Estrategia y Ruta",
          tag: "Ruta",
          d: "Un plan escrito y con fechas. Objetivos, rutas alternas, timeline. El mapa que sí puedes defender frente a un director deportivo o frente a tu propia familia."
        },
        {
          k: "03",
          t: "Activación de Oportunidades",
          tag: "Red",
          d: "Abrimos puertas con clubes, academias, scouts y universidades — solo las puertas que encajan en el plan. Calidad de encaje antes que cantidad de pruebas."
        },
        {
          k: "04",
          t: "Acompañamiento Continuo",
          tag: "Ejecución",
          d: "Seguimos en cancha. Decisiones revisadas en tiempo real, contratos auditados, los próximos 12 meses protegidos — no solo las próximas 12 semanas."
        }
      ]
    },
    services: {
      section: "Sección 04 · Servicios",
      title1: "Servicios.",
      title2: "",
      sub: "Toda colaboración empieza con el Assessment. El precio se comparte cuando entendemos tu situación.",
      items: [
        {
          k: "S1",
          t: "Athlete Path Assessment",
          unit: "Diagnóstico · 30–40 min",
          d: "La llamada diagnóstica. Lectura honesta de nivel, encaje de mercado y próximos pasos realistas.",
          best: false
        },
        {
          k: "S2",
          t: "Career Path Advisory",
          unit: "Continuo · mín. 3 meses",
          d: "Asesoría continua sobre un horizonte. Revisiones mensuales, soporte de decisiones, inteligencia de mercado.",
          best: true
        },
        {
          k: "S3",
          t: "USA Athlete Path Program",
          unit: "Camino completo",
          d: "Ruta completa al sistema universitario / pro de EE. UU.: posicionamiento, selección de universidad, navegación NCAA.",
          best: false
        },
        {
          k: "S4",
          t: "Asesoría Privada",
          unit: "Encargo a medida",
          d: "Encargo confidencial para casos individuales de élite. Alcance diseñado alrededor del atleta.",
          best: false
        }
      ]
    },
    staff: {
      section: "Sección 05 · Staff",
      title1: "La gente",
      title2: "detrás del camino.",
      sub: "Construido desde experiencia real de alto rendimiento. Clic en un perfil para expandir.",
      open: "Abrir perfil",
      close: "Cerrar",
      members: [
        {
          id: "malcom",
          name: "Malcom Frago",
          role: "Fundador · Futbolista Pro Activo · Lead Advisor",
          locale: "San José ↔ Madrid",
          short: "Futbolista profesional en activo en España. Alumno de Aspire Academy con experiencia en Europa / USA / Medio Oriente / LATAM. Asesora atletas desde el único lugar que importa: adentro del vestuario.",
          tags: ["Fundador", "Pro Activo", "Scouter"]
        },
        {
          id: "advisor-2",
          name: "Advisor · ESP Desk",
          role: "Red y Relaciones con Clubes",
          locale: "Madrid",
          short: "Perfil disponible bajo colaboración.",
          tags: ["Red", "ESP"]
        },
        {
          id: "advisor-3",
          name: "Advisor · USA Desk",
          role: "NCAA y Rutas Universitarias",
          locale: "Greenville · USA",
          short: "Perfil disponible bajo colaboración.",
          tags: ["NCAA", "USA"]
        }
      ],
      malcom: {
        kicker: "Fundador · Futbolista Pro Activo",
        intro:
          "Malcom Frago es un exfutbolista internacional y empresario deportivo con una carrera desarrollada en entornos de élite en Europa, Estados Unidos, Centroamérica y Medio Oriente. Seleccionado a una edad temprana para uno de los programas de desarrollo futbolístico más prestigiosos del mundo, la Aspire Academy en Doha, Qatar, continuó su progresión dentro de estructuras profesionales vinculadas a clubes y sistemas de alto rendimiento a nivel internacional.\n\nTras años de experiencia de primera mano dentro del competitivo mundo del fútbol — comprendiendo tanto las oportunidades como los desafíos que enfrentan los jugadores con talento — Malcom trasladó su conocimiento, su red internacional y su experiencia profesional a la creación de una plataforma dedicada a ayudar a atletas a avanzar en sus carreras más allá de las fronteras.\n\nHoy, a través de Frago Football Group, trabaja estrechamente con jugadores y familias para crear caminos reales hacia clubes profesionales, academias, becas y oportunidades universitarias en todo el mundo. La agencia se construye sobre una combinación de exposición internacional, orientación estratégica, mentoría honesta y un profundo conocimiento de la industria del fútbol moderno desde adentro.\n\nHabiendo experimentado personalmente las realidades del desarrollo futbolístico de élite, las transiciones internacionales y la toma de decisiones de carrera a una edad temprana, Malcom aporta una perspectiva única enfocada no solo en el talento, sino también en la disciplina, la mentalidad, el compromiso y el crecimiento a largo plazo.\n\nFrago Football Group fue creado con una visión clara: conectar a jugadores ambiciosos con oportunidades genuinas y ayudarlos a maximizar su potencial dentro y fuera del campo.",
        dual: {
          playerTitle: "El Jugador",
          playerSub: "Siente el césped.",
          playerBody:
            "Forjado en Aspire Academy, afilado en Saprissa Sub-23, Estados Unidos y España. Jugó donde el espacio es escaso y la decisión dura una décima — y nunca dejó de escanear. Ese músculo entra en cada llamada de asesoría.",
          playerBullets: [
            "Delantero / Mediapunta",
            "Diestro · Definidor con las dos",
            "Resistente al press",
            "Vivió 5 culturas futbolísticas desde adentro"
          ],
          scouterTitle: "El Advisor",
          scouterSub: "Lee el futuro.",
          scouterBody:
            "Un futbolista que vive el vestuario desde adentro tiene una ventana que el analista nunca tendrá. Malcom asesora atletas y clubes españoles de élite — conectando Latinoamérica con tomadores de decisión europeos. No vende jugadores; construye carreras y reduce el riesgo.",
          scouterBullets: [
            "Identificación Sub-15 → Sub-23",
            "Corredor Latinoamérica ↔ Europa",
            "Encaje táctico y filtro psicológico",
            "Caminos de largo plazo, no transacciones"
          ]
        },
        stats: [
          { v: "13+", l: "Años profesional" },
          { v: "5", l: "Países vividos" },
          { v: "200+", l: "Reportes por año" },
          { v: "08", l: "Contratos pro · '24" }
        ],
        chapters: [
          {
            year: "2010–14",
            place: "Seattle Sounders FC",
            flag: "🇺🇸",
            coord: "47°N · 122°W",
            title: "La Fragua",
            body:
              "Seleccionado para una de las academias más rigurosas del mundo. Entrenó junto a los mejores prospectos Sub-15 del planeta. Disciplina, repetición y velocidad de decisión metidas en el cuerpo para siempre."
          },
          {
            year: "2015–17",
            place: "Saprissa Sub-23",
            flag: "🇨🇷",
            coord: "09°N · 84°W",
            title: "La Calle",
            body:
              "Promovido a la Sub-23 del Deportivo Saprissa — motor de cantera del club más laureado de Costa Rica. La escuela de Tibás, donde un chico se hace profesional."
          },
          {
            year: "2018–19",
            place: "Estados Unidos",
            flag: "🇺🇸",
            coord: "37°N · 95°W",
            title: "El Sistema",
            body:
              "USL y estructura universitaria con Greenville Triumph. Desarrollo basado en datos, salas de analítica, revisión de video. Primera exposición al scouting como profesión."
          },
          {
            year: "2020–22",
            place: "Costa Rica",
            flag: "🇨🇷",
            coord: "09°N · 84°W",
            title: "El Regreso",
            body:
              "Fútbol senior en Primera División. Momentos de capitanía, liderazgo en un vestuario joven — y los primeros reportes de scouting escritos para mesas europeas."
          },
          {
            year: "2023–Hoy",
            place: "España",
            flag: "🇪🇸",
            coord: "40°N · 3°W",
            title: "El Mandato Dual",
            body:
              "Futbolista activo en España y asesor para clubes españoles de élite. Nace FFG-Scouting — corredor de Latinoamérica a Europa construido por alguien que vive ambos lados."
          }
        ],
        social: {
          ig: "@_fragom11",
          igUrl: "https://instagram.com/_fragom11"
        }
      }
    },
    manifesto: {
      section: "Sección 06 · Manifiesto",
      signed: "Firma",
      role: "Fundador · FFG-Scouting",
      where: "San José ↔ Madrid",
      year: "MMXXVI",
      words: [
        { t: "Carreras", c: "cream" },
        { t: "reales.", c: "lime" },
        { t: "Decisiones", c: "cream" },
        { t: "inteligentes.", c: "gold" },
        { t: "Más", c: "cream" },
        { t: "allá", c: "cream" },
        { t: "del", c: "cream" },
        { t: "juego.", c: "shimmer" }
      ]
    },
    contact: {
      section: "Sección 07 · Reservas",
      title1: "Agenda tu",
      title2: "Athlete Path Assessment.",
      sub: "Escribe 'PATH' por Instagram, o abre una línea de WhatsApp abajo. Respondemos en menos de 48h.",
      steps: ["Escribe 'PATH' por Instagram", "Envía 'PATH' por WhatsApp → detalles rápidos", "Agenda llamada → Assessment → próximos pasos"],
      whatsappEs: "WhatsApp España",
      whatsappCr: "WhatsApp Costa Rica",
      instagram: "Instagram",
      instagramHandle: "@athletepathfrago",
      name: "Nombre",
      role: "Soy un…",
      roles: ["Atleta", "Padre / Familia", "Club / Director deportivo", "Otro"],
      email: "Email",
      message: "Cuéntanos tu situación",
      transmit: "Solicitar Assessment",
      current: "Actualmente",
      open: "Abierto a colaboraciones",
      tagline: "Carreras reales. Decisiones inteligentes. Más allá del juego."
    },
    footer: {
      tagline: "FFG-Scouting · Consultoría global de carrera deportiva. El corredor entre Latinoamérica y Europa.",
      site: "Sitio",
      contact: "Contacto",
      network: "Red",
      rights: "© MMXXVI · FFG-Scouting. Todos los derechos reservados.",
      designed: "Diseñado en Madrid · Construido en Costa Rica",
      version: "v3.2 · CONFIDENCIAL"
    },
    ui: {
      advisoryTag: "Consultoría de Carrera Deportiva",
      founderTag: "FUNDADOR",
      advisorTag: "ASESOR",
      clickExpand: "Click para expandir el perfil completo",
      founderRoleFull: "Fundador · Futbolista Pro Activo · Lead Advisor",
      trajectory: "Trayectoria · Cinco pasaportes",
      chapterPrefix: "CAP.",
      endProfile: "FIN DEL PERFIL",
      confidential: "FFG-SCOUTING · CONFIDENCIAL",
      recommended: "RECOMENDADO",
      serveLabels: ["ATLETA", "FAMILIA", "GLOBAL", "TRANSICIÓN"],
      staffProfiles: "Perfiles del staff",
      founderIG: "IG del fundador",
      openChat: "abrir chat"
    },
    ticker: [
      "MÁS ALLÁ DEL JUEGO",
      "CARRERAS GLOBALES PARA ATLETAS",
      "ESTRATEGIA",
      "CLARIDAD",
      "EJECUCIÓN",
      "SIN PROMESAS FALSAS",
      "CAMINOS, NO TRASPASOS",
      "FFG-SCOUTING"
    ],
    form: {
      required: "Nombre, email y mensaje son requeridos.",
      sending: "Enviando…",
      sent: "Mensaje enviado — te contactaremos pronto.",
      error: "Algo salió mal. Prueba WhatsApp.",
      network: "Error de red. Por favor usa WhatsApp."
    }
  }
};

export type Dict = (typeof dict)["en"];
