import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import RecipeFilters, { FilterType } from '../components/RecipeFilters';
import RecipeGrid from '../components/RecipeGrid';
import { Recipe } from '../types/Recipe';

const Index = () => {
  const [currentFilter, setCurrentFilter] = useState<FilterType>('all');

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
      cuisine: "Indian",
      category: "vegetarian"
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
      cuisine: "Italian",
      category: "vegetarian"
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
      cuisine: "Indian",
      category: "all"
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
      cuisine: "Indian",
      category: "vegetarian"
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
      cuisine: "Italian",
      category: "vegetarian"
    }
  ];

  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-playfair font-bold text-center mb-8">
          <span className="text-white">Finger Licking </span>
          <span className="gold-gradient underline">Recipes</span>
        </h1>
      </div>
      <RecipeFilters currentFilter={currentFilter} onFilterChange={setCurrentFilter} />
      <RecipeGrid recipes={recipes} currentFilter={currentFilter} />
    </div>
  );
};

export default Index;