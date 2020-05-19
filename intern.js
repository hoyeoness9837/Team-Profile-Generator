const Employee = require('./employee.js');
class Intern extends Employee {
  constructor(name, id, title, school) {
    super(name, id, title);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }

  getRole() {
    return super.getRole();
  }
}

module.exports = Intern;

// const park = new Intern(name, id, title, school);
// console.log(park.getName());
// console.log(park.getId());
// console.log(park.getRole());
// console.log(park.getEmail());
// console.log(park.getSchool());
