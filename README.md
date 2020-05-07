# Catalan Cards 
Catalan Cards is a platform where aspiring polyglots can learn the Catalan language via the spaced repetition technique.

Following the spaced repetition technique, the words answered incorrectly will be repeated sooner. Furthermore, the more times you answer a word correctly, you will see it less frequently.

This tool is intended to help users learn a language through a proven and structured technique.

## Contributers 
- Jordan Castillo @jordanxcast
- Taylor Bradshaw  @stronghearth

## Live App
https://catalan-repetition.now.sh/register

### Deck
Check out our presentation deck [here](https://docs.google.com/presentation/d/1HEV20F8TuaffXLLDu4kLLc9mAj1KtUtVPJbpieUpfYQ/edit?usp=sharing) 
<br />

## Technology behind Catalan Cards
Frontend: 
- React.js
- Mobile first responsive design with CSS3
- Semantic HTML5 <br />
Backend: 
- Node.js
- Express
- Knex <br />
Database: 
- PostgreSQL

## API Repo
https://github.com/jordanxcast/spaced-repetition-api


- - - - 



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Setup

To setup the application

1. Fork and clone the project to your machine
2. `npm install`. This will also install the application *Cypress.io* for running browser integration tests

The project expects you have the Spaced repetition API project setup and running on http://localhost:8000.

Find instructions to setup the API here https://github.com/Thinkful-Ed/spaced-repetition-api.

## Running project

This is a `create-react-app` project so `npm start` will start the project in development mode with hot reloading by default.

## Running the tests

This project uses [Cypress IO](https://docs.cypress.io) for integration testing using the Chrome browser.

Cypress has the following expectations:

- You have cypress installed (this is a devDependency of the project)
- You have your application running at http://localhost:3000.
  - You can change the address of this expectation in the `./cypress.json` file.
- Your `./src/config.js` is using http://localhost:8000/api as the `API_ENDPOINT`

To start the tests run the command:

```bash
npm run cypress:open
```

On the first run of this command, the cypress application will verify its install. Any other runs after this, the verification will be skipped.

The command will open up the Cypress application which reads tests from the `./cypress/integration/` directory. You can then run individual tests by clicking on the file names or run all tests by clicking the "run all tests" button in the cypress GUI.

Tests will assert against your running localhost client application.

You can also start all of the tests in the command line only (not using the GUI) by running the command:

```bash
npm run cypress:run
```

This will save video recordings of the test runs in the directory `./cypress/videos/`.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

