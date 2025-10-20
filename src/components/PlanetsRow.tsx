
import React, { memo } from 'react';
import PlanetCard from './PlanetCard';
import { Planet } from '../data/planets';
import { useIsMobile } from '@/hooks/use-mobile';

interface PlanetsRowProps {
  planets: Planet[];
  title: string;
  isReverse?: boolean;
  isLoaded?: boolean;
  className?: string;
}

// Using React.memo to prevent unnecessary re-renders
const PlanetsRow: React.FC<PlanetsRowProps> = memo(({ 
  planets, 
  title, 
  isReverse = false, 
  isLoaded = true,
  className = ""
}) => {
  const isMobile = useIsMobile();
  
  if (planets.length === 0) return null;

  return (
    <div className={`opacity-0 animate-fade-in ${className}`} style={{
      animationDuration: '0.5s',
      animationDelay: '0.1s',
      animationFillMode: 'forwards'
    }}>
      <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-white px-4 sm:px-6 md:px-8">
        {title}
      </h2>
      
      <div className="w-full relative overflow-hidden">
        <div className="flex overflow-x-auto scrollbar-none scroll-smooth gap-3 px-4 sm:px-6 md:px-8 py-2 -webkit-overflow-scrolling-touch">
          {planets.map((planet, index) => (
            <PlanetCard 
              key={planet.id}
              planet={planet}
              isReverse={isReverse}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
});

PlanetsRow.displayName = 'PlanetsRow';

export default PlanetsRow;
