export const calculateBMR = (stats) => {
  console.log(stats);
  const { gender, weight, height, age } = stats;
  let bmr;

  // For men
  if (gender === "male") {
    bmr = 66.5 + 13.75 * weight + 5.003 * height - 6.75 * age;
  }
  // For women
  if (gender === "female") {
    bmr = 655.1 + 9.563 * weight + 1.85 * height - 4.676 * age;
  }

  return bmr.toFixed(0);
};

export const calculateTDEE = (bmr, palMultiplier) => {
  return (bmr * palMultiplier).toFixed(0);
};

export const calculateDailyCalorie = (tdee, deficit = 500) => {
  return tdee - deficit;
};

export function calculateWeeklyWeightLoss(deficit = 500) {
  const weeklyDeficit = 7 * deficit;
  const weeklyWeightLoss = +(weeklyDeficit / 7000).toFixed(2);
  return weeklyWeightLoss;
}

export function calculateWeightLoss(dietLength = 12, deficit = 500) {
  const totalWeightLoss = dietLength * calculateWeeklyWeightLoss(deficit);
  return totalWeightLoss;
}

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

/* Calorie Customizer functions */

export function calculateWeightLossWeekByWeek(
  startWeight,
  { deficit, dietLength, weightGoal }
) {
  let lengthOfDiet = dietLength;
  if (weightGoal) {
    const weightToLose = startWeight - weightGoal;
    lengthOfDiet = weightToLose / calculateWeeklyWeightLoss(deficit);
  }
  //initial values
  let currentWeight = startWeight;
  let weekNumber = 0;
  let totalWeightLoss = 0;
  const weeklyWeightLoss = calculateWeeklyWeightLoss(deficit);

  let weeklyWeights = [{ weekNumber, currentWeight, totalWeightLoss }];

  for (let i = 1; i <= lengthOfDiet; i++) {
    weekNumber = i;
    currentWeight -= weeklyWeightLoss;
    totalWeightLoss += weeklyWeightLoss;
    weeklyWeights.push({ weekNumber, currentWeight, totalWeightLoss });
  }

  return weeklyWeights;
}

export const formatDate = (dateObj) => {
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();

  const formattedTodaysDate = `${year}-${String(month).padStart(
    2,
    "0"
  )}-${String(day).padStart(2, "0")}`;

  return formattedTodaysDate;
};

export const calculateDietLength = (totalWeightLoss, dailyDeficit) => {
  return parseInt((totalWeightLoss * 7000) / dailyDeficit / 7);
};

export const calculateWeightGoal = (
  dailyDeficit,
  dietLength,
  currentWeight
) => {
  return parseInt(currentWeight - ((dailyDeficit * 7) / 7000) * dietLength);
};

export const PAL = {
  Sedentary: {
    multiplier: 1.2,
    label: "Ülő munka",
    description: "Tudatos edzés nélküli, leginkább ülő életmód",
  },
  "Light exercise": {
    multiplier: 1.375,
    label: "Alkalmi edzés",
    description: "Fizikai edzés, heti 1-3 alkalommal",
  },
  "Moderate exercise": {
    multiplier: 1.55,
    label: "Rendszeres edzés",
    description: "Rendszeres edzés, heti 4-5 alkalommal",
  },
  "Heavy exercise": {
    multiplier: 1.725,
    label: "Napi szintű edzés",
    description: "Napi rendszerességű edzés",
  },
  "Physical job": {
    multiplier: 1.9,
    label: "Fizikai munka",
    description: "Megterhelő fizikai munka és aktivitás",
  },
  Athlete: {
    multiplier: 2.5,
    label: "Atléta",
    description: "Hivatásos sportoló, atléta",
  },
};
