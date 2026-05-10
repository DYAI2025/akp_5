import React, { useState, useMemo } from 'react';
import { PageHeader } from '../PageHeader';
import { AKP_DATA } from '../../data/akp-data';

interface ProjekteArchivPageProps {
  openProject: (projectId: string) => void;
}

export const ProjekteArchivPage: React.FC<ProjekteArchivPageProps> = ({ openProject }) => {
  const [activeFilter, setActiveFilter] = useState("Alle");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "Alle") return AKP_DATA.projects;
    return AKP_DATA.projects.filter(p => 
      p.tags.some(t => 
        t.toLowerCase().includes(activeFilter.toLowerCase()) || 
        activeFilter.toLowerCase().includes(t.toLowerCase())
      )
    );
  }, [activeFilter]);

  const displayList = filteredProjects.slice(0, 5);
  const featured = displayList[0];
  const rest = displayList.slice(1, 5);

  return (
    <div className="page-grid" style={{ gridTemplateRows: "auto auto 1fr", gap: 12 }}>
      <PageHeader 
        num="04 / Archiv" 
        title="Projektarchiv" 
        subtitle="Wohnen · Gesundheit · Verwaltung · Gewerbe · Industrie · Sanierung" 
        meta={`${filteredProjects.length} Projekte · Filter: ${activeFilter}`} 
      />

      <div className="proj-filters meta-card">
        {AKP_DATA.filters.slice(0, 12).map(f => (
          <button
            key={f}
            className={`proj-filter ${activeFilter === f ? "active" : ""}`}
            onClick={() => setActiveFilter(f)}
          >
            {f}
          </button>
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
              <div className="pc-tags">
                {featured.tags.map(t => <span key={t}>{t}</span>)}
              </div>
            </div>
          </article>
        )}
        {rest.map(p => (
          <article key={p.id} className="proj-card" onClick={() => openProject(p.id)}>
            <div className={`pc-img ${!p.img ? "placeholder" : ""}`}>
              {p.img && <img src={p.img} alt={p.title} />}
              {!p.img && (
                <div style={{ 
                  position: "absolute", 
                  inset: 0, 
                  display: "grid", 
                  placeItems: "center", 
                  color: "var(--ink-mute)", 
                  fontFamily: "var(--mono)", 
                  fontSize: 10, 
                  letterSpacing: "0.16em", 
                  textTransform: "uppercase" 
                }}>
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
};
