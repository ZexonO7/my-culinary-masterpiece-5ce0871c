import React, { useEffect, useRef } from 'react';
import RecipeCard from '../components/RecipeCard';
import { Recipe } from '../types/Recipe';

const Index = () => {
  const recipes: Recipe[] = [
    {
      id: 1,
      title: "Paneer Butter Masala",
      description: "A luxurious North Indian curry featuring tender paneer cubes swimming in a rich, creamy tomato-based gravy. This restaurant-style dish combines the perfect balance of aromatic spices with a silky smooth sauce, creating a vegetarian delicacy that's both comforting and indulgent.",
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
      description: "An exquisite Italian pasta dish where al dente noodles meet a luxurious sauce infused with premium saffron and wild mushrooms. The combination creates a golden-hued masterpiece that's both visually stunning and deeply satisfying.",
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
      description: "A majestic Indian delicacy featuring fragrant basmati rice layered with tender, marinated meat and a symphony of whole spices. This royal dish combines the art of perfect rice cooking with the science of spice blending, resulting in an aromatic masterpiece that's garnished with saffron milk, fried onions, and fresh mint.",
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
      description: "A sophisticated Indian appetizer featuring marinated cottage cheese cubes and colorful bell peppers, char-grilled to perfection. Each piece is infused with a aromatic blend of yogurt and spices, creating a smoky, tangy flavor profile that's both elegant and satisfying.",
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