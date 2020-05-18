const Employee = require('./employee.js');
const { prompt } = require('inquirer');
const addManager = () => {
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
      name: 'officeNumber',
      message: 'Type in the office number',
    },
  ])
    .then((managerdata) => {
      console.log(managerdata);
    })
    .catch((err) => console.log(err));
};

class Manager extends Employee {
  constructor(name, id, title, officeNumber) {
    super(name, id, title);
    this.officeNumber = officeNumber;
  }
  getRole() {
    return super.getRole();
  }
}

const kim = new Manager('kim', 1, 'Manager', 1);
console.log(kim.getName());
console.log(kim.getId());
console.log(kim.getRole());
console.log(kim.getEmail('kim@email.com'));
console.log(kim.officeNumber);
