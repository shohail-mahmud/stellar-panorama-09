
import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Planet } from '../data/planets';
import OptimizedImage from './OptimizedImage';
import { useIsMobile } from '@/hooks/use-mobile';

interface PlanetCardProps {
  planet: Planet;
  isReverse: boolean;
  index?: number;
}

const PlanetCard = ({ planet, isReverse, index = 0 }: PlanetCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const isMobile = useIsMobile();
  
  const handleCardInteraction = useCallback((entering: boolean) => {
    if (isMobile) return;
    setIsHovered(entering);
  }, [isMobile]);

  const animationClass = 'animate-fade-in';
  const animationDelay = `${index * 0.1}s`;

  // Card dimensions
  const cardStyle = {
    animationDelay,
    animationFillMode: 'forwards' as const,
    minWidth: isMobile ? '85vw' : '240px',
    maxWidth: isMobile ? '85vw' : '240px',
  };
  
  return (
    <Link 
      to={`/planet/${planet.id}`}
      className={`planet-card ${animationClass} ${
        isHovered ? 'scale-105' : ''
      }`}
      style={cardStyle}
      onMouseEnter={() => handleCardInteraction(true)}
      onMouseLeave={() => handleCardInteraction(false)}
    >
      <div className="planet-image-container">
        <OptimizedImage 
          src={planet.image} 
          alt={planet.name} 
          className={`planet-image ${isHovered ? 'scale-110' : ''}`}
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      
      <div className="planet-info">
        <h3 className="planet-name text-left">{planet.name}</h3>
        <p className="planet-description text-left">{planet.description}</p>
        <div className="planet-explore">
          <span>Explore</span>
          <div className="planet-explore-icon">→</div>
        </div>
      </div>
    </Link>
  );
};

export default PlanetCard;
