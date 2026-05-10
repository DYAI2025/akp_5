import React from 'react';

interface CoverPageProps {
  go: (pageId: string) => void;
}

export const CoverPage: React.FC<CoverPageProps> = ({ go }) => {
  return (
    <div className="page-grid cover-grid">
      <div className="cover-head">
        <a className="cover-logo" href="#cover" onClick={(e) => { e.preventDefault(); go("cover"); }} aria-label="AKP Logo">
          <img src="/assets/logo-akp.jpg" alt="AKP Architekten Kauschke + Partner" />
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
        <img src="/assets/img-courtyard-wood.jpg" alt="Wohnensemble mit Holzfassaden um einen ruhigen Innenhof" />
        <div className="label">Featured · Wohnen / Holzfassade</div>
      </div>

      <div className="cover-side">
        <div className="img-card image-card">
          <img src="/assets/img-residential-greenfacade.jpg" alt="Wohnungsbau mit grüner Fassade" />
          <div className="img-caption"><span>Wohnen</span><span>02</span></div>
        </div>
        <div className="img-card image-card">
          <img src="/assets/img-pestalozzi-clinker.jpg" alt="Wohn- und Geschäftshaus mit Klinkerfassade" />
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
};
