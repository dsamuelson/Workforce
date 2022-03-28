//calls all needed scripts to run through the creation and saving of the html page
const inquirer = require('inquirer');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const MakeFile = require('../src/html-template');
const saveFile = require('./savefile');
const { managerQuestions:mQues, allRoleQuestions:aQues, engineerQuestions:eQues, internQuestions:iQues } = require('../src/questions');

//make array to push any created employees to
const allEmpl = [];

// this class will handle the questions and creation of the employees
class Construction {
    // used to initialize the script for creation of employees
    initialize() {
        this.askManager();
    }
    // asks questions and creates manager
    askManager() {
        inquirer.prompt(mQues)
        .then(answers => {
            allEmpl.push(new Manager(answers.managerName, answers.employeeId, answers.employeeEmail, answers.officeNum));
            console.log(`--------------------`);
            console.log(`Please add Employees`);
            console.log(`--------------------`);
            this.askEmployee()
        });
    }
    // asks questions and creates intern
    askIntern() {
        inquirer.prompt(aQues)
        .then(answers => {
            const employee = {
                name: answers.emplName,
                id: answers.employeeId,
                email: answers.employeeEmail
            }
            inquirer.prompt(iQues).then(answers => {
                employee.school = answers.schoolName;
                allEmpl.push(new Intern(employee.name, employee.id, employee.email, employee.school));
                this.askEmployee();
            });
        });
    }
    //asks questions and creates engineer
    askEngineer() {
        inquirer.prompt(aQues)
        .then(answers => {
            const employee = {
                name: answers.emplName,
                id: answers.employeeId,
                email: answers.employeeEmail
            }
            inquirer.prompt(eQues).then(answers => {
                employee.github = answers.githubUN;
                allEmpl.push(new Engineer(employee.name, employee.id, employee.email, employee.github));
                this.askEmployee()
            });
        });
    }
    // asks whether we want to create an employee or not
    askEmployee() {
        inquirer.prompt(
            {
                type: 'rawlist',
                name: 'addEmpl',
                message: 'Would you like to add another Employee?',
                choices: ['Engineer', 'Intern', 'No More Employees']
            }
            ).then(answers => {

                if (answers.addEmpl === 'Engineer'){
                    this.askEngineer();
                } else if (answers.addEmpl === 'Intern') {
                    this.askIntern();
                } else {
                    this.endPrompts();
                }
            });
    }
    // called at the end to make the html file and CSS file for media query
    endPrompts() {
        let htmlPage = new MakeFile(allEmpl);
        return saveFile(htmlPage.fullHTML()).then(writeFileResponse => console.log(writeFileResponse.message));
    }
};

// export the class to be used in constructing the HTML templates
module.exports = Construction;