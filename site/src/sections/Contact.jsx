// src/sections/Contact.jsx
import { FaEnvelope, FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';

import { useTranslation } from '../contexts/translationContext';
import { SITE_DATA } from '../configs/data/site';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="flex py-20 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
          {t.contact.message}
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mb-8">
          {SITE_DATA.email}
        </p>

        <a
          href={`mailto:${SITE_DATA.email}`}
          className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 font-medium"
        >
          <FaEnvelope />
          {t.contact.form.buttonText}
        </a>

        <div className="flex justify-center gap-8 mt-10 text-3xl">
          {SITE_DATA.social.github && (
            <a href={SITE_DATA.social.github} target="_blank" rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-transform hover:scale-110">
              <FaGithub />
            </a>
          )}
          {SITE_DATA.social.linkedin && (
            <a href={SITE_DATA.social.linkedin} target="_blank" rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-transform hover:scale-110">
              <FaLinkedin />
            </a>
          )}
          {SITE_DATA.social.discord && (
            <a href={SITE_DATA.social.discord} target="_blank" rel="noopener noreferrer"
              aria-label="Discord"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-transform hover:scale-110">
              <FaDiscord />
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
