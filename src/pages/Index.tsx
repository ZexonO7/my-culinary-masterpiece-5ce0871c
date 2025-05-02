
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
      image: "/lovable-uploads/bea5f6f6-0e03-4e8c-9c74-b42f1d9c6dc0.png",
      ingredients: [
        "Tomatos",
        "Cottage cheese (Paneer)",
        "Onions",
        "Ginger Garlic Paste",
        "Kawra (optional)",
        "Garam Masala",
        "Dagi Mirch",
        "Cumin seed powder",
        "Kasturi Mathi",
        "Long",
        "Elichi",
        "Bay leaf",
        "Kashmiri Red chilli",
        "Butter",
        "Curd",
        "Cream",
        "Cashews",
        "Honey/Sugar",
        "Chaat Masala",
        "Ghee (Clarified Butter)",
        "Salt"
      ],
      instructions: [
        "Heat up some ghee in a kadhi/Pan add your whole spics- Elichi, bay Leaf, Long and add your Kashmiri red mirch",
        "After the mirch starts to burn, add some chopped onions and sauté for 3-4 mins until they start to sweat then add your ginger-garlic paste cook for a bit and add your curd mixture of spics(Cumin seed powder, Garam Masala, Dagi mirch)",
        "Sauté and add your scooped and chopped tomato's and cashews with more of the same spics blend with salt",
        "Add water till the tomato's are mostly submerged, let them cook and then take out the whole spices, blend with some water and not more than 2-4 drops kawra for the scent",
        "Strain the fine gravy and add it back in the pan with some finely chopped tomato's and onions sautéed in the same spice blend and Butter",
        "While the gravy is cooking chop your cottage cheese into cubes and put them in some warm salted water to get tender for 4-5mins",
        "Then add your Cottage Cheese with some Kasturi methi, Honey/Suger and Chaat Masala",
        "Add some spices and cream on top as a Garnish and Enjoy"
      ],
      cookingTime: "1h10m",
      difficulty: "Hard",
      cuisine: "Indian",
      category: ["vegetarian"]
    },
    {
      id: 2,
      title: "Golden Mushroom Pasta",
      description: "An elegant Italian pasta featuring al dente noodles in a saffron-infused sauce with wild mushrooms, creating a visually stunning golden dish.",
      image: "/lovable-uploads/3d41ae60-1aec-466b-980d-16e5f2e55e45.png",
      ingredients: [
        "Scallions",
        "Onion flakes",
        "Paprika",
        "Salt",
        "Italian seasoning/oregano",
        "Button mushrooms",
        "Butter",
        "Olive oil",
        "Ginger garlic paste",
        "Cream",
        "Spicy garlic sauce",
        "Good quality Pasta (Penne)",
        "Parmigiano-Reggiano"
      ],
      instructions: [
        "Wash your mushrooms and cut them",
        "Cut your Scallions",
        "Prepare the seasoning with onion flakes, paprika, salt, Italian seasoning",
        "Dry your mushrooms in the pan and after the water evaporates and they start to become golden, add your fat and salt",
        "Add your ginger garlic paste then cook a bit",
        "Add your cream, seasonings and spicy garlic sauce",
        "Cook it a bit and then add your chopped green scallions and cooked pasta",
        "Garnish with some more paprika and scallions, then serve"
      ],
      cookingTime: "45m",
      difficulty: "Easy",
      cuisine: "Italian",
      category: ["vegetarian"]
    },
    {
      id: 3,
      title: "Hyderabadi Biryani",
      description: "A royal Indian delicacy of fragrant basmati rice layered with tender meat and aromatic spices, garnished with saffron milk and mint.",
      image: "/placeholder.svg",
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
      category: ["all", "vegetarian", "non-veg"],
      locked: true
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
      category: ["vegetarian"],
      locked: true
    },
    {
      id: 5,
      title: "Mushroom Red Pasta",
      description: "A delightful Italian pasta with sautéed mushrooms in a rich tomato sauce, enhanced with fresh herbs and Parmesan cheese.",
      image: "/placeholder.svg",
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
      category: ["vegetarian"],
      locked: true
    },
    {
      id: 6,
      title: "Roasted Smashed Potatoes",
      description: "Crispy on the outside, fluffy on the inside, these garlic-herb roasted smashed potatoes are the perfect side dish for any meal.",
      image: "/placeholder.svg",
      ingredients: [
        "Baby potatoes or small Yukon Gold potatoes",
        "Extra virgin olive oil",
        "Fresh rosemary and thyme",
        "Garlic cloves, minced",
        "Sea salt and black pepper",
        "Fresh parsley for garnish",
        "Grated Parmesan cheese (optional)"
      ],
      instructions: [
        "Boil potatoes in salted water until fork-tender (about 20-25 minutes)",
        "Drain potatoes and let them cool slightly",
        "Preheat oven to 425°F (220°C)",
        "Place potatoes on a baking sheet and gently smash each one with a fork",
        "Drizzle with olive oil and sprinkle with garlic, herbs, salt, and pepper",
        "Roast for 20-25 minutes until crispy and golden brown",
        "Garnish with fresh parsley and Parmesan if desired"
      ],
      cookingTime: "1h",
      difficulty: "Easy",
      cuisine: "American",
      category: ["vegetarian"],
      locked: true
    }
  ];

  return (
    <div className="min-h-screen relative">
      <HeroSection />
      <AboutSection />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-5xl font-playfair font-bold text-center mb-8">
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
