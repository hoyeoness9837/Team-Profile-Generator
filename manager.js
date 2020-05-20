const Employee = require('./employee.js');

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    this.title="Manager"
  }
  getOfficeNumber(){
    return this.officeNumber
  }

}

module.exports = Manager;

// const kim = new Manager(name, id, title, officeNumber);
// console.log(kim.getName());
// console.log(kim.getId());
// console.log(kim.getRole());
// console.log(kim.officeNumber);
