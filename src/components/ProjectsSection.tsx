
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  link: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    category: "Web Development",
    image: "https://placehold.co/600x400/5B78F6/FFFFFF/png?text=E-commerce+Platform",
    description: "A full-featured e-commerce platform built with React, Node.js, and MongoDB.",
    technologies: ["React", "Node.js", "Express", "React.js"],
    link: "https://flypharmacy.com.ng/",
  },
  {
    id: 2,
    title: "Movie World",
    category: "Web Application",
    image: "https://placehold.co/600x400/5B78F6/FFFFFF/png?text=Movie+World",
    description: "A responsive portfolio website for a photographer showcasing their work.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    link: "https://my-first-react-7di1cpenj-melchizedek-fortunes-projects.vercel.app/",
  },
  {
    id: 3,
    title: "Weather Forecast App",
    category: "Web Application",
    image: "https://placehold.co/600x400/5B78F6/FFFFFF/png?text=Weather+Forecast+App",
    description: "A task management application with drag-and-drop functionality.",
    technologies: ["React", "TypeScript", "Firebase", "TailwindCSS"],
    link: "https://weather-ilenvdl7j-melchizedek-fortunes-projects.vercel.app/",
  },
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
            Here are some of my recent projects. Each project represents my skills and expertise in different areas.
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
                    href={project.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-theme-blue px-4 py-2 rounded-full font-medium hover:bg-opacity-90"
                  >
                    View Project
                  </a>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs text-theme-green font-medium uppercase">{project.category}</span>
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
