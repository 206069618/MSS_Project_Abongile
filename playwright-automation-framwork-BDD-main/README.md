# MMS Project

## Overview
This project demonstrates the development of a basic Angular application along with automated testing using Playwright. The application includes a landing page where users can enter their names and receive a welcome message. The automation tests validate the application’s functionality, ensuring a smooth user experience.

## Getting Started

### Prerequisites
- Node.js (v18.x or later)
- NPM (comes with Node.js)
- Angular CLI (if you want to run the Angular application)
- json-server (optional for quick API setup)

### Installation
Clone the repository:

```bash
git clone <repository-url>
cd <repository-directory>
```

Navigate to the Angular application directory:

```bash
cd MMS Project_Abongile/MMS-Angular-Application
```

Install the required dependencies:

```bash
npm install
```

## Running the API Server
You have two options to run the API server:

### Option 1: Using Node.js and Express
Start the API server:

```bash
node server.js
```
The server will be running at [http://localhost:3000](http://localhost:3000).

### Option 2: Using json-server
Install json-server globally if you haven't already:

```bash
npm install -g json-server
```

Start json-server to serve db.json:

```bash
json-server --watch db.json --port 3000
```
The server will be running at [http://localhost:3000](http://localhost:3000).

## Running the Angular Application
Open another terminal window and navigate to the Angular application directory:

```bash
cd MMS Project_Abongile/MMS-Angular-Application
```

Serve the Angular application using the following command:

```bash
ng serve
```
You should see output similar to:

```
Initial chunk files | Names         |  Raw size
polyfills.js        | polyfills     |  90.20 kB |
styles.css          | styles        |  78.88 kB |
main.js             | main          |   6.58 kB |

                    | Initial total | 175.66 kB

Application bundle generation complete. [8.646 seconds]

Watch mode enabled. Watching for file changes...
NOTE: Raw file sizes do not reflect development server per-request transformations.
  ➜  Local:   http://localhost:4200/
```
Open your web browser and navigate to [http://localhost:4200/](http://localhost:4200/) to view the Angular application.

## Running Tests
To run the Playwright tests with a specific environment and tags, use the following command:

```bash
npm run test --ENV=DEV --TAGS=@welcome
```

## API Endpoints
- **GET /greetings**: Retrieves greetings from db.json.

**Response:**
```json
[
  {
    "id": 1,
    "message": "Welcome to MMS."
  }
]
```

- **GET /welcome**: Returns a welcome message.

**Response:**
```json
{
  "id": 1,
  "message": "Welcome to MMS."
}
```

## Framework Structure
Here is the top-level directory layout for the testing framework, along with comments describing the purpose of each directory and file:

```bash
├── config/cucumber.js                   # Main file for Cucumber settings like parallelization
├── test
│   ├── features                          # Contains Cucumber feature files
│   ├── helpers
│   │   ├── environment                   # Contains environment files with environment variables
│   │   ├── report                        # Files for report generation
│   │   ├── util                          # Contains generic utility functions
│   │   ├── BaseClass.ts                  # Contains fundamental methods like click and enter text
│   │   ├── browserHelper.ts              # Invokes and manages the browser instance
│   │   ├── customWorld                   # Custom world to store scenario-specific information
│   │   ├── hooks.ts                      # Hooks executed by Cucumber to manage workflow
│   │   ├── jsonHelper                    # Helps to get JSON objects from test data
│   ├── pages                             # Contains methods for interacting with each page
│   │   ├── Platform
│   │       ├── Page_Class                # Page class implementations for the platform
│   ├── steps                             # Contains step definitions for each page
│   │   ├── Platform
│   │       ├── Step_definition            # Step definitions for platform-related tests
│   ├── testData                          # Contains any test data files
│   ├── types                             # Contains type definitions for environment variables
│   ├── xpath                             # Contains XPath locators for all pages
│   │   ├── Platform
│   │       ├── WebElements/Locators      # Element locators for the platform
├── test-results                           # (gitignore) Contains reports, screenshots, and videos
├── .eslintrc.js                           # ESLint configuration file
├── .gitattributes                         # Git attributes file
├── .gitignore                             # Contains ignored files for Git
├── @rerun.txt                             # (gitignore) Contains failed scenario data for re-running
├── package-lock.json                      # Lock file for installed packages
├── package.json                           # Contains project metadata and dependencies
├── README.md                              # Project documentation
└── tsconfig.json                          # TypeScript compiler options
```

## Testing Framework
The Playwright testing framework is set up with Cucumber for behavior-driven development. The tests are organized in feature files and corresponding step definitions. The framework employs the Page Object Model (POM) design pattern to enhance maintainability and readability.

## Writing Tests
Tests are written in Gherkin syntax in .feature files located in the `test/features` folder. Step definitions are implemented in TypeScript files under the `test/steps` directory.

### Example Test
Here's an example of a feature file testing the welcome API:

```gherkin
Feature: Welcome API

  Scenario: Get welcome message
    Given I send a GET request to "/welcome"
    Then the response status should be 200
    And the response body should contain "Welcome"
```

## Conclusion
This project showcases the design and implementation of an automated testing framework using Playwright, emphasizing best practices in software testing and development. By adopting Behavior-Driven Development (BDD) principles and the Page Object Model (POM) design pattern, the framework enhances test maintainability and readability.

The structure of the framework facilitates clear separation of concerns, allowing for easy modifications and scalability. Feature files written in Gherkin syntax promote collaboration among team members, enabling stakeholders to understand the requirements and expected outcomes without needing deep technical knowledge. The organized directory structure ensures that developers can efficiently navigate and manage the testing assets, contributing to a streamlined development process.

### Integration with CI/CD
The framework's design makes it easy to integrate with CI/CD tools such as Jenkins and Azure DevOps. By configuring Jenkins to trigger Playwright tests on code commits, teams can ensure that any changes to the application are automatically validated. Similarly, integrating with Azure DevOps allows teams to automate the entire workflow, from building the Angular application to running tests and deploying to production.

This integration enhances code quality, reduces the likelihood of regressions, and accelerates release cycles, ultimately contributing to a more efficient development process.
