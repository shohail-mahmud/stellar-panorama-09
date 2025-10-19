
import React, { memo, useEffect, useState } from 'react';
import { useImageLoader } from '@/hooks/use-image-loader';
import { useElementVisibility } from '@/hooks/use-element-visibility';
import { useIsMobile } from '@/hooks/use-mobile';
import { ImageLoading } from '@/components/ui/image-loading';
import { ImageError } from '@/components/ui/image-error';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  onLoad?: () => void;
  onError?: () => void;
  style?: React.CSSProperties;
}

// Using memo to prevent unnecessary re-renders
const OptimizedImage: React.FC<OptimizedImageProps> = memo(({ 
  src, 
  alt, 
  className = "", 
  objectFit = "contain",
  onLoad,
  onError,
  style
}) => {
  const isMobile = useIsMobile();
  // Create a unique ID for each image that's stable across rerenders
  const imageId = `img-${src.split('/').pop()?.replace(/\W/g, '') || Math.random().toString(36).substring(2, 10)}`;
  const isVisible = useElementVisibility({ 
    elementId: imageId,
    rootMargin: '200px' // Load images that are within 200px of viewport
  });
  
  const [isRendered, setIsRendered] = useState(false);
  
  const { 
    isLoading, 
    hasError, 
    handleLoad, 
    handleError, 
    forceTriggerLoad 
  } = useImageLoader({
    src,
    alt,
    isVisible,
    onLoad,
    onError
  });

  // Mark as rendered after initial mount
  useEffect(() => {
    setIsRendered(true);
  }, []);

  // Force load when component becomes visible
  useEffect(() => {
    if (isVisible && isRendered) {
      forceTriggerLoad();
    }
  }, [isVisible, isRendered, forceTriggerLoad]);

  // Simpler reveal for better cross-browser compatibility
  const combinedStyle: React.CSSProperties = {
    ...style,
    objectFit,
    opacity: isLoading ? 0 : 1,
    transition: 'opacity 0.3s ease-in-out',
  };

  return (
    <div 
      id={imageId}
      className={`relative ${className}`}
    >
      {isLoading && <ImageLoading />}
      
      {/* Always create the img element but control loading through src attribute */}
      <img
        src={isVisible ? src : ''}
        data-src={src} // Store the real src as a data attribute
        alt={alt}
        style={combinedStyle}
        className={`w-full h-full ${hasError ? 'hidden' : ''}`}
        onLoad={handleLoad}
        onError={handleError}
        loading="lazy"
      />
      
      {hasError && <ImageError />}
    </div>
  );
});

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage;
