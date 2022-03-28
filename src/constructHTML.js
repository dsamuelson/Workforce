const inquirer = require('inquirer');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const { managerQuestions:mQues, allRoleQuestions:aQues, engineerQuestions:eQues, internQuestions:iQues } = require('../src/questions');
const Choices = require('inquirer/lib/objects/choices');
const allEmpl = [];
class Construction {
    initialize() {
        this.askManager();
    }

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

    endPrompts() {
        console.log(allEmpl)
    }
};

module.exports = Construction;