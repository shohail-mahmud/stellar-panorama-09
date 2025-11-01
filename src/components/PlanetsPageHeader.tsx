import React, { memo } from 'react';
import ImageAttribution from './ImageAttribution';
import { useIsMobile } from '@/hooks/use-mobile';

// Using memo to prevent unnecessary re-renders
const PlanetsPageHeader: React.FC = memo(() => {
  const isMobile = useIsMobile();
  return <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6 md:mb-8">
      <div className={isMobile ? "text-center" : ""}>
        <h1 className="text-3xl md:text-6xl font-bold text-white mb-2 text-glow px-0 mx-0 my-[60px] py-[3px]">Explore Our Solar System</h1>
        <p className="text-gray-300 text-base md:text-xl mb-2">Journey through space and discover the wonders of each planet</p>
        <div className="flex justify-center md:justify-start mb-4 md:mb-0">
          <ImageAttribution />
        </div>
      </div>
    </div>;
});
PlanetsPageHeader.displayName = 'PlanetsPageHeader';
export default PlanetsPageHeader;