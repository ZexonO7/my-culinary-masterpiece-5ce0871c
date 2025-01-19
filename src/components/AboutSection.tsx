import React from 'react';
import { Instagram } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-8 bg-gradient-to-b from-dark via-primary-dark to-dark">
      <div className="max-w-4xl mx-auto">
        <div className="bg-primary-dark/80 backdrop-blur-lg rounded-lg p-8 shadow-xl border border-primary-DEFAULT/20 animate-fade-up">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg ring-4 ring-primary-DEFAULT/30">
              <img
                src="/lovable-uploads/13f67694-e059-4b0b-88f2-910746049939.png"
                alt="Advithya Bhardwaj"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>

            <div className="flex-1 text-center md:text-left">
              <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6 gold-gradient">
                About Me
              </h1>
              <div className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed space-y-4">
                <p>
                  I am Advithya Bhardwaj, 16 years old and I love to cook and create content. I want to explore the gates of all types of cuisine and share it with the whole world.
                </p>
                <p>
                  My culinary journey began in my family's kitchen, where I discovered my passion for cooking when I was 12. I'm particularly fascinated by the fusion of traditional Indian flavors with modern cooking techniques, and I love experimenting with all type of cuisine.
                </p>
              </div>
              
              <a
                href="https://instagram.com/your_instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full hover:opacity-90 transition-all hover:scale-105 duration-300"
              >
                <Instagram className="w-5 h-5" />
                Follow me on Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;