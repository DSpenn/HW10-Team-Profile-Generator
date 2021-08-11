const Intern = require('./Intern');

class Intern extends Employee 
{
    constructor(school) 
    {
        this.school = school;
        super(name,id,email);
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