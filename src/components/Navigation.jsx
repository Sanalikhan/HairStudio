import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'tr' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream-100/95 backdrop-blur-md shadow-md' : 'bg-cream-100'
      } border-b border-cream-200`}
    >
      <div className="flex justify-between items-center px-[8%] py-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-serif text-[26px] tracking-wide text-dark cursor-pointer"
        >
          Lumière
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="hidden md:flex gap-9 list-none text-sm text-dark"
        >
          <li className="cursor-pointer hover:text-gold-600 transition-colors duration-300">
            {t('nav.services')}
          </li>
          <li className="cursor-pointer hover:text-gold-600 transition-colors duration-300">
            {t('nav.stylists')}
          </li>
          <li className="cursor-pointer hover:text-gold-600 transition-colors duration-300">
            {t('nav.gallery')}
          </li>
          <li className="cursor-pointer hover:text-gold-600 transition-colors duration-300">
            {t('nav.contact')}
          </li>
        </motion.ul>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center gap-4"
        >
          <button
            onClick={toggleLanguage}
            className="text-sm font-medium text-dark hover:text-gold-600 transition-colors duration-300 uppercase tracking-wider"
          >
            {i18n.language === 'en' ? 'TR' : 'EN'}
          </button>
          <button className="bg-dark text-cream-100 px-6 py-3 text-xs tracking-[2px] uppercase hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
            {t('nav.bookNow')}
          </button>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
