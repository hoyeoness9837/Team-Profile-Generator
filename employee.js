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
    name: 'email',
    message: 'Type in the email',
  },
  {
    type: 'input',
    name: 'officeNumber',
    message: 'Type in the officeNumber',
  },
  {
    type: 'input',
    name: 'Github',
    message: 'Type in the Github username',
  },
  {
    type: 'input',
    name: 'school',
    message: 'Type in the school',
  },
])
  .then(({ name, id, title, email, officeNumber, Github, school }) => {
    addEmp(name, id, title, email, officeNumber, Github, school);
  })
  .catch((err) => console.log(err));
addEmp = (name, id, title, email, officeNumber, Github, school) => {
  class Employee {
    constructor(name, id, title, email) {
      this.name = name;
      this.id = id;
      this.title = title;
      this.email = email;
    }
    getName() {
      return this.name;
    }
    getId() {
      return this.id;
    }
    getRole() {
      return this.title;
    }
    getEmail() {
      return this.email;
    }
  }
  //manager
  class Manager extends Employee {
    constructor(name, id, title, email, officeNumber) {
      super(name, id, title, email);
      this.officeNumber = officeNumber;
    }
    getRole() {
      return super.getRole();
    }
  }
  //engineer
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
  //intern
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
  const manager = new Manager(name, id, title, email, officeNumber);
  const engineer = new Engineer(name, id, title, Github);
  const intern = new Intern(name, id, title, school);

  if (title === 'manager') {
    console.log(manager.getName());
    console.log(manager.getId());
    console.log(manager.getRole());
    console.log(manager.getEmail());
    console.log(manager.officeNumber);
  } else if (title === 'engineer') {
    console.log(engineer.getName());
    console.log(engineer.getId());
    console.log(engineer.getRole());
    console.log(engineer.getGithub());
  } else if (title === 'intern') {
    console.log(intern.getName());
    console.log(intern.getId());
    console.log(intern.getRole());
    console.log(intern.getSchool());
  }
};
