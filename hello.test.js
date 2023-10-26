const hello = require("./hello");
describe("My hello", () => {
  test("works", () => {
    expect(hello.hello()).toEqual("Hello World from Ridgewood, NJ in all its fall glory!!!");
  });
});
