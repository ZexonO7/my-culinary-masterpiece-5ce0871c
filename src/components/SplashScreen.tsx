import React, { useEffect, useState } from 'react';

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 1000); // Wait for transition to complete before removing from DOM
    }, 2000); // Show splash screen for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-dark transition-all duration-1000 ${
        isTransitioning ? 'opacity-0 translate-y-[-20px]' : 'opacity-100 translate-y-0'
      }`}
    >
      <div className="text-center animate-fade-up">
        <h1 className="font-playfair text-6xl font-bold mb-4 gold-gradient">
          Culinary Masterpieces
        </h1>
        <h2 className="font-playfair text-3xl text-primary mb-6">
          By Advithya Bhardwaj
        </h2>
        <div className="flex items-center justify-center space-x-2">
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;