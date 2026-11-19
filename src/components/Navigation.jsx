import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
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
        scrolled ? 'bg-white/98 backdrop-blur-xl shadow-lg' : 'bg-white shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-12 py-6 lg:py-7">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          onClick={() => navigate('/')}
          className="font-serif text-[34px] lg:text-[36px] tracking-wide text-dark cursor-pointer font-bold hover:text-gold-600 transition-colors duration-300"
        >
          Lumière
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="hidden lg:flex gap-12 list-none text-[15px] font-medium text-dark"
        >
          <li
            onClick={() => scrollToSection('services')}
            className="cursor-pointer hover:text-gold-600 transition-colors duration-300 relative py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gold-600 after:transition-all after:duration-300 hover:after:w-full"
          >
            {t('nav.services')}
          </li>
          <li
            onClick={() => scrollToSection('stylists')}
            className="cursor-pointer hover:text-gold-600 transition-colors duration-300 relative py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gold-600 after:transition-all after:duration-300 hover:after:w-full"
          >
            {t('nav.stylists')}
          </li>
          <li
            onClick={() => scrollToSection('gallery')}
            className="cursor-pointer hover:text-gold-600 transition-colors duration-300 relative py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gold-600 after:transition-all after:duration-300 hover:after:w-full"
          >
            {t('nav.gallery')}
          </li>
          <li
            onClick={() => scrollToSection('contact')}
            className="cursor-pointer hover:text-gold-600 transition-colors duration-300 relative py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gold-600 after:transition-all after:duration-300 hover:after:w-full"
          >
            {t('nav.contact')}
          </li>
        </motion.ul>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center gap-5"
        >
          <button
            onClick={toggleLanguage}
            className="text-sm font-semibold text-dark hover:text-gold-600 transition-colors duration-300 uppercase tracking-wider px-5 py-3 rounded-lg hover:bg-cream-50"
          >
            {i18n.language === 'en' ? 'TR' : 'EN'}
          </button>
          <button
            onClick={() => navigate('/appointment')}
            className="hidden lg:block bg-gold-600 text-white px-10 py-4 text-sm font-semibold tracking-wide uppercase rounded-full hover:bg-gold-500 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            {t('nav.bookNow')}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 text-dark hover:bg-cream-50 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7"
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
            className="lg:hidden bg-white border-t border-gray-200 shadow-xl"
          >
            <ul className="flex flex-col py-8 px-6 gap-2 text-dark max-w-7xl mx-auto">
              <li
                onClick={() => scrollToSection('services')}
                className="cursor-pointer hover:text-gold-600 hover:bg-cream-50 transition-all duration-300 py-4 px-5 rounded-lg font-medium text-[15px]"
              >
                {t('nav.services')}
              </li>
              <li
                onClick={() => scrollToSection('stylists')}
                className="cursor-pointer hover:text-gold-600 hover:bg-cream-50 transition-all duration-300 py-4 px-5 rounded-lg font-medium text-[15px]"
              >
                {t('nav.stylists')}
              </li>
              <li
                onClick={() => scrollToSection('gallery')}
                className="cursor-pointer hover:text-gold-600 hover:bg-cream-50 transition-all duration-300 py-4 px-5 rounded-lg font-medium text-[15px]"
              >
                {t('nav.gallery')}
              </li>
              <li
                onClick={() => scrollToSection('contact')}
                className="cursor-pointer hover:text-gold-600 hover:bg-cream-50 transition-all duration-300 py-4 px-5 rounded-lg font-medium text-[15px]"
              >
                {t('nav.contact')}
              </li>
              <li className="pt-6 mt-2 border-t border-gray-100">
                <button
                  onClick={() => navigate('/appointment')}
                  className="w-full bg-gold-600 text-white px-8 py-5 text-sm font-semibold tracking-wide uppercase rounded-full hover:bg-gold-500 transition-all duration-300 shadow-md hover:shadow-lg"
                >
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
