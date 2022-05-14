describe("Logging to Petstore", () => {
  it("GET/ user/login", () => {
    cy.request({
      url: Cypress.env("restApiUrl") + "user/login",
      method: "GET",
      qs: {
        username: Cypress.env("testUsername"),
        password: Cypress.env("testUserPassword"),
      },
    }).then((response) => {
      expect(response.status).eq(200);
      expect(response.body).not.to.be.oneOf([" ", null]);
      expect(response.body.message).to.be.contain("logged in user session");
    });
  });
});
