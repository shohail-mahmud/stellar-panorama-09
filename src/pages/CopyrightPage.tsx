
import React from 'react';
import { Link } from 'react-router-dom';
import { Info, Instagram, Copyright } from 'lucide-react';

const CopyrightPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto bg-space-dark-blue/40 backdrop-blur-md rounded-xl border border-space-accent/20 p-6 md:p-8 animate-fade-in">
        <div className="flex items-center gap-3 mb-6">
          <Copyright className="h-6 w-6 text-space-highlight" />
          <h1 className="text-3xl md:text-4xl font-bold text-white">Copyright and Image Credits</h1>
        </div>
        
        <p className="text-gray-300 mb-8">
          All the images used on this website are sourced from Wikimedia Commons and Wikipedia. 
          These images are utilized solely for educational purposes and are not intended for any 
          commercial use. The images are provided with proper credit to the original creators.
        </p>
        
        <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 border-b border-space-accent/20 pb-2">
          Image Credits
        </h2>
        
        <div className="space-y-6">
          <div className="border-b border-space-accent/10 pb-4">
            <h3 className="text-lg font-medium text-space-highlight mb-2">1. Earth Image</h3>
            <p className="text-gray-300">
              <a href="https://en.m.wikipedia.org/wiki/File:The_Earth_seen_from_Apollo_17.jpg" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-space-accent hover:text-space-highlight underline transition-colors">
                The Earth seen from Apollo 17
              </a>
            </p>
            <p className="text-gray-400 mt-1">Image by: Wikimedia Commons</p>
          </div>
          
          <div className="border-b border-space-accent/10 pb-4">
            <h3 className="text-lg font-medium text-space-highlight mb-2">2. Moon Image</h3>
            <p className="text-gray-300">
              <a href="https://en.wikipedia.org/wiki/File:FullMoon2010.jpg" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-space-accent hover:text-space-highlight underline transition-colors">
                Full Moon 2010
              </a>
            </p>
            <p className="text-gray-400 mt-1">Image by: Wikimedia Commons / Attribution: Gregory H. Revera</p>
          </div>
          
          <div className="border-b border-space-accent/10 pb-4">
            <h3 className="text-lg font-medium text-space-highlight mb-2">3. Mercury Image</h3>
            <p className="text-gray-300">
              <a href="https://en.m.wikipedia.org/wiki/File:Mercury_in_true_color.jpg" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-space-accent hover:text-space-highlight underline transition-colors">
                Mercury in True Color
              </a> 
              (<a href="https://photojournal.jpl.nasa.gov/catalog/PIA11364" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-space-accent hover:text-space-highlight underline transition-colors">
                Source
              </a>)
            </p>
            <p className="text-gray-400 mt-1">Image by: Wikimedia Commons</p>
            <p className="text-gray-400 mt-1">Credit: NASA/Johns Hopkins University Applied Physics Laboratory/Arizona State University/Carnegie Institution of Washington</p>
          </div>
          
          <div className="border-b border-space-accent/10 pb-4">
            <h3 className="text-lg font-medium text-space-highlight mb-2">4. Venus Image</h3>
            <p className="text-gray-400 mt-1">Image by: Wikimedia Commons</p>
          </div>
          
          <div className="border-b border-space-accent/10 pb-4">
            <h3 className="text-lg font-medium text-space-highlight mb-2">5. Mars Image</h3>
            <p className="text-gray-400 mt-1">Image by: Kevin Gill/Wikipedia, captured by the Emirates Mars Mission</p>
          </div>
          
          <div className="border-b border-space-accent/10 pb-4">
            <h3 className="text-lg font-medium text-space-highlight mb-2">6. Saturn Image</h3>
            <p className="text-gray-300">
              <a href="https://en.m.wikipedia.org/wiki/File:Saturn_during_Equinox.jpg" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-space-accent hover:text-space-highlight underline transition-colors">
                Saturn during Equinox
              </a>
            </p>
            <p className="text-gray-400 mt-1">Image by: Wikimedia Commons</p>
          </div>
          
          <div className="border-b border-space-accent/10 pb-4">
            <h3 className="text-lg font-medium text-space-highlight mb-2">7. Uranus Image</h3>
            <p className="text-gray-300">
              <a href="https://en.m.wikipedia.org/wiki/File:Uranus_Voyager2_color_calibrated.png" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-space-accent hover:text-space-highlight underline transition-colors">
                Uranus Voyager2 Color Calibrated
              </a>
            </p>
            <p className="text-gray-400 mt-1">Image by: Wikimedia Commons</p>
          </div>
          
          <div className="border-b border-space-accent/10 pb-4">
            <h3 className="text-lg font-medium text-space-highlight mb-2">8. Neptune Image</h3>
            <p className="text-gray-300">
              <a href="https://en.m.wikipedia.org/wiki/File:Neptune_Voyager2_color_calibrated.png" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-space-accent hover:text-space-highlight underline transition-colors">
                Neptune Voyager2 Color Calibrated
              </a>
            </p>
            <p className="text-gray-400 mt-1">Image by: Wikimedia Commons</p>
          </div>
          
          <div className="border-b border-space-accent/10 pb-4">
            <h3 className="text-lg font-medium text-space-highlight mb-2">9. Sun Image</h3>
            <p className="text-gray-400 mt-1">Image by: Wikimedia Commons</p>
          </div>
          
          <div className="border-b border-space-accent/10 pb-4">
            <h3 className="text-lg font-medium text-space-highlight mb-2">10. Black Hole Image</h3>
            <p className="text-gray-400 mt-1">Image by: Wikimedia Commons</p>
          </div>
          
          <div className="border-b border-space-accent/10 pb-4">
            <h3 className="text-lg font-medium text-space-highlight mb-2">11. Jupiter</h3>
            <p className="text-gray-400 mt-1">Image by: Wikipedia Commons</p>
          </div>
        </div>
        
        <h2 className="text-xl md:text-2xl font-semibold text-white mt-10 mb-4 border-b border-space-accent/20 pb-2">
          License Information
        </h2>
        <p className="text-gray-300 mb-6">
          These images are licensed under the <a 
            href="https://creativecommons.org/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-space-accent hover:text-space-highlight underline transition-colors">
            Creative Commons License
          </a>, allowing free use with appropriate credit given to the original creators. 
          Please note that the images are used for educational purposes only and are not 
          intended for any commercial or profit-making activities.
        </p>
        
        <h2 className="text-xl md:text-2xl font-semibold text-white mt-10 mb-4 border-b border-space-accent/20 pb-2">
          Contact Information for Queries
        </h2>
        <p className="text-gray-300 mb-6 flex items-start gap-2">
          <Instagram className="h-5 w-5 text-space-highlight mt-0.5 flex-shrink-0" />
          <span>
            If there are any issues or concerns about the ownership or use of the images, 
            please feel free to contact me at <a 
              href="https://www.instagram.com/shohailmahmud09" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-space-accent hover:text-space-highlight underline transition-colors">
              Instagram
            </a>. I will be happy to address any concerns or make necessary corrections.
          </span>
        </p>
        
        <h2 className="text-xl md:text-2xl font-semibold text-white mt-10 mb-4 border-b border-space-accent/20 pb-2">
          Acknowledgments
        </h2>
        <p className="text-gray-300 mb-8">
          The images used on this website are sourced from trusted platforms like Wikipedia 
          and Wikimedia Commons, which provide freely available resources for educational and 
          non-commercial purposes. I acknowledge and appreciate the work of the original creators.
        </p>
        
        <div className="mt-10 text-center">
          <Link 
            to="/" 
            className="inline-flex items-center justify-center px-6 py-3 bg-space-accent text-white rounded-lg hover:bg-space-accent/90 transition-all"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CopyrightPage;
