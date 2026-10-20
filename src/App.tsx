import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import PaletteSwitcher from './components/PaletteSwitcher';
import Hero from './components/sections/Hero';
import DiscoverSection from './components/sections/DiscoverSection';
import ProgramSection from './components/sections/ProgramSection';
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
        <ProgramSection />
        <DiscoverSection />
        <TherapiesSection />
        <DifferenceSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <PaletteSwitcher />
    </>
  );
}
