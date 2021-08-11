class Employee {
    constructor(name,id,email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

getName() {
    console.log(`Name: ${this.name}`);
}

getId() {
    console.log(`Id: ${this.id}`);
}

getEmail() {
    console.log(`Email: ${this.email}`);
}

getRole() {
    console.log(this); // ?????????????????
} //returns 'Employee'

}


Employee.prototype.getname = function(name) { 
    console.log(`Name: ${this.name}`);
    return this.name;
  };

module.exports = Child;

