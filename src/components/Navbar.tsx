
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Database, ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/80 backdrop-blur-lg py-3 border-b border-theme-cyan/20'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#home" className="flex items-center gap-2">
            <Database className="h-8 w-8 text-theme-cyan" />
            <span className="text-xl font-bold text-white">
              Data<span className="text-theme-cyan">Mind</span>
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-white/80 hover:text-theme-cyan transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-theme-cyan transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <Button className="bg-theme-cyan hover:bg-theme-cyan/80 text-black rounded-full">
            <a href="#contact">Let's Talk</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-theme-cyan" />
          ) : (
            <Menu className="w-6 h-6 text-theme-cyan" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-effect p-6 border-t border-theme-cyan/20 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-white/80 hover:text-theme-cyan transition-colors py-2 border-b border-theme-cyan/10"
              >
                {item.name}
              </a>
            ))}
            <Button className="bg-theme-cyan hover:bg-theme-cyan/80 text-black w-full mt-2">
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                Let's Talk
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
