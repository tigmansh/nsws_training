## React Tic Tac Toe 

#### Problem Statement

Create the following application with the boilerplate code provided.

## Submission Instructions [Please note]

## Maximum Marks - 20

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ checking Basic Structure  - 2 marks
 ✅ check if X as winner works correctly - 2 marks
 ✅ check if O as winner works correctly - 2 marks
 ✅ check if the draw works correctly - 2 marks
 ✅ Toggling of player works correctly - 2 marks
 ✅ check if the click is not allowed on the filled square - 2 marks
 ✅ check if the click is not allowed after winning - 2 marks
 ✅ check if the click is not allowed after draw - 2 marks
 ✅ Restart button working as per the expectation - 3 marks
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


## Problem

## Understanding Component Structure

- Components
  - Game.jsx
  - Board.jsx
  - Square.jsx
- App.js

**Note** - `Make sure you use only the given components and don't create new files and folders. Changing the component name, and structures might result in giving you zero marks.`


## Features to build

Create a tic-tac-toe application that has the following features 
 
 1. There are two players X and O. Game starts with X
 2. When X plays his chance, the chance should get toggled to player O, and vice versa till the game is over
 3. When someone clicks any of the buttons the text content of the button should be changed to X(if X selects it) or O(if O selects it) based on the user who is selecting.(Initially keep the text content of the button as empty string)
 4. The game is over when either player wins, or its a draw
 5. Once a player has played his chance, he cannot change his answer
 6. Show the status in the div with class status in the boilerplate. There can be one of the following statuses: (case-sensitive values)
    - Next player: X
    - Next player: O
    - Winner: X
    - Winner: O
    - Draw
 7. Dont clear the tiles automatically when the game is over   
 8. There should be a button present to restart the game.(already provided, just add functionality)

 
 ## Understanding Component Structure
 
   1. Square.jsx : This will be the individual tiles (there need to be 9 such squares for the application)
   2. Board.jsx : This will have all the tiles (squares) in a 3x3 layout
   3. Game.jsx : This should have the entire game with Board, restart button and status
   
<img width="1726" alt="Screenshot 2023-01-24 at 12 13 13 PM" src="https://user-images.githubusercontent.com/39851506/214229541-d833ea9f-2466-49a0-bc87-e754676a3ffb.png">

   
<img width="1726" alt="Screenshot 2023-01-24 at 12 12 52 PM" src="https://user-images.githubusercontent.com/39851506/214229566-eee5de08-1ee1-4fdc-a34a-f2e702852469.png">



## General Instructions (**_IMPORTANT_**)

1. Do not use Global CSS, instead use `<componentName>.module.css` convention for Css in that file.
2. Do Not Remove `data-cy="xxxx"` from anywhere, this are used by testing tools to test your code, removal of this will lead to low score.
3. Make sure you use only the given components and dont create new files and folders as chaging component name, structures might result in giving you zero marks
4. Make sure you use only the given data and dont create new data, as chaging data might result in giving you zero marks.

**Note** - This might not be all the things, you are free to use other components.

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
