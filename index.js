const inquirer = require('inquirer');  //import inquier
const fs = require('fs');           //import fs


var answersArray = [];
var cardsArray = [];
var htmlTemplate;
const closingHTML = ('</div></body></html>');

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
    fs.readFile("src/index.html", "UTF8", function(err, data) { // read file now reading later caused issues. 
        if (err) { throw err };
        htmlTemplate = data;
        //console.log(htmlTemplate);
    });
}

function mainMenu() {
        inquirer.prompt(menu).then((menuAnswers) => {
        //console.log("choice ", menuAnswers.menuChoice);
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
    var newHTML;
    for(var x=0; x < answersArray.length; x++) 
    {
        //console.log("answers array", x , " ", answersArray[x]);
        //console.log("answersArray", x, " ", answersArray[x].type);

        let card = (`<div class="card">
        <div class="card-header bg-transparent border-success">
            <h5 class="card-title">${answersArray[x].name}</h5>
            <h5 class="card-text">${answersArray[x].type}</h5>
        </div>
        <div class="card-body">
            <p class="card-text">ID: ${answersArray[x].id} </p>
            <p class="card-text">Email: <a>${answersArray[x].email} </p>
            <p class="card-text">${answersArray[x].school} ${answersArray[x].officeNumber} <a>${answersArray[x].github}</a> </p>
        </div>
        </div>`);
        //cardsArray.push(card);
        newHTML = newHTML + card;
        cardsArray.push(card);
    }
    //console.log("new html", newHTML);
    //console.log(htmlTemplate + newHTML);
    var finalHTML = htmlTemplate + newHTML + closingHTML;
    //
    console.log(finalHTML);

    //console.log("cards Array ", cardsArray);
    //console.log("html Template ", htmlTemplate);


        try {
        const data = fs.writeFileSync('dist/index.html', finalHTML)
        } catch (err) {
        console.error(err)
        }

//    answersArray.forEach(person => {
      //  console.log("person", person);
    //});
}

init();
