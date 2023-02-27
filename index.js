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
//     {   type: "input",
//         name: "instructions",
//         message: "What are the installation instructions?", 
//    },
//     {   type: "input",
//         name: "usage",
//         message: "What usage information would you like to include?", 
        
//     },
//     {   type: "input",
//         name: "contribution",
//         message: "What are the contribution guidelines?", 
        
//     },
//     {   type: "input",
//         name: "instructions",
//         message: "What are the test instructions?", 
//     },
//     {   type: "list",  
//         name: "license",
//         message: "What license would you like to use?", 
//         choices: ["MIT", "ISC", "None"],
        
//     },
//     {   type: "input",
//         name: "gitHub",
//         message: "What is your gitHub username?", 
//     },
//     {   type: "input",
//         name: "email",
//         message: "What is your email?", 
//     },  
])
.then((data) => {
    console.log(data);

    
    const filename = `${data.title.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('filename created!')
    );
    writeToFile(data);
}   
); 



// TODO: Create a function to write README file
function writeToFile(data) {

    return `
    # ${data.name}`
  


}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
