
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-1/2 animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-3xl font-bold mb-2">About Me</h2>
            <div className="h-1 w-20 bg-theme-blue mb-8"></div>
            
            <p className="text-white/70 mb-6">
              I'm Emmanuel Ezekiel, a passionate Full-Stack Developer with expertise in creating 
              exceptional digital experiences. With a strong foundation in both front-end and 
              back-end technologies, I bring ideas to life through clean, efficient, and user-friendly code.
            </p>
            
            <p className="text-white/70 mb-6">
              My journey in web development started over 5 years ago, and since then, 
              I've had the opportunity to work with various clients and companies to deliver 
              solutions that not only meet their requirements but exceed their expectations.
            </p>
            
            <p className="text-white/70 mb-8">
              I'm constantly learning and adapting to new technologies and methodologies to 
              ensure that I'm always at the forefront of web development trends.
            </p>
            
            <Button className="bg-theme-blue hover:bg-theme-blue/80">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            </Button>
          </div>
          
          <div className="w-full md:w-1/2 animate-fade-in opacity-0" style={{ animationDelay: '0.5s' }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 gradient-text">Education</h3>
                <ul className="space-y-4">
                  <li>
                    <p className="font-medium">BSc Computer Science</p>
                    <p className="text-white/60 text-sm">University of Lagos, 2016-2020</p>
                  </li>
                  <li>
                    <p className="font-medium">Web Development Certification</p>
                    <p className="text-white/60 text-sm">FreeCodeCamp, 2018</p>
                  </li>
                </ul>
              </div>
              
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 gradient-text">Experience</h3>
                <ul className="space-y-4">
                  <li>
                    <p className="font-medium">Senior Developer</p>
                    <p className="text-white/60 text-sm">Tech Solutions Inc., 2021-Present</p>
                  </li>
                  <li>
                    <p className="font-medium">Web Developer</p>
                    <p className="text-white/60 text-sm">Digital Agency, 2019-2021</p>
                  </li>
                </ul>
              </div>
              
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 gradient-text">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-muted text-white/80 rounded-full text-xs">HTML/CSS</span>
                  <span className="px-3 py-1 bg-muted text-white/80 rounded-full text-xs">JavaScript</span>
                  <span className="px-3 py-1 bg-muted text-white/80 rounded-full text-xs">TypeScript</span>
                  <span className="px-3 py-1 bg-muted text-white/80 rounded-full text-xs">React</span>
                  <span className="px-3 py-1 bg-muted text-white/80 rounded-full text-xs">Next.js</span>
                  <span className="px-3 py-1 bg-muted text-white/80 rounded-full text-xs">Node.js</span>
                  <span className="px-3 py-1 bg-muted text-white/80 rounded-full text-xs">MongoDB</span>
                </div>
              </div>
              
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 gradient-text">Interests</h3>
                <ul className="space-y-2 text-white/70">
                  <li>Open Source Contributing</li>
                  <li>Tech Blogging</li>
                  <li>UI/UX Design</li>
                  <li>Music Production</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
