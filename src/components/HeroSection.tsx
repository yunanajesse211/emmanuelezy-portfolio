import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-20 pb-10"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
          <p className="text-theme-blue mb-4 font-medium">Hello, my name is</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Emmanuel Ezekiel
          </h1>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white/70 mb-8">
            I'm a <span className="gradient-text">Full-Stack Developer</span>
          </h2>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mb-10">
            I design and develop experiences that make people's lives simple.
            I specialize in creating accessible, human-centered products.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-theme-blue hover:bg-theme-blue/80 px-8 py-6">
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button variant="outline" className="border-theme-blue text-theme-blue hover:bg-theme-blue/10 px-8 py-6">
              <a href="#projects">View Projects</a>
            </Button>
          </div>
        </div>

        {/* Centralized Skills Section */}
        <div className="mt-24 flex justify-center items-center w-full">
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "React",
              "TypeScript",
              "Node.js",
              "Next.js",
              "TailwindCSS",
              "Javascript",
            ].map((skill, i) => (
              <span key={i} className="text-white text-lg font-medium bg-gray-800 px-4 py-2 rounded-md">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
