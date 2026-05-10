"use client";

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AKP_DATA, PageMetadata, ProjectItem } from '../data/akp-data';
import { CoverPage } from './pages/CoverPage';
import { IndexPage } from './pages/IndexPage';
import { BueroPage } from './pages/BueroPage';
import { LeistungenPage } from './pages/LeistungenPage';
import { ProjekteArchivPage } from './pages/ProjekteArchivPage';
import { PageHeader } from './PageHeader';

type PageId = (typeof AKP_DATA.pages)[number]['id'];

type AtlasPage = {
  id: PageId;
  render: React.ReactNode;
};

const pageMetaById = new Map(AKP_DATA.pages.map((page) => [page.id, page]));

function ProjectList({ projects }: { projects: ProjectItem[] }) {
  return (
    <div className="mini-project-list">
      {projects.slice(0, 6).map((project) => (
        <article key={project.id} className="mini-project-card">
          <div className={`mini-project-image ${!project.img ? 'placeholder' : ''}`}>
            {project.img ? <img src={project.img} alt={project.title} /> : <span>AKP Archiv</span>}
          </div>
          <div>
            <div className="pc-typ">{project.typ}</div>
            <h3>{project.title}</h3>
            <p>{project.loc}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function TopicGrid({ items }: { items: { n: string; t: string; d: string; tags?: string[] }[] }) {
  return (
    <div className="topic-grid text-card">
      {items.map((item) => (
        <article key={item.n} className="topic-card">
          <div className="n">{item.n}</div>
          <h3>{item.t}</h3>
          <p>{item.d}</p>
          {item.tags && (
            <div className="topic-tags">
              {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          )}
        </article>
      ))}
    </div>
  );
}

function StandardAtlasPage({ meta }: { meta: PageMetadata }) {
  const residentialProjects = AKP_DATA.projects.filter((project) => project.tags.includes('Wohnen'));
  const healthcareProjects = AKP_DATA.projects.filter((project) => project.tags.includes('Pflege & Gesundheit'));
  const commercialProjects = AKP_DATA.projects.filter((project) => project.tags.includes('Gewerbe & Industrie') || project.tags.includes('Büro & Verwaltung'));
  const renovationProjects = AKP_DATA.projects.filter((project) => project.tags.includes('Sanierung & Modernisierung') || project.tags.includes('Bestand'));

  if (meta.id === 'wohnen') {
    return (
      <div className="page-grid standard-page-grid">
        <PageHeader num={`${meta.num} / Wohnen`} title={meta.title} subtitle={meta.subtitle} meta="Stadtreparatur · Nachverdichtung" />
        <div className="card card-pad-lg text-card standard-lede">
          <div className="eyebrow">Wohnungsbau</div>
          <h3 className="headline">Vom Baulückenschluss bis zum studentischen Wohnen.</h3>
          <p className="body-text body-text-lg">AKP verbindet robuste Grundrisse, wirtschaftliche Konstruktionen und städtebauliche Einbindung für neue Wohnungen im Berliner Block und darüber hinaus.</p>
        </div>
        <ProjectList projects={residentialProjects} />
      </div>
    );
  }

  if (meta.id === 'gesundheit') {
    return (
      <div className="page-grid standard-page-grid">
        <PageHeader num={`${meta.num} / Gesundheit`} title={meta.title} subtitle={meta.subtitle} meta="Funktion · Orientierung · Sicherheit" />
        <TopicGrid items={AKP_DATA.caseAspekte} />
        <ProjectList projects={healthcareProjects.length ? healthcareProjects : AKP_DATA.projects.filter((project) => project.typ.includes('Klinik'))} />
      </div>
    );
  }

  if (meta.id === 'gewerbe') {
    return (
      <div className="page-grid standard-page-grid">
        <PageHeader num={`${meta.num} / Gewerbe`} title={meta.title} subtitle={meta.subtitle} meta="Prozessgerechte Gebäude" />
        <div className="card olive card-pad-lg text-card standard-lede">
          <div className="eyebrow" style={{ color: 'rgba(241,235,221,0.65)' }}>Gewerbe & Industrie</div>
          <h3 className="headline" style={{ color: '#f1ebdd' }}>Funktion, Wirtschaftlichkeit und Erweiterbarkeit als Entwurfsparameter.</h3>
          <p className="body-text" style={{ color: 'rgba(241,235,221,0.78)' }}>Verwaltung, Labor, Ausstellung und Industrie werden nach Abläufen, technischen Anforderungen und belastbaren Kostenrahmen geplant.</p>
        </div>
        <ProjectList projects={commercialProjects} />
      </div>
    );
  }

  if (meta.id === 'bestand') {
    return (
      <div className="page-grid standard-page-grid">
        <PageHeader num={`${meta.num} / Bestand`} title={meta.title} subtitle={meta.subtitle} meta="Erhalten · Ergänzen · Modernisieren" />
        <TopicGrid items={AKP_DATA.bestandThemen} />
        <ProjectList projects={renovationProjects} />
      </div>
    );
  }

  if (meta.id === 'kompetenzen') {
    return (
      <div className="page-grid standard-page-grid compact">
        <PageHeader num={`${meta.num} / Profil`} title={meta.title} subtitle={meta.subtitle} meta="K1 — K6" />
        <TopicGrid items={AKP_DATA.kompetenzen} />
      </div>
    );
  }

  if (meta.id === 'geschichte') {
    return (
      <div className="page-grid standard-page-grid compact">
        <PageHeader num={`${meta.num} / Vita`} title={meta.title} subtitle={meta.subtitle} meta="Berlin · international" />
        <div className="timeline-grid text-card">
          {AKP_DATA.timeline.map((entry, index) => (
            <div key={`${entry.y}-${index}`} className={entry.active ? 'active' : ''}>
              <span>{entry.y}</span>
              <strong>{entry.l}</strong>
            </div>
          ))}
        </div>
        <div className="stats-grid meta-card">
          {AKP_DATA.stats.map((stat) => <div key={stat.l}><strong>{stat.v}</strong><span>{stat.l}</span></div>)}
        </div>
      </div>
    );
  }

  if (meta.id === 'publikationen') {
    return (
      <div className="page-grid standard-page-grid compact">
        <PageHeader num={`${meta.num} / Publikationen`} title={meta.title} subtitle={meta.subtitle} meta="Werkberichte · Methode" />
        <div className="publication-grid text-card">
          {AKP_DATA.publikationen.map((category) => (
            <article key={category.h}>
              <div className="eyebrow">{category.meta}</div>
              <h3>{category.h}</h3>
              {category.items.map((item) => <p key={`${category.h}-${item.t}`}><span>{item.y}</span>{item.t}</p>)}
            </article>
          ))}
        </div>
      </div>
    );
  }

  if (meta.id === 'netzwerk') {
    return (
      <div className="page-grid standard-page-grid compact">
        <PageHeader num={`${meta.num} / Netzwerk`} title={meta.title} subtitle={meta.subtitle} meta="Generalplanung" />
        <TopicGrid items={AKP_DATA.netzwerk.map((item) => ({ n: item.n, t: item.t, d: 'Eingebunden in die integrierte Projektkoordination von AKP.' }))} />
      </div>
    );
  }

  if (meta.id === 'kontakt' || meta.id === 'impressum') {
    return (
      <div className="page-grid contact-page-grid">
        <PageHeader num={`${meta.num} / ${meta.subtitle}`} title={meta.title} subtitle={meta.subtitle} meta="Berlin-Wilmersdorf" />
        <div className="card card-pad-lg text-card contact-card">
          <div className="eyebrow">Kontakt</div>
          <h3 className="headline">{AKP_DATA.kontakt.name}</h3>
          <p>{AKP_DATA.kontakt.street}<br />{AKP_DATA.kontakt.city}</p>
          <p>Telefon {AKP_DATA.kontakt.phone}<br />Fax {AKP_DATA.kontakt.fax}<br />{AKP_DATA.kontakt.email}<br />{AKP_DATA.kontakt.web}</p>
        </div>
        <div className="card card-pad-lg text-card contact-card">
          <div className="eyebrow">Impressum</div>
          <h3>{AKP_DATA.impressum.person}</h3>
          <p>Architektenkammer Berlin: {AKP_DATA.impressum.kammer}</p>
          <p>Steuernummer: {AKP_DATA.impressum.steuer}</p>
          <div className="topic-tags">{AKP_DATA.ctas.map((cta) => <span key={cta}>{cta}</span>)}</div>
        </div>
      </div>
    );
  }

  return null;
}

export const MagazineStage: React.FC = () => {
  const [activePageId, setActivePageId] = useState<PageId>('cover');
  const [history, setHistory] = useState<PageId[]>(['cover']);
  const wheelLock = useRef(false);

  const pages: AtlasPage[] = AKP_DATA.pages.map((meta) => {
    if (meta.id === 'cover') return { id: meta.id, render: <CoverPage go={go} /> };
    if (meta.id === 'index') return { id: meta.id, render: <IndexPage go={go} /> };
    if (meta.id === 'buero') return { id: meta.id, render: <BueroPage /> };
    if (meta.id === 'leistungen') return { id: meta.id, render: <LeistungenPage /> };
    if (meta.id === 'projekte') return { id: meta.id, render: <ProjekteArchivPage openProject={() => undefined} /> };
    return { id: meta.id, render: <StandardAtlasPage meta={meta} /> };
  });

  const activeIndex = Math.max(0, pages.findIndex((page) => page.id === activePageId));
  const lastPageIndex = pages.length - 1;

  const goToIndex = useCallback((nextIndex: number) => {
    const boundedIndex = Math.min(Math.max(nextIndex, 0), lastPageIndex);
    const nextId = pages[boundedIndex].id;
    setHistory((prev) => prev[prev.length - 1] === nextId ? prev : [...prev, nextId]);
    setActivePageId(nextId);
  }, [lastPageIndex, pages]);

  function go(id: string) {
    if (id === 'back') {
      if (history.length <= 1) return;
      const nextHistory = history.slice(0, -1);
      const nextActiveId = nextHistory[nextHistory.length - 1];
      setHistory(nextHistory);
      setActivePageId(nextActiveId);
      return;
    }

    if (!pageMetaById.has(id)) return;
    const nextId = id as PageId;
    setHistory((prev) => prev[prev.length - 1] === nextId ? prev : [...prev, nextId]);
    setActivePageId(nextId);
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'ArrowRight' || event.key === 'PageDown') goToIndex(activeIndex + 1);
      if (event.key === 'ArrowLeft' || event.key === 'PageUp') goToIndex(activeIndex - 1);
      if (event.key === 'Home') goToIndex(0);
      if (event.key === 'End') goToIndex(lastPageIndex);
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, goToIndex, lastPageIndex]);

  const handleWheel = (event: React.WheelEvent<HTMLElement>) => {
    if (Math.abs(event.deltaY) < 25 || wheelLock.current) return;
    wheelLock.current = true;
    goToIndex(activeIndex + (event.deltaY > 0 ? 1 : -1));
    window.setTimeout(() => { wheelLock.current = false; }, 650);
  };

  const getPageClass = (index: number) => {
    if (index === activeIndex) return 'is-active';
    if (index < activeIndex) return 'is-prev';
    if (index > activeIndex) return 'is-next';
    return 'is-far';
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
        <div style={{ textAlign: 'right' }}>
          P. {activeIndex.toString().padStart(2, '0')} <span className="sep">/</span> {lastPageIndex.toString().padStart(2, '0')}
        </div>
      </div>

      <main className="magazine-stage" onWheel={handleWheel} aria-live="polite">
        {pages.map((page, index) => (
          <section
            key={page.id}
            className={`page ${getPageClass(index)} ${page.id === 'cover' ? 'is-cover' : ''}`}
            aria-hidden={index !== activeIndex}
          >
            {page.render}
          </section>
        ))}
      </main>

      <nav className="nav-hud" aria-label="Atlas Navigation">
        <div className="group">
          <button onClick={() => go('index')} className={activePageId === 'index' ? 'primary' : ''}>Inhalt</button>
          <button onClick={() => go('projekte')} className={activePageId === 'projekte' ? 'primary' : ''}>Archiv</button>
        </div>
        <div className="progress" aria-hidden="true">
          <div className="ticks">
            {pages.map((page) => <span key={page.id} />)}
          </div>
          <div className="fill" style={{ width: `${(activeIndex / lastPageIndex) * 100}%` }} />
        </div>
        <div className="group">
          {history.length > 1 && <button onClick={() => go('back')}>Zurück</button>}
          <button onClick={() => go('cover')} className={activePageId === 'cover' ? 'primary' : ''}>Cover</button>
        </div>
      </nav>
    </div>
  );
};
