import { useState } from 'react';
import { ArrowUpCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <div className="min-h-screen bg-white text-gray-900 relative">
      <div className="absolute inset-0 bg-marble-pattern bg-fixed opacity-20 z-0" />
      
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Menu />
          <About />
          <Contact />
        </main>
        <Footer />
        
        <button 
          onClick={scrollToTop} 
          className={`fixed bottom-6 right-6 bg-primary hover:bg-primary-700 text-white p-2 rounded-full transition-all duration-300 z-50 ${visible ? 'opacity-100' : 'opacity-0'}`}
          aria-label="Scroll to top"
        >
          <ArrowUpCircle size={30} />
        </button>
      </div>
    </div>
  );
}

export default App;