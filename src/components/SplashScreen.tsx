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
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-800 ${
        isTransitioning ? 'opacity-0 translate-y-[-20px]' : 'opacity-100 translate-y-0'
      }`}
      style={{
        background: 'linear-gradient(135deg, #1A1F2C 0%, #222222 100%)'
      }}
    >
      <div className="text-center p-8">
        <div className="mb-8">
          <h1 className="font-playfair text-6xl font-bold mb-4 overflow-hidden">
            <span 
              className="block gold-gradient animate-fade-up opacity-0" 
              style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
            >
              Culinary Masterpieces
            </span>
          </h1>
          
          <h2 
            className="font-playfair text-2xl text-primary animate-fade-up opacity-0" 
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            By Advithya Bhardwaj
          </h2>
        </div>

        <div className="flex justify-center space-x-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-primary rounded-full"
              style={{ 
                animation: `bounce 1s infinite ${i * 0.2}s`,
                boxShadow: '0 0 10px rgba(155, 135, 245, 0.2)'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;