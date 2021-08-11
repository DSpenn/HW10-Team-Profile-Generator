const Intern = require("../lib/Intern.js");

describe("Intern", () => {
  const intern = new Intern("Derek", 412, "blah@email.com", "PA");
  describe("Initialization", () => {
    it("should create an object with 'name', 'Id' number, 'email', and 'school' ", () => {
      // Verify that the new object has the correct properties
      expect(intern.name).toEqual("Derek");
      expect(intern.id).toEqual(412);
      expect(intern.email).toEqual("blah@email.com");
      expect(intern.school).toEqual("PA");
    });
  });
  describe("getRole", () => {
    it("should return the Interns role", () => {
      expect(intern.getRole()).toEqual("Intern");
    });
  });
  describe("getSchool", () => {
    it("should return the Interns School", () => {
      expect(intern.getSchool()).toEqual(intern.school);
    });
  });
});
