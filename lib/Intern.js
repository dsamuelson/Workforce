const Employee = require('../lib/Employee');
// creates intern class that has unique school and method for it
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.role = 'Intern';
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return 'Intern';
    }
}
// exports intern class
module.exports = Intern;