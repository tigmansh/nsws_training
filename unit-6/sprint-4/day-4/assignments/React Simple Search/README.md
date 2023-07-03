## React Simple Search

#### Problem Statement

Create the following application with the boilerplate code provided.

## Submission Instructions [Please note]

## Maximum Marks - 9

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ should make GET request and render initial groceries data  - 2 marks
 ✅ should be able to filter the grocery data on frontend - 2 marks
 ✅ should be able to filter the grocery data on frontend-2 - 2 marks
 ✅ should be able to show all data after the input box is cleared - 2 marks
```

## Installation

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- please make sure you do not push package-lock.json

- Download and unzip the boilerplate file and then copy the "**contents**" of the unzipped file in the Masai Folder.
- Navigate to the Masai Folder, in VS Code.
- Run the following commands inside,
  - `npm install --engine-strict`
  - `npm start`
  - `npm run server` -> to start the json-server
- **_Note_**:

1. Libraries need to be installed by yourself
2. Make sure that the json-server is up and running at port `8080`
3. Create a .env file. Include `REACT_APP_JSON_SERVER_PORT=8080` in it and restart the react server
4. Use `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}` as the json-server URL where ever you use `http://localhost:8080`

### Not following the above instructions will lead your test cases to fail

## Problem

**_Note_**: Make sure you start `json-server` on `8080` port with provided `db.json` file, then only you will be able to fetch data on this website.

## Understanding Component Structure

- Components
  - Dashboard.jsx
- App

**Note** - `Make sure you use only the given components and don't create new files and folders. Changing a component name, and structures might result in giving you zero marks.`

## Understanding Data Structure

- [db.json](./db.json)
  - Initial Groceries should be fetched using json-server only after the application opens.

**Note** - `Make sure you use only the given data and don't create new data. Changing data might result in giving you zero marks`

## Features to build

1. Create a react application for showing the list of groceries

2. Create an input box to search for groceries

3. The keyword typed in input box should filter the results displayed on DOM

4. The filtering should be done on frontend only, and the search should not be case-sensitive(The filtered results must contain the query text)


<img width="1727" alt="Screenshot 2023-01-24 at 1 52 21 PM" src="https://user-images.githubusercontent.com/39851506/215667848-83e1af00-57bf-4c3c-bc86-9b31c82bb558.png">

<img width="1725" alt="Screenshot 2023-01-24 at 1 52 38 PM" src="https://user-images.githubusercontent.com/39851506/215667938-d9792b28-e5fb-4adb-a4ef-d5da08ee1537.png">


## General Instructions (**_IMPORTANT_**)

1. Do not use Global CSS, instead use `<componentName>.module.css` convention for CSS in that file.
2. Do Not Remove `data-cy="xxxx"` from anywhere, this is used by testing tools to test your code, and removal of this will lead to a low score.
3. Make sure you use only the given components and don't create new files and folders as changing the component name, or structures might result in giving you zero marks
4. Make sure you use only the given data and don't create new data, as changing data might result in giving you zero marks.

**Note** - This might not be all the things, you are free to use other components.

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
