const inquirer = require('inquirer');  //import inquier
const fs = require('fs');           //import fs




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
        type: 'checkbox',
        message: 'Which type of employee are they?',
        name: 'type',
        choices: ['Engineer', 'Intern', 'Manager'],
    },

];

const moreQuestions;

function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(JSON.stringify(questions, null, '  '));
        console.log("answers.type")
        switch (answers.type) 
        {
            case Engineer:
                moreQuestions = [ //questions list for input
                    {
                        type: 'input',
                        name: 'github',
                        message: "What is this persons github?"
                    },
                ];
                break;
            case Intern:
                moreQuestions = [ //questions list for input
                    {
                        type: 'input',
                        name: 'github',
                        message: "What is this persons github?"
                    },
                ];
                break;
            case Manager:
                var moreQuestions = [ //questions list for input
                    {
                        type: 'input',
                        name: 'officeNumber',
                        message: "What is this persons office phone number?"
                    },
                ];
                break;
            default:
                break;
        }
    });

    inquirer.prompt(moreQuestions).then((moreAnswers) => {
        console.log(JSON.stringify(moreAnswers, null, '  '));
     });
}

init();

