
import React from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertTriangle } from 'lucide-react';
import { detectAllergens, getAllergenDisplayName } from '../utils/allergenDetection';

interface AllergyDisclaimerProps {
  ingredients: string[];
}

const AllergyDisclaimer: React.FC<AllergyDisclaimerProps> = ({ ingredients }) => {
  const detectedAllergens = detectAllergens(ingredients);
  
  if (detectedAllergens.length === 0) {
    return (
      <Alert className="bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800">
        <AlertTriangle className="h-4 w-4 text-green-600 dark:text-green-400" />
        <AlertTitle className="text-green-800 dark:text-green-200">Allergy Information</AlertTitle>
        <AlertDescription className="text-green-700 dark:text-green-300">
          No common allergens detected in this recipe. However, please always check individual ingredients and cross-contamination risks.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <Alert className="bg-orange-50 border-orange-200 dark:bg-orange-950 dark:border-orange-800">
      <AlertTriangle className="h-4 w-4 text-orange-600 dark:text-orange-400" />
      <AlertTitle className="text-orange-800 dark:text-orange-200">Allergy Warning</AlertTitle>
      <AlertDescription className="text-orange-700 dark:text-orange-300">
        <p className="mb-2">This recipe contains the following potential allergens:</p>
        <div className="flex flex-wrap gap-2 mb-2">
          {detectedAllergens.map(allergen => (
            <span 
              key={allergen}
              className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-md text-sm font-medium"
            >
              {getAllergenDisplayName(allergen)}
            </span>
          ))}
        </div>
        <p className="text-xs">
          Always verify ingredients and check for cross-contamination if you have severe allergies. This detection is automated and may not catch all allergens.
        </p>
      </AlertDescription>
    </Alert>
  );
};

export default AllergyDisclaimer;
