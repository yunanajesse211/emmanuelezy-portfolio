
import { Github, Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative py-16 overflow-hidden bg-card">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-theme-cyan/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <a href="#home" className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold gradient-text">DataMind</span>
            </a>
            <p className="text-white/60 mb-6">
              Transforming raw data into actionable insights through advanced analytics
              and machine learning solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/yunanajesse211" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-theme-cyan/10 text-theme-cyan
                  hover:bg-theme-cyan hover:text-black transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-theme-cyan/10 text-theme-cyan
                  hover:bg-theme-cyan hover:text-black transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-theme-cyan/10 text-theme-cyan
                  hover:bg-theme-cyan hover:text-black transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="mailto:yunanajesse@gmail.com" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-theme-cyan/10 text-theme-cyan
                  hover:bg-theme-cyan hover:text-black transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-white/70 hover:text-theme-cyan transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-theme-cyan"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="text-theme-cyan h-5 w-5 mt-0.5" />
                <span className="text-white/70">yunanajesse@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <ExternalLink className="text-theme-cyan h-5 w-5" />
                <a 
                  href="https://github.com/yunanajesse211" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-theme-cyan transition-colors"
                >
                  github.com/yunanajesse211
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 mb-4 md:mb-0">
            &copy; {currentYear} Yunana Jesse. All rights reserved.
          </p>
          <p className="text-white/50">
            Data Scientist & Machine Learning Engineer
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
