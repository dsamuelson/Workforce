const Employee = require('../lib/Employee');

class Manager extends Employee{
    
    constructor(name, id, email, role, officeNum) {
        super(name, id, email, role);
        this.officeNum = officeNum;
        this.role = "Manager";
    }
    getRole() {
        return 'Manager'
    }
}

module.exports = Manager;