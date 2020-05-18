// const Employee = require('./employee.js');
const { prompt } = require('inquirer');
prompt([
  {
    type: 'input',
    name: 'name',
    message: 'Type in the name',
  },
  {
    type: 'input',
    name: 'id',
    message: 'Type in the id',
  },
  {
    type: 'input',
    name: 'title',
    message: 'Type in the title',
  },
  {
    type: 'input',
    name: 'school',
    message: 'Type in the school name',
  },
]);
Employee.then((name, id, title, school) => {
  addIntern(name, id, title, school);
}).catch((err) => console.log(err));

addIntern = (name, id, title, school) => {
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

  const park = new Intern(name, id, title, school);
  console.log(park.getName());
  console.log(park.getId());
  console.log(park.getRole());
  console.log(park.getEmail());
  console.log(park.getSchool());
};
