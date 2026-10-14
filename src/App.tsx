import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import DiscoverSection from './components/sections/DiscoverSection';
import TherapiesSection from './components/sections/TherapiesSection';
import DifferenceSection from './components/sections/DifferenceSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import ContactSection from './components/sections/ContactSection';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <DiscoverSection />
        <TherapiesSection />
        <DifferenceSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
