
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-space-black px-4">
      <div className="text-center max-w-xl mx-auto">
        <div className="mb-8 relative">
          <h1 className="text-9xl font-bold text-space-accent text-glow">404</h1>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-space-black animate-pulse-slow"></div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Lost in Space</h2>
        <p className="text-xl text-gray-300 mb-8">
          The cosmic coordinates you're looking for seem to be outside our known universe.
        </p>
        
        <Link 
          to="/" 
          className="px-6 py-3 rounded-full bg-space-accent text-white hover:bg-space-highlight transition-colors inline-flex items-center"
        >
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 20 20" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2"
          >
            <path 
              d="M15 16L9 10L15 4M5 4V16V4Z" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
          Return to Earth
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
