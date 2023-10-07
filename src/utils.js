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

// Only 1 Label is checked
export function calculateWeightLossWeekByWeek({
  startWeight,
  deficit,
  dietLength,
  weightGoal,
}) {
  //initial values
  let currentWeight = startWeight;
  let weekNumber = 0;
  let totalWeightLoss = 0;
  const weeklyWeightLoss = weightGoal
    ? (startWeight - weightGoal) / dietLength
    : calculateWeeklyWeightLoss(deficit);

  let weeklyWeights = [{ weekNumber, currentWeight, totalWeightLoss }];

  for (let i = 1; i <= dietLength; i++) {
    weekNumber = i;
    currentWeight -= weeklyWeightLoss;
    totalWeightLoss += weeklyWeightLoss;
    weeklyWeights.push({ weekNumber, currentWeight, totalWeightLoss });
  }

  return weeklyWeights;
}

// 2 labels are checked
export function calculateWeightLossWeekByWeek_2(
  startWeight,
  deficit,
  weightGoal
) {
  const weightToLose = startWeight - weightGoal;
  const dietLength = weightToLose / calculateWeeklyWeightLoss(deficit);

  //initial values
  let currentWeight = startWeight;
  let weekNumber = 0;
  let totalWeightLoss = 0;
  const weeklyWeightLoss = calculateWeeklyWeightLoss(deficit);

  let weeklyWeights = [{ weekNumber, currentWeight, totalWeightLoss }];

  for (let i = 1; i <= dietLength; i++) {
    weekNumber = i;
    currentWeight -= weeklyWeightLoss;
    totalWeightLoss += weeklyWeightLoss;
    weeklyWeights.push({ weekNumber, currentWeight, totalWeightLoss });
  }

  return weeklyWeights;
}

// Only diet length is given => Calculate total weight loss for given period, based on different daily deficit values => Display in <Table>
export function calculateWeightLossByDeficit(length) {
  const deficitIndexes = [200, 400, 600, 800, 1000];

  function calculateWeightLossPerWeek(deficit) {
    return (7 * deficit) / 7000;
  }

  const totalWeightLossForLength = deficitIndexes.map((deficit) => {
    return [deficit, calculateWeightLossPerWeek(deficit) * length];
  });

  return totalWeightLossForLength;
}

// Only Goal Weight is given (1) => Calculate total diet length based on different daily deficit values => Display in <Table>
export function calculateLengthByWeightGoal(currentWeight, weightGoal) {
  function calculateWeightLossPerWeek(deficit) {
    return (7 * deficit) / 7000;
  }
  const deficitIndexes = [200, 400, 600, 800, 1000];

  const weightToLose = currentWeight - weightGoal;

  const lengthByDeficit = deficitIndexes
    .map((deficit) => {
      return calculateWeightLossPerWeek(deficit);
    })
    .map((weightLoss) => {
      return weightToLose / weightLoss;
    });

  return lengthByDeficit;
}

// Only Goal Weight is given (2) => Calculate diet length based on different daily deficit values => Display in <Table>
export function calculateDeficitByWeightGoal(currentWeight, weightGoal) {
  const weightToLose = currentWeight - weightGoal;

  let deficitArray = [];

  for (let i = 4; i <= 40; i += 2) {
    const weightToLosePerWeek = weightToLose / i;
    const dailyDeficit = (7000 * weightToLosePerWeek) / 7;

    /**** If goal weight to lose is too high, the minimum diet length (in dietLength) must be the number that allows 1000 or less daily deficit!!!!  */
    if (dailyDeficit >= 1000) continue;
    deficitArray.push([dailyDeficit, i]);
  }

  return deficitArray;
}

// Daily deficit + Goal weight given => Calculate the length of diet => Display on <Chart> in [Bodyweight, Week] dimensions
export function calculateDietLength(currentWeight, weightGoal, deficit) {
  const weeklyWeightLoss = (deficit * 7) / 7000;

  let dietLength = 1;
  let decreasedWeight = currentWeight;
  let weightLoss = [[0, currentWeight]];

  while (decreasedWeight >= weightGoal) {
    decreasedWeight -= weeklyWeightLoss;
    if (decreasedWeight < weightGoal) {
      break;
    } else {
      weightLoss.push([dietLength, decreasedWeight]);
      dietLength++;
    }
  }

  return weightLoss;
}
// Daily deficit + Diet length given => Calculate goal weight => Display on <Chart> in [Bodyweight, Week] dimensions
export function calculateweightGoal(currentWeight, deficit, dietLength) {
  let decreasedWeight = currentWeight;
  let weightLoss = [[0, currentWeight]];

  for (let i = 1; i <= dietLength; i++) {
    decreasedWeight -= (deficit * 7) / 7000;
    weightLoss.push([i, decreasedWeight]);
  }

  return weightLoss;
}

// Goal weight + Diet length given => Calculate daily deficit value => Display on <Chart> in [Bodyweight, Week] dimensions
export function calculateDeficit(currentWeight, weightGoal, dietLength) {
  const weightToLose = currentWeight - weightGoal;
  const dailyDeficit = (weightToLose * 7000) / dietLength / 7;
  const weeklyWeightLoss = weightToLose / dietLength;

  let decreasedWeight = currentWeight;
  let weightLoss = [[0, currentWeight]];

  for (let i = 1; i <= dietLength; i++) {
    decreasedWeight -= weeklyWeightLoss;
    weightLoss.push([i, decreasedWeight]);
  }

  return weightLoss;
}
