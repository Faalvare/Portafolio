// src/components/CVPrint.jsx
import { useTranslation } from '../contexts/translationContext';
import { SITE_DATA } from '../configs/data/site';
import { EXPERIENCE_DATA } from '../configs/data/experience';
import { SKILLS_DATA } from '../configs/data/skills';
import { PROJECTS_DATA } from '../configs/data/projects';

const CV_PROJECT_IDS = [ 'comex-platform', 'sip-pedidos', 'pentacrom-site', 'simarobot' ];

const stripProto = (url) => url?.replace(/^https?:\/\//, '').replace(/\/$/, '');

const CVPrint = () => {
  const { t } = useTranslation();
  const cvProjects = CV_PROJECT_IDS
    .map((id) => PROJECTS_DATA.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <div className="hidden print:block text-black text-[10.5pt] leading-snug font-sans">
      <header className="mb-3 border-b border-gray-400 pb-2">
        <h1 className="text-2xl font-bold">{t.site.name}</h1>
        <p className="text-base text-gray-700">{t.site.title}</p>
        <p className="text-[9.5pt] text-gray-600 mt-1">
          {[ SITE_DATA.email, stripProto(SITE_DATA.social.linkedin), stripProto(SITE_DATA.social.github), stripProto(SITE_DATA.siteUrl) ]
            .filter(Boolean)
            .join('  ·  ')}
        </p>
      </header>

      <section className="mb-3">
        <h2 className="text-[11pt] font-bold uppercase tracking-wide mb-1">{t.cv.sections.summary}</h2>
        <p>{t.cv.summary}</p>
      </section>

      <section className="mb-3">
        <h2 className="text-[11pt] font-bold uppercase tracking-wide mb-1">{t.cv.sections.experience}</h2>
        {EXPERIENCE_DATA.map((exp) => (
          <div key={exp.id} className="mb-2 break-inside-avoid">
            <div className="flex justify-between items-baseline">
              <p className="font-semibold">{t.experience.roles[exp.id]} — {exp.company}</p>
              <p className="text-[9.5pt] text-gray-600">{exp.period}</p>
            </div>
            <ul className="list-disc ml-4">
              {(t.experience.highlights[exp.id] || []).map((highlight, i) => (
                <li key={i}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mb-3">
        <h2 className="text-[11pt] font-bold uppercase tracking-wide mb-1">{t.cv.sections.skills}</h2>
        {SKILLS_DATA.map((cat) => (
          <p key={cat.id}>
            <span className="font-semibold">{t.skills.categories[cat.id]}: </span>
            {cat.items.map((item) => t.skills.items[item.name]).join(', ')}
          </p>
        ))}
      </section>

      <section>
        <h2 className="text-[11pt] font-bold uppercase tracking-wide mb-1">{t.cv.sections.projects}</h2>
        {cvProjects.map((p) => (
          <p key={p.id} className="mb-0.5">
            <span className="font-semibold">{t.projects.titles[p.id]}</span>
            {' — '}
            {t.projects.results[p.id]?.[0]}
            {p.link && <span className="text-gray-600"> ({stripProto(p.link)})</span>}
          </p>
        ))}
        <p className="text-[9.5pt] text-gray-600 mt-1">{t.cv.portfolioNote} {stripProto(SITE_DATA.siteUrl)}</p>
      </section>
    </div>
  );
};

export default CVPrint;
