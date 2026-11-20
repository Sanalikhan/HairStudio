import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-dark/90 via-dark/70 to-dark/50" />
        <motion.img
          style={{
            x: mousePosition.x,
            y: mousePosition.y
          }}
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1920&q=80"
          alt="Salon"
          className="w-full h-full object-cover scale-110"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <motion.div
          style={{ opacity }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="inline-block bg-gold-600/20 backdrop-blur-sm border border-gold-500/30 px-6 py-2 rounded-full text-sm tracking-[3px] uppercase mb-8 text-gold-400 font-semibold"
          >
            {t('hero.tag')}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.1] font-bold mb-8"
          >
            <span className="text-gold-400">{t('hero.title')}</span>{' '}
            <span className="block mt-2">
              <em className="italic font-bold text-white text-shadow-soft">
                {t('hero.titleEm')}
              </em>{' '}
              <span className="text-gold-400">{t('hero.titleEnd')}</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-lg lg:text-xl font-light max-w-xl mb-12 text-gray-200 leading-relaxed"
          >
            {t('hero.description')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              onClick={() => navigate('/appointment')}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center bg-gold-600 text-white px-12 py-5 text-sm font-semibold tracking-wide uppercase rounded-full hover:bg-gold-500 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              {t('hero.cta')}
            </motion.button>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center bg-gold-500 text-black px-12 py-5 text-sm font-bold tracking-wide uppercase rounded-full hover:bg-gold-400 transition-all duration-300 shadow-xl hover:shadow-2xl border-2 border-gold-400"
            >
              Explore Services
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Rating Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="absolute right-6 lg:right-12 bottom-12 bg-white/95 backdrop-blur-xl border border-gray-200 px-8 py-6 rounded-2xl shadow-2xl hidden lg:block"
      >
        <div className="flex items-center gap-4">
          <div>
            <div className="flex items-center gap-1 mb-1">
              <b className="font-serif text-4xl text-dark">{t('hero.rating')}</b>
            </div>
            <p className="text-sm text-gray-600 font-medium">{t('hero.ratingText')}</p>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
