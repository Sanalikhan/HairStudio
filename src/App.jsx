import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './i18n/config';
import LoadingScreen from './components/LoadingScreen';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Stylists from './components/Stylists';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Booking from './components/Booking';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import AppointmentPage from './pages/AppointmentPage';

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Gallery />
      <Stylists />
      <Testimonials />
      <Contact />
      <Booking />
    </>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Loading screen timeout
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      clearTimeout(timer);
    };
  }, []);

  return (
    <Router>
      <LoadingScreen isLoading={isLoading} />
      <div className="overflow-x-hidden">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/appointment" element={<AppointmentPage />} />
        </Routes>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;
