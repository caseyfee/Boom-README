// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");

// nodemon??

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
    
    // var icon = `https://img.shields.io/badge/license-${data.license}-brightgreen`

    // var iconHTML = ``

    // $('#fiveDayContainer').html(iconHTML);

    fs.writeFileSync("README.md", 
    `
    # Title: ${data.title}

    ## Description: 
    ${data.description}

    ## Table of Contents: 
    ${data.description}
    -[Description](#descritption)
    -[Installation](#installation)
    -[Technology](#technology)
    -[Usage](#usage)
    -[Contributing](#contributing)
    -[Tests](#tests)
    -[Questions](#questions)

    ## Installation: 
    ${data.instructions}

    ## Usage: 
    ${data.usage}

    ## Credits: 
    ${data.credits}

    ## Test Instructions: 
    ${data.test}

    ## Questions, Comments, Good Recipes, Secrets?
    Contact me , please ------
    -gitHub username: ${data.gitHub} 
    -gitHub profile: https://github.com/${data.gitHub}
    -Email: ${data.email}


    ## License:
    
    ![${data.license}](https://img.shields.io/badge/license-${data.license}-brightgreen)
    
    ## Video Walkthrough
    [Insert Here]


    `)
}); 

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
