const Engineer = require("../lib/Engineer.js");


describe("Engineer", () => {
    describe("Initialization", () => {
      it("should create an object with 'name', 'Id' number, 'email', and 'github' ", () => {
        const engineer = new Engineer("Derek", 412, "blah@email.com", "github");
  
        // Verify that the new object has the correct properties
        //expect(employee).toEqual({ Employee: [], name: "Derek" , id: "412", email:"blah@email.com", github:"github" });
        expect(engineer.name).toEqual("Derek");
        expect(engineer.id).toEqual(412);
        expect(engineer.email).toEqual("blah@email.com");
        expect(engineer.github).toEqual("github");

      });
    });

});