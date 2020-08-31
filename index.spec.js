const getAboutUsLink = require("./index");

test("Return about-us for english language", () => {
    expect(getAboutUsLink("en-US")).toBe("/about-us");
});

test("Return acerca-de for spanish language", () => {
    expect(getAboutUsLink("es-ES")).toBe("/acerca-de");
});
