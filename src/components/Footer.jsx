import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Footer = () => {
  const { t } = useTranslation();

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
    }
  };

  return (
    <footer className="bg-gradient-to-br from-dark via-[#1a1a1a] to-dark text-gray-300">
      <div className="w-full px-6 lg:px-12 py-28 lg:py-36">

        {/* Brand Section - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-24 max-w-4xl mx-auto"
        >
          <h3 className="font-serif text-5xl lg:text-6xl text-white mb-6 font-bold tracking-wide">Lumière</h3>
          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            A calm, modern studio for cuts, colour and care. Experience luxury hair services.
          </p>
          <div className="flex gap-6 justify-center items-center">
            <a
              href="#"
              className="w-14 h-14 bg-white/5 hover:bg-gold-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl border border-white/10 hover:border-gold-600"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="#"
              className="w-14 h-14 bg-white/5 hover:bg-gold-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl border border-white/10 hover:border-gold-600"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="#"
              className="w-14 h-14 bg-white/5 hover:bg-gold-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl border border-white/10 hover:border-gold-600"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Info Cards - Same Background */}
        <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-24 justify-items-center md:justify-items-stretch">

          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-gold-600/50 transition-all duration-300 w-full max-w-sm md:max-w-none"
          >
            <h4 className="text-white font-semibold text-xl mb-8 tracking-wide flex items-center gap-3">
              <svg className="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <svg className="w-5 h-5 text-gold-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-[15px] leading-relaxed text-gray-300">123 Main Street<br />Downtown, City 12345</span>
              </li>
              <li className="flex items-center gap-4">
                <svg className="w-5 h-5 text-gold-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-[15px] text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-4">
                <svg className="w-5 h-5 text-gold-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-[15px] text-gray-300">hello@lumiere.studio</span>
              </li>
            </ul>
          </motion.div>

          {/* Opening Hours Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-gold-600/50 transition-all duration-300 w-full max-w-sm md:max-w-none"
          >
            <h4 className="text-white font-semibold text-xl mb-8 tracking-wide flex items-center gap-3">
              <svg className="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Opening Hours
            </h4>
            <ul className="space-y-5 text-[15px]">
              <li className="flex justify-between items-center gap-4 pb-5 border-b border-white/10">
                <span className="text-gray-400">Monday - Friday</span>
                <span className="text-gold-500 font-semibold">9:00 - 20:00</span>
              </li>
              <li className="flex justify-between items-center gap-4 pb-5 border-b border-white/10">
                <span className="text-gray-400">Saturday</span>
                <span className="text-gold-500 font-semibold">10:00 - 18:00</span>
              </li>
              <li className="flex justify-between items-center gap-4">
                <span className="text-gray-400">Sunday</span>
                <span className="text-gray-500 font-semibold">Closed</span>
              </li>
            </ul>
          </motion.div>

          {/* Quick Links Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-gold-600/50 transition-all duration-300 w-full max-w-sm md:max-w-none"
          >
            <h4 className="text-white font-semibold text-xl mb-8 tracking-wide flex items-center gap-3">
              <svg className="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Quick Links
            </h4>
            <ul className="space-y-5">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-gold-500 transition-all duration-300 text-left text-[15px] hover:translate-x-2 inline-flex items-center gap-2 text-gray-300 w-full group"
                >
                  <span className="w-1.5 h-1.5 bg-gold-500 rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                  {t('nav.services')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('stylists')}
                  className="hover:text-gold-500 transition-all duration-300 text-left text-[15px] hover:translate-x-2 inline-flex items-center gap-2 text-gray-300 w-full group"
                >
                  <span className="w-1.5 h-1.5 bg-gold-500 rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                  {t('nav.stylists')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="hover:text-gold-500 transition-all duration-300 text-left text-[15px] hover:translate-x-2 inline-flex items-center gap-2 text-gray-300 w-full group"
                >
                  <span className="w-1.5 h-1.5 bg-gold-500 rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                  {t('nav.gallery')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-gold-500 transition-all duration-300 text-left text-[15px] hover:translate-x-2 inline-flex items-center gap-2 text-gray-300 w-full group"
                >
                  <span className="w-1.5 h-1.5 bg-gold-500 rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                  {t('nav.contact')}
                </button>
              </li>
            </ul>
          </motion.div>
        </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-10 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <p className="text-[15px] text-gray-500">
              {t('footer.copyright')}
            </p>
            <div className="flex gap-10 text-[15px]">
              <a href="#" className="text-gray-500 hover:text-gold-500 transition-all duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-gold-500 transition-all duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
