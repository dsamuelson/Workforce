const Employee = require('../lib/Employee');

class Engineer {
    constructor(github) {
        this.github = github
    }

    getGithub() {

    }
    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer;