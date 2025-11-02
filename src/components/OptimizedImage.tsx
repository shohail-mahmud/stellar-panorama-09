
import React, { memo, useState, useCallback } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  onLoad?: () => void;
  onError?: () => void;
  style?: React.CSSProperties;
}

// Simplified optimized image with native lazy loading
const OptimizedImage: React.FC<OptimizedImageProps> = memo(({ 
  src, 
  alt, 
  className = "", 
  objectFit = "contain",
  onLoad,
  onError,
  style
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
    setHasError(false);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setIsLoading(false);
    setHasError(true);
    onError?.();
  }, [onError]);

  const combinedStyle: React.CSSProperties = {
    ...style,
    objectFit,
    opacity: isLoading ? 0 : 1,
    transition: 'opacity 0.4s ease-out',
  };

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-space-dark-blue/30">
          <div className="w-5 h-5 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
        </div>
      )}
      
      <img
        src={src}
        alt={alt}
        style={combinedStyle}
        className={`w-full h-full ${hasError ? 'hidden' : ''}`}
        onLoad={handleLoad}
        onError={handleError}
        loading="lazy"
        decoding="async"
      />
      
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/30">
          <span className="text-xs text-muted-foreground">Failed to load</span>
        </div>
      )}
    </div>
  );
});

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage;
