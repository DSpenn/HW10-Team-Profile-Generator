const Employee = require('./Employee');

class Intern extends Employee 
{
    constructor(name,id,email,school) 
    {
        super(name,id,email);
        this.school = school;
    }
}

Intern.prototype.getSchool = function(name) { 
    console.log(`School: ${this.school}`);
    return this.school;
};

Intern.prototype.getRole = function(name) { 
    console.log("Role: Intern");
    return "Intern";
};

module.exports = Intern;