import React from 'react';
import RecipeCard from '../components/RecipeCard';
import { Recipe } from '../types/Recipe';

const Index = () => {
  // Sample recipe data
  const recipes: Recipe[] = [
    {
      id: 1,
      title: "Purple Velvet Cake",
      description: "A stunning twist on the classic red velvet, perfect for special occasions.",
      image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      ingredients: ["Cake flour", "Cocoa powder", "Purple food coloring", "Buttermilk"],
      instructions: ["Preheat oven", "Mix dry ingredients", "Add wet ingredients", "Bake"],
      cookingTime: "1h 30m",
      difficulty: "Medium"
    },
    {
      id: 2,
      title: "Golden Mushroom Risotto",
      description: "Creamy risotto with wild mushrooms and a touch of saffron.",
      image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      ingredients: ["Arborio rice", "Mushrooms", "Saffron", "White wine"],
      instructions: ["Sauté mushrooms", "Toast rice", "Add wine", "Gradually add stock"],
      cookingTime: "45m",
      difficulty: "Hard"
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
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Discover award-winning recipes from our cooking contests
          </p>
        </div>
      </section>

      {/* Recipe Grid */}
      <section className="container py-16">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-12 text-center">
          Featured <span className="gold-gradient">Recipes</span>
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