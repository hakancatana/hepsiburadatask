describe("Add a new pet and delete it", () => {
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

  // Adding a new pet to the store
  it("POST/ pet", () => {
    cy.request({
      url: Cypress.env("restApiUrl") + "pet",
      method: "POST",
      body: {
        id: randomId,
        category: {
          id: randomId,
          name: "testPetCategory_" + randomText,
        },
        name: "testPetName_" + randomText,
        photoUrls: [
          "https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg",
        ],
        tags: [
          {
            id: randomId,
            name: "petTag_" + randomText,
          },
        ],
        status: "available",
      },
    }).then((response) => {
      cy.log(JSON.stringify(response.body));
    });
  });

  // Delete the pet from the store
  it("DELETE/ pet", () => {
    cy.request({
      url: Cypress.env("restApiUrl") + "pet/" + randomId,
      method: "DELETE",
      headers: { "x-api-key": Cypress.env("apiKey") },
    }).then((response) => {
      expect(response.status).eq(200);
      expect(response.body).not.to.be.oneOf([" ", null]);
    });
  });
});
