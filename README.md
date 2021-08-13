# 10 Object-Oriented Programming: Team Profile Generator

## Description

A Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.
Application uses [Jest](https://www.npmjs.com/package/jest) for running the unit tests and [Inquirer](https://www.npmjs.com/package/inquirer) for collecting input from the user.

## Table of Contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [UserStory](#User-Story)
- [AcceptanceCriteria](#Acceptance-Criteria)
- [Mock-Up](#Mock-Up)
- [Video](#Video)
- [Sample](#Sample)
- [DirectoryStructure](#Directory-Structure)
- [GradingRequirements](#Grading-Requirements)

## Installation
```bash
npm i
```
## Usage
```bash
node index.js
```

## User-Story

```md
AS A manager I WANT to generate a webpage that displays my team's basic info SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance-Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username THEN that GitHub profile opens in a new tab
WHEN I start the application THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number THEN I am presented with a menu with the option to add an engineer or intern or to finish building my team
WHEN I select the engineer option THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team THEN I exit the application, and the HTML is generated
```

## Mock-Up

The following image shows a mock-up of the generated HTML’s appearance and functionality:
![HTML webpage titled “My Team” features five boxes listing employee names, titles, and other key info.](./Assets/10-object-oriented-programming-homework-demo.png)

## Video
[![Walkthrough Video]](https://user-images.githubusercontent.com/84486941/129303076-232a06f0-c0ca-4a38-a6e4-4775baf91b28.mp4)

## Sample
[https://github.com/DSpenn/HW10-Team-Profile-Generator/blob/main/dist/index.html](https://github.com/DSpenn/HW10-Team-Profile-Generator/blob/main/dist/index.html)

## Directory-Structure
```md
tests/			         jest tests
  Employee.test.js
  Engineer.test.js
  Intern.test.js
  Manager.test.js
dist/          rendered output (HTML)
lib/				   classes
src/				   Html template
index.js			 runs the application
```

## Grading-Requirements
```md
The application must include `Employee`, `Manager`, `Engineer`, and `Intern` classes. The tests for these classes (in the `_tests_` directory) must ALL pass.
[X] `Employee` parent class with the following properties and methods: `name` * `id` * `email` * `getName()` * `getId()` * `getEmail()` * `getRole()`
[X] `Manager` will also have the following: In addition to `Employee`'s properties and methods, [] `officeNumber` * `getRole() 
[X] `Engineer` will also have the following: In addition to `Employee`'s properties and methods, `github` &mdash;GitHub username * `getGithub()` * `getRole()`
[X] `Intern` will also have the following: In addition to `Employee`'s properties and methods, `school` * `getSchool()` * `getRole()

[X] A sample HTML file generated using the application must be submitted.
[X] Your GitHub repository containing your application code.
[X] A walkthrough video that demonstrates the functionality of the Team Profile Generator and passing tests must be submitted, and a link to the video should be included in your README file.
[X] The walkthrough video must show all four tests passing from the command line.
[X] The walkthrough video must demonstrate how a user would invoke the application from the command line.
[X] The walkthrough video must demonstrate how a user would enter responses to all of the prompts in the application.
[X] The walkthrough video must demonstrate a generated HTML file that matches the user input.
[X] A walkthrough video that demonstrates the functionality of the application and passing tests.
[X] Uses the [Inquirer package](https://www.npmjs.com/package/inquirer).
[X] Uses the [Jest package](https://www.npmjs.com/package/jest) for a suite of unit tests.
[X] The application must have `Employee`, `Manager`, `Engineer`, and `Intern` classes.
[X] Repository has a unique name.
[X] Repository follows best practices for file structure and naming conventions.
[X] Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.
[X] Repository contains multiple descriptive commit messages.
[X] Repository contains a high-quality readme with description and a link to a walkthrough video.
[X] A sample HTML file generated using your application.
[X] The URL of the GitHub repository, with a unique name and a readme describing the project.
```
