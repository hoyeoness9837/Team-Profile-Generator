const Employee = require('./employee.js');

class Engineer extends Employee {
  constructor(name, id, email, Github) {
    super(name, id, email);
    this.github = Github;
    this.title = 'Engineer';
  }
  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;
