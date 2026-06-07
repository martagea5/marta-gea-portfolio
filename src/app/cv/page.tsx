"use client";

import { asset } from "@/lib/assets";
import { cvData } from "@/lib/cv-data";

export default function CVPage() {
  const pdfUrl = asset("/cv-marta-gea.pdf");

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

        .cv__name em { font-style: italic; color: #888; }

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

        .cv__contact a { color: #555; text-decoration: none; }
        .cv__contact a:hover { color: #1a1a1a; }

        .cv__body {
          display: grid;
          grid-template-columns: 1fr 220px;
          gap: 48px;
        }

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

        .cv__about {
          font-size: 14px;
          font-weight: 300;
          line-height: 1.8;
          color: #444;
        }

        .cv__timeline { display: flex; flex-direction: column; gap: 20px; }

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

        .cv__skill-item {
          font-size: 11px;
          font-weight: 300;
          color: #555;
          padding: 5px 0;
          border-bottom: 1px solid #f0f0f0;
          letter-spacing: 0.03em;
        }

        .cv__portfolio-link {
          font-size: 10px;
          letter-spacing: 0.15em;
          color: #888;
          text-decoration: none;
          word-break: break-all;
        }

        .cv__portfolio-link:hover { color: #1a1a1a; }

        .cv__cert-item {
          font-size: 11px;
          font-weight: 300;
          color: #666;
          padding: 4px 0;
          line-height: 1.5;
        }

        @media print {
          body { background: white; padding: 0; }
          .cv-actions { display: none; }
          .cv { box-shadow: none; padding: 24px 32px; max-width: 100%; }
        }

        @page { size: A4; margin: 0; }
      `}</style>

      <div className="cv-actions">
        <a href={pdfUrl} download="CV_MartaGea.pdf" className="btn">
          ↓ Descargar PDF
        </a>
        <button
          className="btn btn--primary"
          onClick={() => {
            if (typeof window !== "undefined") window.print();
          }}
        >
          Imprimir / Guardar como PDF
        </button>
      </div>

      <article className="cv">
        <header className="cv__header">
          <div>
            <h1 className="cv__name">
              {cvData.name} <em>{cvData.surname}</em>
            </h1>
            <p className="cv__title">{cvData.title}</p>
          </div>
          <address className="cv__contact">
            <a href={`mailto:${cvData.contact.email}`}>{cvData.contact.email}</a>
            <br />
            <a href={cvData.contact.phoneHref}>{cvData.contact.phone}</a>
            <br />
            <a
              href={cvData.contact.linkedinHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {cvData.contact.linkedin}
            </a>
            <br />
            {cvData.contact.location}
          </address>
        </header>

        <div className="cv__body">
          <div>
            <section className="cv__section">
              <h2 className="cv__section-title">Perfil</h2>
              <p className="cv__about">{cvData.profile}</p>
            </section>

            <section className="cv__section">
              <h2 className="cv__section-title">Experiencia</h2>
              <div className="cv__timeline">
                {cvData.experience.map((entry) => (
                  <div key={`${entry.date}-${entry.role}`} className="cv__entry">
                    {entry.date && (
                      <p className="cv__entry-date">{entry.date}</p>
                    )}
                    <p className="cv__entry-role">{entry.role}</p>
                    <p className="cv__entry-company">{entry.company}</p>
                    {entry.description && (
                      <p className="cv__entry-desc">{entry.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </section>

            <section className="cv__section" style={{ marginBottom: 0 }}>
              <h2 className="cv__section-title">Formación</h2>
              <div className="cv__timeline">
                {cvData.education.map((entry) => (
                  <div key={entry.role} className="cv__entry">
                    <p className="cv__entry-role">{entry.role}</p>
                    <p className="cv__entry-company">{entry.company}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="cv__sidebar">
            <section className="cv__section">
              <h2 className="cv__section-title">Portfolio</h2>
              <a
                href={cvData.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cv__portfolio-link"
              >
                martagea5.github.io/
                <br />
                marta-gea-portfolio
              </a>
            </section>

            <section className="cv__section">
              <h2 className="cv__section-title">Idiomas</h2>
              {cvData.languages.map((lang) => (
                <div key={lang.name}>
                  <div className="cv__lang-item">
                    <span className="cv__lang-name">{lang.name}</span>
                    <span className="cv__lang-level">{lang.level}</span>
                  </div>
                  <div className="cv__lang-bar">
                    <div
                      className="cv__lang-fill"
                      style={{ width: `${lang.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </section>

            <section className="cv__section">
              <h2 className="cv__section-title">Herramientas</h2>
              {cvData.tools.map((tool) => (
                <div key={tool} className="cv__skill-item">
                  {tool}
                </div>
              ))}
            </section>

            <section className="cv__section" style={{ marginBottom: 0 }}>
              <h2 className="cv__section-title">Certificaciones</h2>
              {cvData.certifications.map((cert) => (
                <p key={cert} className="cv__cert-item">
                  {cert}
                </p>
              ))}
            </section>
          </aside>
        </div>
      </article>
    </>
  );
}
