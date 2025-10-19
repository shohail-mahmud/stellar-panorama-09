
import React, { useState, useEffect } from 'react';
import { planets } from '../data/planets';
import PlanetsBackground from '../components/PlanetsBackground';
import PlanetsPageHeader from '../components/PlanetsPageHeader';
import PlanetsRow from '../components/PlanetsRow';
import { useIsMobile } from '@/hooks/use-mobile';

const PlanetsPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = useIsMobile();

  // Restructure planets into individual rows for better organization
  const innerPlanets = planets.filter(p => 
    ['sun', 'mercury', 'venus', 'earth', 'mars'].includes(p.id)
  );
  
  const outerPlanets = planets.filter(p => 
    ['jupiter', 'saturn', 'uranus', 'neptune'].includes(p.id)
  );
  
  const cosmicObjects = planets.filter(p => 
    !['sun', 'mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'].includes(p.id)
  );

  useEffect(() => {
    // Use RAF for smoother loading
    requestAnimationFrame(() => {
      setIsLoaded(true);
    });
  }, []);

  return (
    <div className="min-h-screen w-full pt-10 pb-8 md:pt-20 md:pb-16 px-0 relative">
      {/* Background effects */}
      <PlanetsBackground />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="px-4 sm:px-6 md:px-8">
          <PlanetsPageHeader />
        </div>
        
        {/* Inner Solar System */}
        <PlanetsRow 
          planets={innerPlanets}
          title="Inner Solar System"
          isLoaded={isLoaded}
          className="mb-6 md:mb-10"
        />
        
        {/* Outer Solar System */}
        <PlanetsRow 
          planets={outerPlanets}
          title="Outer Solar System"
          isLoaded={isLoaded}
          className="mb-6 md:mb-10"
        />

        {/* Cosmic Objects */}
        <PlanetsRow 
          planets={cosmicObjects}
          title="Cosmic Objects"
          isLoaded={isLoaded}
        />
      </div>
    </div>
  );
};

export default PlanetsPage;
