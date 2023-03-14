//shree ganeshay namah
const express = require('express');
const chalk = require('chalk');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());


const {conn} = require('./Config/db');
const {registerUser} = require('./Contoller/authentication');
const {authUser} = require('./Contoller/authentication');
const {protect} = require('./MiddleWare/authmiddleware')
const {GetData} = require('./Contoller/data');

const {generateMealPlan} = require('./Meal');
// choose a vegeterian diet chart section from the health benefit
const mealPlan = generateMealPlan();
// console.log(chalk.red.bold('Hey..! Your vegetarian meal Plan for today'));
 
// lets handle the api,login and  signup function implemented successfully
app.post('/api/signup',registerUser);
app.post('/api/login',authUser);
app.get('/api/get-data',GetData);





// Listen on port 3000
app.listen(5000, () => console.log('Listening on port 3000...'));