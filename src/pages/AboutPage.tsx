
import { useState, useEffect } from 'react';

const AboutPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className={`opacity-0 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : ''}`}>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-glow">About StellarScope</h1>
          
          <div className="bg-space-dark-blue/30 backdrop-blur-sm border border-space-accent/20 rounded-2xl p-6 md:p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">The Mission</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              StellarScope is a space documentary website dedicated to showcasing the wonders of our solar system. Our mission is to make astronomical knowledge accessible to everyone, providing detailed information about each planet with high-quality imagery and facts.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We believe in the power of education and inspiration through the cosmos. By exploring the unique characteristics of each planet, we hope to spark curiosity and a deeper appreciation for the universe we inhabit.
            </p>
          </div>
          
          <div className="bg-space-dark-blue/30 backdrop-blur-sm border border-space-accent/20 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white mb-6">About the Developer</h2>
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="w-40 h-40 rounded-full bg-space-accent/20 animate-pulse-slow flex items-center justify-center text-4xl font-bold text-white">
                SM
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Shohail Mahmud</h3>
                <div className="space-y-3 text-gray-300">
                  <p>
                    <span className="text-space-highlight font-medium">Nationality:</span> Bangladeshi
                  </p>
                  <p>
                    <span className="text-space-highlight font-medium">Education:</span> Student at Faridpur Zilla School
                  </p>
                  <p className="pt-4">
                    Shohail is a young developer with a passion for astronomy and web development. 
                    StellarScope represents his vision to make space knowledge accessible and 
                    engaging for everyone. With a keen interest in technology and the cosmos, 
                    he created this platform to share the wonders of our solar system with the world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
