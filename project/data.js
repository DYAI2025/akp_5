/* AKP — Data layer (content from SSOT) */

window.AKP_DATA = {
  pages: [
    { id: "cover", num: "00", title: "Deckblatt", subtitle: "Cover" },
    { id: "index", num: "01", title: "Architektonischer Atlas", subtitle: "Inhalt" },
    { id: "buero", num: "02", title: "Büro & Haltung", subtitle: "Praxis" },
    { id: "leistungen", num: "03", title: "Leistungen & Prozess", subtitle: "Generalplanung" },
    { id: "projekte", num: "04", title: "Projektarchiv", subtitle: "Übersicht" },
    { id: "wohnen", num: "05", title: "Wohnen & Stadtreparatur", subtitle: "Wohnungsbau" },
    { id: "gesundheit", num: "06", title: "Gesundheit & Öffentliche Bauten", subtitle: "Pflege, Kultur, Verwaltung" },
    { id: "gewerbe", num: "07", title: "Gewerbe & Industrie", subtitle: "Logistik & Verwaltung" },
    { id: "bestand", num: "08", title: "Bestand & Sanierung", subtitle: "Modernisierung" },
    { id: "kompetenzen", num: "09", title: "Kompetenzen", subtitle: "Profil" },
    { id: "geschichte", num: "10", title: "Geschichte & Vita", subtitle: "Seit 1991" },
    { id: "publikationen", num: "11", title: "Veröffentlichungen", subtitle: "Bibliografie" },
    { id: "netzwerk", num: "12", title: "Netzwerk", subtitle: "Generalplanung" },
    { id: "kontakt", num: "13", title: "Kontakt", subtitle: "Büro Berlin" },
    { id: "impressum", num: "14", title: "Impressum", subtitle: "Rechtliches" }
  ],

  haltung: [
    { n: "01", t: "Kontext statt Stilvorgabe", d: "Gestaltung folgt Ort, Funktion und Aufgabe — nicht einer materialdogmatischen Haltung." },
    { n: "02", t: "Wirtschaftlichkeit als Entwurfsfaktor", d: "Kostenkontrolle wird früh in den Entwurf eingebracht und durch alle Leistungsphasen getragen." },
    { n: "03", t: "Technische Planungssicherheit", d: "Genehmigungsfähigkeit, Ausführbarkeit und Schnittstellen werden durchgehend mitgedacht." },
    { n: "04", t: "Material nach Aufgabe und Ort", d: "Materialwahl entsteht aus städtebaulichem Kontext, Bauherrenziel und ökologischer Bewertung." },
    { n: "05", t: "Grundrisse als Werkzeug", d: "Klare Grundrisslogik strukturiert Funktion, Belichtung, Erschließung und Wirtschaftlichkeit." }
  ],

  leistungen: [
    { n: "L1", t: "Entwurf", d: "Konzept, städtebauliche Einbindung, Grundlagenermittlung." },
    { n: "L2", t: "Genehmigung", d: "Bauantrag, Behördenkoordination, Nachweise." },
    { n: "L3", t: "Ausführung", d: "Detail-, Konstruktions- und Werkplanung." },
    { n: "L4", t: "Ausschreibung", d: "Leistungsverzeichnisse, Mengenermittlung, Vorgaben." },
    { n: "L5", t: "Vergabe", d: "Preis-Leistung, Auswahl der Baufirmen, Verträge." },
    { n: "L6", t: "Bauleitung", d: "Qualitäts-, Termin- und Kostensteuerung auf der Baustelle." },
    { n: "L7", t: "Abrechnung", d: "Prüfung, Nachträge, Kostenverfolgung." },
    { n: "L8", t: "Übergabe", d: "Abnahmen, Mängelmanagement, Schlüsselübergabe." }
  ],

  zusatzleistungen: [
    "Grundstücksanalyse",
    "Kaufverhandlungen",
    "Finanzierung",
    "Investitionsförderung",
    "Arbeitsschutz / SiGeKo",
    "Energieeffiziente Planung",
    "Energieausweise",
    "Optimierung Preis-Leistung"
  ],

  projects: [
    { id: "roelcke", title: "Wohnungsbau Roelckestraße", loc: "Berlin-Pankow", typ: "Wohnungsbau", tags: ["Wohnen", "Berlin", "Neubau"], img: "assets/img-residential-greenfacade.jpg",
      ctx: "Mehrfamilienwohnhaus mit grüner Fassadenstruktur und Stadtteil­bezug — neue Wohnformen in einem konsolidierten Quartier." },
    { id: "pestalozzi", title: "Pestalozzistraße 45–46", loc: "Berlin-Charlottenburg", typ: "Wohn- und Geschäftshaus", tags: ["Wohnen", "Berlin", "Bestand"], img: "assets/img-pestalozzi-clinker.jpg",
      ctx: "Wohn- und Geschäfts­bebauung mit rot-bunt geflammtem Kohlebrand­klinker. Stadtreparatur in einem klassisch berlinischen Block." },
    { id: "studinest", title: "Wohnungsbau »Studinest«", loc: "Berlin", typ: "Studentisches Wohnen", tags: ["Wohnen", "Berlin", "Low-Cost"], img: "assets/img-courtyard-wood.jpg",
      ctx: "Holzfassaden-Ensemble um einen ruhigen Innenhof. Studentisches Wohnen, kompakte Grundrisse, ökologische Materiallogik." },
    { id: "luetzow", title: "Wohn- und Bürogebäude Lützowufer", loc: "Berlin-Tiergarten", typ: "Mischnutzung", tags: ["Wohnen", "Büro", "Berlin"], img: null,
      ctx: "Mischnutzung in zentraler Lage: Wohnen über Büro, ruhig kalibrierte Fassade entlang des Ufers." },
    { id: "rheinblick", title: "Rheinblick Wohnen", loc: "Deutschland", typ: "Wohnungsbau", tags: ["Wohnen", "Neubau"], img: null,
      ctx: "Wohnungsbau in besonderer Lagebeziehung — Orientierung, Ausblick und Grundriss­logik als Entwurfsthema." },
    { id: "fluechtlinge", title: "Wohnen für Flüchtlinge & Studenten", loc: "Berlin", typ: "Sozialer Wohnungsbau", tags: ["Wohnen", "Low-Cost", "Sozial"], img: null,
      ctx: "Wohndach­kuben und kompakte Grundrisse für Geflüchtete und Studierende — schnelle, wirtschaftliche Realisierbarkeit." },
    { id: "lowcost", title: "Low Cost Wohnen", loc: "Berlin", typ: "Wohnungsbau", tags: ["Wohnen", "Low-Cost"], img: null,
      ctx: "Strategie für preis­günstigen Wohnraum bei stabiler Konstruktions­qualität und einfachen, robusten Materialien." },
    { id: "service", title: "Service-Wohnen mit medizinischer Versorgung", loc: "Deutschland", typ: "Pflege & Wohnen", tags: ["Wohnen", "Pflege", "Barrierefreiheit"], img: null,
      ctx: "Wohnen mit angegliederter medizinischer Versorgung — Verbindung aus Alltagstauglichkeit und Pflege­logistik." },
    { id: "klinik", title: "Privatklinik Hundekehlestraße", loc: "Berlin", typ: "Klinik / Gesundheit", tags: ["Pflege & Gesundheit", "Berlin"], img: null,
      ctx: "Privatklinik mit klarer Funktions­ordnung, Orientierung und kalibriertem Tageslicht in den Behandlungs­bereichen." },
    { id: "regensburg", title: "Erweiterung Forensische Kliniken Regensburg", loc: "Regensburg", typ: "Klinik / Sicherheit", tags: ["Pflege & Gesundheit", "Sicherheit"], img: null,
      ctx: "Erweiterung im sensiblen Sicherheits- und Therapie­kontext — Funktion, Sicherheits­logik und Aufenthalts­qualität." },
    { id: "korbach", title: "Rathaus Korbach", loc: "Korbach", typ: "Verwaltungsbau", tags: ["Büro & Verwaltung", "Öffentlich"], img: null,
      ctx: "Öffentlicher Verwaltungs­bau mit klarer Wegeführung und ruhig gesetzten Materialien." },
    { id: "kunsthalle", title: "Kunsthalle Bremen", loc: "Bremen", typ: "Kultur", tags: ["Kultur & Öffentlichkeit", "Wettbewerb"], img: "assets/img-interior-deep.jpg",
      ctx: "Kulturbau mit großer räumlicher Tiefe und kalibrierten Tageslicht­führungen — Beitrag im kulturellen Bauen." },
    { id: "genshagen", title: "Ausstellungshalle & Verwaltung Genshagen", loc: "Genshagen", typ: "Gewerbe / Verwaltung", tags: ["Gewerbe & Industrie", "Corporate"], img: null,
      ctx: "Ausstellungs- und Verwaltungs­zentrum — Corporate Architecture mit Erweiterbarkeits­logik." },
    { id: "schichau", title: "Verwaltung, Labor & Industrie Schichauweg", loc: "Berlin", typ: "Industrie / Labor", tags: ["Gewerbe & Industrie", "Labor"], img: null,
      ctx: "Verwaltungs-, Labor- und Industriegebäude mit prozess­gerechter Grundordnung und Vorfertigungs­anteilen." },
    { id: "jugendhotel", title: "Umbau Gewerbehaus zu Jugendhotel", loc: "Berlin", typ: "Umnutzung / Hotel", tags: ["Sanierung & Modernisierung", "Bestand"], img: null,
      ctx: "Umnutzung eines Gewerbehauses zu einem Jugendhotel — neue Funktion in vorhandener Konstruktion." },
    { id: "waldow", title: "Altbaumodernisierung Waldowstraße / Herthaplatz", loc: "Berlin", typ: "Sanierung", tags: ["Sanierung & Modernisierung", "Bestand"], img: null,
      ctx: "Altbau­modernisierung mit Balkon­ergänzung, energetischer Sanierung und Bestandserhalt." },
    { id: "gaillard22", title: "Modernisierung Gaillardstraße 22", loc: "Berlin", typ: "Sanierung", tags: ["Sanierung & Modernisierung", "Bestand"], img: null,
      ctx: "Modernisierung im Bestand — energetische Verbesserung und Wohnqualität in einer gewachsenen Adresse." },
    { id: "gaillard17", title: "Modernisierung Gaillardstraße 17–18", loc: "Berlin", typ: "Sanierung", tags: ["Sanierung & Modernisierung", "Bestand"], img: null,
      ctx: "Modernisierungs­paket im benachbarten Block — Hofbebauung, Bestandserhalt, energetische Sanierung." },
    { id: "bizet", title: "Remise Bizetstraße", loc: "Berlin", typ: "Umnutzung / Wohnen", tags: ["Sanierung & Modernisierung", "Wohnen"], img: null,
      ctx: "Hofbebauung mit Remisen­charakter — neue Wohnnutzung im Bestand des Berliner Blocks." }
  ],

  filters: [
    "Alle", "Wohnen", "Pflege & Gesundheit", "Büro & Verwaltung", "Gewerbe & Industrie",
    "Bildung & Freizeit", "Kultur & Öffentlichkeit", "Sanierung & Modernisierung",
    "Wettbewerb & Forschung", "Berlin", "Deutschland", "International",
    "Neubau", "Bestand", "Low-Cost", "Energie / Ökologie", "Barrierefreiheit"
  ],

  bestandThemen: [
    { n: "B1", t: "Umnutzung", d: "Neue Funktion in vorhandener Struktur." },
    { n: "B2", t: "Bestandserhalt", d: "Substanz weiterbauen, nicht ersetzen." },
    { n: "B3", t: "Balkonergänzung", d: "Wohnqualität in den Bestand einfügen." },
    { n: "B4", t: "Dachausbau", d: "Reserven im Dach aktivieren." },
    { n: "B5", t: "Energetische Sanierung", d: "Hülle, Technik, Verbrauch reduzieren." },
    { n: "B6", t: "Hofbebauung", d: "Innere Reserven des Blocks nutzen." },
    { n: "B7", t: "Materialgesundheit", d: "Schadstoffe prüfen, ersetzen, dokumentieren." }
  ],

  caseAspekte: [
    { n: "C1", t: "Funktion", d: "Klare Abläufe, robuste Grundordnung, prozess­gerechte Räume." },
    { n: "C2", t: "Orientierung", d: "Wegeführung und Sichtbeziehungen für Personal, Patient, Besuch." },
    { n: "C3", t: "Sicherheit", d: "Schutzziele, Zonierung, Brand- und Fluchtwege." },
    { n: "C4", t: "Licht", d: "Kalibriertes Tageslicht, Blendung, Atmosphäre." },
    { n: "C5", t: "Energie", d: "Kennwerte, Hülle, Anlagentechnik in Balance." },
    { n: "C6", t: "Denkmalkontext", d: "Bestand, Bauphasen und Kontext respektvoll integriert." }
  ],

  kompetenzen: [
    { n: "K1", t: "Stadtreparatur & Bestand", d: "Bestehende Stadt weiterbauen — Lückenschluss, Nachverdichtung, Bestandserhalt.",
      tags: ["Baulücke", "Nachverdichtung", "Bestandserhalt", "Hofbebauung"] },
    { n: "K2", t: "Wirtschaftlichkeit", d: "Kostenkontrolle, Ausschreibungs- und Vergabe­optimierung über alle Leistungsphasen.",
      tags: ["Kostenkontrolle", "Vergabe", "Low-Cost", "Termine"] },
    { n: "K3", t: "Energie & Ökologie", d: "Energieeffiziente Planung, Energie­ausweise, ökologische Materiallogik.",
      tags: ["Energieausweis", "Ökologie", "Green Building", "Hülle"] },
    { n: "K4", t: "Digitale & technische Kompetenz", d: "CAD-Systeme und elektronische Detailbibliothek seit den 1990er Jahren.",
      tags: ["CAD", "Detailbibliothek", "Digital"] },
    { n: "K5", t: "Generalplanung & Netzwerk", d: "Generalplaner­leistung mit erprobten Fachplaner­netzwerken.",
      tags: ["Generalplanung", "Tragwerk", "TGA", "Brandschutz"] },
    { n: "K6", t: "Typologische Breite", d: "Wohnen, Gesundheit, Verwaltung, Gewerbe, Industrie, Sanierung.",
      tags: ["Wohnen", "Gesundheit", "Gewerbe", "Sanierung"] }
  ],

  timeline: [
    { y: "1991", l: "Gründung in Berlin", active: false },
    { y: "1990er", l: "CAD & Detailbibliothek", active: false },
    { y: "1990er", l: "Internationale Erfahrung", active: false },
    { y: "2000er", l: "Wettbewerbe & Preise", active: true },
    { y: "2000er", l: "Wohnungsbau Berlin", active: false },
    { y: "2010er", l: "Gesundheits- & Verwaltungsbau", active: false },
    { y: "2010er", l: "Sanierung & Bestand", active: false },
    { y: "Heute", l: "Generalplanung", active: false }
  ],

  stats: [
    { v: "21", l: "Wettbewerbe" },
    { v: "2", l: "Erste Preise" },
    { v: "1", l: "Ankauf" },
    { v: "20+", l: "Veröffentlichungen" },
    { v: "1991", l: "Seit" }
  ],

  international: ["Berlin", "USA", "Japan", "Hong Kong", "Singapur", "Sydney", "Auckland", "Bangkok", "San Francisco"],

  publikationen: [
    { h: "Eigene Projekte", meta: "Werkberichte", items: [
      { y: "Werkbericht", t: "Wohnungsbau Roelckestraße — Quartiers­beitrag" },
      { y: "Werkbericht", t: "Pestalozzistraße 45–46 — Klinker im Block" },
      { y: "Werkbericht", t: "Genshagen — Ausstellung & Verwaltung" }
    ]},
    { h: "Digitale Planung", meta: "Methode", items: [
      { y: "Aufsatz", t: "CAD-Systeme im Architekturbüro" },
      { y: "Aufsatz", t: "Elektronische Detailbibliothek" },
      { y: "Notiz", t: "Digitale Schnittstellen in der Generalplanung" }
    ]},
    { h: "Ökologie", meta: "Bauen & Energie", items: [
      { y: "Beitrag", t: "Energieeffiziente Planung im Wohnungsbau" },
      { y: "Beitrag", t: "Materiallogik & ökologische Bewertung" },
      { y: "Beitrag", t: "Sanierung als ökologische Strategie" }
    ]},
    { h: "Internationale Architektur", meta: "Reise & Praxis", items: [
      { y: "Bericht", t: "Bauen in Hong Kong, Singapur, Bangkok" },
      { y: "Bericht", t: "Sydney, Auckland — Wohnungs­typologien" },
      { y: "Bericht", t: "USA, San Francisco — Praxis­erfahrungen" }
    ]},
    { h: "Zukunft & Hochhaus", meta: "Themen", items: [
      { y: "Essay", t: "Hochhaus als urbane Typologie" },
      { y: "Essay", t: "Stadt der Zukunft — Verdichtung & Bestand" },
      { y: "Essay", t: "Generalplanung der nächsten Dekade" }
    ]}
  ],

  netzwerk: [
    { id: "wett", t: "Wettbewerbspartner", n: "N1" },
    { id: "bau",  t: "Bauleitung",          n: "N2" },
    { id: "trag", t: "Tragwerksplanung",    n: "N3" },
    { id: "tga",  t: "Technische Ausrüstung", n: "N4" },
    { id: "bra",  t: "Brandschutz",         n: "N5" },
    { id: "ver",  t: "Vermessung",          n: "N6" },
    { id: "gala", t: "Garten & Landschaft", n: "N7" },
    { id: "ene",  t: "Energieberatung",     n: "N8" }
  ],

  kontakt: {
    name: "AKP Architekten Kauschke + Partner",
    street: "Hohenzollerndamm 12",
    city: "10717 Berlin-Wilmersdorf",
    phone: "+49 (0)30 862 20-51",
    fax: "+49 (0)30 862 20-60",
    email: "info@architekten-kauschke.de",
    web: "www.architekten-kauschke.de"
  },

  impressum: {
    person: "Dipl.-Ing. Hans-Gerhard Kauschke",
    kammer: "06750",
    steuer: "376/60776"
  },

  ctas: [
    "Projekt besprechen",
    "Grundstück prüfen lassen",
    "Sanierung anfragen",
    "Generalplanung anfragen",
    "Kooperation / Wettbewerb"
  ]
};
