
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-xl font-bold gradient-text">
              Emmanuel<span className="text-white">.</span>
            </a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-white/60">
              &copy; {currentYear} Emmanuel Ezekiel. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
