
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(
    typeof window !== 'undefined' ? window.innerWidth < MOBILE_BREAKPOINT : false
  )

  React.useEffect(() => {
    if (typeof window === 'undefined') return

    // Cross-browser compatible resize handler
    function handleResize() {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    }

    // Check immediately on mount
    handleResize();

    // Add resize and orientation change listeners for all browsers
    window.addEventListener('resize', handleResize);
    
    // Some mobile browsers need this additional event
    if ('onorientationchange' in window) {
      window.addEventListener('orientationchange', handleResize);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if ('onorientationchange' in window) {
        window.removeEventListener('orientationchange', handleResize);
      }
    };
  }, [])

  return isMobile
}
