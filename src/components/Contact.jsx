import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';

const Contact = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Form submission logic would go here
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-28 lg:py-36 px-6 lg:px-12 bg-white flex justify-center"
    >
      <div className="max-w-6xl w-full">
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{ duration: 1, ease: [0.2, 0.7, 0.2, 1] }}
        className="font-serif text-[44px] font-medium text-center mb-6"
      >
        {t('contact.title')}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.2, 0.7, 0.2, 1] }}
        className="text-center text-gray-600 mb-20 max-w-2xl mx-auto text-lg"
      >
        {t('contact.description')}
      </motion.p>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="space-y-8"
        >
          <div>
            <h3 className="font-serif text-3xl font-bold mb-10 text-center md:text-left">{t('contact.info')}</h3>
            <div className="space-y-6">
              {/* Address Card */}
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-5 bg-gradient-to-br from-cream-50 to-white p-6 rounded-2xl border border-cream-200 shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-gold-500 to-gold-600 rounded-xl flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-bold text-dark mb-2.5 text-base tracking-wide">{t('contact.address')}</p>
                  <p className="text-gray-600 text-[15px] leading-relaxed">123 Main Street, Downtown<br />City, State 12345</p>
                </div>
              </motion.div>

              {/* Phone Card */}
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-5 bg-gradient-to-br from-cream-50 to-white p-6 rounded-2xl border border-cream-200 shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-gold-500 to-gold-600 rounded-xl flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-bold text-dark mb-2.5 text-base tracking-wide">{t('contact.phone')}</p>
                  <p className="text-gray-600 text-[15px]">+1 (555) 123-4567</p>
                </div>
              </motion.div>

              {/* Email Card */}
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-5 bg-gradient-to-br from-cream-50 to-white p-6 rounded-2xl border border-cream-200 shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-gold-500 to-gold-600 rounded-xl flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-bold text-dark mb-2.5 text-base tracking-wide">{t('contact.email')}</p>
                  <p className="text-gray-600 text-[15px]">hello@lumiere.studio</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Hours Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-gold-500 to-gold-600 p-7 rounded-2xl shadow-xl"
          >
            <h4 className="font-serif text-2xl font-bold mb-6 text-white flex items-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {t('contact.hours')}
            </h4>
            <div className="space-y-4 text-[15px] text-white">
              <div className="flex justify-between items-center pb-4 border-b border-white/20">
                <span className="font-medium">{t('contact.weekdays')}</span>
                <span className="font-bold">9:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-white/20">
                <span className="font-medium">{t('contact.saturday')}</span>
                <span className="font-bold">10:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between items-center pt-1">
                <span className="font-medium">{t('contact.sunday')}</span>
                <span className="font-bold">{t('contact.closed')}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="bg-gradient-to-br from-cream-50 to-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-cream-200"
        >
          <form onSubmit={handleSubmit} className="space-y-7">
            {/* Name Field */}
            <div className="relative group">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <label htmlFor="name" className="text-sm font-semibold text-dark tracking-wide">
                  {t('contact.form.name')}
                </label>
              </div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20 transition-all duration-300 text-dark placeholder:text-gray-400 hover:border-gold-400"
              />
            </div>

            {/* Email Field */}
            <div className="relative group">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <label htmlFor="email" className="text-sm font-semibold text-dark tracking-wide">
                  {t('contact.form.email')}
                </label>
              </div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20 transition-all duration-300 text-dark placeholder:text-gray-400 hover:border-gold-400"
              />
            </div>

            {/* Phone Field */}
            <div className="relative group">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <label htmlFor="phone" className="text-sm font-semibold text-dark tracking-wide">
                  {t('contact.form.phone')}
                </label>
              </div>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 123-4567"
                className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20 transition-all duration-300 text-dark placeholder:text-gray-400 hover:border-gold-400"
              />
            </div>

            {/* Message Field */}
            <div className="relative group">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                <label htmlFor="message" className="text-sm font-semibold text-dark tracking-wide">
                  {t('contact.form.message')}
                </label>
              </div>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Tell us about your hair goals..."
                className="w-full px-5 py-4 bg-white border-2 border-cream-200 rounded-xl focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20 transition-all duration-300 text-dark placeholder:text-gray-400 resize-none hover:border-gold-400"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-white px-8 py-5 text-sm font-bold tracking-[2px] uppercase rounded-xl hover:from-gold-600 hover:to-gold-500 transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center gap-3 group mt-8"
            >
              <span>{t('contact.form.submit')}</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.button>
          </form>
        </motion.div>
      </div>
      </div>
    </section>
  );
};

export default Contact;
