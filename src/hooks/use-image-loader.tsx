
import { useState, useCallback, useEffect, useRef } from 'react';
import { toast } from '@/components/ui/use-toast';

interface UseImageLoaderProps {
  src: string;
  alt: string;
  isVisible: boolean;
  onLoad?: () => void;
  onError?: () => void;
}

export function useImageLoader({
  src,
  alt,
  isVisible,
  onLoad: externalOnLoad,
  onError: externalOnError
}: UseImageLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [loadAttempts, setLoadAttempts] = useState(0);
  const mountedRef = useRef(true);
  const imageRef = useRef<HTMLImageElement | null>(null);
  
  // Reset state when src changes
  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
    setLoadAttempts(0);
  }, [src]);
  
  const handleLoad = useCallback(() => {
    if (!mountedRef.current) return;
    
    setIsLoading(false);
    setHasError(false);
    
    if (externalOnLoad) {
      externalOnLoad();
    }
  }, [externalOnLoad]);

  const handleError = useCallback(() => {
    if (!mountedRef.current) return;
    
    // Increment load attempts
    setLoadAttempts(prev => {
      const newAttempts = prev + 1;
      
      // If we've tried less than 2 times, try again with a cache-busting parameter
      if (newAttempts < 2) {
        const retryImage = new Image();
        const cacheBustSrc = `${src}?retry=${Date.now()}`;
        retryImage.src = cacheBustSrc;
        
        retryImage.onload = () => {
          if (imageRef.current) {
            imageRef.current.src = cacheBustSrc;
          }
          handleLoad();
        };
        
        retryImage.onerror = () => {
          if (!mountedRef.current) return;
          setIsLoading(false);
          setHasError(true);
          
          if (externalOnError) {
            externalOnError();
          } else {
            toast({
              title: "Image Failed to Load",
              description: `We couldn't load the image for ${alt}. Please try refreshing the page.`,
              variant: "destructive"
            });
          }
        };
      } else {
        setIsLoading(false);
        setHasError(true);
        
        if (externalOnError) {
          externalOnError();
        } else {
          toast({
            title: "Image Failed to Load",
            description: `We couldn't load the image for ${alt}. Please try refreshing the page.`,
            variant: "destructive"
          });
        }
      }
      
      return newAttempts;
    });
  }, [externalOnError, alt, src, handleLoad]);

  // Function to force trigger image loading
  const forceTriggerLoad = useCallback(() => {
    if (!mountedRef.current || !src) return;
    
    setIsLoading(true);
    setHasError(false);
    
    // Preload image
    const img = new Image();
    imageRef.current = img;
    img.src = src;
    img.onload = handleLoad;
    img.onerror = handleError;
  }, [src, handleLoad, handleError]);

  // Initial setup and cleanup
  useEffect(() => {
    mountedRef.current = true;
    
    return () => {
      mountedRef.current = false;
    };
  }, []);
  
  // Load image when it becomes visible
  useEffect(() => {
    if (isVisible && src) {
      forceTriggerLoad();
    }
  }, [isVisible, src, forceTriggerLoad]);

  return {
    isLoading,
    hasError,
    handleLoad,
    handleError,
    forceTriggerLoad,
    imageRef
  };
}
