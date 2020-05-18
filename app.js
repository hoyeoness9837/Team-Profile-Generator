const { prompt } = require('inquirer');

//let user can choose which role they want to add
// const mainMenu = () => {
//   prompt({
//     type: 'list',
//     name: 'action',
//     message: 'Which new role you want to add?',
//     choices: ['Manager', 'Engineer', 'Intern', 'EXIT'],
//   })
//     .then(({ action }) => {
//       switch (action) {
//         case 'Manager':
//           addManager();
//           break;
//         case 'Engineer':
//           addEnginner();
//           break;
//         case 'Intern':
//           addIntern();
//           break;
//         case 'EXIT':
//           process.exit();
//           break;
//       }
//     })
//     .catch((err) => console.log(err));
// };
// mainMenu();