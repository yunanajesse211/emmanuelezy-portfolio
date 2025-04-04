
import { Button } from '@/components/ui/button';
import { Award, BookOpen, Calendar, Briefcase } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 dot-pattern relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-xl mx-auto text-center mb-16 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl font-bold mb-4">About <span className="gradient-text">Me</span></h2>
          <div className="h-1 w-20 bg-theme-cyan mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-2xl font-bold mb-6">
              Data Scientist specializing in <span className="text-theme-coral">predictive modeling</span> and <span className="text-theme-cyan">data visualization</span>
            </h3>
            
            <div className="space-y-4 text-white/70">
              <p>
                I'm Yunana Usheujawa Jesse, a passionate Data Scientist with expertise in 
                transforming complex datasets into actionable insights and building 
                sophisticated machine learning models to solve real-world problems.
              </p>
              
              <p>
                With a strong foundation in statistical analysis, programming, and 
                business intelligence, I help organizations make data-driven decisions 
                that drive growth and innovation.
              </p>
              
              <p>
                My approach combines technical expertise with clear communication,
                ensuring that complex analyses are translated into understandable
                and valuable business recommendations.
              </p>
            </div>
            
            <div className="mt-8 flex gap-4">
              <Button className="bg-theme-cyan text-black hover:bg-theme-cyan/80 rounded-xl">
                <a href="#projects">My Projects</a>
              </Button>
              
              <Button variant="outline" className="border-theme-coral text-theme-coral hover:bg-theme-coral/10 rounded-xl">
                <a href="/resume.pdf" download>Download Resume</a>
              </Button>
            </div>
          </div>
          
          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="glass-effect p-6 rounded-2xl animate-fade-in opacity-0 card-hover" style={{ animationDelay: '0.4s' }}>
              <div className="p-3 bg-theme-cyan/20 rounded-xl inline-block mb-4">
                <BookOpen className="h-6 w-6 text-theme-cyan" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <ul className="space-y-3">
                <li>
                  <p className="font-medium">MSc Data Science</p>
                  <p className="text-white/60 text-sm flex items-center mt-1">
                    <Calendar className="h-4 w-4 mr-2 text-theme-cyan" />
                    2018 - 2020
                  </p>
                </li>
                <li>
                  <p className="font-medium">BSc Computer Science</p>
                  <p className="text-white/60 text-sm flex items-center mt-1">
                    <Calendar className="h-4 w-4 mr-2 text-theme-cyan" />
                    2014 - 2018
                  </p>
                </li>
              </ul>
            </div>
            
            <div className="glass-effect p-6 rounded-2xl animate-fade-in opacity-0 card-hover" style={{ animationDelay: '0.5s' }}>
              <div className="p-3 bg-theme-coral/20 rounded-xl inline-block mb-4">
                <Briefcase className="h-6 w-6 text-theme-coral" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Experience</h3>
              <ul className="space-y-3">
                <li>
                  <p className="font-medium">Senior Data Scientist</p>
                  <p className="text-white/60 text-sm flex items-center mt-1">
                    <Calendar className="h-4 w-4 mr-2 text-theme-coral" />
                    2021 - Present
                  </p>
                </li>
                <li>
                  <p className="font-medium">Data Analyst</p>
                  <p className="text-white/60 text-sm flex items-center mt-1">
                    <Calendar className="h-4 w-4 mr-2 text-theme-coral" />
                    2019 - 2021
                  </p>
                </li>
              </ul>
            </div>
            
            <div className="glass-effect p-6 rounded-2xl animate-fade-in opacity-0 card-hover" style={{ animationDelay: '0.6s' }}>
              <div className="p-3 bg-theme-amber/20 rounded-xl inline-block mb-4">
                <Award className="h-6 w-6 text-theme-amber" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Certifications</h3>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-theme-amber"></span>
                  Machine Learning Engineer
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-theme-amber"></span>
                  AWS Certified Data Analytics
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-theme-amber"></span>
                  Deep Learning Specialization
                </li>
              </ul>
            </div>
            
            <div className="glass-effect p-6 rounded-2xl animate-fade-in opacity-0 card-hover" style={{ animationDelay: '0.7s' }}>
              <h3 className="text-xl font-semibold mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python", "R", "SQL", "TensorFlow",
                  "PyTorch", "Pandas", "Scikit-learn",
                  "Power BI", "Git", "Cloud Computing"
                ].map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 text-xs font-medium border border-theme-cyan/30 bg-secondary/30 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
