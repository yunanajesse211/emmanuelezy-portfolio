
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ResumeUpload from '@/components/ResumeUpload';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    // Add a preloader effect
    const loader = setTimeout(() => {
      document.body.classList.add('loaded');
    }, 300);
    
    return () => clearTimeout(loader);
  }, []);

  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <div className="container mx-auto px-4 md:px-6 py-12 flex justify-center glass-effect my-8 rounded-2xl">
        <ResumeUpload />
      </div>
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
