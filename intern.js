const Employee = require('./employee.js');
const { prompt } = require('inquirer');
const addIntern = () => {
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
  ])
    .then((interndata) => {
      console.log(interndata);
    })
    .catch((err) => console.log(err));
};

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

const park = new Intern('park', 3, 'Intern', 'UCSB');
console.log(park.getName());
console.log(park.getId());
console.log(park.getRole());
console.log(park.getEmail('park@email.com'));
console.log(park.getSchool());
