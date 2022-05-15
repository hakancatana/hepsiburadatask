# Hepsiburada Case Study

#### E2E & RESTAPI Automation with Cypress

This project aims to automate E2E and API automation.

**Project Structure**

```bash
├── cypress
│   ├── plugins           # launch config
│   ├── support           # custom commands
│       ├── pageObjects   # page objects
├── tests                 # automated tests
│   ├── api               # api specs
│   ├── e2e               # e2e specs
├── reports               # will be generated after run for HTML reports
├── cypress.env.json      # environment variables
├── cypress.json          # cypress config
├── package.json          # package.json
└── README.md
```

##### **Requirements**

- Node v12 or v14 or above
- Following environment variables should be filled in "cypress.env.json" on the project root. Example file is below;

```json
{
  "apiKey": "",
  "apiTestUser": {
    "username": "",
    "password": ""
  }
}
```

**Installations**

You need to run following commands;

`npm install`

Then open new terminal on project root

If you want to run all tests with GUI, you can run with below command:

`npm run cy:open`

If you want to run only e2e spec with chrome headless mode, you can run with below command:

`npm run cy:run-e2e-chrome`

If you want to run only e2e spec with firefox headless mode, you can run with below command:

`npm run cy:run-e2e-firefox`

If you want to run only api spec with a headless mode, you can run with below command:

`npm run cy:run-api`

If you want to run both e2e and api specs with chrome headless mode, you can run with below command:

`npm run cy:run-all`