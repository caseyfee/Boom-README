// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");

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

// A function to write README file
    fs.writeFileSync("CreatedREADME.md", generateREADME(data))
});

// License functions
function licenseBadge(licenseChoice) {
    return (licenseChoice === "None") ? "" : `![${licenseChoice}](https://img.shields.io/badge/license-${licenseChoice}-brightgreen) \n`; 
}

function licenseTOC(licenseChoice){ 
    return (licenseChoice === "None") ? "" : `\n- [License](#license) `;
 }

 function licenseNotice(licenseChoice){ 
    return (licenseChoice === "None") ? "" : 
    ` \n ## License: 
        The license chosen was ${licenseChoice}. \n 
    `;
 }

//  Populating the created README file
function generateREADME(data) {
    return `
# Title: ${data.title}
  
${licenseBadge(data.license)}
## Description: 
    ${data.description}

## Table of Contents: 
- [Description](#description) 
- [Installation](#installation)
- [Usage](#usage) 
- [Credits](#credits) 
- [Test](#test) ${licenseTOC(data.license)}
- [Questions](#questions) 

## Installation: 
    ${data.instructions}

## Usage: 
    ${data.usage}

## Credits: 
    ${data.credits}

## Test: 
    ${data.test}
${licenseNotice(data.license)}
## Questions
Contact me: \n
    -gitHub username: ${data.gitHub} \n
    -gitHub profile: https://github.com/${data.gitHub} \n
    -Email: ${data.email}

    `
}

