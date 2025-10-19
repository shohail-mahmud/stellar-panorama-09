
import React, { memo, useMemo } from 'react';

interface OrbitalRingsProps {
  count?: number;
}

const OrbitalRings: React.FC<OrbitalRingsProps> = memo(({ count = 3 }) => {
  // Pre-calculate rings array with useMemo to avoid recreating on each render
  const rings = useMemo(() => {
    // Limit number of rings on lower-powered devices
    const actualCount = Math.min(count, 3);
    
    return Array.from({ length: actualCount }).map((_, index) => {
      const size = (index + 2) * 18;
      const halfSize = size / 2;
      const duration = 120 + index * 40;
      const opacity = 0.1 + index * 0.03;
      const rotation = index * 15;
      const direction = index % 2 === 0 ? 'normal' : 'reverse';
      
      return (
        <div 
          key={index}
          className="orbital-ring orbital-ring-visible"
          style={{
            left: '50%',
            top: '50%',
            width: `${size}%`,
            height: `${size}%`,
            marginLeft: `-${halfSize}%`,
            marginTop: `-${halfSize}%`,
            animationDuration: `${duration}s`,
            animationDirection: direction,
            borderWidth: '1px',
            borderColor: `rgba(174, 140, 250, ${opacity})`,
            transform: `rotate(${rotation}deg)`
          }}
        />
      );
    });
  }, [count]);

  return <>{rings}</>;
});

OrbitalRings.displayName = 'OrbitalRings';

export default OrbitalRings;
