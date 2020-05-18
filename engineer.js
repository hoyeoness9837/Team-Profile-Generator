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
    name: 'Github',
    message: 'Type in the Github username',
  },
])
  .then((engineerdata) => {
    console.log(engineerdata);
  })
  .catch((err) => console.log(err));

class Engineer extends Employee {
  constructor(name, id, title, Github) {
    super(name, id, title);
    this.Github = Github;
  }
  getGithub() {
    return this.Github;
  }

  getRole() {
    return super.getRole();
  }
}

const lee = new Engineer(name, id, title, Github);
console.log(lee.getName());
console.log(lee.getId());
console.log(lee.getRole());
console.log(lee.getGithub());
