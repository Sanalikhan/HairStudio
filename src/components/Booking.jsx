import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';

const Booking = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="booking"
      ref={ref}
      className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center text-center text-white overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark/75 via-dark/60 to-dark/75" />
        <img
          src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1920&q=80"
          alt="Booking"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 lg:px-12 py-24 lg:py-32 w-full">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 1, ease: [0.2, 0.7, 0.2, 1] }}
            className="font-serif text-5xl lg:text-6xl font-medium mb-8"
          >
            {t('booking.title')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 0.95, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.2, 0.7, 0.2, 1] }}
            className="mb-12 text-lg lg:text-xl text-gray-200"
          >
            {t('booking.description')}
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block bg-white text-dark px-12 py-5 text-sm tracking-[2px] uppercase font-semibold hover:bg-gold-600 hover:text-white transition-all duration-300 shadow-xl"
          >
            {t('booking.cta')}
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Booking;
