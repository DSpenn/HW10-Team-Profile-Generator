const Employee = require("../lib/Employee.js");

describe("Employee", () => {
  const employee = new Employee("Derek", 412, "blah@email.com");
  describe("Initialization", () => {
    it("should create an object with 'name', 'Id' number, and 'email' ", () => {
      // Verify that the new object has the correct properties
      expect(employee.name).toEqual("Derek");
      expect(employee.id).toEqual(412);
      expect(employee.email).toEqual("blah@email.com");
    });

  });
  describe("getName", () => {
    it("should return the employee's nme", () => {
      expect(employee.getname()).toEqual(employee.name);
    });
  });
  describe("getId", () => {
    it("should return the employee's Id", () => {
      expect(employee.getId()).toEqual(employee.id);
    });
  });
  describe("getEmail", () => {
    it("should return the employee's email", () => {
      expect(employee.getEmail()).toEqual(employee.email);
    });
  });
  describe("getRole", () => {
    it("should return the employee's role", () => {
      expect(employee.getRole()).toEqual("Employee");
    });
  });
});
