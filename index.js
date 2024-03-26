#! /usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    { message: "What is your name?", type: "string", name: "fullName" },
    {
        message: "Press enter to get the questions and please check your answers in the last of the quiz.",
        type: "string",
        name: "quiz",
    },
    {
        message: "\nWhat is the largest planet in our solar system?",
        type: "list",
        name: "ques1",
        choices: ["Jupiter", "Mars", "Neptune"],
    },
    {
        message: "\nWhat is the currency of United States of America?",
        type: "list",
        name: "ques2",
        choices: ["Dirhams", "Pounds", "Dollar"],
    },
    {
        message: "\nWhat is the chemical symbol for Water?",
        type: "list",
        name: "ques3",
        choices: ["Mg", "H2O", "NaCl"],
    },
    {
        message: "\nWhat is the tallest mountain in the world?",
        type: "list",
        name: "ques4",
        choices: ["K2", "Himachal", "Mount Everest"],
    },
    {
        message: "\nWhat is the sum of 54 and 93?",
        type: "list",
        name: "ques5",
        choices: ["147", "109", "257"],
    },
    {
        message: "\nWhat is the largest organ in the human body?",
        type: "list",
        name: "ques6",
        choices: ["Lungs", "Skin", "Stomach"],
    },
    {
        message: "\nWhich planet is known as the Red Planet?",
        type: "list",
        name: "ques7",
        choices: ["Mars", "Saturn", "Mercury"],
    },
    {
        message: "\nWhat is the product of 35 and 18?",
        type: "list",
        name: "ques8",
        choices: ["603", "663", "630"],
    },
]);
if (answers.ques1 === "Jupiter") {
    console.log("\nHurray! Your answer no.1 is correct.");
}
else {
    console.log("\nOops! Your answer is incorrect. Please check below.");
}
if (answers.ques2 === "Dollar") {
    console.log("Hurray! Your answer no.2 is correct.");
}
else {
    console.log("Oops! Your answer is incorrect. Please check below.");
}
if (answers.ques3 === "H2O") {
    console.log("Hurray! Your answer no.3 is correct.");
}
else {
    console.log("Oops! Your answer is incorrect. Please check below.");
}
if (answers.ques4 === "Mount Everest") {
    console.log("Hurray! Your answer no.4 is correct.");
}
else {
    console.log("Oops! Your answer is incorrect. Please check below.");
}
if (answers.ques5 === "147") {
    console.log("Hurray! Your answer no.5 is correct.");
}
else {
    console.log("Oops! Your answer is incorrect. Please check below.");
}
if (answers.ques6 === "Skin") {
    console.log("Hurray! Your answer no.6 is correct.");
}
else {
    console.log("Oops! Your answer is incorrect. Please check below.");
}
if (answers.ques7 === "Mars") {
    console.log("Hurray! Your answer no.7 is correct.");
}
else {
    console.log("Oops! Your answer is incorrect. Please check below.");
}
if (answers.ques8 === "630") {
    console.log("Hurray! Your answer no.8 is correct.");
}
else {
    console.log("Oops! Your answer is incorrect. Please check below.");
}
const correctedAnswers = ["Jupiter", "Dollar", "H2O", "Mount Everest", "147", "Skin", "Mars", "630"];
console.log("\nHere is the list of correct answers:", correctedAnswers);
