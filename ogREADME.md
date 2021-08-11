# 09 Node.js Homework: Professional README Generator

## Description

A command-line application that dynamically generates a professional README.md file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer).

## Installation
```
npm init
npm install inquirer
```

## Usage
The application can be invoked by using the following command:
```
bash
node index.js
```

![Walkthrough Gif](assets/gif.gif)

## Video

[![Walkthrough Video]](https://user-images.githubusercontent.com/84486941/128105857-c72d8b75-4411-4cbf-8548-9028a09073d4.mp4)

## Sample

[A sample README.md file for a project repository generated using this application](Develop/README.md)

## Acceptance Criteria

- GIVEN a command-line application that accepts user input
- WHEN I am prompted for information about my application repository THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
- WHEN I enter my project title THEN this is displayed as the title of the README
- WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
- WHEN I choose a license for my application from a list of options THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
- WHEN I enter my GitHub username THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
- WHEN I enter my email address THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
- WHEN I click on the links in the Table of Contents THEN I am taken to the corresponding section of the README

## Grading Requirements


This homework is graded based on the following criteria:
- [X] A sample README generated using the application must be submitted.
- [X] Your GitHub repository containing your application code.
- [X] A walkthrough video that demonstrates the functionality of the README generator must be submitted, and a link to the video should be included in your README file.
- [X] The walkthrough video must demonstrate how a user would invoke the application from the command line.
- [X] The walkthrough video must demonstrate how a user would enter responses to all of the prompts in the application.
- [X] The walkthrough video must demonstrate a generated README that matches the user input and has a functioning table of contents.
- [X] Uses the [Inquirer package](https://www.npmjs.com/package/inquirer).
- [X] Repository has a unique name.
- [X] Repository follows best practices for file structure and naming conventions.
- [X] Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.
- [X] Repository contains multiple descriptive commit messages.
- [X] Repository contains a high-quality README with description and a link to walkthrough video.
- [X] A walkthrough video demonstrating the functionality of the application.
- [X] A sample README.md file for a project repository generated using your application [Sample](Develop/README.md)
- [X] The URL of the GitHub repository, with a unique name and a README describing the project
- [X] Repo includes a `package.json` with the required dependencies. 
- [X] Create a `.gitignore` file and include `node_modules/` and `.DS_Store/`