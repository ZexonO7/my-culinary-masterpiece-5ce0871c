
// Common allergens based on FDA's "Big 8" allergens plus other common ones
const ALLERGEN_KEYWORDS = {
  dairy: ['milk', 'cream', 'butter', 'cheese', 'yogurt', 'curd', 'ghee', 'paneer', 'cottage cheese', 'parmesan', 'parmigiano-reggiano'],
  gluten: ['wheat', 'flour', 'pasta', 'bread', 'gram flour'],
  nuts: ['cashews', 'pistachios', 'almonds', 'walnuts', 'pecans', 'hazelnuts', 'macadamia'],
  eggs: ['egg', 'eggs', 'mayonnaise'],
  soy: ['soy', 'tofu', 'soybean', 'soy sauce'],
  sesame: ['sesame', 'tahini'],
  shellfish: ['shrimp', 'crab', 'lobster', 'prawns'],
  fish: ['fish', 'salmon', 'tuna', 'cod', 'anchovy']
};

export const detectAllergens = (ingredients: string[]): string[] => {
  const detectedAllergens = new Set<string>();
  
  ingredients.forEach(ingredient => {
    const lowerIngredient = ingredient.toLowerCase();
    
    Object.entries(ALLERGEN_KEYWORDS).forEach(([allergen, keywords]) => {
      if (keywords.some(keyword => lowerIngredient.includes(keyword))) {
        detectedAllergens.add(allergen);
      }
    });
  });
  
  return Array.from(detectedAllergens);
};

export const getAllergenDisplayName = (allergen: string): string => {
  const displayNames: Record<string, string> = {
    dairy: 'Dairy/Milk',
    gluten: 'Gluten',
    nuts: 'Tree Nuts',
    eggs: 'Eggs',
    soy: 'Soy',
    sesame: 'Sesame',
    shellfish: 'Shellfish',
    fish: 'Fish'
  };
  
  return displayNames[allergen] || allergen;
};
