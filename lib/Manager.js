const Employee = require('../lib/Employee');

class Manager {
    super();
    constructor(officeNum) {
        this.officeNum = officeNum;
        this.role = "Manager"
    }
    getRole() {
        return 'Manager'
    }
}

module.exports = Manager;