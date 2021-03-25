const inquirer = require("inquirer");
// const generateHtml = require("./generateHtml");
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



function writeToFile(data) {
    
    fs.writeFileSync("index.html", data);
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
            let html= startingHtml
            employees.forEach(employee => {
                console.log(employee.getRole)
                if (employee.getRole() === "Manager"){
                    html += managerCard(employee)
                    
                }
                else if (employee.getRole() === "Intern"){
                    html += internCard(employee)
                }
                else {
                    html += engineerCard(employee)
                }
            });
            html += closingHtml
            
            writeToFile(html);
        }
    })
}

    const startingHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" href="assets/style.css">
    <title>Team Profile</title>
    </head>
    <body>
    <h1>Team Profile</h1>`

    const closingHtml = `
    <div class= "push"></div>
    </body>
        </html>`

    const engineerCard = (data) => {
        return `<div class="Engineer-card card">
   <div class="card-title">Engineer: ${data.name}</div>
   <div class="card-body">
       <div>ID: ${data.id}</div>
       <div>Email: ${data.email}</div>
       <div>Github Username: ${data.github}</div>
     </div>
   </div>`
    }

    const managerCard = (data) => {
        return `<div class="Manager-card card">
    <div class="card-title">Manager: ${data.name}</div>
    <div class="card-body">
        <div>ID: ${data.id}</div>
        <div>Email: ${data.email}</div>
        <div>Office number: ${data.officeNumber}</div>
      </div>
    </div>`
    }

    const internCard = (data) => {
        return `<div class="Intern-card card">
    <div class="card-title">Intern: ${data.name}</div>
    <div class="card-body">
        <div>ID: ${data.id}</div>
        <div>Email: ${data.email}</div>
        <div>School: ${data.school}</div>
      </div>
    </div>` 
    }
