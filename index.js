const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./src/generateHTML");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const teamArray = [];

function addManager() {
  return inquirer.prompt([
      {
        type: "input",
        message: "Enter manager's name",
        name: "managersName",
      },
      {
        type: "input",
        message: "Enter manager's ID number",
        name: "managersId",
      },
      {
        type: "input",
        message: "Enter manager's email address",
        name: "managersEmail",
      },
      {
        type: "input",
        message: "Enter manager's office number",
        name: "managersOfficeNumber",
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.managersName,
        answers.managersId,
        answers.managersEmail,
        answers.managersOfficeNumber
      );
      teamArray.push(manager);
      managerChoice();
    });
}

function addEngineer() {
  return inquirer.prompt([
      {
        type: "input",
        message: "Enter engineer's name",
        name: "engineersName",
      },
      {
        type: "input",
        message: "Enter engineer's ID number",
        name: "engineersId",
      },
      {
        type: "input",
        message: "Enter engineers's email address",
        name: "engineersEmail",
      },
      {
        type: "input",
        message: "Enter engineer's Github ",
        name: "engineersGithub",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.engineersName,
        answers.engineersId,
        answers.engineersEmail,
        answers.engineersGithub
      );
      teamArray.push(engineer);
      managerChoice();
    });
}

function addIntern() {
  return inquirer.prompt([
      {
        type: "input",
        message: "Enter intern's name",
        name: "internsName",
      },
      {
        type: "input",
        message: "Enter interns's ID number",
        name: "internsId",
      },
      {
        type: "input",
        message: "Enter intern's email address",
        name: "internsEmail",
      },
      {
        type: "input",
        message: "Enter intern's school ",
        name: "internsSchool",
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.internsName,
        answers.internsId,
        answers.internsEmail,
        answers.internsSchool
      );
      teamArray.push(intern);
      managerChoice();
    });
}

function managerChoice() {
    inquirer
      .prompt([
        {
          type: "list",
          message: "Please select your team?",
          name: "employeeType",
          choices: ["Engineer", "Intern", "Save Team"],
        },
      ])
      .then((answers) => {
        switch (answers.employeeType) {
          case "Engineer":
            return addEngineer();
          case "Intern":
            return addIntern();
          case "Save Team":
            return save();
          default:
            break;
        }
        console.log(answers);
      });
  }

function save() {
  const employeeProfile = generateHTML(teamArray);

  fs.writeFile("index.html", employeeProfile, (error) => {
    if (error) {
      console.log(error);
    } else {
        console.log("Html file created")
    }
  });
}

addManager();
