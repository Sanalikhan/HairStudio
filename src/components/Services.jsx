import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';

const ServiceCard = ({ image, title, description, price, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 1, delay, ease: [0.2, 0.7, 0.2, 1] }}
      className="group cursor-pointer"
    >
      <motion.div
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="h-[340px] bg-cover bg-center mb-6 overflow-hidden"
        style={{ backgroundImage: `url(${image})` }}
      />
      <h3 className="font-serif text-[26px] font-medium mb-2">{title}</h3>
      <p className="text-[15px] text-gray-600 font-light mb-3">{description}</p>
      <span className="block text-sm tracking-wide text-gold-600">{price}</span>
    </motion.div>
  );
};

const Services = () => {
  const { t } = useTranslation();
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: '-100px' });

  const services = [
    {
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80',
      title: t('services.cutTitle'),
      description: t('services.cutDesc'),
      price: t('services.cutPrice'),
      delay: 0
    },
    {
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
      title: t('services.colorTitle'),
      description: t('services.colorDesc'),
      price: t('services.colorPrice'),
      delay: 0.2
    },
    {
      image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80',
      title: t('services.treatmentTitle'),
      description: t('services.treatmentDesc'),
      price: t('services.treatmentPrice'),
      delay: 0.4
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 px-6 lg:px-12 bg-gradient-to-b from-white to-cream-50">
      <div className="max-w-7xl mx-auto">
      <motion.h2
        ref={titleRef}
        initial={{ opacity: 0, y: 60 }}
        animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{ duration: 1, ease: [0.2, 0.7, 0.2, 1] }}
        className="font-serif text-[44px] font-medium text-center mb-16"
      >
        {t('services.title')}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
      </div>
    </section>
  );
};

export default Services;
