const generate = require("./utils/generateMarkdown")
const fs = require("fs");
const inquirer = require("inquirer");

// array of questions for user
const questions = [
    {
        message: "What is the title of your app?",
        name: "title"
    },
    {
        message: "Please enter a short description of your app?",
        name: "description"
    },
    {
        message: "What are the table of contents?",
        name: "toc",
        type: "checkbox",
        choices: ["Installation", "Usage", "License", "Contributing", "Tests", "Questions"],
        default: ["Installation", "Usage", "License", "Contributing", "Tests", "Questions"]
    },
    {
        message: "How will people install the app?",
        name: "installation",
        default: "npm install"
    },
    {
        message: "What is your apps purpose?",
        name: "usage",
        default: "To pwn newbs"
    },
    {
        message: "do you have a license for your app?",
        name: "license",
        type: "list",
        choices: ["MIT", "Apache", "GNU"],
        default: "MIT"
    },
    {
        message: "how will people contribute to this app?",
        name: "contributing",
        default: "start a pull request on git repo"
    },
    {
        message: "how do you want to test out your app?",
        name: "tests",
        default: "npm run test"
    },
    {
        message: "What questions do you have about the app?",
        name: "questions",
        default: "nothing"
    },
];

const badges = {
    MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    Apache: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    GNU: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
}

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,generate(data), function(err){
        if(err) throw err;
        console.log("readme created!")
    })
}

// function to initialize program
function init() {
    //Inquirer ask some questions
inquirer
  .prompt(
    /* Pass your questions in here */
    questions
  )
  .then(answers => {
    // Use user feedback for... whatever!!
    console.log(answers);
    answers.badge = badges[answers.license]
    //call writetofile and send data gathered from questions
    writeToFile('johnsfirstreadme.md', answers)
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });

}

// function call to initialize program
init();
