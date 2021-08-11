const Employee = require('./Employee');

class Engineer extends Employee 
{
    constructor(name,id,email,github) 
    {
        super(name,id,email);
        this.github = github;
    }
}

Engineer.prototype.getGithub = function(name) { 
    console.log(`Github: ${this.github}`);
    return this.github;
};

Engineer.prototype.getRole = function(name) { 
    console.log(`Role: Engineer}`);
    return "Engineer";
};

module.exports = Engineer;