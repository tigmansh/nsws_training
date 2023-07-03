// function fun() {
//     setTimeout(() => {
//       console.log("Hello World!");
//     }, 2000);
//   }
// //   fun();
//   process.nextTick(fun);

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// function add() {
//     let sum = 0;
//     for (let i = 1; i <= 1000000; i++) {
//       sum += i;
//     }
//     return sum;
//   }

//   const x = process.hrtime();
//   const res = add();
//   const y = process.hrtime(x);

//   console.log(x);
//   console.log(y);
//  console.log(`${y[1]} nanoseconds`);

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// const fs = require("fs");

// console.log("a"); // 1

// process.nextTick(() => console.log("b")); // 2

// Promise.resolve().then(() => console.log("c")); // 3

// setImmediate(() => console.log("d")); // 4 or 6

// setTimeout(() => console.log("e"), 0); // 4 or 6

// fs.readFile("file.txt", () => console.log("f")); // 5

// setInterval(() => console.log("g"), 1000); // 7
