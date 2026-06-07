"use client";

import { asset } from "@/lib/assets";
import { cvData } from "@/lib/cv-data";

/* Brand tokens — mirror globals.css */
const C = {
  ink:      "#1A1917",
  charcoal: "#2C2A27",
  s500:     "#6B6763",
  s400:     "#9B8E7E",
  s300:     "#B8B5B0",
  s200:     "#D4CCC2",
  s100:     "#EEECE7",
  s50:      "#F5F4F0",
  offwhite: "#FAFAF8",
  white:    "#FFFFFF",
};

export default function CVPage() {
  const pdfUrl = asset("/cv-marta-gea.pdf");

  return (
    <div className="cv-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Inter:wght@300;400;500&display=swap');

        .cv-page *, .cv-page *::before, .cv-page *::after {
          box-sizing: border-box; margin: 0; padding: 0;
        }

        .cv-page {
          font-family: 'Inter', sans-serif;
          background: ${C.s50};
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: clamp(16px, 3vw, 28px) clamp(12px, 3vw, 16px) 48px;
          -webkit-text-size-adjust: 100%;
        }

        /* ── Action bar ── */
        .cv-actions {
          width: 100%;
          max-width: 820px;
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-end;
          gap: 8px;
          margin-bottom: 14px;
        }
        .btn {
          font-family: 'Inter', sans-serif;
          font-size: 9px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          padding: 11px 18px;
          min-height: 42px;
          border: 1px solid ${C.charcoal};
          background: transparent;
          color: ${C.charcoal};
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          transition: background 0.25s, color 0.25s;
          white-space: nowrap;
        }
        .btn:hover { background: ${C.charcoal}; color: ${C.white}; }
        .btn--solid { background: ${C.charcoal}; color: ${C.white}; }
        .btn--solid:hover { background: ${C.ink}; }

        /* ── CV sheet ── */
        .cv {
          width: 100%;
          max-width: 820px;
          background: ${C.white};
          color: ${C.charcoal};
          padding: clamp(28px, 5vw, 48px) clamp(24px, 5vw, 52px);
          box-shadow: 0 6px 40px rgba(0,0,0,0.07);
        }

        /* ── Header ── */
        .cv__header {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 16px 32px;
          align-items: end;
          padding-bottom: 18px;
          border-bottom: 1.5px solid ${C.charcoal};
          margin-bottom: 24px;
        }
        .cv__name {
          font-family: 'Playfair Display', serif;
          font-size: clamp(28px, 5.5vw, 40px);
          font-weight: 400;
          line-height: 1.05;
          letter-spacing: 0.01em;
          color: ${C.ink};
        }
        .cv__name em {
          font-style: italic;
          color: ${C.s400};
        }
        .cv__title {
          margin-top: 8px;
          font-size: 8.5px;
          letter-spacing: 0.38em;
          text-transform: uppercase;
          color: ${C.s400};
        }
        .cv__contact {
          font-style: normal;
          text-align: right;
          font-size: 9.5px;
          font-weight: 300;
          color: ${C.s500};
          line-height: 1.9;
        }
        .cv__contact a { color: ${C.s500}; text-decoration: none; }
        .cv__contact a:hover { color: ${C.ink}; }

        /* ── Body 2-col ── */
        .cv__body {
          display: grid;
          grid-template-columns: 1fr 195px;
          gap: 32px;
          align-items: start;
        }

        /* ── Section label ── */
        .cv__label {
          font-size: 7.5px;
          letter-spacing: 0.44em;
          text-transform: uppercase;
          color: ${C.s300};
          margin-bottom: 9px;
          padding-bottom: 5px;
          border-bottom: 1px solid ${C.s100};
        }

        /* ── Sections spacing ── */
        .cv__section { margin-bottom: 22px; }
        .cv__section:last-child { margin-bottom: 0; }

        /* ── Profile ── */
        .cv__profile {
          font-size: 10px;
          font-weight: 300;
          line-height: 1.8;
          color: ${C.s500};
        }

        /* ── Skills pills (blandas) ── */
        .cv__skills {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          margin-top: 10px;
        }
        .cv__skill-pill {
          font-size: 8px;
          font-weight: 300;
          color: ${C.charcoal};
          border: 1px solid ${C.s200};
          padding: 3px 9px;
          letter-spacing: 0.03em;
        }

        /* ── Experience ── */
        .cv__jobs { display: flex; flex-direction: column; gap: 14px; }
        .cv__job-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 8px;
          margin-bottom: 2px;
        }
        .cv__job-role {
          font-size: 10.5px;
          font-weight: 500;
          color: ${C.ink};
          letter-spacing: 0.01em;
        }
        .cv__job-date {
          font-size: 7.5px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: ${C.s300};
          white-space: nowrap;
          flex-shrink: 0;
        }
        .cv__job-company {
          font-size: 9px;
          font-weight: 400;
          color: ${C.s400};
          margin-bottom: 4px;
          letter-spacing: 0.02em;
        }
        .cv__job-desc {
          font-size: 9px;
          font-weight: 300;
          color: ${C.s500};
          line-height: 1.65;
        }

        /* ── Sidebar ── */
        .cv__aside { display: flex; flex-direction: column; gap: 16px; }

        /* Idiomas */
        .cv__lang-row {
          display: flex;
          justify-content: space-between;
          font-size: 8.5px;
          padding: 4px 0;
          border-bottom: 1px solid ${C.s100};
          color: ${C.charcoal};
        }
        .cv__lang-row span:last-child { color: ${C.s300}; font-size: 8px; }

        /* Herramientas */
        .cv__tags { display: flex; flex-wrap: wrap; gap: 4px; }
        .cv__tag {
          font-size: 7.5px;
          font-weight: 300;
          color: ${C.s500};
          background: ${C.s50};
          padding: 3px 8px;
          letter-spacing: 0.04em;
          border: 1px solid ${C.s100};
        }

        /* Formación */
        .cv__edu-item { margin-bottom: 8px; }
        .cv__edu-role {
          font-size: 8.5px;
          font-weight: 500;
          color: ${C.charcoal};
          line-height: 1.4;
        }
        .cv__edu-school {
          font-size: 8px;
          font-weight: 300;
          color: ${C.s400};
        }

        /* Certificaciones */
        .cv__cert {
          font-size: 8px;
          font-weight: 300;
          color: ${C.s500};
          line-height: 1.7;
          padding-bottom: 4px;
          border-bottom: 1px solid ${C.s100};
          margin-bottom: 4px;
        }
        .cv__cert:last-child { border-bottom: none; margin-bottom: 0; }

        /* Portfolio */
        .cv__portfolio-link {
          font-size: 8px;
          letter-spacing: 0.08em;
          color: ${C.s400};
          text-decoration: none;
          word-break: break-all;
          line-height: 1.6;
        }
        .cv__portfolio-link:hover { color: ${C.ink}; }

        /* ── Mobile ── */
        @media (max-width: 620px) {
          .cv__header { grid-template-columns: 1fr; }
          .cv__contact { text-align: left; }
          .cv__body { grid-template-columns: 1fr; }
          .cv-actions { flex-direction: column; }
          .btn { width: 100%; justify-content: center; }
        }

        /* ── Print / PDF ── */
        @media print {
          .cv-page { background: ${C.white}; padding: 0; display: block; }
          .cv-actions { display: none !important; }
          .cv {
            box-shadow: none;
            max-width: none;
            width: 100%;
            padding: 0;
          }
          .cv__body { grid-template-columns: 1fr 175px; gap: 24px; }
          .cv__name { font-size: 32px; }
          .cv__profile, .cv__job-desc { font-size: 8.5px; }
          * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }

        @page { size: A4; margin: 10mm; }
      `}</style>

      {/* ── Action bar ── */}
      <div className="cv-actions">
        <a href={pdfUrl} download="CV_MartaGea.pdf" className="btn">
          ↓ Descargar PDF
        </a>
        <button
          className="btn btn--solid"
          onClick={() => {
            if (typeof window !== "undefined") window.print();
          }}
        >
          Imprimir / Guardar PDF
        </button>
      </div>

      <article className="cv">
        {/* ── Header ── */}
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
            <br />
            {cvData.contact.dob}
          </address>
        </header>

        {/* ── Body ── */}
        <div className="cv__body">

          {/* ── Main column ── */}
          <div>
            {/* Perfil */}
            <div className="cv__section">
              <p className="cv__label">Sobre mí</p>
              <p className="cv__profile">{cvData.profile}</p>
              <div className="cv__skills">
                {cvData.skills.map((s) => (
                  <span key={s} className="cv__skill-pill">{s}</span>
                ))}
              </div>
            </div>

            {/* Experiencia */}
            <div className="cv__section">
              <p className="cv__label">Experiencia</p>
              <div className="cv__jobs">
                {cvData.experience.map((job) => (
                  <div key={`${job.date}-${job.role}`}>
                    <div className="cv__job-header">
                      <span className="cv__job-role">{job.role}</span>
                      {job.date && (
                        <span className="cv__job-date">{job.date}</span>
                      )}
                    </div>
                    <p className="cv__job-company">{job.company}</p>
                    {job.description && (
                      <p className="cv__job-desc">{job.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Sidebar ── */}
          <aside className="cv__aside">

            <div>
              <p className="cv__label">Idiomas</p>
              {cvData.languages.map((lang) => (
                <div key={lang.name} className="cv__lang-row">
                  <span>{lang.name}</span>
                  <span>{lang.level}</span>
                </div>
              ))}
            </div>

            <div>
              <p className="cv__label">Herramientas</p>
              <div className="cv__tags">
                {cvData.tools.map((tool) => (
                  <span key={tool} className="cv__tag">{tool}</span>
                ))}
              </div>
            </div>

            <div>
              <p className="cv__label">Formación</p>
              {cvData.education.map((edu) => (
                <div key={edu.role} className="cv__edu-item">
                  <p className="cv__edu-role">{edu.role}</p>
                  <p className="cv__edu-school">{edu.company}</p>
                </div>
              ))}
            </div>

            <div>
              <p className="cv__label">Títulos y certificaciones</p>
              {cvData.certifications.map((cert) => (
                <p key={cert} className="cv__cert">{cert}</p>
              ))}
            </div>

            <div>
              <p className="cv__label">Portfolio</p>
              <a
                href={cvData.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cv__portfolio-link"
              >
                {cvData.portfolioUrl.replace("https://", "")}
              </a>
            </div>

          </aside>
        </div>
      </article>
    </div>
  );
}
