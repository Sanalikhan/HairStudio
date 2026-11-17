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
      className="relative py-32 px-[8%] text-center text-white overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(30,20,14,0.7)] to-[rgba(30,20,14,0.7)]" />
        <img
          src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1920&q=80"
          alt="Booking"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 1, ease: [0.2, 0.7, 0.2, 1] }}
          className="font-serif text-[52px] font-medium mb-5"
        >
          {t('booking.title')}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 0.85, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.2, 0.7, 0.2, 1] }}
          className="mb-9"
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
          className="inline-block bg-white text-dark px-10 py-[18px] text-[13px] tracking-[2px] uppercase hover:bg-cream-100 transition-colors duration-300"
        >
          {t('booking.cta')}
        </motion.a>
      </div>
    </section>
  );
};

export default Booking;
