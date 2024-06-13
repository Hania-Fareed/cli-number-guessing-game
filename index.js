#! /usr/bin/env node
import inquirer from "inquirer";
console.log("welcome to Hania Fareed cli guessing game");
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-10:",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("congratulations! you guessed the right number.");
}
else {
    console.log("you guessed wrong number");
}
