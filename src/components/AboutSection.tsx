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
              I'm Emmanuel Ezekiel, a Full-Stack Developer with hands-on experience building modern digital products using technologies like React, Node.js, AWS, and serverless architecture. I specialize in turning user feedback into polished UI and crafting scalable backend services that power real-world applications.
            </p>

            <p className="text-white/70 mb-6">
              My career spans roles across top tech environments—from shipping enterprise-grade microservices at CWG PLC to leading cross-functional development at JUST IT and consulting for UBA. I'm passionate about building inclusive, performant, and accessible products that scale, while contributing to agile teams and mentoring junior devs along the way.
            </p>

            <p className="text-white/70 mb-8">
              With an MSc in Financial Technology and certifications in full-stack engineering, I'm always learning and refining my craft—especially in cloud-native systems and modern frontend ecosystems. I write code that solves business problems and improves user experience at scale.
            </p>
          </div>

          <div className="w-full md:w-1/2 animate-fade-in opacity-0" style={{ animationDelay: '0.5s' }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 gradient-text">Education</h3>
                <ul className="space-y-4">
                  <li>
                    <p className="font-medium">MSc Financial Technology</p>
                    <p className="text-white/60 text-sm">University of Bradford, Dec 2023</p>
                  </li>
                  <li>
                    <p className="font-medium">BSc Psychology</p>
                    <p className="text-white/60 text-sm">Obafemi Awolowo University, Sept 2014</p>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 gradient-text">Experience</h3>
                <ul className="space-y-4">
                  <li>
                    <p className="font-medium">Full Stack Developer</p>
                    <p className="text-white/60 text-sm">JUST IT | Nov 2022 – Present</p>
                  </li>
                  <li>
                    <p className="font-medium">Software Engineer</p>
                    <p className="text-white/60 text-sm">CWG PLC | Apr 2019 – Sept 2022</p>
                  </li>
                  <li>
                    <p className="font-medium">Technology Consultant</p>
                    <p className="text-white/60 text-sm">UBA | Aug 2017 – Mar 2019</p>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 gradient-text">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React.js", "Next.js", "TypeScript", "Remix",
                    "Node.js", "Express", "AWS Lambda", "DynamoDB",
                    "AppSync", "React Native", "Jest", "CI/CD",
                    "TDD", "Agile", "Git", "Serverless", "IaC (CDK)"
                  ].map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-muted text-white/80 rounded-full text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 gradient-text">Certifications</h3>
                <ul className="space-y-2 text-white/70">
                  <li>Full Stack Engineer – Codecademy</li>
                  <li>AWS Certified Developer – Associate (in progress)</li>
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
