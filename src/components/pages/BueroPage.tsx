import React from 'react';
import { PageHeader } from '../PageHeader';
import { AKP_DATA } from '../../data/akp-data';

export const BueroPage: React.FC = () => {
  return (
    <div className="page-grid" style={{ gridTemplateRows: "auto 1.4fr 1fr", gap: 14 }}>
      <PageHeader 
        num="02 / Büro" 
        title="Büro & Haltung" 
        subtitle="AKP als Generalplaner seit 1991" 
        meta="Berlin · Hohenzollerndamm 12" 
      />
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
          <img src="/assets/img-residential-courtyard.jpg" alt="Wohnungsbau-Hofperspektive aus dem AKP-Archiv" />
          <div className="img-caption"><span>AKP Projektarchiv</span><span>Hofperspektive</span></div>
        </div>
      </div>
      <div className="page-grid haltung-cards text-card" style={{ padding: 0 }}>
        {AKP_DATA.haltung.map(h => (
          <div key={h.n} className="haltung-card">
            <div className="n">{h.n}</div>
            <div className="t">{h.t}</div>
            <div className="d">{h.d}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
