
import React, { memo, useEffect, useState } from 'react';
import OrbitalRings from './OrbitalRings';
import { useIsMobile } from '@/hooks/use-mobile';

// Using React.memo to prevent unnecessary re-renders
const PlanetsBackground: React.FC = memo(() => {
  const isMobile = useIsMobile();
  const [reducedAnimation, setReducedAnimation] = useState(false);
  
  useEffect(() => {
    // Detect if user prefers reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedAnimation(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setReducedAnimation(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-space-dark-blue/30 via-transparent to-transparent"></div>
      {!isMobile && !reducedAnimation && <OrbitalRings count={isMobile ? 1 : 2} />}
    </div>
  );
});

PlanetsBackground.displayName = 'PlanetsBackground';

export default PlanetsBackground;
