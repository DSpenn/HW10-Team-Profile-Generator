const { it, expect } = require("@jest/globals");
const { describe } = require("yargs");
const Employee = require("../lib/Employee.js");

describe("Employee", () => {
    describe("Initialization", () => {
      it("should create an object with 'name', 'Id' number, and 'email' ", () => {
        const employee = new Employee("Derek", 412, "blah@email.com");
  
        // Verify that the new object has the correct properties
        //expect(employee).toEqual({ Employee: [], name:"Derek" , id:412, email:"blah@email.com" });
        expect(employee.name).toEqual("Derek");
        expect(employee.id).toEqual(412);
        expect(employee.email).toEqual("blah@email.com");
      });

    });
    describe("GetName", () => {
        it("should return the employees name") , () => {
            expect(
    })

});