
import React from 'react';
import { Database, LineChart, Brain, Layers, BarChart, Trophy, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: <Database className="h-10 w-10 text-theme-cyan" />,
    title: "Data Engineering",
    description: "Building robust data pipelines and infrastructure for efficient data processing and management."
  },
  {
    icon: <LineChart className="h-10 w-10 text-theme-cyan" />,
    title: "Data Analysis",
    description: "Extracting meaningful insights from complex datasets using statistical methods and exploratory analysis."
  },
  {
    icon: <Brain className="h-10 w-10 text-theme-cyan" />,
    title: "Machine Learning",
    description: "Developing predictive models and algorithms to solve complex business problems and automate decisions."
  },
  {
    icon: <Layers className="h-10 w-10 text-theme-cyan" />,
    title: "Deep Learning",
    description: "Creating neural networks for image recognition, NLP, and other advanced AI applications."
  },
  {
    icon: <BarChart className="h-10 w-10 text-theme-cyan" />,
    title: "Data Visualization",
    description: "Crafting interactive dashboards and visual stories that communicate insights effectively."
  },
  {
    icon: <Trophy className="h-10 w-10 text-theme-cyan" />,
    title: "AI Strategy Consulting",
    description: "Advising organizations on data-driven strategies and AI implementation roadmaps."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-card">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-theme-cyan/50 to-transparent"></div>
      <div className="absolute inset-0 dot-pattern opacity-30"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-xl mx-auto text-center mb-16 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
          <span className="px-4 py-2 rounded-full text-xs font-semibold bg-theme-cyan/20 text-theme-cyan mb-4 inline-block">
            WHAT I DO
          </span>
          <h2 className="text-3xl font-bold mb-4">
            Specialized <span className="gradient-text">Data Science</span> Services
          </h2>
          <p className="text-white/70">
            Transforming complex data into actionable insights and innovative solutions
            to drive your business forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass-effect border border-theme-cyan/10 p-8 rounded-2xl group transition-all duration-300 
                hover:border-theme-cyan/30 hover:bg-theme-cyan/5 animate-fade-in opacity-0"
              style={{ animationDelay: `${0.3 + (index * 0.1)}s` }}
            >
              <div className="bg-theme-cyan/10 rounded-xl w-16 h-16 flex items-center justify-center mb-6 
                  group-hover:bg-theme-cyan/20 transition-all duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-3 group-hover:text-theme-cyan transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-white/60 mb-6">
                {service.description}
              </p>
              
              <Button 
                variant="link" 
                className="p-0 h-auto text-theme-cyan group-hover:translate-x-1 transition-transform duration-300 flex items-center gap-2"
              >
                Learn More <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
