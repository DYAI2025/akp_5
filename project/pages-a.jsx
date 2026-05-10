/* AKP — pages: Cover + Index + Büro + Leistungen + Projekt-Archiv */
/* eslint-disable */
const D = window.AKP_DATA;
const { useState, useEffect, useRef, useMemo } = React;

/* ---------- Cover ---------- */
function CoverPage({ go }) {
  return (
    <div className="page-grid cover-grid">
      <div className="cover-head">
        <a className="cover-logo" href="#cover" onClick={(e) => { e.preventDefault(); go("cover"); }} aria-label="AKP Logo">
          <img src="assets/logo-akp.jpg" alt="AKP Architekten Kauschke + Partner" />
        </a>
        <div className="cover-title-block">
          <div className="eyebrow">Architektur & Generalplanung — Berlin</div>
          <h1 className="headline cover-title" style={{ marginTop: 10 }}>
            AKP Architekten<br />
            <span style={{ fontStyle: "italic", fontWeight: 400 }}>Kauschke + Partner</span>
          </h1>
          <div className="cover-subtitle">Architektur und Generalplanung aus Berlin</div>
        </div>
        <div className="cover-meta-right">
          <div>Berlin · seit 1991</div>
          <div>Entwurf — Schlüsselübergabe</div>
          <div>Ausgabe Nº 01 / Atlas</div>
          <div style={{ color: "var(--accent-warm)" }}>● Online</div>
        </div>
      </div>

      <div className="cover-feature image-card" style={{ gridRow: "2 / 4" }}>
        <img src="assets/img-courtyard-wood.jpg" alt="Wohnensemble mit Holzfassaden um einen ruhigen Innenhof" />
        <div className="label">Featured · Wohnen / Holzfassade</div>
      </div>

      <div className="cover-side">
        <div className="img-card image-card">
          <img src="assets/img-residential-greenfacade.jpg" alt="Wohnungsbau mit grüner Fassade" />
          <div className="img-caption"><span>Wohnen</span><span>02</span></div>
        </div>
        <div className="img-card image-card">
          <img src="assets/img-pestalozzi-clinker.jpg" alt="Wohn- und Geschäftshaus mit Klinkerfassade" />
          <div className="img-caption"><span>Klinker · Berlin</span><span>03</span></div>
        </div>
        <div className="card text-card" style={{ padding: 18, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <div className="eyebrow">Leistung</div>
            <div className="serif" style={{ fontSize: 22, marginTop: 6, lineHeight: 1.1 }}>
              Wohnen · Gesundheit · Verwaltung · Gewerbe · Industrie · Sanierung
            </div>
          </div>
          <div className="label-num" style={{ marginTop: 12 }}>06 Felder · 1 Atlas</div>
        </div>
      </div>

      <div className="card-pad cover-claim text-card" style={{ background: "var(--card-2)", border: "1px solid var(--hairline-soft)" }}>
        <p>
          „Architektur, die städtebaulichen Kontext, wirtschaftliche Realisierbarkeit und technische Planungs­sicherheit zusammenführt.“
        </p>
      </div>

      <div className="cover-index meta-card" style={{ gridColumn: "1 / -1" }}>
        <button className="item" onClick={() => go("index")}>
          <span className="num">→</span> Inhaltsverzeichnis
        </button>
        <button className="item" onClick={() => go("projekte")}>
          <span className="num">→</span> Projektarchiv
        </button>
        <button className="item" onClick={() => go("leistungen")}>
          <span className="num">→</span> Leistungen
        </button>
        <button className="item" onClick={() => go("kontakt")}>
          <span className="num">→</span> Kontakt
        </button>
      </div>
    </div>
  );
}

/* ---------- Atlas Index ---------- */
function IndexPage({ go }) {
  const cards = [
    { id: "buero",        n: "02", t: "Büro & Haltung",            l: "Berliner Architekturbüro und Generalplaner — Kontext vor Stilvorgabe." },
    { id: "leistungen",   n: "03", t: "Leistungen & Prozess",      l: "Vom Entwurf bis zur Schlüsselübergabe — eine durchgehende Kette." },
    { id: "projekte",     n: "04", t: "Projektarchiv",             l: "Wohnen, Gesundheit, Verwaltung, Gewerbe, Industrie, Sanierung." },
    { id: "wohnen",       n: "05", t: "Wohnen & Stadtreparatur",   l: "Bau­lückenschluss, Nachverdichtung, preis­günstiger Wohnraum." },
    { id: "gesundheit",   n: "06", t: "Gesundheit & Öffentliches", l: "Klinik, Pflege, Verwaltung und Kultur — funktional kalibriert." },
    { id: "gewerbe",      n: "07", t: "Gewerbe & Industrie",       l: "Funktion, Wirtschaftlichkeit, Vorfertigung, Erweiterbarkeit." },
    { id: "bestand",      n: "08", t: "Bestand & Sanierung",       l: "Bestehende Stadt weiterbauen statt nur neu bebauen." },
    { id: "kompetenzen",  n: "09", t: "Kompetenzen",               l: "Sechs Felder zwischen Stadtreparatur, Energie und Generalplanung." },
    { id: "geschichte",   n: "10", t: "Geschichte & Vita",         l: "Seit 1991 — internationale Erfahrung, Wettbewerbe, Veröffentlichungen." },
    { id: "publikationen",n: "11", t: "Veröffentlichungen",        l: "Eigene Projekte, digitale Planung, Ökologie, Hochhaus." },
    { id: "netzwerk",     n: "12", t: "Netzwerk",                  l: "Tragwerk, TGA, Brandschutz, Vermessung, Energie, Landschaft." },
    { id: "kontakt",      n: "13", t: "Kontakt",                   l: "Hohenzollerndamm 12, 10717 Berlin-Wilmersdorf." }
  ];

  return (
    <div className="page-grid atlas-grid">
      <div className="atlas-head meta-card">
        <div>
          <div className="eyebrow">Inhalt · Atlas</div>
          <h2 className="headline" style={{ fontSize: "clamp(36px, 4vw, 60px)", marginTop: 6 }}>
            Architektonischer Atlas
          </h2>
          <div className="body-text" style={{ marginTop: 6, color: "var(--ink-mute)" }}>
            Büro, Leistungen, Projekte, Kompetenzen, Geschichte und Netzwerk.
          </div>
        </div>
        <div className="cover-meta-right" style={{ alignSelf: "flex-end" }}>
          <div>Mausrad · Pfeiltasten · Klick</div>
          <div>blättern wie im Magazin</div>
        </div>
      </div>
      {cards.map((c, i) => (
        <button
          key={c.id}
          className="atlas-card text-card"
          style={{ gridColumn: `span ${i === 0 ? 4 : i === 1 ? 4 : i === 2 ? 4 : 3}` }}
          onClick={() => go(c.id)}
        >
          <div>
            <div className="num">{c.n} / 14</div>
            <div className="title">{c.t}</div>
            <div className="lede">{c.l}</div>
          </div>
          <div className="open">Aufblättern</div>
        </button>
      ))}
    </div>
  );
}

/* ---------- Generic header ---------- */
function PageHeader({ num, title, subtitle, meta }) {
  return (
    <div className="page-header meta-card">
      <div className="h-left">
        <div className="h-num">{num}</div>
        <div>
          <div className="h-title">{title}</div>
          <div className="eyebrow" style={{ marginTop: 6 }}>{subtitle}</div>
        </div>
      </div>
      <div className="h-meta">{meta}</div>
    </div>
  );
}

/* ---------- Büro & Haltung ---------- */
function BueroPage() {
  return (
    <div className="page-grid" style={{ gridTemplateRows: "auto 1.4fr 1fr", gap: 14 }}>
      <PageHeader num="02 / Büro" title="Büro & Haltung" subtitle="AKP als Generalplaner seit 1991" meta="Berlin · Hohenzollerndamm 12" />
      <div className="page-grid split-2" style={{ padding: 0, gap: 14 }}>
        <div className="card card-pad-lg text-card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <div className="eyebrow">Praxis</div>
            <h3 className="headline" style={{ fontSize: "clamp(24px, 2.4vw, 36px)", marginTop: 8 }}>
              Architektur als Zusammenführung von Ort, Funktion und Wirtschaftlichkeit.
            </h3>
            <p className="body-text body-text-lg" style={{ marginTop: 14, maxWidth: "52ch" }}>
              AKP Architekten Kauschke + Partner ist ein erfahrenes Berliner Architektur­büro und Generalplaner.
              Im Mittelpunkt steht eine Architektur, die städtebaulichen Kontext, Bauherren­interessen,
              Material­angemessenheit und technische Planungssicherheit zusammenführt.
            </p>
            <p className="body-text" style={{ marginTop: 12, maxWidth: "52ch" }}>
              Lösungen entstehen aus dem konkreten Ort, der Funktion, der Wirtschaftlichkeit, der Ökologie
              und dem Bauherrenziel — nicht aus einer materialdogmatischen Haltung. Kostenkontrolle ist
              Teil des Entwurfs, nicht ein nachgelagerter Kompromiss.
            </p>
          </div>
          <div className="label-num" style={{ marginTop: 18 }}>Generalplanung · Wohnen · Gesundheit · Verwaltung · Gewerbe · Industrie · Sanierung</div>
        </div>
        <div className="img-card image-card">
          <img src="assets/img-residential-courtyard.jpg" alt="Wohnungsbau-Hofperspektive aus dem AKP-Archiv" />
          <div className="img-caption"><span>AKP Projektarchiv</span><span>Hofperspektive</span></div>
        </div>
      </div>
      <div className="page-grid haltung-cards text-card" style={{ padding: 0 }}>
        {D.haltung.map(h => (
          <div key={h.n} className="haltung-card">
            <div className="n">{h.n}</div>
            <div className="t">{h.t}</div>
            <div className="d">{h.d}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Leistungen & Prozess ---------- */
function LeistungenPage() {
  const [hover, setHover] = useState(null);
  return (
    <div className="page-grid" style={{ gridTemplateRows: "auto auto 1fr auto", gap: 14 }}>
      <PageHeader num="03 / Leistungen" title="Leistungen & Prozess" subtitle="Vom Entwurf bis zur Schlüsselübergabe" meta="L1 — L8 · Generalplanung" />

      <div className="process-band text-card">
        {D.leistungen.map((p, i) => (
          <div
            key={p.n}
            className="process-step"
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
          >
            <div className="n">{p.n}</div>
            <div className="t">{p.t}</div>
            <div className="d">{p.d}</div>
          </div>
        ))}
      </div>

      <div className="page-grid" style={{ padding: 0, gap: 14, gridTemplateColumns: "1.3fr 1fr" }}>
        <div className="card card-pad-lg text-card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <div className="eyebrow">Zusatzleistungen</div>
            <h3 className="headline" style={{ fontSize: "clamp(20px, 2vw, 28px)", marginTop: 6 }}>
              Mehr als Planung: Analyse, Förderung, Optimierung.
            </h3>
          </div>
          <div className="add-services-grid" style={{ marginTop: 14 }}>
            {D.zusatzleistungen.map(s => (
              <div key={s} className="add-service"><span className="b" />{s}</div>
            ))}
          </div>
        </div>
        <div className="card olive card-pad-lg text-card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <div className="eyebrow" style={{ color: "rgba(241,235,221,0.65)" }}>Nutzen</div>
            <h3 className="headline" style={{ color: "#f1ebdd", fontSize: "clamp(22px, 2.2vw, 32px)", marginTop: 8 }}>
              Von der ersten Analyse bis zur Schlüsselübergabe.
            </h3>
          </div>
          <p className="body-text" style={{ color: "rgba(241,235,221,0.78)", marginTop: 12 }}>
            AKP übernimmt als Generalplaner die durchgehende Verantwortung — Genehmigung, Ausführung,
            Vergabe, Bauleitung und Abrechnung aus einer Hand.
          </p>
        </div>
      </div>

      <div className="meta-card" style={{ display: "flex", justifyContent: "space-between", padding: "10px 4px 0 4px", borderTop: "1px solid var(--hairline)" }}>
        <div className="label-num">{ hover !== null ? D.leistungen[hover].n + " · " + D.leistungen[hover].t.toUpperCase() : "Hover für Detail · Klick auf Karte für mehr" }</div>
        <div className="label-num">L1 ↔ L8 · 8 Phasen</div>
      </div>
    </div>
  );
}

/* ---------- Projektarchiv ---------- */
function ProjekteArchivPage({ openProject }) {
  const [active, setActive] = useState("Alle");
  const filteredAll = useMemo(() => {
    if (active === "Alle") return D.projects;
    return D.projects.filter(p => p.tags.some(t => t.toLowerCase().includes(active.toLowerCase()) || active.toLowerCase().includes(t.toLowerCase())));
  }, [active]);
  const list = filteredAll.slice(0, 5);
  const featured = list[0];
  const rest = list.slice(1, 5);

  return (
    <div className="page-grid" style={{ gridTemplateRows: "auto auto 1fr", gap: 12 }}>
      <PageHeader num="04 / Archiv" title="Projektarchiv" subtitle="Wohnen · Gesundheit · Verwaltung · Gewerbe · Industrie · Sanierung" meta={`${filteredAll.length} Projekte · Filter: ${active}`} />

      <div className="proj-filters meta-card">
        {D.filters.slice(0, 12).map(f => (
          <button
            key={f}
            className={`proj-filter ${active === f ? "active" : ""}`}
            onClick={() => setActive(f)}
          >{f}</button>
        ))}
      </div>

      <div className="proj-grid text-card">
        {featured && (
          <article className="proj-card featured" onClick={() => openProject(featured.id)}>
            <div className={`pc-img ${!featured.img ? "placeholder" : ""}`}>
              {featured.img && <img src={featured.img} alt={featured.title} />}
            </div>
            <div className="pc-meta">
              <div className="pc-typ">Featured · {featured.typ}</div>
              <div className="pc-title">{featured.title}</div>
              <div className="pc-loc">{featured.loc}</div>
              <div className="pc-tags">{featured.tags.map(t => <span key={t}>{t}</span>)}</div>
            </div>
          </article>
        )}
        {rest.map(p => (
          <article key={p.id} className="proj-card" onClick={() => openProject(p.id)}>
            <div className={`pc-img ${!p.img ? "placeholder" : ""}`}>
              {p.img && <img src={p.img} alt={p.title} />}
              {!p.img && (
                <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", color: "var(--ink-mute)", fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase" }}>
                  AKP Archiv
                </div>
              )}
            </div>
            <div className="pc-meta">
              <div className="pc-typ">{p.typ}</div>
              <div className="pc-title">{p.title}</div>
              <div className="pc-loc">{p.loc}</div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

window.AKP_PAGES_A = { CoverPage, IndexPage, BueroPage, LeistungenPage, ProjekteArchivPage, PageHeader };
