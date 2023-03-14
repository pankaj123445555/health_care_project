const {generateMealPlan} = require('../Meal');
const GetData = (req,res) =>{
    console.log('here the data is');
    const mealPlan = generateMealPlan();
    return res.json(mealPlan);
}

module.exports = {GetData};