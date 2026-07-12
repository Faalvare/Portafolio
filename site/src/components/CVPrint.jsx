// src/components/CVPrint.jsx
import { useTranslation } from '../contexts/translationContext';
import { SITE_DATA } from '../configs/data/site';
import { EXPERIENCE_DATA } from '../configs/data/experience';
import { SKILLS_DATA } from '../configs/data/skills';
import { PROJECTS_DATA } from '../configs/data/projects';

const CV_PROJECT_IDS = [ 'comex-platform', 'sip-pedidos', 'pentacrom-site', 'simarobot' ];

const stripProto = (url) => url?.replace(/^https?:\/\//, '').replace(/\/$/, '');

const SectionHeading = ({ children }) => (
  <h2 className="text-[10.5pt] font-bold uppercase tracking-widest cv-accent mb-1 pb-0.5 border-b border-blue-200">
    {children}
  </h2>
);

const CVPrint = () => {
  const { t } = useTranslation();
  const cvProjects = CV_PROJECT_IDS
    .map((id) => PROJECTS_DATA.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <div className="hidden print:block text-[10pt] leading-snug font-sans">
      <header className="mb-2 pb-1.5 border-b-2 border-blue-600 text-center">
        <h1 className="text-[20pt] font-bold cv-accent tracking-tight">{t.site.name}</h1>
        <p className="text-[10.5pt] cv-muted">{t.site.title}</p>
        <p className="text-[8.5pt] cv-muted mt-1">
          {[ SITE_DATA.email, stripProto(SITE_DATA.social.linkedin), stripProto(SITE_DATA.social.github), stripProto(SITE_DATA.siteUrl) ]
            .filter(Boolean)
            .join('   ·   ')}
        </p>
      </header>

      <section className="mb-2">
        <SectionHeading>{t.cv.sections.summary}</SectionHeading>
        <p>{t.cv.summary}</p>
      </section>

      <section className="mb-2">
        <SectionHeading>{t.cv.sections.experience}</SectionHeading>
        {EXPERIENCE_DATA.map((exp) => (
          <div key={exp.id} className="mb-1 break-inside-avoid">
            <div className="flex justify-between items-baseline">
              <p className="font-semibold">
                {t.experience.roles[exp.id]} <span className="cv-muted font-normal">— {exp.company}</span>
              </p>
              <p className="text-[8.5pt] cv-muted whitespace-nowrap">{exp.period}</p>
            </div>
            <ul className="list-disc ml-4">
              {(t.experience.highlights[exp.id] || []).map((highlight, i) => (
                <li key={i}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mb-2">
        <SectionHeading>{t.cv.sections.skills}</SectionHeading>
        <div className="grid grid-cols-2 gap-x-6">
          {SKILLS_DATA.map((cat) => (
            <p key={cat.id}>
              <span className="font-semibold">{t.skills.categories[cat.id]}: </span>
              <span className="cv-muted">{cat.items.map((item) => t.skills.items[item.name]).join(', ')}</span>
            </p>
          ))}
        </div>
      </section>

      <section>
        <SectionHeading>{t.cv.sections.projects}</SectionHeading>
        {cvProjects.map((p) => (
          <div key={p.id} className="mb-0.5">
            <p>
              <span className="font-semibold">{t.projects.titles[p.id]}</span>
              {' — '}
              {t.projects.results[p.id]?.[0]}
            </p>
            <p className="text-[8.5pt] cv-muted">{p.tech.join(' · ')}</p>
          </div>
        ))}
        <p className="text-[8.5pt] cv-muted mt-1 text-center">{t.cv.portfolioNote} {stripProto(SITE_DATA.siteUrl)}</p>
      </section>
    </div>
  );
};

export default CVPrint;
