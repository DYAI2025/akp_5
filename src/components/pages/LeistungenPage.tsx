import React, { useState } from 'react';
import { PageHeader } from '../PageHeader';
import { AKP_DATA } from '../../data/akp-data';

export const LeistungenPage: React.FC = () => {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <div className="page-grid" style={{ gridTemplateRows: "auto auto 1fr auto", gap: 14 }}>
      <PageHeader 
        num="03 / Leistungen" 
        title="Leistungen & Prozess" 
        subtitle="Vom Entwurf bis zur Schlüsselübergabe" 
        meta="L1 — L8 · Generalplanung" 
      />

      <div className="process-band text-card">
        {AKP_DATA.leistungen.map((p, i) => (
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
            {AKP_DATA.zusatzleistungen.map(s => (
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
        <div className="label-num">
          { hover !== null 
            ? AKP_DATA.leistungen[hover].n + " · " + AKP_DATA.leistungen[hover].t.toUpperCase() 
            : "Hover für Detail · Klick auf Karte für mehr" 
          }
        </div>
        <div className="label-num">L1 ↔ L8 · 8 Phasen</div>
      </div>
    </div>
  );
};
