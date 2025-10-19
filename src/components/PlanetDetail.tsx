
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { planets } from '../data/planets';
import { toast } from '@/components/ui/use-toast';
import ImageAttribution from './ImageAttribution';
import OptimizedImage from './OptimizedImage';
import { useIsMobile } from '@/hooks/use-mobile';
import { Skeleton } from './ui/skeleton';

const PlanetDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<'overview' | 'facts'>('overview');
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const isMobile = useIsMobile();

  const planet = planets.find(p => p.id === id);

  useEffect(() => {
    if (planet) {
      // Set loaded state immediately for mobile to prevent delays
      setIsLoaded(isMobile);
      
      const timer = setTimeout(() => {
        setIsLoaded(true);
      }, isMobile ? 10 : 100);
      
      const animationTimer = setTimeout(() => {
        setShowAnimation(true);
      }, isMobile ? 100 : 600);
      
      return () => {
        clearTimeout(timer);
        clearTimeout(animationTimer);
      };
    }
  }, [planet, isMobile]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  if (!planet) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Planet Not Found</h2>
          <p className="text-gray-300 mb-8">The planet you're looking for doesn't exist in our database.</p>
          <Link 
            to="/planets" 
            className="px-6 py-3 bg-space-accent rounded-full text-white hover:bg-space-highlight transition-colors"
          >
            Return to Solar System
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 sm:pt-20 md:pt-24 pb-16 px-3 md:px-8 relative">
      <div className="absolute inset-0 z-0 overflow-hidden opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-space-accent/10 to-transparent animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-space-accent/10 via-transparent to-transparent"></div>
        
        {/* Enhanced planet-specific ambient glow */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at center, rgba(174, 140, 250, 0.3) 0%, transparent 70%)`,
            animation: 'pulse-slow 10s infinite'
          }}
        ></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <Link 
          to="/planets" 
          className="inline-flex items-center text-space-highlight hover:text-space-accent transition-colors mb-4 sm:mb-8 group"
        >
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 20 20" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 transition-transform duration-300 group-hover:-translate-x-1"
          >
            <path 
              d="M15 16L9 10L15 4M5 4V16V4Z" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
          Back to Planets
        </Link>
        
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="rounded-2xl overflow-hidden bg-space-dark-blue/40 backdrop-blur-md border border-space-accent/30 p-4 md:p-8 h-fit relative group planet-detail-glow">
            <div className="absolute inset-0 bg-space-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="aspect-square overflow-hidden rounded-xl mb-4 relative bg-space-black/40 flex items-center justify-center">
                {!imageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Skeleton className="w-4/5 h-4/5 rounded-full bg-gray-800/50" />
                  </div>
                )}
                <OptimizedImage 
                  src={planet.image}
                  alt={planet.name}
                  className={`w-4/5 h-4/5 object-contain ${imageLoaded ? (isMobile ? 'opacity-100' : 'animate-float') : 'opacity-0'}`}
                  style={{ 
                    filter: `drop-shadow(0 0 20px rgba(174, 140, 250, 0.4))`,
                    animation: imageLoaded && !isMobile ? `float ${6 + (planet.id.length % 3)}s ease-in-out infinite` : 'none'
                  }}
                  onLoad={handleImageLoad}
                />
                
                {/* Only show orbital effects on non-mobile */}
                {imageLoaded && !isMobile && (
                  <>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-space-accent/15 rounded-full"
                      style={{ animation: 'rotate 30s linear infinite' }}
                    ></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-[95%] border border-space-accent/10 rounded-full"
                      style={{ animation: 'rotate 45s linear infinite reverse' }}
                    ></div>
                  </>
                )}
                
                <div className="absolute inset-0 bg-gradient-to-tr from-space-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {!isMobile && <div className="absolute -inset-0.5 bg-gradient-to-r from-space-accent/10 to-space-highlight/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>}
              </div>
              
              <ImageAttribution className="mt-1 mb-3" />
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 text-glow">{planet.name}</h1>
              {planet.facts && (
                <div className="grid grid-cols-2 gap-3 opacity-80">
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-400">Diameter</span>
                    <span className="text-xs sm:text-sm text-white">{planet.facts.diameter}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-400">Distance from Sun</span>
                    <span className="text-xs sm:text-sm text-white truncate">{planet.facts.distanceFromSun}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className={`transition-all duration-500 transform ${showAnimation ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex space-x-2 sm:space-x-4 mb-4 sm:mb-6 overflow-x-auto pb-2 scrollbar-none">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full whitespace-nowrap transition-all ${
                  activeTab === 'overview' 
                    ? 'bg-space-accent text-white shadow-lg shadow-space-accent/25' 
                    : 'bg-space-dark-blue/40 text-gray-300 hover:bg-space-dark-blue/60'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('facts')}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full whitespace-nowrap transition-all ${
                  activeTab === 'facts' 
                    ? 'bg-space-accent text-white shadow-lg shadow-space-accent/25' 
                    : 'bg-space-dark-blue/40 text-gray-300 hover:bg-space-dark-blue/60'
                }`}
              >
                Key Facts
              </button>
            </div>
            
            {activeTab === 'overview' ? (
              <div className="bg-space-dark-blue/40 backdrop-blur-md border border-space-accent/30 rounded-2xl p-4 sm:p-6 shadow-lg shadow-black/20">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 text-glow">Planet Overview</h2>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed whitespace-pre-line">
                  {planet.fullDescription}
                </p>
              </div>
            ) : (
              <div className="bg-space-dark-blue/40 backdrop-blur-md border border-space-accent/30 rounded-2xl p-4 sm:p-6 shadow-lg shadow-black/20">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 text-glow">Key Facts</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-sm">
                  <div className="py-2 sm:py-3 border-b border-space-accent/20 group hover:bg-space-accent/5 px-2 sm:px-3 rounded-md transition-colors">
                    <p className="text-xs sm:text-sm text-gray-400 group-hover:text-space-highlight transition-colors duration-300">Diameter</p>
                    <p className="text-white group-hover:text-glow transition-all duration-300">{planet.facts.diameter}</p>
                  </div>
                  <div className="py-2 sm:py-3 border-b border-space-accent/20 group hover:bg-space-accent/5 px-2 sm:px-3 rounded-md transition-colors">
                    <p className="text-xs sm:text-sm text-gray-400 group-hover:text-space-highlight transition-colors duration-300">Mass</p>
                    <p className="text-white group-hover:text-glow transition-all duration-300">{planet.facts.mass}</p>
                  </div>
                  <div className="py-2 sm:py-3 border-b border-space-accent/20 group hover:bg-space-accent/5 px-2 sm:px-3 rounded-md transition-colors">
                    <p className="text-xs sm:text-sm text-gray-400 group-hover:text-space-highlight transition-colors duration-300">Gravity</p>
                    <p className="text-white group-hover:text-glow transition-all duration-300">{planet.facts.gravity}</p>
                  </div>
                  <div className="py-2 sm:py-3 border-b border-space-accent/20 group hover:bg-space-accent/5 px-2 sm:px-3 rounded-md transition-colors">
                    <p className="text-xs sm:text-sm text-gray-400 group-hover:text-space-highlight transition-colors duration-300">Distance from Sun</p>
                    <p className="text-white group-hover:text-glow transition-all duration-300 truncate">{planet.facts.distanceFromSun}</p>
                  </div>
                  <div className="py-2 sm:py-3 border-b border-space-accent/20 group hover:bg-space-accent/5 px-2 sm:px-3 rounded-md transition-colors">
                    <p className="text-xs sm:text-sm text-gray-400 group-hover:text-space-highlight transition-colors duration-300">Orbital Period</p>
                    <p className="text-white group-hover:text-glow transition-all duration-300">{planet.facts.orbitalPeriod}</p>
                  </div>
                  <div className="py-2 sm:py-3 border-b border-space-accent/20 group hover:bg-space-accent/5 px-2 sm:px-3 rounded-md transition-colors">
                    <p className="text-xs sm:text-sm text-gray-400 group-hover:text-space-highlight transition-colors duration-300">Day Length</p>
                    <p className="text-white group-hover:text-glow transition-all duration-300">{planet.facts.dayLength}</p>
                  </div>
                  <div className="py-2 sm:py-3 border-b border-space-accent/20 group hover:bg-space-accent/5 px-2 sm:px-3 rounded-md transition-colors">
                    <p className="text-xs sm:text-sm text-gray-400 group-hover:text-space-highlight transition-colors duration-300">Moons</p>
                    <p className="text-white group-hover:text-glow transition-all duration-300">{planet.facts.moons}</p>
                  </div>
                  <div className="py-2 sm:py-3 border-b border-space-accent/20 group hover:bg-space-accent/5 px-2 sm:px-3 rounded-md transition-colors">
                    <p className="text-xs sm:text-sm text-gray-400 group-hover:text-space-highlight transition-colors duration-300">Temperature</p>
                    <p className="text-white group-hover:text-glow transition-all duration-300">{planet.facts.temperature}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanetDetail;
