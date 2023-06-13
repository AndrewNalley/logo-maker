// Runs application using imports from lib folder.
const inquirer = require('inquirer')
const fs = require('fs')

const { Shape } = require('./lib/shapes.js');
const { Circle } = require('./lib/shapes.js');
const { Square } = require('./lib/shapes.js');
const { Triangle } = require('./lib/shapes.js');

// inquirer prompt

inquirer    
    .prompt([
        {
            type: 'list',
            message: 'First, choose a shape.',
            name: 'shape',
            choices: [
              { name: 'Triangle', value: Triangle },
              { name: 'Circle', value: Circle }, 
              { name: 'Square', value: Square }, 
            ]
          },
        {
            type: 'input',
            message: 'What is your project name?',
            name: 'projectname',
          }
    ])
// takes input and creates svg file with user-provided information
    .then(({color, shape, shapeColor, text, textColor}) => fs.writeFile("/examples/logo.svg", 
// display logo
` `, err => err ? console.log(err) : console.log("Generated logo.svg"))
);
// Log error if thrown ^ 