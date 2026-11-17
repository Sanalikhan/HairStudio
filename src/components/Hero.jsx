import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative h-screen min-h-[600px] flex items-center px-[8%] text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(20,14,10,0.75)] via-[rgba(20,14,10,0.25)] to-[rgba(20,14,10,0.1)]" />
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1920&q=80"
          alt="Salon"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[620px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 0.85, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xs tracking-[4px] uppercase mb-6"
        >
          {t('hero.tag')}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-serif text-[78px] leading-[1.05] font-medium mb-7"
        >
          {t('hero.title')}{' '}
          <em className="italic font-bold text-gold-500 text-shadow-soft">
            {t('hero.titleEm')}
          </em>{' '}
          {t('hero.titleEnd')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-lg font-light max-w-[460px] mb-10"
        >
          {t('hero.description')}
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          href="#"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block bg-white text-dark px-10 py-[18px] text-[13px] tracking-[2px] uppercase font-medium hover:bg-cream-100 transition-all duration-300"
        >
          {t('hero.cta')}
        </motion.a>
      </div>

      {/* Rating Card */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="absolute right-[8%] bottom-[60px] bg-white/[0.14] backdrop-blur-glass border border-white/30 px-7 py-[18px] text-sm hidden lg:block"
      >
        <b className="block font-serif text-[30px]">{t('hero.rating')}</b>
        {t('hero.ratingText')}
      </motion.div>
    </section>
  );
};

export default Hero;
