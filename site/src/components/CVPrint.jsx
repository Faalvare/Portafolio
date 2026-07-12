// src/components/CVPrint.jsx
import { useTranslation } from '../contexts/translationContext';
import { SITE_DATA } from '../configs/data/site';
import { EXPERIENCE_DATA } from '../configs/data/experience';
import { SKILLS_DATA } from '../configs/data/skills';
import { PROJECTS_DATA } from '../configs/data/projects';

const CV_PROJECT_IDS = [ 'comex-platform', 'sip-pedidos', 'pentacrom-site', 'simarobot' ];

const stripProto = (url) => url?.replace(/^https?:\/\//, '').replace(/\/$/, '');

const SectionHeading = ({ children }) => (
  <div className="flex items-center gap-2 mb-1.5 mt-3">
    <span className="w-1.5 h-1.5 cv-accent-bg inline-block flex-shrink-0"></span>
    <h2 className="text-[9pt] font-bold uppercase tracking-widest cv-accent whitespace-nowrap">{children}</h2>
    <span className="flex-1 border-t border-gray-300"></span>
  </div>
);

const shortCompany = (name) => name.replace(/\s+SpA$/, '').replace(/\s+\(Do!Lab\)$/, '');

const CVPrint = () => {
  const { t } = useTranslation();
  const cvProjects = CV_PROJECT_IDS
    .map((id) => PROJECTS_DATA.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <div className="hidden print:block text-[10pt] leading-snug font-sans">
      <header>
        <div className="flex justify-between items-start gap-4">
          <div>
            <p className="text-[8.5pt] font-bold tracking-[0.2em] cv-accent uppercase">{t.experience.roles.pentacrom}</p>
            <h1 className="text-[25pt] font-extrabold leading-none mt-1">{t.site.name}</h1>
            <p className="text-[10pt] cv-muted mt-1">{t.cv.tagline}</p>
          </div>
          <div className="text-right text-[8.5pt] cv-accent leading-relaxed pt-1 whitespace-nowrap">
            <p>{SITE_DATA.email}</p>
            <p>{stripProto(SITE_DATA.social.linkedin)}</p>
            <p>{stripProto(SITE_DATA.social.github)}</p>
            <p>{stripProto(SITE_DATA.siteUrl)}</p>
          </div>
        </div>
        <div className="border-b-2 border-black mt-2 mb-2"></div>
      </header>

      <p className="mb-1">{t.cv.summary}</p>

      <div className="grid grid-cols-[1fr_180px] gap-7">
        <div>
          <SectionHeading>{t.cv.sections.experience}</SectionHeading>
          {EXPERIENCE_DATA.map((exp) => (
            <div key={exp.id} className="mb-2 break-inside-avoid">
              <div className="flex justify-between items-baseline gap-2">
                <p className="font-semibold whitespace-nowrap">
                  {t.experience.roles[exp.id]} <span className="cv-muted font-normal">—</span> <span className="cv-accent">{shortCompany(exp.company)}</span>
                </p>
                <span className="flex-1 border-t border-dotted border-gray-300 mx-1"></span>
                <p className="text-[8pt] uppercase tracking-wide cv-muted whitespace-nowrap">{exp.period}</p>
              </div>
              <ul className="list-disc ml-4">
                {(t.experience.highlights[exp.id] || []).map((highlight, i) => (
                  <li key={i} className="text-[9pt]">{highlight}</li>
                ))}
              </ul>
            </div>
          ))}

          <SectionHeading>{t.cv.sections.projects}</SectionHeading>
          {cvProjects.map((p) => (
            <div key={p.id} className="mb-1">
              <div className="flex justify-between items-baseline gap-2">
                <p className="font-semibold whitespace-nowrap">{t.projects.titles[p.id]}</p>
                <span className="flex-1 border-t border-dotted border-gray-300 mx-1"></span>
                <p className="text-[8.5pt] italic cv-muted whitespace-nowrap">{t.cv.projectTags[p.id]}</p>
              </div>
              <p className="text-[8.5pt] cv-accent">{p.tech.join(' · ')}</p>
            </div>
          ))}
        </div>

        <div>
          <SectionHeading>{t.cv.sections.skills}</SectionHeading>
          {SKILLS_DATA.map((cat) => (
            <div key={cat.id} className="mb-1.5 break-inside-avoid">
              <p className="text-[7.5pt] uppercase tracking-wider cv-muted mb-1">{t.skills.categories[cat.id]}</p>
              <div className="flex flex-wrap gap-1">
                {cat.items.map((item) => (
                  <span key={item.name} className="cv-pill text-[7.5pt] px-1.5 py-0.5 rounded">
                    {t.skills.items[item.name]}
                  </span>
                ))}
              </div>
            </div>
          ))}

          <SectionHeading>{t.cv.sections.focus}</SectionHeading>
          <ul className="space-y-1">
            {t.cv.focusPoints.map((point, i) => (
              <li key={i} className="flex gap-1.5 text-[9pt]">
                <span className="cv-accent font-bold">+</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="text-[8.5pt] cv-muted mt-2 text-center">{t.cv.portfolioNote} {stripProto(SITE_DATA.siteUrl)}</p>
    </div>
  );
};

export default CVPrint;
