import React, { useEffect, useState } from 'react';

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 800);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary-dark via-dark to-primary/20 transition-all duration-800 ${
        isTransitioning ? 'opacity-0 translate-y-[-20px]' : 'opacity-100 translate-y-0'
      }`}
    >
      <div className="text-center relative">
        {/* Decorative circles */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gold/10 rounded-full blur-xl animate-pulse" />
        
        {/* Main content */}
        <div className="relative z-10 backdrop-blur-sm bg-dark/30 p-8 rounded-2xl border border-primary/20">
          <h1 className="font-playfair text-6xl font-bold mb-4 animate-fade-up">
            <span className="inline-block hover:scale-105 transition-transform duration-300">
              <span className="gold-gradient">Culinary</span>
            </span>{' '}
            <span className="inline-block hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.1s' }}>
              <span className="gold-gradient">Masterpieces</span>
            </span>
          </h1>
          
          <h2 className="font-playfair text-3xl text-primary mb-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            By Advithya Bhardwaj
          </h2>
          
          {/* Animated loading indicators */}
          <div className="flex items-center justify-center space-x-3">
            <div className="flex space-x-1">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-3 h-3 bg-primary rounded-full animate-bounce"
                  style={{
                    animationDelay: `${i * 0.1}s`,
                    boxShadow: '0 0 10px rgba(155, 135, 245, 0.5)'
                  }}
                />
              ))}
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-1 -bottom-1 -left-1 -right-1 border border-primary/20 rounded-2xl animate-pulse" 
               style={{ animationDuration: '3s' }} />
          <div className="absolute -top-2 -bottom-2 -left-2 -right-2 border border-gold/20 rounded-2xl animate-pulse" 
               style={{ animationDuration: '4s' }} />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;