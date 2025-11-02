
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import PlanetCard from '../components/PlanetCard';
import { planets } from '../data/planets';
import { useIsMobile } from '@/hooks/use-mobile';

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = useIsMobile();
  const firstRowRef = useRef<HTMLDivElement>(null);
  const secondRowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  const scroll = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
    if (ref.current) {
      const scrollAmount = 300;
      ref.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Split planets into rows
  const firstRowPlanets = planets.slice(0, 4);
  const secondRowPlanets = planets.slice(4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen relative flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-space-black"></div>
        </div>
        
        <div className={`relative z-10 text-center max-w-4xl mx-auto transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-glow">
            Explore Our Stellar Neighborhood
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Journey through the cosmos and discover the wonders of our Solar System — from the scorching Mercury to the icy Neptune.
          </p>
          <Link 
            to="/planets" 
            className="px-8 py-4 rounded-full bg-space-accent text-white hover:bg-space-highlight transition-colors text-lg font-medium inline-flex items-center group"
          >
            Start Exploring
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 20 20" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
            >
              <path 
                d="M4 10H16M16 10L10 4M16 10L10 16" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
        
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>
      
      {/* Planets Showcase */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-glow">Our Solar System</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Scroll through the planets below to explore our cosmic neighborhood. Each planet has its own unique characteristics and story.
          </p>
        </div>
        
        <div className="overflow-hidden">
          {/* First Row with Navigation */}
          <div className="relative group mb-16">
            <button
              onClick={() => scroll(firstRowRef, 'left')}
              className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-accent/20 backdrop-blur-sm hover:bg-accent/40 text-foreground p-3 rounded-full border border-accent/30 shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="planet-row" ref={firstRowRef}>
              {firstRowPlanets.map((planet) => (
                <PlanetCard key={planet.id} planet={planet} isReverse={false} />
              ))}
            </div>
            
            <button
              onClick={() => scroll(firstRowRef, 'right')}
              className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-accent/20 backdrop-blur-sm hover:bg-accent/40 text-foreground p-3 rounded-full border border-accent/30 shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          {/* Second Row with Navigation */}
          <div className="relative group">
            <button
              onClick={() => scroll(secondRowRef, 'left')}
              className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-accent/20 backdrop-blur-sm hover:bg-accent/40 text-foreground p-3 rounded-full border border-accent/30 shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="planet-row" ref={secondRowRef}>
              {secondRowPlanets.map((planet) => (
                <PlanetCard key={planet.id} planet={planet} isReverse={true} />
              ))}
            </div>
            
            <button
              onClick={() => scroll(secondRowRef, 'right')}
              className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-accent/20 backdrop-blur-sm hover:bg-accent/40 text-foreground p-3 rounded-full border border-accent/30 shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Link 
            to="/planets" 
            className="px-6 py-3 rounded-full bg-space-dark-blue/50 text-white hover:bg-space-accent transition-colors inline-flex items-center group"
          >
            View All Planets
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 20 20" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
            >
              <path 
                d="M4 10H16M16 10L10 4M16 10L10 16" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
