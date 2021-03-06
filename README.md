# Interview Scheduler

**Interview Scheduler** is a single page application(SPA) built using React. The App allows users to book new interviews, edit and cancel existing interviews updating data in real time through React built-in and custom hooks. The list of days informs the user how many slots are available for each day and dynamically gets updated when an interview is booked or canceled.Data is persisted by the API server using a PostgreSQL database.The client application communicates with an API server over HTTP, using the JSON format.
The project follows best practices of TDD (Test Driven Development), where individual Components are tested in isolation as well as End-to-End testing is performed.


!["User can book an interview and Edit it"](https://github.com/srimantika/scheduler/blob/master/docs/creating%20a%20interview.gif?raw=true)

```
User books an interview in an empty slot successfully and Edits an existing interview. 
```

!["User edits an interview and cancels it"](https://github.com/srimantika/scheduler/blob/master/docs/Edit%20and%20Delete.gif?raw=true)
```
User edits an interview and then goes ahead and cancels an interview after confirmation.
```

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

## API server/Database Setup

For full functionality both must run concurrently: the client and the API server applications.

1. Start by forking and cloning the [scheduler-api server](https://github.com/lighthouse-labs/scheduler-api).
2. Follow the steps outlined in README to install and setup the database.
3. Fork and clone this repo.
4. Navigate to the root directory and install dependencies with npm install.
5. Once you have the database setup and the scheduler-api server running, run the following.
  command from the root directory of the project - npm start.


## Project Stack

- Front-End: React, Axios, JSX, HTML, SASS, JavaScript

- Back-End: Express, Node.js, PostgreSQL

- Testing: Storybook, Webpack Dev Server, Jest, Testing Library and Cypress