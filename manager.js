const Employee = require('./employee.js');

class Manager extends Employee {
  constructor(name, id, title, officeNumber) {
    super(name, id, title);
    this.officeNumber = officeNumber;
  }
  getRole() {
    return super.getRole();
  }
}

module.exports = Manager;

// const kim = new Manager(name, id, title, officeNumber);
// console.log(kim.getName());
// console.log(kim.getId());
// console.log(kim.getRole());
// console.log(kim.officeNumber);
