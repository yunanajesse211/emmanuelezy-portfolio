
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ResumeUpload from '@/components/ResumeUpload';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <div className="container mx-auto px-4 md:px-6 py-10 flex justify-center">
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
