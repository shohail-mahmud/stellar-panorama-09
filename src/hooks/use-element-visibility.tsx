
import { useState, useEffect, useRef } from 'react';
import { useIsMobile } from './use-mobile';

interface UseElementVisibilityProps {
  elementId: string;
  threshold?: number;
  rootMargin?: string;
}

export function useElementVisibility({ 
  elementId, 
  threshold = 0.1, 
  rootMargin = '0px' 
}: UseElementVisibilityProps) {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Set to true immediately on mobile devices or if no elementId is provided
  useEffect(() => {
    if (isMobile || !elementId) {
      setIsVisible(true);
      return;
    }
    
    // Reset visibility when elementId changes
    setIsVisible(false);
    
    // Create and configure IntersectionObserver
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsVisible(true);
          if (observerRef.current) {
            observerRef.current.disconnect();
          }
        }
      },
      { threshold, rootMargin }
    );
    
    // Wait for a small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const element = document.getElementById(elementId);
      if (element && observerRef.current) {
        observerRef.current.observe(element);
      } else {
        // Fallback: set visible if element not found
        setIsVisible(true);
      }
    }, 50);
    
    return () => {
      clearTimeout(timer);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [elementId, isMobile, threshold, rootMargin]);

  // Always return true for mobile to ensure immediate loading
  return isVisible || isMobile;
}
