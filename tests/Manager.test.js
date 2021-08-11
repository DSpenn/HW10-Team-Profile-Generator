const Manager = require("../lib/Manager.js");

describe("Manager", () => {
  const manager = new Manager("Derek", 412, "blah@email.com", "412-867-5309");

  describe("Initialization", () => {
    it("should create an object with 'name', 'Id' number, 'email', and 'office phone number' ", () => {
      // Verify that the new object has the correct properties
      expect(manager.name).toEqual("Derek");
      expect(manager.id).toEqual(412);
      expect(manager.email).toEqual("blah@email.com");
      expect(manager.officeNumber).toEqual("412-867-5309");

    });
  });
  describe("getRole", () => {
    it("should return the managers role", () => {
      expect(manager.getRole()).toEqual("Manager");
    });
  });
});
