const Employee = require('./employee.js');

class Engineer extends Employee {
  constructor(name, id,email, Github) {
    super(name, id, email);
    this.github = Github;
    this.title= "Engineer"
  }
  getGithub() {
    return this.github;
  }


}

module.exports = Engineer;

// const lee = new Engineer(name, id, title, Github);
// console.log(lee.getName());
// console.log(lee.getId());
// console.log(lee.getRole());
// console.log(lee.getGithub());
