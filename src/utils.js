export const PAL = {
  Sedentary: 1.2,
  "Light exercise": 1.375,
  "Moderate exercise": 1.55,
  "Heavy exercise": 1.725,
  "Physical job": 1.9,
  Athlete: 2.5,
};

// BMR Calculator, accepts stat Object of personal parameters ( weight(kg), height(cm), age, gender )
export const calculateBMR = (stats) => {
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
