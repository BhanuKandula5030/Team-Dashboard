# Team Dashboard App

## Overview

The Team Dashboard App is a web application built using React for managing and visualizing team-related information. This dashboard provides insights into team members, ongoing projects, team metrics, and collaboration within the team.

## Project Structure

- **`src/`**: Contains the source code of the React application.
    - **`Authenticator.js`**: Defines an authentication context for user login/logout.
    - **`App.js`**: The main component that integrates different sections of the dashboard.
    - **`App.css`**: Contains the styles logic for app component
    - **`MemberDetail.js`**: Component for displaying detailed information about a team member.
    - **`ProjectDetail.js`**: Component for displaying detailed information about a project.
    - **`TeamCollaboration.js`**: Component for team collaboration, including a message list and input.
    - **`TeamMember.js`**: Component for displaying basic information about a team member.
    - **`TeamMetrics.js`**: Component for displaying team metrics, such as project completion rate and member workload.
    - **`TeamProject.js`**: Component for displaying basic information about a team project.
- **`public/`**: Contains static assets and the HTML template.

## Dependencies

- **React**: A JavaScript library for building user interfaces.
- **Bootstrap**: A CSS framework for building responsive and visually appealing web applications.
- **React Bootstrap**: React components that are compatible with Bootstrap.
- **@testing-library**: Libraries for testing React components and user interactions.

## Scripts

- **`start`**: Start the development server.
- **`build`**: Build the production-ready version of the app.
- **`test`**: Run tests using Jest.

## How to Run

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the app locally using `npm start`.
4. Run the Test cases using `npm test`.
5. Access the app in your browser at [http://localhost:3000]or (http://localhost:3001).

## Authentication

The app provides a basic authentication system with a login modal. Certain features, such as viewing member details and project details, require authentication.

In this The team leads are given the user name and password to authenticate and view the additional member and project details

User name : admin

Password : admin

## Testing

The project includes unit tests for components using the Jest testing library.

The tests verifies each and every aspect works as expected.

Eah component tests are written in    - **`MemberDetail.test.js`**,**`ProjectDetail.test.js`**, **`TeamCollaboration.test.js`**, **`TeamMember.test.js`**, **`TeamMetrics.test.js`**,**`TeamProject.test.js`**

Run the test cases command : `npm test`.
