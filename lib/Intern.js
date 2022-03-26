const Employee = require('../lib/Employee');

class Intern {
    constructor(school) {
        this.school = school;
    }
    getSchool() {

    }
    getRole() {
        return 'Intern';
    }
}