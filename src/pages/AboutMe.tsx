
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Clock, Award, Utensils } from 'lucide-react';

const AboutMe = () => {
  return <div className="min-h-screen py-16 px-4 bg-gradient-to-b from-dark via-primary-dark to-dark">
      <div className="max-w-4xl mx-auto">
        <nav className="flex justify-between items-center mb-12">
          <Link to="/" className="text-primary-DEFAULT hover:text-primary-light transition-colors">
            ← Back to Home
          </Link>
          <Link to="/#recipes" className="text-primary-DEFAULT hover:text-primary-light transition-colors">
            View Recipes →
          </Link>
        </nav>

        <div className="bg-primary-dark/80 backdrop-blur-lg rounded-lg p-8 shadow-xl border border-primary-DEFAULT/20 animate-fade-up">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg ring-4 ring-primary-DEFAULT/30">
                <img src="/lovable-uploads/95941a6c-9cde-482d-937f-245ec128763e.jpg" alt="Advithya Bhardwaj" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
              </div>

              <div className="flex-1 text-center md:text-left">
                <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6 gold-gradient">
                  About Me
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                  I am Advithya Bhardwaj, 16 years old and I love to cook and create content. I want to explore the gates of all types of cuisine and share it with the whole world.
                </p>
                
                <a href="https://www.instagram.com/the.cooking.journey/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full hover:opacity-90 transition-all hover:scale-105 duration-300">
                  <Instagram className="w-5 h-5" />
                  Follow me on Instagram
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-primary-dark/50 p-6 rounded-lg border border-primary-DEFAULT/10 hover:border-primary-DEFAULT/30 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="text-primary-DEFAULT w-6 h-6" />
                  <h3 className="text-xl font-semibold">My Journey</h3>
                </div>
                <p className="text-gray-300">
                  My culinary journey began in my family's kitchen, where I discovered my passion for cooking when I was 12. What started as a hobby quickly turned into a serious passion.
                </p>
              </div>
              
              <div className="bg-primary-dark/50 p-6 rounded-lg border border-primary-DEFAULT/10 hover:border-primary-DEFAULT/30 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <Utensils className="text-primary-DEFAULT w-6 h-6" />
                  <h3 className="text-xl font-semibold">Cooking Style</h3>
                </div>
                <p className="text-gray-300">
                  I'm particularly fascinated by the fusion of traditional Indian flavors with modern cooking techniques. I love experimenting with different cuisines and creating unique flavor combinations.
                </p>
              </div>
              
              <div className="bg-primary-dark/50 p-6 rounded-lg border border-primary-DEFAULT/10 hover:border-primary-DEFAULT/30 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="text-primary-DEFAULT w-6 h-6" />
                  <h3 className="text-xl font-semibold">My Mission</h3>
                </div>
                <p className="text-gray-300">My goal is to share my love for cooking and become one of the best Chefs in the World, I'm also an Aspiring Restauranteur and Content Creator.  </p>
              </div>
            </div>
            
            <div className="mt-10 text-gray-300">
              <h2 className="font-playfair text-3xl font-bold mb-6 gold-gradient text-center md:text-left">My Creative Journey</h2>
              <div className="bg-primary-dark/30 p-8 rounded-lg border border-primary-DEFAULT/10 space-y-6">
                <p className="leading-relaxed text-lg">
                  Hey, I'm Advithya Bhardwaj.
                  I'm a content creator, chef in the making, and a tech geek who's always looking for the next big idea. My days revolve around mixing creativity with practicality — whether I'm in the kitchen cooking up new dishes, behind the camera editing videos, or figuring out how to make tech work for my next big project.
                </p>
                <p className="leading-relaxed text-lg">
                  I've been diving deep into content creation for a while, experimenting with everything from food videos that make you hungry to editing tutorials that actually help people improve their skills. It's all about turning raw ideas into something worth sharing, with a bit of personality sprinkled in.
                </p>
                <p className="leading-relaxed text-lg">
                  I also love sharing what I've learned along the way — whether it's video editing tricks, social media tips, or just random kitchen hacks. There's nothing like helping someone unlock their own creativity and get excited about what they can create.
                </p>
                <p className="leading-relaxed text-lg">
                  I keep things real. No fake "aesthetic" here — just passion, curiosity, and a dash of chaos. If you're into fresh perspectives, new challenges, and creativity with a real edge, you're in the right place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};

export default AboutMe;
