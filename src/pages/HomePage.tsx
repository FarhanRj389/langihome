import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import BusinessDescription from '../components/BusinessDescription';
import ServicesHighlights from '../components/ServicesHighlights';
import WhyChooseUs from '../components/WhyChooseUs';
import TestimonialSection from '../components/TestimonialSection';
import ContactSection from '../components/ContactSection';

interface HomePageProps {
  setCurrentPage: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <BusinessDescription setCurrentPage={setCurrentPage} />
      <ServicesHighlights setCurrentPage={setCurrentPage} />
      <WhyChooseUs />
      <TestimonialSection />
      <ContactSection />
    </main>
  );
};

export default HomePage;