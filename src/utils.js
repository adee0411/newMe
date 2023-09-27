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

export const calculateMacroValues = (dailyCalories) => {
  const macroRatios = {
    moderateCarb: {
      protein: 0.3,
      fats: 0.35,
      carbs: 0.35,
    },
    lowCarb: {
      protein: 0.4,
      fats: 0.4,
      carbs: 0.2,
    },
    highCarb: { protein: 0.3, fats: 0.2, carbs: 0.5 },
  };
  for (let carbQuantity in macroRatios) {
    for (let macro in macroRatios[carbQuantity]) {
      if (macro === "carbs" || macro === "protein") {
        macroRatios[carbQuantity][macro] = (
          (macroRatios[carbQuantity][macro] * dailyCalories) /
          4
        ).toFixed(0);
      }
      if (macro === "fats") {
        macroRatios[carbQuantity][macro] = (
          (macroRatios[carbQuantity][macro] * dailyCalories) /
          9
        ).toFixed(0);
      }
    }
  }
  return macroRatios;
};
