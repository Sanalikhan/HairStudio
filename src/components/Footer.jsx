import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-10 px-[8%] text-center text-[13px] text-gray-500"
    >
      {t('footer.copyright')}
    </motion.footer>
  );
};

export default Footer;
