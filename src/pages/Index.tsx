import React from 'react';
import RecipeCard from '../components/RecipeCard';
import { Recipe } from '../types/Recipe';

const Index = () => {
  // Sample recipe data
  const recipes: Recipe[] = [
    {
      id: 1,
      title: "Paneer Butter Masala",
      description: "A rich and creamy Indian curry with soft paneer cubes in a tomato-based gravy.",
      image: "/lovable-uploads/6a5c80a4-808b-4681-9f22-7daadd81a361.png",
      ingredients: ["Paneer", "Tomatoes", "Cream", "Butter", "Spices"],
      instructions: ["Prepare the gravy", "Cook paneer", "Add spices", "Simmer"],
      cookingTime: "45m",
      difficulty: "Hard"
    },
    {
      id: 2,
      title: "Golden Mushroom Pasta",
      description: "Creamy pasta with sautéed mushrooms and a touch of saffron.",
      image: "/lovable-uploads/3d41ae60-1aec-466b-980d-16e5f2e55e45.png",
      ingredients: ["Pasta", "Mushrooms", "Saffron", "Cream"],
      instructions: ["Cook pasta", "Sauté mushrooms", "Make sauce", "Combine"],
      cookingTime: "30m",
      difficulty: "Easy"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
            backgroundBlendMode: "overlay",
            backgroundColor: "rgba(26, 31, 44, 0.7)"
          }}
        />
        <div className="container relative z-10 text-center">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 gold-gradient">
            Culinary Masterpieces
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-4">
            Where Passion Meets Flavor in Our Gourmet Challenge
          </p>
          <p className="font-playfair text-2xl md:text-3xl italic text-white animate-fade-up">
            By Advithya Bhardwaj
          </p>
        </div>
      </section>

      {/* Recipe Grid */}
      <section className="container py-16">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-12 text-center">
          Finger Licking <span className="gold-gradient">Recipes</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;