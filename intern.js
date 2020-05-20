const Employee = require('./employee.js');
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
    this.title= "Intern"
  }
  getSchool() {
    return this.school;
  }


}

module.exports = Intern;

// const park = new Intern(name, id, title, school);
// console.log(park.getName());
// console.log(park.getId());
// console.log(park.getRole());
// console.log(park.getEmail());
// console.log(park.getSchool());
