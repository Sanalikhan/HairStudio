import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
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
          <li
            onClick={() => scrollToSection('services')}
            className="cursor-pointer hover:text-gold-600 transition-colors duration-300"
          >
            {t('nav.services')}
          </li>
          <li
            onClick={() => scrollToSection('stylists')}
            className="cursor-pointer hover:text-gold-600 transition-colors duration-300"
          >
            {t('nav.stylists')}
          </li>
          <li
            onClick={() => scrollToSection('gallery')}
            className="cursor-pointer hover:text-gold-600 transition-colors duration-300"
          >
            {t('nav.gallery')}
          </li>
          <li
            onClick={() => scrollToSection('booking')}
            className="cursor-pointer hover:text-gold-600 transition-colors duration-300"
          >
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
          <button className="hidden md:block bg-dark text-cream-100 px-6 py-3 text-xs tracking-[2px] uppercase hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
            {t('nav.bookNow')}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-dark"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-cream-100 border-t border-cream-200"
          >
            <ul className="flex flex-col py-4 px-[8%] gap-4 text-dark">
              <li
                onClick={() => scrollToSection('services')}
                className="cursor-pointer hover:text-gold-600 transition-colors duration-300 py-2"
              >
                {t('nav.services')}
              </li>
              <li
                onClick={() => scrollToSection('stylists')}
                className="cursor-pointer hover:text-gold-600 transition-colors duration-300 py-2"
              >
                {t('nav.stylists')}
              </li>
              <li
                onClick={() => scrollToSection('gallery')}
                className="cursor-pointer hover:text-gold-600 transition-colors duration-300 py-2"
              >
                {t('nav.gallery')}
              </li>
              <li
                onClick={() => scrollToSection('booking')}
                className="cursor-pointer hover:text-gold-600 transition-colors duration-300 py-2"
              >
                {t('nav.contact')}
              </li>
              <li className="pt-2">
                <button className="w-full bg-dark text-cream-100 px-6 py-3 text-xs tracking-[2px] uppercase">
                  {t('nav.bookNow')}
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
