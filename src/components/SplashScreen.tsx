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
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-dark to-primary-dark transition-all duration-800 ${
        isTransitioning ? 'opacity-0 translate-y-[-20px]' : 'opacity-100 translate-y-0'
      }`}
    >
      <div className="text-center">
        <h1 className="font-playfair text-6xl font-bold mb-4">
          <span className="gold-gradient animate-fade-up">Culinary Masterpieces</span>
        </h1>
        <h2 className="font-playfair text-3xl text-primary mb-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          By Advithya Bhardwaj
        </h2>
        <div className="flex items-center justify-center space-x-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-3 h-3 bg-primary rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;