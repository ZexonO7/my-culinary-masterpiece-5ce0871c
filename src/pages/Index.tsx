import React, { useEffect, useRef } from 'react';
import RecipeCard from '../components/RecipeCard';
import { Recipe } from '../types/Recipe';

const Index = () => {
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

  const indianRecipes = recipes.filter(recipe => recipe.cuisine === "Indian");
  const italianRecipes = recipes.filter(recipe => recipe.cuisine === "Italian");
  
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-scale-in', 'opacity-100');
            entry.target.classList.remove('opacity-0', 'scale-0');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center animate-fade-in">
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
          <p className="font-playfair text-2xl md:text-3xl italic text-white animate-fade-up" style={{ animationDelay: '0.4s' }}>
            By Advithya Bhardwaj
          </p>
        </div>
      </section>

      {/* Recipe Grid */}
      <section className="container py-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <h2 
          ref={titleRef}
          className="font-playfair text-3xl md:text-4xl font-bold mb-12 text-center transform transition-all duration-700 opacity-0 scale-0"
        >
          Finger Licking <span className="gold-gradient">Recipes</span>
        </h2>

        {/* Indian Recipes */}
        <div className="mb-12 animate-fade-up" style={{ animationDelay: '0.8s' }}>
          <h3 className="font-playfair text-2xl font-bold mb-6 text-primary-DEFAULT">
            Indian Cuisine
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {indianRecipes.map((recipe, index) => (
              <div key={recipe.id} className="animate-fade-up" style={{ animationDelay: `${0.2 * (index + 1)}s` }}>
                <RecipeCard recipe={recipe} />
              </div>
            ))}
          </div>
        </div>

        {/* Italian Recipes */}
        <div className="animate-fade-up" style={{ animationDelay: '1s' }}>
          <h3 className="font-playfair text-2xl font-bold mb-6 text-primary-DEFAULT">
            Italian Cuisine
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {italianRecipes.map((recipe, index) => (
              <div key={recipe.id} className="animate-fade-up" style={{ animationDelay: `${0.2 * (index + 1)}s` }}>
                <RecipeCard recipe={recipe} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;