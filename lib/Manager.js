const Employee = require('./Employee');

class Manager extends Employee 
{
    constructor(name,id,email,officeNumber) 
    {
        super(name,id,email);
        this.officeNumber = officeNumber;
    }

}

Manager.prototype.getRole = function(name) { 
    console.log(`role: Manager`);
    return "Manager";
};

module.exports = Manager;