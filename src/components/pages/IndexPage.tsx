import React from 'react';

interface IndexPageProps {
  go: (pageId: string) => void;
}

export const IndexPage: React.FC<IndexPageProps> = ({ go }) => {
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
};
