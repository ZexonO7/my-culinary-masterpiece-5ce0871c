import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center animate-[fadeIn_0.5s_ease-in]">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(26, 31, 44, 0.7)"
        }}
      />
      <div className="container relative z-10 text-center">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 gold-gradient animate-fade-up">
          Culinary Masterpieces
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Where Passion Meets Flavor in Our Gourmet Challenge
        </p>
        <p className="font-playfair text-2xl md:text-3xl italic text-white animate-fade-up mb-8" style={{ animationDelay: '0.4s' }}>
          By Advithya Bhardwaj
        </p>
      </div>
    </section>
  );
};

export default HeroSection;