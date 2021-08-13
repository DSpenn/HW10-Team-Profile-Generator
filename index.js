const inquirer = require('inquirer'); //import inquier
const fs = require('fs'); //import fs

var answersArray = [];
var cardsArray = [];
var htmlTemplate;

const menu = [{ //main menu
  type: 'list',
  message: 'Main Menu',
  name: 'menuChoice',
  choices: ['Add Employee', 'Generate HTML', 'Exit'],
}, ];

const questions = [{ //questions list for input
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
      if (answers.type === "Engineer") {
        return true; }}},
  {
    type: 'input',
    name: 'school',
    message: "Where does this person go to school?",
    when: (answers) => {
      if (answers.type === "Intern") {
        return true; }}},
  {
    type: 'input',
    name: 'officeNumber',
    message: "What is this persons office phone number?",
    when: (answers) => {
      if (answers.type === "Manager") {
        return true; }}},
];

function init() {
  mainMenu();
  fs.readFile("src/index.html", "utf8", function(err, data) { // readfile
    if (err) {
      throw err
    };
    htmlTemplate = data;
  });
}

function mainMenu() {
  inquirer.prompt(menu).then((menuAnswers) => { 
    if (menuAnswers.menuChoice === 'Exit') process.exit();
    if (menuAnswers.menuChoice === 'Add Employee') mainQuestions();
    if (menuAnswers.menuChoice === 'Generate HTML') genHMTL(answersArray);
  });
}

function mainQuestions() {
  inquirer.prompt(questions).then((answers) => {
    answersArray.push(answers); // add answers to array incase another employee is added
    mainMenu();
  });
}

function genHMTL() {
  var newHTML;
  var typeBasedCardText; 

  for (var x = 0; x < answersArray.length; x++) { 
    switch (answersArray[x].type) { // switch for role/type based input
      case "Engineer":
        typeBasedCardText = (`GitHub: <a href="${answersArray[x].github}">${answersArray[x].github}</a>`);
        break;
      case "Intern":
        typeBasedCardText = (`School: ${answersArray[x].school}`);
        break;
      case "Manager":
        typeBasedCardText = (`Office Number: ${answersArray[x].officeNumber}`);
        break;
    }

    let card = (`
    <div class="card">
    <div class="card-header bg-transparent border-success">
        <h5 class="card-title">${answersArray[x].name}</h5>
        <h5 class="card-text">${answersArray[x].type}</h5>
    </div>
    <div class="card-body">
            <p class="card-text">ID: ${answersArray[x].id} </p>
            <p class="card-text">Email: <a href="mailto: ${answersArray[x].email}">${answersArray[x].email}</a></p>
            <p class="card-text">${typeBasedCardText}</p>
    </div>
    </div>`);
    cardsArray.push(card);
  }
  cardsArray.forEach(element => { newHTML += element }); //combine cards array into newHTML var

  const closingHTML = (`</div></body></html>`);
  var finalHTML = htmlTemplate + newHTML + closingHTML; //combine the template, with the cards/people, and the closing html
  finalHTML = finalHTML.replace("undefined", ""); // reading my src/index.html adds an undefined to the end of the file.. I have no idea why.. if someone could please reach out to me and explain that would be great.

  try {
    fs.writeFileSync('dist/index.html', finalHTML)
  } catch (err) {
    console.error(err)
  }
}

init();
