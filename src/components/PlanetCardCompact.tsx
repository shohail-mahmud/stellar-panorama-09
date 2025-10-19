
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import OptimizedImage from './OptimizedImage';
import { Planet } from '../data/planets';

interface PlanetCardCompactProps {
  planet: Planet;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  imageLoaded: boolean;
  onImageLoad: () => void;
  index: number;
  isLoaded: boolean;
}

const PlanetCardCompact: React.FC<PlanetCardCompactProps> = memo(({ 
  planet, 
  isHovered, 
  onMouseEnter, 
  onMouseLeave, 
  imageLoaded, 
  onImageLoad, 
  index, 
  isLoaded 
}) => {
  const animationDelay = `${index * 0.1}s`;
  const transform = isLoaded ? 'translateY(0)' : 'translateY(20px)';
  const opacity = isLoaded ? 1 : 0;

  return (
    <Link
      to={`/planet/${planet.id}`}
      className="group relative flex-shrink-0 w-48 sm:w-60 md:w-72 h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden bg-space-dark-blue/30 backdrop-blur-sm border border-space-accent/20 transition-all duration-500 hover:shadow-xl hover:shadow-space-accent/10 mx-4"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ 
        animationDelay,
        animation: 'fade-in 0.5s ease-out forwards',
        transform,
        opacity,
        transition: 'transform 0.6s ease-out, opacity 0.6s ease-out'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-space-black via-transparent to-transparent opacity-80"></div>
      
      {/* Enhanced hover effect */}
      <div className={`absolute inset-0 bg-space-accent/5 opacity-0 transition-opacity duration-500 ${
        isHovered ? 'opacity-100' : ''
      }`}></div>
      
      <div className="h-2/3 relative planet-image-container flex items-center justify-center">
        <div className="w-full h-full flex items-center justify-center">
          <OptimizedImage 
            src={planet.image} 
            alt={planet.name} 
            className={`w-4/5 h-4/5 object-contain transition-transform duration-700 planet-image ${
              imageLoaded ? 'image-reveal' : 'opacity-0'
            }`}
            onLoad={onImageLoad}
            style={{ 
              animation: `float ${5 + index % 3}s ease-in-out infinite`
            }}
          />
        </div>
        
        {/* Orbital ring animation around planet */}
        <div className={`absolute w-full h-full rounded-full border border-space-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
          style={{ 
            animation: 'rotate 20s linear infinite',
            width: '90%',
            height: '90%'
          }}
        ></div>
      </div>
      
      <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 z-10">
        <h2 className={`text-2xl md:text-3xl font-bold text-white mb-2 transition-transform duration-300 ${
          isHovered ? 'translate-y-0 text-glow' : 'translate-y-0'
        }`}>{planet.name}</h2>
        
        <p className={`text-gray-300 mb-4 line-clamp-2 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-70 translate-y-2'
        }`}>
          {planet.description}
        </p>
        
        <div className={`inline-flex items-center text-space-highlight transition-all duration-300 ${
          isHovered ? 'translate-x-2' : ''
        }`}>
          <span className="mr-2">Explore</span>
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-transform duration-300 ${
              isHovered ? 'translate-x-1' : ''
            }`}
          >
            <path 
              d="M3 8H13M13 8L8 3M13 8L8 13" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
});

PlanetCardCompact.displayName = 'PlanetCardCompact';

export default PlanetCardCompact;
