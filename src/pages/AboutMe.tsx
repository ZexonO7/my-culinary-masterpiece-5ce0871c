import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

const AboutMe = () => {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <Link 
          to="/" 
          className="inline-flex items-center text-primary-DEFAULT hover:text-primary-dark transition-colors mb-8"
        >
          ← Back to Recipes
        </Link>

        <div className="bg-primary-dark rounded-lg p-8 shadow-xl">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Profile Image */}
            <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Advithya Bhardwaj"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4 gold-gradient">
                About Me
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
                I am 16 and I love to cook and create content. I want to explore the gates of all types of cuisine and share it with the whole world.
              </p>
              
              {/* Instagram Link */}
              <a
                href="https://instagram.com/your_instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
              >
                <Instagram className="w-5 h-5" />
                Follow me on Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;