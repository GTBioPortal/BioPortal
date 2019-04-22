BioPortal Junior Design Project
========

## Release Notes version BioPortal 1.0

### NEW FEATURES
* Admin Account Login/Registration
* Admin homepage to view list of employers and students
* Admin ability to approve new employer accounts
* Employer Account Login/Registration
* Employer homepage to view all their active job postings
* Employer ability to create new job postings
* Employer ability to edit job postings
* Employer page to view all student applications to job postings
* Student Account Login/Registration
* Student hoempage to view all available job postings
* Student page to view detailed information about job posting
* Student ability to apply to job
* Student settings page to view and upload resume, transcript, and cover letters


### BUG FIXES
* If python manage.py db upgrade fails it is likely because minor schema changes like field size are not updated with db migrate command. To fix this you need to alembic change to the generated file in migrations/versions.


### KNOWN BUGS
* When Admin views a specific job posting and uses browser back button the home page will have no data and user will need to refresh page
* Often the db upgrade command fails because the db upgrade function does not check minor schema changes.

## Getting Started With Development
To start clone repo and type `npm i` at root directory to import all required
packages.

Download backend code located [here](https://github.com/GTBioPortal/BioPortal_Backend) and run using python run.py or python3 run.py. The backend will run using MySQL database deployed on AWS RDS. To use another database or for local testing update SQLALCHEMY_DATABASE_URI in config.py and create database by running python manage.py db migrate followed by python manage.py db upgrade.

### React Developer Tools
Allows you to view React components in developer tools. Really useful for
debugging. Download for [Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) or [Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)

### Redux Developer Tools
Allows you to track Redux messages in developer tools. Also really useful for
debugging. Download for
[Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) or [Firefox](https://addons.mozilla.org/en-US/firefox/addon/remotedev/)

## Commands

These commands can be run from the root directory.

### `npm i`
Downloads all node modules defined in
[package.json](https://github.gatech.edu/mfraschilla3/BioPortal/blob/master/package.json).
Only needs to be ran once or any time packages are added/updated.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

---
## Project Structure

### src/actions

[Redux action generators](https://redux.js.org/basics/actions#action-creators)

### src/components

All react components. High level page components belong in src/pages

### src/containers

All component containers for redux. Similar to abstract classes. Current use
case is to handle displaying different types of modals while only using one
Redux reducer.

### src/data

Mock data for testing purposes until back-end is created.

## src/pages

High level page components. e.g. Student Homepage and Employer Homepage

## src/reducers
[Redux reducers](https://redux.js.org/basics/reducers). All reducers must be
added to combineReducers function in src/reducers/index.jsx

## src/styles
Style sheets for application. Each component should have its own stylesheet.
App wide styles should be done in app.scss and colors.scss contains all the
color constants for the application's color theme.

## store.jsx
[Redux store](https://redux.js.org/basics/store)
