const { prompt } = require('inquirer');
const { promisify } = require('util');
const { writeFile } = require('fs').promises;

prompt([
  {
    type: 'input',
    name: 'memberCount',
    message: 'How many members on the team?',
  },
]).then(async (data) => {
  let members = [];
  for (i = 0; i < data.memberCount; i++) {
    members.push(
      await prompt([
        {
          type: 'input',
          name: 'memberName',
          message: 'Type in the name of this new member',
        },
        {
          type: 'input',
          name: 'memberId',
          message: 'Type in the Id of this new member',
        },
        {
          type: 'input',
          name: 'memberRole',
          message: 'Type in the role for this new member',
        },
        {
          type: 'input',
          name: 'memberEmail',
          message: 'Type in the email for this new member',
        },
        {
          type: 'input',
          name: 'specialProperty',
          message: 'Type in the name the school of this intern attended',
          when: ({ memberRole }) => {
            // when the memberRole is equal to Intern
            return memberRole === 'Intern' || memberRole === 'intern';
          },
        },
        {
          type: 'input',
          name: 'specialProperty',
          message: 'Type in the github username of this new engineer',
          when: ({ memberRole }) => {
            return memberRole === 'Engineer' || memberRole === 'engineer';
          },
        },
        {
          type: 'input',
          name: 'specialProperty',
          message: 'Type in the office number of this new manager',
          when: ({ memberRole }) => {
            return memberRole === 'Manager' || memberRole === 'manager';
          },
        },
      ])
    );
  }
  //append cards in team.html
  let membersHtml = members.reduce((total, member) => {
    let label = '';

    if (member.memberRole === 'Intern' || member.memberRole === 'intern') {
      label = 'School';
    } else if (
      member.memberRole === 'Manager' ||
      member.memberRole === 'manager'
    ) {
      label = 'Office Number';
    } else if (
      member.memberRole === 'Engineer' ||
      member.memberRole === 'engineer'
    ) {
      label = 'Github username';
    }

    return (
      total +
      `
    <div class="card">
      <div class="card-title">
        ${member.memberName}, ${member.memberRole}
      </div>
      <div class="card-body">
        <ul>
          <li>ID: ${member.memberId}</li>
          <li>Email: <a href="#">${member.memberEmail}</a></li>
          <li>${label}: ${member.specialProperty}</li>
        </ul>
      </div>
    </div>`
    );
  }, '');
  writeFile(
    './output/team.html',
    `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <nav>My Team members</nav>
    <div class="container">
    ${membersHtml}
    </div>
  </body>
</html>
`
  ).catch((err) => console.log(err));
});
