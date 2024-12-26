import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Recipe } from '../types/Recipe';
import { ChefHat, Clock, ArrowLeft } from 'lucide-react';

const RecipeDetail = () => {
  const { id } = useParams();
  
  // For demo purposes, we'll use the same recipes data
  // In a real app, this would come from an API or context
  const recipes: Recipe[] = [
    {
      id: 1,
      title: "Paneer Butter Masala",
      description: "A rich and creamy Indian curry with soft paneer cubes in a tomato-based gravy.",
      image: "/lovable-uploads/6a5c80a4-808b-4681-9f22-7daadd81a361.png",
      ingredients: ["Paneer", "Tomatoes", "Cream", "Butter", "Spices"],
      instructions: ["Prepare the gravy", "Cook paneer", "Add spices", "Simmer"],
      cookingTime: "1h30m",
      difficulty: "Hard",
      cuisine: "Indian"
    },
    {
      id: 2,
      title: "Golden Mushroom Pasta",
      description: "Creamy pasta with sautéed mushrooms and a touch of saffron.",
      image: "/lovable-uploads/3d41ae60-1aec-466b-980d-16e5f2e55e45.png",
      ingredients: ["Pasta", "Mushrooms", "Saffron", "Cream"],
      instructions: ["Cook pasta", "Sauté mushrooms", "Make sauce", "Combine"],
      cookingTime: "45m",
      difficulty: "Easy",
      cuisine: "Italian"
    },
    {
      id: 3,
      title: "Hyderabadi Biryani",
      description: "Aromatic rice dish layered with tender meat, herbs, and authentic Indian spices.",
      image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      ingredients: ["Basmati Rice", "Meat", "Saffron", "Onions", "Indian Spices"],
      instructions: ["Prepare rice", "Cook meat", "Layer ingredients", "Dum cooking"],
      cookingTime: "2h",
      difficulty: "Hard",
      cuisine: "Indian"
    },
    {
      id: 4,
      title: "Paneer Tikka",
      description: "Grilled cottage cheese cubes marinated in spiced yogurt with aromatic spices.",
      image: "/lovable-uploads/464a71d5-7ff4-47cf-a059-752661623ae2.png",
      ingredients: ["Paneer", "Yogurt", "Bell Peppers", "Indian Spices"],
      instructions: ["Marinate paneer", "Thread on skewers", "Grill", "Garnish"],
      cookingTime: "1h",
      difficulty: "Medium",
      cuisine: "Indian"
    }
  ];

  const recipe = recipes.find(r => r.id === Number(id));

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className="min-h-screen animate-fade-in">
      <div className="container py-8">
        <Link 
          to="/" 
          className="inline-flex items-center text-primary-DEFAULT hover:text-gold transition-colors mb-8"
        >
          <ArrowLeft className="mr-2" />
          Back to Recipes
        </Link>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <img 
              src={recipe.image} 
              alt={recipe.title} 
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>
          
          <div className="space-y-6">
            <h1 className="font-playfair text-4xl font-bold gold-gradient animate-fade-up" style={{ animationDelay: '0.3s' }}>
              {recipe.title}
            </h1>
            
            <p className="text-gray-300 text-lg animate-fade-up" style={{ animationDelay: '0.4s' }}>
              {recipe.description}
            </p>
            
            <div className="flex gap-4 animate-fade-up" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-2 text-primary-DEFAULT">
                <Clock size={20} />
                <span>{recipe.cookingTime}</span>
              </div>
              <div className="flex items-center gap-2 text-primary-DEFAULT">
                <ChefHat size={20} />
                <span>{recipe.difficulty}</span>
              </div>
            </div>
            
            <div className="space-y-4 animate-fade-up" style={{ animationDelay: '0.6s' }}>
              <h2 className="font-playfair text-2xl font-bold text-primary-DEFAULT">Ingredients</h2>
              <ul className="list-disc list-inside space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-gray-300">{ingredient}</li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4 animate-fade-up" style={{ animationDelay: '0.7s' }}>
              <h2 className="font-playfair text-2xl font-bold text-primary-DEFAULT">Instructions</h2>
              <ol className="list-decimal list-inside space-y-2">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="text-gray-300">{instruction}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
