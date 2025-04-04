
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Github, ExternalLink, Code } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  link: string;
  github: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Student Performance Analysis",
    category: "Machine Learning",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*c_fiB-YgbnMl6nNXr-A_mg.jpeg",
    description: "An advanced machine learning model analyzing factors affecting student academic performance with high predictive accuracy.",
    technologies: ["Python", "Sklearn", "Pandas", "NumPy", "Matplotlib"],
    link: "#",
    github: "https://github.com/yunanajesse211/Student-Performance",
  },
  {
    id: 2,
    title: "Diabetes Risk Prediction",
    category: "Healthcare",
    image: "https://www.cdc.gov/diabetes/images/research/Research-diagnoses.jpg?_=42420",
    description: "ML-powered predictive system to identify diabetes risk from health metrics with interpretable results.",
    technologies: ["Python", "TensorFlow", "Pandas", "Scikit-learn"],
    link: "#",
    github: "https://github.com/yunanajesse211/diabetes-prediction",
  },
  {
    id: 3,
    title: "Heart Disease Classification",
    category: "Healthcare",
    image: "https://miro.medium.com/v2/resize:fit:1358/1*iv2TdJYRVxPEj3TZ6QXVsA.jpeg",
    description: "Advanced classification model for accurate heart disease prediction using feature engineering and ensemble techniques.",
    technologies: ["Python", "Matplotlib", "Seaborn", "Scikit-learn"],
    link: "#",
    github: "https://github.com/yunanajesse211/heart-disease-classification",
  },
  {
    id: 4,
    title: "Customer Churn Analysis",
    category: "Business Intelligence",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*n-KUatF6TIBnqoKVBnJJeQ.jpeg",
    description: "Predictive analytics solution to identify at-risk customers and provide actionable retention strategies.",
    technologies: ["Python", "Pandas", "Matplotlib", "Neural Networks"],
    link: "#", 
    github: "https://github.com/yunanajesse211/customer-churn-prediction",
  },
  {
    id: 5,
    title: "Mall Customer Segmentation",
    category: "Data Analysis",
    image: "https://vitalflux.com/wp-content/uploads/2020/09/customer-segmentation-methods-types.png",
    description: "Clustering-based customer segmentation analysis revealing distinct shopping behavior patterns for targeted marketing.",
    technologies: ["Python", "K-means", "PCA", "Data Visualization"],
    link: "#",
    github: "https://github.com/yunanajesse211/mall_customer_segmentation",
  }
];

const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');

  const categories = ['all', ...new Set(projects.map(project => project.category.toLowerCase()))];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category.toLowerCase() === filter);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-xl mx-auto text-center mb-16 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
          <span className="px-4 py-2 rounded-full text-xs font-semibold bg-theme-cyan/20 text-theme-cyan mb-4 inline-block">
            PORTFOLIO
          </span>
          <h2 className="text-3xl font-bold mb-4">
            Recent <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-white/70">
            Showcasing my data science expertise through real-world applications
            and innovative solutions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setFilter(category)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                filter === category
                  ? "bg-theme-cyan text-black shadow-lg shadow-theme-cyan/20"
                  : "bg-secondary/50 text-white/70 hover:text-white border border-theme-cyan/20"
              )}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-effect rounded-2xl overflow-hidden group animate-fade-in opacity-0 border border-theme-cyan/10"
              style={{ animationDelay: `${0.2 + (project.id * 0.1)}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-theme-cyan/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black/80 text-theme-cyan p-2 rounded-full hover:bg-black"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black/80 text-theme-cyan p-2 rounded-full hover:bg-black"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs text-theme-cyan font-medium px-3 py-1 bg-theme-cyan/10 rounded-full">
                    {project.category}
                  </span>
                  <Code className="text-theme-coral h-4 w-4" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-theme-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/60 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 bg-secondary text-white/70 text-xs rounded-md border border-theme-cyan/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
          <Button className="bg-theme-cyan hover:bg-theme-cyan/80 text-black rounded-xl px-8">
            <a href="https://github.com/yunanajesse211" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Github size={16} />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
