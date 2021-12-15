# Interview Scheduler

Interview Scheduler is a single page application(SPA) built using React. The App allows users to book new interviews, edit and cancel existing interviews updating data in real time through React built-in and custom hooks. The list of days informs the user how many slots are available for each day and dynamically gets updated when an interview is booked or canceled.Data is persisted by the API server using a PostgreSQL database.The client application communicates with an API server over HTTP, using the JSON format.
The project follows best practices of TDD (Test Driven Development), where individual Components are tested in isolation as well as End-to-End testing is performed.


!["User can book an interview and Edit it"](https://github.com/srimantika/scheduler/blob/master/docs/creating%20a%20interview.gif?raw=true)

```
User book an interview in an empty slot successfully and Edits an existing interview. 
```

!["User edits an interview and cancels it"](https://github.com/srimantika/scheduler/blob/master/docs/Edit%20and%20Delete.gif?raw=true)
```
User edits an interview and cancels an interview after confirmation.
```

!["User gets an Error"](https://github.com/srimantika/scheduler/blob/master/docs/Error%20Mode.gif?raw=true)
```
User gets an appropriate error incase the app is not able to create a new interview or delete an existing interview

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## API server/*Database Setup
```sh
For full functionality both must run concurrently: the client and the API server applications.

- Start by forking and cloning the scheduler-api server [here](https://github.com/lighthouse-labs/scheduler-api)
- Follow the steps outlined in README to install and setup the database
- Fork and clone this repo
- Navigate to the root directory and install dependencies with npm install
- Once you have the database setup and the scheduler-api server running, run the following command from the root directory of the project npm start.
```

## Project Stack
```sh
Front-End: React, Axios, JSX, HTML, SASS, JavaScript

Back-End: Express, Node.js, PostgreSQL

Testing: Storybook, Webpack Dev Server, Jest, Testing Library and Cypress
```