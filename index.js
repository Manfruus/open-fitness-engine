/**
 * Open Fitness Engine - Core logic for health metrics
 */

// Calcolo del BMR (Mifflin-St Jeor)
function calculateBMR(weightKg, heightCm, age, gender) {
  const base = (10 * weightKg) + (6.25 * heightCm) - (5 * age);
  return gender.toLowerCase() === 'male' ? Math.round(base + 5) : Math.round(base - 161);
}

// Calcolo del TDEE (Fabbisogno calorico giornaliero)
function calculateTDEE(bmr, activityLevel) {
  const multipliers = {
    sedentary: 1.2,      // Poco o nessun esercizio
    light: 1.375,        // 1-3 giorni alla settimana
    moderate: 1.55,      // 3-5 giorni alla settimana
    active: 1.725,       // 6-7 giorni alla settimana
    veryActive: 1.9      // Allenamenti intensi quotidiani
  };
  
  const factor = multipliers[activityLevel] || 1.2;
  return Math.round(bmr * factor);
}

// Ripartizione Macro consigliati (in grammi)
function calculateMacros(calories, goal = 'maintain') {
  let targetCalories = calories;
  
  if (goal === 'weightLoss') targetCalories -= 500;
  if (goal === 'weightGain') targetCalories += 300;

  // 30% Proteine, 40% Carboidrati, 30% Grassi
  return {
    calories: targetCalories,
    proteinGrams: Math.round((targetCalories * 0.30) / 4),
    carbsGrams: Math.round((targetCalories * 0.40) / 4),
    fatGrams: Math.round((targetCalories * 0.30) / 9)
  };
}

module.exports = {
  calculateBMR,
  calculateTDEE,
  calculateMacros
};
