import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';

const AppointmentPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    stylist: '',
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
    console.log('Appointment booked:', formData);
    setShowSuccess(true);
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cream-50 to-white px-6 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl w-full text-center bg-white rounded-3xl shadow-2xl p-12 lg:p-16 border border-cream-200"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="w-24 h-24 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg"
          >
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-serif text-4xl lg:text-5xl font-bold text-dark mb-6"
          >
            Appointment Confirmed!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-gray-600 mb-10 leading-relaxed"
          >
            Thank you for booking with Lumière Hair Studio! We've sent a confirmation email to{' '}
            <span className="font-semibold text-gold-600">{formData.email}</span>. We can't wait to see you!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-br from-cream-50 to-white p-8 rounded-2xl border border-cream-200 mb-10 text-left"
          >
            <h3 className="font-serif text-2xl font-bold text-dark mb-6">Appointment Details</h3>
            <div className="space-y-4 text-gray-700">
              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <span className="font-semibold">Date</span>
                <span>{formData.date}</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <span className="font-semibold">Time</span>
                <span>{formData.time}</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <span className="font-semibold">Service</span>
                <span>{formData.service}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Stylist</span>
                <span>{formData.stylist}</span>
              </div>
            </div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            onClick={() => navigate('/')}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-12 py-5 text-sm font-bold tracking-[2px] uppercase rounded-xl hover:from-gold-600 hover:to-gold-500 transition-all duration-300 shadow-lg hover:shadow-2xl"
          >
            Back to Home
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <section
      ref={ref}
      className="min-h-screen py-28 lg:py-36 px-6 lg:px-12 bg-gradient-to-br from-white via-cream-50 to-white flex justify-center items-center"
    >
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 1, ease: [0.2, 0.7, 0.2, 1] }}
          className="text-center mb-16"
        >
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-dark mb-6">
            Book Your Appointment
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select your preferred date, time, and service. We'll confirm your appointment within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.2, 0.7, 0.2, 1] }}
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
                  Full Name *
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

            {/* Email and Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              <div className="relative group">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <label htmlFor="email" className="text-sm font-semibold text-dark tracking-wide">
                    Email Address *
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

              <div className="relative group">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <label htmlFor="phone" className="text-sm font-semibold text-dark tracking-wide">
                    Phone Number *
                  </label>
                </div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+1 (555) 123-4567"
                  className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20 transition-all duration-300 text-dark placeholder:text-gray-400 hover:border-gold-400"
                />
              </div>
            </div>

            {/* Date and Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              <div className="relative group">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <label htmlFor="date" className="text-sm font-semibold text-dark tracking-wide">
                    Preferred Date *
                  </label>
                </div>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20 transition-all duration-300 text-dark hover:border-gold-400"
                />
              </div>

              <div className="relative group">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <label htmlFor="time" className="text-sm font-semibold text-dark tracking-wide">
                    Preferred Time *
                  </label>
                </div>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20 transition-all duration-300 text-dark hover:border-gold-400 appearance-none cursor-pointer"
                >
                  <option value="">Select a time</option>
                  <option value="9:00 AM">9:00 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="1:00 PM">1:00 PM</option>
                  <option value="2:00 PM">2:00 PM</option>
                  <option value="3:00 PM">3:00 PM</option>
                  <option value="4:00 PM">4:00 PM</option>
                  <option value="5:00 PM">5:00 PM</option>
                  <option value="6:00 PM">6:00 PM</option>
                  <option value="7:00 PM">7:00 PM</option>
                </select>
              </div>
            </div>

            {/* Service and Stylist */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              <div className="relative group">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <label htmlFor="service" className="text-sm font-semibold text-dark tracking-wide">
                    Service *
                  </label>
                </div>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20 transition-all duration-300 text-dark hover:border-gold-400 appearance-none cursor-pointer"
                >
                  <option value="">Select a service</option>
                  <option value="Cut & Style">Cut & Style - from $45</option>
                  <option value="Colour">Colour - from $90</option>
                  <option value="Treatments">Treatments - from $60</option>
                  <option value="Cut & Colour">Cut & Colour - from $125</option>
                </select>
              </div>

              <div className="relative group">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <label htmlFor="stylist" className="text-sm font-semibold text-dark tracking-wide">
                    Preferred Stylist
                  </label>
                </div>
                <select
                  id="stylist"
                  name="stylist"
                  value={formData.stylist}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20 transition-all duration-300 text-dark hover:border-gold-400 appearance-none cursor-pointer"
                >
                  <option value="">No preference</option>
                  <option value="Emma Laurent">Emma Laurent - Senior Stylist</option>
                  <option value="Sophie Chen">Sophie Chen - Color Specialist</option>
                  <option value="Marco Silva">Marco Silva - Master Stylist</option>
                  <option value="Aria Patel">Aria Patel - Stylist</option>
                </select>
              </div>
            </div>

            {/* Message Field */}
            <div className="relative group">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                <label htmlFor="message" className="text-sm font-semibold text-dark tracking-wide">
                  Additional Notes (Optional)
                </label>
              </div>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Any special requests or questions..."
                className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20 transition-all duration-300 text-dark placeholder:text-gray-400 resize-none hover:border-gold-400"
              />
            </div>

            {/* Submit Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-gradient-to-r from-gold-500 to-gold-600 text-white px-8 py-5 text-sm font-bold tracking-[2px] uppercase rounded-xl hover:from-gold-600 hover:to-gold-500 transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center gap-3 group"
              >
                <span>Confirm Appointment</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </motion.button>

              <motion.button
                type="button"
                onClick={() => navigate('/')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="sm:w-auto px-8 py-5 text-sm font-bold tracking-[2px] uppercase rounded-xl border-2 border-gray-300 text-dark hover:border-gold-500 hover:text-gold-600 transition-all duration-300"
              >
                Cancel
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default AppointmentPage;
