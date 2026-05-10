/* AKP — pages: Wohnen, Gesundheit, Gewerbe, Bestand */
/* eslint-disable */
const { PageHeader: PHb } = window.AKP_PAGES_A;
const Db = window.AKP_DATA;

/* ---------- Wohnen & Stadtreparatur ---------- */
function WohnenPage({ openProject }) {
  const wohnenIds = ["roelcke", "pestalozzi", "studinest", "luetzow", "rheinblick", "fluechtlinge", "lowcost", "service"];
  const list = wohnenIds.map(id => Db.projects.find(p => p.id === id)).filter(Boolean);

  return (
    <div className="page-grid" style={{ gridTemplateRows: "auto 1fr", gap: 14 }}>
      <PHb num="05 / Wohnen" title="Wohnen & Stadtreparatur" subtitle="Bau­lückenschluss · Nachverdichtung · barrierefrei · preisgünstig" meta={`${list.length} Projekte · Wohnen`} />
      <div className="wohnen-grid">
        <div className="wohnen-feature img-card image-card" style={{ position: "relative" }}>
          <img src="assets/img-courtyard-wood.jpg" alt="Wohnungsbau aus dem AKP-Projektarchiv" />
          <div style={{ position: "absolute", left: 22, top: 22, right: 22, display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <span className="label-num" style={{
              fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.16em",
              textTransform: "uppercase", color: "rgba(255,255,255,0.85)",
              background: "rgba(0,0,0,0.4)", padding: "6px 10px", border: "1px solid rgba(255,255,255,0.18)"
            }}>AKP Projektarchiv · Wohnen</span>
            <span className="label-num" style={{
              fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.16em",
              color: "rgba(255,255,255,0.85)",
              background: "rgba(0,0,0,0.4)", padding: "6px 10px", border: "1px solid rgba(255,255,255,0.18)"
            }}>05.A</span>
          </div>
          <div style={{ position: "absolute", left: 22, bottom: 22, right: 22, color: "var(--paper)", textShadow: "0 2px 16px rgba(0,0,0,0.6)" }}>
            <div className="serif" style={{ fontSize: "clamp(22px, 2.4vw, 36px)", lineHeight: 1.05, maxWidth: "20ch" }}>
              Bestehende Stadt weiterbauen.
            </div>
            <div className="eyebrow" style={{ color: "rgba(241,235,221,0.85)", marginTop: 8 }}>
              Holzfassaden · Innenhof · Studentisches Wohnen
            </div>
          </div>
        </div>

        <div className="card card-pad text-card" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div className="eyebrow">Narrativ</div>
          <h3 className="headline" style={{ fontSize: "clamp(22px, 2vw, 30px)" }}>
            Wohnungsbau in komplexem städtischem Umfeld.
          </h3>
          <p className="body-text">
            Stadtreparatur, Bau­lückenschließung und Nachverdichtung sind Antworten auf die Berliner
            Wohnungsfrage — barrierefrei, mit ökologischer Materiallogik und realisierbaren Kosten.
          </p>
          <div className="hairline" />
          <div className="add-services-grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
            {["Stadtreparatur", "Baulückenschluss", "Nachverdichtung", "Barrierefrei", "Low-Cost", "Ökologie"].map(t => (
              <div key={t} className="add-service"><span className="b" />{t}</div>
            ))}
          </div>
        </div>

        <div className="wohnen-list text-card">
          {list.slice(0, 6).map((p, i) => (
            <button key={p.id} className="wohnen-list-item" onClick={() => openProject(p.id)} style={{ textAlign: "left" }}>
              <div className="n">05.{(i+1).toString().padStart(2, "0")}</div>
              <div>
                <div className="t">{p.title}</div>
                <div className="loc">{p.loc} · {p.typ}</div>
              </div>
              <div className="label-num">→</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- Gesundheit & Öffentliche Bauten ---------- */
function GesundheitPage({ openProject }) {
  return (
    <div className="page-grid" style={{ gridTemplateRows: "auto 1fr", gap: 14 }}>
      <PHb num="06 / Gesundheit" title="Gesundheit, Pflege & Öffentliche Bauten" subtitle="Klinik · Verwaltung · Kultur" meta="Tiefenraum · Funktion · Tageslicht" />
      <div className="health-grid">
        <div className="health-hero img-card image-card">
          <img src="assets/img-interior-deep.jpg" alt="Räumliche Studie aus dem AKP-Archiv" />
          <div style={{ position: "absolute", left: 22, top: 22, color: "var(--paper)", background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.18)", padding: "6px 10px", fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase" }}>
            Räumliche Studie · AKP-Archiv
          </div>
          <div style={{ position: "absolute", right: 22, top: 22, color: "var(--paper)", background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.18)", padding: "6px 10px", fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.16em" }}>
            06.A
          </div>
          <div style={{ position: "absolute", left: 22, bottom: 22, right: 22, color: "var(--paper)", textShadow: "0 2px 16px rgba(0,0,0,0.6)" }}>
            <div className="serif" style={{ fontSize: "clamp(22px, 2.4vw, 36px)", lineHeight: 1.05, maxWidth: "22ch" }}>
              Räume mit Funktion, Orientierung und Licht.
            </div>
          </div>
        </div>

        <div className="case-grid text-card">
          {Db.caseAspekte.map(c => (
            <div key={c.n} className="case-card">
              <div className="n">{c.n}</div>
              <div className="t">{c.t}</div>
              <div className="d">{c.d}</div>
            </div>
          ))}
        </div>

        <div className="card card-pad text-card" style={{ display: "flex", flexDirection: "column", gap: 8, gridColumn: "2", gridRow: "2" }}>
          <div className="eyebrow">Projekte aus dem SSOT</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {["klinik", "regensburg", "korbach", "kunsthalle"].map(id => {
              const p = Db.projects.find(x => x.id === id);
              if (!p) return null;
              return (
                <button key={p.id} onClick={() => openProject(p.id)} style={{ textAlign: "left", display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 10, padding: "8px 0", borderBottom: "1px dashed var(--hairline-soft)" }}>
                  <div>
                    <div className="serif" style={{ fontSize: 16, lineHeight: 1.1 }}>{p.title}</div>
                    <div className="label-num" style={{ marginTop: 4 }}>{p.loc} · {p.typ}</div>
                  </div>
                  <span className="label-num">→</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Gewerbe & Industrie ---------- */
function GewerbePage({ openProject }) {
  return (
    <div className="page-grid" style={{ gridTemplateRows: "auto 1fr", gap: 14 }}>
      <PHb num="07 / Gewerbe" title="Gewerbe, Industrie & Logistik" subtitle="Funktion · Wirtschaftlichkeit · Vorfertigung · Erweiterbarkeit" meta="Corporate Architecture · Green Building" />
      <div className="gewerbe-grid">
        <div className="img-card image-card" style={{ gridRow: "1 / 3" }}>
          <img src="assets/img-residential-greenfacade.jpg" alt="Verwaltungs-/Gewerbe-Visualisierung aus AKP-Archiv" />
          <div className="img-caption"><span>AKP Archiv · Verwaltung / Gewerbe</span><span>07.A</span></div>
        </div>

        <div className="gewerbe-tech text-card">
          <div className="eyebrow">Layer · Konstruktion</div>
          <h3 className="headline" style={{ fontSize: "clamp(20px, 2vw, 28px)" }}>
            Funktion, Wirtschaftlichkeit, Erweiterbarkeit.
          </h3>
          <div className="gewerbe-diagram">
            <div className="diagram-node" style={{ left: "8%", top: "16%" }}>Nutzung</div>
            <div className="diagram-node" style={{ left: "44%", top: "16%" }}>Konstruktion</div>
            <div className="diagram-node" style={{ left: "78%", top: "16%" }}>Hülle</div>
            <div className="diagram-node" style={{ left: "8%", top: "62%" }}>Vorfertigung</div>
            <div className="diagram-node" style={{ left: "44%", top: "62%" }}>Energie</div>
            <div className="diagram-node" style={{ left: "78%", top: "62%" }}>Erweiterbar</div>
            <div style={{ position: "absolute", inset: 12, border: "1px dashed var(--hairline)", pointerEvents: "none" }} />
          </div>
        </div>

        <div className="card card-pad text-card" style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div className="eyebrow">Projekte</div>
          {[ "genshagen", "schichau" ].map(id => {
            const p = Db.projects.find(x => x.id === id);
            if (!p) return null;
            return (
              <button key={p.id} onClick={() => openProject(p.id)} style={{ textAlign: "left", display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 10, padding: "10px 0", borderBottom: "1px dashed var(--hairline-soft)" }}>
                <div>
                  <div className="serif" style={{ fontSize: 18, lineHeight: 1.1 }}>{p.title}</div>
                  <div className="label-num" style={{ marginTop: 4 }}>{p.loc} · {p.typ}</div>
                  <div className="body-text" style={{ marginTop: 6, fontSize: 12 }}>{p.ctx}</div>
                </div>
                <span className="label-num">→</span>
              </button>
            );
          })}
          <div className="add-services-grid" style={{ gridTemplateColumns: "1fr 1fr", marginTop: 6 }}>
            {["Corporate Architecture", "Prozesslogik", "Green Building", "Vorfertigung"].map(t => (
              <div key={t} className="add-service"><span className="b" />{t}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Bestand & Sanierung ---------- */
function BestandPage({ openProject }) {
  return (
    <div className="page-grid" style={{ gridTemplateRows: "auto 1fr", gap: 14 }}>
      <PHb num="08 / Bestand" title="Bestand, Sanierung & Modernisierung" subtitle="Bestehende Stadt weiterbauen statt nur neu bebauen" meta="7 Themen · 5 Projekte" />
      <div className="bestand-grid">
        <div className="bestand-hero image-card">
          <img src="assets/img-pestalozzi-clinker.jpg" alt="Klinkerfassade — möglicher Pestalozzi-Bezug" />
          <div className="bestand-overlay">
            <div className="lines" />
            <div className="label">
              Bestehende Stadt<br />weiterbauen.
            </div>
            <div style={{ position: "absolute", right: 24, top: 24, color: "var(--paper)", fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", background: "rgba(0,0,0,0.4)", padding: "6px 10px", border: "1px solid rgba(255,255,255,0.2)" }}>
              Pestalozzistr. 45–46 · Klinker
            </div>
          </div>
        </div>

        {Db.bestandThemen.slice(0, 7).map((b, i) => (
          <div
            key={b.n}
            className="bestand-card text-card"
            style={i === 6 ? { gridColumn: "3", gridRow: "3" } : undefined}
          >
            <div className="n">{b.n}</div>
            <div className="t">{b.t}</div>
            <div className="d">{b.d}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

window.AKP_PAGES_B = { WohnenPage, GesundheitPage, GewerbePage, BestandPage };
