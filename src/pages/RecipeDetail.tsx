import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Recipe } from '../types/Recipe';
import { ChefHat, Clock, ArrowLeft, Utensils } from 'lucide-react';

const RecipeDetail = () => {
  const { id } = useParams();
  
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