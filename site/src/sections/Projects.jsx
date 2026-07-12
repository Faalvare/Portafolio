/* eslint-disable no-unused-vars */
// src/sections/Projects.jsx
import FadeInSection from '../components/FadeInSection';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaPlay, FaImages, FaLock, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useTranslation } from '../contexts/translationContext';
import { PROJECTS_DATA } from '../configs/data/projects';

const Projects = () => {
  const [ expanded, setExpanded ] = useState({});
  const [ lightbox, setLightbox ] = useState(null); // { titleKey, images, index }
  const { t } = useTranslation();
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const asset = (p) => (p?.startsWith('http') ? p : base + p);

  const toggleResults = (id) => {
    setExpanded(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const openLightbox = (project, index) => {
    setLightbox({ titleKey: project.id, images: project.images, index });
  };
  const closeLightbox = () => setLightbox(null);
  const showPrev = useCallback(() => {
    setLightbox(prev => prev && ({ ...prev, index: (prev.index - 1 + prev.images.length) % prev.images.length }));
  }, []);
  const showNext = useCallback(() => {
    setLightbox(prev => prev && ({ ...prev, index: (prev.index + 1) % prev.images.length }));
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [ lightbox, showPrev, showNext ]);

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center py-20 px-6 bg-white/70 dark:bg-gray-800/70 transition-colors duration-300"
    >
      <div className="container mx-auto max-w-6xl">
        <FadeInSection>
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">
            {t.sections.projects}
          </h2>
        </FadeInSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">
          {PROJECTS_DATA.map((project, i) => {
            const videoSrc = project.video ? asset(project.video) : null;
            const videoExternal = project.videoExternal || null;
            const imageSrc = project.image ? asset(project.image) : null;
            const isGithub = project.link?.includes('github.com');
            const galleryImages = project.images?.length > 1 ? project.images.map(asset) : null;

            return (
              <FadeInSection key={i} delay={i * 0.05} className="h-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="h-full bg-white dark:bg-gray-700 rounded-xl shadow-md
                            border border-gray-200 dark:border-gray-600
                            hover:shadow-lg hover:transform hover:-translate-y-1
                            transition-all duration-300 overflow-hidden flex flex-col"
                >
                  {imageSrc && (
                    <div className="relative aspect-video bg-gray-100 dark:bg-gray-900 overflow-hidden">
                      <img
                        src={imageSrc}
                        alt={t.projects.titles[project.id]}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                      {(videoSrc || videoExternal) && (
                        <a
                          href={videoSrc || videoExternal}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={t.projects.buttons.watchDemo}
                          className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/40 transition-colors group"
                        >
                          <span className="bg-white/90 dark:bg-gray-900/90 text-blue-600 dark:text-blue-400 rounded-full p-4 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-110">
                            <FaPlay className="text-xl" />
                          </span>
                        </a>
                      )}
                      {galleryImages && (
                        <button
                          type="button"
                          onClick={() => openLightbox({ ...project, images: galleryImages }, 0)}
                          aria-label={t.projects.buttons.viewGallery}
                          className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/40 transition-colors group cursor-pointer"
                        >
                          <span className="bg-white/90 dark:bg-gray-900/90 text-blue-600 dark:text-blue-400 rounded-full p-4 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-110">
                            <FaImages className="text-xl" />
                          </span>
                          <span className="absolute bottom-2 right-2 flex items-center gap-1 bg-black/60 text-white text-xs font-medium px-2 py-1 rounded-md">
                            <FaImages className="text-xs" />
                            {galleryImages.length}
                          </span>
                        </button>
                      )}
                    </div>
                  )}

                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      {t.projects.titles[project.id]}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 flex-1">
                      {t.projects.descriptions[project.id]}
                    </p>

                    {t.projects.results[project.id] && (
                      <div className="mb-4">
                        <button
                          onClick={() => toggleResults(i)}
                          className="text-sm text-blue-600 dark:text-blue-400 hover:underline focus:outline-none font-medium cursor-pointer"
                          aria-expanded={!!expanded[i]}
                        >
                          {expanded[i] ? t.projects.buttons.hideResults : t.projects.buttons.viewResults}
                        </button>

                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: expanded[i] ? 1 : 0, height: expanded[i] ? 'auto' : 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <h4 className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-1 mt-2">
                            {t.projects.txtResults}:
                          </h4>
                          <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                            {t.projects.results[project.id].map((result, idx) => (
                              <li key={idx} className="before:content-['•'] before:mr-1">
                                {result}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs
                                    bg-gray-100 dark:bg-gray-700/50
                                    text-gray-800 dark:text-gray-200
                                    border border-gray-200 dark:border-blue-500/40
                                    rounded-md
                                    hover:border-blue-500 dark:hover:border-blue-400
                                    transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3 mt-auto">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline transition-all duration-300 group text-sm font-medium"
                        >
                          {isGithub ? (
                            <FaGithub className="text-lg group-hover:scale-110 transition-transform" />
                          ) : (
                            <FaExternalLinkAlt className="text-base group-hover:scale-110 transition-transform" />
                          )}
                          <span>
                            {isGithub ? t.projects.buttons.viewOnGithub : project.link.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                          </span>
                        </a>
                      )}
                      {(videoSrc || videoExternal) && (
                        <a
                          href={videoSrc || videoExternal}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline transition-all duration-300 group text-sm font-medium"
                        >
                          <FaPlay className="text-sm group-hover:scale-110 transition-transform" />
                          <span>{videoExternal ? 'YouTube' : t.projects.buttons.watchDemo}</span>
                        </a>
                      )}
                      {!project.link && project.private && (
                        <span className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm font-medium">
                          <FaLock className="text-xs" />
                          <span>{t.projects.privateLabel}</span>
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              </FadeInSection>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={closeLightbox}
          >
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Close"
              className="absolute top-4 right-4 text-white/80 hover:text-white text-2xl p-2 cursor-pointer"
            >
              <FaTimes />
            </button>

            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); showPrev(); }}
              aria-label="Previous"
              className="absolute left-2 sm:left-4 text-white/80 hover:text-white text-2xl sm:text-3xl p-2 sm:p-3 cursor-pointer"
            >
              <FaChevronLeft />
            </button>

            <motion.img
              key={lightbox.index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              src={lightbox.images[lightbox.index]}
              alt={`${t.projects.titles[lightbox.titleKey]} ${lightbox.index + 1}/${lightbox.images.length}`}
              onClick={(e) => e.stopPropagation()}
              className="max-w-full max-h-[85vh] rounded-lg shadow-2xl object-contain"
            />

            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); showNext(); }}
              aria-label="Next"
              className="absolute right-2 sm:right-4 text-white/80 hover:text-white text-2xl sm:text-3xl p-2 sm:p-3 cursor-pointer"
            >
              <FaChevronRight />
            </button>

            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm font-medium">
              {lightbox.index + 1} / {lightbox.images.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
