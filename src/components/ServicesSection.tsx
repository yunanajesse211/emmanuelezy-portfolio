
import React from 'react';
import { Database, LineChart, Brain, Layers, BarChart, Trophy } from 'lucide-react';

const services = [
  {
    icon: <Database className="h-10 w-10 text-theme-blue" />,
    title: "Data Engineering",
    description: "ETL processes, data pipelines, and database management for efficient data processing."
  },
  {
    icon: <LineChart className="h-10 w-10 text-theme-blue" />,
    title: "Data Analysis",
    description: "Exploratory data analysis, statistical analysis, and insights generation from complex datasets."
  },
  {
    icon: <Brain className="h-10 w-10 text-theme-blue" />,
    title: "Machine Learning",
    description: "Building predictive models, classification, regression and clustering algorithms."
  },
  {
    icon: <Layers className="h-10 w-10 text-theme-blue" />,
    title: "Deep Learning",
    description: "Neural networks, computer vision, NLP, and advanced AI model development."
  },
  {
    icon: <BarChart className="h-10 w-10 text-theme-blue" />,
    title: "Data Visualization",
    description: "Creating interactive dashboards and visual representations of data insights."
  },
  {
    icon: <Trophy className="h-10 w-10 text-theme-blue" />,
    title: "AI Strategy Consulting",
    description: "Advising businesses on how to effectively implement AI and data science solutions."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl font-bold mb-2">My Services</h2>
          <div className="h-1 w-20 bg-theme-blue mx-auto mb-6"></div>
          <p className="text-white/70 max-w-2xl mx-auto">
            Providing comprehensive data science services to transform your data into valuable insights and solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-background p-6 rounded-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]"
            >
              <div className="bg-muted/30 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-white/60">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
