
import React, { memo } from 'react';

interface ImageAttributionProps {
  className?: string;
}

// Using memo to prevent unnecessary re-renders
const ImageAttribution: React.FC<ImageAttributionProps> = memo(({ className }) => {
  return (
    <div className={`text-xs text-gray-400 italic mt-2 text-center ${className || ''}`}>
      Images courtesy of NASA and Wikipedia
    </div>
  );
});

ImageAttribution.displayName = 'ImageAttribution';

export default ImageAttribution;
