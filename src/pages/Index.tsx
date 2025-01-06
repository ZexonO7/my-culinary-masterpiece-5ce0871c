import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';
import { Recipe } from '../types/Recipe';
import { Instagram } from 'lucide-react';
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const recipes: Recipe[] = [
    {
      id: 1,
      title: "Paneer Butter Masala",
      description: "A rich North Indian curry with tender paneer cubes in a creamy tomato-based gravy, perfectly spiced for an authentic restaurant-style experience.",
      image: "/lovable-uploads/6a5c80a4-808b-4681-9f22-7daadd81a361.png",
      ingredients: [
        "Fresh paneer cubes",
        "Ripe tomatoes",
        "Heavy cream",
        "Kashmiri red chilies",
        "Cashew nuts",
        "Fresh butter",
        "Kasoori methi (dried fenugreek leaves)",
        "Ginger-garlic paste",
        "Garam masala",
        "Honey",
        "Fresh coriander leaves"
      ],
      instructions: [
        "Blend tomatoes, cashews, and Kashmiri chilies into a smooth paste",
        "Sauté ginger-garlic paste in butter until fragrant",
        "Add tomato paste and cook until oil separates",
        "Mix in spices and simmer with cream",
        "Add paneer cubes and cook gently",
        "Finish with kasoori methi and fresh coriander"
      ],
      cookingTime: "1h30m",
      difficulty: "Hard",
      cuisine: "Indian"
    },
    {
      id: 2,
      title: "Golden Mushroom Pasta",
      description: "An elegant Italian pasta featuring al dente noodles in a saffron-infused sauce with wild mushrooms, creating a visually stunning golden dish.",
      image: "/lovable-uploads/3d41ae60-1aec-466b-980d-16e5f2e55e45.png",
      ingredients: [
        "Artisanal pasta",
        "Mixed wild mushrooms",
        "Premium saffron threads",
        "Fresh heavy cream",
        "Aged Parmigiano-Reggiano",
        "White wine",
        "Shallots",
        "Fresh thyme",
        "Garlic cloves",
        "Extra virgin olive oil",
        "Fresh parsley"
      ],
      instructions: [
        "Bloom saffron in warm water",
        "Cook pasta until perfectly al dente",
        "Sauté mushrooms with shallots and garlic",
        "Deglaze with white wine",
        "Add cream and saffron infusion",
        "Toss pasta in the golden sauce",
        "Finish with Parmigiano-Reggiano and parsley"
      ],
      cookingTime: "45m",
      difficulty: "Easy",
      cuisine: "Italian"
    },
    {
      id: 3,
      title: "Hyderabadi Biryani",
      description: "A royal Indian delicacy of fragrant basmati rice layered with tender meat and aromatic spices, garnished with saffron milk and mint.",
      image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      ingredients: [
        "Aged basmati rice",
        "Premium quality meat (lamb or chicken)",
        "Iranian saffron",
        "Fresh mint and coriander",
        "Ghee",
        "Caramelized onions",
        "Whole spices (cardamom, cinnamon, bay leaves)",
        "Yogurt",
        "Green chilies",
        "Rose water",
        "Kewra water (screwpine essence)"
      ],
      instructions: [
        "Marinate meat with yogurt and spices",
        "Par-boil rice with whole spices",
        "Layer marinated meat and rice",
        "Add saffron milk and aromatics",
        "Seal with dough and slow cook",
        "Rest for 10 minutes before serving",
        "Garnish with fried onions and mint"
      ],
      cookingTime: "2h",
      difficulty: "Hard",
      cuisine: "Indian"
    },
    {
      id: 4,
      title: "Paneer Tikka",
      description: "A classic Indian appetizer of marinated cottage cheese and bell peppers, char-grilled with aromatic spices for a smoky, tangy flavor.",
      image: "/lovable-uploads/464a71d5-7ff4-47cf-a059-752661623ae2.png",
      ingredients: [
        "Fresh paneer blocks",
        "Thick Greek yogurt",
        "Tricolor bell peppers",
        "Red onions",
        "Kashmiri red chili powder",
        "Ginger-garlic paste",
        "Chaat masala",
        "Mustard oil",
        "Gram flour",
        "Fresh lime juice",
        "Mixed tandoori spices"
      ],
      instructions: [
        "Whisk yogurt with spices and gram flour",
        "Cut paneer and vegetables into uniform pieces",
        "Marinate for at least 4 hours",
        "Thread onto skewers alternating ingredients",
        "Grill until charred and smoky",
        "Baste with butter while grilling",
        "Serve with mint chutney and onion rings"
      ],
      cookingTime: "1h",
      difficulty: "Medium",
      cuisine: "Indian"
    },
    {
      id: 5,
      title: "Mushroom Red Pasta",
      description: "A delightful Italian pasta with sautéed mushrooms in a rich tomato sauce, enhanced with fresh herbs and Parmesan cheese.",
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

      {/* About Me Section */}
      <section className="py-8 bg-gradient-to-b from-dark via-primary-dark to-dark">
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary-dark/80 backdrop-blur-lg rounded-lg p-8 shadow-xl border border-primary-DEFAULT/20 animate-fade-up">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Profile Image */}
              <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg ring-4 ring-primary-DEFAULT/30">
                <img
                  src="/lovable-uploads/13f67694-e059-4b0b-88f2-910746049939.png"
                  alt="Advithya Bhardwaj"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6 gold-gradient">
                  About Me
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                  I am 16 and I love to cook and create content. I want to explore the gates of all types of cuisine and share it with the whole world.
                </p>
                
                {/* Instagram Link */}
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

      {/* Decorative Separator */}
      <div className="container max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center gap-4">
          <Separator className="flex-grow bg-primary-DEFAULT/20" />
          <span className="text-primary-DEFAULT/60 font-playfair italic">Recipes</span>
          <Separator className="flex-grow bg-primary-DEFAULT/20" />
        </div>
      </div>

      {/* Recipe Grid */}
      <section className="container py-8 animate-[fadeIn_0.6s_ease-in]">
        <h2 
          ref={titleRef}
          className="font-playfair text-3xl md:text-4xl font-bold mb-12 text-center transition-all duration-1000"
          style={{
            opacity: 0,
            transform: 'translateY(20px)',
            animation: 'slideUp 0.8s ease-out forwards',
            textShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}
        >
          Finger Licking <span className="gold-gradient relative inline-block">
            Recipes
            <span 
              className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#FFD700] to-[#FFC000]"
              style={{
                transform: 'scaleX(0)',
                animation: 'expandWidth 0.6s ease-out 0.8s forwards'
              }}
            />
          </span>
        </h2>

        {/* Add these keyframes to your existing styles */}
        <style>
          {`
            @keyframes slideUp {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            @keyframes expandWidth {
              from {
                transform: scaleX(0);
              }
              to {
                transform: scaleX(1);
              }
            }
          `}
        </style>

        {/* Indian Recipes */}
        <div className="mb-12 animate-[fadeIn_0.4s_ease-in]">
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
        <div className="animate-[fadeIn_0.4s_ease-in]">
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
