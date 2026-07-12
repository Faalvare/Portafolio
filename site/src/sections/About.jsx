// src/sections/About.jsx
import FadeInSection from '../components/FadeInSection';
import { useTranslation } from '../contexts/translationContext';

const About = () => {
  const { t } = useTranslation();
  return (
    <section
      id="about"
      className="min-h-screen py-20 px-6
                transition-colors duration-300 flex items-center
              bg-white/70 dark:bg-gray-800/70"
    >
      <div className="container mx-auto max-w-4xl text-center">
        <FadeInSection>
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
            {t.sections.about}
          </h2>

        </FadeInSection>
        <FadeInSection delay={0.2}>
          <div className="text-lg text-gray-700 dark:text-gray-300 mb-8 space-y-4">
            {t.about.bio.map((paragraph, i) => (
              <p key={i} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default About;
