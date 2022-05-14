describe("Get available pet and update it", () => {
  let randomText = "";

  before(() => {
    cy.generateRandomText().then((responseText) => {
      randomText = responseText;
    });
  });

  it("GET/ pet/findByStatus", () => {
    cy.request({
      url: Cypress.env("restApiUrl") + "pet/findByStatus",
      method: "GET",
      qs: {
        status: "available",
      },
    }).then((response) => {
      expect(response.status).eq(200);
      expect(response.body).to.be.an("array");
    });
  });

  // Successful updating
  it("POST/ pet", () => {
    cy.request({
      url: Cypress.env("restApiUrl") + "pet/1",
      form: true,
      body: {
        name: "updateTest_" + randomText,
        status: "available",
      },
    }).then((response) => {
      expect(response.status).eq(200);
      expect(response.body).not.to.be.oneOf([" ", null]);
    });
  });

  // Unsuccessfully updating
  it("POST/ pet", () => {
    cy.request({
      url: Cypress.env("restApiUrl") + "pet/0",
      form: true,
      failOnStatusCode: false,
      body: {
        name: "updateTest_" + randomText,
        status: "available",
      },
    }).then((response) => {
      expect(response.status).eq(404);
      expect(response.body.message).to.be.eqls("Pet not found");
    });
  });
});
