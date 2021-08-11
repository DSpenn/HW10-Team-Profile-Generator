const Intern = require('./Intern');

class Intern extends Employee 
{
    constructor(name,id,email,school) 
    {
        super(name,id,email);
        this.school = school;
    }

    getSchool() 
    {
        console.log(`School: ${this.school}`);
    }
    
    getRole()
    {
        console.log(this);
    }
}

module.exports = Intern;