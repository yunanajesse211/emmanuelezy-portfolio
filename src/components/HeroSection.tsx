
import { Button } from '@/components/ui/button';
import { FileText, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen relative grid-pattern flex flex-col justify-center pt-20 pb-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-theme-teal/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <span className="px-4 py-2 rounded-full text-xs font-semibold bg-theme-cyan/20 text-theme-cyan mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.1s' }}>
            Data Science & Machine Learning
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
            Yunana <span className="gradient-text">Usheujawa</span> Jesse
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-bold mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
            Creating <span className="text-theme-cyan">Insights</span> from <span className="text-theme-coral">Data</span>
          </h2>
          
          <p className="text-lg max-w-2xl mb-10 text-white/70 animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
            I transform raw data into actionable intelligence through advanced analytics, 
            machine learning models, and intuitive visualizations to help businesses 
            make informed decisions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in opacity-0" style={{ animationDelay: '0.5s' }}>
            <Button className="bg-theme-cyan text-black hover:bg-theme-cyan/80 px-8 py-6 rounded-xl">
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="outline" className="border-theme-coral text-theme-coral hover:bg-theme-coral/10 px-8 py-6 rounded-xl">
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button variant="secondary" className="px-8 py-6 rounded-xl flex items-center gap-2">
              <FileText className="h-5 w-5" />
              <a href="/resume.pdf" download>Download CV</a>
            </Button>
          </div>
        </div>
        
        {/* Tech stack pills */}
        <div className="mt-24 glass-effect p-4 rounded-2xl animate-fade-in opacity-0" style={{ animationDelay: '0.7s' }}>
          <h3 className="text-center text-sm uppercase tracking-wider text-theme-cyan mb-4">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Python",
              "TensorFlow",
              "PyTorch",
              "Pandas",
              "Scikit-learn",
              "NumPy",
              "SQL",
              "Tableau",
              "R"
            ].map((skill, i) => (
              <span 
                key={i} 
                className="px-4 py-2 bg-secondary/50 border border-theme-cyan/30 text-white/90 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-theme-cyan animate-float cursor-pointer"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default HeroSection;
