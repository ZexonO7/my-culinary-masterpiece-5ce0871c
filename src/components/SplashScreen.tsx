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
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden transition-all duration-800 ${
        isTransitioning ? 'opacity-0 translate-y-[-20px]' : 'opacity-100 translate-y-0'
      }`}
      style={{
        background: 'radial-gradient(circle at center, #1A1F2C 0%, #222222 100%)'
      }}
    >
      <div className="relative text-center p-8">
        {/* Background animated circles */}
        <div className="absolute inset-0 -z-10">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full mix-blend-screen animate-pulse"
              style={{
                background: i === 0 ? '#9b87f5' : i === 1 ? '#FFD700' : '#1A1F2C',
                width: `${(i + 1) * 200}px`,
                height: `${(i + 1) * 200}px`,
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                opacity: 0.1,
                animationDuration: `${3 + i}s`,
                filter: 'blur(60px)'
              }}
            />
          ))}
        </div>

        {/* Main content */}
        <h1 className="font-playfair text-7xl font-bold mb-6 relative">
          <span className="block gold-gradient animate-fade-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Culinary
          </span>
          <span className="block gold-gradient animate-fade-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            Masterpieces
          </span>
        </h1>
        
        <h2 className="font-playfair text-3xl text-primary mb-8 animate-fade-up opacity-0" 
            style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          By Advithya Bhardwaj
        </h2>

        {/* Loading animation */}
        <div className="flex items-center justify-center space-x-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="relative"
            >
              <div
                className="w-3 h-3 bg-primary rounded-full animate-bounce"
                style={{ 
                  animationDelay: `${i * 0.15}s`,
                  boxShadow: '0 0 20px rgba(155, 135, 245, 0.3)'
                }}
              />
              <div
                className="absolute inset-0 bg-primary rounded-full animate-ping"
                style={{ 
                  animationDelay: `${i * 0.15}s`,
                  opacity: 0.2
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;