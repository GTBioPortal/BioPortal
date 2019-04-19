BioPortal Junior Design Project
========

## Release Notes version BioPortal 1.0

### NEW FEATURES

## BUG FIXES

## KNOWN BUGS

## Getting Started With Development
To start clone repo and type `npm i` at root directory to import all required
packages.

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
