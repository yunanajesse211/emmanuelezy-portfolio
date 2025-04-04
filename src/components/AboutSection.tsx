
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
              I'm Yunana Usheujawa Jesse, a passionate Data Scientist with expertise in extracting 
              meaningful insights from complex datasets. With a strong foundation in statistical analysis, 
              machine learning, and programming, I transform raw data into valuable business intelligence.
            </p>
            
            <p className="text-white/70 mb-6">
              My journey in data science began several years ago, and I've since worked on various projects 
              involving predictive modeling, natural language processing, and data visualization. I'm committed 
              to using data to solve real-world problems and drive decision-making processes.
            </p>
            
            <p className="text-white/70 mb-8">
              I'm constantly expanding my knowledge in emerging technologies and methodologies in the 
              field of data science and artificial intelligence to deliver innovative solutions.
            </p>
          </div>
          
          <div className="w-full md:w-1/2 animate-fade-in opacity-0" style={{ animationDelay: '0.5s' }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 gradient-text">Education</h3>
                <ul className="space-y-4">
                  <li>
                    <p className="font-medium">MSc Data Science</p>
                    <p className="text-white/60 text-sm">University of Technology</p>
                  </li>
                  <li>
                    <p className="font-medium">BSc Computer Science</p>
                    <p className="text-white/60 text-sm">Federal University</p>
                  </li>
                </ul>
              </div>
              
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 gradient-text">Experience</h3>
                <ul className="space-y-4">
                  <li>
                    <p className="font-medium">Senior Data Scientist</p>
                    <p className="text-white/60 text-sm">Tech Innovations Ltd., 2021–Present</p>
                  </li>
                  <li>
                    <p className="font-medium">Data Analyst</p>
                    <p className="text-white/60 text-sm">Data Insights Co., 2019–2021</p>
                  </li>
                </ul>
              </div>
              
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 gradient-text">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-muted text-white/80 rounded-full text-xs">Python</span>
                  <span className="px-3 py-1 bg-muted text-white/80 rounded-full text-xs">R</span>
                  <span className="px-3 py-1 bg-muted text-white/80 rounded-full text-xs">SQL</span>
                  <span className="px-3 py-1 bg-muted text-white/80 rounded-full text-xs">TensorFlow</span>
                  <span className="px-3 py-1 bg-muted text-white/80 rounded-full text-xs">PyTorch</span>
                  <span className="px-3 py-1 bg-muted text-white/80 rounded-full text-xs">Pandas</span>
                </div>
              </div>
              
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 gradient-text">Interests</h3>
                <ul className="space-y-2 text-white/70">
                  <li>Machine Learning Research</li>
                  <li>Big Data Analytics</li>
                  <li>Data Visualization</li>
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
