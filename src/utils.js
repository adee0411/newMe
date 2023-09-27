export const calculateBMR = (stats) => {
  const { gender, weight, height, age } = stats;
  let bmr;

  // For men
  if (gender.value === "male") {
    bmr = 66.5 + 13.75 * weight.value + 5.003 * height.value - 6.75 * age.value;
  }
  // For women
  if (gender.value === "female") {
    bmr =
      655.1 + 9.563 * weight.value + 1.85 * height.value - 4.676 * age.value;
  }

  return +bmr.toFixed(0);
};

export const calculateTDEE = (bmr, palMultiplier) => {
  return +(bmr * palMultiplier).toFixed(0);
};

export const calculateDefaultDailyCalorie = (tdee, dietType) => {
  if (dietType === "cut") {
    return tdee - 500;
  }
  if (dietType === "bulk") {
    return tdee + 500;
  }
};

/**************************************** */

// Returns the macroRatios-like object with the actual calories based on dailyCalories
export const calculateMacroValues = (dailyCalories, macroRatios) => {
  const calculatedMacros = { ...macroRatios };
  for (let carbQuantity in calculatedMacros) {
    for (let macro in calculatedMacros[carbQuantity]) {
      if (macro === "carbs" || macro === "protein") {
        calculatedMacros[carbQuantity][macro] = (
          (calculatedMacros[carbQuantity][macro] * dailyCalories) /
          4
        ).toFixed(0);
      }
      if (macro === "fats") {
        calculatedMacros[carbQuantity][macro] = (
          (calculatedMacros[carbQuantity][macro] * dailyCalories) /
          9
        ).toFixed(0);
      }
    }
  }
  return calculatedMacros;
};
