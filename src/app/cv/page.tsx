"use client";

export default function CVPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Inter:wght@300;400;500&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          font-family: 'Inter', sans-serif;
          background: #f5f4f0;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 32px 16px 64px;
        }

        .cv-actions {
          width: 100%;
          max-width: 840px;
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          margin-bottom: 20px;
        }

        .btn {
          font-family: 'Inter', sans-serif;
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          padding: 10px 20px;
          border: 1px solid #2c2c2c;
          background: transparent;
          color: #2c2c2c;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: background 0.2s, color 0.2s;
        }

        .btn:hover { background: #2c2c2c; color: #fff; }
        .btn--primary { background: #2c2c2c; color: #fff; }
        .btn--primary:hover { background: #444; }

        .cv {
          width: 100%;
          max-width: 840px;
          background: #fff;
          color: #1a1a1a;
          padding: 56px 60px;
          box-shadow: 0 8px 40px rgba(0,0,0,0.08);
        }

        /* Header */
        .cv__header {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 24px;
          align-items: end;
          padding-bottom: 32px;
          border-bottom: 2px solid #1a1a1a;
          margin-bottom: 36px;
        }

        .cv__name {
          font-family: 'Playfair Display', serif;
          font-size: 42px;
          font-weight: 400;
          letter-spacing: -0.01em;
          line-height: 1.05;
          color: #1a1a1a;
        }

        .cv__name em {
          font-style: italic;
          color: #888;
        }

        .cv__title {
          font-size: 11px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #888;
          margin-top: 10px;
        }

        .cv__contact {
          text-align: right;
          font-size: 12px;
          font-weight: 300;
          color: #555;
          line-height: 1.9;
        }

        .cv__contact a {
          color: #555;
          text-decoration: none;
        }

        .cv__contact a:hover { color: #1a1a1a; }

        /* Body */
        .cv__body {
          display: grid;
          grid-template-columns: 1fr 220px;
          gap: 48px;
        }

        /* Section */
        .cv__section { margin-bottom: 32px; }

        .cv__section-title {
          font-size: 9px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #aaa;
          margin-bottom: 16px;
          padding-bottom: 8px;
          border-bottom: 1px solid #eee;
        }

        /* About */
        .cv__about {
          font-size: 14px;
          font-weight: 300;
          line-height: 1.8;
          color: #444;
        }

        /* Timeline */
        .cv__timeline { display: flex; flex-direction: column; gap: 20px; }

        .cv__entry {}

        .cv__entry-date {
          font-size: 9px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #bbb;
          margin-bottom: 3px;
        }

        .cv__entry-role {
          font-size: 14px;
          font-weight: 500;
          color: #1a1a1a;
          margin-bottom: 2px;
        }

        .cv__entry-company {
          font-size: 13px;
          font-weight: 300;
          color: #888;
          margin-bottom: 5px;
        }

        .cv__entry-desc {
          font-size: 12px;
          font-weight: 300;
          color: #666;
          line-height: 1.7;
        }

        /* Sidebar */
        .cv__sidebar {}

        /* Tags */
        .cv__tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .cv__tag {
          font-size: 10px;
          letter-spacing: 0.05em;
          color: #555;
          background: #f5f4f0;
          padding: 4px 10px;
          border-radius: 0;
        }

        /* Languages */
        .cv__lang-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12px;
          margin-bottom: 10px;
        }

        .cv__lang-name { font-weight: 400; color: #2c2c2c; }
        .cv__lang-level { font-size: 10px; color: #aaa; letter-spacing: 0.1em; }

        .cv__lang-bar {
          width: 100%;
          height: 1px;
          background: #eee;
          margin-bottom: 14px;
          position: relative;
        }

        .cv__lang-fill {
          position: absolute;
          inset-y: 0;
          left: 0;
          background: #888;
        }

        /* Skills list */
        .cv__skill-item {
          font-size: 11px;
          font-weight: 300;
          color: #555;
          padding: 5px 0;
          border-bottom: 1px solid #f0f0f0;
          letter-spacing: 0.03em;
        }

        /* URL */
        .cv__portfolio-link {
          font-size: 10px;
          letter-spacing: 0.15em;
          color: #888;
          text-decoration: none;
          word-break: break-all;
        }

        .cv__portfolio-link:hover { color: #1a1a1a; }

        /* Certifications */
        .cv__cert-item {
          font-size: 11px;
          font-weight: 300;
          color: #666;
          padding: 4px 0;
          line-height: 1.5;
        }

        /* Print */
        @media print {
          body { background: white; padding: 0; }
          .cv-actions { display: none; }
          .cv {
            box-shadow: none;
            padding: 24px 32px;
            max-width: 100%;
          }
        }

        @page {
          size: A4;
          margin: 0;
        }
      `}</style>

      <div className="cv-actions">
        <a
          href="/marta-gea-portfolio/cv-marta-gea.pdf"
          download="CV_MartaGea.pdf"
          className="btn"
        >
          ↓ Descargar PDF
        </a>
        <button className="btn btn--primary" onClick={() => { if (typeof window !== 'undefined') window.print(); }}>
          Imprimir / Guardar como PDF
        </button>
      </div>

      <article className="cv">
        {/* ── Header ── */}
        <header className="cv__header">
          <div>
            <h1 className="cv__name">
              Marta Gea <em>Almudever</em>
            </h1>
            <p className="cv__title">Diseñadora de Interiores &amp; Producto</p>
          </div>
          <address className="cv__contact">
            <a href="mailto:martagea5@hotmail.es">martagea5@hotmail.es</a>
            <br />
            <a href="tel:+34635911200">635 911 200</a>
            <br />
            <a
              href="https://www.linkedin.com/in/marta-gea-483b75255/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/marta-gea
            </a>
            <br />
            Valencia, España
          </address>
        </header>

        <div className="cv__body">
          {/* ── Left column ── */}
          <div>
            {/* Sobre mí */}
            <section className="cv__section">
              <h2 className="cv__section-title">Perfil</h2>
              <p className="cv__about">
                Ingeniera de Diseño Industrial con más de 2 años de experiencia en
                interiorismo y diseño de producto. Especializada en proyectos
                integrales que abarcan planimetría, modelado 3D, renders y dirección
                creativa. Combinó rigor técnico y sensibilidad estética en cada
                proyecto, siempre orientada al detalle y a la coherencia narrativa
                del espacio.
              </p>
            </section>

            {/* Experiencia */}
            <section className="cv__section">
              <h2 className="cv__section-title">Experiencia</h2>
              <div className="cv__timeline">
                <div className="cv__entry">
                  <p className="cv__entry-date">Mayo 2024 — Presente</p>
                  <p className="cv__entry-role">Diseñadora</p>
                  <p className="cv__entry-company">Salamandra Interiorismo · Valencia</p>
                  <p className="cv__entry-desc">
                    Diseño de interiores integral: planimetría, propuestas en AutoCAD y
                    SketchUp, renders en D5 Render, infografías en InDesign. Participación
                    en proyectos destacados como{" "}
                    <strong>Casa Decor Madrid 2025</strong> y{" "}
                    <strong>POPE DELI Valencia</strong>. Gestión de presupuestos,
                    atención al cliente, identidad corporativa y mantenimiento web
                    (HTML, WordPress, Elementor).
                  </p>
                </div>

                <div className="cv__entry">
                  <p className="cv__entry-date">Septiembre 2023 — Mayo 2024</p>
                  <p className="cv__entry-role">Diseñadora de Interiores</p>
                  <p className="cv__entry-company">Salamandra Interiorismo · Valencia</p>
                  <p className="cv__entry-desc">
                    Prácticas: planimetrías, propuestas visuales, modelado y renders
                    en AutoCAD y 3DS Max, apoyo en proyectos de interiorismo residencial
                    y comercial.
                  </p>
                </div>

                <div className="cv__entry">
                  <p className="cv__entry-date">Junio — Septiembre 2023</p>
                  <p className="cv__entry-role">Ingeniera de Diseño Junior</p>
                  <p className="cv__entry-company">Fab 4.0 Hose S.L. · Valencia</p>
                  <p className="cv__entry-desc">
                    Automatización de procesos en Excel con macros, revisión de planos
                    en SolidWorks, controles de calidad y generación de fichas técnicas.
                  </p>
                </div>

                <div className="cv__entry">
                  <p className="cv__entry-date">Julio 2018</p>
                  <p className="cv__entry-role">Becaria — Urbanismo</p>
                  <p className="cv__entry-company">Ajuntament d'Alcàsser · Valencia</p>
                  <p className="cv__entry-desc">
                    Bocetos de fachadas protegidas, revisión de daños estructurales y
                    propuestas de solución.
                  </p>
                </div>
              </div>
            </section>

            {/* Formación */}
            <section className="cv__section" style={{ marginBottom: 0 }}>
              <h2 className="cv__section-title">Formación</h2>
              <div className="cv__timeline">
                <div className="cv__entry">
                  <p className="cv__entry-role">
                    Ingeniería de Diseño Industrial y Desarrollo del Producto
                  </p>
                  <p className="cv__entry-company">
                    Universitat Politècnica de València (UPV)
                  </p>
                </div>
                <div className="cv__entry">
                  <p className="cv__entry-role">Bachillerato en Ciencias Tecnológicas</p>
                  <p className="cv__entry-company">IES Alcàsser</p>
                </div>
              </div>
            </section>
          </div>

          {/* ── Sidebar ── */}
          <aside className="cv__sidebar">
            {/* Portfolio */}
            <section className="cv__section">
              <h2 className="cv__section-title">Portfolio</h2>
              <a
                href="https://martagea5.github.io/marta-gea-portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="cv__portfolio-link"
              >
                martagea5.github.io/<br />marta-gea-portfolio
              </a>
            </section>

            {/* Idiomas */}
            <section className="cv__section">
              <h2 className="cv__section-title">Idiomas</h2>

              {[
                { name: "Español", level: "Nativo", pct: 100 },
                { name: "Catalán", level: "Nativo", pct: 100 },
                { name: "Inglés", level: "B2 Cambridge", pct: 75 },
                { name: "Italiano", level: "A2 ACLES", pct: 35 },
              ].map((l) => (
                <div key={l.name}>
                  <div className="cv__lang-item">
                    <span className="cv__lang-name">{l.name}</span>
                    <span className="cv__lang-level">{l.level}</span>
                  </div>
                  <div className="cv__lang-bar">
                    <div
                      className="cv__lang-fill"
                      style={{ width: `${l.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </section>

            {/* Herramientas */}
            <section className="cv__section">
              <h2 className="cv__section-title">Herramientas</h2>
              {[
                "AutoCAD",
                "SketchUp",
                "D5 Render",
                "3DS Max",
                "V-Ray",
                "Rhino",
                "Blender",
                "Photoshop",
                "Illustrator",
                "InDesign",
                "SolidWorks",
                "WordPress / HTML",
              ].map((t) => (
                <div key={t} className="cv__skill-item">
                  {t}
                </div>
              ))}
            </section>

            {/* Certificaciones */}
            <section className="cv__section" style={{ marginBottom: 0 }}>
              <h2 className="cv__section-title">Certificaciones</h2>
              {[
                "Inglés B2 — Cambridge",
                "ArchViz 3D Surrealista — Domestika",
                "Generative AI for Everyone — Coursera",
                "Supervised Machine Learning — Coursera",
                "Permiso de conducir B",
              ].map((c) => (
                <p key={c} className="cv__cert-item">
                  {c}
                </p>
              ))}
            </section>
          </aside>
        </div>
      </article>
    </>
  );
}
