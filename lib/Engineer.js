const Employee = require('../lib/Employee');

class Engineer extends Employee {
    
    constructor(name, id, email, role, github) {
        super(name, id, email, role);
        this.github = github
        this.role = 'Engineer'
    }

    getGithub() {
        return `https://github.com/${this.github}?tab=repositories`
    }
    
}

module.exports = Engineer;