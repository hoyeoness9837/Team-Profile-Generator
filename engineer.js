const Employee = require('./employee.js');

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

module.exports = Engineer;

// const lee = new Engineer(name, id, title, Github);
// console.log(lee.getName());
// console.log(lee.getId());
// console.log(lee.getRole());
// console.log(lee.getGithub());
