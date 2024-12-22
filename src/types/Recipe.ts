export interface Recipe {
  id: number;
  title: string;
  description: string;
  image: string;
  ingredients: string[];
  instructions: string[];
  cookingTime: string;
  difficulty: "Easy" | "Medium" | "Hard";
}