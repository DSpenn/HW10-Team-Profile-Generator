const inquirer = require('inquirer');  //import inquier
const fs = require('fs');           //import fs

var answersArray = [];

const menu = [
    {
        type: 'list',
        message: 'Main Menu',
        name: 'menuChoice',
        choices: ['Add Employee', 'Generate HTML', 'Exit'],
    },
];


const questions = [ //questions list for input
    {
        type: 'input',
        name: 'name',
        message: "What is this persons Name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "Employee ID?"
    },
    {
        type: 'input',
        name: 'email',
        message: "Employee Email?"
    },
    {
        type: 'list',
        message: 'Which type of employee are they?',
        name: 'type',
        choices: ['Engineer', 'Intern', 'Manager'],
    },
    {
        type: 'input',
        name: 'github',
        message: "What is this persons github?",
        when: (answers) => {
            if (answers.type === "Engineer") { return true;}}},
    {
        type: 'input',
        name: 'school',
        message: "Where does this person go to school?",
        when: (answers) => {
            if (answers.type === "Intern") { return true;}}},
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is this persons office phone number?",
        when: (answers) => {
            if (answers.type === "Manager") { return true;}}},
];

function init() {
    mainMenu();
}

function mainMenu() {
        inquirer.prompt(menu).then((menuAnswers) => {
        console.log("choice ", menuAnswers.menuChoice);
        if (menuAnswers.menuChoice==='Exit') process.exit();
        if (menuAnswers.menuChoice==='Add Employee') mainQuestions();
        if (menuAnswers.menuChoice==='Generate HTML') genHMTL(answersArray);
    });
}

function mainQuestions() {
    inquirer.prompt(questions).then((answers) => {
        //console.log(JSON.stringify(answers, null, '  '));
        //console.log(answers);
        answersArray.push(answers);
        mainMenu();
    });
}

function genHMTL() {
    //console.log("answersArray", answersArray);
    for(var x=0; x < answersArray.length; x++) {
        //console.log("answers array", x , " ", answersArray[x]);
        console.log("answersArray", x, " ", answersArray[x].type);
    }

    answersArray.forEach(person => {
        console.log("person", person);
        
    });
}

init();
