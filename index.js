// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const { listenerCount } = require('process');


// Array of questions inside inquirer.prompt
inquirer.prompt([
    {   type: "input",
        name: "title",
        message: "Please enter your project title?", 
    },
    {   type: "input",
        name: "description",
        message: "What would you like to include in the README Description?", 
    },
    {   type: "input",
        name: "instructions",
        message: "What are the installation instructions?", 
   },
    {   type: "input",
        name: "usage",
        message: "What usage information would you like to include?", 
        
    },
    {   type: "input",
        name: "contribution",
        message: "What are the contribution guidelines?", 
        
    },
    {   type: "input",
        name: "credits",
        message: "Anyone you'd like to credit?", 
        
    },
    {   type: "input",
        name: "test",
        message: "What are the test instructions?", 
    },
    {   type: "list",  
        name: "license",
        message: "What license would you like to use?", 
        choices: ["MIT", "ISC", "None"],
        
    },
    {   type: "input",
        name: "gitHub",
        message: "What is your gitHub username?", 
    },
    {   type: "input",
        name: "email",
        message: "What is your email?", 
    },  
])


.then((data) => {
    console.log(data);
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
   var licenseChoice = data.license;
// If an arrow function only has one parameter, we can omit the parens () around the single parameter
var license = licenseChoice => licenseChoice === "None" ? 

licenseChoice = "" : `![${licenseChoice}](https://img.shields.io/badge/license-${licenseChoice}-brightgreen)`; 

      console.log(data.license)
// A function to write README file
    fs.writeFileSync("README.md", 
    `
# Title: ${data.title}

## License:
    
${license()}

## Description: 
${data.description}

## Table of Contents: 
-[Description](#description) \n
-[Installation](#installation) \n
-[Usage](#usage) \n
-[Credits](#credits) \n
-[Test](#test) \n
-[Questions](#questions) \n

## Installation: 
${data.instructions}

## Usage: 
${data.usage}

## Credits: 
${data.credits}

## Test: 
${data.test}

## Questions
Contact me: \n
-gitHub username: ${data.gitHub} \n
-gitHub profile: https://github.com/${data.gitHub} \n
-Email: ${data.email}

#
## Video Walkthrough
[Insert Here]

    `)
}); 

