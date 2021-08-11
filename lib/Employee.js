class Employee {
    constructor(name,id,email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

}

Employee.prototype.getname = function(name) { 
    console.log(`Name: ${this.name}`);
    return this.name;
  };

Employee.prototype.getId = function(name) { 
    console.log(`Id: ${this.id}`);
    return this.id;
  };
  
Employee.prototype.getEmail = function(name) { 
    console.log(`email: ${this.email}`);
    return this.email;
  };

Employee.prototype.getRole = function(name) { 
    console.log(`role: Employee`);
    return "Employee";
  };


module.exports = Employee;

