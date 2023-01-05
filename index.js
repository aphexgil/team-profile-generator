const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const { generateHTML } = require('./src/generateHTML');
const employees = [];


async function init(){
    const manager = await inquirer
        .prompt([
            {
            type: 'input',
            message: `What is the manager's name?`,
            name: 'name'
            },
            {
            type: 'input',
            message: `What is the manager's employee ID number?`,
            name: 'id'
            },
            {
            type: 'input',
            message: `What is the manager's email address?`,
            name: 'email'
            },
            {
            type: 'input',
            message: `What is the manager's office number?`,
            name: 'officeNumber'
            }
        ])
        .then((response) => {
            return new Manager(response.name, response.id, response.email, response.officeNumber);
        });

    employees.push(manager);
    let isDone = false;

    while(!isDone){
        const nextMove = await inquirer
            .prompt([
                {
                    type: 'list',
                    message: 'What would you like to do next?',
                    name: 'nextMove',
                    choices: ['Add an engineer', 'Add an intern', 'Generate HTML']
                }

            ])
            .then((response) => {
                return response.nextMove
            });

        if(nextMove=='Generate HTML'){
            isDone = true;
        }else if(nextMove=='Add an engineer'){
            let engineer = await inquirer
                .prompt([
                    {
                    type: 'input',
                    message: `What is the engineer's name?`,
                    name: 'name'
                    },
                    {
                    type: 'input',
                    message: `What is the engineer's employee ID number?`,
                    name: 'id'
                    },
                    {
                    type: 'input',
                    message: `What is the engineer's email address?`,
                    name: 'email'
                    },
                    {
                    type: 'input',
                    message: `What is the engineer's github username?`,
                    name: 'github'
                    }
                ])
                .then((response) => {
                    return new Engineer(response.name, response.id, response.email, response.github)
                });
            employees.push(engineer);
        }else if(nextMove=='Add an intern'){
            let intern = await inquirer
                .prompt([
                    {
                    type: 'input',
                    message: `What is the intern's name?`,
                    name: 'name'
                    },
                    {
                    type: 'input',
                    message: `What is the intern's employee ID number?`,
                    name: 'id'
                    },
                    {
                    type: 'input',
                    message: `What is the intern's email address?`,
                    name: 'email'
                    },
                    {
                    type: 'input',
                    message: `What is the intern's school?`,
                    name: 'school'
                    }
                ])
                .then((response) => {
                    return new Intern(response.name, response.id, response.email, response.school)
                });
            employees.push(intern);
        }
    
    }

    const html = generateHTML(employees);
}

init();
