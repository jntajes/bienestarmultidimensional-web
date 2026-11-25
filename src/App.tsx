import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import DiscoverSection from './components/sections/DiscoverSection';
import TherapiesSection from './components/sections/TherapiesSection';
import DifferenceSection from './components/sections/DifferenceSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import ContactSection from './components/sections/ContactSection';
import ServiceDetailPage from './components/sections/ServiceDetailPage';

export default function App() {
  const service = new URLSearchParams(window.location.search).get('servicio');

  if (service) {
    return <ServiceDetailPage serviceId={service} />;
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <DiscoverSection />
        <DifferenceSection />
        <TherapiesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
