const Employee = require('./Employee');

class Engineer extends Employee 
{
    constructor(github) 
    {
        super(name,id,email);
        this.github = github;
    }

    getGithub() 
    {
        console.log(`github: ${this.github}`);
    }

    getRole() 
    {
        console.log(this);
    }//overridden to return `'Engineer'`

}