
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Intercept browser back button to redirect to homepage
  useEffect(() => {
    const handlePopState = () => {
      if (location.pathname !== '/') {
        navigate('/', { replace: true });
      }
    };

    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [navigate, location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 py-4 ${
        scrolled ? 'bg-space-black/80 shadow-lg backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link 
          to="/" 
          className="text-2xl md:text-3xl font-bold tracking-wide text-white hover:text-space-highlight transition-colors duration-200 text-glow"
        >
          StellarScope
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link 
            to="/" 
            className={`text-sm md:text-base hover:text-space-highlight transition-colors duration-200 ${
              location.pathname === '/' ? 'text-space-highlight' : 'text-white'
            }`}
          >
            Planets
          </Link>
          <Link 
            to="/about" 
            className={`text-sm md:text-base hover:text-space-highlight transition-colors duration-200 ${
              location.pathname === '/about' ? 'text-space-highlight' : 'text-white'
            }`}
          >
            About
          </Link>
          <Link 
            to="/planets" 
            className="px-4 py-2 rounded-full bg-space-accent text-white hover:bg-space-highlight transition-colors duration-200 text-sm md:text-base"
          >
            Explore
          </Link>
        </div>
        
        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="text-white hover:text-space-highlight p-2 rounded-md">
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-space-dark-blue/95 border-space-accent/30 backdrop-blur-md text-white w-[250px]">
              <div className="flex flex-col space-y-4 mt-8">
                <Link 
                  to="/" 
                  className={`text-lg py-2 px-4 rounded-md hover:bg-space-accent/20 transition-colors ${
                    location.pathname === '/' ? 'text-space-highlight font-medium' : 'text-white'
                  }`}
                >
                  Planets
                </Link>
                <Link 
                  to="/about" 
                  className={`text-lg py-2 px-4 rounded-md hover:bg-space-accent/20 transition-colors ${
                    location.pathname === '/about' ? 'text-space-highlight font-medium' : 'text-white'
                  }`}
                >
                  About
                </Link>
                <Link 
                  to="/copyright" 
                  className={`text-lg py-2 px-4 rounded-md hover:bg-space-accent/20 transition-colors ${
                    location.pathname === '/copyright' ? 'text-space-highlight font-medium' : 'text-white'
                  }`}
                >
                  Copyright & Credits
                </Link>
                <div className="pt-4 border-t border-space-accent/30 mt-2">
                  <Link 
                    to="/planets" 
                    className="w-full px-4 py-2 rounded-full bg-space-accent text-white hover:bg-space-highlight transition-colors duration-200 text-center block"
                  >
                    Explore
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
