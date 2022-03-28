const inquirer = require('inquirer');

// sets up questions for each group as well as shared questions
// manager unique questions
const managerQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: 'What is the Team Managers Name?',
        validate: nameInput => {
            if (!nameInput) {
                console.log('Please enter a valid name')
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'number',
        name: 'employeeId',
        message: 'Please enter employee ID number:',
        validate: empIdNum => {
            if (!empIdNum) {
                console.log('Please enter valid ID number');
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'employeeEmail',
        message: 'Please enter their email:',
        validate: emailInput => {
            if (!emailInput) {
                console.log('Please enter a valid email');
                return false;
            } else {
                return true;
            }
        }

    },
    {
        type: 'number',
        name: 'officeNum',
        message: 'Please enter their office number:',
        validate: officeNumInp => {
            if (!officeNumInp) {
                console.log('Please enter a valid office Number');
                return false;
            } else {
                return true;
            }
        }
    }
];
// questions that will be asked no matter the role
const allRoleQuestions = [
    {
        type: 'input',
        name: 'emplName',
        message: 'What is the Employees Name?',
        validate: nameInput => {
            if (!nameInput) {
                console.log('Please enter a valid name')
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'number',
        name: 'employeeId',
        message: 'Please enter employee ID number:',
        validate: empIdNum => {
            if (!empIdNum) {
                console.log('Please enter valid ID number');
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'employeeEmail',
        message: 'Please enter their email:',
        validate: emailInput => {
            if (!emailInput) {
                console.log('Please enter a valid email');
                return false;
            } else {
                return true;
            }
        }

    }
];
// questions that are specific to the engineers
const engineerQuestions = [
    {
        type: 'input',
        name: 'githubUN',
        message: 'Please enter the engineers GitHub username',
        validate: ghInput => {
            if (!ghInput) {
                console.log('Please enter a username');
                return false;
            } else {
                return true;
            }
        }
    }
];
// questions that are specific to the interns
const internQuestions = [
    {
        type: 'input',
        name: 'schoolName',
        message: "Which school do this intern belong to?",
        validate: snInput => {
            if (!snInput) {
                schoolName = 'No School Provided';
                return true;
            } else {
                return true;
            }
        }
    }
];
// export all the question arrays to be used in constructing the page
module.exports = {
    managerQuestions,
    allRoleQuestions,
    engineerQuestions,
    internQuestions
};