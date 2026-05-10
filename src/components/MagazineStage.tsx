"use client";

import React, { useState, useEffect } from 'react';
import { AKP_DATA } from '../data/akp-data';
import { CoverPage } from './pages/CoverPage';
import { IndexPage } from './pages/IndexPage';
import { BueroPage } from './pages/BueroPage';
import { LeistungenPage } from './pages/LeistungenPage';
import { ProjekteArchivPage } from './pages/ProjekteArchivPage';

export const MagazineStage: React.FC = () => {
  const [activePageId, setActivePageId] = useState<string>("cover");
  const [history, setHistory] = useState<string[]>(["cover"]);

  const pages = [
    { id: "cover", Component: <CoverPage go={go} /> },
    { id: "index", Component: <IndexPage go={go} /> },
    { id: "buero", Component: <BueroPage /> },
    { id: "leistungen", Component: <LeistungenPage /> },
    { id: "projekte", Component: <ProjekteArchivPage openProject={(id) => console.log("Open project", id)} /> },
  ];

  const activeIndex = pages.findIndex(p => p.id === activePageId);

  function go(id: string) {
    if (id === "back") {
      if (history.length > 1) {
        const newHistory = [...history];
        newHistory.pop();
        const prevId = newHistory[newHistory.length - 1];
        setHistory(newHistory);
        setActivePageId(prevId);
      }
      return;
    }
    setHistory(prev => [...prev, id]);
    setActivePageId(id);
  }

  const getPageClass = (index: number) => {
    if (index === activeIndex) return "is-active";
    if (index < activeIndex) return "is-prev";
    if (index > activeIndex) return "is-next";
    return "is-far";
  };

  return (
    <div className="app-shell">
      <div className="display-frame">
        <div className="display-corner tl" />
        <div className="display-corner tr" />
        <div className="display-corner bl" />
        <div className="display-corner br" />
      </div>

      <div className="status-bar">
        <div>
          <span className="dot" />
          AKP <span className="sep">|</span> Atlas Nº 01
        </div>
        <div className="hide-sm">
          Architekten Kauschke + Partner <span className="sep">|</span> Berlin
        </div>
        <div style={{ textAlign: "right" }}>
          P. {activeIndex.toString().padStart(2, "0")} <span className="sep">/</span> 14
        </div>
      </div>

      <main className="magazine-stage">
        {pages.map((p, i) => (
          <div key={p.id} className={`page ${getPageClass(i)} ${p.id === 'cover' ? 'is-cover' : ''}`}>
            {p.Component}
          </div>
        ))}
      </main>

      <nav className="nav-hud">
        <div className="group">
          <button onClick={() => go("index")} className={activePageId === "index" ? "primary" : ""}>Inhalt</button>
          <button onClick={() => go("projekte")} className={activePageId === "projekte" ? "primary" : ""}>Archiv</button>
        </div>
        <div className="progress">
          <div className="ticks">
            {Array.from({ length: 14 }).map((_, i) => <span key={i} />)}
          </div>
          <div className="fill" style={{ width: `${(activeIndex / (pages.length - 1)) * 100}%` }} />
        </div>
        <div className="group">
          {history.length > 1 && <button onClick={() => go("back")}>Zurück</button>}
          <button onClick={() => go("cover")} className={activePageId === "cover" ? "primary" : ""}>Cover</button>
        </div>
      </nav>
    </div>
  );
};
