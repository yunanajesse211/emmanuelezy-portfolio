
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Github } from 'lucide-react';

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
    title: "Student-Performance",
    category: "Machine Learning",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*c_fiB-YgbnMl6nNXr-A_mg.jpeg",
    description: "A machine learning project analyzing and predicting student performance based on various factors.",
    technologies: ["Python", "Sklearn", "Pandas", "NumPy", "Matplotlib"],
    link: "#",
    github: "https://github.com/yunanajesse211/Student-Performance",
  },
  {
    id: 2,
    title: "Diabetes-prediction",
    category: "Data Analysis",
    image: "https://www.cdc.gov/diabetes/images/research/Research-diagnoses.jpg?_=42420",
    description: "Predictive model to identify diabetes risk based on health metrics using machine learning algorithms.",
    technologies: ["Python", "TensorFlow", "Pandas", "Scikit-learn"],
    link: "#",
    github: "https://github.com/yunanajesse211/diabetes-prediction",
  },
  {
    id: 3,
    title: "Heart-Disease-Classification",
    category: "Healthcare",
    image: "https://miro.medium.com/v2/resize:fit:1358/1*iv2TdJYRVxPEj3TZ6QXVsA.jpeg",
    description: "Classification model for heart disease prediction, using feature engineering and model optimization techniques.",
    technologies: ["Python", "Matplotlib", "Seaborn", "Scikit-learn"],
    link: "#",
    github: "https://github.com/yunanajesse211/heart-disease-classification",
  },
  {
    id: 4,
    title: "customer-churn-prediction",
    category: "Business Intelligence",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*n-KUatF6TIBnqoKVBnJJeQ.jpeg",
    description: "Predictive analytics project to identify factors contributing to customer churn in a telecom company.",
    technologies: ["Python", "Pandas", "Matplotlib", "Neural Networks"],
    link: "#", 
    github: "https://github.com/yunanajesse211/customer-churn-prediction",
  },
  {
    id: 5,
    title: "mall_customer_segmentation",
    category: "Data Analysis",
    image: "https://vitalflux.com/wp-content/uploads/2020/09/customer-segmentation-methods-types.png",
    description: "Customer segmentation analysis for retail data using clustering algorithms to identify shopping patterns.",
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
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl font-bold mb-2">My Projects</h2>
          <div className="h-1 w-20 bg-theme-blue mx-auto mb-6"></div>
          <p className="text-white/70 max-w-2xl mx-auto">
            Here are some of my data science projects. Each project showcases different skills and approaches to data analysis and machine learning.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setFilter(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm transition-colors",
                filter === category
                  ? "bg-theme-blue text-white"
                  : "bg-secondary text-white/70 hover:text-white"
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
              className="bg-secondary rounded-lg overflow-hidden group animate-fade-in opacity-0"
              style={{ animationDelay: `${0.2 + (project.id * 0.1)}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-theme-blue/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-theme-blue px-4 py-2 rounded-full font-medium hover:bg-opacity-90 flex items-center gap-2"
                  >
                    <Github size={16} />
                    View Repository
                  </a>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs text-theme-blue font-medium uppercase">{project.category}</span>
                <h3 className="text-xl font-bold mt-2 mb-3">{project.title}</h3>
                <p className="text-white/60 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-muted text-white/70 text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
