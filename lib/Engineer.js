const Employee = require('../lib/Employee');

// creates engineer class and builds github link
class Engineer extends Employee {
    
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github
        this.role = 'Engineer'
    }

    getGithub() {
        return `https://github.com/${this.github}?tab=repositories`
    }

    getRole() {
        return 'Engineer'
    }
    
}

module.exports = Engineer;