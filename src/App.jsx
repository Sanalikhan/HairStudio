import { useEffect } from 'react';
import './i18n/config';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Stylists from './components/Stylists';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navigation />
      <Hero />
      <Services />
      <Gallery />
      <Stylists />
      <Booking />
      <Footer />
    </div>
  );
}

export default App;
