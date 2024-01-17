
const path = require('path');
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for user
const questions = [
  {
    type: 'input',
    name: 'projectName',
    message: 'Enter the project name:',
  },
  {
    type: 'input',
    name: 'projectDescription',
    message: 'Enter a brief description of the project:',
  },
  {
    type: 'input',
    name: 'projectAuthor',
    message: 'Enter the author of the project:',
  },
  {
    type: 'input',
    name: 'projectVersion',
    message: 'Enter the project version:',
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(fileName, data);
}

// Function to initialize program
function init() {
  inquirer.prompt(questions)
    .then((answers) => {
      const readmeContent = generateMarkdown(answers);
      const outputPath = path.resolve(__dirname, 'output', 'README.md');
      writeToFile(outputPath, readmeContent);
      console.log('README.md file generated successfully!');
    })
    .catch((error) => {
      console.error(error);
    });
}

// Function call to initialize program
init();


