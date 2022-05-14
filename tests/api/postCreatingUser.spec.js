describe("Create user", () => {
  let randomText = "";
  let randomId = "";

  before(() => {
    cy.generateRandomText().then((responseText) => {
      randomText = responseText;
    });

    cy.generateRandomId().then((responseId) => {
      randomId = responseId;
    });
  });

  it("POST/ user", () => {
    cy.request({
      url: Cypress.env("restApiUrl") + "user",
      method: "POST",
      body: {
        id: randomId,
        username: "testUsername_" + randomText,
        firstName: "testUserFirstName_" + randomText,
        lastname: "testUserLastName_" + randomText,
        email: "testUserEmail_" + randomText + "@yopmail.com",
        password: "testUserPassword_" + randomText,
        phone: "testUserPhone_" + randomText,
        userStatus: 0,
      },
    }).then((response) => {
      expect(response.status).eq(200);
      expect(response.body).not.to.be.oneOf([" ", null]);
      expect(response.body.code).to.be.eqls(200);
    });
  });
});
