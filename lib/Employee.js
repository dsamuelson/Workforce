// takes the common methods and values from all categories of employees and creates an employee object and methods
class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role || 'Employee';
    }

    getName() {
        return this.name;
    }
    getId() {
        return this.id.toString();
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return this.role;
    }
}
// exports employee object
module.exports = Employee;