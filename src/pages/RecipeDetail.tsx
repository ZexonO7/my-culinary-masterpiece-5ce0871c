import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Recipe } from '../types/Recipe';
import { ChefHat, Clock, ArrowLeft, Utensils } from 'lucide-react';

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
    },
    {
      id: 5,
      title: "Mushroom Red Pasta",
      description: "A luxurious Italian pasta dish featuring sautéed mushrooms in a rich, aromatic tomato sauce infused with fresh herbs and garlic, topped with freshly grated Parmesan cheese.",
      image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      ingredients: [
        "Fettuccine pasta",
        "Mixed mushrooms (portobello, cremini, shiitake)",
        "San Marzano tomatoes",
        "Fresh garlic cloves",
        "Fresh basil and oregano",
        "Extra virgin olive oil",
        "Red wine",
        "Parmesan cheese",
        "Salt and black pepper"
      ],
      instructions: [
        "Boil pasta in salted water until al dente",
        "Sauté mixed mushrooms with garlic in olive oil",
        "Add red wine and reduce",
        "Blend San Marzano tomatoes for the sauce",
        "Simmer sauce with fresh herbs",
        "Combine pasta with sauce and mushrooms",
        "Serve with freshly grated Parmesan and basil"
      ],
      cookingTime: "45m",
      difficulty: "Medium",
      cuisine: "Italian"
    }
  ];

  const recipe = recipes.find(r => r.id === Number(id));

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-playfair text-primary-DEFAULT">Recipe not found</h2>
          <Link 
            to="/" 
            className="inline-flex items-center text-gold hover:text-primary-DEFAULT transition-colors"
          >
            <ArrowLeft className="mr-2" />
            Back to Recipes
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen animate-fade-in bg-primary-dark">
      <div className="container py-12 px-4 md:px-8">
        <Link 
          to="/" 
          className="inline-flex items-center text-primary-DEFAULT hover:text-gold transition-colors mb-12"
        >
          <ArrowLeft className="mr-2" />
          Back to Recipes
        </Link>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative overflow-hidden rounded-2xl shadow-xl hover-scale">
              <img 
                src={recipe.image} 
                alt={recipe.title} 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"/>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="fade-in" style={{ animationDelay: '0.3s' }}>
              <h1 className="font-playfair text-4xl md:text-5xl font-bold gold-gradient mb-4">
                {recipe.title}
              </h1>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {recipe.description}
              </p>
              
              <div className="flex gap-6 mb-8">
                <div className="flex items-center gap-2 text-primary-DEFAULT">
                  <Clock size={24} />
                  <span className="text-lg">{recipe.cookingTime}</span>
                </div>
                <div className="flex items-center gap-2 text-primary-DEFAULT">
                  <ChefHat size={24} />
                  <span className="text-lg">{recipe.difficulty}</span>
                </div>
                <div className="flex items-center gap-2 text-primary-DEFAULT">
                  <Utensils size={24} />
                  <span className="text-lg">{recipe.cuisine}</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6 fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="bg-primary-dark/50 p-6 rounded-xl border border-primary-DEFAULT/20">
                <h2 className="font-playfair text-2xl font-bold text-primary-DEFAULT mb-4">Ingredients</h2>
                <ul className="space-y-3">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="text-gray-300 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-gold"/>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="space-y-6 fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="bg-primary-dark/50 p-6 rounded-xl border border-primary-DEFAULT/20">
                <h2 className="font-playfair text-2xl font-bold text-primary-DEFAULT mb-4">Instructions</h2>
                <ol className="space-y-4">
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index} className="text-gray-300 flex gap-4">
                      <span className="font-playfair text-gold font-bold">{index + 1}.</span>
                      {instruction}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;