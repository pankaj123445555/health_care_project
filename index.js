//shree ganeshay namah
const express = require('express');
const chalk = require('chalk');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const {Talk} = require('./Model/Experttalk');
const {conn} = require('./Config/db');

const {generateMealPlan} = require('./Meal');
// choose a vegeterian diet chart section from the health benefit
const mealPlan = generateMealPlan();
console.log(chalk.red.bold('Hey..! Your vegetarian meal Plan for today'));

mealPlan.map((item)=>{
    console.log(`${item.meal}: ${chalk.blue.bold(item.items[0])}`)
})

// now lets write the code for the 2nd section

// Schedule a new expert talk
app.post('/expert-talks', async (req, res) => {
    console.log(req.body);

    const talk = new Talk({
        title: req.body.title,
        speaker: req.body.speaker,
        date: req.body.date
    });

    try {
        await talk.save();
        res.send(talk);
    } catch (ex) {
        res.status(400).send(`Error: ${ex.message}`);
    }
});
// Listen on port 3000
app.listen(3000, () => console.log('Listening on port 3000...'));