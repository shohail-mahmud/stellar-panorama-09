
import React from 'react';
import { Link } from 'react-router-dom';
import OptimizedImage from '@/components/OptimizedImage';
import StarBackground from '@/components/StarBackground';
import PlanetsBackground from '@/components/PlanetsBackground';
import ImageAttribution from '@/components/ImageAttribution';

const Index = () => {
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center px-4 py-12 overflow-hidden">
      <StarBackground />
      <PlanetsBackground />
      
      <div className="max-w-4xl w-full mx-auto z-10 animate-fade-in" style={{ animationDelay: '0.1s' }}>
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-glow">
            StellarScope
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Explore the wonders of our solar system
          </p>
          
          <Link 
            to="/planets" 
            className="inline-flex items-center justify-center px-6 py-3 bg-space-accent text-white rounded-lg hover:bg-space-accent/90 transition-all"
          >
            Start Exploring
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="bg-space-dark-blue/40 backdrop-blur-md rounded-xl border border-space-accent/20 p-6 transform transition-all hover:border-space-accent/50 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-2xl font-bold mb-4 text-white">Planetary Journey</h2>
            <p className="text-gray-300 mb-4">
              Embark on a cosmic adventure through our solar system. Learn about each planet's unique characteristics, from Mercury's extreme temperatures to Neptune's fierce winds.
            </p>
          </div>
          
          <div className="bg-space-dark-blue/40 backdrop-blur-md rounded-xl border border-space-accent/20 p-6 transition-all hover:border-space-accent/50 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <h2 className="text-2xl font-bold mb-4 text-white">Space Facts</h2>
            <p className="text-gray-300 mb-4">
              Discover fascinating information about our cosmic neighborhood. Our database includes detailed information about planetary composition, moons, and atmospheric conditions.
            </p>
          </div>
        </div>
        
        <ImageAttribution className="mt-12" />
      </div>
    </div>
  );
};

export default Index;
