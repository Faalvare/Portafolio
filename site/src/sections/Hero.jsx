// src/sections/Hero.jsx
import { FaGithub, FaLinkedin, FaEnvelope, FaDiscord } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { useEffect, useState } from 'react';
import { useTranslation } from '../contexts/translationContext';
import { SITE_DATA } from '../configs/data/site'
import ATSMeta from '../components/ATSMeta';

const Hero = () => {

  const { avatar } = SITE_DATA;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const avatarSrc = avatar.startsWith('http') ? avatar : base + avatar;

  const [ text, setText ] = useState('');
  const [ phraseIndex, setPhraseIndex ] = useState(0);
  const [ isDeleting, setIsDeleting ] = useState(false);
  const [ speed, setSpeed ] = useState(80);
  const { t } = useTranslation();

  const heroPhrases = t.site.heroPhrases;
  const name = t.site.name;
  const title = t.site.title;

  const handlePrintCV = () => {
    window.print();
  };

  useEffect(() => {
    const current = heroPhrases[phraseIndex];
    const isComplete = !isDeleting && text === current;
    const isDeleted = isDeleting && text === '';

    if (isComplete) {
      setSpeed(80);
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleted) {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % heroPhrases.length);
      setSpeed(150);
    } else {
      const timer = setTimeout(() => {
        setText(
          isDeleting
            ? current.substring(0, text.length - 1)
            : current.substring(0, text.length + 1)
        );
      }, isDeleting ? 50 : speed);

      return () => clearTimeout(timer);
    }
  }, [ text, isDeleting, phraseIndex, speed, heroPhrases ]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 py-20
      bg-gradient-to-br  bg-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-700"
    >
      <div className="container mx-auto max-w-screen-xl">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          <img
            src={avatarSrc}
            alt={`${t.site.name}|${t.site.title}`}
            width="250"
            height="250"
            className="w-64 h-64 rounded-full object-cover
             text-black dark:text-white
             shadow-lg dark:shadow-xl
             border-4 border-white dark:border-gray-800
             duration-500 ease-in-out"
          />

          <div className="text-center lg:text-left max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-2 leading-tight">
              {name}
            </h1>
            <p className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 font-medium mb-4">
              {title}
            </p>

            <p
              className="text-lg md:text-xl font-mono text-gray-700 dark:text-gray-300 mb-8 tracking-wide"
              style={{ fontFamily: 'Monaco, Menlo, "Ubuntu Mono", "Fira Code", monospace' }}
            >
              {text}
              <span className="inline-block w-px h-8 bg-blue-600 dark:bg-blue-400 animate-pulse ml-1"></span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button
                type="button"
                onClick={handlePrintCV}
                className="px-6 py-3
                        bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white
                        rounded-lg shadow-md hover:shadow-lg transition-all duration-300 font-medium cursor-pointer"
              >
                {t.hero.btnDownload}
              </button>
              <a
                href="#contact"
                className="px-6 py-3 bg-transparent border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 font-medium"
              >
                {t.hero.btnContact}
              </a>
            </div>

            {/* Redes sociales */}
            <div className="flex justify-center lg:justify-start gap-6 text-2xl">
              {SITE_DATA.social.github &&
                <a href={SITE_DATA.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-transform hover:scale-110">
                  <FaGithub />
                </a>
              }
              {SITE_DATA.social.linkedin &&
                <a href={SITE_DATA.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-transform hover:scale-110">
                  <FaLinkedin />
                </a>
              }
              {SITE_DATA.social.twitter &&
                <a href={SITE_DATA.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-transform hover:scale-110">
                  <FaXTwitter />
                </a>
              }
              {SITE_DATA.social.discord &&
                <a href={SITE_DATA.social.discord} target="_blank" rel="noopener noreferrer" aria-label="Discord" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-transform hover:scale-110">
                  <FaDiscord />
                </a>
              }
              {SITE_DATA.email &&
                <a href={`mailto:${SITE_DATA.email}`} aria-label="Email" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-transform hover:scale-110">
                  <FaEnvelope />
                </a>
              }
            </div>
          </div>
        </div>
      </div>
      <ATSMeta />
    </section>
  );
};

export default Hero;
