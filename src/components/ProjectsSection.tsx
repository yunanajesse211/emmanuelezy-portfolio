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
    image: "https://idapgroup.com/blog/blog/wp-content/uploads/2020/12/image1.png",
    description: "A full-featured e-commerce platform built with React, Node.js, and MongoDB.",
    technologies: ["React", "Node.js", "Express"],
    link: "https://flypharmacy.com.ng/",
  },
  {
    id: 2,
    title: "Movie World",
    category: "Web Application",
    image: "data:image/jpeg;base64,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",
    description: "An interactive movie database application allowing users to browse and search movies.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    link: "https://my-first-react-7di1cpenj-melchizedek-fortunes-projects.vercel.app/",
  },
  {
    id: 3,
    title: "Weather Forecast App",
    category: "Web Application",
    image: "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/04/Apple-Weather-app.jpg?w=1500&quality=82&strip=all&ssl=1",
    description: "A real-time weather forecasting application with location-based data and a clean UI.",
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
