import { useState, useEffect } from 'react';
import { Menu, X, Pizza } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Pizza className="h-8 w-8 text-yellow-500 mr-2" />
            <span className="font-bold text-xl sm:text-2xl bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent">
              Papilles Pizza
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#hero" onClick={closeMenu} className="text-gray-900 hover:text-primary transition-colors">
              Accueil
            </a>
            <a href="#menu" onClick={closeMenu} className="text-gray-900 hover:text-primary transition-colors">
              Menu
            </a>
            <a href="#about" onClick={closeMenu} className="text-gray-900 hover:text-primary transition-colors">
              À Propos
            </a>
            <a href="#contact" onClick={closeMenu} className="text-gray-900 hover:text-primary transition-colors">
              Contact
            </a>
          </div>
          
          {/* Phone button */}
          <a 
            href="tel:0169806552" 
            className="hidden md:flex items-center bg-primary hover:bg-primary-700 text-white px-4 py-2 rounded-md transition-colors"
          >
            <span className="font-semibold">01 69 80 65 52</span>
          </a>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-900 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/90">
          <a
            href="#hero"
            onClick={closeMenu}
            className="block w-full text-left px-3 py-2 rounded-md text-gray-900 hover:bg-gray-100 transition-colors"
          >
            Accueil
          </a>
          <a
            href="#menu"
            onClick={closeMenu}
            className="block w-full text-left px-3 py-2 rounded-md text-gray-900 hover:bg-gray-100 transition-colors"
          >
            Menu
          </a>
          <a
            href="#about"
            onClick={closeMenu}
            className="block w-full text-left px-3 py-2 rounded-md text-gray-900 hover:bg-gray-100 transition-colors"
          >
            À Propos
          </a>
          <a
            href="#contact"
            onClick={closeMenu}
            className="block w-full text-left px-3 py-2 rounded-md text-gray-900 hover:bg-gray-100 transition-colors"
          >
            Contact
          </a>
          <a
            href="tel:0169806552"
            className="block w-full text-center px-3 py-2 rounded-md bg-primary text-white font-semibold hover:bg-primary-700 transition-colors"
          >
            01 69 80 65 52
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;