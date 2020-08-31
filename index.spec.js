const getAboutUsLink = require("./index");

test("Return about-us for english language", () => {
    expect(getAboutUsLink("en-US")).toBe("/about-us");
});