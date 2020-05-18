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
])
  .then(({ name, id, title, email }) => {
    addEmp(name, id, title, email);
  })
  .catch((err) => console.log(err));
addEmp = (name, id, title, email) => {
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
  const kim = new Employee(name, id, title, email);
  console.log(kim.getName());
  console.log(kim.getRole());
};

// class Employee {
//   constructor(name, id, title) {
//     this.name = name;
//     this.id = id;
//     this.title = title;
//   }

//   getName() {
//     return this.name;
//   }
//   getId() {
//     return this.id;
//   }
//   getEmail(email) {
//     return email;
//   }
//   getRole = () => {
//     return this.title;
//   };
// }
// module.exports = Employee;
