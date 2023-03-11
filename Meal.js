const {breakfast,midMorningSnack,lunch,afternoonSnack,dinner,eveningSnack} = require('./item');


function generateMealPlan() {
    const mealPlan = [
      { meal: 'Breakfast', items: [breakfast[Math.floor(Math.random() * breakfast.length)]] },
      { meal: 'Mid-morning snack', items: [midMorningSnack[Math.floor(Math.random() * midMorningSnack.length)]] },
      { meal: 'Lunch', items: [lunch[Math.floor(Math.random() * lunch.length)]] },
      { meal: 'Afternoon snack', items: [afternoonSnack[Math.floor(Math.random() * afternoonSnack.length)]] },
      { meal: 'Dinner', items: [dinner[Math.floor(Math.random() * dinner.length)]] },
      { meal: 'Evening snack', items: [eveningSnack[Math.floor(Math.random() * eveningSnack.length)]] },
    ];
    
    return mealPlan;
  }

  module.exports = {generateMealPlan};