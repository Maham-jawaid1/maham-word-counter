#! /usr/bin/env node 
//import inquirer module, which is the cammand line interface
import inquirer from "inquirer";
//declare a constant answerand assign it to the result of inquirer.prompt function
const answer = await inquirer.prompt([
    {
        name: "Sentance",
        type: "input",
        message: "Enter your sentance to count the word:"
    }
]);
const words = answer.Sentance.trim().split(" ");
//print the array of words to the console
console.log(words);
//print the word count of the sentance to the console
console.log(`Your sentance word count is ${words.length}`);
