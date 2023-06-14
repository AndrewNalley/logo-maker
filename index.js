// Runs application using imports from lib folder.
const inquirer = require('inquirer')
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
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
      message: 'Next, what color do you want for the shape?',
      name: 'shapeColor',
    },
    {
      type: 'maxlength-input',
      message: 'What acronym do you want for your logo?',
      name: 'text',
      maxLength: 3
    },
    {
      type: 'input',
      message: 'What color do you want for the text?',
      name: 'textColor',
    },
    {
      type: 'input',
      message: 'Finally, what color do you want for the background?',
      name: 'color',
    },
  ])
  // takes input and creates svg file with user-provided information
  .then(({ shape, shapeColor, text, textColor, color }) => fs.writeFile("/examples/logo.svg",
    // display logo
    `const newShape = new shape`, err => err ? console.log(err) : console.log("Generated logo.svg"))
  );
// Log error if thrown ^ 