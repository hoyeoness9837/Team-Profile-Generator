const Employee = require('./employee.js');

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    this.title = 'Manager';
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;
