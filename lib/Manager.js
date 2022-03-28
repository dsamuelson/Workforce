const Employee = require('../lib/Employee');
// creates manager class that uses values and methods from Employee
class Manager extends Employee{
    
    constructor(name, id, email, officeNum) {
        super(name, id, email);
        this.officeNum = officeNum;
        this.role = "Manager";
    }
    getRole() {
        return 'Manager'
    }
}
// exports manager
module.exports = Manager;