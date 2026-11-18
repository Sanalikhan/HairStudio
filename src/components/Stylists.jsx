import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';

const StylistCard = ({ name, title, image, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 1, delay, ease: [0.2, 0.7, 0.2, 1] }}
      className="text-center group"
    >
      <div className="relative overflow-hidden mb-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="h-[420px] bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <h3 className="font-serif text-[24px] font-medium mb-2">{name}</h3>
      <p className="text-sm text-gold-600 tracking-wide uppercase">{title}</p>
    </motion.div>
  );
};

const Stylists = () => {
  const { t } = useTranslation();
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: '-100px' });

  const stylists = [
    {
      name: 'Emma Laurent',
      title: t('stylists.seniorStylist'),
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Sophie Chen',
      title: t('stylists.colorSpecialist'),
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Marco Silva',
      title: t('stylists.masterStylist'),
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Aria Patel',
      title: t('stylists.stylist'),
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section id="stylists" className="py-28 lg:py-36 px-6 lg:px-12 bg-gradient-to-b from-cream-50 to-white">
      <div className="max-w-7xl mx-auto">
      <motion.h2
        ref={titleRef}
        initial={{ opacity: 0, y: 60 }}
        animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{ duration: 1, ease: [0.2, 0.7, 0.2, 1] }}
        className="font-serif text-[44px] font-medium text-center mb-6"
      >
        {t('stylists.title')}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 60 }}
        animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.2, 0.7, 0.2, 1] }}
        className="text-center text-gray-600 mb-20 max-w-2xl mx-auto text-lg"
      >
        {t('stylists.description')}
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {stylists.map((stylist, index) => (
          <StylistCard key={index} {...stylist} delay={index * 0.15} />
        ))}
      </div>
      </div>
    </section>
  );
};

export default Stylists;
