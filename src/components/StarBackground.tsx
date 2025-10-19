
import { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const StarBackground = () => {
  const starsRef = useRef<HTMLDivElement>(null);
  const nebulasRef = useRef<HTMLDivElement>(null);
  const shootingStarsRef = useRef<HTMLDivElement>(null);
  const milkyWayRef = useRef<HTMLDivElement>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const isMobile = useIsMobile();

  // Reduce complexity on mobile
  const starCount = useMemo(() => {
    return isMobile ? 30 : 80;
  }, [isMobile]);

  const nebulaCount = useMemo(() => {
    return isMobile ? 0 : 1;
  }, [isMobile]);

  // Use debounce for resize to prevent performance issues
  const debounce = useCallback((func: Function, wait: number) => {
    let timeout: number | null = null;
    return (...args: any[]) => {
      if (timeout) window.clearTimeout(timeout);
      timeout = window.setTimeout(() => func(...args), wait);
    };
  }, []);

  const createBackground = useCallback(() => {
    if (!starsRef.current || !nebulasRef.current || !shootingStarsRef.current || !milkyWayRef.current) return;
    
    // Prevent multiple initializations
    if (isInitialized) return;
    setIsInitialized(true);
    
    const starsContainer = starsRef.current;
    const nebulasContainer = nebulasRef.current;
    const shootingStarsContainer = shootingStarsRef.current;
    const milkyWayContainer = milkyWayRef.current;
    
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;
    
    // Clear existing elements to prevent memory issues
    starsContainer.innerHTML = '';
    nebulasContainer.innerHTML = '';
    shootingStarsContainer.innerHTML = '';
    milkyWayContainer.innerHTML = '';
    
    // Create stars - optimized based on device
    const starsFragment = document.createDocumentFragment();
    
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      
      // Random position
      const left = Math.random() * containerWidth;
      const top = Math.random() * containerHeight;
      
      // Random size (smaller for better performance)
      const size = Math.random() * 0.6 + 0.6;
      
      // Random animation delay and duration
      const delay = Math.random() * 5;
      const duration = 3 + Math.random() * 3;
      
      star.style.left = `${left}px`;
      star.style.top = `${top}px`;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.animationDelay = `${delay}s`;
      star.style.animationDuration = `${duration}s`;
      star.style.transform = 'translateZ(0)'; // Hardware acceleration
      
      starsFragment.appendChild(star);
    }
    
    starsContainer.appendChild(starsFragment);
    
    // Create simplified Milky Way effect
    if (!isMobile) {
      const milkyWay = document.createElement('div');
      
      milkyWay.style.position = 'absolute';
      milkyWay.style.width = '200%';
      milkyWay.style.height = '25%';
      milkyWay.style.left = '-50%';
      milkyWay.style.top = '30%';
      milkyWay.style.transform = 'rotate(-15deg) translateZ(0)';
      milkyWay.style.background = 'radial-gradient(ellipse at center, rgba(255,255,255,0.02) 0%, rgba(200,200,255,0.01) 40%, rgba(0,0,0,0) 70%)';
      milkyWay.style.boxShadow = 'inset 0 0 150px rgba(174,140,250,0.05)';
      milkyWay.style.filter = 'blur(8px)';
      milkyWay.style.opacity = '0.5';
      milkyWay.style.zIndex = '-2';
      
      milkyWayContainer.appendChild(milkyWay);
    }
    
    // Create nebulas (very simplified for performance)
    if (nebulaCount > 0) {
      const nebulasFragment = document.createDocumentFragment();
      
      for (let i = 0; i < nebulaCount; i++) {
        const nebula = document.createElement('div');
        
        // Random position
        const left = Math.random() * containerWidth;
        const top = Math.random() * containerHeight;
        
        // Random size
        const size = Math.random() * 200 + 100;
        
        // Random color (space-themed)
        const colors = [
          'rgba(110, 86, 207, 0.01)',
          'rgba(174, 140, 250, 0.015)',
          'rgba(45, 27, 105, 0.01)',
        ];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        nebula.style.left = `${left}px`;
        nebula.style.top = `${top}px`;
        nebula.style.width = `${size}px`;
        nebula.style.height = `${size}px`;
        nebula.style.background = color;
        nebula.style.borderRadius = '50%';
        nebula.style.filter = 'blur(40px)'; 
        nebula.style.position = 'absolute';
        nebula.style.opacity = '0';
        nebula.style.animation = `nebula-fade ${15 + Math.random() * 10}s infinite ${Math.random() * 10}s`;
        nebula.style.transform = 'translateZ(0)';
        
        nebulasFragment.appendChild(nebula);
      }
      
      nebulasContainer.appendChild(nebulasFragment);
    }
    
    // No shooting stars on mobile for performance
    
  }, [isInitialized, isMobile, nebulaCount, starCount]);

  useEffect(() => {
    // Lazy initialization for better initial load performance
    const initTimeout = setTimeout(() => {
      createBackground();
    }, 100);
    
    // Debounced resize handler to prevent performance issues
    const handleResize = debounce(() => {
      setIsInitialized(false); // Reset to rebuild on significant size changes
    }, 500);
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(initTimeout);
    };
  }, [createBackground, debounce]);

  return (
    <>
      <div ref={milkyWayRef} className="milky-way fixed inset-0 z-[-3]" />
      <div ref={starsRef} className="stars" />
      <div ref={nebulasRef} className="nebulas" />
      <div ref={shootingStarsRef} className="shooting-stars" />
    </>
  );
};

export default StarBackground;
