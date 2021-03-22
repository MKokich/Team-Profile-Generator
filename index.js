const inquirer = require("inquirer");
// const generateHtml = require();
const fs = require("fs")
let employees = [];
const Employee = require("./lib/Employee")
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")

function addManager(){
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the Manager name?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'What is their id?',
            name: 'id'
        },
        {
            type: 'input',
            message: 'What is their email?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'What is their office number?',
            name: 'officeNumber'
        }

    ])
    .then(function(answers){
        
        const newManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        console.log(newManager)
        employees.push(newManager)
    ask();
    })
    
}

function addIntern(){
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the Intern name?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'What is their id?',
            name: 'id'
        },
        {
            type: 'input',
            message: 'What is their email?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'Where did they go to school?',
            name: 'school'
        }

    ])
    .then(function(answers){
        
        const newIntern = new Intern(answers.name, answers.id, answers.email, answers.school)
        console.log(newIntern)
        employees.push(newIntern)
    ask();
    })
}



function addEngineer(){
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the Engineer name?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'What is their id?',
            name: 'id'
        },
        {
            type: 'input',
            message: 'What is their email?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'What is their github username?',
            name: 'github'
        }

    ])
    .then(function(answers){
        
        const newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        console.log(newEngineer)
        employees.push(newEngineer)
    ask();
    })
}



function writeToFile(fileName, data) {
    
    fs.writeFileSync(fileName, data);
  }
addManager();

function ask() {
    inquirer
      .prompt({
        type: "list",
        message: "Would you like to add another employee?",
        name: "selection",
        choices: ["add Intern", "add Engineer", "I'm done"],
      })
      .then(function (answer) {
        if (answer.selection === "add Intern") {
          addIntern();
          
        } else if(answer.selection === "add Engineer"){
            addEngineer();
        }
        
        else  {
            console.log("They're done")
          // html
        }
    })
}
