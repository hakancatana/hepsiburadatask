// Generate random text
Cypress.Commands.add("generateRandomText", () => {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";

  for (let i = 0; i < 10; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
});

// Generate random id
Cypress.Commands.add("generateRandomId", () => {
  let text = "";
  const possible =
      "1234567890";

  for (let i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
});