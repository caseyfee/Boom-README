// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");


// TODO: Create an array of questions for user input
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

// TODO: Create a function to write README file
.then((data) => {
    console.log(data);
    data.license === "None" ? data.license = "None" : data.license
      console.log(data.license)

    fs.writeFileSync("README.md", 
    `
    
# Title: ${data.title}

## License:
    
![${data.license}](https://img.shields.io/badge/license-${data.license}-brightgreen)

## Description: 
${data.description}

## Table of Contents: 
-[Description](#descritption) \n
-[Installation](#installation) \n
-[Usage](#usage) \n
-[Credits](#Credits) \n
-[Test Instructionrs](#contributing) \n
-[Questions](#questions) \n

## Installation: 
${data.instructions}

## Usage: 
${data.usage}

## Credits: 
${data.credits}

## Test Instructions: 
${data.test}

## Questions, Comments, Good Recipes, Secrets?
Contact me , please ------ \n
-gitHub username: ${data.gitHub} \n
-gitHub profile: https://github.com/${data.gitHub} \n
-Email: ${data.email}

#
## Video Walkthrough
[Insert Here]

    `)
}); 

